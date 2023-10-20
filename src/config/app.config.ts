interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['System Administrator'],
  customerRoles: [],
  tenantRoles: ['System Administrator', 'Toll Operator'],
  tenantName: 'Operator',
  applicationName: 'Vehicle Toll Payment System',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage users',
    'Manage operators',
    'Manage vehicles',
    'Manage toll booths',
    'Manage payments',
    'Manage journeys',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/7eb40594-8b9e-444f-997f-efd221da0ded',
};
