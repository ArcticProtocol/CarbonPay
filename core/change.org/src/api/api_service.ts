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
import Nonprofit from '../models/nonprofit';
import base64 from 'react-native-base64';

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

    const authHeader = base64.encode(
      `${this.constants.headerPublic}:${this.constants.headerSecret}`,
    );
    this.axiosInstance = axios.create({
      baseURL: Constants.apiEndpoint,
      headers: {
        Authorization: authHeader,
      },
      // auth: {
      //   username: this.constants.headerPublic,
      //   password: this.constants.headerSecret,
      // },
    });
  }

  public async createOffsetDraft(params: CreateOffsetDraftRequest) {
    try {
      let config: AxiosRequestConfig = {
        params: params,
      };

      let result = await this.axiosInstance.get(
        '/climate/crypto_offset/',
        config,
      );
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

      let result = await this.axiosInstance.post(
        '/climate/crypto_offset/',
        config,
      );
      return CreateOffsetResponse.fronJson(result);
    } catch (error) {
      if (error === AxiosError) {
        throw error;
      } else {
        console.log({error});
      }
    }
  }

  public async fectchNonProfits() {
    try {
      let config: AxiosRequestConfig = {
        data: {
          public_key: this.constants.headerPublic,
          page: 1,
          limit: 20,
        },
      };

      let nonprofits: Nonprofit[] = [];

      let result = await this.axiosInstance.get('/nonprofits/', config);

      result.data.nonprofits.forEach((e: any): void => {
        nonprofits.push(Nonprofit.fromJson(e));
      });

      return nonprofits;
    } catch (error) {
      if (error === AxiosError) {
        throw error;
      } else {
        console.log({error});
      }
    }
  }
}
