import TypeTransformer from './TypeTransformer';
import {UtilsReturns, NewRegistrationInterface,AccountsAuthenticationInterface,GetAccountInfoRequest,GetAccountInfoResponse,SetAccountInfoRequest,SetAccountInfoResponse,SetChildAccountInfoRequest,SetChildAccountInfoResponse,GetCurrencyRateRequest,GetCurrencyRateResponse,GetResourcePriceRequest,GetResourcePriceResponse,GetSubscriptionPriceRequest,GetSubscriptionPriceResponse,GetChildrenAccountsRequest,GetChildrenAccountsResponse,GetMoneyAmountToChargeRequest,GetMoneyAmountToChargeResponse,ChargeAccountRequest,ChargeAccountResponse,ChangeAccountPlanRequest,ChangeAccountPlanResponse,GetAccountPlansRequest,GetAccountPlansResponse,GetAvailablePlansRequest,GetAvailablePlansResponse,GetAccountDocumentsRequest,GetAccountDocumentsResponse,AccountsInterface,AddApplicationRequest,AddApplicationResponse,DelApplicationRequest,DelApplicationResponse,SetApplicationInfoRequest,SetApplicationInfoResponse,GetApplicationsRequest,GetApplicationsResponse,ApplicationsInterface,AddUserRequest,AddUserResponse,DelUserRequest,DelUserResponse,SetUserInfoRequest,SetUserInfoResponse,GetUsersRequest,GetUsersResponse,TransferMoneyToUserRequest,TransferMoneyToUserResponse,UsersInterface,CreateManualCallListRequest,CreateManualCallListResponse,StartNextCallTaskRequest,StartNextCallTaskResponse,GetCallListsRequest,GetCallListsResponse,GetCallListDetailsRequest,GetCallListDetailsResponse,StopCallListProcessingRequest,StopCallListProcessingResponse,RecoverCallListRequest,RecoverCallListResponse,CallListsInterface,AddScenarioRequest,AddScenarioResponse,DelScenarioRequest,DelScenarioResponse,BindScenarioRequest,BindScenarioResponse,GetScenariosRequest,GetScenariosResponse,SetScenarioInfoRequest,SetScenarioInfoResponse,ReorderScenariosRequest,ReorderScenariosResponse,StartScenariosRequest,StartScenariosResponse,StartConferenceRequest,StartConferenceResponse,ScenariosInterface,AddRuleRequest,AddRuleResponse,DelRuleRequest,DelRuleResponse,SetRuleInfoRequest,SetRuleInfoResponse,GetRulesRequest,GetRulesResponse,ReorderRulesRequest,ReorderRulesResponse,RulesInterface,GetCallHistoryRequest,GetCallHistoryResponse,GetHistoryReportsRequest,GetHistoryReportsResponse,GetTransactionHistoryRequest,GetTransactionHistoryResponse,DeleteRecordRequest,DeleteRecordResponse,GetACDHistoryRequest,GetACDHistoryResponse,GetAuditLogRequest,GetAuditLogResponse,HistoryInterface,AddPstnBlackListItemRequest,AddPstnBlackListItemResponse,SetPstnBlackListItemRequest,SetPstnBlackListItemResponse,DelPstnBlackListItemRequest,DelPstnBlackListItemResponse,GetPstnBlackListRequest,GetPstnBlackListResponse,PSTNBlacklistInterface,AddSipWhiteListItemRequest,AddSipWhiteListItemResponse,DelSipWhiteListItemRequest,DelSipWhiteListItemResponse,SetSipWhiteListItemRequest,SetSipWhiteListItemResponse,GetSipWhiteListRequest,GetSipWhiteListResponse,SIPWhiteListInterface,CreateSipRegistrationRequest,CreateSipRegistrationResponse,UpdateSipRegistrationRequest,UpdateSipRegistrationResponse,BindSipRegistrationRequest,BindSipRegistrationResponse,DeleteSipRegistrationRequest,DeleteSipRegistrationResponse,GetSipRegistrationsRequest,GetSipRegistrationsResponse,SIPRegistrationInterface,AttachPhoneNumberRequest,AttachPhoneNumberResponse,BindPhoneNumberToApplicationRequest,BindPhoneNumberToApplicationResponse,DeactivatePhoneNumberRequest,DeactivatePhoneNumberResponse,SetPhoneNumberInfoRequest,SetPhoneNumberInfoResponse,GetPhoneNumbersRequest,GetPhoneNumbersResponse,GetNewPhoneNumbersRequest,GetNewPhoneNumbersResponse,GetPhoneNumberCategoriesRequest,GetPhoneNumberCategoriesResponse,GetPhoneNumberCountryStatesRequest,GetPhoneNumberCountryStatesResponse,GetPhoneNumberRegionsRequest,GetPhoneNumberRegionsResponse,GetActualPhoneNumberRegionRequest,GetActualPhoneNumberRegionResponse,GetAccountPhoneNumberCountriesRequest,GetAccountPhoneNumberCountriesResponse,PhoneNumbersInterface,AddCallerIDRequest,AddCallerIDResponse,ActivateCallerIDRequest,ActivateCallerIDResponse,DelCallerIDRequest,DelCallerIDResponse,GetCallerIDsRequest,GetCallerIDsResponse,VerifyCallerIDRequest,VerifyCallerIDResponse,CallerIDsInterface,AddOutboundTestPhoneNumberRequest,AddOutboundTestPhoneNumberResponse,VerifyOutboundTestPhoneNumberRequest,VerifyOutboundTestPhoneNumberResponse,ActivateOutboundTestPhoneNumberRequest,ActivateOutboundTestPhoneNumberResponse,DelOutboundTestPhoneNumberRequest,DelOutboundTestPhoneNumberResponse,GetOutboundTestPhoneNumbersRequest,GetOutboundTestPhoneNumbersResponse,OutboundTestNumbersInterface,AddQueueRequest,AddQueueResponse,BindUserToQueueRequest,BindUserToQueueResponse,DelQueueRequest,DelQueueResponse,SetQueueInfoRequest,SetQueueInfoResponse,GetQueuesRequest,GetQueuesResponse,GetACDStateRequest,GetACDStateResponse,GetACDOperatorStatisticsRequest,GetACDOperatorStatisticsResponse,GetACDQueueStatisticsRequest,GetACDQueueStatisticsResponse,GetACDOperatorStatusStatisticsRequest,GetACDOperatorStatusStatisticsResponse,QueuesInterface,GetSmartQueueRealtimeMetricsRequest,GetSmartQueueRealtimeMetricsResponse,GetSmartQueueDayHistoryRequest,GetSmartQueueDayHistoryResponse,RequestSmartQueueHistoryRequest,RequestSmartQueueHistoryResponse,GetSQStateRequest,GetSQStateResponse,SQ_SetAgentCustomStatusMappingRequest,SQ_SetAgentCustomStatusMappingResponse,SQ_GetAgentCustomStatusMappingRequest,SQ_GetAgentCustomStatusMappingResponse,SQ_DeleteAgentCustomStatusMappingRequest,SQ_DeleteAgentCustomStatusMappingResponse,SQ_AddQueueRequest,SQ_AddQueueResponse,SQ_SetQueueInfoRequest,SQ_SetQueueInfoResponse,SQ_DelQueueRequest,SQ_DelQueueResponse,SQ_GetQueuesRequest,SQ_GetQueuesResponse,SQ_AddSkillRequest,SQ_AddSkillResponse,SQ_DelSkillRequest,SQ_DelSkillResponse,SQ_SetSkillInfoRequest,SQ_SetSkillInfoResponse,SQ_BindSkillRequest,SQ_BindSkillResponse,SQ_UnbindSkillRequest,SQ_UnbindSkillResponse,SQ_GetSkillsRequest,SQ_GetSkillsResponse,SQ_BindAgentRequest,SQ_BindAgentResponse,SQ_UnbindAgentRequest,SQ_UnbindAgentResponse,SQ_GetAgentsRequest,SQ_GetAgentsResponse,SQ_SetAgentInfoRequest,SQ_SetAgentInfoResponse,SmartQueueInterface,AddSkillRequest,AddSkillResponse,DelSkillRequest,DelSkillResponse,SetSkillInfoRequest,SetSkillInfoResponse,GetSkillsRequest,GetSkillsResponse,BindSkillRequest,BindSkillResponse,SkillsInterface,RobokassaPaymentSystemInterface,CreditCardsInterface,AgreementsInterface,AddAdminUserRequest,AddAdminUserResponse,DelAdminUserRequest,DelAdminUserResponse,SetAdminUserInfoRequest,SetAdminUserInfoResponse,GetAdminUsersRequest,GetAdminUsersResponse,AttachAdminRoleRequest,AttachAdminRoleResponse,AdminUsersInterface,AddAdminRoleRequest,AddAdminRoleResponse,DelAdminRoleRequest,DelAdminRoleResponse,SetAdminRoleInfoRequest,SetAdminRoleInfoResponse,GetAdminRolesRequest,GetAdminRolesResponse,GetAvailableAdminRoleEntriesRequest,GetAvailableAdminRoleEntriesResponse,AdminRolesInterface,AddAuthorizedAccountIPRequest,AddAuthorizedAccountIPResponse,DelAuthorizedAccountIPRequest,DelAuthorizedAccountIPResponse,GetAuthorizedAccountIPsRequest,GetAuthorizedAccountIPsResponse,CheckAuthorizedAccountIPRequest,CheckAuthorizedAccountIPResponse,AuthorizedIPsInterface,ContractorsInterface,ContactsInterface,LinkRegulationAddressRequest,LinkRegulationAddressResponse,GetZIPCodesRequest,GetZIPCodesResponse,GetRegulationsAddressRequest,GetRegulationsAddressResponse,GetAvailableRegulationsRequest,GetAvailableRegulationsResponse,GetCountriesRequest,GetCountriesResponse,GetRegionsRequest,GetRegionsResponse,RegulationAddressInterface,AddPushCredentialRequest,AddPushCredentialResponse,SetPushCredentialRequest,SetPushCredentialResponse,DelPushCredentialRequest,DelPushCredentialResponse,GetPushCredentialRequest,GetPushCredentialResponse,BindPushCredentialRequest,BindPushCredentialResponse,PushCredentialsInterface,AddDialogflowKeyRequest,AddDialogflowKeyResponse,SetDialogflowKeyRequest,SetDialogflowKeyResponse,DelDialogflowKeyRequest,DelDialogflowKeyResponse,GetDialogflowKeysRequest,GetDialogflowKeysResponse,BindDialogflowKeysRequest,BindDialogflowKeysResponse,DialogflowCredentialsInterface,SendSmsMessageRequest,SendSmsMessageResponse,A2PSendSmsRequest,A2PSendSmsResponse,ControlSmsRequest,ControlSmsResponse,GetSmsHistoryRequest,GetSmsHistoryResponse,A2PGetSmsHistoryRequest,A2PGetSmsHistoryResponse,SMSInterface,GetRecordStoragesRequest,GetRecordStoragesResponse,RecordStoragesInterface,MGPInterface,CreateKeyRequest,CreateKeyResponse,GetKeysRequest,GetKeysResponse,UpdateKeyRequest,UpdateKeyResponse,DeleteKeyRequest,DeleteKeyResponse,SetKeyRolesRequest,SetKeyRolesResponse,GetKeyRolesRequest,GetKeyRolesResponse,RemoveKeyRolesRequest,RemoveKeyRolesResponse,AddSubUserRequest,AddSubUserResponse,GetSubUsersRequest,GetSubUsersResponse,SetSubUserInfoRequest,SetSubUserInfoResponse,DelSubUserRequest,DelSubUserResponse,SetSubUserRolesRequest,SetSubUserRolesResponse,GetSubUserRolesRequest,GetSubUserRolesResponse,RemoveSubUserRolesRequest,RemoveSubUserRolesResponse,GetRolesRequest,GetRolesResponse,GetRoleGroupsRequest,GetRoleGroupsResponse,RoleSystemInterface,SetKeyValueItemRequest,SetKeyValueItemResponse,DelKeyValueItemRequest,DelKeyValueItemResponse,GetKeyValueItemRequest,GetKeyValueItemResponse,GetKeyValueItemsRequest,GetKeyValueItemsResponse,GetKeyValueKeysRequest,GetKeyValueKeysResponse,KeyValueStorageInterface,GetAccountInvoicesRequest,GetAccountInvoicesResponse,InvoicesInterface,ChildAccountsInterface} from './Interfaces'
import {AccountInfo,ExchangeRates,ResourcePrice,SubscriptionTemplate,GetMoneyAmountToChargeResult,ChargeAccountResult,ShortAccountInfo,AccountPlan,Plan,AccountVerifications,ApplicationInfo,UserInfo,CallList,CallListDetail,ScenarioInfo,RuleInfo,CallSessionInfo,HistoryReport,TransactionInfo,ACDSessionInfo,AuditLogInfo,PstnBlackListInfo,SipWhiteListInfo,SIPRegistration,NewAttachedPhoneInfo,AttachedPhoneInfo,NewPhoneInfo,PhoneNumberCountryInfo,PhoneNumberCountryStateInfo,PhoneNumberCountryRegionInfo,CallerIDInfo,OutboundTestPhonenumberInfo,QueueInfo,ACDState,ACDOperatorAggregationGroup,ACDQueueStatistics,ACDOperatorStatusAggregationGroup,SmartQueueMetricsResult,SmartQueueState,GetSQQueuesResult,SQSkillBindingModes,GetSQSkillsResult,SQAgentBindingModes,GetSQAgentsResult,SkillInfo,AdminUser,AdminRole,AuthorizedAccountIP,ZipCode,RegulationAddress,RegulationCountry,RegulationRegionRecord,PushCredentialInfo,DialogflowKeyInfo,SmsTransaction,FailedSms,SmsHistory,A2PSmsHistory,RecordStorageInfo,KeyInfo,KeyView,RoleView,SubUserID,SubUserView,RoleGroupView,KeyValueItems,KeyValueKeys,AccountInvocie} from './Structures'
import * as fs from "fs";
import * as jwt from 'jsonwebtoken';
import axios from 'axios';
import * as FormData from 'form-data';

export default class VoximplantApiClient{
  private key!:{account_email: string, account_id: number, key_id: string, private_key: string};

  onReady:(client:VoximplantApiClient)=>void;

  constructor(pathToCredentials?:string,private host?:string){
    const path = process.env.VOXIMPLANT_CREDENTIALS || pathToCredentials
    fs.readFile(path,'utf8',(err,data)=>{
      if(err) throw err;
      this.key = JSON.parse(data);
      if(this.onReady)
        this.onReady(this);
    });
  }
  public generateAuthHeader() {
    const date = (+ new Date())/1000|0;
    const tokenData = {iss:this.key.account_id, iat:date, exp:date+64}
    const token = jwt.sign(tokenData, this.key.private_key, { algorithm: 'RS256', header:{kid: this.key.key_id}});
    const authHeader = 'Bearer ' + token;
    return authHeader;
    } 
  private makeRequest<T extends keyof UtilsReturns>(request:T,requestData:any,transformer:any[]):Promise<UtilsReturns[T]>{
    const form = new FormData();
    form.append('cmd', request);
    Object.keys(requestData).forEach(field=>{
      const cTransformer = transformer[0].find(tt=>tt.name===field);
      if(cTransformer){
        form.append(cTransformer.rawName, cTransformer.transformer(requestData[field]));
      }else form.append(field, requestData[field]);
    });
    const nowTS = (+ new Date())/1000|0;
    const tokenData = {iss:this.key.account_id, iat:nowTS, exp:nowTS+64}
    const token = jwt.sign(tokenData, this.key.private_key, { algorithm: 'RS256', header:{kid: this.key.key_id}});
    return axios.post(`https://${this.host || 'api.voximplant.com'}/platform_api`, form, { headers: { ...form.getHeaders(), 'Authorization': this.generateAuthHeader()} })
            .then(response=>{
              if(response.data&&response.data.errors) return response.data;
              const returnData = {};
              Object.keys(response.data).forEach(field=>{
                const cTransformer = transformer[1].find(tt=>tt.rawName===field);
                if(cTransformer){
                  returnData[cTransformer.name] = cTransformer.transformer(response.data[field]);
                }else returnData[field] = response.data[field];
              });
              return returnData;
            });
  }



  public Accounts:AccountsInterface = {
    /**
     * Gets the account's info such as account_id, account_name, account_email etc.
    */
    getAccountInfo: (request:GetAccountInfoRequest):Promise<GetAccountInfoResponse> => {
      const reqMapper = [{rawName:'return_live_balance', name:'returnLiveBalance', transformer: TypeTransformer.to('boolean')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('AccountInfoType')},
                {rawName:'api_address', name:'apiAddress', transformer: TypeTransformer.from('string')}];
      return this.makeRequest('GetAccountInfo',request,[reqMapper,respMapper]);
    },
    /**
     * Edits the account's profile.
    */
    setAccountInfo: (request:SetAccountInfoRequest):Promise<SetAccountInfoResponse> => {
      const reqMapper = [{rawName:'new_account_email', name:'newAccountEmail', transformer: TypeTransformer.to('string')},
                {rawName:'new_account_password', name:'newAccountPassword', transformer: TypeTransformer.to('string')},
                {rawName:'language_code', name:'languageCode', transformer: TypeTransformer.to('string')},
                {rawName:'location', name:'location', transformer: TypeTransformer.to('string')},
                {rawName:'account_first_name', name:'accountFirstName', transformer: TypeTransformer.to('string')},
                {rawName:'account_last_name', name:'accountLastName', transformer: TypeTransformer.to('string')},
                {rawName:'min_balance_to_notify', name:'minBalanceToNotify', transformer: TypeTransformer.to('decimal')},
                {rawName:'account_notifications', name:'accountNotifications', transformer: TypeTransformer.to('boolean')},
                {rawName:'tariff_changing_notifications', name:'tariffChangingNotifications', transformer: TypeTransformer.to('boolean')},
                {rawName:'news_notifications', name:'newsNotifications', transformer: TypeTransformer.to('boolean')},
                {rawName:'send_js_error', name:'sendJsError', transformer: TypeTransformer.to('boolean')},
                {rawName:'billing_address_name', name:'billingAddressName', transformer: TypeTransformer.to('string')},
                {rawName:'billing_address_country_code', name:'billingAddressCountryCode', transformer: TypeTransformer.to('string')},
                {rawName:'billing_address_address', name:'billingAddressAddress', transformer: TypeTransformer.to('string')},
                {rawName:'billing_address_zip', name:'billingAddressZip', transformer: TypeTransformer.to('string')},
                {rawName:'billing_address_phone', name:'billingAddressPhone', transformer: TypeTransformer.to('string')},
                {rawName:'account_custom_data', name:'accountCustomData', transformer: TypeTransformer.to('string')},
                {rawName:'callback_url', name:'callbackUrl', transformer: TypeTransformer.to('string')},
                {rawName:'callback_salt', name:'callbackSalt', transformer: TypeTransformer.to('string')},
                {rawName:'store_outbound_sms', name:'storeOutboundSms', transformer: TypeTransformer.to('boolean')},
                {rawName:'store_inbound_sms', name:'storeInboundSms', transformer: TypeTransformer.to('boolean')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('SetAccountInfo',request,[reqMapper,respMapper]);
    },
    /**
     * Edits the account's profile.
    */
    setChildAccountInfo: (request:SetChildAccountInfoRequest):Promise<SetChildAccountInfoResponse> => {
      const reqMapper = [{rawName:'child_account_id', name:'childAccountId', transformer: TypeTransformer.to('intlist')},
                {rawName:'child_account_name', name:'childAccountName', transformer: TypeTransformer.to('stringlist')},
                {rawName:'child_account_email', name:'childAccountEmail', transformer: TypeTransformer.to('stringlist')},
                {rawName:'new_child_account_email', name:'newChildAccountEmail', transformer: TypeTransformer.to('string')},
                {rawName:'new_child_account_password', name:'newChildAccountPassword', transformer: TypeTransformer.to('string')},
                {rawName:'account_notifications', name:'accountNotifications', transformer: TypeTransformer.to('boolean')},
                {rawName:'tariff_changing_notifications', name:'tariffChangingNotifications', transformer: TypeTransformer.to('boolean')},
                {rawName:'news_notifications', name:'newsNotifications', transformer: TypeTransformer.to('boolean')},
                {rawName:'active', name:'active', transformer: TypeTransformer.to('boolean')},
                {rawName:'language_code', name:'languageCode', transformer: TypeTransformer.to('string')},
                {rawName:'location', name:'location', transformer: TypeTransformer.to('string')},
                {rawName:'min_balance_to_notify', name:'minBalanceToNotify', transformer: TypeTransformer.to('decimal')},
                {rawName:'support_robokassa', name:'supportRobokassa', transformer: TypeTransformer.to('boolean')},
                {rawName:'support_bank_card', name:'supportBankCard', transformer: TypeTransformer.to('boolean')},
                {rawName:'support_invoice', name:'supportInvoice', transformer: TypeTransformer.to('boolean')},
                {rawName:'can_use_restricted', name:'canUseRestricted', transformer: TypeTransformer.to('boolean')},
                {rawName:'min_payment_amount', name:'minPaymentAmount', transformer: TypeTransformer.to('number')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('SetChildAccountInfo',request,[reqMapper,respMapper]);
    },
    /**
     * Gets the exchange rate on selected date (per USD).
    */
    getCurrencyRate: (request:GetCurrencyRateRequest):Promise<GetCurrencyRateResponse> => {
      const reqMapper = [{rawName:'currency', name:'currency', transformer: TypeTransformer.to('stringlist')},
                {rawName:'date', name:'date', transformer: TypeTransformer.to('date')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('ExchangeRates')}];
      return this.makeRequest('GetCurrencyRate',request,[reqMapper,respMapper]);
    },
    /**
     * Gets the resource price.
    */
    getResourcePrice: (request:GetResourcePriceRequest):Promise<GetResourcePriceResponse> => {
      const reqMapper = [{rawName:'resource_type', name:'resourceType', transformer: TypeTransformer.to('stringlist')},
                {rawName:'price_group_id', name:'priceGroupId', transformer: TypeTransformer.to('intlist')},
                {rawName:'price_group_name', name:'priceGroupName', transformer: TypeTransformer.to('string')},
                {rawName:'resource_param', name:'resourceParam', transformer: TypeTransformer.to('stringlist')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('[ResourcePrice]')}];
      return this.makeRequest('GetResourcePrice',request,[reqMapper,respMapper]);
    },
    /**
     * Gets the subscription template price.
    */
    getSubscriptionPrice: (request:GetSubscriptionPriceRequest):Promise<GetSubscriptionPriceResponse> => {
      const reqMapper = [{rawName:'subscription_template_id', name:'subscriptionTemplateId', transformer: TypeTransformer.to('intlist')},
                {rawName:'subscription_template_type', name:'subscriptionTemplateType', transformer: TypeTransformer.to('string')},
                {rawName:'subscription_template_name', name:'subscriptionTemplateName', transformer: TypeTransformer.to('string')},
                {rawName:'count', name:'count', transformer: TypeTransformer.to('number')},
                {rawName:'offset', name:'offset', transformer: TypeTransformer.to('number')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('[SubscriptionTemplateType]')}];
      return this.makeRequest('GetSubscriptionPrice',request,[reqMapper,respMapper]);
    },
    /**
     * Gets the info about all children accounts.
    */
    getChildrenAccounts: (request:GetChildrenAccountsRequest):Promise<GetChildrenAccountsResponse> => {
      const reqMapper = [{rawName:'child_account_id', name:'childAccountId', transformer: TypeTransformer.to('intlist')},
                {rawName:'child_account_name', name:'childAccountName', transformer: TypeTransformer.to('string')},
                {rawName:'child_account_email', name:'childAccountEmail', transformer: TypeTransformer.to('string')},
                {rawName:'active', name:'active', transformer: TypeTransformer.to('boolean')},
                {rawName:'frozen', name:'frozen', transformer: TypeTransformer.to('boolean')},
                {rawName:'ignore_invalid_accounts', name:'ignoreInvalidAccounts', transformer: TypeTransformer.to('boolean')},
                {rawName:'brief_output', name:'briefOutput', transformer: TypeTransformer.to('boolean')},
                {rawName:'medium_output', name:'mediumOutput', transformer: TypeTransformer.to('boolean')},
                {rawName:'count', name:'count', transformer: TypeTransformer.to('number')},
                {rawName:'offset', name:'offset', transformer: TypeTransformer.to('number')},
                {rawName:'order_by', name:'orderBy', transformer: TypeTransformer.to('string')},
                {rawName:'return_live_balance', name:'returnLiveBalance', transformer: TypeTransformer.to('boolean')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('[AccountInfoType]')},
                {rawName:'total_count', name:'totalCount', transformer: TypeTransformer.from('number')},
                {rawName:'count', name:'count', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('GetChildrenAccounts',request,[reqMapper,respMapper]);
    },
    /**
     * Get the recommended money amount to charge.
    */
    getMoneyAmountToCharge: (request:GetMoneyAmountToChargeRequest):Promise<GetMoneyAmountToChargeResponse> => {
      const reqMapper = [{rawName:'currency', name:'currency', transformer: TypeTransformer.to('string')},
                {rawName:'charge_date', name:'chargeDate', transformer: TypeTransformer.to('date')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('GetMoneyAmountToChargeResult')}];
      return this.makeRequest('GetMoneyAmountToCharge',request,[reqMapper,respMapper]);
    },
    /**
     * Charges the account in the manual mode. You should call the ChargeAccount function to charge the subscriptions having the auto_charge=false.
    */
    chargeAccount: (request:ChargeAccountRequest):Promise<ChargeAccountResponse> => {
      const reqMapper = [{rawName:'phone_id', name:'phoneId', transformer: TypeTransformer.to('intlist')},
                {rawName:'phone_number', name:'phoneNumber', transformer: TypeTransformer.to('stringlist')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('ChargeAccountResult')},
                {rawName:'account_info', name:'accountInfo', transformer: TypeTransformer.from('ShortAccountInfoType')}];
      return this.makeRequest('ChargeAccount',request,[reqMapper,respMapper]);
    },
    /**
     * Configures the account's plan.
    */
    changeAccountPlan: (request:ChangeAccountPlanRequest):Promise<ChangeAccountPlanResponse> => {
      const reqMapper = [{rawName:'plan_type', name:'planType', transformer: TypeTransformer.to('string')},
                {rawName:'plan_subscription_template_id', name:'planSubscriptionTemplateId', transformer: TypeTransformer.to('number')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')},
                {rawName:'account_info', name:'accountInfo', transformer: TypeTransformer.from('ShortAccountInfoType')}];
      return this.makeRequest('ChangeAccountPlan',request,[reqMapper,respMapper]);
    },
    /**
     * Gets the account plans with packages.
    */
    getAccountPlans: (request:GetAccountPlansRequest):Promise<GetAccountPlansResponse> => {
      const reqMapper = [{rawName:'plan_type', name:'planType', transformer: TypeTransformer.to('stringlist')},
                {rawName:'plan_subscription_template_id', name:'planSubscriptionTemplateId', transformer: TypeTransformer.to('intlist')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('[AccountPlanType]')}];
      return this.makeRequest('GetAccountPlans',request,[reqMapper,respMapper]);
    },
    /**
     * Gets the allowed plans to change.
    */
    getAvailablePlans: (request:GetAvailablePlansRequest):Promise<GetAvailablePlansResponse> => {
      const reqMapper = [{rawName:'plan_type', name:'planType', transformer: TypeTransformer.to('stringlist')},
                {rawName:'plan_subscription_template_id', name:'planSubscriptionTemplateId', transformer: TypeTransformer.to('intlist')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('[PlanType]')}];
      return this.makeRequest('GetAvailablePlans',request,[reqMapper,respMapper]);
    },
    /**
     * Gets the account documents and the verification states.
    */
    getAccountDocuments: (request:GetAccountDocumentsRequest):Promise<GetAccountDocumentsResponse> => {
      const reqMapper = [{rawName:'with_details', name:'withDetails', transformer: TypeTransformer.to('boolean')},
                {rawName:'verification_name', name:'verificationName', transformer: TypeTransformer.to('string')},
                {rawName:'verification_status', name:'verificationStatus', transformer: TypeTransformer.to('stringlist')},
                {rawName:'from_unverified_hold_until', name:'fromUnverifiedHoldUntil', transformer: TypeTransformer.to('date')},
                {rawName:'to_unverified_hold_until', name:'toUnverifiedHoldUntil', transformer: TypeTransformer.to('date')},
                {rawName:'child_account_id', name:'childAccountId', transformer: TypeTransformer.to('intlist')},
                {rawName:'children_verifications_only', name:'childrenVerificationsOnly', transformer: TypeTransformer.to('boolean')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('[AccountVerifications]')}];
      return this.makeRequest('GetAccountDocuments',request,[reqMapper,respMapper]);
    }
  }

  public Applications:ApplicationsInterface = {
    /**
     * Adds a new account's application.
    */
    addApplication: (request:AddApplicationRequest):Promise<AddApplicationResponse> => {
      const reqMapper = [{rawName:'application_name', name:'applicationName', transformer: TypeTransformer.to('string')},
                {rawName:'secure_record_storage', name:'secureRecordStorage', transformer: TypeTransformer.to('boolean')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')},
                {rawName:'application_id', name:'applicationId', transformer: TypeTransformer.from('number')},
                {rawName:'application_name', name:'applicationName', transformer: TypeTransformer.from('string')},
                {rawName:'secure_record_storage', name:'secureRecordStorage', transformer: TypeTransformer.from('boolean')}];
      return this.makeRequest('AddApplication',request,[reqMapper,respMapper]);
    },
    /**
     * Deletes the account's application.
    */
    delApplication: (request:DelApplicationRequest):Promise<DelApplicationResponse> => {
      const reqMapper = [{rawName:'application_id', name:'applicationId', transformer: TypeTransformer.to('intlist')},
                {rawName:'application_name', name:'applicationName', transformer: TypeTransformer.to('stringlist')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('DelApplication',request,[reqMapper,respMapper]);
    },
    /**
     * Edits the account's application.
    */
    setApplicationInfo: (request:SetApplicationInfoRequest):Promise<SetApplicationInfoResponse> => {
      const reqMapper = [{rawName:'application_id', name:'applicationId', transformer: TypeTransformer.to('number')},
                {rawName:'required_application_name', name:'requiredApplicationName', transformer: TypeTransformer.to('string')},
                {rawName:'application_name', name:'applicationName', transformer: TypeTransformer.to('string')},
                {rawName:'secure_record_storage', name:'secureRecordStorage', transformer: TypeTransformer.to('boolean')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')},
                {rawName:'application_name', name:'applicationName', transformer: TypeTransformer.from('string')},
                {rawName:'secure_record_storage', name:'secureRecordStorage', transformer: TypeTransformer.from('boolean')}];
      return this.makeRequest('SetApplicationInfo',request,[reqMapper,respMapper]);
    },
    /**
     * Gets the account's applications.
    */
    getApplications: (request:GetApplicationsRequest):Promise<GetApplicationsResponse> => {
      const reqMapper = [{rawName:'application_id', name:'applicationId', transformer: TypeTransformer.to('number')},
                {rawName:'application_name', name:'applicationName', transformer: TypeTransformer.to('string')},
                {rawName:'with_rules', name:'withRules', transformer: TypeTransformer.to('boolean')},
                {rawName:'with_scenarios', name:'withScenarios', transformer: TypeTransformer.to('boolean')},
                {rawName:'count', name:'count', transformer: TypeTransformer.to('number')},
                {rawName:'offset', name:'offset', transformer: TypeTransformer.to('number')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('[ApplicationInfoType]')},
                {rawName:'total_count', name:'totalCount', transformer: TypeTransformer.from('number')},
                {rawName:'count', name:'count', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('GetApplications',request,[reqMapper,respMapper]);
    }
  }

  public Users:UsersInterface = {
    /**
     * Adds a new user.
    */
    addUser: (request:AddUserRequest):Promise<AddUserResponse> => {
      const reqMapper = [{rawName:'user_name', name:'userName', transformer: TypeTransformer.to('string')},
                {rawName:'user_display_name', name:'userDisplayName', transformer: TypeTransformer.to('string')},
                {rawName:'user_password', name:'userPassword', transformer: TypeTransformer.to('string')},
                {rawName:'application_id', name:'applicationId', transformer: TypeTransformer.to('number')},
                {rawName:'application_name', name:'applicationName', transformer: TypeTransformer.to('string')},
                {rawName:'parent_accounting', name:'parentAccounting', transformer: TypeTransformer.to('boolean')},
                {rawName:'user_active', name:'userActive', transformer: TypeTransformer.to('boolean')},
                {rawName:'user_custom_data', name:'userCustomData', transformer: TypeTransformer.to('string')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')},
                {rawName:'user_id', name:'userId', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('AddUser',request,[reqMapper,respMapper]);
    },
    /**
     * Deletes the specified user(s).
    */
    delUser: (request:DelUserRequest):Promise<DelUserResponse> => {
      const reqMapper = [{rawName:'user_id', name:'userId', transformer: TypeTransformer.to('intlist')},
                {rawName:'user_name', name:'userName', transformer: TypeTransformer.to('stringlist')},
                {rawName:'application_id', name:'applicationId', transformer: TypeTransformer.to('number')},
                {rawName:'application_name', name:'applicationName', transformer: TypeTransformer.to('string')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('DelUser',request,[reqMapper,respMapper]);
    },
    /**
     * Edits the user.
    */
    setUserInfo: (request:SetUserInfoRequest):Promise<SetUserInfoResponse> => {
      const reqMapper = [{rawName:'user_id', name:'userId', transformer: TypeTransformer.to('number')},
                {rawName:'user_name', name:'userName', transformer: TypeTransformer.to('string')},
                {rawName:'application_id', name:'applicationId', transformer: TypeTransformer.to('number')},
                {rawName:'application_name', name:'applicationName', transformer: TypeTransformer.to('string')},
                {rawName:'new_user_name', name:'newUserName', transformer: TypeTransformer.to('string')},
                {rawName:'user_display_name', name:'userDisplayName', transformer: TypeTransformer.to('string')},
                {rawName:'user_password', name:'userPassword', transformer: TypeTransformer.to('string')},
                {rawName:'parent_accounting', name:'parentAccounting', transformer: TypeTransformer.to('boolean')},
                {rawName:'user_active', name:'userActive', transformer: TypeTransformer.to('boolean')},
                {rawName:'user_custom_data', name:'userCustomData', transformer: TypeTransformer.to('string')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('SetUserInfo',request,[reqMapper,respMapper]);
    },
    /**
     * Shows the users of the specified account.
    */
    getUsers: (request:GetUsersRequest):Promise<GetUsersResponse> => {
      const reqMapper = [{rawName:'application_id', name:'applicationId', transformer: TypeTransformer.to('number')},
                {rawName:'application_name', name:'applicationName', transformer: TypeTransformer.to('string')},
                {rawName:'skill_id', name:'skillId', transformer: TypeTransformer.to('number')},
                {rawName:'excluded_skill_id', name:'excludedSkillId', transformer: TypeTransformer.to('number')},
                {rawName:'acd_queue_id', name:'acdQueueId', transformer: TypeTransformer.to('number')},
                {rawName:'excluded_acd_queue_id', name:'excludedAcdQueueId', transformer: TypeTransformer.to('number')},
                {rawName:'user_id', name:'userId', transformer: TypeTransformer.to('number')},
                {rawName:'user_name', name:'userName', transformer: TypeTransformer.to('string')},
                {rawName:'user_active', name:'userActive', transformer: TypeTransformer.to('boolean')},
                {rawName:'user_display_name', name:'userDisplayName', transformer: TypeTransformer.to('string')},
                {rawName:'with_skills', name:'withSkills', transformer: TypeTransformer.to('boolean')},
                {rawName:'with_queues', name:'withQueues', transformer: TypeTransformer.to('boolean')},
                {rawName:'acd_status', name:'acdStatus', transformer: TypeTransformer.to('stringlist')},
                {rawName:'showing_skill_id', name:'showingSkillId', transformer: TypeTransformer.to('number')},
                {rawName:'count', name:'count', transformer: TypeTransformer.to('number')},
                {rawName:'offset', name:'offset', transformer: TypeTransformer.to('number')},
                {rawName:'order_by', name:'orderBy', transformer: TypeTransformer.to('string')},
                {rawName:'return_live_balance', name:'returnLiveBalance', transformer: TypeTransformer.to('boolean')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('[UserInfoType]')},
                {rawName:'total_count', name:'totalCount', transformer: TypeTransformer.from('number')},
                {rawName:'count', name:'count', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('GetUsers',request,[reqMapper,respMapper]);
    },
    /**
     * Transfer the account's money to the user or transfer the user's money to the account if the money amount is negative.
    */
    transferMoneyToUser: (request:TransferMoneyToUserRequest):Promise<TransferMoneyToUserResponse> => {
      const reqMapper = [{rawName:'user_id', name:'userId', transformer: TypeTransformer.to('intlist')},
                {rawName:'user_name', name:'userName', transformer: TypeTransformer.to('stringlist')},
                {rawName:'amount', name:'amount', transformer: TypeTransformer.to('decimal')},
                {rawName:'application_id', name:'applicationId', transformer: TypeTransformer.to('number')},
                {rawName:'application_name', name:'applicationName', transformer: TypeTransformer.to('string')},
                {rawName:'currency', name:'currency', transformer: TypeTransformer.to('string')},
                {rawName:'strict_mode', name:'strictMode', transformer: TypeTransformer.to('boolean')},
                {rawName:'user_transaction_description', name:'userTransactionDescription', transformer: TypeTransformer.to('string')},
                {rawName:'account_transaction_description', name:'accountTransactionDescription', transformer: TypeTransformer.to('string')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')},
                {rawName:'balance', name:'balance', transformer: TypeTransformer.from('decimal')}];
      return this.makeRequest('TransferMoneyToUser',request,[reqMapper,respMapper]);
    }
  }

  public CallLists:CallListsInterface = {
    /**
     * Adds a new CSV file for manual call list processing and bind it with the specified rule. To send a file, use the request body. To start processing calls, use the function [StartNextCallTask]. <b>IMPORTANT:</b> the account's balance should be equal or greater than 1 USD. If the balance is lower than 1 USD, the call list processing won't start, or it stops immediately if it was active.
    */
    createManualCallList: (request:CreateManualCallListRequest):Promise<CreateManualCallListResponse> => {
      const reqMapper = [{rawName:'rule_id', name:'ruleId', transformer: TypeTransformer.to('number')},
                {rawName:'priority', name:'priority', transformer: TypeTransformer.to('number')},
                {rawName:'max_simultaneous', name:'maxSimultaneous', transformer: TypeTransformer.to('number')},
                {rawName:'num_attempts', name:'numAttempts', transformer: TypeTransformer.to('number')},
                {rawName:'name', name:'name', transformer: TypeTransformer.to('string')},
                {rawName:'file_content', name:'fileContent', transformer: TypeTransformer.to('string')},
                {rawName:'interval_seconds', name:'intervalSeconds', transformer: TypeTransformer.to('number')},
                {rawName:'encoding', name:'encoding', transformer: TypeTransformer.to('string')},
                {rawName:'delimiter', name:'delimiter', transformer: TypeTransformer.to('string')},
                {rawName:'escape', name:'escape', transformer: TypeTransformer.to('string')},
                {rawName:'reference_ip', name:'referenceIp', transformer: TypeTransformer.to('string')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('boolean')},
                {rawName:'count', name:'count', transformer: TypeTransformer.from('number')},
                {rawName:'list_id', name:'listId', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('CreateManualCallList',request,[reqMapper,respMapper]);
    },
    /**
     * Start processing the next task.
    */
    startNextCallTask: (request:StartNextCallTaskRequest):Promise<StartNextCallTaskResponse> => {
      const reqMapper = [{rawName:'list_id', name:'listId', transformer: TypeTransformer.to('intlist')},
                {rawName:'custom_params', name:'customParams', transformer: TypeTransformer.to('string')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')},
                {rawName:'list_id', name:'listId', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('StartNextCallTask',request,[reqMapper,respMapper]);
    },
    /**
     * Get all call lists for the specified user.
    */
    getCallLists: (request:GetCallListsRequest):Promise<GetCallListsResponse> => {
      const reqMapper = [{rawName:'list_id', name:'listId', transformer: TypeTransformer.to('intlist')},
                {rawName:'name', name:'name', transformer: TypeTransformer.to('string')},
                {rawName:'is_active', name:'isActive', transformer: TypeTransformer.to('boolean')},
                {rawName:'from_date', name:'fromDate', transformer: TypeTransformer.to('timestamp')},
                {rawName:'to_date', name:'toDate', transformer: TypeTransformer.to('timestamp')},
                {rawName:'type_list', name:'typeList', transformer: TypeTransformer.to('string')},
                {rawName:'count', name:'count', transformer: TypeTransformer.to('number')},
                {rawName:'offset', name:'offset', transformer: TypeTransformer.to('number')},
                {rawName:'application_id', name:'applicationId', transformer: TypeTransformer.to('intlist')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('[CallListType]')},
                {rawName:'count', name:'count', transformer: TypeTransformer.from('number')},
                {rawName:'total_count', name:'totalCount', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('GetCallLists',request,[reqMapper,respMapper]);
    },
    /**
     * Get details of the specified call list. Returns a CSV file by default.
    */
    getCallListDetails: (request:GetCallListDetailsRequest):Promise<GetCallListDetailsResponse> => {
      const reqMapper = [{rawName:'list_id', name:'listId', transformer: TypeTransformer.to('number')},
                {rawName:'count', name:'count', transformer: TypeTransformer.to('number')},
                {rawName:'offset', name:'offset', transformer: TypeTransformer.to('number')},
                {rawName:'output', name:'output', transformer: TypeTransformer.to('string')},
                {rawName:'encoding', name:'encoding', transformer: TypeTransformer.to('string')},
                {rawName:'delimiter', name:'delimiter', transformer: TypeTransformer.to('string')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('[CallListDetailType]')},
                {rawName:'count', name:'count', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('GetCallListDetails',request,[reqMapper,respMapper]);
    },
    /**
     * Stop processing the specified call list.
    */
    stopCallListProcessing: (request:StopCallListProcessingRequest):Promise<StopCallListProcessingResponse> => {
      const reqMapper = [{rawName:'list_id', name:'listId', transformer: TypeTransformer.to('number')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('boolean')},
                {rawName:'msg', name:'msg', transformer: TypeTransformer.from('string')}];
      return this.makeRequest('StopCallListProcessing',request,[reqMapper,respMapper]);
    },
    /**
     * Resume processing the specified call list.
    */
    recoverCallList: (request:RecoverCallListRequest):Promise<RecoverCallListResponse> => {
      const reqMapper = [{rawName:'list_id', name:'listId', transformer: TypeTransformer.to('number')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('boolean')},
                {rawName:'count_recovery', name:'countRecovery', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('RecoverCallList',request,[reqMapper,respMapper]);
    }
  }

  public Scenarios:ScenariosInterface = {
    /**
     * Adds a new scenario to the <a href="https://voximplant.com/docs/gettingstarted/basicconcepts/scenarios#shared-scenarios">Shared</a> folder, so the scenario is available in all the existing applications. Please use the POST method.
    */
    addScenario: (request:AddScenarioRequest):Promise<AddScenarioResponse> => {
      const reqMapper = [{rawName:'scenario_name', name:'scenarioName', transformer: TypeTransformer.to('string')},
                {rawName:'scenario_script', name:'scenarioScript', transformer: TypeTransformer.to('string')},
                {rawName:'rule_id', name:'ruleId', transformer: TypeTransformer.to('number')},
                {rawName:'rule_name', name:'ruleName', transformer: TypeTransformer.to('string')},
                {rawName:'rewrite', name:'rewrite', transformer: TypeTransformer.to('boolean')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')},
                {rawName:'scenario_id', name:'scenarioId', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('AddScenario',request,[reqMapper,respMapper]);
    },
    /**
     * Deletes the scenario.
    */
    delScenario: (request:DelScenarioRequest):Promise<DelScenarioResponse> => {
      const reqMapper = [{rawName:'scenario_id', name:'scenarioId', transformer: TypeTransformer.to('intlist')},
                {rawName:'scenario_name', name:'scenarioName', transformer: TypeTransformer.to('stringlist')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('DelScenario',request,[reqMapper,respMapper]);
    },
    /**
     * Bind the scenario list to the rule. You should specify the application_id or application_name if you specify the rule_name. Please note, the scenario and the routing rule need to be within the same application.
    */
    bindScenario: (request:BindScenarioRequest):Promise<BindScenarioResponse> => {
      const reqMapper = [{rawName:'scenario_id', name:'scenarioId', transformer: TypeTransformer.to('intlist')},
                {rawName:'scenario_name', name:'scenarioName', transformer: TypeTransformer.to('stringlist')},
                {rawName:'rule_id', name:'ruleId', transformer: TypeTransformer.to('number')},
                {rawName:'rule_name', name:'ruleName', transformer: TypeTransformer.to('string')},
                {rawName:'application_id', name:'applicationId', transformer: TypeTransformer.to('number')},
                {rawName:'application_name', name:'applicationName', transformer: TypeTransformer.to('string')},
                {rawName:'bind', name:'bind', transformer: TypeTransformer.to('boolean')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('BindScenario',request,[reqMapper,respMapper]);
    },
    /**
     * Gets the account's scenarios.
    */
    getScenarios: (request:GetScenariosRequest):Promise<GetScenariosResponse> => {
      const reqMapper = [{rawName:'scenario_id', name:'scenarioId', transformer: TypeTransformer.to('number')},
                {rawName:'scenario_name', name:'scenarioName', transformer: TypeTransformer.to('string')},
                {rawName:'with_script', name:'withScript', transformer: TypeTransformer.to('boolean')},
                {rawName:'count', name:'count', transformer: TypeTransformer.to('number')},
                {rawName:'offset', name:'offset', transformer: TypeTransformer.to('number')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('[ScenarioInfoType]')},
                {rawName:'total_count', name:'totalCount', transformer: TypeTransformer.from('number')},
                {rawName:'count', name:'count', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('GetScenarios',request,[reqMapper,respMapper]);
    },
    /**
     * Edits the scenario. You can edit the scenario's name and body. Please use the POST method.
    */
    setScenarioInfo: (request:SetScenarioInfoRequest):Promise<SetScenarioInfoResponse> => {
      const reqMapper = [{rawName:'scenario_id', name:'scenarioId', transformer: TypeTransformer.to('number')},
                {rawName:'required_scenario_name', name:'requiredScenarioName', transformer: TypeTransformer.to('string')},
                {rawName:'scenario_name', name:'scenarioName', transformer: TypeTransformer.to('string')},
                {rawName:'scenario_script', name:'scenarioScript', transformer: TypeTransformer.to('string')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('SetScenarioInfo',request,[reqMapper,respMapper]);
    },
    /**
     * Configures the order of scenarios that are assigned to the specified rule.
    */
    reorderScenarios: (request:ReorderScenariosRequest):Promise<ReorderScenariosResponse> => {
      const reqMapper = [{rawName:'rule_id', name:'ruleId', transformer: TypeTransformer.to('number')},
                {rawName:'rule_name', name:'ruleName', transformer: TypeTransformer.to('string')},
                {rawName:'scenario_id', name:'scenarioId', transformer: TypeTransformer.to('intlist')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('ReorderScenarios',request,[reqMapper,respMapper]);
    },
    /**
     * Runs JavaScript scenarios on a Voximplant server. The scenarios run in a new media session. To start a scenario, pass the routing rule ID associated with the necessary scenario. You can use both GET and POST requests, but we recommend using the POST mode if you pass some data in the custom_data field. The maximum number of simultaneous requests is 200. If you exceed this number, you get the 429 error code.
    */
    startScenarios: (request:StartScenariosRequest):Promise<StartScenariosResponse> => {
      const reqMapper = [{rawName:'rule_id', name:'ruleId', transformer: TypeTransformer.to('number')},
                {rawName:'user_id', name:'userId', transformer: TypeTransformer.to('number')},
                {rawName:'user_name', name:'userName', transformer: TypeTransformer.to('string')},
                {rawName:'application_id', name:'applicationId', transformer: TypeTransformer.to('number')},
                {rawName:'application_name', name:'applicationName', transformer: TypeTransformer.to('string')},
                {rawName:'script_custom_data', name:'scriptCustomData', transformer: TypeTransformer.to('string')},
                {rawName:'reference_ip', name:'referenceIp', transformer: TypeTransformer.to('string')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')},
                {rawName:'media_session_access_url', name:'mediaSessionAccessUrl', transformer: TypeTransformer.from('string')},
                {rawName:'media_session_access_secure_url', name:'mediaSessionAccessSecureUrl', transformer: TypeTransformer.from('string')},
                {rawName:'call_session_history_id', name:'callSessionHistoryId', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('StartScenarios',request,[reqMapper,respMapper]);
    },
    /**
     * Runs a session for video conferencing or joins the existing video conference session.<br/><br/>When you create a session by calling this method, a scenario runs on one of the servers dedicated to video conferencing. All further method calls with the same **conference_name** won't create a new video conference session but join the existing one.<br/><br/>Use the [StartScenarios] method for creating audio conferences.
    */
    startConference: (request:StartConferenceRequest):Promise<StartConferenceResponse> => {
      const reqMapper = [{rawName:'conference_name', name:'conferenceName', transformer: TypeTransformer.to('string')},
                {rawName:'rule_id', name:'ruleId', transformer: TypeTransformer.to('number')},
                {rawName:'user_id', name:'userId', transformer: TypeTransformer.to('number')},
                {rawName:'user_name', name:'userName', transformer: TypeTransformer.to('string')},
                {rawName:'application_id', name:'applicationId', transformer: TypeTransformer.to('number')},
                {rawName:'application_name', name:'applicationName', transformer: TypeTransformer.to('string')},
                {rawName:'script_custom_data', name:'scriptCustomData', transformer: TypeTransformer.to('string')},
                {rawName:'reference_ip', name:'referenceIp', transformer: TypeTransformer.to('string')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')},
                {rawName:'media_session_access_url', name:'mediaSessionAccessUrl', transformer: TypeTransformer.from('string')},
                {rawName:'media_session_access_secure_url', name:'mediaSessionAccessSecureUrl', transformer: TypeTransformer.from('string')},
                {rawName:'call_session_history_id', name:'callSessionHistoryId', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('StartConference',request,[reqMapper,respMapper]);
    }
  }

  public Rules:RulesInterface = {
    /**
     * Adds a new rule for the application.
    */
    addRule: (request:AddRuleRequest):Promise<AddRuleResponse> => {
      const reqMapper = [{rawName:'application_id', name:'applicationId', transformer: TypeTransformer.to('number')},
                {rawName:'application_name', name:'applicationName', transformer: TypeTransformer.to('string')},
                {rawName:'rule_name', name:'ruleName', transformer: TypeTransformer.to('string')},
                {rawName:'rule_pattern', name:'rulePattern', transformer: TypeTransformer.to('string')},
                {rawName:'scenario_id', name:'scenarioId', transformer: TypeTransformer.to('intlist')},
                {rawName:'scenario_name', name:'scenarioName', transformer: TypeTransformer.to('stringlist')},
                {rawName:'rule_pattern_exclude', name:'rulePatternExclude', transformer: TypeTransformer.to('string')},
                {rawName:'video_conference', name:'videoConference', transformer: TypeTransformer.to('boolean')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')},
                {rawName:'rule_id', name:'ruleId', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('AddRule',request,[reqMapper,respMapper]);
    },
    /**
     * Deletes the rule.
    */
    delRule: (request:DelRuleRequest):Promise<DelRuleResponse> => {
      const reqMapper = [{rawName:'rule_id', name:'ruleId', transformer: TypeTransformer.to('intlist')},
                {rawName:'rule_name', name:'ruleName', transformer: TypeTransformer.to('stringlist')},
                {rawName:'application_id', name:'applicationId', transformer: TypeTransformer.to('intlist')},
                {rawName:'application_name', name:'applicationName', transformer: TypeTransformer.to('stringlist')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('DelRule',request,[reqMapper,respMapper]);
    },
    /**
     * Edits the rule.
    */
    setRuleInfo: (request:SetRuleInfoRequest):Promise<SetRuleInfoResponse> => {
      const reqMapper = [{rawName:'rule_id', name:'ruleId', transformer: TypeTransformer.to('number')},
                {rawName:'rule_name', name:'ruleName', transformer: TypeTransformer.to('string')},
                {rawName:'rule_pattern', name:'rulePattern', transformer: TypeTransformer.to('string')},
                {rawName:'rule_pattern_exclude', name:'rulePatternExclude', transformer: TypeTransformer.to('string')},
                {rawName:'video_conference', name:'videoConference', transformer: TypeTransformer.to('boolean')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('SetRuleInfo',request,[reqMapper,respMapper]);
    },
    /**
     * Gets the rules.
    */
    getRules: (request:GetRulesRequest):Promise<GetRulesResponse> => {
      const reqMapper = [{rawName:'application_id', name:'applicationId', transformer: TypeTransformer.to('number')},
                {rawName:'application_name', name:'applicationName', transformer: TypeTransformer.to('string')},
                {rawName:'rule_id', name:'ruleId', transformer: TypeTransformer.to('number')},
                {rawName:'rule_name', name:'ruleName', transformer: TypeTransformer.to('string')},
                {rawName:'video_conference', name:'videoConference', transformer: TypeTransformer.to('boolean')},
                {rawName:'template', name:'template', transformer: TypeTransformer.to('string')},
                {rawName:'with_scenarios', name:'withScenarios', transformer: TypeTransformer.to('boolean')},
                {rawName:'count', name:'count', transformer: TypeTransformer.to('number')},
                {rawName:'offset', name:'offset', transformer: TypeTransformer.to('number')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('[RuleInfoType]')},
                {rawName:'total_count', name:'totalCount', transformer: TypeTransformer.from('number')},
                {rawName:'count', name:'count', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('GetRules',request,[reqMapper,respMapper]);
    },
    /**
     * Configures the rules' order in the <a href='//manage.voximplant.com/applications'>Applications</a> section of Control panel. Note: the rules must belong to the same application!
    */
    reorderRules: (request:ReorderRulesRequest):Promise<ReorderRulesResponse> => {
      const reqMapper = [{rawName:'rule_id', name:'ruleId', transformer: TypeTransformer.to('intlist')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('ReorderRules',request,[reqMapper,respMapper]);
    }
  }

  public History:HistoryInterface = {
    /**
     * Gets the account's call history, including call duration, cost, logs and other call information. You can filter the call history by a certain date
    */
    getCallHistory: (request:GetCallHistoryRequest):Promise<GetCallHistoryResponse> => {
      const reqMapper = [{rawName:'from_date', name:'fromDate', transformer: TypeTransformer.to('timestamp')},
                {rawName:'to_date', name:'toDate', transformer: TypeTransformer.to('timestamp')},
                {rawName:'call_session_history_id', name:'callSessionHistoryId', transformer: TypeTransformer.to('intlist')},
                {rawName:'application_id', name:'applicationId', transformer: TypeTransformer.to('number')},
                {rawName:'application_name', name:'applicationName', transformer: TypeTransformer.to('string')},
                {rawName:'user_id', name:'userId', transformer: TypeTransformer.to('intlist')},
                {rawName:'rule_name', name:'ruleName', transformer: TypeTransformer.to('string')},
                {rawName:'remote_number', name:'remoteNumber', transformer: TypeTransformer.to('stringlist')},
                {rawName:'local_number', name:'localNumber', transformer: TypeTransformer.to('stringlist')},
                {rawName:'call_session_history_custom_data', name:'callSessionHistoryCustomData', transformer: TypeTransformer.to('string')},
                {rawName:'with_calls', name:'withCalls', transformer: TypeTransformer.to('boolean')},
                {rawName:'with_records', name:'withRecords', transformer: TypeTransformer.to('boolean')},
                {rawName:'with_other_resources', name:'withOtherResources', transformer: TypeTransformer.to('boolean')},
                {rawName:'child_account_id', name:'childAccountId', transformer: TypeTransformer.to('intlist')},
                {rawName:'children_calls_only', name:'childrenCallsOnly', transformer: TypeTransformer.to('boolean')},
                {rawName:'with_header', name:'withHeader', transformer: TypeTransformer.to('boolean')},
                {rawName:'desc_order', name:'descOrder', transformer: TypeTransformer.to('boolean')},
                {rawName:'with_total_count', name:'withTotalCount', transformer: TypeTransformer.to('boolean')},
                {rawName:'count', name:'count', transformer: TypeTransformer.to('number')},
                {rawName:'offset', name:'offset', transformer: TypeTransformer.to('number')},
                {rawName:'output', name:'output', transformer: TypeTransformer.to('string')},
                {rawName:'is_async', name:'isAsync', transformer: TypeTransformer.to('boolean')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('[CallSessionInfoType]')},
                {rawName:'total_count', name:'totalCount', transformer: TypeTransformer.from('number')},
                {rawName:'count', name:'count', transformer: TypeTransformer.from('number')},
                {rawName:'timezone', name:'timezone', transformer: TypeTransformer.from('string')},
                {rawName:'history_report_id', name:'historyReportId', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('GetCallHistory',request,[reqMapper,respMapper]);
    },
    /**
     * Gets the list of history reports and their statuses. The method returns info about reports made via [GetCallHistory] with the specified __output=csv__ and **is_async=true** parameters. Note that the **file_size** field in response is valid only for video calls.
    */
    getHistoryReports: (request:GetHistoryReportsRequest):Promise<GetHistoryReportsResponse> => {
      const reqMapper = [{rawName:'history_report_id', name:'historyReportId', transformer: TypeTransformer.to('number')},
                {rawName:'history_type', name:'historyType', transformer: TypeTransformer.to('stringlist')},
                {rawName:'created_from', name:'createdFrom', transformer: TypeTransformer.to('timestamp')},
                {rawName:'created_to', name:'createdTo', transformer: TypeTransformer.to('timestamp')},
                {rawName:'is_completed', name:'isCompleted', transformer: TypeTransformer.to('boolean')},
                {rawName:'desc_order', name:'descOrder', transformer: TypeTransformer.to('boolean')},
                {rawName:'count', name:'count', transformer: TypeTransformer.to('number')},
                {rawName:'offset', name:'offset', transformer: TypeTransformer.to('number')},
                {rawName:'application_id', name:'applicationId', transformer: TypeTransformer.to('intlist')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('[HistoryReportType]')},
                {rawName:'total_count', name:'totalCount', transformer: TypeTransformer.from('number')},
                {rawName:'count', name:'count', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('GetHistoryReports',request,[reqMapper,respMapper]);
    },
    /**
     * Gets the transaction history.
    */
    getTransactionHistory: (request:GetTransactionHistoryRequest):Promise<GetTransactionHistoryResponse> => {
      const reqMapper = [{rawName:'from_date', name:'fromDate', transformer: TypeTransformer.to('timestamp')},
                {rawName:'to_date', name:'toDate', transformer: TypeTransformer.to('timestamp')},
                {rawName:'transaction_id', name:'transactionId', transformer: TypeTransformer.to('intlist')},
                {rawName:'transaction_type', name:'transactionType', transformer: TypeTransformer.to('stringlist')},
                {rawName:'user_id', name:'userId', transformer: TypeTransformer.to('intlist')},
                {rawName:'child_account_id', name:'childAccountId', transformer: TypeTransformer.to('intlist')},
                {rawName:'children_transactions_only', name:'childrenTransactionsOnly', transformer: TypeTransformer.to('boolean')},
                {rawName:'users_transactions_only', name:'usersTransactionsOnly', transformer: TypeTransformer.to('boolean')},
                {rawName:'desc_order', name:'descOrder', transformer: TypeTransformer.to('boolean')},
                {rawName:'count', name:'count', transformer: TypeTransformer.to('number')},
                {rawName:'offset', name:'offset', transformer: TypeTransformer.to('number')},
                {rawName:'output', name:'output', transformer: TypeTransformer.to('string')},
                {rawName:'is_async', name:'isAsync', transformer: TypeTransformer.to('boolean')},
                {rawName:'is_uncommitted', name:'isUncommitted', transformer: TypeTransformer.to('boolean')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('[TransactionInfoType]')},
                {rawName:'total_count', name:'totalCount', transformer: TypeTransformer.from('number')},
                {rawName:'timezone', name:'timezone', transformer: TypeTransformer.from('string')},
                {rawName:'count', name:'count', transformer: TypeTransformer.from('number')},
                {rawName:'history_report_id', name:'historyReportId', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('GetTransactionHistory',request,[reqMapper,respMapper]);
    },
    /**
     * Try to remove a record and transcription files.
    */
    deleteRecord: (request:DeleteRecordRequest):Promise<DeleteRecordResponse> => {
      const reqMapper = [{rawName:'record_url', name:'recordUrl', transformer: TypeTransformer.to('string')},
                {rawName:'record_id', name:'recordId', transformer: TypeTransformer.to('number')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('DeleteRecord',request,[reqMapper,respMapper]);
    },
    /**
     * Gets the ACD history.
    */
    getACDHistory: (request:GetACDHistoryRequest):Promise<GetACDHistoryResponse> => {
      const reqMapper = [{rawName:'from_date', name:'fromDate', transformer: TypeTransformer.to('timestamp')},
                {rawName:'to_date', name:'toDate', transformer: TypeTransformer.to('timestamp')},
                {rawName:'acd_session_history_id', name:'acdSessionHistoryId', transformer: TypeTransformer.to('intlist')},
                {rawName:'acd_request_id', name:'acdRequestId', transformer: TypeTransformer.to('stringlist')},
                {rawName:'acd_queue_id', name:'acdQueueId', transformer: TypeTransformer.to('intlist')},
                {rawName:'user_id', name:'userId', transformer: TypeTransformer.to('intlist')},
                {rawName:'operator_hangup', name:'operatorHangup', transformer: TypeTransformer.to('boolean')},
                {rawName:'unserviced', name:'unserviced', transformer: TypeTransformer.to('boolean')},
                {rawName:'min_waiting_time', name:'minWaitingTime', transformer: TypeTransformer.to('number')},
                {rawName:'rejected', name:'rejected', transformer: TypeTransformer.to('boolean')},
                {rawName:'with_events', name:'withEvents', transformer: TypeTransformer.to('boolean')},
                {rawName:'with_header', name:'withHeader', transformer: TypeTransformer.to('boolean')},
                {rawName:'desc_order', name:'descOrder', transformer: TypeTransformer.to('boolean')},
                {rawName:'count', name:'count', transformer: TypeTransformer.to('number')},
                {rawName:'offset', name:'offset', transformer: TypeTransformer.to('number')},
                {rawName:'output', name:'output', transformer: TypeTransformer.to('string')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('[ACDSessionInfoType]')},
                {rawName:'total_count', name:'totalCount', transformer: TypeTransformer.from('number')},
                {rawName:'count', name:'count', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('GetACDHistory',request,[reqMapper,respMapper]);
    },
    /**
     * Gets the history of account changes.
    */
    getAuditLog: (request:GetAuditLogRequest):Promise<GetAuditLogResponse> => {
      const reqMapper = [{rawName:'from_date', name:'fromDate', transformer: TypeTransformer.to('timestamp')},
                {rawName:'to_date', name:'toDate', transformer: TypeTransformer.to('timestamp')},
                {rawName:'audit_log_id', name:'auditLogId', transformer: TypeTransformer.to('intlist')},
                {rawName:'filtered_admin_user_id', name:'filteredAdminUserId', transformer: TypeTransformer.to('string')},
                {rawName:'filtered_ip', name:'filteredIp', transformer: TypeTransformer.to('stringlist')},
                {rawName:'filtered_cmd', name:'filteredCmd', transformer: TypeTransformer.to('stringlist')},
                {rawName:'advanced_filters', name:'advancedFilters', transformer: TypeTransformer.to('string')},
                {rawName:'with_header', name:'withHeader', transformer: TypeTransformer.to('boolean')},
                {rawName:'desc_order', name:'descOrder', transformer: TypeTransformer.to('boolean')},
                {rawName:'with_total_count', name:'withTotalCount', transformer: TypeTransformer.to('boolean')},
                {rawName:'count', name:'count', transformer: TypeTransformer.to('number')},
                {rawName:'offset', name:'offset', transformer: TypeTransformer.to('number')},
                {rawName:'output', name:'output', transformer: TypeTransformer.to('string')},
                {rawName:'is_async', name:'isAsync', transformer: TypeTransformer.to('boolean')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('[AuditLogInfoType]')},
                {rawName:'total_count', name:'totalCount', transformer: TypeTransformer.from('number')},
                {rawName:'count', name:'count', transformer: TypeTransformer.from('number')},
                {rawName:'timezone', name:'timezone', transformer: TypeTransformer.from('string')},
                {rawName:'history_report_id', name:'historyReportId', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('GetAuditLog',request,[reqMapper,respMapper]);
    }
  }

  public PSTNBlacklist:PSTNBlacklistInterface = {
    /**
     * Add a new phone number to the PSTN blacklist. BlackList works for numbers that are purchased from Voximplant only. Since we have no control over exact phone number format for calls from SIP integrations, blacklisting such numbers should be done via JavaScript scenarios.
    */
    addPstnBlackListItem: (request:AddPstnBlackListItemRequest):Promise<AddPstnBlackListItemResponse> => {
      const reqMapper = [{rawName:'pstn_blacklist_phone', name:'pstnBlacklistPhone', transformer: TypeTransformer.to('string')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')},
                {rawName:'pstn_blacklist_id', name:'pstnBlacklistId', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('AddPstnBlackListItem',request,[reqMapper,respMapper]);
    },
    /**
     * Update the PSTN blacklist item. BlackList works for numbers that are purchased from Voximplant only. Since we have no control over exact phone number format for calls from SIP integrations, blacklisting such numbers should be done via JavaScript scenarios.
    */
    setPstnBlackListItem: (request:SetPstnBlackListItemRequest):Promise<SetPstnBlackListItemResponse> => {
      const reqMapper = [{rawName:'pstn_blacklist_id', name:'pstnBlacklistId', transformer: TypeTransformer.to('number')},
                {rawName:'pstn_blacklist_phone', name:'pstnBlacklistPhone', transformer: TypeTransformer.to('string')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('SetPstnBlackListItem',request,[reqMapper,respMapper]);
    },
    /**
     * Remove phone number from the PSTN blacklist.
    */
    delPstnBlackListItem: (request:DelPstnBlackListItemRequest):Promise<DelPstnBlackListItemResponse> => {
      const reqMapper = [{rawName:'pstn_blacklist_id', name:'pstnBlacklistId', transformer: TypeTransformer.to('number')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('DelPstnBlackListItem',request,[reqMapper,respMapper]);
    },
    /**
     * Get the whole PSTN blacklist.
    */
    getPstnBlackList: (request:GetPstnBlackListRequest):Promise<GetPstnBlackListResponse> => {
      const reqMapper = [{rawName:'pstn_blacklist_id', name:'pstnBlacklistId', transformer: TypeTransformer.to('number')},
                {rawName:'pstn_blacklist_phone', name:'pstnBlacklistPhone', transformer: TypeTransformer.to('string')},
                {rawName:'count', name:'count', transformer: TypeTransformer.to('number')},
                {rawName:'offset', name:'offset', transformer: TypeTransformer.to('number')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('[PstnBlackListInfoType]')},
                {rawName:'total_count', name:'totalCount', transformer: TypeTransformer.from('number')},
                {rawName:'count', name:'count', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('GetPstnBlackList',request,[reqMapper,respMapper]);
    }
  }

  public SIPWhiteList:SIPWhiteListInterface = {
    /**
     * Adds a new network address to the SIP white list.
    */
    addSipWhiteListItem: (request:AddSipWhiteListItemRequest):Promise<AddSipWhiteListItemResponse> => {
      const reqMapper = [{rawName:'sip_whitelist_network', name:'sipWhitelistNetwork', transformer: TypeTransformer.to('string')},
                {rawName:'description', name:'description', transformer: TypeTransformer.to('string')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')},
                {rawName:'sip_whitelist_id', name:'sipWhitelistId', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('AddSipWhiteListItem',request,[reqMapper,respMapper]);
    },
    /**
     * Deletes the network address from the SIP white list.
    */
    delSipWhiteListItem: (request:DelSipWhiteListItemRequest):Promise<DelSipWhiteListItemResponse> => {
      const reqMapper = [{rawName:'sip_whitelist_id', name:'sipWhitelistId', transformer: TypeTransformer.to('number')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('DelSipWhiteListItem',request,[reqMapper,respMapper]);
    },
    /**
     * Edits the SIP white list.
    */
    setSipWhiteListItem: (request:SetSipWhiteListItemRequest):Promise<SetSipWhiteListItemResponse> => {
      const reqMapper = [{rawName:'sip_whitelist_id', name:'sipWhitelistId', transformer: TypeTransformer.to('number')},
                {rawName:'sip_whitelist_network', name:'sipWhitelistNetwork', transformer: TypeTransformer.to('string')},
                {rawName:'description', name:'description', transformer: TypeTransformer.to('string')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('SetSipWhiteListItem',request,[reqMapper,respMapper]);
    },
    /**
     * Gets the SIP white list.
    */
    getSipWhiteList: (request:GetSipWhiteListRequest):Promise<GetSipWhiteListResponse> => {
      const reqMapper = [{rawName:'sip_whitelist_id', name:'sipWhitelistId', transformer: TypeTransformer.to('number')},
                {rawName:'count', name:'count', transformer: TypeTransformer.to('number')},
                {rawName:'offset', name:'offset', transformer: TypeTransformer.to('number')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('[SipWhiteListInfoType]')},
                {rawName:'total_count', name:'totalCount', transformer: TypeTransformer.from('number')},
                {rawName:'count', name:'count', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('GetSipWhiteList',request,[reqMapper,respMapper]);
    }
  }

  public SIPRegistration:SIPRegistrationInterface = {
    /**
     * Create a new SIP registration. You should specify the application_id or application_name if you specify the rule_name or user_id, or user_name. You should set is_persistent=true if you specify the user_id or user_name. You can bind only one SIP registration to the user (the previous SIP registration will be auto unbound).
    */
    createSipRegistration: (request:CreateSipRegistrationRequest):Promise<CreateSipRegistrationResponse> => {
      const reqMapper = [{rawName:'sip_username', name:'sipUsername', transformer: TypeTransformer.to('string')},
                {rawName:'proxy', name:'proxy', transformer: TypeTransformer.to('string')},
                {rawName:'auth_user', name:'authUser', transformer: TypeTransformer.to('string')},
                {rawName:'outbound_proxy', name:'outboundProxy', transformer: TypeTransformer.to('string')},
                {rawName:'password', name:'password', transformer: TypeTransformer.to('string')},
                {rawName:'is_persistent', name:'isPersistent', transformer: TypeTransformer.to('boolean')},
                {rawName:'application_id', name:'applicationId', transformer: TypeTransformer.to('number')},
                {rawName:'application_name', name:'applicationName', transformer: TypeTransformer.to('string')},
                {rawName:'rule_id', name:'ruleId', transformer: TypeTransformer.to('number')},
                {rawName:'rule_name', name:'ruleName', transformer: TypeTransformer.to('string')},
                {rawName:'user_id', name:'userId', transformer: TypeTransformer.to('number')},
                {rawName:'user_name', name:'userName', transformer: TypeTransformer.to('string')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')},
                {rawName:'sip_registration_id', name:'sipRegistrationId', transformer: TypeTransformer.from('number')},
                {rawName:'account_info', name:'accountInfo', transformer: TypeTransformer.from('ShortAccountInfoType')}];
      return this.makeRequest('CreateSipRegistration',request,[reqMapper,respMapper]);
    },
    /**
     * Update SIP registration. You should specify the application_id or application_name if you specify the rule_name or user_id, or user_name. You can bind only one SIP registration to the user (the previous SIP registration will be auto unbound).
    */
    updateSipRegistration: (request:UpdateSipRegistrationRequest):Promise<UpdateSipRegistrationResponse> => {
      const reqMapper = [{rawName:'sip_registration_id', name:'sipRegistrationId', transformer: TypeTransformer.to('number')},
                {rawName:'sip_username', name:'sipUsername', transformer: TypeTransformer.to('string')},
                {rawName:'proxy', name:'proxy', transformer: TypeTransformer.to('string')},
                {rawName:'auth_user', name:'authUser', transformer: TypeTransformer.to('string')},
                {rawName:'outbound_proxy', name:'outboundProxy', transformer: TypeTransformer.to('string')},
                {rawName:'password', name:'password', transformer: TypeTransformer.to('string')},
                {rawName:'application_id', name:'applicationId', transformer: TypeTransformer.to('number')},
                {rawName:'application_name', name:'applicationName', transformer: TypeTransformer.to('string')},
                {rawName:'rule_id', name:'ruleId', transformer: TypeTransformer.to('number')},
                {rawName:'rule_name', name:'ruleName', transformer: TypeTransformer.to('string')},
                {rawName:'user_id', name:'userId', transformer: TypeTransformer.to('number')},
                {rawName:'user_name', name:'userName', transformer: TypeTransformer.to('string')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('UpdateSipRegistration',request,[reqMapper,respMapper]);
    },
    /**
     * Bind the SIP registration to the application/user or unbind the SIP registration from the application/user. You should specify the application_id or application_name if you specify the rule_name or user_id, or user_name. You should specify the sip_registration_id if you set bind=true. You can bind only one SIP registration to the user (the previous SIP registration will be auto unbound).
    */
    bindSipRegistration: (request:BindSipRegistrationRequest):Promise<BindSipRegistrationResponse> => {
      const reqMapper = [{rawName:'sip_registration_id', name:'sipRegistrationId', transformer: TypeTransformer.to('number')},
                {rawName:'application_id', name:'applicationId', transformer: TypeTransformer.to('number')},
                {rawName:'application_name', name:'applicationName', transformer: TypeTransformer.to('string')},
                {rawName:'rule_id', name:'ruleId', transformer: TypeTransformer.to('number')},
                {rawName:'rule_name', name:'ruleName', transformer: TypeTransformer.to('string')},
                {rawName:'user_id', name:'userId', transformer: TypeTransformer.to('number')},
                {rawName:'user_name', name:'userName', transformer: TypeTransformer.to('string')},
                {rawName:'bind', name:'bind', transformer: TypeTransformer.to('boolean')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('BindSipRegistration',request,[reqMapper,respMapper]);
    },
    /**
     * Delete SIP registration.
    */
    deleteSipRegistration: (request:DeleteSipRegistrationRequest):Promise<DeleteSipRegistrationResponse> => {
      const reqMapper = [{rawName:'sip_registration_id', name:'sipRegistrationId', transformer: TypeTransformer.to('number')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('DeleteSipRegistration',request,[reqMapper,respMapper]);
    },
    /**
     * Get active SIP registrations.
    */
    getSipRegistrations: (request:GetSipRegistrationsRequest):Promise<GetSipRegistrationsResponse> => {
      const reqMapper = [{rawName:'rule_id', name:'ruleId', transformer: TypeTransformer.to('intlist')},
                {rawName:'rule_name', name:'ruleName', transformer: TypeTransformer.to('stringlist')},
                {rawName:'user_id', name:'userId', transformer: TypeTransformer.to('intlist')},
                {rawName:'user_name', name:'userName', transformer: TypeTransformer.to('stringlist')},
                {rawName:'sip_registration_id', name:'sipRegistrationId', transformer: TypeTransformer.to('number')},
                {rawName:'sip_username', name:'sipUsername', transformer: TypeTransformer.to('string')},
                {rawName:'deactivated', name:'deactivated', transformer: TypeTransformer.to('boolean')},
                {rawName:'successful', name:'successful', transformer: TypeTransformer.to('boolean')},
                {rawName:'is_persistent', name:'isPersistent', transformer: TypeTransformer.to('boolean')},
                {rawName:'application_id', name:'applicationId', transformer: TypeTransformer.to('intlist')},
                {rawName:'application_name', name:'applicationName', transformer: TypeTransformer.to('stringlist')},
                {rawName:'is_bound_to_application', name:'isBoundToApplication', transformer: TypeTransformer.to('boolean')},
                {rawName:'proxy', name:'proxy', transformer: TypeTransformer.to('stringlist')},
                {rawName:'in_progress', name:'inProgress', transformer: TypeTransformer.to('boolean')},
                {rawName:'status_code', name:'statusCode', transformer: TypeTransformer.to('string')},
                {rawName:'count', name:'count', transformer: TypeTransformer.to('number')},
                {rawName:'offset', name:'offset', transformer: TypeTransformer.to('number')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('[SIPRegistrationType]')},
                {rawName:'count', name:'count', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('GetSipRegistrations',request,[reqMapper,respMapper]);
    }
  }

  public PhoneNumbers:PhoneNumbersInterface = {
    /**
     * Attach the phone number to the account. Note that phone numbers of some countries may require additional verification steps.
    */
    attachPhoneNumber: (request:AttachPhoneNumberRequest):Promise<AttachPhoneNumberResponse> => {
      const reqMapper = [{rawName:'phone_count', name:'phoneCount', transformer: TypeTransformer.to('number')},
                {rawName:'phone_number', name:'phoneNumber', transformer: TypeTransformer.to('stringlist')},
                {rawName:'country_code', name:'countryCode', transformer: TypeTransformer.to('string')},
                {rawName:'phone_category_name', name:'phoneCategoryName', transformer: TypeTransformer.to('string')},
                {rawName:'phone_region_id', name:'phoneRegionId', transformer: TypeTransformer.to('number')},
                {rawName:'country_state', name:'countryState', transformer: TypeTransformer.to('string')},
                {rawName:'regulation_address_id', name:'regulationAddressId', transformer: TypeTransformer.to('number')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')},
                {rawName:'phone_numbers', name:'phoneNumbers', transformer: TypeTransformer.from('[NewAttachedPhoneInfoType]')}];
      return this.makeRequest('AttachPhoneNumber',request,[reqMapper,respMapper]);
    },
    /**
     * Bind the phone number to the application or unbind the phone number from the application. You should specify the application_id or application_name if you specify the rule_name.
    */
    bindPhoneNumberToApplication: (request:BindPhoneNumberToApplicationRequest):Promise<BindPhoneNumberToApplicationResponse> => {
      const reqMapper = [{rawName:'phone_id', name:'phoneId', transformer: TypeTransformer.to('intlist')},
                {rawName:'phone_number', name:'phoneNumber', transformer: TypeTransformer.to('stringlist')},
                {rawName:'application_id', name:'applicationId', transformer: TypeTransformer.to('number')},
                {rawName:'application_name', name:'applicationName', transformer: TypeTransformer.to('string')},
                {rawName:'rule_id', name:'ruleId', transformer: TypeTransformer.to('number')},
                {rawName:'rule_name', name:'ruleName', transformer: TypeTransformer.to('string')},
                {rawName:'bind', name:'bind', transformer: TypeTransformer.to('boolean')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('BindPhoneNumberToApplication',request,[reqMapper,respMapper]);
    },
    /**
     * Deactivates the phone number.
    */
    deactivatePhoneNumber: (request:DeactivatePhoneNumberRequest):Promise<DeactivatePhoneNumberResponse> => {
      const reqMapper = [{rawName:'phone_id', name:'phoneId', transformer: TypeTransformer.to('intlist')},
                {rawName:'phone_number', name:'phoneNumber', transformer: TypeTransformer.to('stringlist')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('DeactivatePhoneNumber',request,[reqMapper,respMapper]);
    },
    /**
     * Set the phone number information.
    */
    setPhoneNumberInfo: (request:SetPhoneNumberInfoRequest):Promise<SetPhoneNumberInfoResponse> => {
      const reqMapper = [{rawName:'phone_id', name:'phoneId', transformer: TypeTransformer.to('intlist')},
                {rawName:'phone_number', name:'phoneNumber', transformer: TypeTransformer.to('stringlist')},
                {rawName:'incoming_sms_callback_url', name:'incomingSmsCallbackUrl', transformer: TypeTransformer.to('string')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('SetPhoneNumberInfo',request,[reqMapper,respMapper]);
    },
    /**
     * Gets the account phone numbers.
    */
    getPhoneNumbers: (request:GetPhoneNumbersRequest):Promise<GetPhoneNumbersResponse> => {
      const reqMapper = [{rawName:'phone_id', name:'phoneId', transformer: TypeTransformer.to('intlist')},
                {rawName:'phone_number', name:'phoneNumber', transformer: TypeTransformer.to('stringlist')},
                {rawName:'application_id', name:'applicationId', transformer: TypeTransformer.to('number')},
                {rawName:'application_name', name:'applicationName', transformer: TypeTransformer.to('string')},
                {rawName:'is_bound_to_application', name:'isBoundToApplication', transformer: TypeTransformer.to('boolean')},
                {rawName:'phone_template', name:'phoneTemplate', transformer: TypeTransformer.to('string')},
                {rawName:'country_code', name:'countryCode', transformer: TypeTransformer.to('stringlist')},
                {rawName:'phone_category_name', name:'phoneCategoryName', transformer: TypeTransformer.to('string')},
                {rawName:'canceled', name:'canceled', transformer: TypeTransformer.to('boolean')},
                {rawName:'deactivated', name:'deactivated', transformer: TypeTransformer.to('boolean')},
                {rawName:'auto_charge', name:'autoCharge', transformer: TypeTransformer.to('boolean')},
                {rawName:'from_phone_next_renewal', name:'fromPhoneNextRenewal', transformer: TypeTransformer.to('date')},
                {rawName:'to_phone_next_renewal', name:'toPhoneNextRenewal', transformer: TypeTransformer.to('date')},
                {rawName:'from_phone_purchase_date', name:'fromPhonePurchaseDate', transformer: TypeTransformer.to('timestamp')},
                {rawName:'to_phone_purchase_date', name:'toPhonePurchaseDate', transformer: TypeTransformer.to('timestamp')},
                {rawName:'child_account_id', name:'childAccountId', transformer: TypeTransformer.to('intlist')},
                {rawName:'children_phones_only', name:'childrenPhonesOnly', transformer: TypeTransformer.to('boolean')},
                {rawName:'verification_name', name:'verificationName', transformer: TypeTransformer.to('string')},
                {rawName:'verification_status', name:'verificationStatus', transformer: TypeTransformer.to('stringlist')},
                {rawName:'from_unverified_hold_until', name:'fromUnverifiedHoldUntil', transformer: TypeTransformer.to('date')},
                {rawName:'to_unverified_hold_until', name:'toUnverifiedHoldUntil', transformer: TypeTransformer.to('date')},
                {rawName:'can_be_used', name:'canBeUsed', transformer: TypeTransformer.to('boolean')},
                {rawName:'order_by', name:'orderBy', transformer: TypeTransformer.to('string')},
                {rawName:'sandbox', name:'sandbox', transformer: TypeTransformer.to('string')},
                {rawName:'count', name:'count', transformer: TypeTransformer.to('number')},
                {rawName:'offset', name:'offset', transformer: TypeTransformer.to('number')},
                {rawName:'phone_region_name', name:'phoneRegionName', transformer: TypeTransformer.to('stringlist')},
                {rawName:'rule_id', name:'ruleId', transformer: TypeTransformer.to('intlist')},
                {rawName:'rule_name', name:'ruleName', transformer: TypeTransformer.to('stringlist')},
                {rawName:'is_bound_to_rule', name:'isBoundToRule', transformer: TypeTransformer.to('boolean')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('[AttachedPhoneInfoType]')},
                {rawName:'total_count', name:'totalCount', transformer: TypeTransformer.from('number')},
                {rawName:'count', name:'count', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('GetPhoneNumbers',request,[reqMapper,respMapper]);
    },
    /**
     * Gets the new phone numbers.
    */
    getNewPhoneNumbers: (request:GetNewPhoneNumbersRequest):Promise<GetNewPhoneNumbersResponse> => {
      const reqMapper = [{rawName:'country_code', name:'countryCode', transformer: TypeTransformer.to('string')},
                {rawName:'phone_category_name', name:'phoneCategoryName', transformer: TypeTransformer.to('string')},
                {rawName:'phone_region_id', name:'phoneRegionId', transformer: TypeTransformer.to('number')},
                {rawName:'country_state', name:'countryState', transformer: TypeTransformer.to('string')},
                {rawName:'count', name:'count', transformer: TypeTransformer.to('number')},
                {rawName:'offset', name:'offset', transformer: TypeTransformer.to('number')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('[NewPhoneInfoType]')},
                {rawName:'total_count', name:'totalCount', transformer: TypeTransformer.from('number')},
                {rawName:'count', name:'count', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('GetNewPhoneNumbers',request,[reqMapper,respMapper]);
    },
    /**
     * Gets the phone number categories.
    */
    getPhoneNumberCategories: (request:GetPhoneNumberCategoriesRequest):Promise<GetPhoneNumberCategoriesResponse> => {
      const reqMapper = [{rawName:'country_code', name:'countryCode', transformer: TypeTransformer.to('stringlist')},
                {rawName:'sandbox', name:'sandbox', transformer: TypeTransformer.to('string')},
                {rawName:'locale', name:'locale', transformer: TypeTransformer.to('string')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('[PhoneNumberCountryInfoType]')}];
      return this.makeRequest('GetPhoneNumberCategories',request,[reqMapper,respMapper]);
    },
    /**
     * Gets the phone number country states.
    */
    getPhoneNumberCountryStates: (request:GetPhoneNumberCountryStatesRequest):Promise<GetPhoneNumberCountryStatesResponse> => {
      const reqMapper = [{rawName:'country_code', name:'countryCode', transformer: TypeTransformer.to('string')},
                {rawName:'phone_category_name', name:'phoneCategoryName', transformer: TypeTransformer.to('string')},
                {rawName:'country_state', name:'countryState', transformer: TypeTransformer.to('string')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('[PhoneNumberCountryStateInfoType]')}];
      return this.makeRequest('GetPhoneNumberCountryStates',request,[reqMapper,respMapper]);
    },
    /**
     * Get the country regions of the phone numbers. The response will also contain the info about multiple numbers subscription for the child accounts.
    */
    getPhoneNumberRegions: (request:GetPhoneNumberRegionsRequest):Promise<GetPhoneNumberRegionsResponse> => {
      const reqMapper = [{rawName:'country_code', name:'countryCode', transformer: TypeTransformer.to('string')},
                {rawName:'phone_category_name', name:'phoneCategoryName', transformer: TypeTransformer.to('string')},
                {rawName:'country_state', name:'countryState', transformer: TypeTransformer.to('string')},
                {rawName:'omit_empty', name:'omitEmpty', transformer: TypeTransformer.to('boolean')},
                {rawName:'phone_region_id', name:'phoneRegionId', transformer: TypeTransformer.to('number')},
                {rawName:'phone_region_name', name:'phoneRegionName', transformer: TypeTransformer.to('string')},
                {rawName:'phone_region_code', name:'phoneRegionCode', transformer: TypeTransformer.to('string')},
                {rawName:'locale', name:'locale', transformer: TypeTransformer.to('string')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('[PhoneNumberCountryRegionInfoType]')}];
      return this.makeRequest('GetPhoneNumberRegions',request,[reqMapper,respMapper]);
    },
    /**
     * Get actual info on the country region of the phone numbers. The response will also contain the info about multiple numbers subscription for the child accounts.
    */
    getActualPhoneNumberRegion: (request:GetActualPhoneNumberRegionRequest):Promise<GetActualPhoneNumberRegionResponse> => {
      const reqMapper = [{rawName:'country_code', name:'countryCode', transformer: TypeTransformer.to('string')},
                {rawName:'phone_category_name', name:'phoneCategoryName', transformer: TypeTransformer.to('string')},
                {rawName:'phone_region_id', name:'phoneRegionId', transformer: TypeTransformer.to('number')},
                {rawName:'country_state', name:'countryState', transformer: TypeTransformer.to('string')},
                {rawName:'locale', name:'locale', transformer: TypeTransformer.to('string')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('PhoneNumberCountryRegionInfoType')}];
      return this.makeRequest('GetActualPhoneNumberRegion',request,[reqMapper,respMapper]);
    },
    /**
     * Gets all countries where the specific account has phone numbers.
    */
    getAccountPhoneNumberCountries: (request:GetAccountPhoneNumberCountriesRequest):Promise<GetAccountPhoneNumberCountriesResponse> => {
      const reqMapper = [{rawName:'application_id', name:'applicationId', transformer: TypeTransformer.to('intlist')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('[string]')}];
      return this.makeRequest('GetAccountPhoneNumberCountries',request,[reqMapper,respMapper]);
    }
  }

  public CallerIDs:CallerIDsInterface = {
    /**
     * Adds a new caller ID. Caller ID is the phone that will be displayed to the called user. This number can be used for call back.
    */
    addCallerID: (request:AddCallerIDRequest):Promise<AddCallerIDResponse> => {
      const reqMapper = [{rawName:'callerid_number', name:'calleridNumber', transformer: TypeTransformer.to('string')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')},
                {rawName:'callerid_id', name:'calleridId', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('AddCallerID',request,[reqMapper,respMapper]);
    },
    /**
     * Activates the CallerID by the verification code.
    */
    activateCallerID: (request:ActivateCallerIDRequest):Promise<ActivateCallerIDResponse> => {
      const reqMapper = [{rawName:'callerid_id', name:'calleridId', transformer: TypeTransformer.to('number')},
                {rawName:'callerid_number', name:'calleridNumber', transformer: TypeTransformer.to('string')},
                {rawName:'verification_code', name:'verificationCode', transformer: TypeTransformer.to('string')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('ActivateCallerID',request,[reqMapper,respMapper]);
    },
    /**
     * Deletes the CallerID. Note: you can't delete a CID permanently (the antispam defence).
    */
    delCallerID: (request:DelCallerIDRequest):Promise<DelCallerIDResponse> => {
      const reqMapper = [{rawName:'callerid_id', name:'calleridId', transformer: TypeTransformer.to('number')},
                {rawName:'callerid_number', name:'calleridNumber', transformer: TypeTransformer.to('string')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('DelCallerID',request,[reqMapper,respMapper]);
    },
    /**
     * Gets the account callerIDs.
    */
    getCallerIDs: (request:GetCallerIDsRequest):Promise<GetCallerIDsResponse> => {
      const reqMapper = [{rawName:'callerid_id', name:'calleridId', transformer: TypeTransformer.to('number')},
                {rawName:'callerid_number', name:'calleridNumber', transformer: TypeTransformer.to('string')},
                {rawName:'active', name:'active', transformer: TypeTransformer.to('boolean')},
                {rawName:'order_by', name:'orderBy', transformer: TypeTransformer.to('string')},
                {rawName:'count', name:'count', transformer: TypeTransformer.to('number')},
                {rawName:'offset', name:'offset', transformer: TypeTransformer.to('number')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('[CallerIDInfoType]')},
                {rawName:'total_count', name:'totalCount', transformer: TypeTransformer.from('number')},
                {rawName:'count', name:'count', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('GetCallerIDs',request,[reqMapper,respMapper]);
    },
    /**
     * Gets a verification code via phone call to the **callerid_number**.
    */
    verifyCallerID: (request:VerifyCallerIDRequest):Promise<VerifyCallerIDResponse> => {
      const reqMapper = [{rawName:'callerid_id', name:'calleridId', transformer: TypeTransformer.to('number')},
                {rawName:'callerid_number', name:'calleridNumber', transformer: TypeTransformer.to('string')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('VerifyCallerID',request,[reqMapper,respMapper]);
    }
  }

  public OutboundTestNumbers:OutboundTestNumbersInterface = {
    /**
     * Adds a personal phone number to test outbound calls. Only one personal phone number can be used. To replace it with another, delete the existing one first.
    */
    addOutboundTestPhoneNumber: (request:AddOutboundTestPhoneNumberRequest):Promise<AddOutboundTestPhoneNumberResponse> => {
      const reqMapper = [{rawName:'phone_number', name:'phoneNumber', transformer: TypeTransformer.to('string')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('AddOutboundTestPhoneNumber',request,[reqMapper,respMapper]);
    },
    /**
     * Starts a call to the added phone number and pronounces a verification code. You have only 5 verification attempts per day and 100 in total. 1 minute should pass between 2 attempts.
    */
    verifyOutboundTestPhoneNumber: (request:VerifyOutboundTestPhoneNumberRequest):Promise<VerifyOutboundTestPhoneNumberResponse> => {
      const reqMapper = [];
      const respMapper = [{rawName:'daily_attempts_left', name:'dailyAttemptsLeft', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('VerifyOutboundTestPhoneNumber',request,[reqMapper,respMapper]);
    },
    /**
     * Activates the phone number by the verification code.
    */
    activateOutboundTestPhoneNumber: (request:ActivateOutboundTestPhoneNumberRequest):Promise<ActivateOutboundTestPhoneNumberResponse> => {
      const reqMapper = [{rawName:'verification_code', name:'verificationCode', transformer: TypeTransformer.to('string')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('ActivateOutboundTestPhoneNumber',request,[reqMapper,respMapper]);
    },
    /**
     * Deletes the existing phone number.
    */
    delOutboundTestPhoneNumber: (request:DelOutboundTestPhoneNumberRequest):Promise<DelOutboundTestPhoneNumberResponse> => {
      const reqMapper = [];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('DelOutboundTestPhoneNumber',request,[reqMapper,respMapper]);
    },
    /**
     * Shows the phone number info.
    */
    getOutboundTestPhoneNumbers: (request:GetOutboundTestPhoneNumbersRequest):Promise<GetOutboundTestPhoneNumbersResponse> => {
      const reqMapper = [];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('[OutboundTestPhonenumberInfoType]')}];
      return this.makeRequest('GetOutboundTestPhoneNumbers',request,[reqMapper,respMapper]);
    }
  }

  public Queues:QueuesInterface = {
    /**
     * Adds a new ACD queue.
    */
    addQueue: (request:AddQueueRequest):Promise<AddQueueResponse> => {
      const reqMapper = [{rawName:'application_id', name:'applicationId', transformer: TypeTransformer.to('number')},
                {rawName:'application_name', name:'applicationName', transformer: TypeTransformer.to('string')},
                {rawName:'acd_queue_name', name:'acdQueueName', transformer: TypeTransformer.to('string')},
                {rawName:'acd_queue_priority', name:'acdQueuePriority', transformer: TypeTransformer.to('number')},
                {rawName:'auto_binding', name:'autoBinding', transformer: TypeTransformer.to('boolean')},
                {rawName:'service_probability', name:'serviceProbability', transformer: TypeTransformer.to('number')},
                {rawName:'max_queue_size', name:'maxQueueSize', transformer: TypeTransformer.to('number')},
                {rawName:'max_waiting_time', name:'maxWaitingTime', transformer: TypeTransformer.to('number')},
                {rawName:'average_service_time', name:'averageServiceTime', transformer: TypeTransformer.to('number')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')},
                {rawName:'acd_queue_id', name:'acdQueueId', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('AddQueue',request,[reqMapper,respMapper]);
    },
    /**
     * Bind/unbind users to/from the specified ACD queues. Note that users and queues should be already bound to the same application.
    */
    bindUserToQueue: (request:BindUserToQueueRequest):Promise<BindUserToQueueResponse> => {
      const reqMapper = [{rawName:'bind', name:'bind', transformer: TypeTransformer.to('boolean')},
                {rawName:'application_id', name:'applicationId', transformer: TypeTransformer.to('number')},
                {rawName:'application_name', name:'applicationName', transformer: TypeTransformer.to('string')},
                {rawName:'user_id', name:'userId', transformer: TypeTransformer.to('intlist')},
                {rawName:'user_name', name:'userName', transformer: TypeTransformer.to('stringlist')},
                {rawName:'acd_queue_id', name:'acdQueueId', transformer: TypeTransformer.to('intlist')},
                {rawName:'acd_queue_name', name:'acdQueueName', transformer: TypeTransformer.to('stringlist')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('BindUserToQueue',request,[reqMapper,respMapper]);
    },
    /**
     * Deletes the ACD queue.
    */
    delQueue: (request:DelQueueRequest):Promise<DelQueueResponse> => {
      const reqMapper = [{rawName:'acd_queue_id', name:'acdQueueId', transformer: TypeTransformer.to('intlist')},
                {rawName:'acd_queue_name', name:'acdQueueName', transformer: TypeTransformer.to('stringlist')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('DelQueue',request,[reqMapper,respMapper]);
    },
    /**
     * Edits the ACD queue.
    */
    setQueueInfo: (request:SetQueueInfoRequest):Promise<SetQueueInfoResponse> => {
      const reqMapper = [{rawName:'acd_queue_id', name:'acdQueueId', transformer: TypeTransformer.to('number')},
                {rawName:'acd_queue_name', name:'acdQueueName', transformer: TypeTransformer.to('string')},
                {rawName:'new_acd_queue_name', name:'newAcdQueueName', transformer: TypeTransformer.to('string')},
                {rawName:'acd_queue_priority', name:'acdQueuePriority', transformer: TypeTransformer.to('number')},
                {rawName:'auto_binding', name:'autoBinding', transformer: TypeTransformer.to('boolean')},
                {rawName:'service_probability', name:'serviceProbability', transformer: TypeTransformer.to('number')},
                {rawName:'max_queue_size', name:'maxQueueSize', transformer: TypeTransformer.to('number')},
                {rawName:'max_waiting_time', name:'maxWaitingTime', transformer: TypeTransformer.to('number')},
                {rawName:'average_service_time', name:'averageServiceTime', transformer: TypeTransformer.to('number')},
                {rawName:'application_id', name:'applicationId', transformer: TypeTransformer.to('number')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('SetQueueInfo',request,[reqMapper,respMapper]);
    },
    /**
     * Gets the ACD queues.
    */
    getQueues: (request:GetQueuesRequest):Promise<GetQueuesResponse> => {
      const reqMapper = [{rawName:'acd_queue_id', name:'acdQueueId', transformer: TypeTransformer.to('number')},
                {rawName:'acd_queue_name', name:'acdQueueName', transformer: TypeTransformer.to('string')},
                {rawName:'application_id', name:'applicationId', transformer: TypeTransformer.to('number')},
                {rawName:'skill_id', name:'skillId', transformer: TypeTransformer.to('number')},
                {rawName:'excluded_skill_id', name:'excludedSkillId', transformer: TypeTransformer.to('number')},
                {rawName:'with_skills', name:'withSkills', transformer: TypeTransformer.to('boolean')},
                {rawName:'showing_skill_id', name:'showingSkillId', transformer: TypeTransformer.to('number')},
                {rawName:'count', name:'count', transformer: TypeTransformer.to('number')},
                {rawName:'offset', name:'offset', transformer: TypeTransformer.to('number')},
                {rawName:'with_operatorcount', name:'withOperatorcount', transformer: TypeTransformer.to('boolean')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('[QueueInfoType]')},
                {rawName:'total_count', name:'totalCount', transformer: TypeTransformer.from('number')},
                {rawName:'count', name:'count', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('GetQueues',request,[reqMapper,respMapper]);
    },
    /**
     * Gets the current ACD queue state.
    */
    getACDState: (request:GetACDStateRequest):Promise<GetACDStateResponse> => {
      const reqMapper = [{rawName:'acd_queue_id', name:'acdQueueId', transformer: TypeTransformer.to('intlist')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('ACDStateType')}];
      return this.makeRequest('GetACDState',request,[reqMapper,respMapper]);
    },
    /**
     * Get statistics for calls distributed to users (referred as 'operators') via the 'ACD' module. This method can filter statistic based on operator ids, queue ids and date-time interval. It can also group results by day or hour.
    */
    getACDOperatorStatistics: (request:GetACDOperatorStatisticsRequest):Promise<GetACDOperatorStatisticsResponse> => {
      const reqMapper = [{rawName:'from_date', name:'fromDate', transformer: TypeTransformer.to('timestamp')},
                {rawName:'user_id', name:'userId', transformer: TypeTransformer.to('intlist')},
                {rawName:'to_date', name:'toDate', transformer: TypeTransformer.to('timestamp')},
                {rawName:'acd_queue_id', name:'acdQueueId', transformer: TypeTransformer.to('intlist')},
                {rawName:'abbreviation', name:'abbreviation', transformer: TypeTransformer.to('boolean')},
                {rawName:'report', name:'report', transformer: TypeTransformer.to('stringlist')},
                {rawName:'aggregation', name:'aggregation', transformer: TypeTransformer.to('string')},
                {rawName:'group', name:'group', transformer: TypeTransformer.to('string')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('[ACDOperatorAggregationGroupType]')}];
      return this.makeRequest('GetACDOperatorStatistics',request,[reqMapper,respMapper]);
    },
    /**
     * Get statistics for calls distributed to users (referred as 'operators') via the 'queue' distribution system. This method can filter statistic based on operator ids, queue ids and date-time interval. It can also group results by day or hour.
    */
    getACDQueueStatistics: (request:GetACDQueueStatisticsRequest):Promise<GetACDQueueStatisticsResponse> => {
      const reqMapper = [{rawName:'from_date', name:'fromDate', transformer: TypeTransformer.to('timestamp')},
                {rawName:'to_date', name:'toDate', transformer: TypeTransformer.to('timestamp')},
                {rawName:'abbreviation', name:'abbreviation', transformer: TypeTransformer.to('boolean')},
                {rawName:'acd_queue_id', name:'acdQueueId', transformer: TypeTransformer.to('intlist')},
                {rawName:'report', name:'report', transformer: TypeTransformer.to('stringlist')},
                {rawName:'aggregation', name:'aggregation', transformer: TypeTransformer.to('string')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('[ACDQueueStatisticsType]')}];
      return this.makeRequest('GetACDQueueStatistics',request,[reqMapper,respMapper]);
    },
    /**
     * Get statistics for the specified operators and ACD statuses. This method can filter statistics by operator ids and statuses. It can also group results by day/hour or users.
    */
    getACDOperatorStatusStatistics: (request:GetACDOperatorStatusStatisticsRequest):Promise<GetACDOperatorStatusStatisticsResponse> => {
      const reqMapper = [{rawName:'from_date', name:'fromDate', transformer: TypeTransformer.to('timestamp')},
                {rawName:'user_id', name:'userId', transformer: TypeTransformer.to('stringlist')},
                {rawName:'to_date', name:'toDate', transformer: TypeTransformer.to('timestamp')},
                {rawName:'acd_status', name:'acdStatus', transformer: TypeTransformer.to('stringlist')},
                {rawName:'aggregation', name:'aggregation', transformer: TypeTransformer.to('string')},
                {rawName:'group', name:'group', transformer: TypeTransformer.to('string')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('[ACDOperatorStatusAggregationGroupType]')}];
      return this.makeRequest('GetACDOperatorStatusStatistics',request,[reqMapper,respMapper]);
    }
  }

  public SmartQueue:SmartQueueInterface = {
    /**
     * Gets the metrics for the specified smart queue for the last 30 minutes.
    */
    getSmartQueueRealtimeMetrics: (request:GetSmartQueueRealtimeMetricsRequest):Promise<GetSmartQueueRealtimeMetricsResponse> => {
      const reqMapper = [{rawName:'application_id', name:'applicationId', transformer: TypeTransformer.to('number')},
                {rawName:'application_name', name:'applicationName', transformer: TypeTransformer.to('string')},
                {rawName:'report_type', name:'reportType', transformer: TypeTransformer.to('stringlist')},
                {rawName:'user_id', name:'userId', transformer: TypeTransformer.to('intlist')},
                {rawName:'user_name', name:'userName', transformer: TypeTransformer.to('stringlist')},
                {rawName:'sq_queue_id', name:'sqQueueId', transformer: TypeTransformer.to('intlist')},
                {rawName:'sq_queue_name', name:'sqQueueName', transformer: TypeTransformer.to('stringlist')},
                {rawName:'from_date', name:'fromDate', transformer: TypeTransformer.to('timestamp')},
                {rawName:'to_date', name:'toDate', transformer: TypeTransformer.to('timestamp')},
                {rawName:'timezone', name:'timezone', transformer: TypeTransformer.to('string')},
                {rawName:'interval', name:'interval', transformer: TypeTransformer.to('string')},
                {rawName:'group_by', name:'groupBy', transformer: TypeTransformer.to('string')},
                {rawName:'max_waiting_sec', name:'maxWaitingSec', transformer: TypeTransformer.to('number')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('[SmartQueueMetricsResult]')},
                {rawName:'timezone', name:'timezone', transformer: TypeTransformer.from('string')}];
      return this.makeRequest('GetSmartQueueRealtimeMetrics',request,[reqMapper,respMapper]);
    },
    /**
     * Gets the metrics for the specified smart queue for the last 2 days.
    */
    getSmartQueueDayHistory: (request:GetSmartQueueDayHistoryRequest):Promise<GetSmartQueueDayHistoryResponse> => {
      const reqMapper = [{rawName:'application_id', name:'applicationId', transformer: TypeTransformer.to('number')},
                {rawName:'application_name', name:'applicationName', transformer: TypeTransformer.to('string')},
                {rawName:'sq_queue_id', name:'sqQueueId', transformer: TypeTransformer.to('intlist')},
                {rawName:'report_type', name:'reportType', transformer: TypeTransformer.to('stringlist')},
                {rawName:'user_id', name:'userId', transformer: TypeTransformer.to('intlist')},
                {rawName:'user_name', name:'userName', transformer: TypeTransformer.to('stringlist')},
                {rawName:'sq_queue_name', name:'sqQueueName', transformer: TypeTransformer.to('stringlist')},
                {rawName:'from_date', name:'fromDate', transformer: TypeTransformer.to('timestamp')},
                {rawName:'to_date', name:'toDate', transformer: TypeTransformer.to('timestamp')},
                {rawName:'timezone', name:'timezone', transformer: TypeTransformer.to('string')},
                {rawName:'interval', name:'interval', transformer: TypeTransformer.to('string')},
                {rawName:'group_by', name:'groupBy', transformer: TypeTransformer.to('string')},
                {rawName:'max_waiting_sec', name:'maxWaitingSec', transformer: TypeTransformer.to('number')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('[SmartQueueMetricsResult]')},
                {rawName:'timezone', name:'timezone', transformer: TypeTransformer.from('string')}];
      return this.makeRequest('GetSmartQueueDayHistory',request,[reqMapper,respMapper]);
    },
    /**
     * Gets history for the specified smart queue.
    */
    requestSmartQueueHistory: (request:RequestSmartQueueHistoryRequest):Promise<RequestSmartQueueHistoryResponse> => {
      const reqMapper = [{rawName:'application_id', name:'applicationId', transformer: TypeTransformer.to('number')},
                {rawName:'application_name', name:'applicationName', transformer: TypeTransformer.to('string')},
                {rawName:'sq_queue_id', name:'sqQueueId', transformer: TypeTransformer.to('intlist')},
                {rawName:'from_date', name:'fromDate', transformer: TypeTransformer.to('timestamp')},
                {rawName:'to_date', name:'toDate', transformer: TypeTransformer.to('timestamp')},
                {rawName:'report_type', name:'reportType', transformer: TypeTransformer.to('stringlist')},
                {rawName:'user_id', name:'userId', transformer: TypeTransformer.to('intlist')},
                {rawName:'user_name', name:'userName', transformer: TypeTransformer.to('stringlist')},
                {rawName:'sq_queue_name', name:'sqQueueName', transformer: TypeTransformer.to('stringlist')},
                {rawName:'timezone', name:'timezone', transformer: TypeTransformer.to('string')},
                {rawName:'interval', name:'interval', transformer: TypeTransformer.to('string')},
                {rawName:'group_by', name:'groupBy', transformer: TypeTransformer.to('string')},
                {rawName:'max_waiting_sec', name:'maxWaitingSec', transformer: TypeTransformer.to('number')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')},
                {rawName:'history_report_id', name:'historyReportId', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('RequestSmartQueueHistory',request,[reqMapper,respMapper]);
    },
    /**
     * Gets the current state of the specified smart queue.
    */
    getSQState: (request:GetSQStateRequest):Promise<GetSQStateResponse> => {
      const reqMapper = [{rawName:'application_id', name:'applicationId', transformer: TypeTransformer.to('number')},
                {rawName:'sq_queue_id', name:'sqQueueId', transformer: TypeTransformer.to('intlist')},
                {rawName:'application_name', name:'applicationName', transformer: TypeTransformer.to('string')},
                {rawName:'sq_queue_name', name:'sqQueueName', transformer: TypeTransformer.to('stringlist')},
                {rawName:'timezone', name:'timezone', transformer: TypeTransformer.to('string')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('[SmartQueueState]')}];
      return this.makeRequest('GetSQState',request,[reqMapper,respMapper]);
    },
    /**
     * Adds a status if there is no match for the given internal status and renames it if there is a match. It means that if the passed **sq_status_name** parameter is not in the mapping table, a new entry is created in there; if it is, the **name** field in its mapping is replaced with **custom_status_name**.
    */
    sQ_SetAgentCustomStatusMapping: (request:SQ_SetAgentCustomStatusMappingRequest):Promise<SQ_SetAgentCustomStatusMappingResponse> => {
      const reqMapper = [{rawName:'sq_status_name', name:'sqStatusName', transformer: TypeTransformer.to('string')},
                {rawName:'custom_status_name', name:'customStatusName', transformer: TypeTransformer.to('string')},
                {rawName:'application_id', name:'applicationId', transformer: TypeTransformer.to('number')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('SQ_SetAgentCustomStatusMapping',request,[reqMapper,respMapper]);
    },
    /**
     * Returns the mapping list of SQ statuses and custom statuses. SQ statuses are returned whether or not they have mappings to custom statuses.
    */
    sQ_GetAgentCustomStatusMapping: (request:SQ_GetAgentCustomStatusMappingRequest):Promise<SQ_GetAgentCustomStatusMappingResponse> => {
      const reqMapper = [{rawName:'application_id', name:'applicationId', transformer: TypeTransformer.to('number')}];
      const respMapper = [{rawName:'sq_status_name', name:'sqStatusName', transformer: TypeTransformer.from('string')},
                {rawName:'custom_status_name', name:'customStatusName', transformer: TypeTransformer.from('string')}];
      return this.makeRequest('SQ_GetAgentCustomStatusMapping',request,[reqMapper,respMapper]);
    },
    /**
     * Removes a mapping from the mapping table. If there is no such mapping, does nothing.
    */
    sQ_DeleteAgentCustomStatusMapping: (request:SQ_DeleteAgentCustomStatusMappingRequest):Promise<SQ_DeleteAgentCustomStatusMappingResponse> => {
      const reqMapper = [{rawName:'application_id', name:'applicationId', transformer: TypeTransformer.to('number')},
                {rawName:'sq_status_name', name:'sqStatusName', transformer: TypeTransformer.to('string')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('SQ_DeleteAgentCustomStatusMapping',request,[reqMapper,respMapper]);
    },
    /**
     * Adds a new queue.
    */
    sQ_AddQueue: (request:SQ_AddQueueRequest):Promise<SQ_AddQueueResponse> => {
      const reqMapper = [{rawName:'application_id', name:'applicationId', transformer: TypeTransformer.to('number')},
                {rawName:'sq_queue_name', name:'sqQueueName', transformer: TypeTransformer.to('string')},
                {rawName:'call_agent_selection', name:'callAgentSelection', transformer: TypeTransformer.to('string')},
                {rawName:'call_task_selection', name:'callTaskSelection', transformer: TypeTransformer.to('string')},
                {rawName:'application_name', name:'applicationName', transformer: TypeTransformer.to('string')},
                {rawName:'im_agent_selection', name:'imAgentSelection', transformer: TypeTransformer.to('string')},
                {rawName:'im_task_selection', name:'imTaskSelection', transformer: TypeTransformer.to('string')},
                {rawName:'description', name:'description', transformer: TypeTransformer.to('string')},
                {rawName:'call_max_waiting_time', name:'callMaxWaitingTime', transformer: TypeTransformer.to('number')},
                {rawName:'im_max_waiting_time', name:'imMaxWaitingTime', transformer: TypeTransformer.to('number')},
                {rawName:'call_max_queue_size', name:'callMaxQueueSize', transformer: TypeTransformer.to('number')},
                {rawName:'im_max_queue_size', name:'imMaxQueueSize', transformer: TypeTransformer.to('number')},
                {rawName:'priority', name:'priority', transformer: TypeTransformer.to('number')}];
      const respMapper = [{rawName:'sq_queue_id', name:'sqQueueId', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('SQ_AddQueue',request,[reqMapper,respMapper]);
    },
    /**
     * Edits an existing queue.
    */
    sQ_SetQueueInfo: (request:SQ_SetQueueInfoRequest):Promise<SQ_SetQueueInfoResponse> => {
      const reqMapper = [{rawName:'application_id', name:'applicationId', transformer: TypeTransformer.to('number')},
                {rawName:'sq_queue_id', name:'sqQueueId', transformer: TypeTransformer.to('number')},
                {rawName:'application_name', name:'applicationName', transformer: TypeTransformer.to('string')},
                {rawName:'sq_queue_name', name:'sqQueueName', transformer: TypeTransformer.to('string')},
                {rawName:'new_sq_queue_name', name:'newSqQueueName', transformer: TypeTransformer.to('string')},
                {rawName:'call_agent_selection', name:'callAgentSelection', transformer: TypeTransformer.to('string')},
                {rawName:'im_agent_selection', name:'imAgentSelection', transformer: TypeTransformer.to('string')},
                {rawName:'call_task_selection', name:'callTaskSelection', transformer: TypeTransformer.to('string')},
                {rawName:'im_task_selection', name:'imTaskSelection', transformer: TypeTransformer.to('string')},
                {rawName:'description', name:'description', transformer: TypeTransformer.to('string')},
                {rawName:'call_max_waiting_time', name:'callMaxWaitingTime', transformer: TypeTransformer.to('number')},
                {rawName:'im_max_waiting_time', name:'imMaxWaitingTime', transformer: TypeTransformer.to('number')},
                {rawName:'call_max_queue_size', name:'callMaxQueueSize', transformer: TypeTransformer.to('number')},
                {rawName:'im_max_queue_size', name:'imMaxQueueSize', transformer: TypeTransformer.to('number')},
                {rawName:'priority', name:'priority', transformer: TypeTransformer.to('number')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('SQ_SetQueueInfo',request,[reqMapper,respMapper]);
    },
    /**
     * Deletes a queue.
    */
    sQ_DelQueue: (request:SQ_DelQueueRequest):Promise<SQ_DelQueueResponse> => {
      const reqMapper = [{rawName:'application_id', name:'applicationId', transformer: TypeTransformer.to('number')},
                {rawName:'sq_queue_id', name:'sqQueueId', transformer: TypeTransformer.to('intlist')},
                {rawName:'application_name', name:'applicationName', transformer: TypeTransformer.to('string')},
                {rawName:'sq_queue_name', name:'sqQueueName', transformer: TypeTransformer.to('stringlist')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('SQ_DelQueue',request,[reqMapper,respMapper]);
    },
    /**
     * Gets the queue(s).
    */
    sQ_GetQueues: (request:SQ_GetQueuesRequest):Promise<SQ_GetQueuesResponse> => {
      const reqMapper = [{rawName:'application_id', name:'applicationId', transformer: TypeTransformer.to('number')},
                {rawName:'application_name', name:'applicationName', transformer: TypeTransformer.to('string')},
                {rawName:'sq_queue_id', name:'sqQueueId', transformer: TypeTransformer.to('intlist')},
                {rawName:'sq_queue_name', name:'sqQueueName', transformer: TypeTransformer.to('stringlist')},
                {rawName:'sq_queue_name_template', name:'sqQueueNameTemplate', transformer: TypeTransformer.to('string')},
                {rawName:'user_id', name:'userId', transformer: TypeTransformer.to('number')},
                {rawName:'user_name', name:'userName', transformer: TypeTransformer.to('string')},
                {rawName:'excluded_user_id', name:'excludedUserId', transformer: TypeTransformer.to('number')},
                {rawName:'excluded_user_name', name:'excludedUserName', transformer: TypeTransformer.to('string')},
                {rawName:'count', name:'count', transformer: TypeTransformer.to('number')},
                {rawName:'offset', name:'offset', transformer: TypeTransformer.to('number')},
                {rawName:'with_agentcount', name:'withAgentcount', transformer: TypeTransformer.to('boolean')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('GetSQQueuesResult')}];
      return this.makeRequest('SQ_GetQueues',request,[reqMapper,respMapper]);
    },
    /**
     * Adds a new skill to the app.
    */
    sQ_AddSkill: (request:SQ_AddSkillRequest):Promise<SQ_AddSkillResponse> => {
      const reqMapper = [{rawName:'application_id', name:'applicationId', transformer: TypeTransformer.to('number')},
                {rawName:'sq_skill_name', name:'sqSkillName', transformer: TypeTransformer.to('string')},
                {rawName:'application_name', name:'applicationName', transformer: TypeTransformer.to('string')},
                {rawName:'description', name:'description', transformer: TypeTransformer.to('string')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('SQ_AddSkill',request,[reqMapper,respMapper]);
    },
    /**
     * Deletes a skill and detaches it from agents.
    */
    sQ_DelSkill: (request:SQ_DelSkillRequest):Promise<SQ_DelSkillResponse> => {
      const reqMapper = [{rawName:'application_id', name:'applicationId', transformer: TypeTransformer.to('number')},
                {rawName:'sq_skill_id', name:'sqSkillId', transformer: TypeTransformer.to('intlist')},
                {rawName:'application_name', name:'applicationName', transformer: TypeTransformer.to('string')},
                {rawName:'sq_skill_name', name:'sqSkillName', transformer: TypeTransformer.to('stringlist')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('SQ_DelSkill',request,[reqMapper,respMapper]);
    },
    /**
     * Edits an existing skill.
    */
    sQ_SetSkillInfo: (request:SQ_SetSkillInfoRequest):Promise<SQ_SetSkillInfoResponse> => {
      const reqMapper = [{rawName:'application_id', name:'applicationId', transformer: TypeTransformer.to('number')},
                {rawName:'sq_skill_id', name:'sqSkillId', transformer: TypeTransformer.to('number')},
                {rawName:'application_name', name:'applicationName', transformer: TypeTransformer.to('string')},
                {rawName:'sq_skill_name', name:'sqSkillName', transformer: TypeTransformer.to('string')},
                {rawName:'new_sq_skill_name', name:'newSqSkillName', transformer: TypeTransformer.to('string')},
                {rawName:'description', name:'description', transformer: TypeTransformer.to('string')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('SQ_SetSkillInfo',request,[reqMapper,respMapper]);
    },
    /**
     * Binds skills to agents.
    */
    sQ_BindSkill: (request:SQ_BindSkillRequest):Promise<SQ_BindSkillResponse> => {
      const reqMapper = [{rawName:'application_id', name:'applicationId', transformer: TypeTransformer.to('number')},
                {rawName:'user_id', name:'userId', transformer: TypeTransformer.to('intlist')},
                {rawName:'sq_skills', name:'sqSkills', transformer: TypeTransformer.to('Object')},
                {rawName:'application_name', name:'applicationName', transformer: TypeTransformer.to('string')},
                {rawName:'user_name', name:'userName', transformer: TypeTransformer.to('stringlist')},
                {rawName:'bind_mode', name:'bindMode', transformer: TypeTransformer.to('[SQSkillBindingModes]')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('SQ_BindSkill',request,[reqMapper,respMapper]);
    },
    /**
     * Unbinds skills from agents.
    */
    sQ_UnbindSkill: (request:SQ_UnbindSkillRequest):Promise<SQ_UnbindSkillResponse> => {
      const reqMapper = [{rawName:'application_id', name:'applicationId', transformer: TypeTransformer.to('number')},
                {rawName:'user_id', name:'userId', transformer: TypeTransformer.to('intlist')},
                {rawName:'sq_skill_id', name:'sqSkillId', transformer: TypeTransformer.to('intlist')},
                {rawName:'application_name', name:'applicationName', transformer: TypeTransformer.to('string')},
                {rawName:'user_name', name:'userName', transformer: TypeTransformer.to('stringlist')},
                {rawName:'sq_skill_name', name:'sqSkillName', transformer: TypeTransformer.to('stringlist')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('SQ_UnbindSkill',request,[reqMapper,respMapper]);
    },
    /**
     * Gets the skill(s).
    */
    sQ_GetSkills: (request:SQ_GetSkillsRequest):Promise<SQ_GetSkillsResponse> => {
      const reqMapper = [{rawName:'application_id', name:'applicationId', transformer: TypeTransformer.to('number')},
                {rawName:'application_name', name:'applicationName', transformer: TypeTransformer.to('string')},
                {rawName:'user_id', name:'userId', transformer: TypeTransformer.to('intlist')},
                {rawName:'user_name', name:'userName', transformer: TypeTransformer.to('stringlist')},
                {rawName:'sq_skill_id', name:'sqSkillId', transformer: TypeTransformer.to('intlist')},
                {rawName:'sq_skill_name', name:'sqSkillName', transformer: TypeTransformer.to('stringlist')},
                {rawName:'sq_skill_name_template', name:'sqSkillNameTemplate', transformer: TypeTransformer.to('string')},
                {rawName:'excluded_user_id', name:'excludedUserId', transformer: TypeTransformer.to('number')},
                {rawName:'excluded_user_name', name:'excludedUserName', transformer: TypeTransformer.to('string')},
                {rawName:'count', name:'count', transformer: TypeTransformer.to('number')},
                {rawName:'offset', name:'offset', transformer: TypeTransformer.to('number')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('GetSQSkillsResult')}];
      return this.makeRequest('SQ_GetSkills',request,[reqMapper,respMapper]);
    },
    /**
     * Binds agents to a queue.
    */
    sQ_BindAgent: (request:SQ_BindAgentRequest):Promise<SQ_BindAgentResponse> => {
      const reqMapper = [{rawName:'application_id', name:'applicationId', transformer: TypeTransformer.to('number')},
                {rawName:'sq_queue_id', name:'sqQueueId', transformer: TypeTransformer.to('string')},
                {rawName:'user_id', name:'userId', transformer: TypeTransformer.to('intlist')},
                {rawName:'application_name', name:'applicationName', transformer: TypeTransformer.to('string')},
                {rawName:'sq_queue_name', name:'sqQueueName', transformer: TypeTransformer.to('string')},
                {rawName:'user_name', name:'userName', transformer: TypeTransformer.to('stringlist')},
                {rawName:'bind_mode', name:'bindMode', transformer: TypeTransformer.to('[SQAgentBindingModes]')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('SQ_BindAgent',request,[reqMapper,respMapper]);
    },
    /**
     * Unbinds agents from queues.
    */
    sQ_UnbindAgent: (request:SQ_UnbindAgentRequest):Promise<SQ_UnbindAgentResponse> => {
      const reqMapper = [{rawName:'application_id', name:'applicationId', transformer: TypeTransformer.to('number')},
                {rawName:'sq_queue_id', name:'sqQueueId', transformer: TypeTransformer.to('intlist')},
                {rawName:'user_id', name:'userId', transformer: TypeTransformer.to('intlist')},
                {rawName:'application_name', name:'applicationName', transformer: TypeTransformer.to('string')},
                {rawName:'sq_queue_name', name:'sqQueueName', transformer: TypeTransformer.to('stringlist')},
                {rawName:'user_name', name:'userName', transformer: TypeTransformer.to('stringlist')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('SQ_UnbindAgent',request,[reqMapper,respMapper]);
    },
    /**
     * Gets agents.
    */
    sQ_GetAgents: (request:SQ_GetAgentsRequest):Promise<SQ_GetAgentsResponse> => {
      const reqMapper = [{rawName:'application_id', name:'applicationId', transformer: TypeTransformer.to('number')},
                {rawName:'handle_calls', name:'handleCalls', transformer: TypeTransformer.to('boolean')},
                {rawName:'application_name', name:'applicationName', transformer: TypeTransformer.to('string')},
                {rawName:'sq_queue_id', name:'sqQueueId', transformer: TypeTransformer.to('intlist')},
                {rawName:'sq_queue_name', name:'sqQueueName', transformer: TypeTransformer.to('stringlist')},
                {rawName:'excluded_sq_queue_id', name:'excludedSqQueueId', transformer: TypeTransformer.to('number')},
                {rawName:'excluded_sq_queue_name', name:'excludedSqQueueName', transformer: TypeTransformer.to('string')},
                {rawName:'sq_skills', name:'sqSkills', transformer: TypeTransformer.to('Object')},
                {rawName:'user_id', name:'userId', transformer: TypeTransformer.to('intlist')},
                {rawName:'user_name', name:'userName', transformer: TypeTransformer.to('stringlist')},
                {rawName:'user_name_template', name:'userNameTemplate', transformer: TypeTransformer.to('string')},
                {rawName:'sq_statuses', name:'sqStatuses', transformer: TypeTransformer.to('Object')},
                {rawName:'with_sq_skills', name:'withSqSkills', transformer: TypeTransformer.to('boolean')},
                {rawName:'with_sq_queues', name:'withSqQueues', transformer: TypeTransformer.to('boolean')},
                {rawName:'with_sq_statuses', name:'withSqStatuses', transformer: TypeTransformer.to('boolean')},
                {rawName:'count', name:'count', transformer: TypeTransformer.to('number')},
                {rawName:'offset', name:'offset', transformer: TypeTransformer.to('number')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('GetSQAgentsResult')}];
      return this.makeRequest('SQ_GetAgents',request,[reqMapper,respMapper]);
    },
    /**
     * Edits the agent settings.
    */
    sQ_SetAgentInfo: (request:SQ_SetAgentInfoRequest):Promise<SQ_SetAgentInfoResponse> => {
      const reqMapper = [{rawName:'application_id', name:'applicationId', transformer: TypeTransformer.to('number')},
                {rawName:'user_id', name:'userId', transformer: TypeTransformer.to('intlist')},
                {rawName:'handle_calls', name:'handleCalls', transformer: TypeTransformer.to('boolean')},
                {rawName:'application_name', name:'applicationName', transformer: TypeTransformer.to('string')},
                {rawName:'user_name', name:'userName', transformer: TypeTransformer.to('stringlist')},
                {rawName:'max_simultaneous_conversations', name:'maxSimultaneousConversations', transformer: TypeTransformer.to('number')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('SQ_SetAgentInfo',request,[reqMapper,respMapper]);
    }
  }

  public Skills:SkillsInterface = {
    /**
     * Adds a new operator's skill. Works only for ACDv1. For SmartQueue/ACDv2, use <a href="#how-auth-works">this reference</a>.
    */
    addSkill: (request:AddSkillRequest):Promise<AddSkillResponse> => {
      const reqMapper = [{rawName:'skill_name', name:'skillName', transformer: TypeTransformer.to('string')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')},
                {rawName:'skill_id', name:'skillId', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('AddSkill',request,[reqMapper,respMapper]);
    },
    /**
     * Deletes an operator's skill. Works only for ACDv1. For SmartQueue/ACDv2, use <a href="#how-auth-works">this reference</a>.
    */
    delSkill: (request:DelSkillRequest):Promise<DelSkillResponse> => {
      const reqMapper = [{rawName:'skill_id', name:'skillId', transformer: TypeTransformer.to('number')},
                {rawName:'skill_name', name:'skillName', transformer: TypeTransformer.to('string')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('DelSkill',request,[reqMapper,respMapper]);
    },
    /**
     * Edits an operator's skill. Works only for ACDv1. For SmartQueue/ACDv2, use <a href="#how-auth-works">this reference</a>.
    */
    setSkillInfo: (request:SetSkillInfoRequest):Promise<SetSkillInfoResponse> => {
      const reqMapper = [{rawName:'skill_id', name:'skillId', transformer: TypeTransformer.to('number')},
                {rawName:'skill_name', name:'skillName', transformer: TypeTransformer.to('string')},
                {rawName:'new_skill_name', name:'newSkillName', transformer: TypeTransformer.to('string')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('SetSkillInfo',request,[reqMapper,respMapper]);
    },
    /**
     * Gets the skills of an operator. Works only for ACDv1. For SmartQueue/ACDv2, use <a href="#how-auth-works">this reference</a>.
    */
    getSkills: (request:GetSkillsRequest):Promise<GetSkillsResponse> => {
      const reqMapper = [{rawName:'skill_id', name:'skillId', transformer: TypeTransformer.to('number')},
                {rawName:'skill_name', name:'skillName', transformer: TypeTransformer.to('string')},
                {rawName:'count', name:'count', transformer: TypeTransformer.to('number')},
                {rawName:'offset', name:'offset', transformer: TypeTransformer.to('number')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('[SkillInfoType]')},
                {rawName:'total_count', name:'totalCount', transformer: TypeTransformer.from('number')},
                {rawName:'count', name:'count', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('GetSkills',request,[reqMapper,respMapper]);
    },
    /**
     * Binds the specified skills to the users (ACD operators) and/or the ACD queues. Works only for ACDv1. For SmartQueue/ACDv2, use <a href="#how-auth-works">this reference</a>.
    */
    bindSkill: (request:BindSkillRequest):Promise<BindSkillResponse> => {
      const reqMapper = [{rawName:'skill_id', name:'skillId', transformer: TypeTransformer.to('intlist')},
                {rawName:'skill_name', name:'skillName', transformer: TypeTransformer.to('stringlist')},
                {rawName:'user_id', name:'userId', transformer: TypeTransformer.to('intlist')},
                {rawName:'user_name', name:'userName', transformer: TypeTransformer.to('stringlist')},
                {rawName:'acd_queue_id', name:'acdQueueId', transformer: TypeTransformer.to('intlist')},
                {rawName:'acd_queue_name', name:'acdQueueName', transformer: TypeTransformer.to('stringlist')},
                {rawName:'application_id', name:'applicationId', transformer: TypeTransformer.to('number')},
                {rawName:'application_name', name:'applicationName', transformer: TypeTransformer.to('string')},
                {rawName:'bind', name:'bind', transformer: TypeTransformer.to('boolean')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('BindSkill',request,[reqMapper,respMapper]);
    }
  }




  public AdminUsers:AdminUsersInterface = {
    /**
     * Adds a new admin user into the specified parent or child account.
    */
    addAdminUser: (request:AddAdminUserRequest):Promise<AddAdminUserResponse> => {
      const reqMapper = [{rawName:'new_admin_user_name', name:'newAdminUserName', transformer: TypeTransformer.to('string')},
                {rawName:'admin_user_display_name', name:'adminUserDisplayName', transformer: TypeTransformer.to('string')},
                {rawName:'new_admin_user_password', name:'newAdminUserPassword', transformer: TypeTransformer.to('string')},
                {rawName:'admin_user_active', name:'adminUserActive', transformer: TypeTransformer.to('boolean')},
                {rawName:'admin_role_id', name:'adminRoleId', transformer: TypeTransformer.to('string')},
                {rawName:'admin_role_name', name:'adminRoleName', transformer: TypeTransformer.to('stringlist')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')},
                {rawName:'admin_user_id', name:'adminUserId', transformer: TypeTransformer.from('number')},
                {rawName:'admin_user_api_key', name:'adminUserApiKey', transformer: TypeTransformer.from('string')}];
      return this.makeRequest('AddAdminUser',request,[reqMapper,respMapper]);
    },
    /**
     * Deletes the specified admin user.
    */
    delAdminUser: (request:DelAdminUserRequest):Promise<DelAdminUserResponse> => {
      const reqMapper = [{rawName:'required_admin_user_id', name:'requiredAdminUserId', transformer: TypeTransformer.to('intlist')},
                {rawName:'required_admin_user_name', name:'requiredAdminUserName', transformer: TypeTransformer.to('stringlist')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('DelAdminUser',request,[reqMapper,respMapper]);
    },
    /**
     * Edits the specified admin user.
    */
    setAdminUserInfo: (request:SetAdminUserInfoRequest):Promise<SetAdminUserInfoResponse> => {
      const reqMapper = [{rawName:'required_admin_user_id', name:'requiredAdminUserId', transformer: TypeTransformer.to('number')},
                {rawName:'required_admin_user_name', name:'requiredAdminUserName', transformer: TypeTransformer.to('string')},
                {rawName:'new_admin_user_name', name:'newAdminUserName', transformer: TypeTransformer.to('string')},
                {rawName:'admin_user_display_name', name:'adminUserDisplayName', transformer: TypeTransformer.to('string')},
                {rawName:'new_admin_user_password', name:'newAdminUserPassword', transformer: TypeTransformer.to('string')},
                {rawName:'admin_user_active', name:'adminUserActive', transformer: TypeTransformer.to('boolean')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('SetAdminUserInfo',request,[reqMapper,respMapper]);
    },
    /**
     * Gets the admin users of the specified account. Note that both account types - parent and child - can have its own admins.
    */
    getAdminUsers: (request:GetAdminUsersRequest):Promise<GetAdminUsersResponse> => {
      const reqMapper = [{rawName:'required_admin_user_id', name:'requiredAdminUserId', transformer: TypeTransformer.to('number')},
                {rawName:'required_admin_user_name', name:'requiredAdminUserName', transformer: TypeTransformer.to('string')},
                {rawName:'admin_user_display_name', name:'adminUserDisplayName', transformer: TypeTransformer.to('string')},
                {rawName:'admin_user_active', name:'adminUserActive', transformer: TypeTransformer.to('boolean')},
                {rawName:'with_roles', name:'withRoles', transformer: TypeTransformer.to('boolean')},
                {rawName:'with_access_entries', name:'withAccessEntries', transformer: TypeTransformer.to('boolean')},
                {rawName:'count', name:'count', transformer: TypeTransformer.to('number')},
                {rawName:'offset', name:'offset', transformer: TypeTransformer.to('number')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('[AdminUserType]')},
                {rawName:'total_count', name:'totalCount', transformer: TypeTransformer.from('number')},
                {rawName:'count', name:'count', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('GetAdminUsers',request,[reqMapper,respMapper]);
    },
    /**
     * Attaches the admin role(s) to the already existing admin(s).
    */
    attachAdminRole: (request:AttachAdminRoleRequest):Promise<AttachAdminRoleResponse> => {
      const reqMapper = [{rawName:'required_admin_user_id', name:'requiredAdminUserId', transformer: TypeTransformer.to('intlist')},
                {rawName:'required_admin_user_name', name:'requiredAdminUserName', transformer: TypeTransformer.to('stringlist')},
                {rawName:'admin_role_id', name:'adminRoleId', transformer: TypeTransformer.to('intlist')},
                {rawName:'admin_role_name', name:'adminRoleName', transformer: TypeTransformer.to('stringlist')},
                {rawName:'mode', name:'mode', transformer: TypeTransformer.to('string')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('AttachAdminRole',request,[reqMapper,respMapper]);
    }
  }

  public AdminRoles:AdminRolesInterface = {
    /**
     * Adds a new admin role.
    */
    addAdminRole: (request:AddAdminRoleRequest):Promise<AddAdminRoleResponse> => {
      const reqMapper = [{rawName:'admin_role_name', name:'adminRoleName', transformer: TypeTransformer.to('string')},
                {rawName:'admin_role_active', name:'adminRoleActive', transformer: TypeTransformer.to('boolean')},
                {rawName:'like_admin_role_id', name:'likeAdminRoleId', transformer: TypeTransformer.to('intlist')},
                {rawName:'like_admin_role_name', name:'likeAdminRoleName', transformer: TypeTransformer.to('stringlist')},
                {rawName:'allowed_entries', name:'allowedEntries', transformer: TypeTransformer.to('stringlist')},
                {rawName:'denied_entries', name:'deniedEntries', transformer: TypeTransformer.to('stringlist')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')},
                {rawName:'admin_role_id', name:'adminRoleId', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('AddAdminRole',request,[reqMapper,respMapper]);
    },
    /**
     * Deletes the specified admin role.
    */
    delAdminRole: (request:DelAdminRoleRequest):Promise<DelAdminRoleResponse> => {
      const reqMapper = [{rawName:'admin_role_id', name:'adminRoleId', transformer: TypeTransformer.to('intlist')},
                {rawName:'admin_role_name', name:'adminRoleName', transformer: TypeTransformer.to('stringlist')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('DelAdminRole',request,[reqMapper,respMapper]);
    },
    /**
     * Edits the specified admin role.
    */
    setAdminRoleInfo: (request:SetAdminRoleInfoRequest):Promise<SetAdminRoleInfoResponse> => {
      const reqMapper = [{rawName:'admin_role_id', name:'adminRoleId', transformer: TypeTransformer.to('number')},
                {rawName:'admin_role_name', name:'adminRoleName', transformer: TypeTransformer.to('string')},
                {rawName:'new_admin_role_name', name:'newAdminRoleName', transformer: TypeTransformer.to('string')},
                {rawName:'admin_role_active', name:'adminRoleActive', transformer: TypeTransformer.to('boolean')},
                {rawName:'entry_modification_mode', name:'entryModificationMode', transformer: TypeTransformer.to('string')},
                {rawName:'allowed_entries', name:'allowedEntries', transformer: TypeTransformer.to('stringlist')},
                {rawName:'denied_entries', name:'deniedEntries', transformer: TypeTransformer.to('stringlist')},
                {rawName:'like_admin_role_id', name:'likeAdminRoleId', transformer: TypeTransformer.to('intlist')},
                {rawName:'like_admin_role_name', name:'likeAdminRoleName', transformer: TypeTransformer.to('stringlist')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('SetAdminRoleInfo',request,[reqMapper,respMapper]);
    },
    /**
     * Gets the admin roles.
    */
    getAdminRoles: (request:GetAdminRolesRequest):Promise<GetAdminRolesResponse> => {
      const reqMapper = [{rawName:'admin_role_id', name:'adminRoleId', transformer: TypeTransformer.to('number')},
                {rawName:'admin_role_name', name:'adminRoleName', transformer: TypeTransformer.to('string')},
                {rawName:'admin_role_active', name:'adminRoleActive', transformer: TypeTransformer.to('boolean')},
                {rawName:'with_entries', name:'withEntries', transformer: TypeTransformer.to('boolean')},
                {rawName:'with_account_roles', name:'withAccountRoles', transformer: TypeTransformer.to('boolean')},
                {rawName:'with_parent_roles', name:'withParentRoles', transformer: TypeTransformer.to('boolean')},
                {rawName:'included_admin_user_id', name:'includedAdminUserId', transformer: TypeTransformer.to('intlist')},
                {rawName:'excluded_admin_user_id', name:'excludedAdminUserId', transformer: TypeTransformer.to('intlist')},
                {rawName:'full_admin_users_matching', name:'fullAdminUsersMatching', transformer: TypeTransformer.to('string')},
                {rawName:'showing_admin_user_id', name:'showingAdminUserId', transformer: TypeTransformer.to('number')},
                {rawName:'count', name:'count', transformer: TypeTransformer.to('number')},
                {rawName:'offset', name:'offset', transformer: TypeTransformer.to('number')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('[AdminRoleType]')},
                {rawName:'total_count', name:'totalCount', transformer: TypeTransformer.from('number')},
                {rawName:'count', name:'count', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('GetAdminRoles',request,[reqMapper,respMapper]);
    },
    /**
     * Gets the all available admin role entries.
    */
    getAvailableAdminRoleEntries: (request:GetAvailableAdminRoleEntriesRequest):Promise<GetAvailableAdminRoleEntriesResponse> => {
      const reqMapper = [];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('[string]')}];
      return this.makeRequest('GetAvailableAdminRoleEntries',request,[reqMapper,respMapper]);
    }
  }

  public AuthorizedIPs:AuthorizedIPsInterface = {
    /**
     * Adds a new authorized IP4 or network to the white/black list.
    */
    addAuthorizedAccountIP: (request:AddAuthorizedAccountIPRequest):Promise<AddAuthorizedAccountIPResponse> => {
      const reqMapper = [{rawName:'authorized_ip', name:'authorizedIp', transformer: TypeTransformer.to('string')},
                {rawName:'allowed', name:'allowed', transformer: TypeTransformer.to('boolean')},
                {rawName:'description', name:'description', transformer: TypeTransformer.to('string')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('AddAuthorizedAccountIP',request,[reqMapper,respMapper]);
    },
    /**
     * Removes the authorized IP4 or network from the white/black list.
    */
    delAuthorizedAccountIP: (request:DelAuthorizedAccountIPRequest):Promise<DelAuthorizedAccountIPResponse> => {
      const reqMapper = [{rawName:'authorized_ip', name:'authorizedIp', transformer: TypeTransformer.to('string')},
                {rawName:'contains_ip', name:'containsIp', transformer: TypeTransformer.to('string')},
                {rawName:'allowed', name:'allowed', transformer: TypeTransformer.to('boolean')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('DelAuthorizedAccountIP',request,[reqMapper,respMapper]);
    },
    /**
     * Gets the authorized IP4 or network.
    */
    getAuthorizedAccountIPs: (request:GetAuthorizedAccountIPsRequest):Promise<GetAuthorizedAccountIPsResponse> => {
      const reqMapper = [{rawName:'authorized_ip', name:'authorizedIp', transformer: TypeTransformer.to('string')},
                {rawName:'allowed', name:'allowed', transformer: TypeTransformer.to('boolean')},
                {rawName:'contains_ip', name:'containsIp', transformer: TypeTransformer.to('string')},
                {rawName:'count', name:'count', transformer: TypeTransformer.to('number')},
                {rawName:'offset', name:'offset', transformer: TypeTransformer.to('number')},
                {rawName:'description', name:'description', transformer: TypeTransformer.to('string')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('[AuthorizedAccountIPType]')},
                {rawName:'total_count', name:'totalCount', transformer: TypeTransformer.from('number')},
                {rawName:'count', name:'count', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('GetAuthorizedAccountIPs',request,[reqMapper,respMapper]);
    },
    /**
     * Tests whether the IP4 is banned or allowed.
    */
    checkAuthorizedAccountIP: (request:CheckAuthorizedAccountIPRequest):Promise<CheckAuthorizedAccountIPResponse> => {
      const reqMapper = [{rawName:'authorized_ip', name:'authorizedIp', transformer: TypeTransformer.to('string')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('boolean')},
                {rawName:'authorized_ip', name:'authorizedIp', transformer: TypeTransformer.from('string')}];
      return this.makeRequest('CheckAuthorizedAccountIP',request,[reqMapper,respMapper]);
    }
  }



  public RegulationAddress:RegulationAddressInterface = {
    /**
     * Links the regulation address to a phone.
    */
    linkRegulationAddress: (request:LinkRegulationAddressRequest):Promise<LinkRegulationAddressResponse> => {
      const reqMapper = [{rawName:'regulation_address_id', name:'regulationAddressId', transformer: TypeTransformer.to('number')},
                {rawName:'phone_id', name:'phoneId', transformer: TypeTransformer.to('number')},
                {rawName:'phone_number', name:'phoneNumber', transformer: TypeTransformer.to('string')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('boolean')}];
      return this.makeRequest('LinkRegulationAddress',request,[reqMapper,respMapper]);
    },
    /**
     * Searches for available zip codes.
    */
    getZIPCodes: (request:GetZIPCodesRequest):Promise<GetZIPCodesResponse> => {
      const reqMapper = [{rawName:'country_code', name:'countryCode', transformer: TypeTransformer.to('string')},
                {rawName:'phone_region_code', name:'phoneRegionCode', transformer: TypeTransformer.to('string')},
                {rawName:'count', name:'count', transformer: TypeTransformer.to('number')},
                {rawName:'offset', name:'offset', transformer: TypeTransformer.to('number')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('[ZipCode]')},
                {rawName:'count', name:'count', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('GetZIPCodes',request,[reqMapper,respMapper]);
    },
    /**
     * Searches for the user's regulation address.
    */
    getRegulationsAddress: (request:GetRegulationsAddressRequest):Promise<GetRegulationsAddressResponse> => {
      const reqMapper = [{rawName:'country_code', name:'countryCode', transformer: TypeTransformer.to('string')},
                {rawName:'phone_category_name', name:'phoneCategoryName', transformer: TypeTransformer.to('string')},
                {rawName:'phone_region_code', name:'phoneRegionCode', transformer: TypeTransformer.to('string')},
                {rawName:'regulation_address_id', name:'regulationAddressId', transformer: TypeTransformer.to('number')},
                {rawName:'verified', name:'verified', transformer: TypeTransformer.to('boolean')},
                {rawName:'in_progress', name:'inProgress', transformer: TypeTransformer.to('boolean')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('[RegulationAddress]')},
                {rawName:'count', name:'count', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('GetRegulationsAddress',request,[reqMapper,respMapper]);
    },
    /**
     * Searches for the available regulation for a link.
    */
    getAvailableRegulations: (request:GetAvailableRegulationsRequest):Promise<GetAvailableRegulationsResponse> => {
      const reqMapper = [{rawName:'country_code', name:'countryCode', transformer: TypeTransformer.to('string')},
                {rawName:'phone_category_name', name:'phoneCategoryName', transformer: TypeTransformer.to('string')},
                {rawName:'phone_region_code', name:'phoneRegionCode', transformer: TypeTransformer.to('string')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('boolean')},
                {rawName:'available_address', name:'availableAddress', transformer: TypeTransformer.from('[RegulationAddress]')},
                {rawName:'count_in_progress', name:'countInProgress', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('GetAvailableRegulations',request,[reqMapper,respMapper]);
    },
    /**
     * Gets all countries.
    */
    getCountries: (request:GetCountriesRequest):Promise<GetCountriesResponse> => {
      const reqMapper = [{rawName:'country_code', name:'countryCode', transformer: TypeTransformer.to('string')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('[RegulationCountry]')},
                {rawName:'count', name:'count', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('GetCountries',request,[reqMapper,respMapper]);
    },
    /**
     * Gets available regions in a country.
    */
    getRegions: (request:GetRegionsRequest):Promise<GetRegionsResponse> => {
      const reqMapper = [{rawName:'country_code', name:'countryCode', transformer: TypeTransformer.to('string')},
                {rawName:'phone_category_name', name:'phoneCategoryName', transformer: TypeTransformer.to('string')},
                {rawName:'city_name', name:'cityName', transformer: TypeTransformer.to('string')},
                {rawName:'count', name:'count', transformer: TypeTransformer.to('number')},
                {rawName:'offset', name:'offset', transformer: TypeTransformer.to('number')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('[RegulationRegionRecord]')},
                {rawName:'count', name:'count', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('GetRegions',request,[reqMapper,respMapper]);
    }
  }

  public PushCredentials:PushCredentialsInterface = {
    /**
     * Adds push credentials.
    */
    addPushCredential: (request:AddPushCredentialRequest):Promise<AddPushCredentialResponse> => {
      const reqMapper = [{rawName:'push_provider_name', name:'pushProviderName', transformer: TypeTransformer.to('string')},
                {rawName:'push_provider_id', name:'pushProviderId', transformer: TypeTransformer.to('number')},
                {rawName:'cert_content', name:'certContent', transformer: TypeTransformer.to('string')},
                {rawName:'cert_password', name:'certPassword', transformer: TypeTransformer.to('string')},
                {rawName:'is_dev_mode', name:'isDevMode', transformer: TypeTransformer.to('boolean')},
                {rawName:'sender_id', name:'senderId', transformer: TypeTransformer.to('string')},
                {rawName:'server_key', name:'serverKey', transformer: TypeTransformer.to('string')},
                {rawName:'service_account_file', name:'serviceAccountFile', transformer: TypeTransformer.to('string')},
                {rawName:'huawei_client_id', name:'huaweiClientId', transformer: TypeTransformer.to('string')},
                {rawName:'huawei_client_secret', name:'huaweiClientSecret', transformer: TypeTransformer.to('string')},
                {rawName:'huawei_application_id', name:'huaweiApplicationId', transformer: TypeTransformer.to('string')},
                {rawName:'application_id', name:'applicationId', transformer: TypeTransformer.to('number')},
                {rawName:'application_name', name:'applicationName', transformer: TypeTransformer.to('string')},
                {rawName:'credential_bundle', name:'credentialBundle', transformer: TypeTransformer.to('string')},
                {rawName:'cert_file_name', name:'certFileName', transformer: TypeTransformer.to('string')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')},
                {rawName:'push_credential_id', name:'pushCredentialId', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('AddPushCredential',request,[reqMapper,respMapper]);
    },
    /**
     * Modifies push credentials.
    */
    setPushCredential: (request:SetPushCredentialRequest):Promise<SetPushCredentialResponse> => {
      const reqMapper = [{rawName:'push_credential_id', name:'pushCredentialId', transformer: TypeTransformer.to('number')},
                {rawName:'cert_content', name:'certContent', transformer: TypeTransformer.to('string')},
                {rawName:'cert_password', name:'certPassword', transformer: TypeTransformer.to('string')},
                {rawName:'is_dev_mode', name:'isDevMode', transformer: TypeTransformer.to('boolean')},
                {rawName:'sender_id', name:'senderId', transformer: TypeTransformer.to('string')},
                {rawName:'server_key', name:'serverKey', transformer: TypeTransformer.to('string')},
                {rawName:'service_account_file', name:'serviceAccountFile', transformer: TypeTransformer.to('string')},
                {rawName:'huawei_client_id', name:'huaweiClientId', transformer: TypeTransformer.to('string')},
                {rawName:'huawei_client_secret', name:'huaweiClientSecret', transformer: TypeTransformer.to('string')},
                {rawName:'huawei_application_id', name:'huaweiApplicationId', transformer: TypeTransformer.to('string')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('SetPushCredential',request,[reqMapper,respMapper]);
    },
    /**
     * Removes push credentials.
    */
    delPushCredential: (request:DelPushCredentialRequest):Promise<DelPushCredentialResponse> => {
      const reqMapper = [{rawName:'push_credential_id', name:'pushCredentialId', transformer: TypeTransformer.to('number')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('DelPushCredential',request,[reqMapper,respMapper]);
    },
    /**
     * Gets push credentials.
    */
    getPushCredential: (request:GetPushCredentialRequest):Promise<GetPushCredentialResponse> => {
      const reqMapper = [{rawName:'push_credential_id', name:'pushCredentialId', transformer: TypeTransformer.to('number')},
                {rawName:'push_provider_name', name:'pushProviderName', transformer: TypeTransformer.to('string')},
                {rawName:'push_provider_id', name:'pushProviderId', transformer: TypeTransformer.to('number')},
                {rawName:'application_name', name:'applicationName', transformer: TypeTransformer.to('string')},
                {rawName:'application_id', name:'applicationId', transformer: TypeTransformer.to('number')},
                {rawName:'with_cert', name:'withCert', transformer: TypeTransformer.to('boolean')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('[PushCredentialInfo]')}];
      return this.makeRequest('GetPushCredential',request,[reqMapper,respMapper]);
    },
    /**
     * Binds push credentials to applications.
    */
    bindPushCredential: (request:BindPushCredentialRequest):Promise<BindPushCredentialResponse> => {
      const reqMapper = [{rawName:'push_credential_id', name:'pushCredentialId', transformer: TypeTransformer.to('intlist')},
                {rawName:'application_id', name:'applicationId', transformer: TypeTransformer.to('intlist')},
                {rawName:'bind', name:'bind', transformer: TypeTransformer.to('boolean')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('BindPushCredential',request,[reqMapper,respMapper]);
    }
  }

  public DialogflowCredentials:DialogflowCredentialsInterface = {
    /**
     * Adds a Dialogflow key.
    */
    addDialogflowKey: (request:AddDialogflowKeyRequest):Promise<AddDialogflowKeyResponse> => {
      const reqMapper = [{rawName:'application_id', name:'applicationId', transformer: TypeTransformer.to('string')},
                {rawName:'json_credentials', name:'jsonCredentials', transformer: TypeTransformer.to('string')},
                {rawName:'application_name', name:'applicationName', transformer: TypeTransformer.to('string')},
                {rawName:'description', name:'description', transformer: TypeTransformer.to('string')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')},
                {rawName:'dialogflow_key_id', name:'dialogflowKeyId', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('AddDialogflowKey',request,[reqMapper,respMapper]);
    },
    /**
     * Edits a Dialogflow key.
    */
    setDialogflowKey: (request:SetDialogflowKeyRequest):Promise<SetDialogflowKeyResponse> => {
      const reqMapper = [{rawName:'dialogflow_key_id', name:'dialogflowKeyId', transformer: TypeTransformer.to('number')},
                {rawName:'description', name:'description', transformer: TypeTransformer.to('string')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('SetDialogflowKey',request,[reqMapper,respMapper]);
    },
    /**
     * Removes a Dialogflow key.
    */
    delDialogflowKey: (request:DelDialogflowKeyRequest):Promise<DelDialogflowKeyResponse> => {
      const reqMapper = [{rawName:'dialogflow_key_id', name:'dialogflowKeyId', transformer: TypeTransformer.to('number')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('DelDialogflowKey',request,[reqMapper,respMapper]);
    },
    /**
     * Gets Dialogflow keys.
    */
    getDialogflowKeys: (request:GetDialogflowKeysRequest):Promise<GetDialogflowKeysResponse> => {
      const reqMapper = [{rawName:'dialogflow_key_id', name:'dialogflowKeyId', transformer: TypeTransformer.to('number')},
                {rawName:'application_name', name:'applicationName', transformer: TypeTransformer.to('string')},
                {rawName:'application_id', name:'applicationId', transformer: TypeTransformer.to('number')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('[DialogflowKeyInfo]')}];
      return this.makeRequest('GetDialogflowKeys',request,[reqMapper,respMapper]);
    },
    /**
     * Binds a Dialogflow key to the specified applications.
    */
    bindDialogflowKeys: (request:BindDialogflowKeysRequest):Promise<BindDialogflowKeysResponse> => {
      const reqMapper = [{rawName:'dialogflow_key_id', name:'dialogflowKeyId', transformer: TypeTransformer.to('number')},
                {rawName:'application_id', name:'applicationId', transformer: TypeTransformer.to('intlist')},
                {rawName:'bind', name:'bind', transformer: TypeTransformer.to('boolean')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('BindDialogflowKeys',request,[reqMapper,respMapper]);
    }
  }

  public SMS:SMSInterface = {
    /**
     * Sends an SMS message between two phone numbers. The source phone number should be purchased from Voximplant and support SMS (which is indicated by the <b>is_sms_supported</b> property in the objects returned by the [GetPhoneNumbers] Management API) and SMS should be enabled for it via the [ControlSms] Management API. SMS messages can be received via HTTP callbacks, see <a href='/docs/guides/managementapi/callbacks'>this article</a> for details.
    */
    sendSmsMessage: (request:SendSmsMessageRequest):Promise<SendSmsMessageResponse> => {
      const reqMapper = [{rawName:'source', name:'source', transformer: TypeTransformer.to('string')},
                {rawName:'destination', name:'destination', transformer: TypeTransformer.to('string')},
                {rawName:'sms_body', name:'smsBody', transformer: TypeTransformer.to('string')},
                {rawName:'store_body', name:'storeBody', transformer: TypeTransformer.to('boolean')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')},
                {rawName:'message_id', name:'messageId', transformer: TypeTransformer.from('number')},
                {rawName:'fragments_count', name:'fragmentsCount', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('SendSmsMessage',request,[reqMapper,respMapper]);
    },
    /**
     * Sends an SMS message from the application to customers. The source phone number should be purchased from Voximplant and support SMS (which is indicated by the <b>is_sms_supported</b> property in the objects returned by the <a href='/docs/references/httpapi/managing_phone_numbers#getphonenumbers'>/GetPhoneNumbers</a> Management API) and SMS should be enabled for it via the <a href='/docs/references/httpapi/managing_sms#controlsms'>/ControlSms</a> Management API.
    */
    a2PSendSms: (request:A2PSendSmsRequest):Promise<A2PSendSmsResponse> => {
      const reqMapper = [{rawName:'src_number', name:'srcNumber', transformer: TypeTransformer.to('string')},
                {rawName:'dst_numbers', name:'dstNumbers', transformer: TypeTransformer.to('stringlist')},
                {rawName:'text', name:'text', transformer: TypeTransformer.to('string')},
                {rawName:'store_body', name:'storeBody', transformer: TypeTransformer.to('boolean')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('[SmsTransaction]')},
                {rawName:'failed', name:'failed', transformer: TypeTransformer.from('[FailedSms]')},
                {rawName:'fragments_count', name:'fragmentsCount', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('A2PSendSms',request,[reqMapper,respMapper]);
    },
    /**
     * Enables or disables sending and receiving SMS for the phone number. Can be used only for phone numbers with SMS support, which is indicated by the <b>is_sms_supported</b> property in the objects returned by the [GetPhoneNumbers] Management API. Each inbound SMS message is charged according to the <a href='//voximplant.com/pricing'>pricing</a>. If enabled, SMS can be sent from this phone number using the [SendSmsMessage] Management API and received using the [InboundSmsCallback] property of the HTTP callback. See <a href='/docs/guides/managementapi/callbacks'>this article</a> for HTTP callback details.
    */
    controlSms: (request:ControlSmsRequest):Promise<ControlSmsResponse> => {
      const reqMapper = [{rawName:'phone_number', name:'phoneNumber', transformer: TypeTransformer.to('string')},
                {rawName:'command', name:'command', transformer: TypeTransformer.to('string')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('ControlSms',request,[reqMapper,respMapper]);
    },
    /**
     * Gets the history of sent and/or received SMS.
    */
    getSmsHistory: (request:GetSmsHistoryRequest):Promise<GetSmsHistoryResponse> => {
      const reqMapper = [{rawName:'source_number', name:'sourceNumber', transformer: TypeTransformer.to('string')},
                {rawName:'destination_number', name:'destinationNumber', transformer: TypeTransformer.to('string')},
                {rawName:'direction', name:'direction', transformer: TypeTransformer.to('string')},
                {rawName:'count', name:'count', transformer: TypeTransformer.to('number')},
                {rawName:'offset', name:'offset', transformer: TypeTransformer.to('number')},
                {rawName:'from_date', name:'fromDate', transformer: TypeTransformer.to('timestamp')},
                {rawName:'to_date', name:'toDate', transformer: TypeTransformer.to('timestamp')},
                {rawName:'output', name:'output', transformer: TypeTransformer.to('string')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('[SmsHistoryType]')},
                {rawName:'total_count', name:'totalCount', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('GetSmsHistory',request,[reqMapper,respMapper]);
    },
    /**
     * Gets the history of sent/or received A2P SMS.
    */
    a2PGetSmsHistory: (request:A2PGetSmsHistoryRequest):Promise<A2PGetSmsHistoryResponse> => {
      const reqMapper = [{rawName:'source_number', name:'sourceNumber', transformer: TypeTransformer.to('string')},
                {rawName:'destination_number', name:'destinationNumber', transformer: TypeTransformer.to('string')},
                {rawName:'count', name:'count', transformer: TypeTransformer.to('number')},
                {rawName:'offset', name:'offset', transformer: TypeTransformer.to('number')},
                {rawName:'from_date', name:'fromDate', transformer: TypeTransformer.to('timestamp')},
                {rawName:'to_date', name:'toDate', transformer: TypeTransformer.to('timestamp')},
                {rawName:'output', name:'output', transformer: TypeTransformer.to('string')},
                {rawName:'delivery_status', name:'deliveryStatus', transformer: TypeTransformer.to('number')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('[A2PSmsHistoryType]')},
                {rawName:'total_count', name:'totalCount', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('A2PGetSmsHistory',request,[reqMapper,respMapper]);
    }
  }

  public RecordStorages:RecordStoragesInterface = {
    /**
     * Gets the record storages.
    */
    getRecordStorages: (request:GetRecordStoragesRequest):Promise<GetRecordStoragesResponse> => {
      const reqMapper = [{rawName:'record_storage_id', name:'recordStorageId', transformer: TypeTransformer.to('intlist')},
                {rawName:'record_storage_name', name:'recordStorageName', transformer: TypeTransformer.to('stringlist')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('RecordStorageInfoType')}];
      return this.makeRequest('GetRecordStorages',request,[reqMapper,respMapper]);
    }
  }


  public RoleSystem:RoleSystemInterface = {
    /**
     * Creates a public/private key pair. You can optionally specify one or more roles for the key.
    */
    createKey: (request:CreateKeyRequest):Promise<CreateKeyResponse> => {
      const reqMapper = [{rawName:'description', name:'description', transformer: TypeTransformer.to('string')},
                {rawName:'role_id', name:'roleId', transformer: TypeTransformer.to('intlist')},
                {rawName:'role_name', name:'roleName', transformer: TypeTransformer.to('stringlist')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('[KeyInfo]')}];
      return this.makeRequest('CreateKey',request,[reqMapper,respMapper]);
    },
    /**
     * Gets key info of the specified account.
    */
    getKeys: (request:GetKeysRequest):Promise<GetKeysResponse> => {
      const reqMapper = [{rawName:'key_id', name:'keyId', transformer: TypeTransformer.to('string')},
                {rawName:'with_roles', name:'withRoles', transformer: TypeTransformer.to('boolean')},
                {rawName:'offset', name:'offset', transformer: TypeTransformer.to('number')},
                {rawName:'count', name:'count', transformer: TypeTransformer.to('number')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('[KeyView]')}];
      return this.makeRequest('GetKeys',request,[reqMapper,respMapper]);
    },
    /**
     * Updates info of the specified key.
    */
    updateKey: (request:UpdateKeyRequest):Promise<UpdateKeyResponse> => {
      const reqMapper = [{rawName:'key_id', name:'keyId', transformer: TypeTransformer.to('string')},
                {rawName:'description', name:'description', transformer: TypeTransformer.to('string')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('UpdateKey',request,[reqMapper,respMapper]);
    },
    /**
     * Deletes the specified key.
    */
    deleteKey: (request:DeleteKeyRequest):Promise<DeleteKeyResponse> => {
      const reqMapper = [{rawName:'key_id', name:'keyId', transformer: TypeTransformer.to('string')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('DeleteKey',request,[reqMapper,respMapper]);
    },
    /**
     * Set roles for the specified key.
    */
    setKeyRoles: (request:SetKeyRolesRequest):Promise<SetKeyRolesResponse> => {
      const reqMapper = [{rawName:'key_id', name:'keyId', transformer: TypeTransformer.to('string')},
                {rawName:'role_id', name:'roleId', transformer: TypeTransformer.to('intlist')},
                {rawName:'role_name', name:'roleName', transformer: TypeTransformer.to('stringlist')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('SetKeyRoles',request,[reqMapper,respMapper]);
    },
    /**
     * Gets roles of the specified key.
    */
    getKeyRoles: (request:GetKeyRolesRequest):Promise<GetKeyRolesResponse> => {
      const reqMapper = [{rawName:'key_id', name:'keyId', transformer: TypeTransformer.to('string')},
                {rawName:'with_expanded_roles', name:'withExpandedRoles', transformer: TypeTransformer.to('boolean')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('[RoleView]')}];
      return this.makeRequest('GetKeyRoles',request,[reqMapper,respMapper]);
    },
    /**
     * Removes the specified roles of a key.
    */
    removeKeyRoles: (request:RemoveKeyRolesRequest):Promise<RemoveKeyRolesResponse> => {
      const reqMapper = [{rawName:'key_id', name:'keyId', transformer: TypeTransformer.to('string')},
                {rawName:'role_id', name:'roleId', transformer: TypeTransformer.to('intlist')},
                {rawName:'role_name', name:'roleName', transformer: TypeTransformer.to('stringlist')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('RemoveKeyRoles',request,[reqMapper,respMapper]);
    },
    /**
     * Creates a subuser.
    */
    addSubUser: (request:AddSubUserRequest):Promise<AddSubUserResponse> => {
      const reqMapper = [{rawName:'new_subuser_name', name:'newSubuserName', transformer: TypeTransformer.to('string')},
                {rawName:'new_subuser_password', name:'newSubuserPassword', transformer: TypeTransformer.to('string')},
                {rawName:'role_id', name:'roleId', transformer: TypeTransformer.to('intlist')},
                {rawName:'role_name', name:'roleName', transformer: TypeTransformer.to('stringlist')},
                {rawName:'description', name:'description', transformer: TypeTransformer.to('string')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('SubUserID')}];
      return this.makeRequest('AddSubUser',request,[reqMapper,respMapper]);
    },
    /**
     * Gets subusers.
    */
    getSubUsers: (request:GetSubUsersRequest):Promise<GetSubUsersResponse> => {
      const reqMapper = [{rawName:'subuser_id', name:'subuserId', transformer: TypeTransformer.to('number')},
                {rawName:'with_roles', name:'withRoles', transformer: TypeTransformer.to('boolean')},
                {rawName:'offset', name:'offset', transformer: TypeTransformer.to('number')},
                {rawName:'count', name:'count', transformer: TypeTransformer.to('number')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('[SubUserView]')}];
      return this.makeRequest('GetSubUsers',request,[reqMapper,respMapper]);
    },
    /**
     * Edits a subuser.
    */
    setSubUserInfo: (request:SetSubUserInfoRequest):Promise<SetSubUserInfoResponse> => {
      const reqMapper = [{rawName:'subuser_id', name:'subuserId', transformer: TypeTransformer.to('number')},
                {rawName:'old_subuser_password', name:'oldSubuserPassword', transformer: TypeTransformer.to('string')},
                {rawName:'new_subuser_password', name:'newSubuserPassword', transformer: TypeTransformer.to('string')},
                {rawName:'description', name:'description', transformer: TypeTransformer.to('string')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('SetSubUserInfo',request,[reqMapper,respMapper]);
    },
    /**
     * Deletes a subuser.
    */
    delSubUser: (request:DelSubUserRequest):Promise<DelSubUserResponse> => {
      const reqMapper = [{rawName:'subuser_id', name:'subuserId', transformer: TypeTransformer.to('number')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('DelSubUser',request,[reqMapper,respMapper]);
    },
    /**
     * Adds the specified roles for a subuser.
    */
    setSubUserRoles: (request:SetSubUserRolesRequest):Promise<SetSubUserRolesResponse> => {
      const reqMapper = [{rawName:'subuser_id', name:'subuserId', transformer: TypeTransformer.to('number')},
                {rawName:'role_id', name:'roleId', transformer: TypeTransformer.to('intlist')},
                {rawName:'role_name', name:'roleName', transformer: TypeTransformer.to('stringlist')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('SetSubUserRoles',request,[reqMapper,respMapper]);
    },
    /**
     * Gets the subuser's roles.
    */
    getSubUserRoles: (request:GetSubUserRolesRequest):Promise<GetSubUserRolesResponse> => {
      const reqMapper = [{rawName:'subuser_id', name:'subuserId', transformer: TypeTransformer.to('number')},
                {rawName:'with_expanded_roles', name:'withExpandedRoles', transformer: TypeTransformer.to('boolean')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('[RoleView]')}];
      return this.makeRequest('GetSubUserRoles',request,[reqMapper,respMapper]);
    },
    /**
     * Removes the specified roles of a subuser.
    */
    removeSubUserRoles: (request:RemoveSubUserRolesRequest):Promise<RemoveSubUserRolesResponse> => {
      const reqMapper = [{rawName:'subuser_id', name:'subuserId', transformer: TypeTransformer.to('number')},
                {rawName:'role_id', name:'roleId', transformer: TypeTransformer.to('intlist')},
                {rawName:'role_name', name:'roleName', transformer: TypeTransformer.to('stringlist')},
                {rawName:'force', name:'force', transformer: TypeTransformer.to('boolean')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('RemoveSubUserRoles',request,[reqMapper,respMapper]);
    },
    /**
     * Gets all roles.
    */
    getRoles: (request:GetRolesRequest):Promise<GetRolesResponse> => {
      const reqMapper = [{rawName:'group_name', name:'groupName', transformer: TypeTransformer.to('string')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('[RoleView]')}];
      return this.makeRequest('GetRoles',request,[reqMapper,respMapper]);
    },
    /**
     * Gets role groups.
    */
    getRoleGroups: (request:GetRoleGroupsRequest):Promise<GetRoleGroupsResponse> => {
      const reqMapper = [];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('[RoleGroupView]')}];
      return this.makeRequest('GetRoleGroups',request,[reqMapper,respMapper]);
    }
  }

  public KeyValueStorage:KeyValueStorageInterface = {
    /**
     * Creates or updates a key-value pair. If an existing key is passed, the method will return the existing item and will change the value if needed. The keys should be unique within a Voximplant application.
    */
    setKeyValueItem: (request:SetKeyValueItemRequest):Promise<SetKeyValueItemResponse> => {
      const reqMapper = [{rawName:'key', name:'key', transformer: TypeTransformer.to('string')},
                {rawName:'value', name:'value', transformer: TypeTransformer.to('string')},
                {rawName:'application_id', name:'applicationId', transformer: TypeTransformer.to('number')},
                {rawName:'application_name', name:'applicationName', transformer: TypeTransformer.to('string')},
                {rawName:'ttl', name:'ttl', transformer: TypeTransformer.to('number')},
                {rawName:'expires_at', name:'expiresAt', transformer: TypeTransformer.to('number')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('KeyValueItems')}];
      return this.makeRequest('SetKeyValueItem',request,[reqMapper,respMapper]);
    },
    /**
     * Deletes the specified key-value pair from the storage.
    */
    delKeyValueItem: (request:DelKeyValueItemRequest):Promise<DelKeyValueItemResponse> => {
      const reqMapper = [{rawName:'key', name:'key', transformer: TypeTransformer.to('string')},
                {rawName:'application_id', name:'applicationId', transformer: TypeTransformer.to('number')},
                {rawName:'application_name', name:'applicationName', transformer: TypeTransformer.to('string')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('DelKeyValueItem',request,[reqMapper,respMapper]);
    },
    /**
     * Gets the specified key-value pair from the storage.
    */
    getKeyValueItem: (request:GetKeyValueItemRequest):Promise<GetKeyValueItemResponse> => {
      const reqMapper = [{rawName:'key', name:'key', transformer: TypeTransformer.to('string')},
                {rawName:'application_id', name:'applicationId', transformer: TypeTransformer.to('number')},
                {rawName:'application_name', name:'applicationName', transformer: TypeTransformer.to('string')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('KeyValueItems')}];
      return this.makeRequest('GetKeyValueItem',request,[reqMapper,respMapper]);
    },
    /**
     * Gets all the key-value pairs in which the keys begin with a pattern.
    */
    getKeyValueItems: (request:GetKeyValueItemsRequest):Promise<GetKeyValueItemsResponse> => {
      const reqMapper = [{rawName:'key', name:'key', transformer: TypeTransformer.to('string')},
                {rawName:'application_id', name:'applicationId', transformer: TypeTransformer.to('number')},
                {rawName:'count', name:'count', transformer: TypeTransformer.to('number')},
                {rawName:'offset', name:'offset', transformer: TypeTransformer.to('number')},
                {rawName:'application_name', name:'applicationName', transformer: TypeTransformer.to('string')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('KeyValueItems')}];
      return this.makeRequest('GetKeyValueItems',request,[reqMapper,respMapper]);
    },
    /**
     * Gets all the keys of key-value pairs.
    */
    getKeyValueKeys: (request:GetKeyValueKeysRequest):Promise<GetKeyValueKeysResponse> => {
      const reqMapper = [{rawName:'application_id', name:'applicationId', transformer: TypeTransformer.to('number')},
                {rawName:'key', name:'key', transformer: TypeTransformer.to('string')},
                {rawName:'count', name:'count', transformer: TypeTransformer.to('number')},
                {rawName:'offset', name:'offset', transformer: TypeTransformer.to('number')},
                {rawName:'application_name', name:'applicationName', transformer: TypeTransformer.to('string')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('KeyValueKeys')}];
      return this.makeRequest('GetKeyValueKeys',request,[reqMapper,respMapper]);
    }
  }

  public Invoices:InvoicesInterface = {
    /**
     * Gets all invoices of the specified USD or EUR account.
    */
    getAccountInvoices: (request:GetAccountInvoicesRequest):Promise<GetAccountInvoicesResponse> => {
      const reqMapper = [{rawName:'count', name:'count', transformer: TypeTransformer.to('number')},
                {rawName:'offset', name:'offset', transformer: TypeTransformer.to('number')}];
      const respMapper = [{rawName:'result', name:'result', transformer: TypeTransformer.from('AccountInvocie')},
                {rawName:'total_count', name:'totalCount', transformer: TypeTransformer.from('number')},
                {rawName:'count', name:'count', transformer: TypeTransformer.from('number')}];
      return this.makeRequest('GetAccountInvoices',request,[reqMapper,respMapper]);
    }
  }


}