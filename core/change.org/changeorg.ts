import {ApiService} from './src/api/api_service';
import {Constants} from './src/api/constants';

type HeaderInitParams = {
  publicKey: string;
  secretKey: string;
};

export default class ChangeOrg {
  private static instance: ChangeOrg;
  private constants?: Constants;
  private apiService?: ApiService;

  constructor() {}

  init({publicKey, secretKey}: HeaderInitParams) {
    this.constants = new Constants();

    this.constants.setPublicKey = publicKey;
    this.constants.setSecretKey = secretKey;

    this.apiService = new ApiService(this.constants);
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
