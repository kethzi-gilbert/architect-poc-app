// This Lambda Function connects to the martech utils library and fetches information of all markets
import { getAllMarketInfo, MarketInfo } from "@ilc-technology/env-utils";

export async function handler(request: any, context: any): Promise<any> {
  try {
    const markets: MarketInfo[] = getAllMarketInfo();

    return {
      markets,
    };
  } catch (e) {
    return {
      status: 502,
      json: {
        name: e.name,
        message: e.message,
        stack: e.stack,
      },
    };
  }
}
