export class Constants {
  static apiEndpoint = 'https://api.getchange.io/api/v1/';
  private headerPublicKey?: string;
  private headerSecretKey?: string;

  set setPublicKey(publicKey: string) {
    this.headerPublicKey = publicKey;
  }

  set setSecretKey(secretKey: string) {
    this.headerSecretKey = secretKey;
  }

  public get headerPublic() {
    return this.headerPublicKey;
  }
  get headerSecret() {
    return this.headerSecretKey;
  }
}
