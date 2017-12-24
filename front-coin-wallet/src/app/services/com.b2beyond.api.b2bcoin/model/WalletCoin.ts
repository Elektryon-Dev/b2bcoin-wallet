/**
 * 
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import * as models from './models';

export interface WalletCoin {
    name?: string;

    rpcPortDaemon?: number;

    rpcPortWallet?: number;

    fractionDigits?: number;

    convertAmount?: number;

    active?: boolean;

    primaryCoin?: boolean;

    feeActiveForExchangeMembers?: boolean;

    minTransactionsForNoFee?: number;

    fee?: number;

    logo?: string;

    coinBaseUrl?: string;

    walletBaseUrl?: string;

}
