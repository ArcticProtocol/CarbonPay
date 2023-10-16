export default class Nonprofit {
  id: string;
  name: string;
  icon_url: string;
  categories: string[];
  website: string;
  displayImapct: string[];
  solanaAddress: string;

  constructor(
    id: string,
    name: string,
    icon_url: string,
    categories: string[],
    website: string,
    displayImapct: string[],
    solana_address: string,
  ) {
    this.id = id;
    this.name = name;
    this.icon_url = icon_url;
    this.categories = categories;
    this.website = website;
    this.displayImapct = displayImapct;
    this.solanaAddress = solana_address;
  }

  static fromJson(data: any) {
    return new Nonprofit(
      data['id'],
      data['name'],
      data['icon_url'],
      data['categories'],
      data['website'],
      data['display_impact'],
      data['crypto']['solana_address'],
    );
  }
}
