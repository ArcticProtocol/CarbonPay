import {ApiService} from './src/api/api_service';
import {Constants} from './src/api/constants';

type HeaderInitParams = {
  publicKey: string;
  secretKey: string;
};

export default class ChangeOrg {
  private static instance: ChangeOrg;
  private constants: Constants;
  private apiService: ApiService;

  constructor() {
    this.constants = new Constants();
    this.apiService = new ApiService(this.constants);
  }

  init({publicKey, secretKey}: HeaderInitParams) {
    this.constants.setPublicKey = publicKey;
    this.constants.setSecretKey = secretKey;
  }

  get api() {
    return this.apiService;
  }

  static get getInstance(): ChangeOrg {
    if (!ChangeOrg.instance) {
      ChangeOrg.instance = new ChangeOrg();
    }
    return ChangeOrg.instance;
  }
}
