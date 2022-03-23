export interface APIError{
  /**
   * The error code
   */
  code: number
  /**
   * The error description
   */
  msg: string

}
export interface AccountInfo{
  /**
   * The account's ID
   */
  accountId: number
  /**
   * The account's name
   */
  accountName: string
  /**
   * The account's email
   */
  accountEmail: string
  /**
   * The account API key. Use password or api_key authentication to show the api_key
   */
  apiKey?: string
  /**
   * The first name
   */
  accountFirstName?: string
  /**
   * The last name
   */
  accountLastName?: string
  /**
   * The UTC account created time in 24-h format: YYYY-MM-DD HH:mm:ss
   */
  created: Date
  /**
   * The notification language code (2 symbols, ISO639-1). Examples: en, ru
   */
  languageCode?: string
  /**
   * The account location (timezone). Examples: America/Los_Angeles, Etc/GMT-8, Etc/GMT+10
   */
  location?: string
  /**
   * The min balance value to notify by email or SMS
   */
  minBalanceToNotify?: number
  /**
   * Voximplant notifications are required
   */
  accountNotifications?: boolean
  /**
   * Voximplant plan changing notifications are required
   */
  tariffChangingNotifications?: boolean
  /**
   * Voximplant news notifications are required
   */
  newsNotifications?: boolean
  /**
   * The company or businessman name
   */
  billingAddressName?: string
  /**
   * The billing address country code (2 symbols, ISO 3166-1 alpha-2). Examples: US, RU, GB
   */
  billingAddressCountryCode?: string
  /**
   * The office address
   */
  billingAddressAddress?: string
  /**
   * The office ZIP
   */
  billingAddressZip?: string
  /**
   * The office phone number
   */
  billingAddressPhone?: string
  /**
   * The office state (US) or province (Canada), up to 100 characters. Examples: California, Illinois, British Columbia
   */
  billingAddressState?: string
  /**
   * The account activation flag
   */
  active: boolean
  /**
   * Is account blocked by Voximplant admins or not
   */
  frozen?: boolean
  /**
   * The account's money
   */
  balance?: number
  /**
   * The account's credit limit
   */
  creditLimit?: number
  /**
   * The currency code (USD, RUR, EUR, ...)
   */
  currency?: string
  /**
   * Robokassa payments are allowed
   */
  supportRobokassa?: boolean
  /**
   * Bank card payments are allowed
   */
  supportBankCard?: boolean
  /**
   * Bank invoices are allowed
   */
  supportInvoice?: boolean
  /**
   * The custom data
   */
  accountCustomData?: string
  /**
   * The allowed access entries (the API function names)
   */
  accessEntries?: string[]
  /**
   * Set true to get the admin user permissions
   */
  withAccessEntries?: boolean
  /**
   * If URL is specified, Voximplant cloud will make HTTP POST requests to it when something happens. For a full list of reasons see the <b>type</b> field of the [AccountCallback] structure. The HTTP request will have a JSON-encoded body that conforms to the [AccountCallbacks] structure
   */
  callbackUrl?: string
  /**
   * If salt string is specified, each HTTP request made by the Voximplant cloud toward the <b>callback_url</b> will have a <b>salt</b> field set to MD5 hash of account information and salt. That hash can be used be a developer to ensure that HTTP request is made by the Voximplant cloud
   */
  callbackSalt?: string
  /**
   * Sending email when a JS error occures
   */
  sendJsError?: boolean
  /**
   * The payments limits applicable to each payment method
   */
  billingLimits?: BillingLimits
  /**
   * One-way SMS activation flag
   */
  a2pSmsEnabled?: boolean

}
export interface BillingLimits{
  /**
   * The Robokassa limits
   */
  robokassa?: BillingLimitInfo
  /**
   * The bank card limits
   */
  bankCard?: BankCardBillingLimitInfo
  /**
   * The invoice limits
   */
  invoice?: BillingLimitInfo

}
export interface BillingLimitInfo{
  /**
   * The minimum amount
   */
  minAmount: number
  /**
   * The currency
   */
  currency: string

}
export interface BankCardBillingLimitInfo{
  /**
   * The minimum amount
   */
  minAmount: number
  /**
   * The currency
   */
  currency: string

}
export interface ShortAccountInfo{
  /**
   * The account's ID
   */
  accountId: number
  /**
   * Is account blocked by Voximplant admins or not
   */
  frozen?: boolean
  /**
   * The account's money
   */
  balance?: number
  /**
   * The currency code (USD, RUR, EUR, ...)
   */
  currency?: string

}
export interface ClonedAccount{
  /**
   * The account's ID
   */
  accountId: number
  /**
   * The account's name
   */
  accountName: string
  /**
   * The account's email
   */
  accountEmail: string
  /**
   * The account activation flag
   */
  active: boolean
  /**
   * The account API key
   */
  apiKey: string
  /**
   * The cloned users
   */
  users: ClonedUser[]
  /**
   * The cloned scenarios
   */
  scenarios: ClonedScenario[]
  /**
   * The cloned applications
   */
  applications: ClonedApplication[]
  /**
   * The cloned ACD queues
   */
  acdQueues: ClonedACDQueue[]
  /**
   * The cloned ACD skills
   */
  acdSkills: ClonedACDSkill[]
  /**
   * The cloned admin roles
   */
  adminRoles: ClonedAdminRole[]
  /**
   * The cloned admin users
   */
  adminUsers: ClonedAdminUser[]

}
export interface AccountPlan{
  /**
   * The current plan ID
   */
  planSubscriptionTemplateId: number
  /**
   * The next charge date, format: YYYY-MM-DD
   */
  nextCharge: Date
  /**
   * The plan type. The possible values are IM, MAU
   */
  planType: string
  /**
   * The plan name
   */
  planName: string
  /**
   * The plan monthly charge
   */
  periodicCharge: number
  /**
   * The account plan package array
   */
  packages: AccountPlanPackage[]

}
export interface AccountPlanPackage{
  /**
   * The price group IDs
   */
  priceGroupId: number[]
  /**
   * The package name
   */
  packageName?: string
  /**
   * Overrun is enabled
   */
  mayOverrun: boolean
  /**
   * The overrun amount
   */
  overrunPrice: number
  /**
   * The number of resources (e.g., messages) per overrun
   */
  overrunResources: number
  /**
   * The resource left in the package
   */
  resourceLeft: number
  /**
   * The current package size (including overrun)
   */
  packageSize: number
  /**
   * The original package size (excluding overrun)
   */
  origPackageSize: number

}
export interface Plan{
  /**
   * The current plan ID
   */
  planSubscriptionTemplateId: number
  /**
   * The plan type. The possible values are IM, MAU
   */
  planType: string
  /**
   * The plan name
   */
  planName: string
  /**
   * The plan monthly charge
   */
  periodicCharge: number
  /**
   * The account package array
   */
  packages: PlanPackage[]

}
export interface PlanPackage{
  /**
   * The price group IDs
   */
  priceGroupId: number[]
  /**
   * The package name
   */
  packageName?: string
  /**
   * Overrun is enabled
   */
  mayOverrun: boolean
  /**
   * The overrun amount
   */
  overrunPrice: number
  /**
   * The number of resources (e.g., messages) per overrun
   */
  overrunResources: number
  /**
   * The package size
   */
  packageSize: number

}
export interface ApplicationInfo{
  /**
   * The application ID
   */
  applicationId: number
  /**
   * The full application name
   */
  applicationName: string
  /**
   * The application editing UTC date in 24-h format: YYYY-MM-DD HH:mm:ss
   */
  modified: Date
  /**
   * This flag indicates whether a secure storage for logs and records is enabled or not
   */
  secureRecordStorage: boolean

}
export interface ClonedApplication{
  /**
   * The application ID
   */
  applicationId: number
  /**
   * The full application name
   */
  applicationName: string
  /**
   * The cloned rules
   */
  users: ClonedRule[]

}
export interface UserInfo{
  /**
   * The user ID
   */
  userId: number
  /**
   * The user name
   */
  userName: string
  /**
   * The display user name
   */
  userDisplayName: string
  /**
   * The user active flag
   */
  userActive: boolean
  /**
   * 'True' if the user uses the parent account's money, 'false' if the user has a separate balance
   */
  parentAccounting: boolean
  /**
   * The current user's money in the currency specified for the account. The value is the number rounded to 4 decimal places and it changes during the calls, transcribing, purchases etc
   */
  liveBalance: number
  /**
   * The current user's money in the currency specified for the account. The value is the number rounded to 4 decimal places. The parameter is the alias to live_balance by default. But there is a possibility to make the alias to fixed_balance: just to pass return_live_balance=false into the [GetAccountInfo] method
   */
  balance: number
  /**
   * The last committed balance which was approved by billing's transaction
   */
  fixedBalance: number
  /**
   * The custom data
   */
  userCustomData?: string
  /**
   * The bound applications
   */
  applications?: ApplicationInfo[]
  /**
   * The bound skills
   */
  skills?: SkillInfo[]
  /**
   * The bound ACD queues
   */
  acdQueues?: ACDQueueOperatorInfo[]
  /**
   * The ACD operator status. The following values are possible: OFFLINE, ONLINE, READY, BANNED, IN_SERVICE, AFTER_SERVICE, TIMEOUT, DND
   */
  acdStatus?: string
  /**
   * The ACD status changing UTC date in 24-h format: YYYY-MM-DD HH:mm:ss
   */
  acdStatusChangeTime: Date
  /**
   * The user editing UTC date in 24-h format: YYYY-MM-DD HH:mm:ss
   */
  created: Date
  /**
   * The user editing UTC date in 24-h format: YYYY-MM-DD HH:mm:ss
   */
  modified: Date

}
export interface ClonedUser{
  /**
   * The user ID
   */
  userId: number
  /**
   * The user name
   */
  userName: string

}
export interface ScenarioInfo{
  /**
   * The scenario ID
   */
  scenarioId: number
  /**
   * The scenario name
   */
  scenarioName: string
  /**
   * The scenario text
   */
  scenarioScript?: string
  /**
   * The scenario editing UTC date in 24-h format: YYYY-MM-DD HH:mm:ss
   */
  modified: Date
  /**
   * 'True' if the scenario belongs to the parent account, 'false' if the scenario belongs to the current account
   */
  parent: boolean

}
export interface ClonedScenario{
  /**
   * The scenario ID
   */
  scenarioId: number
  /**
   * The scenario name
   */
  scenarioName: string

}
export interface RuleInfo{
  /**
   * The rule ID
   */
  ruleId: number
  /**
   * The application ID
   */
  applicationId: number
  /**
   * The rule name
   */
  ruleName: string
  /**
   * The rule pattern regex
   */
  rulePattern: string
  /**
   * The rule pattern exlude regex
   */
  rulePatternExclude?: string
  /**
   * Video conference is required
   */
  videoConference: boolean
  /**
   * The bound scenarios
   */
  scenarios: ScenarioInfo[]
  /**
   * The rule editing UTC date in 24-h format: YYYY-MM-DD HH:mm:ss
   */
  modified: Date

}
export interface ClonedRule{
  /**
   * The rule ID
   */
  ruleId: number
  /**
   * The rule name
   */
  ruleName: string

}
export interface SipWhiteListInfo{
  /**
   * The SIP white list item ID
   */
  sipWhitelistId: number
  /**
   * The network address in format A.B.C.D/L
   */
  sipWhitelistNetwork: string

}
export interface CallSessionInfo{
  /**
   * The call session history ID
   */
  callSessionHistoryId: number
  /**
   * The account ID
   */
  accountId: number
  /**
   * The application ID
   */
  applicationId: number
  /**
   * The user ID
   */
  userId: number
  /**
   * The start date in the selected timezone in 24-h format: YYYY-MM-DD HH:mm:ss
   */
  startDate: Date
  /**
   * The session duration in seconds
   */
  duration?: number
  /**
   * The initiator IP address
   */
  initiatorAddress: string
  /**
   * The media server IP address
   */
  mediaServerAddress: string
  /**
   * The session log URL
   */
  logFileUrl: string
  /**
   * The finish reason. Possible values are __Normal termination__, __Insufficient funds__, __Internal error (billing timeout)__, __Terminated administratively__, __JS Error__, __Timeout__
   */
  finishReason?: string
  /**
   * The bound calls
   */
  calls?: CallInfo[]
  /**
   * The used resorces
   */
  otherResourceUsage?: ResourceUsage[]
  /**
   * The bound records
   */
  records?: Record[]
  /**
   * The custom data
   */
  customData?: string

}
export interface CallInfo{
  /**
   * The call history ID
   */
  callId: number
  /**
   * The start time in the selected timezone in 24-h format: YYYY-MM-DD HH:mm:ss
   */
  startTime: Date
  /**
   * The call duration in seconds
   */
  duration?: number
  /**
   * The local number
   */
  localNumber: string
  /**
   * The remote number
   */
  remoteNumber: string
  /**
   * The remote number type
   */
  remoteNumberType: string
  /**
   * The incoming flag
   */
  incoming: boolean
  /**
   * The success flag
   */
  successful: boolean
  /**
   * The transaction ID
   */
  transactionId: number
  /**
   * The record URL
   */
  recordUrl?: string
  /**
   * The media server IP address
   */
  mediaServerAddress: string
  /**
   * The call cost
   */
  cost?: number
  /**
   * The custom data
   */
  customData?: string

}
export interface TransactionInfo{
  /**
   * The transaction ID
   */
  transactionId: number
  /**
   * The account ID
   */
  accountId: string
  /**
   * The transaction date in the selected timezone in 24-h format: YYYY-MM-DD HH:mm:ss
   */
  performedAt: Date
  /**
   * The transaction amount, $
   */
  amount: number
  /**
   * The amount currency (USD, RUR, EUR, ...). 
   */
  currency: string
  /**
   * The transaction type. The following values are possible: resource_charge, money_distribution, subscription_charge, subscription_installation_charge, card_periodic_payment, card_overrun_payment, card_payment, rub_card_periodic_payment, rub_card_overrun_payment, rub_card_payment, robokassa_payment, gift, promo, adjustment, wire_transfer, us_wire_transfer, refund, discount, mgp_charge, mgp_startup, mgp_business, mgp_big_business, mgp_enterprise, mgp_large_enterprise, techsupport_charge, tax_charge, monthly_fee_charge, grace_credit_payment, grace_credit_provision, mau_charge, mau_overrun, im_charge, im_overrun, fmc_charge, sip_registration_charge, development_fee, money_transfer_to_child, money_transfer_to_parent, money_acceptance_from_child, money_acceptance_from_parent, phone_number_installation, phone_number_charge, toll_free_phone_number_installation, toll_free_phone_number_charge, services, user_money_transfer, paypal_payment, paypal_overrun_payment, paypal_periodic_payment
   */
  transactionType: string
  /**
   * The transaction description
   */
  transactionDescription?: string

}
export interface ResourceUsage{
  /**
   * The resource usage ID
   */
  resourceUsageId: number
  /**
   * The resource type. The possible values are CALLSESSION, VIDEOCALL, VIDEORECORD, VOICEMAILDETECTION, YANDEXASR, ASR, TRANSCRIPTION, TTS_TEXT_GOOGLE, TTS_YANDEX, AUDIOHDCONFERENCE
   */
  resourceType: string
  /**
   * The resource cost
   */
  cost?: number
  /**
   * The description
   */
  description?: string
  /**
   * The start resource using time in the selected timezone in 24-h format: YYYY-MM-DD HH:mm:ss
   */
  usedAt: Date
  /**
   * The transaction ID
   */
  transactionId: number
  /**
   * The resource quantity
   */
  resourceQuantity?: number
  /**
   * The resource unit
   */
  unit?: string
  /**
   * The reference to call
   */
  refCallId?: number

}
export interface Record{
  /**
   * The record ID
   */
  recordId: number
  /**
   * The record name
   */
  recordName?: string
  /**
   * The record cost
   */
  cost?: number
  /**
   * The start recording time in the selected timezone in 24-h format: YYYY-MM-DD HH:mm:ss
   */
  startTime: Date
  /**
   * The call duration in seconds
   */
  duration?: number
  /**
   * The record URL
   */
  recordUrl?: string
  /**
   * The transaction ID
   */
  transactionId: number
  /**
   * The file size
   */
  fileSize?: number
  /**
   * Transcription URL. To open the URL, please add authorization parameters and <b>record_id</b> to it
   */
  transcriptionUrl?: string
  /**
   * The status of transcription. The possible values are Not required, In progress, Complete
   */
  transcriptionStatus?: string

}
export interface AuditLogInfo{
  /**
   * The  ID
   */
  auditLogId: number
  /**
   * The account ID
   */
  accountId: number
  /**
   * The action time in the selected timezone in 24-h format: YYYY-MM-DD HH:mm:ss
   */
  requested: Date
  /**
   * The initiator IP address
   */
  ip: string
  /**
   * The called function
   */
  cmdName: string
  /**
   * The arguments of the called function (they may be masked or resolved)
   */
  cmdArgs: any
  /**
   * The modified values
   */
  cmdResult?: any

}
export interface HistoryReport{
  /**
   * The call history report ID
   */
  historyReportId: number
  /**
   * The history report type. The following values are possible: calls, transactions, audit, call_list
   */
  historyType: string
  /**
   * The creation time in the UTC timezone in 24-h format: YYYY-MM-DD HH:mm:ss
   */
  created: Date
  /**
   * The report format type. The following values are possible: csv
   */
  format?: string
  /**
   * The UTC completion time in 24-h format: YYYY-MM-DD HH:mm:ss. The report is completed if the field exists
   */
  completed?: Date
  /**
   * The report file name
   */
  fileName?: string
  /**
   * The report file size
   */
  fileSize?: number
  /**
   * The gzipped report size to download
   */
  downloadSize?: number
  /**
   * The download attempt count
   */
  downloadCount?: number
  /**
   * The last download UTC time in 24-h format: YYYY-MM-DD HH:mm:ss. The report is completed if the field exists
   */
  lastDownloaded?: Date
  /**
   * Store the report until the UTC time in 24-h format: YYYY-MM-DD HH:mm:ss. The report is completed if the field exists
   */
  storeUntil?: Date
  /**
   * The report error
   */
  error?: APIError
  /**
   * The report order filters (the saved [GetCallHistory], [GetTransactionHistory] parameters)
   */
  filters?: any
  /**
   * The calculated report data (the specific report data, see [CalculatedCallHistoryDataType], [CalculatedTransactionHistoryDataType])
   */
  calculatedData?: any

}
export interface CalculatedCallHistoryData{
  /**
   * The session count in the report
   */
  sessionCount: number
  /**
   * The total found filtered session count
   */
  totalSessionCount: number
  /**
   * The selected timezone
   */
  timezone: string

}
export interface CalculatedTransactionHistoryData{
  /**
   * The transaction count in the report
   */
  transactionCount: number
  /**
   * The total found filtered transaction count
   */
  totalTransactionCount: number
  /**
   * The start account/user balance with currency. Example: 2.3 USD
   */
  startBalance?: string
  /**
   * The end account/user balance with currency. Example: 12.5 RUR
   */
  endBalance?: string
  /**
   * The account ID
   */
  accountId?: number
  /**
   * The user ID
   */
  userId?: number
  /**
   * The user name
   */
  userName?: number
  /**
   * The selected timezone
   */
  timezone: string

}
export interface ACDSessionInfo{
  /**
   * The ACD session history ID
   */
  acdSessionHistoryId: number
  /**
   * The ACD request ID. See the [ACDRequest.id()](/docs/references/voxengine/acd/acdrequest#id) VoxEngine method
   */
  acdRequestId: string
  /**
   * The account ID
   */
  accountId: number
  /**
   * The UTC start date in 24-h format: YYYY-MM-DD HH:mm:ss
   */
  beginTime: Date
  /**
   * The request priority
   */
  priority: number
  /**
   * The ACD queue ID
   */
  acdQueueId?: number
  /**
   * The user ID
   */
  userId?: number
  /**
   * The waiting duration in seconds
   */
  waitingDuration?: number
  /**
   * The conversation duration in seconds
   */
  inServiceDuration?: number
  /**
   * The after service duration in seconds
   */
  afterServiceDuration?: number
  /**
   * The bound events
   */
  events?: ACDSessionEventInfo[]

}
export interface ACDSessionEventInfo{
  /**
   * The ACD session event ID
   */
  acdSessionEventId: number
  /**
   * The UTC start date in 24-h format: YYYY-MM-DD HH:mm:ss
   */
  time: Date
  /**
   * The event type name
   */
  type: string
  /**
   * The user ID
   */
  userId?: number
  /**
   * The custom data
   */
  customData?: string

}
export interface QueueInfo{
  /**
   * The ACD queue ID
   */
  acdQueueId: number
  /**
   * The queue name
   */
  acdQueueName: string
  /**
   * The application ID
   */
  applicationId?: number
  /**
   * The integer queue priority. The highest priority is 0
   */
  acdQueuePriority: number
  /**
   * The value in the range of [0.5 ... 1.0]. The value 1.0 means the service probability 100% in challenge with a lower priority queue
   */
  serviceProbability: number
  /**
   * Set false to disable the auto binding of operators to a queue by skills comparing
   */
  autoBinding: boolean
  /**
   * The maximum predicted waiting time in minutes. When a call is going to be enqueued to the queue, its predicted waiting time should be less or equal to the maximum predicted waiting time; otherwise, a call would be rejected
   */
  maxWaitingTime?: number
  /**
   * The maximum number of calls that can be enqueued into this queue
   */
  maxQueueSize?: number
  /**
   * The average service time in seconds. Specify the parameter to correct or initialize the waiting time prediction
   */
  averageServiceTime?: number
  /**
   * The ACD queue creating UTC date in 24-h format: YYYY-MM-DD HH:mm:ss
   */
  created: Date
  /**
   * The ACD queue editing UTC date in 24-h format: YYYY-MM-DD HH:mm:ss
   */
  modified: Date
  /**
   * The ACD queue deleting UTC date in 24-h format: YYYY-MM-DD HH:mm:ss
   */
  deleted?: Date
  /**
   * The queue users info
   */
  users?: QueueUsers[]
  /**
   * The queue skills info
   */
  skills?: QueueSkills[]
  /**
   * The service level thresholds in seconds
   */
  slThresholds?: number[]

}
export interface QueueSkills{
  /**
   * The skill ID
   */
  skillId: number
  /**
   * The skill name
   */
  skillName: string

}
export interface QueueUsers{
  /**
   * The user ID
   */
  userId: number

}
export interface ACDState{
  /**
   * The queues' states
   */
  acdQueues: ACDQueueState[]

}
export interface ACDOperatorAggregationGroup{
  /**
   * If aggregation was enabled, contains user ID for the results
   */
  userId?: string
  /**
   * If aggregation was enabled, contains UTC date for the results in 24-h 'YYYY-MM-DD' format
   */
  date?: Date
  /**
   * If aggregation was enabled, contains the 60-minute interval number from 1 to 24
   */
  hour?: number
  /**
   * List of records grouped by date or user ID according to the 'group' method call argument
   */
  statistics: ACDOperatorStatistics[]

}
export interface ACDOperatorStatusAggregationGroup{
  /**
   * If aggregation was enabled, contains user ID for the results
   */
  userId?: string
  /**
   * If aggregation was enabled, contains UTC date for the results in 24-h 'YYYY-MM-DD' format
   */
  date?: Date
  /**
   * If aggregation was enabled, contains the 60-minute interval number from 1 to 24
   */
  hour?: number
  /**
   * List of records grouped by date or user ID according to the 'group' method call argument
   */
  statistics: ACDOperatorStatusStatistics[]

}
export interface ACDOperatorStatistics{
  /**
   * If aggregation was enabled, contains user ID for the results
   */
  userId?: string
  /**
   * If aggregation was enabled, contains UTC date for the results in 24-h 'YYYY-MM-DD' format
   */
  date?: Date
  /**
   * If aggregation was enabled, contains the 60-minute interval number from 1 to 24
   */
  hour?: number
  /**
   * Delay between a call started to ring and operator answered it. Name is 'SpeedOfAnswer' if 'abbreviation' is set to 'false'
   */
  SA?: ACDStatisticsItem
  /**
   * Time between operator answering and ending a call. Name is 'TalkTime' if 'abbreviation' is set to 'false'
   */
  TT?: ACDStatisticsItem
  /**
   * Time between operator ended a call and changed status to a one different from the 'AFTER_SERVICE'. This time is tracked only if operator changed status to 'AFTER_SERVICE' after the call. Name is 'AfterCallWork' if 'abbreviation' is set to 'false'
   */
  ACW?: ACDStatisticsItem
  /**
   * Sum of 'TalkTime' and 'AfterCallWork'. Name is 'HandlingTime' if 'abbreviation' is set to 'false'
   */
  HT?: ACDStatisticsItem
  /**
   * Number of answered calls. Name is 'AnsweredCalls' if 'abbreviation' is set to 'false'
   */
  AC?: number
  /**
   * Number of unanswered calls. Name is 'UnansweredCalls' if 'abbreviation' is set to 'false'
   */
  UAC?: number
  /**
   * Sum of delays between calls started to ring and operator answered them, in seconds. Name is 'TotalDialingTime' if 'abbreviation' is set to 'false'
   */
  TDT?: number
  /**
   * Sum of 'HandlingTime', in seconds. Name is 'TotalHandlingTime' if 'abbreviation' is set to 'false'
   */
  THT?: number
  /**
   * Sum of 'TalkTime', in seconds. Name is 'TotalTalkTime' if 'abbreviation' is set to 'false'
   */
  TTT?: number
  /**
   * Sum of 'AfterCallWork', in seconds. Name is 'TotalAfterCallWork' if 'abbreviation' is set to 'false'
   */
  TACW?: number

}
export interface ACDOperatorStatusStatistics{
  /**
   * If aggregation was enabled, contains user ID  for the results
   */
  userId?: string
  /**
   * If aggregation was enabled, contains UTC date  for the results in 24-h 'YYYY-MM-DD' format
   */
  date?: Date
  /**
   * If aggregation was enabled, contains the  60-minute interval number from 1 to 24
   */
  hour?: number
  /**
   * The user statistics
   */
  acdStatus?: ACDOperatorStatusStatisticsDetail[]

}
export interface ACDOperatorStatusStatisticsDetail{
  /**
   * The OFFLINE status statistics
   */
  OFFLINE?: ACDStatisticsItem
  /**
   * The ONLINE status statistics
   */
  ONLINE?: ACDStatisticsItem
  /**
   * The READY status statistics
   */
  READY?: ACDStatisticsItem
  /**
   * The BANNED status statistics
   */
  BANNED?: ACDStatisticsItem
  /**
   * The IN_SERVICE status statistics
   */
  INSERVICE?: ACDStatisticsItem
  /**
   * The AFTER_SERVICE status statistics
   */
  AFTERSERVICE?: ACDStatisticsItem
  /**
   * The TIMEOUT status statistics
   */
  TIMEOUT?: ACDStatisticsItem
  /**
   * The DND status statistics
   */
  DND?: ACDStatisticsItem

}
export interface ACDQueueStatistics{
  /**
   * If aggregation was enabled, contains UTC date for the results in 24-h 'YYYY-MM-DD' format
   */
  date?: Date
  /**
   * If aggregation was enabled, contains the 60-minute interval number from 1 to 24
   */
  hour?: number
  /**
   * Delay between user called and operator answered the call (or call is terminated). Name is 'WaitingTime' if 'abbreviation' is set to 'false'
   */
  WT?: ACDStatisticsItem
  /**
   * Delay between a call started to ring and operator answered it. Name is 'SpeedOfAnswer' if 'abbreviation' is set to 'false'
   */
  SA?: ACDStatisticsItem
  /**
   * Time between user called Voximplant cloud and time they disconnect not reaching the operator. Name is 'AbandonmentTime' if 'abbreviation' is set to 'false'
   */
  AT?: ACDStatisticsItem
  /**
   * Sum of 'TalkTime' and 'AfterCallWork'. Name is 'HandlingTime' if 'abbreviation' is set to 'false'
   */
  HT?: ACDStatisticsItem
  /**
   * Time between operator answering and ending a call. Name is 'TalkTime' if 'abbreviation' is set to 'false'
   */
  TT?: ACDStatisticsItem
  /**
   * Time between operator ended a call and changed status to a one different from the 'AFTER_SERVICE'. This time is tracked only if operator changed status to 'AFTER_SERVICE' after the call. Name is 'AfterCallWork' if 'abbreviation' is set to 'false'
   */
  ACW?: ACDStatisticsItem
  /**
   * How many users are in the queue. Name is 'QueueLength' if 'abbreviation' is set to 'false'
   */
  QL?: ACDStatisticsItem
  /**
   * Total number of calls. Name is 'TotalCalls' if 'abbreviation' is set to 'false'
   */
  TC?: number
  /**
   * Number of answered calls. Name is 'AnsweredCalls' if 'abbreviation' is set to 'false'
   */
  AC?: ACDStatisticsCalls[]
  /**
   * Number of unanswered calls. Name is 'UnansweredCalls' if 'abbreviation' is set to 'false'
   */
  UAC?: ACDStatisticsCalls[]
  /**
   * Number of calls rejected by the ACD. Call is rejected if all operators are offline or banned, or queue length is exceeded, or predicted answer time exceeds maximum specified for the query. Name is 'RejectedCalls' if 'abbreviation' is set to 'false'
   */
  RC?: ACDStatisticsCalls[]
  /**
   * List of service levels. Name is 'ServiceLevel' if 'abbreviation' is set to 'false'
   */
  SL?: ACDQueueStatisticsServiceLevel[]
  /**
   * Sum of 'WaitingTime', in seconds. Name is 'TotalWaitingTime' if 'abbreviation' is set to 'false'
   */
  TWT?: number
  /**
   * Sum of 'SpeedOfAnswer', in seconds. Name is 'TotalSubmissionTime' if 'abbreviation' is set to 'false'
   */
  TST?: number
  /**
   * Sum for all times between user called Voximplant cloud and time they disconnect not reaching the operator, in seconds. Name is 'TotalAbandonmentTime' if 'abbreviation' is set to 'false'
   */
  TAT?: number
  /**
   * Sum of 'HandlingTime', in seconds. Name is 'TotalHandlingTime' if 'abbreviation' is set to 'false'
   */
  THT?: number
  /**
   * Sum of 'TalkTime', in seconds. Name is 'TotalTalkTime' if 'abbreviation' is set to 'false'
   */
  TTT?: number
  /**
   * Sum of 'AfterCallWork', in seconds. Name is 'TotalAfterCallWork' if 'abbreviation' is set to 'false'
   */
  TACW?: number

}
export interface ACDQueueStatisticsServiceLevel{
  /**
   * Maximum time, is seconds, user was waiting operator for a given service level
   */
  acceptableWaitingTime: number
  /**
   * Number of calls for a given service level
   */
  callCount: number
  /**
   * Percentage of calls for a given service level, from 0 (non-inclusive) up to 1 (all calls)
   */
  serviceLevel: number

}
export interface ACDStatisticsItem{
  /**
   * Minimum value over the aggregated interval, in seconds
   */
  min: number
  /**
   * Average value over the aggregated interval, in seconds
   */
  avg: number
  /**
   * Maximum value over the aggregated interval, in seconds
   */
  max: number
  /**
   * Samples count over the aggregated interval
   */
  count: number
  /**
   * Sum of all samples over the aggregated interval, in seconds
   */
  sum: number

}
export interface ACDStatisticsCalls{
  /**
   * Absolute number of calls
   */
  count: number
  /**
   * Percentage of answered/rejected/unanswered calls, is counted against total number of calls
   */
  percent: number

}
export interface ACDQueueState{
  /**
   * The ACD queue ID
   */
  acdQueueId: number
  /**
   * List of operators with the 'READY' state that can accept a call from this queue
   */
  readyOperators: ACDReadyOperatorState[]
  /**
   * Number of ready operators
   */
  readyOperatorsCount: number
  /**
   * List of operators with the 'READY' state that can't accept a call from this queue. Operator can't accept a call if they are temporarily banned or they are servicing a call right now
   */
  lockedOperators: ACDLockedOperatorState[]
  /**
   * Number of locked operators
   */
  lockedOperatorsCount: number
  /**
   * List of operators with the 'AFTER_SERVICE' state. This state is set right after a call is ended to indicate a call postprocessing
   */
  afterServiceOperators: ACDAfterServiceOperatorState[]
  /**
   * Number of operators with the 'AFTER SERVICE' state
   */
  afterServiceOperatorCount: number
  /**
   * List of calls enqueued into this queue that are being serviced right now by operators
   */
  servicingCalls: ACDServicingCallState[]
  /**
   * List of calls enqueued into this queue that are not yet serviced by operators
   */
  waitingCalls: ACDWaitingCallState[]

}
export interface ACDReadyOperatorState{
  /**
   * The user ID of the operator
   */
  userId: number
  /**
   * The user name of the operator
   */
  userName: string
  /**
   * The display user name of the operator
   */
  userDisplayName: string
  /**
   * The idle duration in seconds. The minimum of the duration after the last hangup and the duration after the operator status changing to READY
   */
  idleDuration: number

}
export interface ACDLockedOperatorState{
  /**
   * The user ID of the operator
   */
  userId: number
  /**
   * The user name of the operator
   */
  userName: string
  /**
   * The display user name of the operator
   */
  userDisplayName: string
  /**
   * The UTC time when the operator becomes unavailable in 24-h format: YYYY-MM-DD HH:mm:ss
   */
  unreached?: Date
  /**
   * The operator locks
   */
  locks?: ACDLock[]
  /**
   * The ACD operator calls
   */
  acdCalls?: ACDOperatorCall[]
  /**
   * The operator <a href='/docs/references/websdk/voximplant/operatoracdstatuses'>status string</a>. 'BANNED' string indicates temporarily <a href='/docs/guides/smartqueue/acdv1'>banned operators</a>. The following values are possible: READY, BANNED
   */
  status?: string

}
export interface ACDAfterServiceOperatorState{
  /**
   * The user ID of the operator
   */
  userId: number
  /**
   * The user name of the operator
   */
  userName: string
  /**
   * The display user name of the operator
   */
  userDisplayName: string
  /**
   * The operator <a href='/docs/references/websdk/voximplant/operatoracdstatuses'>status string</a>
   */
  status?: string

}
export interface ACDLock{
  /**
   * The ACD lock ID
   */
  id: string
  /**
   * The UTC lock created time in 24-h format: YYYY-MM-DD HH:mm:ss
   */
  created: Date

}
export interface ACDOperatorCall{
  /**
   * The ACD session history ID of the request
   */
  acdSessionHistoryId: number
  /**
   * The internal ACD session history ID
   */
  acdRequestId: string
  /**
   * The ACD queue ID
   */
  acdQueueId: number
  /**
   * The ACD queue name
   */
  acdQueueName: string
  /**
   * The client callerid
   */
  callerid?: string
  /**
   * The begin time of the request in 24-h format: YYYY-MM-DD HH:mm:ss
   */
  beginTime: Date
  /**
   * The submission time of the request in 24-h format: YYYY-MM-DD HH:mm:ss
   */
  submitted?: Date

}
export interface ACDServicingCallState{
  /**
   * The user ID of the operator
   */
  userId: number
  /**
   * The user name of the operator
   */
  userName: string
  /**
   * The display user name of the operator
   */
  userDisplayName: string
  /**
   * The request priority
   */
  priority: number
  /**
   * The client callerid
   */
  callerid?: string
  /**
   * The begin time of the request in 24-h format: YYYY-MM-DD HH:mm:ss
   */
  beginTime: Date
  /**
   * The waiting time before servicing in seconds
   */
  waitingTime: number
  /**
   * The ACD session history ID of the request
   */
  acdSessionHistoryId: number

}
export interface ACDWaitingCallState{
  /**
   * The user ID of the operator to try to service the request
   */
  userId?: number
  /**
   * The user name of the operator
   */
  userName: string
  /**
   * The display user name of the operator
   */
  userDisplayName: string
  /**
   * The request priority
   */
  priority: number
  /**
   * The client callerid
   */
  callerid?: string
  /**
   * The begin time of the request in 24-h format: YYYY-MM-DD HH:mm:ss
   */
  beginTime: Date
  /**
   * The waiting time in seconds
   */
  waitingTime: number
  /**
   * The predicted minutes left to start servicing
   */
  minutesToSubmit: number
  /**
   * The ACD session history ID of the request
   */
  acdSessionHistoryId: number

}
export interface NewPhoneInfo{
  /**
   * The phone ID
   */
  phoneId: number
  /**
   * The phone number
   */
  phoneNumber: string
  /**
   * The phone monthly charge
   */
  phonePrice: number
  /**
   * The phone installation price (without the first monthly fee)
   */
  phoneInstallationPrice: number
  /**
   * The phone country code (2 symbols)
   */
  phoneCountryCode: string
  /**
   * The charge period in 24-h format: Y-M-D H:m:s. Example: 0-1-0 0:0:0 is 1 month
   */
  phonePeriod: string
  /**
   * The phone category name (MOBILE, GEOGRAPHIC, TOLLFREE, MOSCOW495)
   */
  phoneCategoryName: string
  /**
   * The phone region name
   */
  phoneRegionName: string

}
export interface AttachedPhoneInfo{
  /**
   * The phone ID
   */
  phoneId: number
  /**
   * The phone number
   */
  phoneNumber: string
  /**
   * The phone monthly charge
   */
  phonePrice: number
  /**
   * The phone country code (2 symbols)
   */
  phoneCountryCode: string
  /**
   * The next renewal date in format: YYYY-MM-DD
   */
  phoneNextRenewal: Date
  /**
   * The purchase date in 24-h format: YYYY-MM-DD HH:mm:ss
   */
  phonePurchaseDate: Date
  /**
   * The flag of the frozen subscription
   */
  deactivated: boolean
  /**
   * The flag of the deleted subscription
   */
  canceled: boolean
  /**
   * The auto_charge flag
   */
  autoCharge: boolean
  /**
   * The id of the bound application
   */
  applicationId?: number
  /**
   * The name of the bound application
   */
  applicationName?: string
  /**
   * The id of the bound rule
   */
  ruleId?: number
  /**
   * The name of the bound rule
   */
  ruleName?: string
  /**
   * The phone category name (MOBILE, GEOGRAPHIC, TOLLFREE, MOSCOW495)
   */
  categoryName: string
  /**
   * The required account verification name
   */
  requiredVerification?: string
  /**
   * The account verification status. The following values are possible: REQUIRED, IN_PROGRESS, VERIFIED
   */
  verificationStatus?: string
  /**
   * Unverified phone hold until the date in format: YYYY-MM-DD (if the account verification is required). The number will be detached on that day automatically!
   */
  unverifiedHoldUntil?: Date
  /**
   * Unverified account can use the phone
   */
  canBeUsed: boolean
  /**
   * If <b>true</b>, SMS is supported for this phone number. SMS needs to be explicitly enabled via the [ControlSms] Management API before sending or receiving SMS. If SMS is supported and enabled, SMS can be sent from this phone number using the [SendSmsMessage] Management API and received using the [InboundSmsCallback] property of the HTTP callback. See <a href='/docs/guides/managementapi/callbacks'>this article</a> for HTTP callback details
   */
  isSmsSupported: boolean
  /**
   * If <b>true</b>, SMS sending and receiving is enabled for this phone number via the [ControlSms] Management API
   */
  isSmsEnabled: boolean
  /**
   * If set, the callback of an inbound SMS will be sent to this url, otherwise, it will be sent to the general account URL
   */
  incomingSmsCallbackUrl?: string
  /**
   * If <b>true</b>, you need to make a request to enable calls to emergency numbers
   */
  emergencyCallsToBeEnabled: boolean
  /**
   * If <b>true</b>, calls to emergency numbers are enabled
   */
  emergencyCallsEnabled: boolean
  /**
   * Phone number subscription ID
   */
  subscriptionId: number
  /**
   * Full application name, e.g. myapp.myaccount.n1.voximplant.com
   */
  extendedApplicationName?: string
  /**
   * Phone region name
   */
  phoneRegionName?: string
  /**
   * UTC date of an event associated with the number in 24-h format: YYYY-MM-DD HH:mm:ss
   */
  modified: Date

}
export interface NewAttachedPhoneInfo{
  /**
   * The phone ID
   */
  phoneId: number
  /**
   * The phone number
   */
  phoneNumber: string
  /**
   * The required account verification name
   */
  requiredVerification?: string
  /**
   * The account verification status. The following values are possible: REQUIRED, IN_PROGRESS, VERIFIED
   */
  verificationStatus?: string
  /**
   * Unverified phone hold until the date in format: YYYY-MM-DD (if the account verification is required). The number will be detached on that day automatically!
   */
  unverifiedHoldUntil?: Date

}
export interface PhoneNumberCountryInfo{
  /**
   * The country code
   */
  countryCode: string
  /**
   * The country phone prefix
   */
  phonePrefix: string
  /**
   * True if can list phone numbers
   */
  canListPhoneNumbers: boolean
  /**
   * The phone categories
   */
  phoneCategories: PhoneNumberCountryCategoryInfo[]
  /**
   * If <b>true</b>, you need to make a request to enable calls to emergency numbers
   */
  emergencyCallsToBeEnabled: boolean

}
export interface PhoneNumberCountryCategoryInfo{
  /**
   * The phone category name
   */
  phoneCategoryName: string
  /**
   * True if a country state is used to choose the phone with the category
   */
  countryHasStates: boolean
  /**
   * The localized country name
   */
  localizedCountryName: string
  /**
   * The localized phone category name
   */
  localizedPhoneCategoryName: string
  /**
   * The localized phone region name
   */
  localizedPhoneRegionName: string

}
export interface PhoneNumberCountryStateInfo{
  /**
   * The country state code
   */
  countryState: string
  /**
   * The full country state name
   */
  countryStateName: string

}
export interface PhoneNumberCountryRegionInfo{
  /**
   * The region ID
   */
  phoneRegionId: number
  /**
   * The full region name
   */
  phoneRegionName: string
  /**
   * The region phone prefix
   */
  phoneRegionCode: string
  /**
   * The phone number count in stock for the region
   */
  phoneCount: number
  /**
   * The account verification status. The following values are possible: REQUIRED, IN_PROGRESS, VERIFIED
   */
  verificationStatus?: string
  /**
   * The required account verification name
   */
  requiredVerification?: string
  /**
   * The phone monthly charge
   */
  phonePrice: number
  /**
   * The phone installation price (without the first monthly fee)
   */
  phoneInstallationPrice: number
  /**
   * The charge period in 24-h format: Y-M-D H:m:s. Example: 0-1-0 0:0:0 is 1 month
   */
  phonePeriod: string
  /**
   * The flag of the need proof of address
   */
  isNeedRegulationAddress?: boolean
  /**
   * The type of regulation address. The possible values are LOCAL, NATIONAL, WORLDWIDE
   */
  regulationAddressType?: string
  /**
   * If <b>true</b>, SMS is supported for phone numbers in this region. SMS needs to be explicitly enabled for a phone number via the [ControlSms] Management API before sending or receiving SMS. If SMS is supported and enabled, SMS can be sent from a phone number using the [SendSmsMessage] Management API and received using the [InboundSmsCallback] property of the HTTP callback. See <a href='/docs/guides/managementapi/callbacks'>this article</a> for HTTP callback details
   */
  isSmsSupported: boolean
  /**
   * [Array](MultipleNumbersPrice) with info about multiple numbers subscription for the child accounts
   */
  multipleNumbersPrice: MultipleNumbersPrice[]
  /**
   * The localized country name
   */
  localizedCountryName: string
  /**
   * The localized phone category name
   */
  localizedPhoneCategoryName: string
  /**
   * The localized phone region name
   */
  localizedPhoneRegionName: string

}
export interface MultipleNumbersPrice{
  /**
   * The number of subscriptions which must be purchased simultaneously to enable a multiple numbers subscription
   */
  count: number
  /**
   * The subscription price for one number, i.e., the total multiple numbers subscription price divided by the __count__ value
   */
  price: number
  /**
   * The installation price for one number, i.e., the total multiple numbers installation price divided by the __count__ value
   */
  installationPrice: number

}
export interface CallerIDInfo{
  /**
   * The callerID id
   */
  calleridId: number
  /**
   * The callerID number
   */
  calleridNumber: string
  /**
   * The active flag
   */
  active: boolean
  /**
   * The code entering attempts left for the unverified callerID
   */
  codeEnteringAttemptsLeft?: number
  /**
   * The verification call attempts left for the unverified callerID
   */
  verificationCallAttemptsLeft?: number
  /**
   * The verification ending date in format: YYYY-MM-DD (for the verified callerID)
   */
  verifiedUntil?: Date

}
export interface OutboundTestPhonenumberInfo{
  /**
   * The personal phone number
   */
  phoneNumber: string
  /**
   * The verification status
   */
  isVerified: boolean
  /**
   * The country code
   */
  countryCode: string

}
export interface ContactInfo{
  /**
   * The contact ID
   */
  contactId: number
  /**
   * The contact type. The following values are available: 'email'
   */
  contactType: string
  /**
   * The contact data (i.g. email)
   */
  contactData: string
  /**
   * The persistent flag
   */
  isPersistent: boolean
  /**
   * The contact description
   */
  description?: string
  /**
   * The verification code sending timeout is seconds
   */
  nextVerificationAfterSec?: number
  /**
   * The activation time in the UTC timezone in 24-h format: YYYY-MM-DD HH:mm:ss
   */
  verified?: Date
  /**
   * The attached notification group list. The following groups are available: 'news', 'tariff_changing', 'account', 'development'
   */
  notificationGroup?: string[]
  /**
   * The creation time in the UTC timezone in 24-h format: YYYY-MM-DD HH:mm:ss
   */
  created: Date
  /**
   * The contact editing UTC date in 24-h format: YYYY-MM-DD HH:mm:ss
   */
  modified: Date

}
export interface ACDQueueOperatorInfo{
  /**
   * The ACD queue ID
   */
  acdQueueId: number
  /**
   * The ACD queue name
   */
  acdQueueName: string
  /**
   * The user is bound to the ACD queue in manual mode if false
   */
  autoLink: boolean

}
export interface ClonedACDQueue{
  /**
   * The ACD queue ID
   */
  acdQueueId: number
  /**
   * The ACD queue name
   */
  acdQueueName: string

}
export interface SkillInfo{
  /**
   * The skill ID
   */
  skillId: number
  /**
   * The skill name
   */
  skillName: string

}
export interface ClonedACDSkill{
  /**
   * The ACD skill ID
   */
  skillId: number
  /**
   * The ACD skill name
   */
  skillName: string

}
export interface ExchangeRates{
  /**
   * The RUR exchange rate
   */
  RUR?: number
  /**
   * The EUR exchange rate
   */
  EUR?: number
  /**
   * The USD exchange rate. It's always equal to 1
   */
  USD?: number

}
export interface ResourcePrice{
  /**
   * The resource type name. The possible values are AUDIOHDCONFERENCE, AUDIOHDRECORD, AUDIORECORD, CALLLIST, CALLSESSION, DIALOGFLOW, IM, PSTN_IN_ALASKA, PSTN_IN_GB, PSTN_IN_GEOGRAPHIC, PSTN_IN_GEO_PH, PSTN_IN_RU, PSTN_IN_RU_TOLLFREE, PSTN_INTERNATIONAL, PSTNINTEST, PSTN_IN_TF_AR, PSTN_IN_TF_AT, PSTN_IN_TF_AU, PSTN_IN_TF_BE, PSTN_IN_TF_BR, PSTN_IN_TF_CA, PSTN_IN_TF_CO, PSTN_IN_TF_CY, PSTN_IN_TF_DE, PSTN_IN_TF_DK, PSTN_IN_TF_DO, PSTN_IN_TF_FI, PSTN_IN_TF_FR, PSTN_IN_TF_GB, PSTN_IN_TF_HR, PSTN_IN_TF_HU, PSTN_IN_TF_IL, PSTN_IN_TF_LT, PSTN_IN_TF_PE, PSTN_IN_TF_US, PSTN_IN_US, PSTNOUT, PSTNOUT_EEA, PSTNOUTEMERG, PSTNOUT_KZ, PSTNOUT_LOCAL, PSTN_OUT_LOCAL_RU, RELAYED_TRAFFIC, SIPOUT, SIPOUTVIDEO, SMSINPUT, SMSOUT, SMSOUT_INTERNATIONAL, TRANSCRIPTION, TTS_TEXT_GOOGLE, TTS_YANDEX, USER_LOGON, VIDEOCALL, VIDEORECORD, VOICEMAILDETECTION, VOIPIN, VOIPOUT, VOIPOUTVIDEO, YANDEXASR, ASR, ASR_GOOGLE_ENHANCED
   */
  resourceType: string
  /**
   * The price group array
   */
  priceGroups: PriceGroup[]

}
export interface PriceGroup{
  /**
   * The price group name. Example: Russia Mobile
   */
  priceGroupName: string
  /**
   * The price group ID
   */
  priceGroupId: number
  /**
   * The price for the 'num_resources_per_price' resource count
   */
  price: number
  /**
   * The resource count per price
   */
  numResourcesPerPrice: number
  /**
   * The resource rounding quantum
   */
  quantum: number
  /**
   * The available resource parameters
   */
  params: ResourceParams

}
export interface ResourceParams{
  /**
   * The allowed parameter prefixes. Example: 7495
   */
  allowed: string[]
  /**
   * The forbidden parameter prefixes. Example: 7800
   */
  forbidden?: string[]
  /**
   * The requested parameters. Example: 79263331122
   */
  requested?: string[]

}
export interface CallList{
  /**
   * The list ID
   */
  listId: number
  /**
   * The list name
   */
  listName: string
  /**
   * The priority of the call list
   */
  priority: number
  /**
   * The rule id
   */
  ruleId: number
  /**
   * The maximum number of simultaneous tasks
   */
  maxSimultaneous: number
  /**
   * The number of task attempts run, which failed to call
   */
  numAttempts: number
  /**
   * The date of submitted the list in 24-h format: YYYY-MM-DD HH:mm:ss
   */
  dtSubmit: Date
  /**
   * The completion date in 24-h format: YYYY-MM-DD HH:mm:ss
   */
  dtComplete?: Date
  /**
   * The interval between attempts in seconds
   */
  intervalSeconds: number
  /**
   * The status name. The possible values are __In progress__, __Completed__, __Canceled__
   */
  status: string

}
export interface CallListDetail{
  /**
   * The list ID
   */
  listId: number
  /**
   * Data for transmission to the script
   */
  customData: string
  /**
   * Time with which to start the job in 24-h format: HH:mm:ss
   */
  startExecutionTime: Date
  /**
   * Time after which the task cannot be performed in 24-h format: HH:mm:ss
   */
  finishExecutionTime: Date
  /**
   * Results of the task, if it was granted, or information about the runtime error
   */
  resultData: string
  /**
   * Date and time of the last attempt to perform a task
   */
  lastAttempt: string
  /**
   * Number of remaining attempts
   */
  attemptsLeft: number
  /**
   * The status ID. The possible values are __0__ (status = New), __1__ (status = In progress), __2__ (status = Processed), __3__ (status = Error), __4__ (status = Canceled)
   */
  statusId: number
  /**
   * The status name. The possible values are __New__ (status_id = 0), __In progress__ (status_id = 1), __Processed__ (status_id = 2), __Error__ (status_id = 3), __Canceled__ (status_id = 4)
   */
  status: string

}
export interface SIPRegistration{
  /**
   * The SIP registration ID
   */
  sipRegistrationId: number
  /**
   * The user name from sip proxy
   */
  sipUsername: string
  /**
   * The sip proxy
   */
  proxy: string
  /**
   * The last time updated
   */
  lastUpdated: number
  /**
   * The SIP authentications user
   */
  authUser?: string
  /**
   * The outbound proxy
   */
  outboundProxy?: string
  /**
   * The successful SIP registration
   */
  successful?: boolean
  /**
   * The status code from a SIP registration
   */
  statusCode?: number
  /**
   * The error message from a SIP registration
   */
  errorMessage?: string
  /**
   * The subscription deactivation flag. The SIP registration is frozen if true
   */
  deactivated: boolean
  /**
   * The next subscription renewal date in format: YYYY-MM-DD
   */
  nextSubscriptionRenewal: Date
  /**
   * The purchase date in 24-h format: YYYY-MM-DD HH:mm:ss
   */
  purchaseDate: Date
  /**
   * The subscription monthly charge
   */
  subscriptionPrice: string
  /**
   * SIP registration is persistent. Set false to activate it only on the user login
   */
  isPersistent: boolean
  /**
   * The id of the bound user
   */
  userId?: number
  /**
   * The name of the bound user
   */
  userName?: string
  /**
   * The id of the bound application
   */
  applicationId?: number
  /**
   * The name of the bound application
   */
  applicationName?: string
  /**
   * The id of the bound rule
   */
  ruleId?: number
  /**
   * The name of the bound rule
   */
  ruleName?: string

}
export interface AdminRole{
  /**
   * The admin role ID
   */
  adminRoleId: number
  /**
   * The admin role name
   */
  adminRoleName: string
  /**
   * If false the allowed and denied entries have no affect
   */
  adminRoleActive: boolean
  /**
   * It's a system role
   */
  systemRole: boolean
  /**
   * The admin role editing UTC date in 24-h format: YYYY-MM-DD HH:mm:ss
   */
  modified: Date
  /**
   * The allowed access entries (the API function names)
   */
  allowedEntries?: string[]
  /**
   * The denied access entries (the API function names)
   */
  deniedEntries?: string[]

}
export interface ClonedAdminRole{
  /**
   * The admin role ID
   */
  adminRoleId: number
  /**
   * The admin role name
   */
  adminRoleName: string

}
export interface AdminUser{
  /**
   * The admin user ID
   */
  adminUserId: number
  /**
   * The admin user name
   */
  adminUserName: string
  /**
   * The admin user display name
   */
  adminUserDisplayName: string
  /**
   * Login is allowed
   */
  adminUserActive: boolean
  /**
   * The admin user editing UTC date in 24-h format: YYYY-MM-DD HH:mm:ss
   */
  modified: Date
  /**
   * The allowed access entries (the API function names)
   */
  accessEntries?: string[]
  /**
   * The attached admin roles
   */
  adminRoles?: AdminRole[]

}
export interface ClonedAdminUser{
  /**
   * The admin user ID
   */
  adminUserId: number
  /**
   * The admin user name
   */
  adminUserName: string
  /**
   * The API key of the admin user
   */
  adminUserApiKey: string

}
export interface GetMoneyAmountToChargeResult{
  /**
   * The money amount of the subscriptions + plan + negative_balance in the specified currency
   */
  amount: number
  /**
   * The 'amount' value minus the positive account balance in the specified currency
   */
  minAmount: number
  /**
   * Exists if bank card payments are allowed. It's the maximum of the 'amount' in USD and the min_card_payment (10$)
   */
  bankCardAmountUsd?: number
  /**
   * Exists if bank card payments are allowed. It's the maximum of the 'min_amount' in USD and the min_card_payment (10$)
   */
  minBankCardAmountUsd?: number
  /**
   * Exists if robokassa payments are allowed. It's the maximum of the 'min_amount' in RUR and the min_robokassa_payment (500 RUR)
   */
  robokassaAmountRub?: number
  /**
   * Exists if robokassa payments are allowed. It's the maximum of the 'min_amount' in RUR and the min_robokassa_payment (500 RUR)
   */
  minRobokassaAmountRub?: number
  /**
   * The subscriptions to charge
   */
  subscriptions: SubscriptionsToCharge[]

}
export interface ChargeAccountResult{
  /**
   * The charged money amount
   */
  chargedAmount: number
  /**
   * The charged phone list
   */
  phones?: ChargedPhone[]

}
export interface ChargedPhone{
  /**
   * The phone ID
   */
  phoneId: number
  /**
   * The phone number
   */
  phoneNumber: string
  /**
   * Subscription is frozen
   */
  deactivated: boolean
  /**
   * Phone number has been charged
   */
  isCharged: boolean

}
export interface SubscriptionsToCharge{
  /**
   * The money amount to charge in the specified currency
   */
  subscriptionAmount: number
  /**
   * The subscription type, example: PHONE_NUM, SIP_REGISTRATION
   */
  subscriptionType: string
  /**
   * The subscription description (details). Example: the subscribed phone number
   */
  subscriptionDescription: string
  /**
   * The auto charge flag
   */
  subscriptionAutoCharge: boolean
  /**
   * The next renewal date, format: YYYY-MM-DD. Displayed for only verified phone numbers
   */
  subscriptionNextRenewal?: Date

}
export interface AuthorizedAccountIP{
  /**
   * The authorized IP4 or network
   */
  authorizedIp: string
  /**
   * The allowed flag (true - whitelist, false - blacklist)
   */
  allowed: boolean
  /**
   * The item creating UTC date in 24-h format: YYYY-MM-DD HH:mm:ss
   */
  created: Date

}
export interface ContractorInfo{
  /**
   * Russian-specific ID for tax purposes
   */
  inn: string
  /**
   * Additional Russian-specific ID for tax purposes for businesses; there is no KPP for individual entrepreneurs
   */
  kpp?: string
  /**
   * The full company name
   */
  companyName: string
  /**
   * The full company address with a postcode
   */
  companyAddress: string
  /**
   * The company phone
   */
  companyPhone?: string
  /**
   * The correspondence address
   */
  correspondenceAddress?: string
  /**
   * The correspondence email
   */
  correspondenceEmail?: string
  /**
   * The correspondence to
   */
  correspondenceTo?: string
  /**
   * The contract info
   */
  contract?: ContractInfo

}
export interface ContractInfo{
  /**
   * The agreement number
   */
  agreementNumber?: string
  /**
   * The agreement date in format: YYYY-MM-DD
   */
  agreementDate?: Date

}
export interface ContractorInvoice{
  /**
   * The invoice number
   */
  invoiceNumber: string
  /**
   * The invoice date in format: YYYY-MM-DD
   */
  invoiceDate: Date
  /**
   * The post payment flag
   */
  isPostPayment: boolean
  /**
   * The from date in format: YYYY-MM-DD
   */
  fromDate?: Date
  /**
   * The to date in format: YYYY-MM-DD
   */
  toDate?: Date
  /**
   * The total invoice amount (RUR)
   */
  totalAmount: number
  /**
   * The paid amount (RUR)
   */
  paidAmount?: number
  /**
   * The service list
   */
  services: ContractorInvoiceService

}
export interface ContractorInvoiceService{
  /**
   * The service name
   */
  serviceName: string
  /**
   * The service cost (RUR)
   */
  serviceCost: number

}
export interface AccountVerificationDocument{
  /**
   * The account verification document ID
   */
  accountDocumentId: number
  /**
   * Account belongs to an individual
   */
  isIndividual: boolean
  /**
   * The reviewer's comment
   */
  comment?: string
  /**
   * The UTC date of the document upload in format: YYYY-MM-DD HH::mm:ss
   */
  uploaded: Date
  /**
   * The account document status. The following values are possible: ACCEPTED, REJECTED, IN_PROGRESS, INCOMPLETE_SET
   */
  accountDocumentStatus: string

}
export interface AccountVerification{
  /**
   * The verification name
   */
  verificationName: string
  /**
   * The account verification status. The following values are possible: REQUIRED, IN_PROGRESS, VERIFIED, NOT_REQUIRED
   */
  verificationStatus: string
  /**
   * Unverified subscriptions hold until the date in format: YYYY-MM-DD (if the account verification is required). Some subscriptions will be detached on that day automatically!
   */
  unverifiedHoldUntil?: Date
  /**
   * The uploaded documents
   */
  documents?: AccountVerificationDocument[]

}
export interface AccountVerifications{
  /**
   * The account ID
   */
  accountId: number
  /**
   * The account verifications
   */
  verifications: AccountVerification[]

}
export interface SubscriptionTemplate{
  /**
   * The subscription template ID
   */
  subscriptionTemplateId: number
  /**
   * ID of the original currency
   */
  currencyId: number
  /**
   * The subscription installation price (without the first monthly fee)
   */
  installationPrice: number
  /**
   * The subscription installation price in the original currency
   */
  installationPriceInCurrency: number
  /**
   * The subscription monthly fee, including taxes and discounts
   */
  price: number
  /**
   * The subscription monthly fee in the original currency
   */
  priceInCurrency: number
  /**
   * The charge period in 24-h format: Y-M-D H:m:s. Example: 0-1-0 0:0:0 is 1 month
   */
  period: string
  /**
   * The subscription template type. The following values are possible: PHONE_NUM, SIP_REGISTRATION
   */
  subscriptionTemplateType: string
  /**
   * The subscription template name (example: SIP registration, Phone GB, Phone RU 495, ...)
   */
  subscriptionTemplateName: string
  /**
   * The name of the required verification
   */
  requiredVerification: string
  /**
   * The verification status. Possible values are REQUIRED, IN_PROGRESS, VERIFIED, NOT_REQUIRED
   */
  verificationStatus: string

}
export interface AccountCallbacks{
  /**
   * The account callback array
   */
  callbacks: AccountCallback[]

}
export interface AccountCallback{
  /**
   * The callback ID (sequence)
   */
  callbackId: number
  /**
   * The callback type
   */
  type: string
  /**
   * The account ID
   */
  accountId: number
  /**
   * The security hash: hash = md5(account_salt + account_id + api_key + callback_id). Example: 50c5fe2290cd7409b37e673b8b05e495
   */
  hash: string
  /**
   * The account name
   */
  accountName: string
  /**
   * The account email
   */
  accountEmail: string
  /**
   * The notification language code (2 symbols, ISO639-1). Examples: en, ru
   */
  languageCode: string
  /**
   * The first name
   */
  accountFirstName: string
  /**
   * The last name
   */
  accountLastName: string
  /**
   * The account's money
   */
  balance: number
  /**
   * The currency code (USD, RUR, EUR, ...)
   */
  currency: string
  /**
   * Deprecated. Please use the unified <b>account_document_status_updated</b> callback instead
   */
  accountDocumentUploaded?: AccountDocumentUploadedCallback
  /**
   * Received when proof of address is uploaded
   */
  regulationAddressUploaded?: RegulationAddressUploadedCallback
  /**
   * Deprecated. Please use the unified <b>account_document_status_updated</b> callback instead
   */
  accountDocumentVerified?: AccountDocumentVerifiedCallback
  /**
   * Received when an account is frozen
   */
  accountIsFrozen?: AccountIsFrozenCallback
  /**
   * Received when an account is unfrozen
   */
  accountIsUnfrozen?: AccountIsUnfrozenCallback
  /**
   * Received when a new (not child) account is created
   */
  activateSuccessful?: ActivateSuccessfulCallback
  /**
   * Received when a call history report is ready
   */
  callHistoryReport?: CallHistoryReportCallback
  /**
   * Received when a card is expired
   */
  cardExpired?: CardExpiredCallback
  /**
   * Received when one month is left for a card to be expired
   */
  cardExpiresInMonth?: CardExpiresInMonthCallback
  /**
   * Received when a bank card payment is made
   */
  cardPayment?: CardPaymentCallback
  /**
   * Received when a bank card payment is failed
   */
  cardPaymentFailed?: CardPaymentFailedCallback
  /**
   * Received when a robokassa payment is made
   */
  robokassaPayment?: RobokassaPaymentCallback
  /**
   * Received when a wire transfer is made
   */
  wireTransfer?: WireTransferCallback
  /**
   * Received when <b>send_js_error</b> is set to true and a JS error occures. See the 'send_js_error' parameter of the 'SetAccountInfo' function
   */
  jsFail?: JSFailCallback
  /**
   * Received when the minimum balance is reached
   */
  minBalance?: MinBalanceCallback
  /**
   * Received when proof of address is verified
   */
  regulationAddressVerified?: RegulationAddressVerifiedCallback
  /**
   * Received when subscriptions are renewed
   */
  renewedSubscriptions?: RenewedSubscriptionsCallback
  /**
   * Received when an account password reset is requested
   */
  resetAccountPasswordRequest?: ResetAccountPasswordRequestCallback
  /**
   * Received when one or several SIP registrations are failed
   */
  sipRegistrationFail?: SIPRegistrationFailCallback
  /**
   * Received when one or several SIP registrations are recovered
   */
  sipRegistrationRecovered?: SIPRegistrationRecoveredCallback
  /**
   * Received when a subscription is frozen
   */
  subscriptionIsFrozen?: SubscriptionIsFrozenCallback
  /**
   * Received when a subscription is canceled
   */
  subscriptionIsDetached?: SubscriptionIsDetachedCallback
  /**
   * Received when a transaction history report is ready
   */
  transactionHistoryReport?: TransactionHistoryReportCallback
  /**
   * Received when an unverified subscription is canceled
   */
  unverifiedSubscriptionDetached?: UnverifiedSubscriptionDetachedCallback
  /**
   * Received when a caller ID is about to be expired
   */
  expiringCallerid?: ExpiringCallerIDCallback
  /**
   * Received when a transcription is saved
   */
  transcriptionComplete?: TranscriptionCompleteCallback
  /**
   * Received when an inbound SMS is gotten
   */
  smsInbound?: InboundSmsCallback
  /**
   * Received for the accounts for which the confirmation documents waiting period expires in 20/15/10/5/1 day(s)
   */
  expiringAgreement?: ExpiringAgreementCallback
  /**
   * Received for the accounts for which the confirmation documents waiting period has already expired or expires today
   */
  expiredAgreement?: ExpiredAgreementCallback
  /**
   * Received when an expiration date of the confirmation documents waiting period is changed
   */
  restoredAgreementStatus?: RestoredAgreementStatusCallback
  /**
   * Received when a plan is to be renewed in 3 days, but there is not enough money
   */
  nextChargeAlert?: NextChargeAlertCallback
  /**
   * Deprecated. Please use the <b>expired_certificates</b> and <b>expiring_certificates</b> callbacks instead
   */
  certificateExpired?: CertificateExpiredCallback
  /**
   * Received for the accounts whose Apple VOIP certificates are expired
   */
  expiredCertificates?: ExpiredCertificateCallback
  /**
   * Received for the accounts whose Apple VOIP certificates expire in 14 or fewer days
   */
  expiringCertificates?: ExpiringCertificateCallback
  /**
   * Received when the verification status is updated
   */
  accountDocumentStatusUpdated?: AccountDocumentStatusUpdatedCallback
  /**
   * Received when A2P SMS are activated
   */
  a2pSmsActivated?: A2PActivatedCallback
  /**
   * Received when the verification status is changed to PENDING
   */
  regulationAddressDocumentsRequested?: RegulationAddressDocumentsRequestedCallback
  /**
   * Received when a monthly invoice is sent
   */
  invoiceReceived?: InvoiceReceivedCallback

}
export interface A2PSmsDeliveryCallback{
  /**
   * The SMS delivery ID
   */
  id: number
  /**
   * The source number
   */
  sourceNumber: string
  /**
   * The SMS delivery status
   */
  status: string
  /**
   * The destination number(s)
   */
  destinationNumbers?: string

}
export interface AccountDocumentUploadedCallback{
  /**
   * The uploaded document ID. See GetAccountDocuments
   */
  accountDocumentId: number
  /**
   * The UTC date of the document upload in format: YYYY-MM-DD HH::mm:ss
   */
  uploaded: Date
  /**
   * The verification name (type)
   */
  verificationName: string
  /**
   * Status of the user in the context of entrepreneurial activity. Possible values are 'individual', 'entrepreneur', 'legal entity'
   */
  legalStatus: string

}
export interface BalanceIsChanged{
  

}
export interface RegulationAddressUploadedCallback{
  /**
   * The uploaded document ID. See GetRegulationsAddress
   */
  regulationAddressId: number
  /**
   * The UTC date of the document upload in format: YYYY-MM-DD HH::mm:ss
   */
  uploaded: Date
  /**
   * Account belongs to an individual
   */
  isIndividual: boolean
  /**
   * The regulation address name
   */
  regulationAddressName: string

}
export interface AccountDocumentVerifiedCallback{
  /**
   * The uploaded document ID
   */
  accountDocumentId: number
  /**
   * The document verification status. The following values are possible: WAITING_CONFIRMATION_DOCS, VERIFIED, REJECTED
   */
  accountDocumentStatus: string
  /**
   * The UTC date of the document upload in format: YYYY-MM-DD HH::mm:ss
   */
  uploaded: Date
  /**
   * The reviewer's comment
   */
  comment?: string
  /**
   * The verification name (type)
   */
  verificationName: string
  /**
   * Status of the user in the context of entrepreneurial activity. Possible values are 'individual', 'entrepreneur', 'legal entity'
   */
  legalStatus: string

}
export interface AccountIsFrozenCallback{
  

}
export interface AccountIsUnfrozenCallback{
  

}
export interface ActivateSuccessfulCallback{
  

}
export interface CallHistoryReportCallback{
  /**
   * The history report ID
   */
  historyReportId: number
  /**
   * Success flag
   */
  success: boolean
  /**
   * The UTC order date in format: YYYY-MM-DD HH::mm:ss
   */
  orderDate: Date

}
export interface CardExpiredCallback{
  

}
export interface CardExpiresInMonthCallback{
  

}
export interface CardPaymentCallback{
  /**
   * The transaction ID
   */
  transactionId: number
  /**
   * The transaction type
   */
  transactionType: string
  /**
   * The amount in the account currency
   */
  amount: number

}
export interface CardPaymentFailedCallback{
  

}
export interface RobokassaPaymentCallback{
  /**
   * The transaction ID
   */
  transactionId: number
  /**
   * The transaction type
   */
  transactionType: string
  /**
   * The amount in the account currency
   */
  amount: number

}
export interface WireTransferCallback{
  /**
   * The transaction ID
   */
  transactionId: number
  /**
   * The transaction type
   */
  transactionType: string
  /**
   * The amount in the account currency
   */
  amount: number

}
export interface JSFailCallback{
  

}
export interface MinBalanceCallback{
  /**
   * True if the credit threshold exceeded. The credit threshold = credit_limit - min_balance_to_notify, wherein min_balance_to_notify > 0
   */
  isMinCredit: boolean
  /**
   * True if the callback is repeated
   */
  isRepeated: boolean

}
export interface RegulationAddressVerifiedCallback{
  /**
   * The uploaded document ID
   */
  regulationAddressId: number
  /**
   * The document verification status. The following values are possible: IN_PROGRESS, VERIFIED, DECLINED, PENDING
   */
  regulationAddressStatus: string
  /**
   * The UTC date of the document upload in format: YYYY-MM-DD HH::mm:ss
   */
  uploaded: Date
  /**
   * Account belongs to an individual
   */
  isIndividual: boolean
  /**
   * The reviewer's comment
   */
  comment?: string
  /**
   * The regulation address name
   */
  regulationAddressName: string

}
export interface RenewedSubscriptionsCallback{
  /**
   * The renewed subscription list
   */
  subscriptions: RenewedSubscriptionsCallbackItem[]

}
export interface RenewedSubscriptionsCallbackItem{
  /**
   * The subscription type, example: PHONE_NUM, SIP_REGISTRATION, PLAN
   */
  type: string
  /**
   * The subscription description (details). Example: the subscribed phone number
   */
  name: string
  /**
   * The subscription cost
   */
  cost: number
  /**
   * The next renewal date, format: YYYY-MM-DD
   */
  nextRenewal: Date
  /**
   * Info about the phone numbers or sip registrations that the subscription is attached to
   */
  details: SubscriptionCallbackDetails[]

}
export interface ResetAccountPasswordRequestCallback{
  

}
export interface SIPRegistrationFailCallback{
  /**
   * SIP registration array
   */
  sipRegistrations: SIPRegistrationIsFailedCallbackItem[]

}
export interface SIPRegistrationIsFailedCallbackItem{
  /**
   * SIP registration ID
   */
  sipRegistrationId: number
  /**
   * Status code from a SIP registration
   */
  statusCode: string
  /**
   * Error message from a SIP registration
   */
  errorMessage?: string

}
export interface SIPRegistrationRecoveredCallback{
  /**
   * SIP registration array
   */
  sipRegistrations: SIPRegistrationIsRecoveredCallbackItem[]

}
export interface SIPRegistrationIsRecoveredCallbackItem{
  /**
   * SIP registration ID
   */
  sipRegistrationId: number

}
export interface SubscriptionIsDetachedCallback{
  /**
   * The detached subscription list
   */
  subscriptions: SubscriptionIsDetachedCallbackItem[]

}
export interface SubscriptionIsDetachedCallbackItem{
  /**
   * The subscription type, example: PHONE_NUM, SIP_REGISTRATION
   */
  type: string
  /**
   * The subscription description (details). Example: the subscribed phone number
   */
  name: string
  /**
   * Info about the phone numbers or sip registrations that the subscription is attached to
   */
  details: SubscriptionCallbackDetails[]

}
export interface SubscriptionIsFrozenCallback{
  /**
   * The frozen subscription list
   */
  subscriptions: SubscriptionIsFrozenCallbackItem[]

}
export interface SubscriptionIsFrozenCallbackItem{
  /**
   * The subscription type, example: PHONE_NUM, SIP_REGISTRATION
   */
  type: string
  /**
   * The subscription description (details). Example: the subscribed phone number
   */
  name: string
  /**
   * The subscription cost
   */
  cost: number
  /**
   * Info about the phone numbers or sip registrations that the subscription is attached to
   */
  details: SubscriptionCallbackDetails[]

}
export interface StagnantAccountCallback{
  

}
export interface TransactionHistoryReportCallback{
  /**
   * The history report ID
   */
  historyReportId: number
  /**
   * Success flag
   */
  success: boolean
  /**
   * The UTC order date in format: YYYY-MM-DD HH::mm:ss
   */
  orderDate: Date

}
export interface PlanConfigCallback{
  /**
   * The plan type. The possible values are IM, MAU
   */
  planType: string
  /**
   * The plan name
   */
  planName: string
  /**
   * The account plan package array
   */
  packages: PlanPackageConfig[]

}
export interface PlanPackageConfig{
  /**
   * The price group IDs
   */
  priceGroupId: number[]
  /**
   * The package name
   */
  packageName?: string
  /**
   * The package UUID
   */
  packageUuid: string
  /**
   * Overrun is enabled
   */
  mayOverrun: boolean
  /**
   * The current package size (including overrun)
   */
  packageSize: number

}
export interface UnverifiedSubscriptionDetachedCallback{
  /**
   * The frozen subscription list
   */
  subscriptions: UnverifiedSubscriptionDetachedCallbackItem[]

}
export interface UnverifiedSubscriptionDetachedCallbackItem{
  /**
   * The subscription type, example: PHONE_NUM, SIP_REGISTRATION
   */
  type: string
  /**
   * The subscription description (details). Example: the subscribed phone number
   */
  name: string
  /**
   * Info about the phone numbers or sip registrations that the subscription is attached to
   */
  details: SubscriptionCallbackDetails[]

}
export interface ExpiringCallerIDCallback{
  /**
   * The list of expiring Caller IDs
   */
  callerids: string[]
  /**
   * The Caller IDs expiration date in YYYY-MM-DD format
   */
  expirationDate: Date

}
export interface ExpiredCallerIDCallback{
  /**
   * The list of the expired Caller IDs
   */
  callerids: string[]

}
export interface TranscriptionCompleteCallback{
  /**
   * The transcription info
   */
  transcriptionComplete: TranscriptionCompleteCallbackItem

}
export interface TranscriptionCompleteCallbackItem{
  /**
   * The record url
   */
  recordUrl: string
  /**
   * Transcription URL. To open the URL, please add authorization parameters and <b>record_id</b> to it
   */
  transcriptionUrl: string
  /**
   * The call session history id
   */
  callSessionHistoryId: number
  /**
   * The cost of transcription
   */
  transcriptionCost: number

}
export interface ExpiringAgreementCallback{
  /**
   * The date of agreement expiration in format: YYYY-MM-DD
   */
  expirationDate: Date
  /**
   * The number of days left until an expiration date
   */
  untilExpiration: number

}
export interface NextChargeAlertCallback{
  /**
   * The price (in the account currency) of all subscription plans to be renewed on the 1st day of the month
   */
  requiredMoney: number
  /**
   * The amount of money in the account currency required to renew the subscription plans
   */
  insufficientFundsAmount: number

}
export interface CertificateExpiredCallback{
  

}
export interface ExpiredCertificateCallback{
  /**
   * The expired certificates info
   */
  certificates: CertificateInfo[]

}
export interface ExpiringCertificateCallback{
  /**
   * The expiring certificates info
   */
  certificates: CertificateInfo[]

}
export interface CertificateInfo{
  /**
   * The push credential id
   */
  pushCredentialId: number
  /**
   * The push certificate file name
   */
  certFileName: string
  /**
   * The push certificate expiration date in YYYY-MM-DD format
   */
  expirationDate?: Date
  /**
   * Array of application names
   */
  applications?: string[]

}
export interface SubscriptionCallbackDetails{
  /**
   * Type that the subscription is attached to. Possible values are PHONE and SIP_REGISTRATION
   */
  type: string
  /**
   * Object containing the subscription's phone numbers and their ids if type = PHONE
   */
  phoneNumbers?: SubscriptionCallbackDetailsPhoneNumbers[]
  /**
   * Object containing the subscription's sip registrations ids if type = SIP_REGISTRATION
   */
  sipRegistrations?: SubscriptionCallbackDetailsSipRegistrations[]

}
export interface SubscriptionCallbackDetailsPhoneNumbers{
  /**
   * Phone number id
   */
  phoneId: number
  /**
   * Phone number
   */
  phoneNumber: string

}
export interface SubscriptionCallbackDetailsSipRegistrations{
  /**
   * Sip registration id
   */
  sipRegistrationId: number

}
export interface A2PActivatedCallback{
  /**
   * A2P messages are allowed
   */
  a2pEnabled: boolean

}
export interface AccountDocumentStatusUpdatedCallback{
  /**
   * Uploaded document ID
   */
  accountDocumentId: number
  /**
   * Previous document verification status. The following values are possible: WAITING_CONFIRMATION_DOCS, VERIFIED, REJECTED
   */
  previousAccountDocumentStatus: string
  /**
   * Document verification status. The following values are possible: WAITING_CONFIRMATION_DOCS, VERIFIED, REJECTED
   */
  accountDocumentStatus: string
  /**
   * UTC time when the status is updated
   */
  updateTime: Date
  /**
   * Reviewer's comment
   */
  comment?: string
  /**
   * Status of the user in the context of entrepreneurial activity. Possible values are 'individual', 'entrepreneur', 'legal entity'
   */
  legalStatus: string

}
export interface RegulationAddressDocumentsRequestedCallback{
  /**
   * Uploaded document ID
   */
  regulationAddressId: number
  /**
   * Uploaded document name
   */
  regulationAddressName: string
  /**
   * Document verification status. The following values are possible: IN_PROGRESS, VERIFIED, DECLINED, PENDING
   */
  regulationAddressStatus: string
  /**
   * UTC time when the status is updated
   */
  updateTime: Date
  /**
   * Account belongs to an individual
   */
  isIndividual: boolean
  /**
   * Reviewer's comment
   */
  comment?: string

}
export interface InvoiceReceivedCallback{
  /**
   * Invoice ID
   */
  invoiceId: number
  /**
   * Date when invoice is created
   */
  invoiceDate: Date
  /**
   * Date when invoice is received
   */
  receivalDate: Date
  /**
   * Amount of money in the invoice (excluding taxes)
   */
  amount: string
  /**
   * Tax amount in the invoice
   */
  taxAmount: string
  /**
   * Invoice currency
   */
  currency: string

}
export interface ZipCode{
  /**
   * The city name
   */
  city: string
  /**
   * The zip code
   */
  zipCode: string

}
export interface RegulationCountry{
  /**
   * The country code A2
   */
  countryCode: string
  /**
   * The country name
   */
  countryName: string

}
export interface RegulationAddress{
  /**
   * The regulation address ID
   */
  regulationAddressId: number
  /**
   * The external ID
   */
  externalId: string
  /**
   * The country code
   */
  countryCode: string
  /**
   * The phone category name
   */
  phoneCategoryName: string
  /**
   * The salutation. Possible values: MR, MS, COMPANY
   */
  salutation: string
  /**
   * The company name
   */
  company?: string
  /**
   * The first name
   */
  firstName?: string
  /**
   * The last name
   */
  lastName?: string
  /**
   * The owner country code
   */
  ownerCountryCode?: string
  /**
   * The city name
   */
  city: string
  /**
   * The zip code
   */
  zipCode: string
  /**
   * The zip code
   */
  street: string
  /**
   * The builder number
   */
  builderNumber: string
  /**
   * The builder latter
   */
  builderLatter?: string
  /**
   * The status verification. Possible values: IN_PROGRESS, VERIFIED, DECLINED
   */
  status?: string
  /**
   * The reject message
   */
  rejectMessage?: string

}
export interface RegulationRegionRecord{
  /**
   * The regulation address ID
   */
  phoneRegionId: number
  /**
   * The region name
   */
  phoneRegionName: string
  /**
   * The phone region code 
   */
  phoneRegionCode: string
  /**
   * The need to confirm the address
   */
  isNeedRegulationAddress: boolean
  /**
   * The regulation address type. Available: LOCAL, NATIONAL, WORLDWIDE
   */
  regulationAddressType: string

}
export interface BankCard{
  /**
   * The payment system. The possible values are ALFABANK, BRAINTREE
   */
  bankCardProvider: string
  /**
   * The auto_charge flag
   */
  autoCharge: boolean
  /**
   * The min account balance to trigger the auto charging
   */
  minBalance : number
  /**
   * The card overrun value in the account currency
   */
  cardOverrunValue: number
  /**
   * The card expiration year
   */
  expirationYear: number
  /**
   * The card expiration month
   */
  expirationMonth: number
  /**
   * The last card number digits
   */
  acct: number
  /**
   * The last card error
   */
  lastError?: BankCardError
  /**
   * The cardholder’s first name and last name
   */
  cardHolder?: string
  /**
   * The card's payment system. The possible values are VISA, MASTER CARD
   */
  cardType?: string

}
export interface BankCardError{
  /**
   * The error date in 24-h format: YYYY-MM-DD HH:mm:ss
   */
  date: Date
  /**
   * The error message
   */
  msg: string
  /**
   * The amount in the payment currency
   */
  amount?: number
  /**
   * The payment currency
   */
  currency?: string

}
export interface AllocateAlfaBankPaymentResult{
  /**
   * The URL to redirect
   */
  formUrl: string
  /**
   * The payment ID
   */
  paymentId : string

}
export interface PstnBlackListInfo{
  /**
   * The black list item ID
   */
  pstnBlacklistId: number
  /**
   * The phone number
   */
  pstnBlacklistPhone : string

}
export interface DialogflowKeyInfo{
  /**
   * The Dialogflow key's id
   */
  dialogflowKeyId: number
  /**
   * The key's content
   */
  content?: DialogflowKey
  /**
   * Bound applications
   */
  applications?: ApplicationInfo[]

}
export interface DialogflowKey{
  /**
   * The project ID from Json Web Key
   */
  projectId: string

}
export interface PushCredentialInfo{
  /**
   * The push credential id
   */
  pushCredentialId: number
  /**
   * The push provider id
   */
  pushProviderId: number
  /**
   * The push provider name. The possible values are APPLE, APPLE_VOIP, GOOGLE, HUAWEI
   */
  pushProviderName: string
  /**
   * The bundle of Android/iOS application
   */
  credentialBundle?: string
  /**
   * The credentials content
   */
  content?: PushCredentialContent[]
  /**
   * Bound applications
   */
  applications?: ApplicationInfo[]

}
export interface PushCredentialContent{
  /**
   * The file name. Credentials for APPLE push
   */
  certFileName?: string
  /**
   * The certificate content in BASE64. Credentials for APPLE push
   */
  certContent?: string
  /**
   * The use in a Apple sandbox environment. Credentials for APPLE push
   */
  isDevMode: boolean
  /**
   * The sender id provided by Google. Credentials for GOOGLE push
   */
  senderId?: string
  /**
   * The client id, provided by Huawei. Credentials for HUAWEI push
   */
  huaweiClientId: string
  /**
   * The application id, provided by Huawei. Credentials for HUAWEI push
   */
  huaweiApplicationId: string

}
export interface InboundSmsCallback{
  /**
   * The inbound SMS info
   */
  smsInbound: InboundSmsCallbackItem

}
export interface InboundSmsCallbackItem{
  /**
   * The source phone number
   */
  sourceNumber: string
  /**
   * The destination phone number
   */
  destinationNumber: string
  /**
   * The message
   */
  smsBody: string

}
export interface NewInvoiceCallback{
  /**
   * The invoice info
   */
  newInvoice: NewInvoiceCallbackItem

}
export interface NewInvoiceCallbackItem{
  /**
   * The invoice unique number
   */
  invoiceNumber: string
  /**
   * The invoice date
   */
  invoiceDate: string
  /**
   * It's a prepayment
   */
  prepayment: boolean
  /**
   * The invoice currency
   */
  currency: string
  /**
   * The invoice's total amount including taxes
   */
  totalAmount: number
  /**
   * The total amount of taxes
   */
  totalTaxAmount: number
  /**
   * Array with the services that were provided
   */
  units: InvoiceUnits[]

}
export interface InvoiceUnits{
  /**
   * The service name
   */
  description: string
  /**
   * The service fee (excluding taxes)
   */
  amount?: number
  /**
   * The tax rate in the range of [0 ... 1]
   */
  vatRate: number
  /**
   * The tax amount
   */
  taxAmount: number

}
export interface RecordStorageInfo{
  /**
   * The record storage ID
   */
  recordStorageId?: number
  /**
   * The record storage name
   */
  recordStorageName?: string

}
export interface MGPInfo{
  /**
   * The MGP ID
   */
  mgpId: number
  /**
   * The MGP template ID
   */
  mgpTemplateId: number
  /**
   * The MGP template price
   */
  mgpTemplatePrice: number
  /**
   * The MGP template currency
   */
  mgpTemplateCurrency: string
  /**
   * The MGP activation date
   */
  mgpActivated: Date
  /**
   * The MGP deactivation date
   */
  mgpDeactivated?: Date

}
export interface SmsTransaction{
  /**
   * The SMS destination number
   */
  destinationNumber: string

}
export interface FailedSms{
  /**
   * The SMS destination number
   */
  destinationNumber: string
  /**
   * The error description
   */
  errorDescription: string
  /**
   * The error code
   */
  errorCode: number

}
export interface MGPTemplateInfo{
  /**
   * The MGP template ID
   */
  mgpTemplateId: number
  /**
   * The MGP template name
   */
  mgpTemplateName: string
  /**
   * The MGP template price
   */
  mgpTemplatePrice: number
  /**
   * The MGP template currency
   */
  mgpTemplateCurrency: string

}
export interface KeyInfo{
  /**
   * Client email
   */
  accountEmail: string
  /**
   * The account ID
   */
  accountId: number
  /**
   * The key ID
   */
  keyId: string
  /**
   * The private key
   */
  privateKey: string

}
export interface KeyView{
  /**
   * The key ID
   */
  keyId: string
  /**
   * The key roles
   */
  roles?: RoleView[]
  /**
   * The key description
   */
  description: string
  /**
   * The key subuser
   */
  subuser?: SubUserView[]

}
export interface SubUserView{
  /**
   * The subuser ID
   */
  subuserId: number
  /**
   * The subuser name, can be used as __subuser_login__ to <a href='/docs/guides/managementapi/authorization'>authenticate</a>
   */
  subuserName: string
  /**
   * The subuser description
   */
  description?: string
  /**
   * The subuser roles
   */
  roles?: RoleView[]

}
export interface SubUserID{
  /**
   * The subuser ID
   */
  subuserId: number

}
export interface RoleView{
  /**
   * The role name
   */
  roleName: string
  /**
   * The role ID
   */
  roleId: number
  /**
   * Shows that the role is inherited
   */
  inherited?: boolean
  /**
   * Child roles IDs array
   */
  childIds?: number[]
  /**
   * Parent roles IDs array
   */
  parentRoleId?: number[]
  /**
   * Shows that the role is gui only
   */
  guiOnly: boolean

}
export interface RoleGroupView{
  /**
   * The role group ID
   */
  id: number
  /**
   * The role group name
   */
  name: string

}
export interface ChildAccountSubscription{
  /**
   * The subscription ID
   */
  subscriptionId: number
  /**
   * The subscription name
   */
  subscriptionName: string
  /**
   * The subscription template ID
   */
  subscriptionTemplateId: number
  /**
   * The subscription is prolonged automatically
   */
  autoCharge?: boolean
  /**
   * The next charge UTC date in format: YYYY-MM-DD
   */
  nextRenewal?: Date
  /**
   * The periodic payment amount
   */
  periodicPrice?: number
  /**
   * The subscription is active
   */
  active?: boolean

}
export interface ChildAccountSubscriptionTemplate{
  /**
   * The subscription template ID
   */
  subscriptionTemplateId: number
  /**
   * The subscription template name
   */
  subscriptionTemplateName: string
  /**
   * The subscription template installation price
   */
  installationPrice: number
  /**
   * The subscription template periodic price
   */
  periodicPrice: number

}
export interface SmsHistory{
  /**
   * Id of the message
   */
  smsId: number
  /**
   * Number being called from
   */
  sourceNumber: number
  /**
   * Number being called to
   */
  destinationNumber: number
  /**
   * Incoming or outgoing message
   */
  direction: string
  /**
   * Number of fragments the initial message was divided into
   */
  fragments: number
  /**
   * Cost of the message
   */
  cost: number
  /**
   * Status of the message. 1 - Success, 2 - Error
   */
  statusId: string
  /**
   * Error message (if any)
   */
  errorMessage?: string
  /**
   * Date of message processing. The format is yyyy-MM-dd HH:mm:ss
   */
  processedDate: Date
  /**
   * Id of the transaction for this message
   */
  transactionId?: number

}
export interface A2PSmsHistory{
  /**
   * The message ID
   */
  id: number
  /**
   * SMS source number
   */
  sourceNumber: number
  /**
   * SMS destination number
   */
  destinationNumber: number
  /**
   * Number of fragments the initial message was divided into
   */
  fragments: number
  /**
   * The message cost
   */
  cost: number
  /**
   * The message status. 1 - Success, 2 - Error
   */
  statusId: string
  /**
   * Error message (if any)
   */
  errorMessage?: string
  /**
   * Date of message processing. The format is yyyy-MM-dd HH:mm:ss
   */
  processingDate: Date
  /**
   * The transaction ID for this message
   */
  transactionId: number
  /**
   * Delivery status: QUEUED, DISPATCHED, ABORTED, REJECTED, DELIVERED, FAILED, EXPIRED, UNKNOWN
   */
  deliveryStatus: string

}
export interface ExpiredAgreementCallback{
  /**
   * The list of the expired agreements IDs
   */
  documentIds: number[]

}
export interface RestoredAgreementStatusCallback{
  /**
   * ID of the agreement document which status has been changed
   */
  documentId: number
  /**
   * The new date of agreement expiration in format: YYYY-MM-DD
   */
  expirationDate: Date

}
export interface GetMaxBankCardPaymentResult{
  /**
   * The maximum payment for the specified card. It's always equal or less than **new_max_payment**
   */
  maxPayment: number
  /**
   * The maximum payment available for any card. The values depends on payment gateways, previous transactions during the last 24 hours, etc
   */
  newMaxPayment: number
  /**
   * The currency code (USD, RUR, ...)
   */
  currency: string

}
export interface GetAutochargeConfigResult{
  /**
   * Is auto charge enabled or not
   */
  autoCharge: boolean
  /**
   * The auto charge threshold
   */
  minBalance: number
  /**
   * The auto top-up amount in the account's currency
   */
  cardOverrunValue: string
  /**
   * The email for receiving payment receipts
   */
  receiptEmail: string

}
export interface GetSQQueuesResult{
  /**
   * ID of the smart queue
   */
  sqQueueId: number
  /**
   * Name of the smart queue
   */
  sqQueueName: string
  /**
   * Agent selection strategy
   */
  agentSelection: string
  /**
   * Strategy of prioritizing requests for service
   */
  taskSelection: string
  /**
   * Comment
   */
  description?: string
  /**
   * UTC date of the queue creation in 24-h format: YYYY-MM-DD HH:mm:ss
   */
  created?: Date
  /**
   * UTC date of the queue modification in 24-h format: YYYY-MM-DD HH:mm:ss
   */
  modified?: Date
  /**
   * Maximum time in minutes that a CALL-type request can remain in the queue without being assigned to an agent
   */
  callMaxWaitingTime?: number
  /**
   * Maximum time in minutes that an IM-type request can remain in the queue without being assigned to an agent
   */
  imMaxWaitingTime?: number
  /**
   * Maximum size of the queue with CALL-type requests
   */
  callMaxQueueSize?: number
  /**
   * Maximum size of the queue with IM-type requests
   */
  imMaxQueueSize?: number

}
export interface GetSQSkillsResult{
  /**
   * ID of the skill
   */
  sqSkillId: number
  /**
   * Name of the skill
   */
  sqSkillName: string
  /**
   * Comment
   */
  description?: string
  /**
   * UTC date of the queue creation in 24-h format: YYYY-MM-DD HH:mm:ss
   */
  created?: Date
  /**
   * UTC date of the queue modification in 24-h format: YYYY-MM-DD HH:mm:ss
   */
  modified?: Date

}
export interface GetSQAgentsResult{
  /**
   * ID of the user
   */
  userId?: number
  /**
   * Name of the user
   */
  userName?: string
  /**
   * Display name of the user
   */
  userDisplayName?: string
  /**
   * Maximum number of chats that the user processes simultaneously
   */
  maxSimultaneousConversations?: number
  /**
   * Agent statuses info
   */
  sqStatuses?: SmartQueueStateAgentStatus[]
  /**
   * JSON array of the agent's queues
   */
  sqQueues?: any
  /**
   * JSON array of the agent's skills
   */
  sqSkills?: any

}
export interface SQAgentSelectionStrategies{
  /**
   * The most qualified agent
   */
  MOSTQUALIFIED?: string
  /**
   * The least qualified agent
   */
  LEASTQUALIFIED?: string
  /**
   * Agent who has been free the longest since the end of the last call
   */
  MAXWAITINGTIME?: string

}
export interface SQTaskSelectionStrategies{
  /**
   * Calls or messages with the highest priority are the first to distribute to agents
   */
  MAXPRIORITY?: string
  /**
   * Calls or messages with the longest waiting time are the first to distribute to agents
   */
  MAXWAITINGTIME?: string

}
export interface SQSkillBindingModes{
  /**
   * Add new skills to the agents
   */
  add?: string
  /**
   * Replace agent skills with new ones
   */
  replaceSkills?: string
  /**
   * Replace agents with new ones
   */
  replaceAgents?: string

}
export interface SQAgentBindingModes{
  /**
   * Add new agents to the queue
   */
  add?: string
  /**
   * Replace agents with new ones
   */
  replace?: string

}
export interface SmartQueueMetricsResult{
  /**
   * The report type(s)
   */
  reportType: string
  /**
   * Grouping by agent or queue
   */
  groups: SmartQueueMetricsGroups[]

}
export interface SmartQueueMetricsGroups{
  /**
   * The smart queue ID
   */
  sqQueueId?: number
  /**
   * The smart queue name
   */
  sqQueueName?: string
  /**
   * The user ID
   */
  userId?: number
  /**
   * The user name
   */
  userName?: string
  /**
   * The user display name
   */
  userDisplayName?: string
  /**
   * The group values
   */
  values: SmartQueueMetricsGroupsValues[]

}
export interface SmartQueueMetricsGroupsValues{
  /**
   * The start of the period
   */
  fromDate: Date
  /**
   * The end of the period
   */
  toDate: Date
  /**
   * The report value
   */
  value: number

}
export interface SmartQueueState{
  /**
   * The smart queue ID
   */
  sqQueueId: number
  /**
   * The smart queue name
   */
  sqQueueName: string
  /**
   * The list of logged-in agents with their skills and statuses
   */
  sqAgents: SmartQueueStateAgent[]
  /**
   * The list of tasks
   */
  tasks: SmartQueueStateTask[]

}
export interface SmartQueueStateTask{
  /**
   * The task type. Possible values are CALL, IM
   */
  taskType: string
  /**
   * The task status. Possible values are IN_QUEUE, DISTRIBUTED, IN_PROCESSING
   */
  status: string
  /**
   * Selected agent
   */
  userId?: number
  /**
   * Task skills
   */
  sqSkills: SmartQueueTaskSkill[]
  /**
   * Waiting time in ms
   */
  waitingTime: number
  /**
   * Processing time in ms
   */
  processingTime: number
  /**
   * Custom data
   */
  customData?: any

}
export interface SmartQueueStateAgent{
  /**
   * The user ID
   */
  userId: number
  /**
   * The user name
   */
  userName: string
  /**
   * The display user name
   */
  userDisplayName: string
  /**
   * Agent skills
   */
  sqSkills: SmartQueueAgentSkill[]
  /**
   * Agent statuses info
   */
  sqStatuses: SmartQueueStateAgentStatus[]

}
export interface SmartQueueAgentSkill{
  /**
   * The agent skill ID
   */
  sqSkillId: number
  /**
   * The agent skill name
   */
  sqSkillName: string
  /**
   * The agent skill level
   */
  sqSkillLevel: number

}
export interface SmartQueueTaskSkill{
  /**
   * The skill name
   */
  sqSkillName: string
  /**
   * The skill level
   */
  sqSkillLevel: number

}
export interface SmartQueueStateAgentStatus{
  /**
   * The IM status info
   */
  IM: SmartQueueStateAgentStatus_
  /**
   * The CALL status info
   */
  CALL: SmartQueueStateAgentStatus_

}
export interface SmartQueueStateAgentStatus_{
  /**
   * The status name
   */
  sqStatusName: string
  /**
   * Time in 24-h format: YYYY-MM-DD HH:mm:ss
   */
  fromDate: Date

}
export interface KeyValueItems{
  /**
   * Key that matches the specified key or key pattern
   */
  key: string
  /**
   * Value for the specified key
   */
  value: string
  /**
   * Expiration date based on **ttl** (timestamp without milliseconds)
   */
  expiresAt: number

}
export interface KeyValuePairs{
  /**
   * Key that matches the pattern
   */
  key: string
  /**
   * Value for the specified key
   */
  value: string
  /**
   * Expiration date based on **ttl** (timestamp without milliseconds)
   */
  expiresAt: number

}
export interface KeyValueKeys{
  /**
   * Key that matches the pattern
   */
  key: string
  /**
   * Expiration date based on **ttl** (timestamp without milliseconds)
   */
  expiresAt: number

}
export interface AccountInvocie{
  /**
   * Invoice period
   */
  period: InvoicePeriod
  /**
   * Info on all money spent in the invoice
   */
  amount: InvoiceTotalDetails
  /**
   * Invoice id
   */
  invoiceId: number
  /**
   * Detailed info on each spending
   */
  rows: InvoiceSpendingDetails
  /**
   * Unique invoice number
   */
  invoiceNumber: string
  /**
   * Date when the invoice is created in format: YYYY-MM-DD
   */
  invoiceDate: Date
  /**
   * Invoice status
   */
  status: string

}
export interface InvoicePeriod{
  /**
   * From date in format: YYYY-MM-DD
   */
  from: Date
  /**
   * To date in format: YYYY-MM-DD
   */
  to: Date

}
export interface InvoiceTotalDetails{
  /**
   * Total amount of taxes
   */
  taxAmount: number
  /**
   * Invoice total amount including taxes
   */
  totalAmount: number
  /**
   * Discounted amount to pay
   */
  amountToPay: number
  /**
   * Discount
   */
  discountAmount: number
  /**
   * Invoice currency
   */
  currency: string

}
export interface InvoiceSpendingDetails{
  /**
   * Paid amount
   */
  amount: InvoiceTotalDetails
  /**
   * Service name
   */
  serviceName: string
  /**
   * Array of taxes
   */
  taxes: InvoiceTaxesDetails

}
export interface InvoiceTaxesDetails{
  /**
   * Taxable sum
   */
  taxableMeasure: number
  /**
   * Paid amount
   */
  amount: number
  /**
   * Tax type. Possible values: Federal, State, County, City, Unincorporated
   */
  level: string
  /**
   * Tax rate
   */
  rate: number
  /**
   * Tax name
   */
  name: string
  /**
   * Tax currency
   */
  currency: string
  /**
   * Tax category
   */
  category: string

}
