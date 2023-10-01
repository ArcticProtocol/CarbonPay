import axios, {AxiosInstance, AxiosRequestConfig, AxiosError} from 'axios';
import {Constants} from './constants';
import {
  CreateOffsetDraftRequest,
  CreateOffsetRequest,
} from '../models/create_offset_request';
import {
  CreateOffsetDraftResponse,
  CreateOffsetResponse,
} from '../models/create_offset_reponse';

export class ApiService {
  private axiosInstance: AxiosInstance;
  private constants: Constants;

  constructor(constants: Constants) {
    this.constants = constants;

    if (!this.constants.headerPublic || !this.constants.headerSecret) {
      throw Error(
        'Failed to initialize Change.org APIs, make sure to call the init method',
      );
    }

    this.axiosInstance = axios.create({
      baseURL: Constants.apiEndpoint,
      auth: {
        username: this.constants.headerPublic,
        password: this.constants.headerSecret,
      },
    });
  }

  public async createOffsetDraft(params: CreateOffsetDraftRequest) {
    try {
      let config: AxiosRequestConfig = {
        params: params,
      };

      let result = await this.axiosInstance.get('/crypto_offset/', config);
      return CreateOffsetDraftResponse.fronJson(result);
    } catch (error) {
      if (error === AxiosError) {
        throw error;
      } else {
        console.log({error});
      }
    }
  }

  public async createOffset(body: CreateOffsetRequest) {
    try {
      let config: AxiosRequestConfig = {
        data: body,
      };

      let result = await this.axiosInstance.post('/crypto_offset/', config);
      return CreateOffsetResponse.fronJson(result);
    } catch (error) {
      if (error === AxiosError) {
        throw error;
      } else {
        console.log({error});
      }
    }
  }
}
