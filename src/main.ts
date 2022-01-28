import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ConsumerData, setConsumerData } from '@bento/bento-ng';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

/**
 * Consumer Data to be provided by the Bento NG consumer
 *
 * Please provide the Asset ID for your TR Product Group.
 * Your Asset ID can be found at: https://assets.int.thomsonreuters.com/Products
 *
 * */
const consumerData: ConsumerData = {
  assetId: 202241, // Your six digit Asset ID
};
/**
 * Call the function to push up the data
 * */
setConsumerData(consumerData);

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  // eslint-disable-next-line no-console
  .catch((err) => console.error(err));
