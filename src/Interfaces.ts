import {AccountInfo,ExchangeRates,ResourcePrice,SubscriptionTemplate,GetMoneyAmountToChargeResult,ChargeAccountResult,ShortAccountInfo,AccountPlan,Plan,AccountVerifications,ApplicationInfo,UserInfo,CallList,CallListDetail,ScenarioInfo,RuleInfo,CallSessionInfo,HistoryReport,TransactionInfo,ACDSessionInfo,AuditLogInfo,PstnBlackListInfo,SipWhiteListInfo,SIPRegistration,NewAttachedPhoneInfo,AttachedPhoneInfo,NewPhoneInfo,PhoneNumberCountryInfo,PhoneNumberCountryStateInfo,PhoneNumberCountryRegionInfo,CallerIDInfo,OutboundTestPhonenumberInfo,QueueInfo,ACDState,ACDOperatorAggregationGroup,ACDQueueStatistics,ACDOperatorStatusAggregationGroup,SmartQueueMetricsResult,SmartQueueState,SQAgentSelectionStrategies,SQTaskSelectionStrategies,GetSQQueuesResult,SQSkillBindingModes,GetSQSkillsResult,SQAgentBindingModes,GetSQAgentsResult,SkillInfo,AdminUser,AdminRole,AuthorizedAccountIP,ZipCode,RegulationAddress,RegulationCountry,RegulationRegionRecord,PushCredentialInfo,DialogflowKeyInfo,SmsTransaction,FailedSms,SmsHistory,A2PSmsHistory,RecordStorageInfo,KeyInfo,KeyView,RoleView,SubUserID,SubUserView,RoleGroupView,KeyValueItems,KeyValueKeys,AccountInvocie} from './Structures';
export interface UtilsReturns{
  'GetAccountInfo':GetAccountInfoResponse
  'SetAccountInfo':SetAccountInfoResponse
  'SetChildAccountInfo':SetChildAccountInfoResponse
  'GetCurrencyRate':GetCurrencyRateResponse
  'GetResourcePrice':GetResourcePriceResponse
  'GetSubscriptionPrice':GetSubscriptionPriceResponse
  'GetChildrenAccounts':GetChildrenAccountsResponse
  'GetMoneyAmountToCharge':GetMoneyAmountToChargeResponse
  'ChargeAccount':ChargeAccountResponse
  'ChangeAccountPlan':ChangeAccountPlanResponse
  'GetAccountPlans':GetAccountPlansResponse
  'GetAvailablePlans':GetAvailablePlansResponse
  'GetAccountDocuments':GetAccountDocumentsResponse
  'AddApplication':AddApplicationResponse
  'DelApplication':DelApplicationResponse
  'SetApplicationInfo':SetApplicationInfoResponse
  'GetApplications':GetApplicationsResponse
  'AddUser':AddUserResponse
  'DelUser':DelUserResponse
  'SetUserInfo':SetUserInfoResponse
  'GetUsers':GetUsersResponse
  'TransferMoneyToUser':TransferMoneyToUserResponse
  'CreateManualCallList':CreateManualCallListResponse
  'StartNextCallTask':StartNextCallTaskResponse
  'GetCallLists':GetCallListsResponse
  'GetCallListDetails':GetCallListDetailsResponse
  'StopCallListProcessing':StopCallListProcessingResponse
  'RecoverCallList':RecoverCallListResponse
  'AddScenario':AddScenarioResponse
  'DelScenario':DelScenarioResponse
  'BindScenario':BindScenarioResponse
  'GetScenarios':GetScenariosResponse
  'SetScenarioInfo':SetScenarioInfoResponse
  'ReorderScenarios':ReorderScenariosResponse
  'StartScenarios':StartScenariosResponse
  'StartConference':StartConferenceResponse
  'AddRule':AddRuleResponse
  'DelRule':DelRuleResponse
  'SetRuleInfo':SetRuleInfoResponse
  'GetRules':GetRulesResponse
  'ReorderRules':ReorderRulesResponse
  'GetCallHistory':GetCallHistoryResponse
  'GetHistoryReports':GetHistoryReportsResponse
  'GetTransactionHistory':GetTransactionHistoryResponse
  'DeleteRecord':DeleteRecordResponse
  'GetACDHistory':GetACDHistoryResponse
  'GetAuditLog':GetAuditLogResponse
  'AddPstnBlackListItem':AddPstnBlackListItemResponse
  'SetPstnBlackListItem':SetPstnBlackListItemResponse
  'DelPstnBlackListItem':DelPstnBlackListItemResponse
  'GetPstnBlackList':GetPstnBlackListResponse
  'AddSipWhiteListItem':AddSipWhiteListItemResponse
  'DelSipWhiteListItem':DelSipWhiteListItemResponse
  'SetSipWhiteListItem':SetSipWhiteListItemResponse
  'GetSipWhiteList':GetSipWhiteListResponse
  'CreateSipRegistration':CreateSipRegistrationResponse
  'UpdateSipRegistration':UpdateSipRegistrationResponse
  'BindSipRegistration':BindSipRegistrationResponse
  'DeleteSipRegistration':DeleteSipRegistrationResponse
  'GetSipRegistrations':GetSipRegistrationsResponse
  'AttachPhoneNumber':AttachPhoneNumberResponse
  'BindPhoneNumberToApplication':BindPhoneNumberToApplicationResponse
  'DeactivatePhoneNumber':DeactivatePhoneNumberResponse
  'SetPhoneNumberInfo':SetPhoneNumberInfoResponse
  'GetPhoneNumbers':GetPhoneNumbersResponse
  'GetNewPhoneNumbers':GetNewPhoneNumbersResponse
  'GetPhoneNumberCategories':GetPhoneNumberCategoriesResponse
  'GetPhoneNumberCountryStates':GetPhoneNumberCountryStatesResponse
  'GetPhoneNumberRegions':GetPhoneNumberRegionsResponse
  'GetActualPhoneNumberRegion':GetActualPhoneNumberRegionResponse
  'GetAccountPhoneNumberCountries':GetAccountPhoneNumberCountriesResponse
  'AddCallerID':AddCallerIDResponse
  'ActivateCallerID':ActivateCallerIDResponse
  'DelCallerID':DelCallerIDResponse
  'GetCallerIDs':GetCallerIDsResponse
  'VerifyCallerID':VerifyCallerIDResponse
  'AddOutboundTestPhoneNumber':AddOutboundTestPhoneNumberResponse
  'VerifyOutboundTestPhoneNumber':VerifyOutboundTestPhoneNumberResponse
  'ActivateOutboundTestPhoneNumber':ActivateOutboundTestPhoneNumberResponse
  'DelOutboundTestPhoneNumber':DelOutboundTestPhoneNumberResponse
  'GetOutboundTestPhoneNumbers':GetOutboundTestPhoneNumbersResponse
  'AddQueue':AddQueueResponse
  'BindUserToQueue':BindUserToQueueResponse
  'DelQueue':DelQueueResponse
  'SetQueueInfo':SetQueueInfoResponse
  'GetQueues':GetQueuesResponse
  'GetACDState':GetACDStateResponse
  'GetACDOperatorStatistics':GetACDOperatorStatisticsResponse
  'GetACDQueueStatistics':GetACDQueueStatisticsResponse
  'GetACDOperatorStatusStatistics':GetACDOperatorStatusStatisticsResponse
  'GetSmartQueueRealtimeMetrics':GetSmartQueueRealtimeMetricsResponse
  'GetSmartQueueDayHistory':GetSmartQueueDayHistoryResponse
  'RequestSmartQueueHistory':RequestSmartQueueHistoryResponse
  'GetSQState':GetSQStateResponse
  'SQ_SetAgentCustomStatusMapping':SQ_SetAgentCustomStatusMappingResponse
  'SQ_GetAgentCustomStatusMapping':SQ_GetAgentCustomStatusMappingResponse
  'SQ_DeleteAgentCustomStatusMapping':SQ_DeleteAgentCustomStatusMappingResponse
  'SQ_AddQueue':SQ_AddQueueResponse
  'SQ_SetQueueInfo':SQ_SetQueueInfoResponse
  'SQ_DelQueue':SQ_DelQueueResponse
  'SQ_GetQueues':SQ_GetQueuesResponse
  'SQ_AddSkill':SQ_AddSkillResponse
  'SQ_DelSkill':SQ_DelSkillResponse
  'SQ_SetSkillInfo':SQ_SetSkillInfoResponse
  'SQ_BindSkill':SQ_BindSkillResponse
  'SQ_UnbindSkill':SQ_UnbindSkillResponse
  'SQ_GetSkills':SQ_GetSkillsResponse
  'SQ_BindAgent':SQ_BindAgentResponse
  'SQ_UnbindAgent':SQ_UnbindAgentResponse
  'SQ_GetAgents':SQ_GetAgentsResponse
  'SQ_SetAgentInfo':SQ_SetAgentInfoResponse
  'AddSkill':AddSkillResponse
  'DelSkill':DelSkillResponse
  'SetSkillInfo':SetSkillInfoResponse
  'GetSkills':GetSkillsResponse
  'BindSkill':BindSkillResponse
  'AddAdminUser':AddAdminUserResponse
  'DelAdminUser':DelAdminUserResponse
  'SetAdminUserInfo':SetAdminUserInfoResponse
  'GetAdminUsers':GetAdminUsersResponse
  'AttachAdminRole':AttachAdminRoleResponse
  'AddAdminRole':AddAdminRoleResponse
  'DelAdminRole':DelAdminRoleResponse
  'SetAdminRoleInfo':SetAdminRoleInfoResponse
  'GetAdminRoles':GetAdminRolesResponse
  'GetAvailableAdminRoleEntries':GetAvailableAdminRoleEntriesResponse
  'AddAuthorizedAccountIP':AddAuthorizedAccountIPResponse
  'DelAuthorizedAccountIP':DelAuthorizedAccountIPResponse
  'GetAuthorizedAccountIPs':GetAuthorizedAccountIPsResponse
  'CheckAuthorizedAccountIP':CheckAuthorizedAccountIPResponse
  'LinkRegulationAddress':LinkRegulationAddressResponse
  'GetZIPCodes':GetZIPCodesResponse
  'GetRegulationsAddress':GetRegulationsAddressResponse
  'GetAvailableRegulations':GetAvailableRegulationsResponse
  'GetCountries':GetCountriesResponse
  'GetRegions':GetRegionsResponse
  'AddPushCredential':AddPushCredentialResponse
  'SetPushCredential':SetPushCredentialResponse
  'DelPushCredential':DelPushCredentialResponse
  'GetPushCredential':GetPushCredentialResponse
  'BindPushCredential':BindPushCredentialResponse
  'AddDialogflowKey':AddDialogflowKeyResponse
  'SetDialogflowKey':SetDialogflowKeyResponse
  'DelDialogflowKey':DelDialogflowKeyResponse
  'GetDialogflowKeys':GetDialogflowKeysResponse
  'BindDialogflowKeys':BindDialogflowKeysResponse
  'SendSmsMessage':SendSmsMessageResponse
  'A2PSendSms':A2PSendSmsResponse
  'ControlSms':ControlSmsResponse
  'GetSmsHistory':GetSmsHistoryResponse
  'A2PGetSmsHistory':A2PGetSmsHistoryResponse
  'GetRecordStorages':GetRecordStoragesResponse
  'CreateKey':CreateKeyResponse
  'GetKeys':GetKeysResponse
  'UpdateKey':UpdateKeyResponse
  'DeleteKey':DeleteKeyResponse
  'SetKeyRoles':SetKeyRolesResponse
  'GetKeyRoles':GetKeyRolesResponse
  'RemoveKeyRoles':RemoveKeyRolesResponse
  'AddSubUser':AddSubUserResponse
  'GetSubUsers':GetSubUsersResponse
  'SetSubUserInfo':SetSubUserInfoResponse
  'DelSubUser':DelSubUserResponse
  'SetSubUserRoles':SetSubUserRolesResponse
  'GetSubUserRoles':GetSubUserRolesResponse
  'RemoveSubUserRoles':RemoveSubUserRolesResponse
  'GetRoles':GetRolesResponse
  'GetRoleGroups':GetRoleGroupsResponse
  'SetKeyValueItem':SetKeyValueItemResponse
  'DelKeyValueItem':DelKeyValueItemResponse
  'GetKeyValueItem':GetKeyValueItemResponse
  'GetKeyValueItems':GetKeyValueItemsResponse
  'GetKeyValueKeys':GetKeyValueKeysResponse
  'GetAccountInvoices':GetAccountInvoicesResponse
}

export interface NewRegistrationInterface {
  
}


export interface AccountsAuthenticationInterface {
  
}

export interface GetAccountInfoRequest {
  /**
   *Set true to get the account's live balance
  */
  returnLiveBalance?:boolean
}
export interface GetAccountInfoResponse {
  /**
   *Account's info as the [AccountInfoType] object instance
  */
  result:AccountInfo
  /**
   *The preferred address for the Management API requests
  */
  apiAddress:string
}
export interface SetAccountInfoRequest {
  /**
   *The new account email
  */
  newAccountEmail?:string
  /**
   *The new account password. Must be at least 8 characters long and contain at least one uppercase and lowercase letter, one number, and one special character
  */
  newAccountPassword?:string
  /**
   *The notification language code (2 symbols, ISO639-1). The following values are available: aa (Afar), ab (Abkhazian), af (Afrikaans), am (Amharic), ar (Arabic), as (Assamese), ay (Aymara), az (Azerbaijani), ba (Bashkir), be (Belarusian), bg (Bulgarian), bh (Bihari), bi (Bislama), bn (Bengali), bo (Tibetan), br (Breton), ca (Catalan), co (Corsican), cs (Czech), cy (Welch), da (Danish), de (German), dz (Bhutani), el (Greek), en (English), eo (Esperanto), es (Spanish), et (Estonian), eu (Basque), fa (Persian), fi (Finnish), fj (Fiji), fo (Faeroese), fr (French), fy (Frisian), ga (Irish), gd (Scots Gaelic), gl (Galician), gn (Guarani), gu (Gujarati), ha (Hausa), hi (Hindi), he (Hebrew), hr (Croatian), hu (Hungarian), hy (Armenian), ia (Interlingua), id (Indonesian), ie (Interlingue), ik (Inupiak), in (Indonesian), is (Icelandic), it (Italian), iu (Inuktitut), iw (Hebrew), ja (Japanese), ji (Yiddish), jw (Javanese), ka (Georgian), kk (Kazakh), kl (Greenlandic), km (Cambodian), kn (Kannada), ko (Korean), ks (Kashmiri), ku (Kurdish), ky (Kirghiz), la (Latin), ln (Lingala), lo (Laothian), lt (Lithuanian), lv (Latvian), mg (Malagasy), mi (Maori), mk (Macedonian), ml (Malayalam), mn (Mongolian), mo (Moldavian), mr (Marathi), ms (Malay), mt (Maltese), my (Burmese), na (Nauru), ne (Nepali), nl (Dutch), no (Norwegian), oc (Occitan), om (Oromo), or (Oriya), pa (Punjabi), pl (Polish), ps (Pashto), pt (Portuguese), qu (Quechua), rm (Rhaeto-Romance), rn (Kirundi), ro (Romanian), ru (Russian), rw (Kinyarwanda), sa (Sanskrit), sd (Sindhi), sg (Sangro), sh (Serbo-Croatian), si (Singhalese), sk (Slovak), sl (Slovenian), sm (Samoan), sn (Shona), so (Somali), sq (Albanian), sr (Serbian), ss (Siswati), st (Sesotho), su (Sudanese), sv (Swedish), sw (Swahili), ta (Tamil), te (Tegulu), tg (Tajik), th (Thai), ti (Tigrinya), tk (Turkmen), tl (Tagalog), tn (Setswana), to (Tonga), tr (Turkish), ts (Tsonga), tt (Tatar), tw (Twi), ug (Uigur), uk (Ukrainian), ur (Urdu), uz (Uzbek), vi (Vietnamese), vo (Volapuk), wo (Wolof), xh (Xhosa), yi (Yiddish), yo (Yoruba), za (Zhuang), zh (Chinese), zu (Zulu)
  */
  languageCode?:string
  /**
   *The account location (timezone). Examples: America/Los_Angeles, Etc/GMT-8, Etc/GMT+10
  */
  location?:string
  /**
   *The first name
  */
  accountFirstName?:string
  /**
   *The last name
  */
  accountLastName?:string
  mobilePhone?:string
  /**
   *The min balance value to notify by email or SMS
  */
  minBalanceToNotify?:number
  /**
   *Voximplant notifications are required
  */
  accountNotifications?:boolean
  /**
   *Set to true to receive the emails about the Voximplant plan changing
  */
  tariffChangingNotifications?:boolean
  /**
   *Set to true to receive the emails about the Voximplant news
  */
  newsNotifications?:boolean
  /**
   *Set to true to receive the emails about a JS scenario error
  */
  sendJsError?:boolean
  /**
   *The company or businessman name
  */
  billingAddressName?:string
  /**
   *The billing address country code (2 symbols, ISO 3166-1 alpha-2). The following values are available: AF (Afghanistan), AL (Albania), DZ (Algeria), AS (American Samoa), AD (Andorra), AO (Angola), AI (Anguilla), AQ (Antarctica), AG (Antigua and Barbuda), AR (Argentina), AM (Armenia), AW (Aruba), AU (Australia), AT (Austria), AZ (Azerbaijan), BH (Bahrain), BD (Bangladesh), BB (Barbados), BY (Belarus), BE (Belgium), BZ (Belize), BJ (Benin), BM (Bermuda), BT (Bhutan), BO (Bolivia), BA (Bosnia and Herzegovina), BW (Botswana), BV (Bouvet Island), BR (Brazil), IO (British Indian Ocean Territory), BN (Brunei), BG (Bulgaria), BF (Burkina Faso), BI (Burundi), KH (Cambodia), CM (Cameroon), CA (Canada), CV (Cape Verde), KY (Cayman Islands), CF (Central African Republic), TD (Chad), CL (Chile), CN (China), CX (Christmas Island), CO (Colombia), KM (Comoros), CG (Congo), CK (Cook Islands), CR (Costa Rica), HR (Croatia), CU (Cuba), CY (Cyprus), CZ (Czech Republic), DK (Denmark), DJ (Djibouti), DM (Dominica), DO (Dominican Republic), EC (Ecuador), EG (Egypt), SV (El Salvador), GQ (Equatorial Guinea), ER (Eritrea), EE (Estonia), ET (Ethiopia), FO (Faroe Islands), FJ (Fiji Islands), FI (Finland), FR (France), GF (French Guiana), PF (French Polynesia), TF (French Southern and Antarctic Lands), GA (Gabon), GE (Georgia), DE (Germany), GH (Ghana), GI (Gibraltar), GR (Greece), GL (Greenland), GD (Grenada), GP (Guadeloupe), GU (Guam), GT (Guatemala), GG (Guernsey), GN (Guinea), GY (Guyana), HT (Haiti), HM (Heard Island and McDonald Islands), HN (Honduras), HU (Hungary), IS (Iceland), IN (India), ID (Indonesia), IR (Iran), IQ (Iraq), IE (Ireland), IL (Israel), IT (Italy), JM (Jamaica), JP (Japan), JE (Jersey), JO (Jordan), KZ (Kazakhstan), KE (Kenya), KI (Kiribati), KR (Korea), KW (Kuwait), KG (Kyrgyzstan), LA (Laos), LV (Latvia), LB (Lebanon), LS (Lesotho), LR (Liberia), LY (Libya), LI (Liechtenstein), LT (Lithuania), LU (Luxembourg), MG (Madagascar), MW (Malawi), MY (Malaysia), MV (Maldives), ML (Mali), MT (Malta), MH (Marshall Islands), MQ (Martinique), MR (Mauritania), MU (Mauritius), YT (Mayotte), MX (Mexico), FM (Micronesia), MD (Moldova), MC (Monaco), MN (Mongolia), ME (Montenegro), MS (Montserrat), MA (Morocco), MZ (Mozambique), MM (Myanmar), NA (Namibia), NR (Nauru), NP (Nepal), NL (Netherlands), AN (Netherlands Antilles), NC (New Caledonia), NZ (New Zealand), NI (Nicaragua), NE (Niger), NG (Nigeria), NU (Niue), NF (Norfolk Island), KP (North Korea), MP (Northern Mariana Islands), NO (Norway), OM (Oman), PK (Pakistan), PW (Palau), PS (Palestinian Authority), PA (Panama), PG (Papua New Guinea), PY (Paraguay), PE (Peru), PH (Philippines), PN (Pitcairn Islands), PL (Poland), PT (Portugal), PR (Puerto Rico), QA (Qatar), RE (Reunion), RO (Romania), RU (Russia), RW (Rwanda), WS (Samoa), SM (San Marino), SA (Saudi Arabia), SN (Senegal), RS (Serbia), SC (Seychelles), SL (Sierra Leone), SG (Singapore), SK (Slovakia), SI (Slovenia), SB (Solomon Islands), SO (Somalia), ZA (South Africa), GS (South Georgia and the South Sandwich Islands), ES (Spain), LK (Sri Lanka), SD (Sudan), SR (Suriname), SZ (Swaziland), SE (Sweden), CH (Switzerland), SY (Syria), ST (Sao Tome and Principe), TW (Taiwan), TJ (Tajikistan), TZ (Tanzania), TH (Thailand), TG (Togo), TK (Tokelau), TO (Tonga), TT (Trinidad and Tobago), TN (Tunisia), TR (Turkey), TM (Turkmenistan), TC (Turks and Caicos Islands), TV (Tuvalu), UG (Uganda), UA (Ukraine), AE (United Arab Emirates), GB (United Kingdom), US (United States), UY (Uruguay), UZ (Uzbekistan), VU (Vanuatu), VA (Vatican City), VE (Venezuela), VN (Vietnam), VI (Virgin Islands), WF (Wallis and Futuna), EH (Western Sahara), YE (Yemen), ZM (Zambia), ZW (Zimbabwe), AX (Aland Islands)
  */
  billingAddressCountryCode?:string
  /**
   *The valid address that needs to be specified to pay for any services. It can't be deleted later, only changed
  */
  billingAddressAddress?:string
  /**
   *The office ZIP
  */
  billingAddressZip?:string
  /**
   *The office phone number
  */
  billingAddressPhone?:string
  /**
   *The custom data
  */
  accountCustomData?:string
  /**
   *If URL is specified, Voximplant cloud will make HTTP POST requests to it when something happens. For a full list of reasons see the <b>type</b> field of the [AccountCallback] structure. The HTTP request will have a JSON-encoded body that conforms to the [AccountCallbacks] structure
  */
  callbackUrl?:string
  /**
   *If salt string is specified, each HTTP request made by the Voximplant cloud toward the <b>callback_url</b> will have a <b>salt</b> field set to MD5 hash of account information and salt. That hash can be used be a developer to ensure that HTTP request is made by the Voximplant cloud
  */
  callbackSalt?:string
}
export interface SetAccountInfoResponse {
  /**
   *1
  */
  result:number
}
export interface SetChildAccountInfoRequest {
  /**
   *The child account ID list separated by the ';' symbol. Use the 'all' value to select all child accounts
  */
  childAccountId:'any'|number|number[]
  /**
   *The child account name list separated by the ';' symbol. Can be used instead of <b>child_account_id</b>
  */
  childAccountName:string|string[]
  /**
   *The child account email list separated by the ';' symbol. Can be used instead of <b>child_account_id</b>
  */
  childAccountEmail:string|string[]
  /**
   *The new child account email
  */
  newChildAccountEmail?:string
  /**
   *The new child account password. Must be at least 8 characters long and contain at least one uppercase and lowercase letter, one number, and one special character
  */
  newChildAccountPassword?:string
  /**
   *Voximplant notifications are required
  */
  accountNotifications?:boolean
  /**
   *Set to true to receive the emails about the Voximplant plan changing
  */
  tariffChangingNotifications?:boolean
  /**
   *Set to true to receive the emails about the Voximplant news
  */
  newsNotifications?:boolean
  /**
   *Set false to disable the child account
  */
  active?:boolean
  /**
   *The notification language code (2 symbols, ISO639-1). The following values are available: aa (Afar), ab (Abkhazian), af (Afrikaans), am (Amharic), ar (Arabic), as (Assamese), ay (Aymara), az (Azerbaijani), ba (Bashkir), be (Belarusian), bg (Bulgarian), bh (Bihari), bi (Bislama), bn (Bengali), bo (Tibetan), br (Breton), ca (Catalan), co (Corsican), cs (Czech), cy (Welch), da (Danish), de (German), dz (Bhutani), el (Greek), en (English), eo (Esperanto), es (Spanish), et (Estonian), eu (Basque), fa (Persian), fi (Finnish), fj (Fiji), fo (Faeroese), fr (French), fy (Frisian), ga (Irish), gd (Scots Gaelic), gl (Galician), gn (Guarani), gu (Gujarati), ha (Hausa), hi (Hindi), he (Hebrew), hr (Croatian), hu (Hungarian), hy (Armenian), ia (Interlingua), id (Indonesian), ie (Interlingue), ik (Inupiak), in (Indonesian), is (Icelandic), it (Italian), iu (Inuktitut), iw (Hebrew), ja (Japanese), ji (Yiddish), jw (Javanese), ka (Georgian), kk (Kazakh), kl (Greenlandic), km (Cambodian), kn (Kannada), ko (Korean), ks (Kashmiri), ku (Kurdish), ky (Kirghiz), la (Latin), ln (Lingala), lo (Laothian), lt (Lithuanian), lv (Latvian), mg (Malagasy), mi (Maori), mk (Macedonian), ml (Malayalam), mn (Mongolian), mo (Moldavian), mr (Marathi), ms (Malay), mt (Maltese), my (Burmese), na (Nauru), ne (Nepali), nl (Dutch), no (Norwegian), oc (Occitan), om (Oromo), or (Oriya), pa (Punjabi), pl (Polish), ps (Pashto), pt (Portuguese), qu (Quechua), rm (Rhaeto-Romance), rn (Kirundi), ro (Romanian), ru (Russian), rw (Kinyarwanda), sa (Sanskrit), sd (Sindhi), sg (Sangro), sh (Serbo-Croatian), si (Singhalese), sk (Slovak), sl (Slovenian), sm (Samoan), sn (Shona), so (Somali), sq (Albanian), sr (Serbian), ss (Siswati), st (Sesotho), su (Sudanese), sv (Swedish), sw (Swahili), ta (Tamil), te (Tegulu), tg (Tajik), th (Thai), ti (Tigrinya), tk (Turkmen), tl (Tagalog), tn (Setswana), to (Tonga), tr (Turkish), ts (Tsonga), tt (Tatar), tw (Twi), ug (Uigur), uk (Ukrainian), ur (Urdu), uz (Uzbek), vi (Vietnamese), vo (Volapuk), wo (Wolof), xh (Xhosa), yi (Yiddish), yo (Yoruba), za (Zhuang), zh (Chinese), zu (Zulu)
  */
  languageCode?:string
  /**
   *The child account location (timezone). Examples: America/Los_Angeles, Etc/GMT-8, Etc/GMT+10
  */
  location?:string
  /**
   *The min balance value to notify by email or SMS
  */
  minBalanceToNotify?:number
  /**
   *Set to true to allow the robokassa payments
  */
  supportRobokassa?:boolean
  /**
   *Set to true to allow the bank card payments
  */
  supportBankCard?:boolean
  /**
   *Set to true to allow the bank invoices
  */
  supportInvoice?:boolean
  /**
   *Set to true to allow use restricted directions
  */
  canUseRestricted?:boolean
  /**
   *The minimum payment amount
  */
  minPaymentAmount?:number
}
export interface SetChildAccountInfoResponse {
  /**
   *1
  */
  result:number
}
export interface GetCurrencyRateRequest {
  /**
   *The currency code list separated by the ';' symbol. Examples: RUR, EUR, USD
  */
  currency:string|string[]
  /**
   *The date, format: YYYY-MM-DD
  */
  date?:Date
}
export interface GetCurrencyRateResponse {
  /**
   *The exchange rates
  */
  result:ExchangeRates
}
export interface GetResourcePriceRequest {
  /**
   *The resource type list separated by the ';' symbol. The possible values are AUDIOHDCONFERENCE, AUDIOHDRECORD, AUDIORECORD, CALLLIST, CALLSESSION, DIALOGFLOW, IM, PSTN_IN_ALASKA, PSTN_IN_GB, PSTN_IN_GEOGRAPHIC, PSTN_IN_GEO_PH, PSTN_IN_RU, PSTN_IN_RU_TOLLFREE, PSTN_INTERNATIONAL, PSTNINTEST, PSTN_IN_TF_AR, PSTN_IN_TF_AT, PSTN_IN_TF_AU, PSTN_IN_TF_BE, PSTN_IN_TF_BR, PSTN_IN_TF_CA, PSTN_IN_TF_CO, PSTN_IN_TF_CY, PSTN_IN_TF_DE, PSTN_IN_TF_DK, PSTN_IN_TF_DO, PSTN_IN_TF_FI, PSTN_IN_TF_FR, PSTN_IN_TF_GB, PSTN_IN_TF_HR, PSTN_IN_TF_HU, PSTN_IN_TF_IL, PSTN_IN_TF_LT, PSTN_IN_TF_PE, PSTN_IN_TF_US, PSTN_IN_US, PSTNOUT, PSTNOUT_EEA, PSTNOUTEMERG, PSTNOUT_KZ, PSTNOUT_LOCAL, PSTN_OUT_LOCAL_RU, RELAYED_TRAFFIC, SIPOUT, SIPOUTVIDEO, SMSINPUT, SMSOUT, SMSOUT_INTERNATIONAL, TRANSCRIPTION, TTS_TEXT_GOOGLE, TTS_YANDEX, USER_LOGON, VIDEOCALL, VIDEORECORD, VOICEMAILDETECTION, VOIPIN, VOIPOUT, VOIPOUTVIDEO, YANDEXASR, ASR, ASR_GOOGLE_ENHANCED
  */
  resourceType?:string|string[]
  /**
   *The price group ID list separated by the ';' symbol
  */
  priceGroupId?:'any'|number|number[]
  /**
   *The price group name template to filter
  */
  priceGroupName?:string
  /**
   *The resource parameter list separated by the ';' symbol. Example: a phone number list
  */
  resourceParam?:string|string[]
}
export interface GetResourcePriceResponse {
  /**
   *The resource prices
  */
  result:ResourcePrice[]
}
export interface GetSubscriptionPriceRequest {
  /**
   *The subscription template ID list separated by the ';' symbol
  */
  subscriptionTemplateId?:'any'|number|number[]
  /**
   *The subscription template type. The following values are possible: PHONE_NUM, SIP_REGISTRATION
  */
  subscriptionTemplateType?:string
  /**
   *The subscription template name  (example: SIP registration, Phone GB, Phone RU 495, ...)
  */
  subscriptionTemplateName?:string
  /**
   *The max returning record count
  */
  count?:number
  /**
   *The first <b>N</b> records will be skipped in the output
  */
  offset?:number
}
export interface GetSubscriptionPriceResponse {
  /**
   *The subscription template prices
  */
  result:SubscriptionTemplate[]
}
export interface GetChildrenAccountsRequest {
  /**
   *The account ID list separated by the ';' symbol. Use the 'all' value to select all accounts
  */
  childAccountId?:'any'|number|number[]
  /**
   *The child account name part to filter
  */
  childAccountName?:string
  /**
   *The child ccount email to filter
  */
  childAccountEmail?:string
  /**
   *The active flag to filter
  */
  active?:boolean
  /**
   *The frozen flag to filter
  */
  frozen?:boolean
  /**
   *Set true to ignore the invalid 'child_account_id' items
  */
  ignoreInvalidAccounts?:boolean
  /**
   *Set true to output the account_id only
  */
  briefOutput?:boolean
  /**
   *Set true to output the account_id, account_name, account_email only
  */
  mediumOutput?:boolean
  /**
   *The max returning record count
  */
  count?:number
  /**
   *The first <b>N</b> records will be skipped in the output
  */
  offset?:number
  /**
   *The following values are available: 'child_account_id', 'child_account_name' and 'child_account_email'
  */
  orderBy?:string
  /**
   *Set true to get the user live balance
  */
  returnLiveBalance?:boolean
}
export interface GetChildrenAccountsResponse {
  result:AccountInfo[]
  /**
   *The total found user count
  */
  totalCount:number
  /**
   *The returned user count
  */
  count:number
}
export interface GetMoneyAmountToChargeRequest {
  /**
   *The currency name. Examples: USD, RUR, EUR
  */
  currency?:string
  /**
   *The next charge date, format: YYYY-MM-DD
  */
  chargeDate?:Date
}
export interface GetMoneyAmountToChargeResponse {
  /**
   *Result
  */
  result:GetMoneyAmountToChargeResult
}
export interface ChargeAccountRequest {
  /**
   *The phone ID list separated by the ';' symbol. Use the 'all' value to select all phone ids. You should specify the phones having the auto_charge=false
  */
  phoneId:'any'|number|number[]
  /**
   *The phone number list separated by the ';' symbol. Use the 'all' value to select all phone numbers. Can be used instead of <b>phone_id</b>. You should specify the phones having the auto_charge=false
  */
  phoneNumber:string|string[]
}
export interface ChargeAccountResponse {
  /**
   *Result
  */
  result:ChargeAccountResult
  /**
   *The current account state
  */
  accountInfo:ShortAccountInfo
}
export interface ChangeAccountPlanRequest {
  /**
   *The plan type to config. The possible values are IM, MAU
  */
  planType:string
  /**
   *The new plan ID with a price larger than the current plan's (see [GetAvailablePlans])
  */
  planSubscriptionTemplateId?:number
}
export interface ChangeAccountPlanResponse {
  /**
   *1
  */
  result:number
  /**
   *The current account state
  */
  accountInfo:ShortAccountInfo
}
export interface GetAccountPlansRequest {
  /**
   *The plan type list separated by the ';' symbol. The possible values are IM, MAU
  */
  planType?:string|string[]
  /**
   *The plan ID list separated by the ';' symbol
  */
  planSubscriptionTemplateId?:'any'|number|number[]
}
export interface GetAccountPlansResponse {
  result:AccountPlan[]
}
export interface GetAvailablePlansRequest {
  /**
   *The plan type list separated by the ';' symbol. The possible values are IM, MAU
  */
  planType?:string|string[]
  /**
   *The plan ID list separated by the ';' symbol
  */
  planSubscriptionTemplateId?:'any'|number|number[]
}
export interface GetAvailablePlansResponse {
  result:Plan[]
}
export interface GetAccountDocumentsRequest {
  /**
   *Set true to view the uploaded document statuses. (The flag is ignored with the child_account_id=all)
  */
  withDetails?:boolean
  /**
   *The required account verification name to filter
  */
  verificationName?:string
  /**
   *The account verification status list separated by the ';' symbol. The following values are possible: REQUIRED, IN_PROGRESS, VERIFIED
  */
  verificationStatus?:string|string[]
  /**
   *Unverified subscriptions hold until the date (from ...) in format: YYYY-MM-DD
  */
  fromUnverifiedHoldUntil?:Date
  /**
   *Unverified subscriptions hold until the date (... to) in format: YYYY-MM-DD
  */
  toUnverifiedHoldUntil?:Date
  /**
   *The child account ID list separated by the ';' symbol. Use the 'all' value to select all child accounts
  */
  childAccountId?:'any'|number|number[]
  /**
   *Set true to get the children account verifications only
  */
  childrenVerificationsOnly?:boolean
}
export interface GetAccountDocumentsResponse {
  /**
   *The account verifications
  */
  result:AccountVerifications[]
}
export interface AccountsInterface {
  getAccountInfo: (request:GetAccountInfoRequest) => Promise<GetAccountInfoResponse>
  setAccountInfo: (request:SetAccountInfoRequest) => Promise<SetAccountInfoResponse>
  setChildAccountInfo: (request:SetChildAccountInfoRequest) => Promise<SetChildAccountInfoResponse>
  getCurrencyRate: (request:GetCurrencyRateRequest) => Promise<GetCurrencyRateResponse>
  getResourcePrice: (request:GetResourcePriceRequest) => Promise<GetResourcePriceResponse>
  getSubscriptionPrice: (request:GetSubscriptionPriceRequest) => Promise<GetSubscriptionPriceResponse>
  getChildrenAccounts: (request:GetChildrenAccountsRequest) => Promise<GetChildrenAccountsResponse>
  getMoneyAmountToCharge: (request:GetMoneyAmountToChargeRequest) => Promise<GetMoneyAmountToChargeResponse>
  chargeAccount: (request:ChargeAccountRequest) => Promise<ChargeAccountResponse>
  changeAccountPlan: (request:ChangeAccountPlanRequest) => Promise<ChangeAccountPlanResponse>
  getAccountPlans: (request:GetAccountPlansRequest) => Promise<GetAccountPlansResponse>
  getAvailablePlans: (request:GetAvailablePlansRequest) => Promise<GetAvailablePlansResponse>
  getAccountDocuments: (request:GetAccountDocumentsRequest) => Promise<GetAccountDocumentsResponse>
}

export interface AddApplicationRequest {
  /**
   *The short application name in format \[a-z\]\[a-z0-9-\]{1,64}
  */
  applicationName:string
  /**
   *Enable secure storage for all logs and records of the application
  */
  secureRecordStorage?:boolean
}
export interface AddApplicationResponse {
  /**
   *1
  */
  result:number
  /**
   *The application ID
  */
  applicationId:number
  /**
   *The full application name
  */
  applicationName:string
  /**
   *This flag indicates whether a secure storage for logs and records is enabled or not
  */
  secureRecordStorage:boolean
}
export interface DelApplicationRequest {
  /**
   *The application ID list separated by the ';' symbol. Use the 'all' value to select all applications
  */
  applicationId:'any'|number|number[]
  /**
   *The application name list separated by the ';' symbol. Can be used instead of <b>application_id</b>
  */
  applicationName:string|string[]
}
export interface DelApplicationResponse {
  /**
   *1
  */
  result:number
}
export interface SetApplicationInfoRequest {
  /**
   *The application ID
  */
  applicationId:number
  /**
   *The application name that can be used instead of <b>application_id</b>
  */
  requiredApplicationName:string
  /**
   *The new short application name in format [a-z][a-z0-9-]{1,79}
  */
  applicationName?:string
  /**
   *Enable secure storage for all logs and records of the application
  */
  secureRecordStorage?:boolean
}
export interface SetApplicationInfoResponse {
  /**
   *1
  */
  result:number
  /**
   *The new full application name
  */
  applicationName:string
  /**
   *This flag indicates whether a secure storage for logs and records is enabled or not
  */
  secureRecordStorage:boolean
}
export interface GetApplicationsRequest {
  /**
   *The application ID to filter
  */
  applicationId?:number
  /**
   *The application name part to filter
  */
  applicationName?:string
  /**
   *Set true to get bound rules info
  */
  withRules?:boolean
  /**
   *Set true to get bound rules and scenarios info
  */
  withScenarios?:boolean
  /**
   *The max returning record count
  */
  count?:number
  /**
   *The first <b>N</b> records will be skipped in the output
  */
  offset?:number
}
export interface GetApplicationsResponse {
  result:ApplicationInfo[]
  /**
   *The total found application count
  */
  totalCount:number
  /**
   *The returned application count
  */
  count:number
}
export interface ApplicationsInterface {
  addApplication: (request:AddApplicationRequest) => Promise<AddApplicationResponse>
  delApplication: (request:DelApplicationRequest) => Promise<DelApplicationResponse>
  setApplicationInfo: (request:SetApplicationInfoRequest) => Promise<SetApplicationInfoResponse>
  getApplications: (request:GetApplicationsRequest) => Promise<GetApplicationsResponse>
}

export interface AddUserRequest {
  /**
   *The user name in format [a-z0-9][a-z0-9_-]{2,49}
  */
  userName:string
  /**
   *The user display name. The length must be less than 256
  */
  userDisplayName:string
  /**
   *The user password. Must be at least 8 characters long and contain at least one uppercase and lowercase letter, one number, and one special character
  */
  userPassword:string
  /**
   *The application ID which a new user will be bound to. Can be used instead of the <b>application_name</b> parameter
  */
  applicationId:number
  /**
   *The application name which a new user will be bound to. Can be used instead of the <b>application_id</b> parameter
  */
  applicationName:string
  /**
   *'True' if the user will use the parent account's money, 'false' if the user will have a separate balance
  */
  parentAccounting?:boolean
  mobilePhone?:string
  /**
   *The user enable flag
  */
  userActive?:boolean
  /**
   *Any string
  */
  userCustomData?:string
}
export interface AddUserResponse {
  /**
   *1
  */
  result:number
  /**
   *The new user ID
  */
  userId:number
}
export interface DelUserRequest {
  /**
   *The user ID list separated by the ';' symbol. Use the 'all' value to select all users
  */
  userId:'any'|number|number[]
  /**
   *The user name list separated by the ';' symbol that can be used instead of <b>user_id</b>
  */
  userName:string|string[]
  /**
   *Delete the specified users bound to the application ID. It is required if the <b>user_name</b> is specified
  */
  applicationId?:number
  /**
   *Delete the specified users bound to the application name. Can be used instead of the <b>application_id</b> parameter
  */
  applicationName?:string
}
export interface DelUserResponse {
  /**
   *1
  */
  result:number
}
export interface SetUserInfoRequest {
  /**
   *The user to edit
  */
  userId:number
  /**
   *The user name that can be used instead of <b>user_id</b>
  */
  userName:string
  /**
   *The application ID. It is required if the <b>user_name</b> is specified
  */
  applicationId?:number
  /**
   *The application name that can be used instead of <b>application_id</b>
  */
  applicationName?:string
  /**
   *The new user name in format [a-z0-9][a-z0-9_-]{2,49}
  */
  newUserName?:string
  /**
   *The new user display name. The length must be less than 256
  */
  userDisplayName?:string
  /**
   *The new user password. Must be at least 8 characters long and contain at least one uppercase and lowercase letter, one number, and one special character
  */
  userPassword?:string
  /**
   * Set 'true' to use the parent account's money, 'false' to use a separate user balance
  */
  parentAccounting?:boolean
  /**
   *The user enable flag
  */
  userActive?:boolean
  /**
   *Any string
  */
  userCustomData?:string
  mobilePhone?:string
}
export interface SetUserInfoResponse {
  /**
   *1
  */
  result:number
}
export interface GetUsersRequest {
  /**
   *The application ID to filter
  */
  applicationId:number
  /**
   *The application name part to filter
  */
  applicationName:string
  /**
   *The skill ID to filter
  */
  skillId?:number
  /**
   *The excluded skill ID to filter
  */
  excludedSkillId?:number
  /**
   *The ACD queue ID to filter
  */
  acdQueueId?:number
  /**
   *The excluded ACD queue ID to filter
  */
  excludedAcdQueueId?:number
  /**
   *The user ID to filter
  */
  userId?:number
  /**
   *The user name part to filter
  */
  userName?:string
  /**
   *The user active flag to filter
  */
  userActive?:boolean
  /**
   *The user display name part to filter
  */
  userDisplayName?:string
  /**
   *Set true to get the bound skills
  */
  withSkills?:boolean
  /**
   *Set true to get the bound queues
  */
  withQueues?:boolean
  /**
   *The ACD status list separated by the ';' symbol to filter. The following values are possible: OFFLINE, ONLINE, READY, BANNED, IN_SERVICE, AFTER_SERVICE, TIMEOUT, DND
  */
  acdStatus?:string|string[]
  /**
   *The skill to show in the 'skills' field output
  */
  showingSkillId?:number
  /**
   *The max returning record count
  */
  count?:number
  /**
   *The first <b>N</b> records will be skipped in the output
  */
  offset?:number
  /**
   *The following values are available: 'user_id', 'user_name' and 'user_display_name'
  */
  orderBy?:string
  /**
   *Set true to get the user live balance
  */
  returnLiveBalance?:boolean
}
export interface GetUsersResponse {
  /**
   *The UserInfoType records
  */
  result:UserInfo[]
  /**
   *The total found user count
  */
  totalCount:number
  /**
   *The returned user count
  */
  count:number
}
export interface TransferMoneyToUserRequest {
  /**
   *The user ID list separated by the ';' symbol. Use the 'all' value to select all users
  */
  userId:'any'|number|number[]
  /**
   *The user name list separated by the ';' symbol that can be used instead of <b>user_id</b>
  */
  userName:string|string[]
  /**
   *The money amount, $. The absolute amount value must be equal or greater than 0.01
  */
  amount:number
  /**
   *The application ID. It is required if the <b>user_name</b> is specified
  */
  applicationId?:number
  /**
   *The application name that can be used instead of <b>application_id</b>
  */
  applicationName?:string
  /**
   *The amount currency. Examples: RUR, EUR, USD
  */
  currency?:string
  /**
   *Returns error if strict_mode is true and a user or the account hasn't enough money
  */
  strictMode?:boolean
  /**
   *The user transaction description
  */
  userTransactionDescription?:string
  /**
   *The account transaction description. The following macro available: ${user_id}, ${user_name}
  */
  accountTransactionDescription?:string
}
export interface TransferMoneyToUserResponse {
  /**
   *1
  */
  result:number
  /**
   *The new account balance
  */
  balance:number
}
export interface UsersInterface {
  addUser: (request:AddUserRequest) => Promise<AddUserResponse>
  delUser: (request:DelUserRequest) => Promise<DelUserResponse>
  setUserInfo: (request:SetUserInfoRequest) => Promise<SetUserInfoResponse>
  getUsers: (request:GetUsersRequest) => Promise<GetUsersResponse>
  transferMoneyToUser: (request:TransferMoneyToUserRequest) => Promise<TransferMoneyToUserResponse>
}

export interface CreateManualCallListRequest {
  /**
   *The rule ID
  */
  ruleId:number
  /**
   *Call list priority. The value is in the range of [0 ... 2^31] where zero is the highest priority
  */
  priority:number
  /**
   *Number of simultaneously processed tasks
  */
  maxSimultaneous:number
  /**
   *Number of attempts. Should be equal or greater than <b>1</b>
  */
  numAttempts:number
  /**
   *File name
  */
  name:string
  /**
   *Send as "body" part of the HTTP request or as multiform. The sending "file_content" via URL is at its own risk because the network devices tend to drop HTTP requests with large headers
  */
  fileContent:string
  /**
   *Interval between call attempts in seconds. The default is 0
  */
  intervalSeconds?:number
  /**
   *Encoding file. The default is UTF-8
  */
  encoding?:string
  /**
   *Separator values. The default is ';'
  */
  delimiter?:string
  /**
   *Escape character for parsing csv
  */
  escape?:string
  /**
   *Specifies the IP from the geolocation of the call list subscribers. It allows selecting the nearest server for serving subscribers
  */
  referenceIp?:string
}
export interface CreateManualCallListResponse {
  /**
   *true
  */
  result:boolean
  /**
   *The number of stored records
  */
  count:number
  /**
   *The list ID
  */
  listId:number
}
export interface StartNextCallTaskRequest {
  /**
   *The list of the call list IDs separated by the ';' symbol
  */
  listId:'any'|number|number[]
  /**
   *The custom param to pass the call initiator parameters to the scenario
  */
  customParams?:string
}
export interface StartNextCallTaskResponse {
  /**
   *true
  */
  result:number
  /**
   *The list id
  */
  listId:number
}
export interface GetCallListsRequest {
  /**
   *The list ID to filter. Can be a list separated by the ';' symbol. Use the 'all' value to select all lists
  */
  listId?:'any'|number|number[]
  /**
   *Find call lists by name
  */
  name?:string
  /**
   *Find only active call lists
  */
  isActive?:boolean
  /**
   *The UTC 'from' date filter in 24-h format: YYYY-MM-DD HH:mm:ss
  */
  fromDate?:Date
  /**
   *The UTC 'to' date filter in 24-h format: YYYY-MM-DD HH:mm:ss
  */
  toDate?:Date
  /**
   *The type of the call list. The possible values are AUTOMATIC and MANUAL
  */
  typeList?:string
  /**
   *The max returning record count
  */
  count?:number
  /**
   *The first <b>N</b> records will be skipped in the output
  */
  offset?:number
  /**
   *The application ID to filter. Can be a list separated by the ';' symbol. Use the 'all' value to select all applications
  */
  applicationId?:'any'|number|number[]
}
export interface GetCallListsResponse {
  /**
   *Array of lists
  */
  result:CallList[]
  /**
   *The returned call list count
  */
  count:number
  /**
   *The total found call list count
  */
  totalCount:number
}
export interface GetCallListDetailsRequest {
  /**
   *The list ID
  */
  listId:number
  /**
   *Maximum number of entries in the result
  */
  count?:number
  /**
   *The first <b>N</b> records will be skipped in the output
  */
  offset?:number
  /**
   *Output format (CSV/JSON/XLS). Default CSV
  */
  output?:string
  /**
   *Encoding of the output file. Default UTF-8
  */
  encoding?:string
  /**
   *Separator values. The default is ';'
  */
  delimiter?:string
}
export interface GetCallListDetailsResponse {
  /**
   *Array of tasks for the roll call
  */
  result:CallListDetail[]
  /**
   *The number of tasks
  */
  count:number
}
export interface StopCallListProcessingRequest {
  /**
   *The list Id
  */
  listId:number
}
export interface StopCallListProcessingResponse {
  /**
   *true
  */
  result:boolean
  /**
   *Result message
  */
  msg:string
}
export interface RecoverCallListRequest {
  /**
   *The list Id
  */
  listId:number
}
export interface RecoverCallListResponse {
  /**
   *true
  */
  result:boolean
  /**
   *Number restored tasks
  */
  countRecovery:number
}
export interface CallListsInterface {
  createManualCallList: (request:CreateManualCallListRequest) => Promise<CreateManualCallListResponse>
  startNextCallTask: (request:StartNextCallTaskRequest) => Promise<StartNextCallTaskResponse>
  getCallLists: (request:GetCallListsRequest) => Promise<GetCallListsResponse>
  getCallListDetails: (request:GetCallListDetailsRequest) => Promise<GetCallListDetailsResponse>
  stopCallListProcessing: (request:StopCallListProcessingRequest) => Promise<StopCallListProcessingResponse>
  recoverCallList: (request:RecoverCallListRequest) => Promise<RecoverCallListResponse>
}

export interface AddScenarioRequest {
  /**
   *The scenario name. The length must be less than 30
  */
  scenarioName:string
  /**
   *The scenario text. The length must be less than 128 KB
  */
  scenarioScript?:string
  /**
   *The rule ID
  */
  ruleId?:number
  /**
   *The rule name that can be used instead of <b>rule_id</b>
  */
  ruleName?:string
  /**
   *Rewrite the existing scenario
  */
  rewrite?:boolean
}
export interface AddScenarioResponse {
  /**
   *1
  */
  result:number
  /**
   *The new scenario ID
  */
  scenarioId:number
}
export interface DelScenarioRequest {
  /**
   *The scenario ID list separated by the ';' symbol. Use the 'all' value to select all scenarios
  */
  scenarioId:'any'|number|number[]
  /**
   *The scenario name list separated by the ';' symbol. Can be used instead of <b>scenario_id</b>
  */
  scenarioName:string|string[]
}
export interface DelScenarioResponse {
  /**
   *1
  */
  result:number
}
export interface BindScenarioRequest {
  /**
   *The scenario ID list separated by the ';' symbol
  */
  scenarioId:'any'|number|number[]
  /**
   *The scenario name list separated by the ';' symbol. Can be used instead of <b>scenario_id</b>
  */
  scenarioName:string|string[]
  /**
   *The rule ID
  */
  ruleId:number
  /**
   *The rule name that can be used instead of <b>rule_id</b>
  */
  ruleName:string
  /**
   *The application ID
  */
  applicationId:number
  /**
   *The application name that can be used instead of <b>application_id</b>
  */
  applicationName:string
  /**
   *Bind or unbind (set true or false respectively)
  */
  bind?:boolean
}
export interface BindScenarioResponse {
  /**
   *1
  */
  result:number
}
export interface GetScenariosRequest {
  /**
   *The scenario ID to filter
  */
  scenarioId?:number
  /**
   *The scenario name to filter. Can be used instead of <b>scenario_id</b>. All scenarios containing this param in their names will be returned. The parameter is case insensitive
  */
  scenarioName?:string
  /**
   *Set true to get the scenario text. You must specify the 'scenario_id' too!
  */
  withScript?:boolean
  /**
   *The max returning record count
  */
  count?:number
  /**
   *The first <b>N</b> records will be skipped in the output
  */
  offset?:number
}
export interface GetScenariosResponse {
  result:ScenarioInfo[]
  /**
   *The total found scenario count
  */
  totalCount:number
  /**
   *The returned scenario count
  */
  count:number
}
export interface SetScenarioInfoRequest {
  /**
   *The scenario ID
  */
  scenarioId:number
  /**
   *The name of the scenario to edit, can be used instead of <b>scenario_id</b>
  */
  requiredScenarioName:string
  /**
   *The new scenario name. The length must be less than 30
  */
  scenarioName?:string
  /**
   *The new scenario text. The length must be less than 128 KB
  */
  scenarioScript?:string
}
export interface SetScenarioInfoResponse {
  /**
   *1
  */
  result:number
}
export interface ReorderScenariosRequest {
  /**
   *The rule ID
  */
  ruleId:number
  /**
   *The rule name that can be used instead of <b>rule_id</b>
  */
  ruleName:string
  /**
   *The scenario ID list separated by the ';' symbol
  */
  scenarioId?:'any'|number|number[]
}
export interface ReorderScenariosResponse {
  /**
   *1
  */
  result:number
}
export interface StartScenariosRequest {
  /**
   *The rule ID
  */
  ruleId:number
  /**
   *The user ID. Run the scripts from the user if set
  */
  userId?:number
  /**
   *The user name that can be used instead of <b>user_id</b>. Run the scripts from the user if set
  */
  userName?:string
  /**
   *The application ID
  */
  applicationId?:number
  /**
   *The application name that can be used instead of <b>application_id</b>
  */
  applicationName?:string
  /**
   *The script custom data (like a script argument). Can be accessed in JS scenario via the <a href='/docs/references/voxengine/voxengine/customdata'>VoxEngine.customData()</a> method
  */
  scriptCustomData?:string
  /**
   *Specifies the IP from the geolocation of predicted subscribers. It allows selecting the nearest server for serving subscribers
  */
  referenceIp?:string
  withCheckUrl?:boolean
}
export interface StartScenariosResponse {
  /**
   *1
  */
  result:number
  /**
   *The URL to control a created media session. It can be used for arbitrary tasks such as stopping scenario or passing additional data to it. Making HTTP request on this URL will result in the [AppEvents.HttpRequest](/docs/references/voxengine/appevents#httprequest) VoxEngine event being triggered for scenario, with HTTP request data passed to it
  */
  mediaSessionAccessUrl:string
  /**
   *The URL to control a created media session. It can be used for arbitrary tasks such as stopping scenario or passing additional data to it. Making HTTPS request on this URL will result in the [AppEvents.HttpRequest](/docs/references/voxengine/appevents#httprequest) VoxEngine event being triggered for scenario, with HTTP request data passed to it
  */
  mediaSessionAccessSecureUrl:string
  mediaSessionCheckUrl:string
}
export interface StartConferenceRequest {
  /**
   *The conference name. The name length must be less than 50 symbols
  */
  conferenceName:string
  /**
   *The rule ID
  */
  ruleId:number
  /**
   *The user ID. Run the scripts from the user if set
  */
  userId?:number
  /**
   *The user name that can be used instead of <b>user_id</b>. Run the scripts from the user if set
  */
  userName?:string
  /**
   *The application ID
  */
  applicationId?:number
  /**
   *The application name that can be used instead of <b>application_id</b>
  */
  applicationName?:string
  /**
   *The script custom data (like a script argument). Can be accessed in JS scenario via the <a href='/docs/references/voxengine/voxengine/customdata'>VoxEngine.customData()</a> method
  */
  scriptCustomData?:string
  /**
   *Specifies the IP from the geolocation of predicted subscribers. It allows selecting the nearest server for serving subscribers
  */
  referenceIp?:string
}
export interface StartConferenceResponse {
  /**
   *1
  */
  result:number
  /**
   *The URL to control a created media session. It can be used for arbitrary tasks such as stopping scenario or passing additional data to it. Making HTTP request on this URL will result in the [AppEvents.HttpRequest](/docs/references/voxengine/appevents#httprequest) VoxEngine event being triggered for a scenario, with an HTTP request data passed to it
  */
  mediaSessionAccessUrl:string
  /**
   *The URL to control a created media session. It can be used for arbitrary tasks such as stopping scenario or passing additional data to it. Making HTTPS request on this URL will result in the [AppEvents.HttpRequest](/docs/references/voxengine/appevents#httprequest) VoxEngine event being triggered for a scenario, with an HTTP request data passed to it
  */
  mediaSessionAccessSecureUrl:string
}
export interface ScenariosInterface {
  addScenario: (request:AddScenarioRequest) => Promise<AddScenarioResponse>
  delScenario: (request:DelScenarioRequest) => Promise<DelScenarioResponse>
  bindScenario: (request:BindScenarioRequest) => Promise<BindScenarioResponse>
  getScenarios: (request:GetScenariosRequest) => Promise<GetScenariosResponse>
  setScenarioInfo: (request:SetScenarioInfoRequest) => Promise<SetScenarioInfoResponse>
  reorderScenarios: (request:ReorderScenariosRequest) => Promise<ReorderScenariosResponse>
  startScenarios: (request:StartScenariosRequest) => Promise<StartScenariosResponse>
  startConference: (request:StartConferenceRequest) => Promise<StartConferenceResponse>
}

export interface AddRuleRequest {
  /**
   *The application ID
  */
  applicationId:number
  /**
   *The application name, can be used instead of <b>application_id</b>
  */
  applicationName:string
  /**
   *The rule name. The length must be less than 100
  */
  ruleName:string
  /**
   *The rule pattern regex. The length must be less than 64 KB
  */
  rulePattern:string
  /**
   *The scenario ID list separated by the ';' symbol
  */
  scenarioId:'any'|number|number[]
  /**
   *The scenario name list separated by the ';' symbol. Can be used instead of <b>scenario_id</b>
  */
  scenarioName:string|string[]
  /**
   *The exclude pattern regex. The length must be less than 64 KB
  */
  rulePatternExclude?:string
  /**
   *Video conference is required
  */
  videoConference?:boolean
}
export interface AddRuleResponse {
  /**
   *1
  */
  result:number
  /**
   *The new rule ID
  */
  ruleId:number
}
export interface DelRuleRequest {
  /**
   *The rule ID list separated by the ';' symbol. Use the 'all' value to select all rules
  */
  ruleId:'any'|number|number[]
  /**
   *The rule name list separated by the ';' symbol. Can be used instead of <b>rule_id</b>
  */
  ruleName:string|string[]
  /**
   *The application ID list separated by the ';' symbol. Use the 'all' value to select all applications
  */
  applicationId:'any'|number|number[]
  /**
   *The application name list separated by the ';' symbol. Can be used instead of <b>application_id</b>
  */
  applicationName:string|string[]
}
export interface DelRuleResponse {
  /**
   *1
  */
  result:number
}
export interface SetRuleInfoRequest {
  /**
   *The rule ID
  */
  ruleId:number
  /**
   *The new rule name. The length must be less than 100
  */
  ruleName?:string
  /**
   *The new rule pattern regex. The length must be less than 64 KB
  */
  rulePattern?:string
  /**
   *The new exclude pattern regex. The length must be less than 64 KB
  */
  rulePatternExclude?:string
  /**
   *Video conference is required
  */
  videoConference?:boolean
}
export interface SetRuleInfoResponse {
  /**
   *1
  */
  result:number
}
export interface GetRulesRequest {
  /**
   *The application ID
  */
  applicationId:number
  /**
   *The application name that can be used instead of <b>application_id</b>
  */
  applicationName:string
  /**
   *The rule ID to filter
  */
  ruleId?:number
  /**
   *The rule name part to filter
  */
  ruleName?:string
  /**
   *The video conference flag to filter
  */
  videoConference?:boolean
  /**
   *Search for template matching
  */
  template?:string
  /**
   *Set true to get bound scenarios info
  */
  withScenarios?:boolean
  /**
   *The max returning record count
  */
  count?:number
  /**
   *The first <b>N</b> records will be skipped in the output
  */
  offset?:number
}
export interface GetRulesResponse {
  result:RuleInfo[]
  /**
   *The total found rule count
  */
  totalCount:number
  /**
   *The returned rule count
  */
  count:number
}
export interface ReorderRulesRequest {
  /**
   *The rule ID list separated by the ';' symbol
  */
  ruleId:'any'|number|number[]
}
export interface ReorderRulesResponse {
  /**
   *1
  */
  result:number
}
export interface RulesInterface {
  addRule: (request:AddRuleRequest) => Promise<AddRuleResponse>
  delRule: (request:DelRuleRequest) => Promise<DelRuleResponse>
  setRuleInfo: (request:SetRuleInfoRequest) => Promise<SetRuleInfoResponse>
  getRules: (request:GetRulesRequest) => Promise<GetRulesResponse>
  reorderRules: (request:ReorderRulesRequest) => Promise<ReorderRulesResponse>
}

export interface GetCallHistoryRequest {
  /**
   *The from date in the selected timezone in 24-h format: YYYY-MM-DD HH:mm:ss
  */
  fromDate:Date
  /**
   *The to date in the selected timezone in 24-h format: YYYY-MM-DD HH:mm:ss
  */
  toDate:Date
  timezone?:string
  /**
   *The call session history ID list separated by the ';' symbol. The sessions IDs can be accessed in JS scenario via the <b>sessionID</b> property of the <a href='/docs/references/voxengine/appevents#started'>AppEvents.Started</a> event
  */
  callSessionHistoryId?:'any'|number|number[]
  /**
   *The application ID
  */
  applicationId?:number
  /**
   *The application name, can be used instead of <b>application_id</b>
  */
  applicationName?:string
  /**
   *The user ID list separated by the ';' symbol. If it's specified, the output will contain the calls from the listed users only
  */
  userId?:'any'|number|number[]
  /**
   *The rule name to filter. Will be applied only if you set application_id or application_name
  */
  ruleName?:string
  /**
   *The remote number list separated by the ';' symbol
  */
  remoteNumber?:string|string[]
  /**
   *The local number list separated by the ';' symbol
  */
  localNumber?:string|string[]
  /**
   *The custom_data to filter sessions
  */
  callSessionHistoryCustomData?:string
  /**
   *Set true to get the bound calls
  */
  withCalls?:boolean
  /**
   *Set true to get the bound records
  */
  withRecords?:boolean
  /**
   *Set true to get other resources usage (see [ResourceUsageType])
  */
  withOtherResources?:boolean
  /**
   *The child account ID list separated by the ';' symbol. Use the 'all' value to select all child accounts
  */
  childAccountId?:'any'|number|number[]
  /**
   *Set true to get the children account calls only
  */
  childrenCallsOnly?:boolean
  /**
   *Set false to get a CSV file without the column names if the output=csv
  */
  withHeader?:boolean
  /**
   *Set true to get records in the descent order
  */
  descOrder?:boolean
  /**
   *Set false to omit the 'total_count' and increase performance
  */
  withTotalCount?:boolean
  /**
   *The number of returning records. In the synchronous mode, the maximum value is 1000
  */
  count?:number
  /**
   *The number of records to skip in the output with a maximum value of 10000
  */
  offset?:number
  /**
   *The output format. The following values available: json, csv
  */
  output?:string
  /**
   *Set true to get records in the asynchronous mode (for csv output only). <b>Use this mode to download large amounts of data</b>. See the [GetHistoryReports], [DownloadHistoryReport] functions for details
  */
  isAsync?:boolean
}
export interface GetCallHistoryResponse {
  /**
   *The CallSessionInfoType records in sync mode or 1 in async mode
  */
  result:CallSessionInfo[]
  /**
   *The total found call session count (sync mode)
  */
  totalCount:number
  /**
   *The returned call session count (sync mode)
  */
  count:number
  /**
   *The used timezone
  */
  timezone:string
  /**
   *The history report ID (async mode)
  */
  historyReportId:number
}
export interface GetHistoryReportsRequest {
  /**
   *The history report ID to filter
  */
  historyReportId?:number
  /**
   *The history report type list separated by the ';' symbol. Use the 'all' value to select all history report types. The following values are possible: calls, transactions, audit, call_list
  */
  historyType?:string|string[]
  /**
   *The UTC creation from date filter in 24-h format: YYYY-MM-DD HH:mm:ss
  */
  createdFrom?:Date
  /**
   *The UTC creation to date filter in 24-h format: YYYY-MM-DD HH:mm:ss
  */
  createdTo?:Date
  /**
   *Report is completed
  */
  isCompleted?:boolean
  /**
   *Set true to get records in the descent order
  */
  descOrder?:boolean
  /**
   *The max returning record count
  */
  count?:number
  /**
   *The first <b>N</b> records will be skipped in the output
  */
  offset?:number
  /**
   *The application ID to filter. Can be a list separated by the ';' symbol. Use the 'all' value to select all applications
  */
  applicationId?:'any'|number|number[]
}
export interface GetHistoryReportsResponse {
  result:HistoryReport[]
  /**
   *The total found reports count
  */
  totalCount:number
  /**
   *The returned reports count
  */
  count:number
}
export interface GetTransactionHistoryRequest {
  /**
   *The from date in the selected timezone in 24-h format: YYYY-MM-DD HH:mm:ss
  */
  fromDate:Date
  /**
   *The to date in the selected timezone in 24-h format: YYYY-MM-DD HH:mm:ss
  */
  toDate:Date
  timezone?:string
  /**
   *The transaction ID list separated by the ';' symbol
  */
  transactionId?:'any'|number|number[]
  paymentReference?:string
  /**
   *The transaction type list separated by the ';' symbol. The following values are possible: resource_charge, money_distribution, subscription_charge, subscription_installation_charge, card_periodic_payment, card_overrun_payment, card_payment, rub_card_periodic_payment, rub_card_overrun_payment, rub_card_payment, robokassa_payment, gift, promo, adjustment, wire_transfer, us_wire_transfer, refund, discount, mgp_charge, mgp_startup, mgp_business, mgp_big_business, mgp_enterprise, mgp_large_enterprise, techsupport_charge, tax_charge, monthly_fee_charge, grace_credit_payment, grace_credit_provision, mau_charge, mau_overrun, im_charge, im_overrun, fmc_charge, sip_registration_charge, development_fee, money_transfer_to_child, money_transfer_to_parent, money_acceptance_from_child, money_acceptance_from_parent, phone_number_installation, phone_number_charge, toll_free_phone_number_installation, toll_free_phone_number_charge, services, user_money_transfer, paypal_payment, paypal_overrun_payment, paypal_periodic_payment
  */
  transactionType?:string|string[]
  /**
   *The user ID list separated by the ';' symbol
  */
  userId?:'any'|number|number[]
  /**
   *The child account ID list separated by the ';' symbol. Use the 'all' value to select all child accounts
  */
  childAccountId?:'any'|number|number[]
  /**
   *Set true to get the children account transactions only
  */
  childrenTransactionsOnly?:boolean
  /**
   *Set true to get the users' transactions only
  */
  usersTransactionsOnly?:boolean
  /**
   *Set true to get records in the descent order
  */
  descOrder?:boolean
  /**
   *The number of returning records. In the synchronous mode, the maximum value is 1000
  */
  count?:number
  /**
   *The number of records to skip in the output with a maximum value of 10000
  */
  offset?:number
  /**
   *The output format. The following values available: json, csv
  */
  output?:string
  /**
   *Set true to get records in the asynchronous mode (for csv output only). <b>Use this mode to download large amounts of data</b>. See the [GetHistoryReports], [DownloadHistoryReport] functions for details
  */
  isAsync?:boolean
  /**
   *Set true to get transactions on hold (transactions for which money is reserved but not yet withdrawn from the account)
  */
  isUncommitted?:boolean
}
export interface GetTransactionHistoryResponse {
  result:TransactionInfo[]
  /**
   *The total found transaction count
  */
  totalCount:number
  /**
   *The used timezone. 'Etc/GMT' for example
  */
  timezone:string
  /**
   *The returned transaction count
  */
  count:number
  /**
   *The history report ID (async mode)
  */
  historyReportId:number
}
export interface DeleteRecordRequest {
  /**
   *Url to remove
  */
  recordUrl?:string
  /**
   *The record id for remove
  */
  recordId?:number
}
export interface DeleteRecordResponse {
  result:number
}
export interface GetACDHistoryRequest {
  /**
   *The UTC 'from' date filter in 24-h format: YYYY-MM-DD HH:mm:ss
  */
  fromDate:Date
  /**
   *The UTC 'to' date filter in 24-h format: YYYY-MM-DD HH:mm:ss
  */
  toDate:Date
  /**
   *The ACD session history ID list separated by the ';' symbol
  */
  acdSessionHistoryId?:'any'|number|number[]
  /**
   *The ACD request ID list separated by the ';' symbol
  */
  acdRequestId?:string|string[]
  /**
   *The ACD queue ID list to filter separated by the ';' symbol
  */
  acdQueueId?:'any'|number|number[]
  /**
   *The user ID list to filter separated by the ';' symbol
  */
  userId?:'any'|number|number[]
  /**
   *Set true to get the calls terminated by the operator
  */
  operatorHangup?:boolean
  /**
   *The unserviced calls by the operator
  */
  unserviced?:boolean
  /**
   *The min waiting time filter
  */
  minWaitingTime?:number
  /**
   *The rejected calls by the 'max_queue_size', 'max_waiting_time' threshold
  */
  rejected?:boolean
  /**
   *Set true to get the bound events
  */
  withEvents?:boolean
  /**
   *Set false to get a CSV file without the column names if the output=csv
  */
  withHeader?:boolean
  /**
   *Set true to get records in the descent order
  */
  descOrder?:boolean
  /**
   *The max returning record count
  */
  count?:number
  /**
   *The first <b>N</b> records will be skipped in the output
  */
  offset?:number
  /**
   *The output format. The following values available: json, csv
  */
  output?:string
}
export interface GetACDHistoryResponse {
  result:ACDSessionInfo[]
  /**
   *The total found ACD session count
  */
  totalCount:number
  /**
   *The returned ACD session count
  */
  count:number
}
export interface GetAuditLogRequest {
  /**
   *The UTC 'from' date filter in 24-h format: YYYY-MM-DD HH:mm:ss
  */
  fromDate:Date
  /**
   *The UTC 'to' date filter in 24-h format: YYYY-MM-DD HH:mm:ss
  */
  toDate:Date
  timezone?:string
  /**
   *The audit history ID list separated by the ';' symbol
  */
  auditLogId?:'any'|number|number[]
  /**
   *The admin user ID to filter
  */
  filteredAdminUserId?:string
  /**
   *The IP list separated by the ';' symbol to filter
  */
  filteredIp?:string|string[]
  /**
   *The function list separated by the ';' symbol to filter
  */
  filteredCmd?:string|string[]
  /**
   *A relation ID to filter (for example: a phone_number value, a user_id value, an application_id value)
  */
  advancedFilters?:string
  /**
   *Set false to get a CSV file without the column names if the output=csv
  */
  withHeader?:boolean
  /**
   *Set true to get records in the descent order
  */
  descOrder?:boolean
  /**
   *Set false to omit the 'total_count' and increase performance
  */
  withTotalCount?:boolean
  /**
   *The max returning record count
  */
  count?:number
  /**
   *The first <b>N</b> records will be skipped in the output
  */
  offset?:number
  /**
   *The output format. The following values available: json, csv
  */
  output?:string
  /**
   *Set true to get records in the asynchronous mode (for csv output only). If it's true, the request is available via [GetHistoryReports] and [DownloadHistoryReport] methods
  */
  isAsync?:boolean
}
export interface GetAuditLogResponse {
  result:AuditLogInfo[]
  /**
   *The total found item count
  */
  totalCount:number
  /**
   *The returned item count
  */
  count:number
  /**
   *The used timezone
  */
  timezone:string
  /**
   *The history report ID (async mode)
  */
  historyReportId:number
}
export interface HistoryInterface {
  getCallHistory: (request:GetCallHistoryRequest) => Promise<GetCallHistoryResponse>
  getHistoryReports: (request:GetHistoryReportsRequest) => Promise<GetHistoryReportsResponse>
  getTransactionHistory: (request:GetTransactionHistoryRequest) => Promise<GetTransactionHistoryResponse>
  deleteRecord: (request:DeleteRecordRequest) => Promise<DeleteRecordResponse>
  getACDHistory: (request:GetACDHistoryRequest) => Promise<GetACDHistoryResponse>
  getAuditLog: (request:GetAuditLogRequest) => Promise<GetAuditLogResponse>
}

export interface AddPstnBlackListItemRequest {
  /**
   *The phone number in format e164 or regex pattern
  */
  pstnBlacklistPhone:string
}
export interface AddPstnBlackListItemResponse {
  /**
   *1
  */
  result:number
  /**
   *The PSTN black list item ID
  */
  pstnBlacklistId:number
}
export interface SetPstnBlackListItemRequest {
  /**
   *The PSTN black list item ID
  */
  pstnBlacklistId:number
  /**
   *The new phone number in format e164
  */
  pstnBlacklistPhone:string
}
export interface SetPstnBlackListItemResponse {
  /**
   *1
  */
  result:number
}
export interface DelPstnBlackListItemRequest {
  /**
   *The PSTN black list item ID
  */
  pstnBlacklistId:number
}
export interface DelPstnBlackListItemResponse {
  /**
   *1
  */
  result:number
}
export interface GetPstnBlackListRequest {
  /**
   *The PSTN black list item ID for filter
  */
  pstnBlacklistId?:number
  /**
   *The phone number in format e164 for filter
  */
  pstnBlacklistPhone?:string
  /**
   *The max returning record count
  */
  count?:number
  /**
   *The first <b>N</b> records will be skipped in the output
  */
  offset?:number
}
export interface GetPstnBlackListResponse {
  result:PstnBlackListInfo[]
  /**
   *The total found phone numbers count
  */
  totalCount:number
  /**
   *The returned phone numbers count
  */
  count:number
}
export interface PSTNBlacklistInterface {
  addPstnBlackListItem: (request:AddPstnBlackListItemRequest) => Promise<AddPstnBlackListItemResponse>
  setPstnBlackListItem: (request:SetPstnBlackListItemRequest) => Promise<SetPstnBlackListItemResponse>
  delPstnBlackListItem: (request:DelPstnBlackListItemRequest) => Promise<DelPstnBlackListItemResponse>
  getPstnBlackList: (request:GetPstnBlackListRequest) => Promise<GetPstnBlackListResponse>
}

export interface AddSipWhiteListItemRequest {
  /**
   *The network address in format A.B.C.D/L or A.B.C.D/a.b.c.d (example 192.168.1.5/16)
  */
  sipWhitelistNetwork:string
}
export interface AddSipWhiteListItemResponse {
  /**
   *1
  */
  result:number
  /**
   *The SIP white list item ID
  */
  sipWhitelistId:number
}
export interface DelSipWhiteListItemRequest {
  /**
   *The SIP white list item ID to delete
  */
  sipWhitelistId:number
}
export interface DelSipWhiteListItemResponse {
  /**
   *1
  */
  result:number
}
export interface SetSipWhiteListItemRequest {
  /**
   *The SIP white list item ID
  */
  sipWhitelistId:number
  /**
   *The new network address in format A.B.C.D/L or A.B.C.D/a.b.c.d (example 192.168.1.5/16)
  */
  sipWhitelistNetwork:string
}
export interface SetSipWhiteListItemResponse {
  /**
   *1
  */
  result:number
}
export interface GetSipWhiteListRequest {
  /**
   *The SIP white list item ID to filter
  */
  sipWhitelistId?:number
  /**
   *The max returning record count
  */
  count?:number
  /**
   *The first <b>N</b> records will be skipped in the output
  */
  offset?:number
}
export interface GetSipWhiteListResponse {
  result:SipWhiteListInfo[]
  /**
   *The total found networks count
  */
  totalCount:number
  /**
   *The returned networks count
  */
  count:number
}
export interface SIPWhiteListInterface {
  addSipWhiteListItem: (request:AddSipWhiteListItemRequest) => Promise<AddSipWhiteListItemResponse>
  delSipWhiteListItem: (request:DelSipWhiteListItemRequest) => Promise<DelSipWhiteListItemResponse>
  setSipWhiteListItem: (request:SetSipWhiteListItemRequest) => Promise<SetSipWhiteListItemResponse>
  getSipWhiteList: (request:GetSipWhiteListRequest) => Promise<GetSipWhiteListResponse>
}

export interface CreateSipRegistrationRequest {
  /**
   *The user name
  */
  sipUsername:string
  /**
   *The SIP proxy
  */
  proxy:string
  /**
   *The SIP authentications user
  */
  authUser?:string
  /**
   *The outbound SIP proxy
  */
  outboundProxy?:string
  /**
   *The SIP password
  */
  password?:string
  /**
   *SIP registration is persistent. Set false to activate it only on the user login
  */
  isPersistent?:boolean
  /**
   *The application ID which a new SIP registration will be bound to. Can be used instead of the <b>application_name</b> parameter
  */
  applicationId?:number
  /**
   *The application name which a new SIP registration will be bound to. Can be used instead of the <b>application_id</b> parameter
  */
  applicationName?:string
  /**
   *The rule ID which a new SIP registration will be bound to. Can be used instead of the <b>rule_name</b> parameter
  */
  ruleId?:number
  /**
   *The rule name which a new SIP registration will be bound to. Can be used instead of the <b>rule_id</b> parameter
  */
  ruleName?:string
  /**
   *The user ID which a new SIP registration will be bound to. Can be used instead of the <b>user_name</b> parameter
  */
  userId?:number
  /**
   *The user name which a new SIP registration will be bound to. Can be used instead of the <b>user_id</b> parameter
  */
  userName?:string
}
export interface CreateSipRegistrationResponse {
  /**
   *1
  */
  result:number
  /**
   *The sip registration id
  */
  sipRegistrationId:number
  /**
   *The current account state
  */
  accountInfo:ShortAccountInfo
}
export interface UpdateSipRegistrationRequest {
  /**
   *The registration ID
  */
  sipRegistrationId:number
  /**
   *The user name
  */
  sipUsername?:string
  /**
   *The SIP proxy
  */
  proxy?:string
  /**
   *The SIP authentications user
  */
  authUser?:string
  /**
   *The outbound SIP proxy
  */
  outboundProxy?:string
  /**
   *The SIP password
  */
  password?:string
  /**
   *The application ID which the SIP registration will be bound to. Can be used instead of the <b>application_name</b> parameter
  */
  applicationId?:number
  /**
   *The application name which the SIP registration will be bound to. Can be used instead of the <b>application_id</b> parameter
  */
  applicationName?:string
  /**
   *The rule ID which the SIP registration will be bound to. Can be used instead of the <b>rule_name</b> parameter
  */
  ruleId?:number
  /**
   *The rule name which the SIP registration will be bound to. Can be used instead of the <b>rule_id</b> parameter
  */
  ruleName?:string
  /**
   *The user ID which the SIP registration will be bound to. Can be used instead of the <b>user_name</b> parameter
  */
  userId?:number
  /**
   *The user name which the SIP registration will be bound to. Can be used instead of the <b>user_id</b> parameter
  */
  userName?:string
}
export interface UpdateSipRegistrationResponse {
  /**
   *1
  */
  result:number
}
export interface BindSipRegistrationRequest {
  /**
   *The registration ID
  */
  sipRegistrationId?:number
  /**
   *The application ID which the SIP registration will be bound to. Can be used instead of the <b>application_name</b> parameter
  */
  applicationId?:number
  /**
   *The application name which the SIP registration will be bound to. Can be used instead of the <b>application_id</b> parameter
  */
  applicationName?:string
  /**
   *The rule ID which the SIP registration will be bound to. Can be used instead of the <b>rule_name</b> parameter
  */
  ruleId?:number
  /**
   *The rule name which the SIP registration will be bound to. Can be used instead of the <b>rule_id</b> parameter
  */
  ruleName?:string
  /**
   *The user ID which the SIP registration will be bound to. Can be used instead of the <b>user_name</b> parameter
  */
  userId?:number
  /**
   *The user name which the SIP registration will be bound to. Can be used instead of the <b>user_id</b> parameter
  */
  userName?:string
  /**
   *Bind or unbind (set true or false respectively)
  */
  bind?:boolean
}
export interface BindSipRegistrationResponse {
  /**
   *1
  */
  result:number
}
export interface DeleteSipRegistrationRequest {
  /**
   *The registration ID
  */
  sipRegistrationId:number
}
export interface DeleteSipRegistrationResponse {
  /**
   *1
  */
  result:number
}
export interface GetSipRegistrationsRequest {
  /**
   *The rule ID list separated by the ';' symbol to filter. Can be used instead of <b>rule_name</b>
  */
  ruleId:'any'|number|number[]
  /**
   *The rule name list separated by the ';' symbol to filter. Can be used instead of <b>rule_id</b>
  */
  ruleName:string|string[]
  /**
   *The user ID list separated by the ';' symbol to filter. Can be used instead of <b>user_name</b>
  */
  userId:'any'|number|number[]
  /**
   *The user name list separated by the ';' symbol to filter. Can be used instead of <b>user_id</b>
  */
  userName:string|string[]
  /**
   *The SIP registration ID
  */
  sipRegistrationId?:number
  /**
   *The SIP user name to filter
  */
  sipUsername?:string
  /**
   *Set true to show the frozen SIP registrations only
  */
  deactivated?:boolean
  /**
   *Set false to show the unsuccessful SIP registrations only
  */
  successful?:boolean
  /**
   *The persistent flag to filter
  */
  isPersistent?:boolean
  /**
   *The application ID list separated by the ';' symbol to filter. Can be used instead of <b>application_name</b>
  */
  applicationId?:'any'|number|number[]
  /**
   *The application name list separated by the ';' symbol to filter. Can be used instead of <b>application_id</b>
  */
  applicationName?:string|string[]
  /**
   *Is a SIP registration bound to an application
  */
  isBoundToApplication?:boolean
  /**
   *The list of proxy servers to use, divided by the ';' symbol
  */
  proxy?:string|string[]
  /**
   *SIP registration is still in progress
  */
  inProgress?:boolean
  /**
   *The list of SIP response codes. The __code1:code2__ means a range from __code1__ to __code2__ including; the __code1;code2__ meanse either __code1__ or __code2__. You can combine ranges, e.g., __code1;code2:code3__
  */
  statusCode?:string
  /**
   *The max returning record count
  */
  count?:number
  /**
   *The first <b>N</b> records will be skipped in the output
  */
  offset?:number
}
export interface GetSipRegistrationsResponse {
  /**
   *Active SIP registrations
  */
  result:SIPRegistration[]
  /**
   *Count rows
  */
  count:number
}
export interface SIPRegistrationInterface {
  createSipRegistration: (request:CreateSipRegistrationRequest) => Promise<CreateSipRegistrationResponse>
  updateSipRegistration: (request:UpdateSipRegistrationRequest) => Promise<UpdateSipRegistrationResponse>
  bindSipRegistration: (request:BindSipRegistrationRequest) => Promise<BindSipRegistrationResponse>
  deleteSipRegistration: (request:DeleteSipRegistrationRequest) => Promise<DeleteSipRegistrationResponse>
  getSipRegistrations: (request:GetSipRegistrationsRequest) => Promise<GetSipRegistrationsResponse>
}

export interface AttachPhoneNumberRequest {
  /**
   *The phone count to attach
  */
  phoneCount:number
  /**
   *The phone number that can be used instead of <b>phone_count</b>. See the [GetNewPhoneNumbers] method
  */
  phoneNumber:string|string[]
  /**
   *The country code
  */
  countryCode:string
  /**
   *The phone category name. See the [GetPhoneNumberCategories] method
  */
  phoneCategoryName:string
  /**
   *The phone region ID. See the [GetPhoneNumberRegions] method
  */
  phoneRegionId:number
  /**
   *The country state. See the [GetPhoneNumberCategories] and [GetPhoneNumberCountryStates] methods
  */
  countryState?:string
  /**
   *The phone regulation address ID
  */
  regulationAddressId?:number
  forceVerification?:boolean
}
export interface AttachPhoneNumberResponse {
  /**
   *1
  */
  result:number
  /**
   *The attached phone numbers
  */
  phoneNumbers:NewAttachedPhoneInfo[]
}
export interface BindPhoneNumberToApplicationRequest {
  /**
   *The phone ID list separated by the ';' symbol. Use the 'all' value to select all phone ids
  */
  phoneId:'any'|number|number[]
  /**
   *The phone number list separated by the ';' symbol that can be used instead of <b>phone_id</b>
  */
  phoneNumber:string|string[]
  /**
   *The application ID
  */
  applicationId:number
  /**
   *The application name that can be used instead of <b>application_id</b>
  */
  applicationName:string
  /**
   *The rule ID
  */
  ruleId?:number
  /**
   *The rule name that can be used instead of <b>rule_id</b>
  */
  ruleName?:string
  /**
   *Bind or unbind (set true or false respectively)
  */
  bind?:boolean
}
export interface BindPhoneNumberToApplicationResponse {
  /**
   *1
  */
  result:number
}
export interface DeactivatePhoneNumberRequest {
  /**
   *The phone ID list separated by the ';' symbol. Use the 'all' value to select all phone ids
  */
  phoneId:'any'|number|number[]
  /**
   *The phone number list separated by the ';' symbol that can be used instead of <b>phone_id</b>
  */
  phoneNumber:string|string[]
}
export interface DeactivatePhoneNumberResponse {
  /**
   *1
  */
  result:number
}
export interface SetPhoneNumberInfoRequest {
  /**
   *The phone ID list separated by the ';' symbol. Use the 'all' value to select all phone ids
  */
  phoneId:'any'|number|number[]
  /**
   *The phone number list separated by the ';' symbol that can be used instead of <b>phone_id</b>
  */
  phoneNumber:string|string[]
  autoCharge:boolean
  /**
   *If set, the callback of an inbound SMS will be sent to this url, otherwise, it will be sent to the general account URL
  */
  incomingSmsCallbackUrl?:string
}
export interface SetPhoneNumberInfoResponse {
  /**
   *1
  */
  result:number
}
export interface GetPhoneNumbersRequest {
  /**
   *The particular phone ID to filter
  */
  phoneId?:'any'|number|number[]
  /**
   *The phone number list separated by the ';' symbol that can be used instead of <b>phone_id</b>
  */
  phoneNumber?:string|string[]
  /**
   *The application ID
  */
  applicationId?:number
  /**
   *The application name that can be used instead of <b>application_id</b>
  */
  applicationName?:string
  /**
   *Is a phone bound to an application
  */
  isBoundToApplication?:boolean
  /**
   *The phone number start to filter
  */
  phoneTemplate?:string
  /**
   *The country code list separated by the ';' symbol
  */
  countryCode?:string|string[]
  /**
   *The phone category name. See the [GetPhoneNumberCategories] method
  */
  phoneCategoryName?:string
  /**
   *The flag of the canceled (deleted) subscription to filter
  */
  canceled?:boolean
  /**
   *The flag of the deactivated (frozen) subscription to filter
  */
  deactivated?:boolean
  /**
   *The auto_charge flag to filter
  */
  autoCharge?:boolean
  /**
   *The UTC 'from' date filter in format: YYYY-MM-DD
  */
  fromPhoneNextRenewal?:Date
  /**
   *The UTC 'to' date filter in format: YYYY-MM-DD
  */
  toPhoneNextRenewal?:Date
  /**
   *The UTC 'from' date filter in 24-h format: YYYY-MM-DD HH:mm:ss
  */
  fromPhonePurchaseDate?:Date
  /**
   *The UTC 'to' date filter in 24-h format: YYYY-MM-DD HH:mm:ss
  */
  toPhonePurchaseDate?:Date
  /**
   *The child account ID list separated by the ';' symbol. Use the 'all' value to select all child accounts
  */
  childAccountId?:'any'|number|number[]
  /**
   *Set true to get the children phones only
  */
  childrenPhonesOnly?:boolean
  /**
   *The required account verification name to filter
  */
  verificationName?:string
  /**
   *The account verification status list separated by the ';' symbol. The following values are possible: REQUIRED, IN_PROGRESS, VERIFIED
  */
  verificationStatus?:string|string[]
  /**
   *Unverified phone hold until the date (from ...) in format: YYYY-MM-DD
  */
  fromUnverifiedHoldUntil?:Date
  /**
   *Unverified phone hold until the date (... to) in format: YYYY-MM-DD
  */
  toUnverifiedHoldUntil?:Date
  /**
   *Unverified account can use the phone
  */
  canBeUsed?:boolean
  /**
   *The following values are available: 'phone_number' (ascent order), 'phone_price' (ascent order), 'phone_country_code' (ascent order), 'deactivated' (deactivated first, active last), 'purchase_date' (descent order), 'phone_next_renewal' (ascent order), 'verification_status', 'unverified_hold_until' (ascent order), 'verification_name'
  */
  orderBy?:string
  /**
   *Flag allows you to display only the numbers of the sandbox, real numbers, or all numbers. The following values are possible: 'all', 'true', 'false'
  */
  sandbox?:string
  /**
   *The max returning record count
  */
  count?:number
  /**
   *The first <b>N</b> records will be skipped in the output
  */
  offset?:number
  smsSupported?:boolean
  /**
   *The region names list separated by the ';' symbol
  */
  phoneRegionName?:string|string[]
  /**
   *The rule ID list separated by the ';' symbol
  */
  ruleId?:'any'|number|number[]
  /**
   *The rule names list separated by the ';' symbol. Can be used only if __application_id__ or __application_name__ is specified
  */
  ruleName?:string|string[]
  /**
   *Number is bound to some rule
  */
  isBoundToRule?:boolean
}
export interface GetPhoneNumbersResponse {
  /**
   *Phone numbers info
  */
  result:AttachedPhoneInfo[]
  /**
   *The total found phone count
  */
  totalCount:number
  /**
   *The returned phone count
  */
  count:number
}
export interface GetNewPhoneNumbersRequest {
  /**
   *The country code
  */
  countryCode:string
  /**
   *The phone category name. See the [GetPhoneNumberCategories] function
  */
  phoneCategoryName:string
  /**
   *The phone region ID. See the [GetPhoneNumberRegions] method
  */
  phoneRegionId:number
  /**
   *The country state. See the GetPhoneNumberCategories and GetPhoneNumberCountryStates functions
  */
  countryState?:string
  /**
   *The max returning record count
  */
  count?:number
  /**
   *The first <b>N</b> records will be skipped in the output
  */
  offset?:number
}
export interface GetNewPhoneNumbersResponse {
  result:NewPhoneInfo[]
  /**
   *The total found phone count
  */
  totalCount:number
  /**
   *The returned phone count
  */
  count:number
}
export interface GetPhoneNumberCategoriesRequest {
  /**
   *Country code list separated by the ';' symbol
  */
  countryCode?:string|string[]
  /**
   *Flag allows you to display phone number categories only of the sandbox, real or all .The following values are possible: 'all', 'true', 'false'
  */
  sandbox?:string
  /**
   *The 2-letter locale code. Supported values are EN, RU
  */
  locale?:string
}
export interface GetPhoneNumberCategoriesResponse {
  result:PhoneNumberCountryInfo[]
}
export interface GetPhoneNumberCountryStatesRequest {
  /**
   *The country code
  */
  countryCode:string
  /**
   *The phone category name. See the GetPhoneNumberCategories function
  */
  phoneCategoryName:string
  /**
   *The country state code (example: AL, CA, ... )
  */
  countryState?:string
}
export interface GetPhoneNumberCountryStatesResponse {
  result:PhoneNumberCountryStateInfo[]
}
export interface GetPhoneNumberRegionsRequest {
  /**
   *The country code
  */
  countryCode:string
  /**
   *The phone category name. See the [GetPhoneNumberCategories] method
  */
  phoneCategoryName:string
  /**
   *The country state code (example: AL, CA, ... )
  */
  countryState?:string
  /**
   *Set to 'false' to show all the regions (with and without phone numbers in stock)
  */
  omitEmpty?:boolean
  /**
   *The phone region ID to filter
  */
  phoneRegionId?:number
  /**
   *The phone region name to filter
  */
  phoneRegionName?:string
  /**
   *The region phone prefix to filter
  */
  phoneRegionCode?:string
  /**
   *The 2-letter locale code. Supported values are EN, RU
  */
  locale?:string
}
export interface GetPhoneNumberRegionsResponse {
  result:PhoneNumberCountryRegionInfo[]
}
export interface GetActualPhoneNumberRegionRequest {
  /**
   *The country code
  */
  countryCode:string
  /**
   *The phone category name. See the [GetPhoneNumberCategories] method
  */
  phoneCategoryName:string
  /**
   *The phone region ID to filter
  */
  phoneRegionId:number
  /**
   *The country state code (example: AL, CA, ... )
  */
  countryState?:string
  /**
   *The 2-letter locale code. Supported values are EN, RU
  */
  locale?:string
}
export interface GetActualPhoneNumberRegionResponse {
  result:PhoneNumberCountryRegionInfo
}
export interface GetAccountPhoneNumberCountriesRequest {
  /**
   *The application ID list separated by the ';' symbol to filter
  */
  applicationId?:'any'|number|number[]
}
export interface GetAccountPhoneNumberCountriesResponse {
  /**
   *Array of country codes
  */
  result:string[]
}
export interface PhoneNumbersInterface {
  attachPhoneNumber: (request:AttachPhoneNumberRequest) => Promise<AttachPhoneNumberResponse>
  bindPhoneNumberToApplication: (request:BindPhoneNumberToApplicationRequest) => Promise<BindPhoneNumberToApplicationResponse>
  deactivatePhoneNumber: (request:DeactivatePhoneNumberRequest) => Promise<DeactivatePhoneNumberResponse>
  setPhoneNumberInfo: (request:SetPhoneNumberInfoRequest) => Promise<SetPhoneNumberInfoResponse>
  getPhoneNumbers: (request:GetPhoneNumbersRequest) => Promise<GetPhoneNumbersResponse>
  getNewPhoneNumbers: (request:GetNewPhoneNumbersRequest) => Promise<GetNewPhoneNumbersResponse>
  getPhoneNumberCategories: (request:GetPhoneNumberCategoriesRequest) => Promise<GetPhoneNumberCategoriesResponse>
  getPhoneNumberCountryStates: (request:GetPhoneNumberCountryStatesRequest) => Promise<GetPhoneNumberCountryStatesResponse>
  getPhoneNumberRegions: (request:GetPhoneNumberRegionsRequest) => Promise<GetPhoneNumberRegionsResponse>
  getActualPhoneNumberRegion: (request:GetActualPhoneNumberRegionRequest) => Promise<GetActualPhoneNumberRegionResponse>
  getAccountPhoneNumberCountries: (request:GetAccountPhoneNumberCountriesRequest) => Promise<GetAccountPhoneNumberCountriesResponse>
}

export interface AddCallerIDRequest {
  /**
   *The callerID number in E.164 format
  */
  calleridNumber:string
}
export interface AddCallerIDResponse {
  /**
   *1
  */
  result:number
  /**
   *The id of the callerID object
  */
  calleridId:number
}
export interface ActivateCallerIDRequest {
  /**
   *The id of the callerID object
  */
  calleridId:number
  /**
   *The callerID number that can be used instead of <b>callerid_id</b>
  */
  calleridNumber:string
  /**
   *The verification code, see the VerifyCallerID function
  */
  verificationCode:string
}
export interface ActivateCallerIDResponse {
  /**
   *1
  */
  result:number
}
export interface DelCallerIDRequest {
  /**
   *The id of the callerID object
  */
  calleridId:number
  /**
   *The callerID number that can be used instead of <b>callerid_id</b>
  */
  calleridNumber:string
}
export interface DelCallerIDResponse {
  /**
   *1
  */
  result:number
}
export interface GetCallerIDsRequest {
  /**
   *The id of the callerID object to filter
  */
  calleridId?:number
  /**
   *The phone number to filter
  */
  calleridNumber?:string
  /**
   *The active flag to filter
  */
  active?:boolean
  /**
   *The following values are available: 'caller_number' (ascent order), 'verified_until' (ascent order)
  */
  orderBy?:string
  /**
   *The max returning record count
  */
  count?:number
  /**
   *The first <b>N</b> records will be skipped in the output
  */
  offset?:number
}
export interface GetCallerIDsResponse {
  result:CallerIDInfo[]
  /**
   *The total found record count
  */
  totalCount:number
  /**
   *The returned record count
  */
  count:number
}
export interface VerifyCallerIDRequest {
  /**
   *The id of the callerID object
  */
  calleridId:number
  /**
   *The callerID number that can be used instead of <b>callerid_id</b>
  */
  calleridNumber:string
}
export interface VerifyCallerIDResponse {
  /**
   *1
  */
  result:number
}
export interface CallerIDsInterface {
  addCallerID: (request:AddCallerIDRequest) => Promise<AddCallerIDResponse>
  activateCallerID: (request:ActivateCallerIDRequest) => Promise<ActivateCallerIDResponse>
  delCallerID: (request:DelCallerIDRequest) => Promise<DelCallerIDResponse>
  getCallerIDs: (request:GetCallerIDsRequest) => Promise<GetCallerIDsResponse>
  verifyCallerID: (request:VerifyCallerIDRequest) => Promise<VerifyCallerIDResponse>
}

export interface AddOutboundTestPhoneNumberRequest {
  /**
   *The personal phone number in the E.164 format
  */
  phoneNumber:string
}
export interface AddOutboundTestPhoneNumberResponse {
  /**
   *1
  */
  result:number
}
export interface VerifyOutboundTestPhoneNumberRequest {
  
}
export interface VerifyOutboundTestPhoneNumberResponse {
  /**
   *The number of attempts left for the day. The number is reset every day at 00:00 UTC
  */
  dailyAttemptsLeft:number
}
export interface ActivateOutboundTestPhoneNumberRequest {
  /**
   *The verification code, see the [VerifyOutboundTestPhoneNumber] function
  */
  verificationCode:string
}
export interface ActivateOutboundTestPhoneNumberResponse {
  /**
   *1
  */
  result:number
}
export interface DelOutboundTestPhoneNumberRequest {
  
}
export interface DelOutboundTestPhoneNumberResponse {
  /**
   *1
  */
  result:number
}
export interface GetOutboundTestPhoneNumbersRequest {
  
}
export interface GetOutboundTestPhoneNumbersResponse {
  result:OutboundTestPhonenumberInfo[]
}
export interface OutboundTestNumbersInterface {
  addOutboundTestPhoneNumber: (request:AddOutboundTestPhoneNumberRequest) => Promise<AddOutboundTestPhoneNumberResponse>
  verifyOutboundTestPhoneNumber: (request:VerifyOutboundTestPhoneNumberRequest) => Promise<VerifyOutboundTestPhoneNumberResponse>
  activateOutboundTestPhoneNumber: (request:ActivateOutboundTestPhoneNumberRequest) => Promise<ActivateOutboundTestPhoneNumberResponse>
  delOutboundTestPhoneNumber: (request:DelOutboundTestPhoneNumberRequest) => Promise<DelOutboundTestPhoneNumberResponse>
  getOutboundTestPhoneNumbers: (request:GetOutboundTestPhoneNumbersRequest) => Promise<GetOutboundTestPhoneNumbersResponse>
}

export interface AddQueueRequest {
  /**
   *The application ID
  */
  applicationId:number
  /**
   *The application name that can be used instead of <b>application_id</b>
  */
  applicationName:string
  /**
   *The queue name. The length must be less than 100
  */
  acdQueueName:string
  /**
   *The integer queue priority. The highest priority is 0
  */
  acdQueuePriority?:number
  /**
   *Set false to disable the auto binding of operators to a queue by skills comparing
  */
  autoBinding?:boolean
  /**
   *The value in the range of [0.5 ... 1.0]. The value 1.0 means the service probability 100% in challenge with a lower priority queue
  */
  serviceProbability?:number
  /**
   *The max queue size
  */
  maxQueueSize?:number
  /**
   *The max predicted waiting time in minutes. The client is rejected if the predicted waiting time is greater than the max predicted waiting time
  */
  maxWaitingTime?:number
  /**
   *The average service time in seconds. Specify the parameter to correct or initialize the waiting time prediction
  */
  averageServiceTime?:number
}
export interface AddQueueResponse {
  /**
   *1
  */
  result:number
  /**
   *The ACD queue ID
  */
  acdQueueId:number
}
export interface BindUserToQueueRequest {
  /**
   *Bind or unbind users
  */
  bind:boolean
  /**
   *The application ID
  */
  applicationId:number
  /**
   *The application name that can be used instead of <b>application_id</b>
  */
  applicationName:string
  /**
   *The user ID list separated by the ';' symbol. Use the 'all' value to specify all users bound to the application
  */
  userId:'any'|number|number[]
  /**
   *The user name list separated by the ';' symbol. <b>user_name</b> can be used instead of <b>user_id</b>
  */
  userName:string|string[]
  /**
   *The ACD queue ID list separated by the ';' symbol. Use the 'all' value to specify all queues bound to the application
  */
  acdQueueId:'any'|number|number[]
  /**
   *The queue name that can be used instead of <b>acd_queue_id</b>. The queue name list separated by the ';' symbol
  */
  acdQueueName:string|string[]
}
export interface BindUserToQueueResponse {
  /**
   *1
  */
  result:number
}
export interface DelQueueRequest {
  /**
   *The ACD queue ID list separated by the ';' symbol
  */
  acdQueueId:'any'|number|number[]
  /**
   *The ACD queue name that can be used instead of <b>acd_queue_id</b>. The ACD queue name list separated by the ';' symbol
  */
  acdQueueName:string|string[]
}
export interface DelQueueResponse {
  /**
   *1
  */
  result:number
}
export interface SetQueueInfoRequest {
  /**
   *The ACD queue ID
  */
  acdQueueId:number
  /**
   *The ACD queue name that can be used instead of <b>acd_queue_id</b>
  */
  acdQueueName:string
  /**
   *The new queue name. The length must be less than 100
  */
  newAcdQueueName?:string
  /**
   *The integer queue priority. The highest priority is 0
  */
  acdQueuePriority?:number
  /**
   *Set false to disable the auto binding of operators to a queue by skills comparing
  */
  autoBinding?:boolean
  /**
   *The value in the range of [0.5 ... 1.0]. The value 1.0 means the service probability 100% in challenge with a lower priority queue
  */
  serviceProbability?:number
  /**
   *The max queue size
  */
  maxQueueSize?:number
  /**
   *The max predicted waiting time in minutes. The client is rejected if the predicted waiting time is greater than the max predicted waiting time
  */
  maxWaitingTime?:number
  /**
   *The average service time in seconds. Specify the parameter to correct or initialize the waiting time prediction
  */
  averageServiceTime?:number
  /**
   *The new application ID
  */
  applicationId?:number
}
export interface SetQueueInfoResponse {
  /**
   *1
  */
  result:number
}
export interface GetQueuesRequest {
  /**
   *The ACD queue ID to filter
  */
  acdQueueId?:number
  /**
   *The ACD queue name part to filter
  */
  acdQueueName?:string
  /**
   *The application ID to filter
  */
  applicationId?:number
  /**
   *The skill ID to filter
  */
  skillId?:number
  /**
   *The excluded skill ID to filter
  */
  excludedSkillId?:number
  /**
   *Set true to get the bound skills
  */
  withSkills?:boolean
  /**
   *The skill to show in the 'skills' field output
  */
  showingSkillId?:number
  /**
   *The max returning record count
  */
  count?:number
  /**
   *The first <b>N</b> records will be skipped in the output
  */
  offset?:number
}
export interface GetQueuesResponse {
  result:QueueInfo[]
  /**
   *The total found queue count
  */
  totalCount:number
  /**
   *The returned queue count
  */
  count:number
}
export interface GetACDStateRequest {
  /**
   *The ACD queue ID list separated by the ';' symbol. Use the 'all' value to select all ACD queues
  */
  acdQueueId?:'any'|number|number[]
}
export interface GetACDStateResponse {
  result:ACDState
}
export interface GetACDOperatorStatisticsRequest {
  /**
   *Date and time of statistics interval begin. Time zone is UTC, format is 24-h 'YYYY-MM-DD HH:mm:ss'
  */
  fromDate:Date
  /**
   *The user ID list separated by the ';' symbol. Use the 'all' value to select all users
  */
  userId:'any'|number|number[]
  /**
   *Date and time of statistics interval begin. Time zone is UTC, format is 24-h 'YYYY-MM-DD HH:mm:ss'
  */
  toDate?:Date
  /**
   *The ACD queue ID list separated by the ';' symbol. Use the 'all' value to select all ACD queues
  */
  acdQueueId?:'any'|number|number[]
  /**
   *If set to <b>true</b>, key names in returned JSON will be abbreviated to reduce response byte size. The abbreviations are: 'SA' for 'SpeedOfAnswer', 'HT' for 'HandlingTime', 'TT' for 'TalkTime', 'ACW' for 'AfterCallWork', 'TDT' for 'TotalDialingTime', 'THT' for 'TotalHandlingTime', 'TTT' for 'TotalTalkTime', 'TACW' for 'TotalAfterCallWork', 'AC' for 'AnsweredCalls', 'UAC' for 'UnansweredCalls'
  */
  abbreviation?:boolean
  /**
   *List of item names abbreviations separated by the ';' symbol. Returned JSON will include keys only for the selected items. Special 'all' value defines all possible items, see [ACDOperatorStatisticsType] for a complete list. See 'abbreviation' description for complete abbreviation list
  */
  report?:string|string[]
  /**
   *Specifies how records are grouped by date and time. If set to 'day', the criteria is a day number. If set to 'hour_of_day', the criteria is a 60-minute interval within a day. If set to 'hour', the criteria is both day number and 60-minute interval within that day. If set to 'none', records are not grouped by date and time
  */
  aggregation?:string
  /**
   *If set to 'user', first-level array in the resulting JSON will group records by the user ID, and second-level array will group them by date according to the 'aggregation' parameter. If set to 'aggregation', first-level array in the resulting JSON will group records according to the 'aggregation' parameter, and second-level array will group them by the user ID
  */
  group?:string
}
export interface GetACDOperatorStatisticsResponse {
  /**
   *List of groups, grouped by user ID or date according to the 'group' method call argument
  */
  result:ACDOperatorAggregationGroup[]
}
export interface GetACDQueueStatisticsRequest {
  /**
   *Date and time of statistics interval begin. Time zone is UTC, format is 24-h 'YYYY-MM-DD HH:mm:ss'
  */
  fromDate:Date
  /**
   *Date and time of statistics interval begin. Time zone is UTC, format is 24-h 'YYYY-MM-DD HH:mm:ss'
  */
  toDate?:Date
  /**
   *If set to <b>true</b>, key names in returned JSON will be abbreviated to reduce response byte size. The abbreviations are: 'WT' for 'WaitingTime', 'SA' for 'SpeedOfAnswer', 'AT' is for 'AbandonmentTime', 'HT' is for 'HandlingTime', 'TT' is for 'TalkTime', 'ACW' is for 'AfterCallWork', 'QL' is for 'QueueLength', 'TC' is for 'TotalCalls', 'AC' is for 'AnsweredCalls', 'UAC' is for 'UnansweredCalls', 'RC' is for 'RejectedCalls', 'SL' is for 'ServiceLevel', 'TWT' is for 'TotalWaitingTime', 'TST' is for 'TotalSubmissionTime', 'TAT' is for 'TotalAbandonmentTime', 'THT' is for 'TotalHandlingTime', 'TTT' is for 'TotalTalkTime', 'TACW' is for 'TotalAfterCallWork'
  */
  abbreviation?:boolean
  /**
   *The ACD queue ID list separated by the ';' symbol. Use the 'all' value to select all ACD queues
  */
  acdQueueId?:'any'|number|number[]
  /**
   *List of item names abbreviations separated by the ';' symbol. Returned JSON will include keys only for the selected items. Special 'all' value defines all possible items, see [ACDQueueStatisticsType] for a complete list. See 'abbreviation' description for complete abbreviation list
  */
  report?:string|string[]
  /**
   *Specifies how records are grouped by date and time. If set to 'day', the criteria is a day number. If set to 'hour_of_day', the criteria is a 60-minute interval within a day. If set to 'hour', the criteria is both day number and 60-minute interval within that day. If set to 'none', records are not grouped by date and time
  */
  aggregation?:string
}
export interface GetACDQueueStatisticsResponse {
  /**
   *List of records grouped grouped by date according to the 'aggregation' method call argument
  */
  result:ACDQueueStatistics[]
}
export interface GetACDOperatorStatusStatisticsRequest {
  /**
   *Date and time of statistics interval begin. Time zone is UTC, format is 24-h 'YYYY-MM-DD HH:mm:ss'
  */
  fromDate:Date
  /**
   *The user ID list separated by the ';' symbol. Use the 'all' value to select all users
  */
  userId:string|string[]
  /**
   *Date and time of statistics interval begin. Time zone is UTC, format is 24-h 'YYYY-MM-DD HH:mm:ss'
  */
  toDate?:Date
  /**
   *The ACD status list separated by the ';' symbol. The following values are possible: OFFLINE, ONLINE, READY, BANNED, IN_SERVICE, AFTER_SERVICE, TIMEOUT, DND
  */
  acdStatus?:string|string[]
  /**
   *Specifies how records are grouped by date and time. If set to 'day', the criteria is a day number. If set to 'hour_of_day', the criteria is a 60-minute interval within a day. If set to 'hour', the criteria is both day number and 60-minute interval within that day. If set to 'none', records are not grouped by date and time
  */
  aggregation?:string
  /**
   *If set to 'user', first-level array in the resulting JSON will group records by the user ID, and second-level array will group them by date according to the 'aggregation' parameter. If set to 'aggregation', first-level array in the resulting JSON will group records according to the 'aggregation' parameter, and second-level array will group them by the user ID
  */
  group?:string
}
export interface GetACDOperatorStatusStatisticsResponse {
  /**
   *List of groups, grouped by user ID or date according to the 'group' method call argument
  */
  result:ACDOperatorStatusAggregationGroup[]
}
export interface QueuesInterface {
  addQueue: (request:AddQueueRequest) => Promise<AddQueueResponse>
  bindUserToQueue: (request:BindUserToQueueRequest) => Promise<BindUserToQueueResponse>
  delQueue: (request:DelQueueRequest) => Promise<DelQueueResponse>
  setQueueInfo: (request:SetQueueInfoRequest) => Promise<SetQueueInfoResponse>
  getQueues: (request:GetQueuesRequest) => Promise<GetQueuesResponse>
  getACDState: (request:GetACDStateRequest) => Promise<GetACDStateResponse>
  getACDOperatorStatistics: (request:GetACDOperatorStatisticsRequest) => Promise<GetACDOperatorStatisticsResponse>
  getACDQueueStatistics: (request:GetACDQueueStatisticsRequest) => Promise<GetACDQueueStatisticsResponse>
  getACDOperatorStatusStatistics: (request:GetACDOperatorStatusStatisticsRequest) => Promise<GetACDOperatorStatusStatisticsResponse>
}

export interface GetSmartQueueRealtimeMetricsRequest {
  /**
   *The application ID to search by
  */
  applicationId:number
  /**
   *The application name to search by. Can be used instead of the <b>application_id</b> parameter
  */
  applicationName:string
  /**
   *The report type. Possible values are calls_blocked_percentage, count_blocked_calls, average_abandonment_rate, count_abandonment_calls, service_level, occupancy_rate, sum_agents_online_time, sum_agents_ready_time, sum_agents_dialing_time, sum_agents_in_service_time, sum_agents_afterservice_time, sum_agents_dnd_time, sum_agents_banned_time, min_time_in_queue,max_time_in_queue, average_time_in_queue, min_answer_speed, max_answer_speed, average_answer_speed, min_handle_time, max_handle_time, average_handle_time, count_handled_calls, min_after_call_worktime, max_after_call_worktime, average_after_call_worktime
  */
  reportType:string|string[]
  /**
   *The user ID list with a maximum of 5 values separated by the ';' symbol. Use the 'all' value to select all users. Can operate as a filter for the **occupancy_rate**, **sum_agents_online_time**, **sum_agents_ready_time**, **sum_agents_dialing_time**, **sum_agents_in_service_time**, **sum_agents_afterservice_time**, **sum_agents_dnd_time**, **sum_agents_banned_time**, **min_handle_time**, **max_handle_time**, **average_handle_time**, **count_handled_calls**, **min_after_call_worktime**, **max_after_call_worktime**, **average_after_call_worktime** report types
  */
  userId?:'any'|number|number[]
  /**
   *The user name list separated by the ';' symbol. <b>user_name</b> can be used instead of <b>user_id</b>
  */
  userName?:string|string[]
  /**
   *The smart queue ID list with a maximum of 5 values separated by the ';' symbol. Can operate as filter for the **calls_blocked_percentage**, **count_blocked_calls**, **average_abandonment_rate**, **count_abandonment_calls**, **service_level**, **occupancy_rate**, **min_time_in_queue**, **max_time_in_queue**, **average_time_in_queue**, **min_answer_speed**, **max_answer_speed**, **average_answer_speed**, **min_handle_time**, **max_handle_time**, **average_handle_time**, **count_handled_calls**, **min_after_call_worktime**, **max_after_call_worktime**, **average_after_call_worktime** report types
  */
  sqQueueId?:'any'|number|number[]
  /**
   *The smart queue name list separated by the ';' symbol. Can be used instead of <b>sq_queue_id</b>
  */
  sqQueueName?:string|string[]
  /**
   *The from date in the selected timezone in 24-h format: YYYY-MM-DD HH:mm:ss. Default is the current time minus 30 minutes
  */
  fromDate?:Date
  /**
   *The to date in the selected timezone in 24-h format: YYYY-MM-DD HH:mm:ss. Default is the current time
  */
  toDate?:Date
  /**
   *The selected timezone or the 'auto' value (the account location)
  */
  timezone?:string
  /**
   *Interval format: YYYY-MM-DD HH:mm:ss. Default is 30 minutes
  */
  interval?:string
  /**
   *Group the result by **agent** or *queue*. The **agent** grouping is allowed for 1 queue and for the occupancy_rate, sum_agents_online_time, sum_agents_ready_time, sum_agents_dialing_time, sum_agents_in_service_time, sum_agents_afterservice_time, sum_agents_dnd_time, sum_agents_banned_time, min_handle_time, max_handle_time, average_handle_time, count_handled_calls, min_after_call_worktime, max_after_call_worktime, average_after_call_worktime report types. The **queue** grouping allowed for the calls_blocked_percentage, count_blocked_calls, average_abandonment_rate, count_abandonment_calls, service_level, occupancy_rate, min_time_in_queue, max_time_in_queue, average_time_in_queue, min_answer_speed, max_answer_speed, average_answer_speed, min_handle_time, max_handle_time, average_handle_time, count_handled_calls, min_after_call_worktime, max_after_call_worktime, average_after_call_worktime report types
  */
  groupBy?:string
  /**
   *Maximum waiting time. Required for the **service_level** report type
  */
  maxWaitingSec?:number
}
export interface GetSmartQueueRealtimeMetricsResponse {
  result:SmartQueueMetricsResult[]
  /**
   *The used timezone, e.g., 'Etc/GMT'
  */
  timezone:string
}
export interface GetSmartQueueDayHistoryRequest {
  /**
   *The application ID to search by
  */
  applicationId:number
  /**
   *The application name to search by. Can be used instead of the <b>application_id</b> parameter
  */
  applicationName:string
  /**
   *The smart queue ID list with a maximum of 5 values separated by the ';' symbol. Can operate as filter for the **calls_blocked_percentage**, **count_blocked_calls**, **average_abandonment_rate**, **count_abandonment_calls**, **service_level**, **occupancy_rate**, **min_time_in_queue**, **max_time_in_queue**, **average_time_in_queue**, **min_answer_speed**, **max_answer_speed**, **average_answer_speed**, **min_handle_time**, **max_handle_time**, **average_handle_time**, **count_handled_calls**, **min_after_call_worktime**, **max_after_call_worktime**, **average_after_call_worktime** report types
  */
  sqQueueId:'any'|number|number[]
  /**
   *The report type. Possible values are calls_blocked_percentage, count_blocked_calls, average_abandonment_rate, count_abandonment_calls, service_level, occupancy_rate, sum_agents_online_time, sum_agents_ready_time, sum_agents_dialing_time, sum_agents_in_service_time, sum_agents_afterservice_time, sum_agents_dnd_time, sum_agents_banned_time, min_time_in_queue,max_time_in_queue, average_time_in_queue, min_answer_speed, max_answer_speed, average_answer_speed, min_handle_time, max_handle_time, average_handle_time, count_handled_calls, min_after_call_worktime, max_after_call_worktime, average_after_call_worktime
  */
  reportType:string|string[]
  /**
   *The user ID list with a maximum of 5 values separated by the ';' symbol. Use the 'all' value to select all users. Can operate as a filter for the **occupancy_rate**, **sum_agents_online_time**, **sum_agents_ready_time**, **sum_agents_dialing_time**, **sum_agents_in_service_time**, **sum_agents_afterservice_time**, **sum_agents_dnd_time**, **sum_agents_banned_time**, **min_handle_time**, **max_handle_time**, **average_handle_time**, **count_handled_calls**, **min_after_call_worktime**, **max_after_call_worktime**, **average_after_call_worktime** report types
  */
  userId?:'any'|number|number[]
  /**
   *The user name list separated by the ';' symbol. <b>user_name</b> can be used instead of <b>user_id</b>
  */
  userName?:string|string[]
  /**
   *The smart queue name list separated by the ';' symbol. Can be used instead of <b>sq_queue_id</b>
  */
  sqQueueName?:string|string[]
  /**
   *The from date in the selected timezone in 24-h format: YYYY-MM-DD HH:mm:ss. Default is the current time minus 1 day
  */
  fromDate?:Date
  /**
   *The to date in the selected timezone in 24-h format: YYYY-MM-DD HH:mm:ss. Default is the current time
  */
  toDate?:Date
  /**
   *The selected timezone or the 'auto' value (the account location)
  */
  timezone?:string
  /**
   *Interval format: YYYY-MM-DD HH:mm:ss. Default is 1 day
  */
  interval?:string
  /**
   *Group the result by **agent** or *queue*. The **agent** grouping is allowed only for 1 queue and for the occupancy_rate, sum_agents_online_time, sum_agents_ready_time, sum_agents_dialing_time, sum_agents_in_service_time, sum_agents_afterservice_time, sum_agents_dnd_time, sum_agents_banned_time, min_handle_time, max_handle_time, average_handle_time, count_handled_calls, min_after_call_worktime, max_after_call_worktime, average_after_call_worktime report types. The **queue** grouping allowed for the calls_blocked_percentage, count_blocked_calls, average_abandonment_rate, count_abandonment_calls, service_level, occupancy_rate, min_time_in_queue, max_time_in_queue, average_time_in_queue, min_answer_speed, max_answer_speed, average_answer_speed, min_handle_time, max_handle_time, average_handle_time, count_handled_calls, min_after_call_worktime, max_after_call_worktime, average_after_call_worktime report types
  */
  groupBy?:string
  /**
   *Maximum waiting time. Required for the **service_level** report type
  */
  maxWaitingSec?:number
}
export interface GetSmartQueueDayHistoryResponse {
  result:SmartQueueMetricsResult[]
  /**
   *The used timezone, e.g., 'Etc/GMT'
  */
  timezone:string
}
export interface RequestSmartQueueHistoryRequest {
  /**
   *The application ID to search by
  */
  applicationId:number
  /**
   *The application name to search by. Can be used instead of the <b>application_id</b> parameter
  */
  applicationName:string
  /**
   *The smart queue ID list with a maximum of 5 values separated by the ';' symbol. Can operate as filter for the **calls_blocked_percentage**, **count_blocked_calls**, **average_abandonment_rate**, **count_abandonment_calls**, **service_level**, **occupancy_rate**, **min_time_in_queue**, **max_time_in_queue**, **average_time_in_queue**, **min_answer_speed**, **max_answer_speed**, **average_answer_speed**, **min_handle_time**, **max_handle_time**, **average_handle_time**, **count_handled_calls**, **min_after_call_worktime**, **max_after_call_worktime**, **average_after_call_worktime** report types
  */
  sqQueueId:'any'|number|number[]
  /**
   *The from date in the selected timezone in 24-h format: YYYY-MM-DD HH:mm:ss. Default is the current time minus 1 day
  */
  fromDate:Date
  /**
   *The to date in the selected timezone in 24-h format: YYYY-MM-DD HH:mm:ss. Default is the current time
  */
  toDate:Date
  /**
   *The report type. Possible values are calls_blocked_percentage, count_blocked_calls, average_abandonment_rate, count_abandonment_calls, service_level, occupancy_rate, sum_agents_online_time, sum_agents_ready_time, sum_agents_dialing_time, sum_agents_in_service_time, sum_agents_afterservice_time, sum_agents_dnd_time, sum_agents_banned_time, min_time_in_queue,max_time_in_queue, average_time_in_queue, min_answer_speed, max_answer_speed, average_answer_speed, min_handle_time, max_handle_time, average_handle_time, count_handled_calls, min_after_call_worktime, max_after_call_worktime, average_after_call_worktime
  */
  reportType:string|string[]
  /**
   *The user ID list with a maximum of 5 values separated by the ';' symbol. Use the 'all' value to select all users. Can operate as a filter for the **occupancy_rate**, **sum_agents_online_time**, **sum_agents_ready_time**, **sum_agents_dialing_time**, **sum_agents_in_service_time**, **sum_agents_afterservice_time**, **sum_agents_dnd_time**, **sum_agents_banned_time**, **min_handle_time**, **max_handle_time**, **average_handle_time**, **count_handled_calls**, **min_after_call_worktime**, **max_after_call_worktime**, **average_after_call_worktime** report types
  */
  userId?:'any'|number|number[]
  /**
   *The user name list separated by the ';' symbol. Can be used instead of <b>user_id</b>
  */
  userName?:string|string[]
  /**
   *The smart queue name list separated by the ';' symbol. Can be used instead of <b>sq_queue_id</b>
  */
  sqQueueName?:string|string[]
  /**
   *The selected timezone or the 'auto' value (the account location)
  */
  timezone?:string
  /**
   *Interval format: YYYY-MM-DD HH:mm:ss. Default is 1 day
  */
  interval?:string
  /**
   *Group the result by **agent** or *queue*. The **agent** grouping is allowed only for 1 queue and for the occupancy_rate, sum_agents_online_time, sum_agents_ready_time, sum_agents_dialing_time, sum_agents_in_service_time, sum_agents_afterservice_time, sum_agents_dnd_time, sum_agents_banned_time, min_handle_time, max_handle_time, average_handle_time, count_handled_calls, min_after_call_worktime, max_after_call_worktime, average_after_call_worktime report types. The **queue** grouping allowed for the calls_blocked_percentage, count_blocked_calls, average_abandonment_rate, count_abandonment_calls, service_level, occupancy_rate, min_time_in_queue, max_time_in_queue, average_time_in_queue, min_answer_speed, max_answer_speed, average_answer_speed, min_handle_time, max_handle_time, average_handle_time, count_handled_calls, min_after_call_worktime, max_after_call_worktime, average_after_call_worktime report types
  */
  groupBy?:string
  /**
   *Maximum waiting time. Required for the **service_level** report type
  */
  maxWaitingSec?:number
}
export interface RequestSmartQueueHistoryResponse {
  /**
   *1
  */
  result:number
  /**
   *History report ID
  */
  historyReportId:number
}
export interface GetSQStateRequest {
  /**
   *The application ID to search by
  */
  applicationId:number
  /**
   *The smart queue ID list separated by the ';' symbol. Use the 'all' value to select all smart queues
  */
  sqQueueId:'any'|number|number[]
  /**
   *The application name to search by. Can be used instead of the <b>application_id</b> parameter
  */
  applicationName?:string
  /**
   *The smart queue name list separated by the ';' symbol. Can be used instead of <b>sq_queue_id</b>
  */
  sqQueueName?:string|string[]
  /**
   *The selected timezone or the 'auto' value (the account location)
  */
  timezone?:string
}
export interface GetSQStateResponse {
  result:SmartQueueState[]
}
export interface SQ_SetAgentCustomStatusMappingRequest {
  /**
   *Status name
  */
  sqStatusName:string
  /**
   *Custom status name
  */
  customStatusName:string
  /**
   *Application ID
  */
  applicationId:number
}
export interface SQ_SetAgentCustomStatusMappingResponse {
  /**
   *1
  */
  result:number
}
export interface SQ_GetAgentCustomStatusMappingRequest {
  /**
   *Application ID
  */
  applicationId?:number
}
export interface SQ_GetAgentCustomStatusMappingResponse {
  /**
   *Status name
  */
  sqStatusName:string
  /**
   *Custom status name
  */
  customStatusName:string
}
export interface SQ_DeleteAgentCustomStatusMappingRequest {
  /**
   *Application ID
  */
  applicationId:number
  /**
   *Status name
  */
  sqStatusName?:string
}
export interface SQ_DeleteAgentCustomStatusMappingResponse {
  /**
   *1
  */
  result:number
}
export interface SQ_AddQueueRequest {
  /**
   *ID of the application to bind to
  */
  applicationId:number
  /**
   *Unique smart queue name within the application, up to 100 characters
  */
  sqQueueName:string
  /**
   *Agent selection strategy for calls
  */
  callAgentSelection:SQAgentSelectionStrategies[]
  /**
   *Strategy of prioritizing CALL-type requests for service
  */
  callTaskSelection:SQTaskSelectionStrategies[]
  /**
   *Name of the application to bind to. Can be used instead of <b>application_id</b>
  */
  applicationName?:string
  /**
   *Agent selection strategy for messages. Equals to the **call_agent_selection** value by default
  */
  imAgentSelection?:SQAgentSelectionStrategies[]
  /**
   *Strategy of prioritizing IM-type requests for service. Equals to the **call_task_selection** value by default
  */
  imTaskSelection?:SQTaskSelectionStrategies[]
  fallbackAgentSelection?:string
  /**
   *Comment, up to 200 characters
  */
  description?:string
  /**
   *Maximum time in minutes that a CALL-type request can remain in the queue without being assigned to an agent
  */
  callMaxWaitingTime?:number
  /**
   *Maximum time in minutes that an IM-type request can remain in the queue without being assigned to an agent
  */
  imMaxWaitingTime?:number
  /**
   *Maximum size of the queue with CALL-type requests
  */
  callMaxQueueSize?:number
  /**
   *Maximum size of the queue with IM-type requests
  */
  imMaxQueueSize?:number
}
export interface SQ_AddQueueResponse {
  /**
   *ID of the added queue
  */
  sqQueueId:number
}
export interface SQ_SetQueueInfoRequest {
  /**
   *ID of the application to search by
  */
  applicationId:number
  /**
   *ID of the smart queue to search for
  */
  sqQueueId:number
  /**
   *Name of the application to search by. Can be used instead of <b>application_id</b>
  */
  applicationName?:string
  /**
   *Name of the smart queue to search for. Can be used instead of <b>sq_queue_id</b>
  */
  sqQueueName?:string
  /**
   *New smart queue name within the application, up to 100 characters
  */
  newSqQueueName?:string
  /**
   *Agent selection strategy for calls
  */
  callAgentSelection?:SQAgentSelectionStrategies[]
  /**
   *Agent selection strategy for messages. Equals to the **call_agent_selection** value by default
  */
  imAgentSelection?:SQAgentSelectionStrategies[]
  /**
   *Strategy of prioritizing CALL-type requests for service
  */
  callTaskSelection?:SQTaskSelectionStrategies[]
  /**
   *Strategy of prioritizing IM-type requests for service. Equals to the **call_task_selection** value by default
  */
  imTaskSelection?:SQTaskSelectionStrategies[]
  fallbackAgentSelection?:string
  /**
   *Comment, up to 200 characters
  */
  description?:string
  /**
   *Maximum time in minutes that a CALL-type request can remain in the queue without being assigned to an agent
  */
  callMaxWaitingTime?:number
  /**
   *Maximum time in minutes that an IM-type request can remain in the queue without being assigned to an agent
  */
  imMaxWaitingTime?:number
  /**
   *Maximum size of the queue with CALL-type requests
  */
  callMaxQueueSize?:number
  /**
   *Maximum size of the queue with IM-type requests
  */
  imMaxQueueSize?:number
}
export interface SQ_SetQueueInfoResponse {
  /**
   *1
  */
  result:number
}
export interface SQ_DelQueueRequest {
  /**
   *ID of the application to search by
  */
  applicationId:number
  /**
   *List of smart queue IDs separated by the ';' symbol. Use 'all' to delete all the queues
  */
  sqQueueId:'any'|number|number[]
  /**
   *Name of the application to search by. Can be used instead of <b>application_id</b>
  */
  applicationName?:string
  /**
   *List of smart queue names separated by the ';' symbol. Can be used instead of <b>sq_queue_id</b>
  */
  sqQueueName?:string|string[]
}
export interface SQ_DelQueueResponse {
  /**
   *1
  */
  result:number
}
export interface SQ_GetQueuesRequest {
  /**
   *ID of the application to search by
  */
  applicationId:number
  /**
   *Name of the application to search by. Can be used instead of <b>application_id</b>
  */
  applicationName?:string
  /**
   *List of smart queue IDs separated by the ';' symbol
  */
  sqQueueId?:'any'|number|number[]
  /**
   *List of smart queue names separated by the ';' symbol. Can be used instead of <b>sq_queue_id</b>
  */
  sqQueueName?:string|string[]
  /**
   *Substring of the smart queue name to filter
  */
  sqQueueNameTemplate?:string
  /**
   *ID of the user that is bound to the queue
  */
  userId?:number
  /**
   *Name of the user that is bound to the queue. Can be used instead of <b>user_id</b>
  */
  userName?:string
  /**
   *ID of the user that is not bound to the queue
  */
  excludedUserId?:number
  /**
   *Name of the user that is not bound to the queue. Can be used instead of <b>excluded_user_id</b>
  */
  excludedUserName?:string
  /**
   *Number of items to show in the output
  */
  count?:number
  /**
   *Number of items to skip in the output
  */
  offset?:number
}
export interface SQ_GetQueuesResponse {
  /**
   *The found skill(s)
  */
  result:GetSQQueuesResult
}
export interface SQ_AddSkillRequest {
  /**
   *ID of the application to bind to
  */
  applicationId:number
  /**
   *Unique skill name within the application
  */
  sqSkillName:string
  /**
   *Name of the application to bind to. Can be used instead of <b>application_id</b>
  */
  applicationName?:string
  /**
   *Comment, up to 200 characters
  */
  description?:string
}
export interface SQ_AddSkillResponse {
  /**
   *1
  */
  result:number
}
export interface SQ_DelSkillRequest {
  /**
   *ID of the application to search by
  */
  applicationId:number
  /**
   *List of skill IDs separated by the ';' symbol. Use 'all' to delete all the skills
  */
  sqSkillId:'any'|number|number[]
  /**
   *Name of the application to search by. Can be used instead of <b>application_id</b>
  */
  applicationName?:string
  /**
   *List of skill names separated by the ';' symbol. Can be used instead of <b>sq_skill_id</b>
  */
  sqSkillName?:string|string[]
}
export interface SQ_DelSkillResponse {
  /**
   *1
  */
  result:number
}
export interface SQ_SetSkillInfoRequest {
  /**
   *ID of the application to search by
  */
  applicationId:number
  /**
   *ID of the skill
  */
  sqSkillId:number
  /**
   *Name of the application to search by. Can be used instead of <b>application_id</b>
  */
  applicationName?:string
  /**
   *Name of the skill. Can be used instead of <b>sq_skill_id</b>
  */
  sqSkillName?:string
  /**
   *New unique skill name within the application
  */
  newSqSkillName?:string
  /**
   *Comment, up to 200 characters
  */
  description?:string
}
export interface SQ_SetSkillInfoResponse {
  /**
   *1
  */
  result:number
}
export interface SQ_BindSkillRequest {
  /**
   *ID of the application to search by
  */
  applicationId:number
  /**
   *List of user IDs separated by the ';' symbol. Use 'all' to select all the users
  */
  userId:'any'|number|number[]
  /**
   *Skills to be bound to agents in the json array format. The array should contain objects with the <b>sq_skill_id</b>/<b>sq_skill_name</b> and <b>sq_skill_level</b> keys where skill levels range from 1 to 5
  */
  sqSkills:any
  /**
   *Name of the application to search by. Can be used instead of <b>application_id</b>
  */
  applicationName?:string
  /**
   *List of user names separated by the ';' symbol. Can be used instead of <b>user_id</b>
  */
  userName?:string|string[]
  /**
   *Binding mode
  */
  bindMode?:SQSkillBindingModes[]
}
export interface SQ_BindSkillResponse {
  /**
   *1
  */
  result:number
}
export interface SQ_UnbindSkillRequest {
  /**
   *ID of the application to search by
  */
  applicationId:number
  /**
   *List of user IDs separated by the ';' symbol. Use 'all' to select all the users
  */
  userId:'any'|number|number[]
  /**
   *List of skill IDs separated by the ';' symbol. Use 'all' to undbind all the skills
  */
  sqSkillId:'any'|number|number[]
  /**
   *Name of the application to search by. Can be used instead of <b>application_id</b>
  */
  applicationName?:string
  /**
   *List of user names separated by the ';' symbol. Can be used instead of <b>user_id</b>
  */
  userName?:string|string[]
  /**
   *List of skill names separated by the ';' symbol. Can be used instead of <b>sq_skill_id</b>
  */
  sqSkillName?:string|string[]
}
export interface SQ_UnbindSkillResponse {
  /**
   *1
  */
  result:number
}
export interface SQ_GetSkillsRequest {
  /**
   *ID of the application to search by
  */
  applicationId:number
  /**
   *Name of the application to search by. Can be used instead of <b>application_id</b>
  */
  applicationName?:string
  /**
   *List of user IDs separated by the ';' symbol
  */
  userId?:'any'|number|number[]
  /**
   *List of user names separated by the ';' symbol. Can be used instead of <b>user_id</b>
  */
  userName?:string|string[]
  /**
   *List of skill IDs separated by the ';' symbol
  */
  sqSkillId?:'any'|number|number[]
  /**
   *List of skill names separated by the ';' symbol. Can be used instead of <b>sq_skill_id</b>
  */
  sqSkillName?:string|string[]
  /**
   *Substring of the skill name to filter, case-insensitive
  */
  sqSkillNameTemplate?:string
  /**
   *ID of the user that is not bound to the skill
  */
  excludedUserId?:number
  /**
   *Name of the user that is not bound to the skill. Can be used instead of <b>excluded_user_id</b>
  */
  excludedUserName?:string
  /**
   *Number of items to show in the output
  */
  count?:number
  /**
   *Number of items to skip in the output
  */
  offset?:number
}
export interface SQ_GetSkillsResponse {
  /**
   *The found skill(s).
  */
  result:GetSQSkillsResult
}
export interface SQ_BindAgentRequest {
  /**
   *ID of the application to search by
  */
  applicationId:number
  /**
   *ID of the smart queue
  */
  sqQueueId:number
  /**
   *List of user IDs separated by the ';' symbol. Use 'all' to select all the users
  */
  userId:'any'|number|number[]
  /**
   *Name of the application to search by. Can be used instead of <b>application_id</b>
  */
  applicationName?:string
  /**
   *Name of the smart queue
  */
  sqQueueName?:string
  /**
   *List of user names separated by the ';' symbol. Can be used instead of <b>user_id</b>
  */
  userName?:string|string[]
  /**
   *Binding mode
  */
  bindMode?:SQAgentBindingModes[]
}
export interface SQ_BindAgentResponse {
  /**
   *1
  */
  result:number
}
export interface SQ_UnbindAgentRequest {
  /**
   *ID of the application to search by
  */
  applicationId:number
  /**
   *List of smart queue IDs separated by the ';' symbol. Use 'all' to select all the queues
  */
  sqQueueId:'any'|number|number[]
  /**
   *List of user IDs separated by the ';' symbol. Use 'all' to select all the users
  */
  userId:'any'|number|number[]
  /**
   *Name of the application to search by. Can be used instead of <b>application_id</b>
  */
  applicationName?:string
  /**
   *List of smart queue names separated by the ';' symbol. Can be used instead of <b>sq_queue_id</b>
  */
  sqQueueName?:string|string[]
  /**
   *List of user names separated by the ';' symbol. Can be used instead of <b>user_id</b>
  */
  userName?:string|string[]
}
export interface SQ_UnbindAgentResponse {
  /**
   *1
  */
  result:number
}
export interface SQ_GetAgentsRequest {
  /**
   *ID of the application to search by
  */
  applicationId:number
  /**
   *Name of the application to search by. Can be used instead of <b>application_id</b>
  */
  applicationName?:string
  /**
   *List of smart queue IDs separated by the ';' symbol. Use 'all' to select all the queues
  */
  sqQueueId?:'any'|number|number[]
  /**
   *List of smart queue names separated by the ';' symbol. Can be used instead of <b>sq_queue_id</b>
  */
  sqQueueName?:string|string[]
  /**
   *ID of the smart queue to exclude
  */
  excludedSqQueueId?:number
  /**
   *Name of the smart queue to exclude. Can be used instead of <b>excluded_sq_queue_id</b>
  */
  excludedSqQueueName?:string
  /**
   *Skills to filter in the json array format. The array should contain objects with the <b>sq_skill_id</b>/<b>sq_skill_name</b>, <b>min_sq_skill_level</b>, and <b>max_sq_skill_level</b> keys where skill levels range from 1 to 5
  */
  sqSkills?:any
  /**
   *List of user IDs separated by the ';' symbol
  */
  userId?:'any'|number|number[]
  /**
   *List of user names separated by the ';' symbol. Can be used instead of <b>user_id</b>
  */
  userName?:string|string[]
  /**
   *Substring of the user name to filter
  */
  userNameTemplate?:string
  /**
   *Filter statuses in the json array format. The array should contain objects with the <b>sq_status_type</b> and <b>sq_status_name</b> keys. Possible values for <b>sq_status_type</b> are 'CALL' and'IM'. Possible values for <b>sq_status_name</b> are 'OFFLINE', 'ONLINE', 'READY', 'IN_SERVICE', 'AFTER_SERVICE', 'DND'
  */
  sqStatuses?:any
  /**
   *Display agent skills
  */
  withSqSkills?:boolean
  /**
   *Display agent queues
  */
  withSqQueues?:boolean
  /**
   *Display agent current statuses
  */
  withSqStatuses?:boolean
  /**
   *Number of items to show in the output
  */
  count?:number
  /**
   *Number of items to skip in the output
  */
  offset?:number
}
export interface SQ_GetAgentsResponse {
  /**
   *The found agent(s)
  */
  result:GetSQAgentsResult
}
export interface SQ_SetAgentInfoRequest {
  /**
   *ID of the application to search by
  */
  applicationId:number
  /**
   *List of user IDs separated by the ';' symbol. Use 'all' to select all the users
  */
  userId:'any'|number|number[]
  /**
   *The agent can handle calls. When set to false, the agent is excluded from the CALL-request distribution
  */
  handleCalls:boolean
  /**
   *Name of the application to search by. Can be used instead of <b>application_id</b>
  */
  applicationName?:string
  /**
   *List of user names separated by the ';' symbol. Can be used instead of <b>user_id</b>
  */
  userName?:string|string[]
  /**
   *Maximum number of chats that the user processes simultaneously
  */
  maxSimultaneousConversations?:number
}
export interface SQ_SetAgentInfoResponse {
  /**
   *1
  */
  result:number
}
export interface SmartQueueInterface {
  getSmartQueueRealtimeMetrics: (request:GetSmartQueueRealtimeMetricsRequest) => Promise<GetSmartQueueRealtimeMetricsResponse>
  getSmartQueueDayHistory: (request:GetSmartQueueDayHistoryRequest) => Promise<GetSmartQueueDayHistoryResponse>
  requestSmartQueueHistory: (request:RequestSmartQueueHistoryRequest) => Promise<RequestSmartQueueHistoryResponse>
  getSQState: (request:GetSQStateRequest) => Promise<GetSQStateResponse>
  sQ_SetAgentCustomStatusMapping: (request:SQ_SetAgentCustomStatusMappingRequest) => Promise<SQ_SetAgentCustomStatusMappingResponse>
  sQ_GetAgentCustomStatusMapping: (request:SQ_GetAgentCustomStatusMappingRequest) => Promise<SQ_GetAgentCustomStatusMappingResponse>
  sQ_DeleteAgentCustomStatusMapping: (request:SQ_DeleteAgentCustomStatusMappingRequest) => Promise<SQ_DeleteAgentCustomStatusMappingResponse>
  sQ_AddQueue: (request:SQ_AddQueueRequest) => Promise<SQ_AddQueueResponse>
  sQ_SetQueueInfo: (request:SQ_SetQueueInfoRequest) => Promise<SQ_SetQueueInfoResponse>
  sQ_DelQueue: (request:SQ_DelQueueRequest) => Promise<SQ_DelQueueResponse>
  sQ_GetQueues: (request:SQ_GetQueuesRequest) => Promise<SQ_GetQueuesResponse>
  sQ_AddSkill: (request:SQ_AddSkillRequest) => Promise<SQ_AddSkillResponse>
  sQ_DelSkill: (request:SQ_DelSkillRequest) => Promise<SQ_DelSkillResponse>
  sQ_SetSkillInfo: (request:SQ_SetSkillInfoRequest) => Promise<SQ_SetSkillInfoResponse>
  sQ_BindSkill: (request:SQ_BindSkillRequest) => Promise<SQ_BindSkillResponse>
  sQ_UnbindSkill: (request:SQ_UnbindSkillRequest) => Promise<SQ_UnbindSkillResponse>
  sQ_GetSkills: (request:SQ_GetSkillsRequest) => Promise<SQ_GetSkillsResponse>
  sQ_BindAgent: (request:SQ_BindAgentRequest) => Promise<SQ_BindAgentResponse>
  sQ_UnbindAgent: (request:SQ_UnbindAgentRequest) => Promise<SQ_UnbindAgentResponse>
  sQ_GetAgents: (request:SQ_GetAgentsRequest) => Promise<SQ_GetAgentsResponse>
  sQ_SetAgentInfo: (request:SQ_SetAgentInfoRequest) => Promise<SQ_SetAgentInfoResponse>
}

export interface AddSkillRequest {
  /**
   *The ACD operator skill name. The length must be less than 512
  */
  skillName:string
}
export interface AddSkillResponse {
  /**
   *1
  */
  result:number
  /**
   *The skill ID
  */
  skillId:number
}
export interface DelSkillRequest {
  /**
   *The skill ID
  */
  skillId:number
  /**
   *The skill name that can be used instead of <b>skill_id</b>
  */
  skillName:string
}
export interface DelSkillResponse {
  /**
   *1
  */
  result:number
}
export interface SetSkillInfoRequest {
  /**
   *The skill ID
  */
  skillId:number
  /**
   *The skill name that can be used instead of <b>skill_id</b>
  */
  skillName:string
  /**
   *The new skill name. The length must be less than 512
  */
  newSkillName:string
}
export interface SetSkillInfoResponse {
  /**
   *1
  */
  result:number
}
export interface GetSkillsRequest {
  /**
   *The skill ID to filter
  */
  skillId?:number
  /**
   *The skill name part to filter
  */
  skillName?:string
  /**
   *The max returning record count
  */
  count?:number
  /**
   *The first <b>N</b> records will be skipped in the output
  */
  offset?:number
}
export interface GetSkillsResponse {
  result:SkillInfo[]
  /**
   *The total found skill count
  */
  totalCount:number
  /**
   *The returned skill count
  */
  count:number
}
export interface BindSkillRequest {
  /**
   *The skill ID list separated by the ';' symbol. Use the 'all' value to select all skills
  */
  skillId:'any'|number|number[]
  /**
   *The skill name list separated by the ';' symbol. Can be used instead of <b>skill_id</b>
  */
  skillName:string|string[]
  /**
   *The user ID list separated by the ';' symbol. Use the 'all' value to select all users
  */
  userId:'any'|number|number[]
  /**
   *The user name list separated by the ';' symbol. <b>user_name</b> can be used instead of <b>user_id</b>
  */
  userName:string|string[]
  /**
   *The ACD queue ID list separated by the ';' symbol. Use the 'all' value to select all ACD queues
  */
  acdQueueId:'any'|number|number[]
  /**
   *The ACD queue name that can be used instead of <b>acd_queue_id</b>. The ACD queue name list separated by the ';' symbol
  */
  acdQueueName:string|string[]
  /**
   *The application ID. It is required if the <b>user_name</b> is specified
  */
  applicationId?:number
  /**
   *The application name that can be used instead of <b>application_id</b>
  */
  applicationName?:string
  /**
   *Bind or unbind (set true or false respectively)
  */
  bind?:boolean
}
export interface BindSkillResponse {
  /**
   *1
  */
  result:number
}
export interface SkillsInterface {
  addSkill: (request:AddSkillRequest) => Promise<AddSkillResponse>
  delSkill: (request:DelSkillRequest) => Promise<DelSkillResponse>
  setSkillInfo: (request:SetSkillInfoRequest) => Promise<SetSkillInfoResponse>
  getSkills: (request:GetSkillsRequest) => Promise<GetSkillsResponse>
  bindSkill: (request:BindSkillRequest) => Promise<BindSkillResponse>
}


export interface RobokassaPaymentSystemInterface {
  
}


export interface CreditCardsInterface {
  
}


export interface AgreementsInterface {
  
}

export interface AddAdminUserRequest {
  /**
   *The admin user name. The length must be less than 50
  */
  newAdminUserName:string
  /**
   *The admin user display name. The length must be less than 256
  */
  adminUserDisplayName:string
  /**
   *The admin user password. The length must be at least 6 symbols
  */
  newAdminUserPassword:string
  /**
   *The admin user enable flag
  */
  adminUserActive?:boolean
  /**
   *The role(s) ID created via <a href='/docs/references/httpapi/adminroles'>Managing Admin Roles</a> methods. The attaching admin role ID list separated by the ';' symbol. Use the 'all' value to select all admin roles
  */
  adminRoleId?:string
  /**
   *The role(s) name(s) created via <a href='/docs/references/httpapi/adminroles'>Managing Admin Roles</a> methods. The attaching admin role name that can be used instead of <b>admin_role_id</b>
  */
  adminRoleName?:string|string[]
}
export interface AddAdminUserResponse {
  /**
   *1
  */
  result:number
  /**
   *The new admin user ID
  */
  adminUserId:number
  /**
   *The admin user API key
  */
  adminUserApiKey:string
}
export interface DelAdminUserRequest {
  /**
   *The admin user ID list separated by the ';' symbol. Use the 'all' value to select all admin users
  */
  requiredAdminUserId:'any'|number|number[]
  /**
   *The admin user name to delete, can be used instead of <b>required_admin_user_id</b>
  */
  requiredAdminUserName:string|string[]
}
export interface DelAdminUserResponse {
  /**
   *1
  */
  result:number
}
export interface SetAdminUserInfoRequest {
  /**
   *The admin user to edit
  */
  requiredAdminUserId:number
  /**
   *The admin user to edit, can be used instead of <b>required_admin_user_id</b>
  */
  requiredAdminUserName:string
  /**
   *The new admin user name. The length must be less than 50
  */
  newAdminUserName?:string
  /**
   *The new admin user display name. The length must be less than 256
  */
  adminUserDisplayName?:string
  /**
   *The new admin user password. The length must be at least 6 symbols
  */
  newAdminUserPassword?:string
  /**
   *The admin user enable flag
  */
  adminUserActive?:boolean
}
export interface SetAdminUserInfoResponse {
  /**
   *1
  */
  result:number
}
export interface GetAdminUsersRequest {
  /**
   *The admin user ID to filter
  */
  requiredAdminUserId?:number
  /**
   *The admin user name part to filter
  */
  requiredAdminUserName?:string
  /**
   *The admin user display name part to filter
  */
  adminUserDisplayName?:string
  /**
   *The admin user active flag to filter
  */
  adminUserActive?:boolean
  /**
   *Set true to get the attached admin roles
  */
  withRoles?:boolean
  /**
   *Set true to get the admin user permissions
  */
  withAccessEntries?:boolean
  /**
   *The max returning record count
  */
  count?:number
  /**
   *The first <b>N</b> records will be skipped in the output
  */
  offset?:number
}
export interface GetAdminUsersResponse {
  result:AdminUser[]
  /**
   *The total found admin user count
  */
  totalCount:number
  /**
   *The returned admin user count
  */
  count:number
}
export interface AttachAdminRoleRequest {
  /**
   *The admin user ID list separated by the ';' symbol. Use the 'all' value to select all admin users
  */
  requiredAdminUserId:'any'|number|number[]
  /**
   *The admin user name to bind, can be used instead of <b>required_admin_user_id</b>
  */
  requiredAdminUserName:string|string[]
  /**
   *The role(s) ID created via <a href='/docs/references/httpapi/adminroles'>Managing Admin Roles</a> methods. The attached admin role ID list separated by the ';' symbol. Use the 'all' value to select alladmin roles
  */
  adminRoleId:'any'|number|number[]
  /**
   *The role(s) name(s) created via <a href='/docs/references/httpapi/adminroles'>Managing Admin Roles</a> methods. The admin role name to attach, can be used instead of <b>admin_role_id</b>
  */
  adminRoleName:string|string[]
  /**
   *The merge mode. The following values are possible: add, del, set
  */
  mode?:string
}
export interface AttachAdminRoleResponse {
  /**
   *1
  */
  result:number
}
export interface AdminUsersInterface {
  addAdminUser: (request:AddAdminUserRequest) => Promise<AddAdminUserResponse>
  delAdminUser: (request:DelAdminUserRequest) => Promise<DelAdminUserResponse>
  setAdminUserInfo: (request:SetAdminUserInfoRequest) => Promise<SetAdminUserInfoResponse>
  getAdminUsers: (request:GetAdminUsersRequest) => Promise<GetAdminUsersResponse>
  attachAdminRole: (request:AttachAdminRoleRequest) => Promise<AttachAdminRoleResponse>
}

export interface AddAdminRoleRequest {
  /**
   *The admin role name. The length must be less than 50
  */
  adminRoleName:string
  /**
   *The admin role enable flag. If false the allowed and denied entries have no affect
  */
  adminRoleActive?:boolean
  /**
   *The admin role ID list separated by the ';' symbol. Use the 'all' value to select all admin roles. The list specifies the roles from which the new role automatically copies all permissions (allowed_entries and denied_entries)
  */
  likeAdminRoleId?:'any'|number|number[]
  /**
   *The admin role name that can be used instead of <b>like_admin_role_id</b>. The name specifies a role from which the new role automatically copies all permissions (allowed_entries and denied_entries)
  */
  likeAdminRoleName?:string|string[]
  /**
   *The list of allowed access entries separated by the ';' symbol (the API function names)
  */
  allowedEntries?:string|string[]
  /**
   *The list of denied access entries separated by the ';' symbol (the API function names)
  */
  deniedEntries?:string|string[]
}
export interface AddAdminRoleResponse {
  /**
   *1
  */
  result:number
  /**
   *The new admin role ID
  */
  adminRoleId:number
}
export interface DelAdminRoleRequest {
  /**
   *The admin role ID list separated by the ';' symbol. Use the 'all' value to select all admin roles
  */
  adminRoleId:'any'|number|number[]
  /**
   *The admin role name to delete, can be used instead of <b>admin_role_id</b>
  */
  adminRoleName:string|string[]
}
export interface DelAdminRoleResponse {
  /**
   *1
  */
  result:number
}
export interface SetAdminRoleInfoRequest {
  /**
   *The admin role to edit
  */
  adminRoleId:number
  /**
   *The admin role to edit, can be used instead of <b>admin_role_id</b>
  */
  adminRoleName:string
  /**
   *The new admin role name. The length must be less than 50
  */
  newAdminRoleName?:string
  /**
   *The admin role enable flag. If false the allowed and denied entries have no affect
  */
  adminRoleActive?:boolean
  /**
   *The modification mode of the permission lists (allowed_entries and denied_entries). The following values are possible: add, del, set
  */
  entryModificationMode?:string
  /**
   *The list of allowed access entry changes separated by the ';' symbol (the API function names)
  */
  allowedEntries?:string|string[]
  /**
   *The list of denied access entry changes separated by the ';' symbol (the API function names)
  */
  deniedEntries?:string|string[]
  /**
   *The admin role ID list separated by the ';' symbol. Use the 'all' value to select all admin roles. The list specifies the roles from which the allowed_entries and denied_entries will be merged
  */
  likeAdminRoleId?:'any'|number|number[]
  /**
   *The admin role name, can be used instead of <b>like_admin_role_id</b>. The name specifies a role from which the allowed_entries and denied_entries will be merged
  */
  likeAdminRoleName?:string|string[]
}
export interface SetAdminRoleInfoResponse {
  /**
   *1
  */
  result:number
}
export interface GetAdminRolesRequest {
  /**
   *The admin role ID to filter
  */
  adminRoleId?:number
  /**
   *The admin role name part to filter
  */
  adminRoleName?:string
  /**
   *The admin role active flag to filter
  */
  adminRoleActive?:boolean
  /**
   *Set true to get the permissions
  */
  withEntries?:boolean
  /**
   *Set false to omit the account roles
  */
  withAccountRoles?:boolean
  /**
   *Set false to omit the parent roles
  */
  withParentRoles?:boolean
  withSystemRoles?:boolean
  /**
   *The attached admin user ID list separated by the ';' symbol. Use the 'all' value to select all admin users
  */
  includedAdminUserId?:'any'|number|number[]
  /**
   *Not attached admin user ID list separated by the ';' symbol. Use the 'all' value to select all admin users
  */
  excludedAdminUserId?:'any'|number|number[]
  /**
   *Set false to get roles with partial admin user list matching
  */
  fullAdminUsersMatching?:string
  /**
   *The admin user to show in the 'admin_users' field output
  */
  showingAdminUserId?:number
  /**
   *The max returning record count
  */
  count?:number
  /**
   *The first <b>N</b> records will be skipped in the output
  */
  offset?:number
}
export interface GetAdminRolesResponse {
  result:AdminRole[]
  /**
   *The total found admin role count
  */
  totalCount:number
  /**
   *The returned admin role count
  */
  count:number
}
export interface GetAvailableAdminRoleEntriesRequest {
  
}
export interface GetAvailableAdminRoleEntriesResponse {
  /**
   *Array of the admin role entries
  */
  result:string[]
}
export interface AdminRolesInterface {
  addAdminRole: (request:AddAdminRoleRequest) => Promise<AddAdminRoleResponse>
  delAdminRole: (request:DelAdminRoleRequest) => Promise<DelAdminRoleResponse>
  setAdminRoleInfo: (request:SetAdminRoleInfoRequest) => Promise<SetAdminRoleInfoResponse>
  getAdminRoles: (request:GetAdminRolesRequest) => Promise<GetAdminRolesResponse>
  getAvailableAdminRoleEntries: (request:GetAvailableAdminRoleEntriesRequest) => Promise<GetAvailableAdminRoleEntriesResponse>
}

export interface AddAuthorizedAccountIPRequest {
  /**
   *The authorized IP4 or network
  */
  authorizedIp:string
  /**
   *Set false to add the IP to the blacklist
  */
  allowed?:boolean
}
export interface AddAuthorizedAccountIPResponse {
  /**
   *1
  */
  result:number
}
export interface DelAuthorizedAccountIPRequest {
  /**
   *The authorized IP4 or network to remove. Set to 'all' to remove all items
  */
  authorizedIp:string
  /**
   *Specify the parameter to remove the networks that contains the particular IP4. Can be used instead of <b>autharized_ip</b>
  */
  containsIp:string
  /**
   *Set true to remove the network from the white list. Set false to remove the network from the black list. Omit the parameter to remove the network from all lists
  */
  allowed?:boolean
}
export interface DelAuthorizedAccountIPResponse {
  /**
   *The removed network count
  */
  result:number
}
export interface GetAuthorizedAccountIPsRequest {
  /**
   *The authorized IP4 or network to filter
  */
  authorizedIp?:string
  /**
   *The allowed flag to filter
  */
  allowed?:boolean
  /**
   *Specify the parameter to filter the networks that contains the particular IP4
  */
  containsIp?:string
  /**
   *The max returning record count
  */
  count?:number
  /**
   *The first <b>N</b> records will be skipped in the output
  */
  offset?:number
}
export interface GetAuthorizedAccountIPsResponse {
  result:AuthorizedAccountIP[]
  /**
   *The total found network count
  */
  totalCount:number
  /**
   *The returned network count
  */
  count:number
}
export interface CheckAuthorizedAccountIPRequest {
  /**
   *The IP4 to test
  */
  authorizedIp:string
}
export interface CheckAuthorizedAccountIPResponse {
  /**
   *True if IP is allowed
  */
  result:boolean
  /**
   *The matched authorized IP or network (if found)
  */
  authorizedIp?:string
}
export interface AuthorizedIPsInterface {
  addAuthorizedAccountIP: (request:AddAuthorizedAccountIPRequest) => Promise<AddAuthorizedAccountIPResponse>
  delAuthorizedAccountIP: (request:DelAuthorizedAccountIPRequest) => Promise<DelAuthorizedAccountIPResponse>
  getAuthorizedAccountIPs: (request:GetAuthorizedAccountIPsRequest) => Promise<GetAuthorizedAccountIPsResponse>
  checkAuthorizedAccountIP: (request:CheckAuthorizedAccountIPRequest) => Promise<CheckAuthorizedAccountIPResponse>
}


export interface ContractorsInterface {
  
}


export interface ContactsInterface {
  
}

export interface LinkRegulationAddressRequest {
  /**
   *The regulation address ID
  */
  regulationAddressId:number
  /**
   *The phone ID for link
  */
  phoneId:number
  /**
   *The phone number for link
  */
  phoneNumber:string
}
export interface LinkRegulationAddressResponse {
  result:boolean
}
export interface GetZIPCodesRequest {
  /**
   *The country code according to the <b>ISO 3166-1 alpha-2</b>
  */
  countryCode:string
  /**
   *The phone region code
  */
  phoneRegionCode?:string
  /**
   *The max returning record count
  */
  count?:number
  /**
   *The first <b>N</b> records will be skipped in the output
  */
  offset?:number
}
export interface GetZIPCodesResponse {
  /**
   *The ZipCode records
  */
  result:ZipCode[]
  /**
   *The returned zip codes count
  */
  count:number
}
export interface GetRegulationsAddressRequest {
  /**
   *The country code according to the <b>ISO 3166-1 alpha-2</b>
  */
  countryCode?:string
  /**
   *The phone category name. See the [GetPhoneNumberCategories] method
  */
  phoneCategoryName?:string
  /**
   *The phone region code. See the [GetRegions] method
  */
  phoneRegionCode?:string
  /**
   *The regulation address ID
  */
  regulationAddressId?:number
  verificationId?:number
  /**
   *Show only verified regulation address
  */
  verified?:boolean
  /**
   *Show only in progress regulation address
  */
  inProgress?:boolean
  withRegionCode?:boolean
}
export interface GetRegulationsAddressResponse {
  /**
   *The RegulationAddress records
  */
  result:RegulationAddress[]
  /**
   *The returned regulation address count
  */
  count:number
}
export interface GetAvailableRegulationsRequest {
  /**
   *The country code according to the <b>ISO 3166-1 alpha-2</b>
  */
  countryCode:string
  /**
   *The phone category name. See the [GetPhoneNumberCategories] method
  */
  phoneCategoryName:string
  /**
   *The phone region code. See the [GetRegions] method
  */
  phoneRegionCode?:string
}
export interface GetAvailableRegulationsResponse {
  /**
   *If result equals 1: 1) the user has at least one regulation address which is appropriate for verification or 2) the verification is not required. If result equals 0, the regulations address needs to be created
  */
  result:boolean
  /**
   *The available RegulationAddress records
  */
  availableAddress:RegulationAddress[]
  /**
   *The count of RegulationAddress in progress status
  */
  countInProgress:number
}
export interface GetCountriesRequest {
  /**
   *The country code according to the <b>ISO 3166-1 alpha-2</b>
  */
  countryCode?:string
}
export interface GetCountriesResponse {
  result:RegulationCountry[]
  count:number
}
export interface GetRegionsRequest {
  /**
   *The country code according to the <b>ISO 3166-1 alpha-2</b>
  */
  countryCode:string
  /**
   *The phone category name. See the [GetPhoneNumberCategories] method
  */
  phoneCategoryName:string
  /**
   *The pattern of city's name
  */
  cityName?:string
  /**
   *The returned regions count
  */
  count?:number
  /**
   *The first <b>N</b> records will be skipped in the output
  */
  offset?:number
}
export interface GetRegionsResponse {
  result:RegulationRegionRecord[]
  count:number
}
export interface RegulationAddressInterface {
  linkRegulationAddress: (request:LinkRegulationAddressRequest) => Promise<LinkRegulationAddressResponse>
  getZIPCodes: (request:GetZIPCodesRequest) => Promise<GetZIPCodesResponse>
  getRegulationsAddress: (request:GetRegulationsAddressRequest) => Promise<GetRegulationsAddressResponse>
  getAvailableRegulations: (request:GetAvailableRegulationsRequest) => Promise<GetAvailableRegulationsResponse>
  getCountries: (request:GetCountriesRequest) => Promise<GetCountriesResponse>
  getRegions: (request:GetRegionsRequest) => Promise<GetRegionsResponse>
}

export interface AddPushCredentialRequest {
  /**
   *The push provider name. The possible values are APPLE, APPLE_VOIP, GOOGLE, HUAWEI
  */
  pushProviderName:string
  /**
   *The push provider id. Can be used instead of <b>push_provider_name</b>
  */
  pushProviderId:number
  /**
   *Public and private keys in PKCS12 format. Credentials for APPLE push
  */
  certContent:string
  /**
   *The secret password for private key. Credentials for APPLE push
  */
  certPassword:string
  /**
   *Set true to use this certificate in apple's sandbox environment. Credentials for APPLE push
  */
  isDevMode:boolean
  /**
   *The sender id, provided by Google. Credentials for GOOGLE push
  */
  senderId:string
  /**
   *The server key, provided by Google. Credentials for GOOGLE push
  */
  serverKey:string
  /**
   *The service account key file, provided by Google. Can be used instead of <b>server_key</b>. Credentials for GOOGLE push
  */
  serviceAccountFile:string
  /**
   *The client id, provided by Huawei. Credentials for HUAWEI push
  */
  huaweiClientId:string
  /**
   *The client secret, provided by Huawei. Credentials for HUAWEI push
  */
  huaweiClientSecret:string
  /**
   *The application id, provided by Huawei. Credentials for HUAWEI push
  */
  huaweiApplicationId:string
  /**
   *The application id
  */
  applicationId?:number
  /**
   *The application name that can be used instead of <b>application_id</b>
  */
  applicationName?:string
  /**
   *The bundle of Android/iOS/Huawei application
  */
  credentialBundle?:string
  /**
   *The parameter is required, when set 'cert_content' as POST body. Credentials for APPLE push
  */
  certFileName?:string
}
export interface AddPushCredentialResponse {
  result:number
  pushCredentialId:number
}
export interface SetPushCredentialRequest {
  /**
   *The push credentials id
  */
  pushCredentialId:number
  /**
   *Public and private keys in PKCS12 format. Credentials for APPLE push
  */
  certContent:string
  /**
   *The secret password for private key. Credentials for APPLE push
  */
  certPassword:string
  /**
   *Set true to use this certificate in apple's sandbox environment. Credentials for APPLE push
  */
  isDevMode:boolean
  /**
   *The sender id, provided by Google. Credentials for GOOGLE push
  */
  senderId:string
  /**
   *The server key, provided by Google. Credentials for GOOGLE push
  */
  serverKey:string
  /**
   *The service account key file, provided by Google. Can be used instead of <b>server_key</b>. Credentials for GOOGLE push
  */
  serviceAccountFile:string
  /**
   *The client id, provided by Huawei. Credentials for HUAWEI push
  */
  huaweiClientId:string
  /**
   *The client secret, provided by Huawei. Credentials for HUAWEI push
  */
  huaweiClientSecret:string
  /**
   *The application id, provided by Huawei. Credentials for HUAWEI push
  */
  huaweiApplicationId:string
}
export interface SetPushCredentialResponse {
  result:number
}
export interface DelPushCredentialRequest {
  /**
   *The push credentials id
  */
  pushCredentialId:number
}
export interface DelPushCredentialResponse {
  result:number
}
export interface GetPushCredentialRequest {
  /**
   *The push credentials id
  */
  pushCredentialId?:number
  /**
   *The push provider name. The possible values are APPLE, APPLE_VOIP, GOOGLE, HUAWEI
  */
  pushProviderName?:string
  /**
   *The push provider id. Can be used instead of <b>push_provider_name</b>
  */
  pushProviderId?:number
  /**
   *The name of the bound application
  */
  applicationName?:string
  /**
   *The id of the bound application
  */
  applicationId?:number
  /**
   *Set true to get the user's certificate
  */
  withCert?:boolean
  withSecretInfo?:boolean
}
export interface GetPushCredentialResponse {
  result:PushCredentialInfo[]
}
export interface BindPushCredentialRequest {
  /**
   *The push credentials ID list separated by the ';' symbol
  */
  pushCredentialId:'any'|number|number[]
  /**
   *The application ID list separated by the ';' symbol. Use the 'all' value to select all applications
  */
  applicationId:'any'|number|number[]
  /**
   *Set to false for unbind. Default value is true
  */
  bind?:boolean
}
export interface BindPushCredentialResponse {
  result:number
}
export interface PushCredentialsInterface {
  addPushCredential: (request:AddPushCredentialRequest) => Promise<AddPushCredentialResponse>
  setPushCredential: (request:SetPushCredentialRequest) => Promise<SetPushCredentialResponse>
  delPushCredential: (request:DelPushCredentialRequest) => Promise<DelPushCredentialResponse>
  getPushCredential: (request:GetPushCredentialRequest) => Promise<GetPushCredentialResponse>
  bindPushCredential: (request:BindPushCredentialRequest) => Promise<BindPushCredentialResponse>
}

export interface AddDialogflowKeyRequest {
  /**
   *The application ID
  */
  applicationId:string
  /**
   *Dialogflow credentials, provided by JWK (Json web key)
  */
  jsonCredentials:string
  /**
   *The application name. Can be used instead of <b>application_id</b>
  */
  applicationName?:string
  /**
   *The Dialogflow keys's description
  */
  description?:string
}
export interface AddDialogflowKeyResponse {
  result:number
  dialogflowKeyId:number
}
export interface SetDialogflowKeyRequest {
  /**
   *The Dialogflow key's ID
  */
  dialogflowKeyId:number
  /**
   *The Dialogflow keys's description. To clear previously set description leave the parameter blank or put whitespaces only
  */
  description:string
}
export interface SetDialogflowKeyResponse {
  result:number
}
export interface DelDialogflowKeyRequest {
  /**
   *The Dialogflow key's ID
  */
  dialogflowKeyId:number
}
export interface DelDialogflowKeyResponse {
  result:number
}
export interface GetDialogflowKeysRequest {
  /**
   *The Dialogflow key's ID
  */
  dialogflowKeyId?:number
  /**
   *The name of the bound application
  */
  applicationName?:string
  /**
   *The id of the bound application
  */
  applicationId?:number
  withSecretInfo?:boolean
}
export interface GetDialogflowKeysResponse {
  result:DialogflowKeyInfo[]
}
export interface BindDialogflowKeysRequest {
  /**
   *The Dialogflow key's ID 
  */
  dialogflowKeyId:number
  /**
   *The application ID list separated by the ';' symbol. Use the 'all' value to select all applications
  */
  applicationId:'any'|number|number[]
  /**
   *Set to false to unbind. Default value is true
  */
  bind?:boolean
}
export interface BindDialogflowKeysResponse {
  result:number
}
export interface DialogflowCredentialsInterface {
  addDialogflowKey: (request:AddDialogflowKeyRequest) => Promise<AddDialogflowKeyResponse>
  setDialogflowKey: (request:SetDialogflowKeyRequest) => Promise<SetDialogflowKeyResponse>
  delDialogflowKey: (request:DelDialogflowKeyRequest) => Promise<DelDialogflowKeyResponse>
  getDialogflowKeys: (request:GetDialogflowKeysRequest) => Promise<GetDialogflowKeysResponse>
  bindDialogflowKeys: (request:BindDialogflowKeysRequest) => Promise<BindDialogflowKeysResponse>
}

export interface SendSmsMessageRequest {
  /**
   *The source phone number
  */
  source:string
  /**
   *The destination phone number
  */
  destination:string
  /**
   *The message text, up to 765 characters. We split long messages greater than 160 GSM-7 characters or 70 UTF-16 characters into multiple segments. Each segment is charged as one message
  */
  smsBody:string
}
export interface SendSmsMessageResponse {
  result:number
  /**
   *The number of fragments the message was divided into
  */
  fragmentsCount:number
}
export interface A2PSendSmsRequest {
  /**
   *The source phone number
  */
  srcNumber:string
  /**
   *The destination phone numbers separated by the ';' symbol. The maximum number of these phone numbers is 100
  */
  dstNumbers:string|string[]
  /**
   *The message text, up to 1600 characters. We split long messages greater than 160 GSM-7 characters or 70 UTF-16 characters into multiple segments. Each segment is charged as one message
  */
  text:string
}
export interface A2PSendSmsResponse {
  result:SmsTransaction[]
  failed:FailedSms[]
  /**
   *The number of fragments the message is divided into
  */
  fragmentsCount:number
}
export interface ControlSmsRequest {
  /**
   *The phone number
  */
  phoneNumber:string
  /**
   *The SMS control command. The following values are possible: enable, disable
  */
  command:string
}
export interface ControlSmsResponse {
  result:number
}
export interface GetSmsHistoryRequest {
  /**
   *The source phone number
  */
  sourceNumber?:string
  /**
   *The destination phone number
  */
  destinationNumber?:string
  /**
   *Sent or received SMS. Possible values: 'IN', 'OUT', 'in, 'out'. Leave blank to get both incoming and outgoing messages
  */
  direction?:string
  /**
   *Maximum number of resulting rows fetched. Must be not bigger than 1000. If left blank, then the default value of 1000 will be used
  */
  count?:number
  /**
   *The first <b>N</b> records will be skipped in the output
  */
  offset?:number
  /**
   *Date from which to perform search. Format is 'yyyy-MM-dd HH:mm:ss'
  */
  fromDate?:Date
  /**
   *Date until which to perform search. Format is 'yyyy-MM-dd HH:mm:ss'
  */
  toDate?:Date
  /**
   *The output format. The following values available: json, csv
  */
  output?:string
}
export interface GetSmsHistoryResponse {
  result:SmsHistory[]
  /**
   *Total number of messages matching the query parameters
  */
  totalCount:number
}
export interface A2PGetSmsHistoryRequest {
  /**
   *The source phone number
  */
  sourceNumber?:string
  /**
   *The destination phone number
  */
  destinationNumber?:string
  /**
   *Maximum number of resulting rows fetched. Must be not bigger than 1000. If left blank, then the default value of 1000 will be used
  */
  count?:number
  /**
   *The first <b>N</b> records will be skipped in the output
  */
  offset?:number
  /**
   *Date from which the search is to start. Format is 'yyyy-MM-dd HH:mm:ss'
  */
  fromDate?:Date
  /**
   *Date from which the search is to end. Format is 'yyyy-MM-dd HH:mm:ss'
  */
  toDate?:Date
  /**
   *The output format. The possible values are json, csv
  */
  output?:string
  /**
   *The delivery status ID: QUEUED - 1, DISPATCHED - 2, ABORTED - 3, REJECTED - 4, DELIVERED - 5, FAILED - 6, EXPIRED - 7, UNKNOWN - 8
  */
  deliveryStatus?:number
}
export interface A2PGetSmsHistoryResponse {
  result:A2PSmsHistory[]
  /**
   *Total number of messages matching the query parameters
  */
  totalCount:number
}
export interface SMSInterface {
  sendSmsMessage: (request:SendSmsMessageRequest) => Promise<SendSmsMessageResponse>
  a2PSendSms: (request:A2PSendSmsRequest) => Promise<A2PSendSmsResponse>
  controlSms: (request:ControlSmsRequest) => Promise<ControlSmsResponse>
  getSmsHistory: (request:GetSmsHistoryRequest) => Promise<GetSmsHistoryResponse>
  a2PGetSmsHistory: (request:A2PGetSmsHistoryRequest) => Promise<A2PGetSmsHistoryResponse>
}

export interface GetRecordStoragesRequest {
  /**
   *The record storage ID list separated by the ';' symbol
  */
  recordStorageId?:'any'|number|number[]
  /**
   *The record storage name list separated by the ';' symbol
  */
  recordStorageName?:string|string[]
  withPrivate?:boolean
}
export interface GetRecordStoragesResponse {
  result:RecordStorageInfo
}
export interface RecordStoragesInterface {
  getRecordStorages: (request:GetRecordStoragesRequest) => Promise<GetRecordStoragesResponse>
}


export interface MGPInterface {
  
}

export interface CreateKeyRequest {
  /**
   *The key's description
  */
  description?:string
  /**
   *The role ID list separated by the ';' symbol. Use it instead of **role_name**, but not combine with
  */
  roleId?:'any'|number|number[]
  /**
   *The role name list separated by the ';' symbol. Use it instead of **role_id**, but not combine with
  */
  roleName?:string|string[]
}
export interface CreateKeyResponse {
  result:KeyInfo[]
}
export interface GetKeysRequest {
  /**
   *The key's ID
  */
  keyId?:string
  /**
   *Show roles for the key
  */
  withRoles?:boolean
  /**
   *The first <b>N</b> records will be skipped in the output
  */
  offset?:number
  /**
   *The max returning record count
  */
  count?:number
}
export interface GetKeysResponse {
  result:KeyView[]
}
export interface UpdateKeyRequest {
  /**
   *The key's ID
  */
  keyId:string
  /**
   *The key's description
  */
  description:string
}
export interface UpdateKeyResponse {
  result:number
}
export interface DeleteKeyRequest {
  /**
   *The key's ID
  */
  keyId:string
}
export interface DeleteKeyResponse {
  result:number
}
export interface SetKeyRolesRequest {
  /**
   *The key's ID
  */
  keyId:string
  /**
   *The role id list separated by the ';' symbol
  */
  roleId:'any'|number|number[]
  /**
   *The role name list separated by the ';' symbol
  */
  roleName:string|string[]
}
export interface SetKeyRolesResponse {
  result:number
}
export interface GetKeyRolesRequest {
  /**
   *The key's ID
  */
  keyId:string
  /**
   *Show the roles' additional properties
  */
  withExpandedRoles?:boolean
}
export interface GetKeyRolesResponse {
  result:RoleView[]
}
export interface RemoveKeyRolesRequest {
  /**
   *The key's ID
  */
  keyId:string
  /**
   *The role id list separated by the ';' symbol
  */
  roleId:'any'|number|number[]
  /**
   *The role name list separated by the ';' symbol
  */
  roleName:string|string[]
}
export interface RemoveKeyRolesResponse {
  result:number
}
export interface AddSubUserRequest {
  /**
   *The new subuser login for managent api authentication, should be unique within the Voximplant account. The login specified is always converted to lowercase
  */
  newSubuserName:string
  /**
   *The new subuser password. Must be at least 8 characters long and contain at least one uppercase and lowercase letter, one number, and one special character
  */
  newSubuserPassword:string
  /**
   *The role id list separated by the ';' symbol
  */
  roleId?:'any'|number|number[]
  /**
   *The role name list separated by the ';' symbol
  */
  roleName?:string|string[]
  /**
   *Description of a new subuser
  */
  description?:string
}
export interface AddSubUserResponse {
  result:SubUserID
}
export interface GetSubUsersRequest {
  /**
   *The subuser's ID
  */
  subuserId?:number
  /**
   *Show subuser's roles
  */
  withRoles?:boolean
  /**
   *The first <b>N</b> records will be skipped in the output
  */
  offset?:number
  /**
   *The max returning record count
  */
  count?:number
}
export interface GetSubUsersResponse {
  result:SubUserView[]
}
export interface SetSubUserInfoRequest {
  /**
   *The subuser's ID
  */
  subuserId:number
  /**
   *The subuser old password. It is required if __new_subuser_password__ is specified
  */
  oldSubuserPassword?:string
  /**
   *The new user password. Must be at least 8 characters long and contain at least one uppercase and lowercase letter, one number, and one special character
  */
  newSubuserPassword?:string
  /**
   *The new subuser description
  */
  description?:string
}
export interface SetSubUserInfoResponse {
  result:number
}
export interface DelSubUserRequest {
  /**
   *The subuser's ID
  */
  subuserId:number
}
export interface DelSubUserResponse {
  result:number
}
export interface SetSubUserRolesRequest {
  /**
   *The subuser's ID
  */
  subuserId:number
  /**
   *The role id list separated by the ';' symbol
  */
  roleId:'any'|number|number[]
  /**
   *The role name list separated by the ';' symbol
  */
  roleName:string|string[]
}
export interface SetSubUserRolesResponse {
  result:number
}
export interface GetSubUserRolesRequest {
  /**
   *The subuser's ID
  */
  subuserId:number
  /**
   *Show the roles' additional properties
  */
  withExpandedRoles?:boolean
}
export interface GetSubUserRolesResponse {
  result:RoleView[]
}
export interface RemoveSubUserRolesRequest {
  /**
   *The subuser's ID
  */
  subuserId:number
  /**
   *The role id list separated by the ';' symbol
  */
  roleId:'any'|number|number[]
  /**
   *The role name list separated by the ';' symbol
  */
  roleName:string|string[]
  /**
   *Remove roles from all subuser keys
  */
  force?:boolean
}
export interface RemoveSubUserRolesResponse {
  result:number
}
export interface GetRolesRequest {
  /**
   *The role group
  */
  groupName?:string
}
export interface GetRolesResponse {
  result:RoleView[]
}
export interface GetRoleGroupsRequest {
  
}
export interface GetRoleGroupsResponse {
  result:RoleGroupView[]
}
export interface RoleSystemInterface {
  createKey: (request:CreateKeyRequest) => Promise<CreateKeyResponse>
  getKeys: (request:GetKeysRequest) => Promise<GetKeysResponse>
  updateKey: (request:UpdateKeyRequest) => Promise<UpdateKeyResponse>
  deleteKey: (request:DeleteKeyRequest) => Promise<DeleteKeyResponse>
  setKeyRoles: (request:SetKeyRolesRequest) => Promise<SetKeyRolesResponse>
  getKeyRoles: (request:GetKeyRolesRequest) => Promise<GetKeyRolesResponse>
  removeKeyRoles: (request:RemoveKeyRolesRequest) => Promise<RemoveKeyRolesResponse>
  addSubUser: (request:AddSubUserRequest) => Promise<AddSubUserResponse>
  getSubUsers: (request:GetSubUsersRequest) => Promise<GetSubUsersResponse>
  setSubUserInfo: (request:SetSubUserInfoRequest) => Promise<SetSubUserInfoResponse>
  delSubUser: (request:DelSubUserRequest) => Promise<DelSubUserResponse>
  setSubUserRoles: (request:SetSubUserRolesRequest) => Promise<SetSubUserRolesResponse>
  getSubUserRoles: (request:GetSubUserRolesRequest) => Promise<GetSubUserRolesResponse>
  removeSubUserRoles: (request:RemoveSubUserRolesRequest) => Promise<RemoveSubUserRolesResponse>
  getRoles: (request:GetRolesRequest) => Promise<GetRolesResponse>
  getRoleGroups: (request:GetRoleGroupsRequest) => Promise<GetRoleGroupsResponse>
}

export interface SetKeyValueItemRequest {
  /**
   *Key, up to 200 characters. A key can contain a namespace that is written before the ':' symbol, for example, test:1234. Thus, namespace 'test' can be used as a pattern in the [GetKeyValueItems](/docs/references/httpapi/keyvaluestorage#getkeyvalueitems) and [GetKeyValueKeys](/docs/references/httpapi/keyvaluestorage#getkeyvaluekeys) methods to find the keys with the same namespace
  */
  key:string
  /**
   *Value for the specified key, up to 2000 characters
  */
  value:string
  /**
   *The application ID
  */
  applicationId:number
  /**
   *The application name
  */
  applicationName?:string
  /**
   *Key expiry time in seconds. The value is in range of 0..7,776,000 (90 days), the default value is 30 days (2,592,000 seconds). The TTL is converted to an **expires_at** Unix timestamp field as part of the storage object. Note that one of the two parameters (ttl or expires_at) must be set
  */
  ttl?:number
  /**
   *Expiration date based on **ttl** (timestamp without milliseconds). Note that one of the two parameters (ttl or expires_at) must be set
  */
  expiresAt?:number
}
export interface SetKeyValueItemResponse {
  /**
   *The key-value item
  */
  result:KeyValueItems
}
export interface DelKeyValueItemRequest {
  /**
   *Key, up to 200 characters
  */
  key:string
  /**
   *The application ID
  */
  applicationId:number
  /**
   *The application name
  */
  applicationName?:string
}
export interface DelKeyValueItemResponse {
  result:number
}
export interface GetKeyValueItemRequest {
  /**
   *Key, up to 200 characters
  */
  key:string
  /**
   *The application ID
  */
  applicationId:number
  /**
   *The application name
  */
  applicationName?:string
}
export interface GetKeyValueItemResponse {
  /**
   *The key-value item
  */
  result:KeyValueItems
}
export interface GetKeyValueItemsRequest {
  /**
   *Namespace that keys should contain, up to 200 characters
  */
  key:string
  /**
   *The application ID
  */
  applicationId:number
  /**
   *Number of items to show per page with a maximum value of 50. Default value is 10
  */
  count?:number
  /**
   *Number of items to skip (e.g. if you set count = 20 and offset = 0 the first time, the next time, offset has to be equal to 20 to skip the items shown earlier). Default value is 0
  */
  offset?:number
  /**
   *The application name
  */
  applicationName?:string
}
export interface GetKeyValueItemsResponse {
  /**
   *The key-value pairs
  */
  result:KeyValueItems
}
export interface GetKeyValueKeysRequest {
  /**
   *The application ID
  */
  applicationId:number
  /**
   *Namespace that keys should contain, up to 200 characters
  */
  key?:string
  /**
   *Number of items to show per page with a maximum value of 50. Default value is 10
  */
  count?:number
  /**
   *Number of items to skip (e.g. if you set count = 20 and offset = 0 the first time, the next time, offset has to be equal to 20 to skip the items shown earlier). Default value is 0
  */
  offset?:number
  /**
   *The application name
  */
  applicationName?:string
}
export interface GetKeyValueKeysResponse {
  /**
   *The key-value keys
  */
  result:KeyValueKeys
}
export interface KeyValueStorageInterface {
  setKeyValueItem: (request:SetKeyValueItemRequest) => Promise<SetKeyValueItemResponse>
  delKeyValueItem: (request:DelKeyValueItemRequest) => Promise<DelKeyValueItemResponse>
  getKeyValueItem: (request:GetKeyValueItemRequest) => Promise<GetKeyValueItemResponse>
  getKeyValueItems: (request:GetKeyValueItemsRequest) => Promise<GetKeyValueItemsResponse>
  getKeyValueKeys: (request:GetKeyValueKeysRequest) => Promise<GetKeyValueKeysResponse>
}

export interface GetAccountInvoicesRequest {
  status?:string
  /**
   *Number of invooces to show per page. Default value is 20
  */
  count?:number
  /**
   *Number of invoices to skip (e.g. if you set count = 20 and offset = 0 the first time, the next time, offset has to be equal to 20 to skip the items shown earlier). Default value is 0
  */
  offset?:number
}
export interface GetAccountInvoicesResponse {
  /**
   *Array of the account invoices
  */
  result:AccountInvocie
  /**
   *Total number of invoices matching the query parameters
  */
  totalCount:number
  /**
   *Number of returned invoices matching the query parameters
  */
  count:number
}
export interface InvoicesInterface {
  getAccountInvoices: (request:GetAccountInvoicesRequest) => Promise<GetAccountInvoicesResponse>
}


export interface ChildAccountsInterface {
  
}
