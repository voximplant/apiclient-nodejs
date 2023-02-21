export enum APIErrorCode{
  /**
   * Fatal error
   */
  FATAL_ERROR = 1,
  /**
   * Internal error
   */
  INTERNAL_ERROR = 2,
  /**
   * DB error
   */
  DB_ERROR = 4,
  /**
   * Billing failed
   */
  BILLING_ERROR = 5,
  /**
   * Cannot generate the unique 'api_key'
   */
  API_KEY_GENERATION_FAILURE = 6,
  /**
   * Activation mail error
   */
  ACTIVATION_MAIL_ERROR = 9,
  /**
   * Cannot generate the unique 'session_id'
   */
  SESSION_ID_GENERATION_ERROR = 10,
  /**
   * Invalid 'func_name' parameter
   */
  INVALID_FUNC_NAME = 12,
  /**
   * The 'config' table error
   */
  INTERNAL_CONFIGURATION_ERROR = 13,
  /**
   * SMS gateway error
   */
  SMS_GATEWAY_ERROR = 14,
  /**
   * Media server error
   */
  MEDIA_SERVER_ERROR = 15,
  /**
   * Media balancer error
   */
  MEDIA_BALANCER_ERROR = 16,
  /**
   * Paypoint failed
   */
  PAYPOINT_ERROR = 17,
  /**
   * CallerID verification server error
   */
  CALLERID_VERIFICATION_ERROR = 18,
  /**
   * ACD failed
   */
  ACD_FAILED = 19,
  /**
   * Phone provider failed
   */
  PHONE_PROVIDER_FAILED = 20,
  /**
   * Call service failed
   */
  CALL_SERVICE_FAILED = 21,
  /**
   * Conference balancer error
   */
  CONFERENCE_BALANCER_ERROR = 22,
  /**
   * Conference server error
   */
  CONFERENCE_SERVER_ERROR = 23,
  /**
   * Authorization failed
   */
  AUTHORIZATION_FAILED = 100,
  /**
   * Invalid arguments
   */
  INVALID_ARGUMENTS = 101,
  /**
   * Missing 'cmd' parameter
   */
  MISSING_CMD = 102,
  /**
   * Unknown command
   */
  UNKNOWN_COMMAND = 103,
  /**
   * Forbidden command
   */
  FORBIDDEN_COMMAND = 104,
  /**
   * The required output format type is not supported
   */
  REQUIRED_OUTPUT_FORMAT_TYPE_IS_NOT_SUPPORTED = 105,
  /**
   * Account's name isn't unique
   */
  ACCOUNTS_NAME_ALREADY_USED = 106,
  /**
   * Invalid application name
   */
  INVALID_APPLICATION_NAME = 107,
  /**
   * Exceeded the application count limit per account
   */
  APPLICATION_COUNT_EXCEEDED = 108,
  /**
   * Exceeded the user count limit per account
   */
  USER_COUNT_EXCEEDED = 109,
  /**
   * Invalid plan
   */
  INVALID_PLAN = 110,
  /**
   * Invalid date format
   */
  INVALID_DATE_FORMAT = 111,
  /**
   * The password must be at least 6 characters long
   */
  PASSWORD_LENGTH = 112,
  /**
   * Account's name must be at least 5 and up to 20 characters long
   */
  ACCOUNT_NAME_LENGTH = 113,
  /**
   * Account's name should start with a letter and can contain latin characters, digits, hyphen
   */
  ACCOUNT_NAME_INITIAL_LETTER = 114,
  /**
   * The 'account_id' parameter is invalid
   */
  INVALID_ACCOUNT_ID = 115,
  /**
   * The 'application_id' parameter is invalid
   */
  INVALID_APPLICATION_ID = 116,
  /**
   * The 'user_id' parameter is invalid
   */
  INVALID_USER_ID = 117,
  /**
   * The user name isn't unique
   */
  USER_NAME_ISNT_UNIQUE = 118,
  /**
   * Invalid phone number
   */
  INVALID_PHONE_NUMBER = 121,
  /**
   * The user name should start with a letter or digit and can contain latin characters, digits, hyphen and must be at least 5 characters long
   */
  USER_NAME_RESTRICTIONS = 122,
  /**
   * Invalid date range
   */
  INVALID_DATE_RANGE = 123,
  /**
   * Invalid money amount
   */
  INVALID_MONEY_AMOUNT = 125,
  /**
   * Insufficient money
   */
  INSUFFICIENT_MONEY = 127,
  /**
   * Account's email isn't unique
   */
  ACCOUNTS_EMAIL_ISNT_UNIQUE = 128,
  /**
   * Application name isn't unique
   */
  APPLICATION_NAME_ISNT_UNIQUE = 129,
  /**
   * The script text is too long
   */
  SCRIPT_TEXT_IS_TOO_LONG = 130,
  /**
   * The account isn't activated
   */
  ACCOUNT_ISNT_ACTIVATED = 131,
  /**
   * The 'scenario_id' parameter is invalid
   */
  INVALID_SCENARIO_ID = 132,
  /**
   * The scenario name isn't unique
   */
  SCENARIO_NAME_ISNT_UNIQUE = 133,
  /**
   * Required parameter is empty
   */
  REQUIRED_IS_EMPTY = 134,
  /**
   * Session timeout
   */
  SESSION_TIMEOUT = 135,
  /**
   * Invalid email
   */
  INVALID_EMAIL = 136,
  /**
   * The account isn't logged
   */
  ACCOUNT_ISNT_LOGGED = 137,
  /**
   * Activation is over for the phone number
   */
  ACTIVATION_IS_OVER_FOR_THE_PHONE_NUMBER = 139,
  /**
   * Exceeded the max SMS code entering attempts
   */
  EXCEEDED_THE_MAX_SMS_CODE_ENTERING_ATTEMPTS = 140,
  /**
   * The 'sms_code' parameter is invalid
   */
  INVALID_SMS_CODE = 141,
  /**
   * Activation is not required
   */
  ACTIVATION_IS_NOT_REQUIRED = 142,
  /**
   * The 'rule_id' parameter is invalid
   */
  INVALID_RULE_ID = 147,
  /**
   * The 'rule_pattern' parameter is invalid
   */
  INVALID_RULE_PATTERN = 148,
  /**
   * The 'rule_pattern_exclude' parameter is invalid
   */
  INVALID_RULE_PATTERN_EXCLUDE = 149,
  /**
   * The 'call_session_history_id' parameter is invalid
   */
  INVALID_CALL_SESSION_HISTORY_ID = 150,
  /**
   * Rejected payment request
   */
  REJECTED_PAYMENT_REQUEST = 151,
  /**
   * No bank card
   */
  NO_BANK_CARD = 152,
  /**
   * The card payment amount must be greater than 10$
   */
  CARD_PAYMENT_AMOUNT_MUST_BE_GREATER_THAN_10 = 153,
  /**
   * The 'min_balance' must be greater than 1 $
   */
  MIN_BALANCE_MUST_BE_GREATER_THAN_1 = 154,
  /**
   * The 'card_overrun_value' must be greater than 10$
   */
  CARD_OVERRUN_VALUE_MUST_BE_GREATER_THAN_10 = 155,
  /**
   * The 'rule_name' parameter is invalid
   */
  INVALID_RULE_NAME = 156,
  /**
   * The 'user_display_name' parameter is invalid
   */
  INVALID_USER_DISPLAY_NAME = 157,
  /**
   * The 'card_holder' parameter is invalid
   */
  INVALID_CARD_HOLDER = 158,
  /**
   * The 'acct' parameter is invalid
   */
  INVALID_ACCT = 159,
  /**
   * The 'cvv' parameter is invalid
   */
  INVALID_CVV = 160,
  /**
   * The 'session_id' parameter is invalid
   */
  INVALID_SESSION_ID = 161,
  /**
   * try later..
   */
  TRY_LATER = 162,
  /**
   * The 'account_first_name' parameter length must be less than 50
   */
  ACCOUNT_FIRST_NAME_TOO_LONG = 163,
  /**
   * The 'account_last_name' parameter length must be less than 50
   */
  ACCOUNT_LAST_NAME_TOO_LONG = 164,
  /**
   * Exceeded the max SMS sending attempts
   */
  EXCEEDED_THE_MAX_SMS_SENDING_ATTEMPTS = 165,
  /**
   * Repeat SMS sending after 3 minutes
   */
  REPEAT_SMS_SENDING_AFTER_3_MINUTES = 166,
  /**
   * The 'activation_method' parameter is invalid
   */
  INVALID_ACTIVATION_METHOD = 167,
  /**
   * The 'scenario_name' parameter is invalid
   */
  INVALID_SCENARIO_NAME = 168,
  /**
   * The 'sip_whitelist_id' parameter is invalid
   */
  INVALID_SIP_WHITELIST_ID = 169,
  /**
   * The 'sip_whitelist_network' parameter is invalid
   */
  INVALID_SIP_WHITELIST_NETWORK = 170,
  /**
   * The 'min_balance' must be less than 50 $
   */
  MIN_BALANCE_MUST_BE_LESS_THAN_50 = 171,
  /**
   * Exceeded the SIP white list network count limit per account
   */
  SIP_WHITE_LIST_NETWORK_COUNT_EXCEEDED = 172,
  /**
   * The account name is forbidden by the black list. Try another name
   */
  ACCOUNT_NAME_FORBIDDEN = 173,
  /**
   * The 'rule_name' isn't unique
   */
  DUPLICATE_RULE_NAME = 175,
  /**
   * The 'parent_account_id' parameter is invalid
   */
  INVALID_PARENT_ACCOUNT_ID = 177,
  /**
   * The 'excluded_user_id' parameter is invalid
   */
  INVALID_EXCLUDED_USER_ID = 180,
  /**
   * The 'phone_id' parameter is invalid
   */
  INVALID_PHONE_ID = 181,
  /**
   * Occupied phone number
   */
  OCCUPIED_PHONE_NUMBER = 182,
  /**
   * The 'callerid_id' parameter is invalid
   */
  INVALID_CALLERID_ID = 183,
  /**
   * The 'callerid_number' parameter is invalid
   */
  INVALID_CALLERID_NUMBER = 184,
  /**
   * Forbidden CallerID
   */
  FORBIDDEN_CALLERID = 185,
  /**
   * The 'verification_code' parameter is invalid
   */
  INVALID_VERIFICATION_CODE = 414,
  /**
   * The 'callerid_number' isn't unique
   */
  DUPLICATE_CALLERID_NUMBER = 188,
  /**
   * The 'mobile_phone' parameter is invalid
   */
  INVALID_MOBILE_PHONE = 203,
  /**
   * The 'to_number' parameter is invalid
   */
  INVALID_TO_NUMBER = 190,
  /**
   * The 'from_number' parameter is invalid
   */
  INVALID_FROM_NUMBER = 191,
  /**
   * The 'sms_id' parameter is invalid
   */
  INVALID_SMS_ID = 192,
  /**
   * The 'child_account_id' parameter is invalid
   */
  INVALID_CHILD_ACCOUNT_ID = 194,
  /**
   * Unsupported batch command
   */
  UNSUPPORTED_BATCH_COMMAND = 195,
  /**
   * Too many batch commands. The max command count is 50 per batch
   */
  TOO_MANY_BATCH_COMMANDS = 196,
  /**
   * The 'transaction_id' parameter is invalid
   */
  INVALID_TRANSACTION_ID = 197,
  /**
   * The 'child_account_name' parameter is invalid
   */
  INVALID_CHILD_ACCOUNT_NAME = 198,
  /**
   * The 'child_account_email' parameter is invalid
   */
  INVALID_CHILD_ACCOUNT_EMAIL = 199,
  /**
   * The 'new_child_account_email' parameter is invalid
   */
  INVALID_NEW_CHILD_ACCOUNT_EMAIL = 201,
  /**
   * The 'language_code' parameter is invalid
   */
  INVALID_LANGUAGE_CODE = 202,
  /**
   * The 'billing_address_country_code' parameter is invalid
   */
  INVALID_BILLING_ADDRESS_COUNTRY_CODE = 204,
  /**
   * The 'billing_address_name' parameter length must be less than 200
   */
  BILLING_ADDRESS_NAME_TOO_LONG = 205,
  /**
   * The 'billing_address_address' parameter length must be less than 512
   */
  BILLING_ADDRESS_ADDRESS_TOO_LONG = 206,
  /**
   * The 'billing_address_zip' parameter length must be less than 30
   */
  BILLING_ADDRESS_ZIP_TOO_LONG = 207,
  /**
   * The 'billing_address_phone' parameter length must be less than 30
   */
  BILLING_ADDRESS_PHONE_TOO_LONG = 208,
  /**
   * The 'transaction_type' parameter is invalid
   */
  INVALID_TRANSACTION_TYPE = 209,
  /**
   * The 'currency' parameter is invalid
   */
  INVALID_CURRENCY = 210,
  /**
   * The 'account_custom_data' parameter length must be less than 8192
   */
  ACCOUNT_CUSTOM_DATA_TOO_LONG = 211,
  /**
   * The 'user_custom_data' parameter length must be less than 8192
   */
  USER_CUSTOM_DATA_TOO_LONG = 212,
  /**
   * The 'acd_queue_name' parameter length must be less than 100
   */
  ACD_QUEUE_NAME_TOO_LONG = 213,
  /**
   * The 'service_probability' parameter value must be in range [0.5 ... 1]
   */
  INVALID_SERVICE_PROBABILITY = 214,
  /**
   * The 'max_queue_size' parameter is invalid
   */
  INVALID_MAX_QUEUE_SIZE = 215,
  /**
   * The 'max_waiting_time' parameter is invalid
   */
  INVALID_MAX_WAITING_TIME = 216,
  /**
   * The 'average_service_time' parameter is invalid
   */
  INVALID_AVERAGE_SERVICE_TIME = 217,
  /**
   * The 'acd_queue_id' parameter is invalid
   */
  INVALID_ACD_QUEUE_ID = 218,
  /**
   * Queue's name isn't unique
   */
  DUPLICATE_QUEUES_NAME = 219,
  /**
   * The 'skill_name' parameter length must be less than 512
   */
  SKILL_NAME_TOO_LONG = 220,
  /**
   * Skill's name isn't unique
   */
  DUPLICATE_SKILL_NAME = 221,
  /**
   * The 'skill_id' parameter is invalid
   */
  INVALID_SKILL_ID = 222,
  /**
   * The 'acd_queue_priority' parameter should be positive
   */
  INVALID_ACD_QUEUE_PRIORITY = 223,
  /**
   * The 'excluded_skill_id' parameter is invalid
   */
  INVALID_EXCLUDED_SKILL_ID = 224,
  /**
   * The 'amount' parameter is invalid
   */
  INVALID_AMOUNT = 225,
  /**
   * The payment amount is very low. The amount must be greater than N
   */
  PAYMENT_AMOUNT_TOO_LOW = 226,
  /**
   * The 'acd_status' parameter is invalid
   */
  INVALID_ACD_STATUS = 227,
  /**
   * The 'aggregation' parameter is invalid
   */
  INVALID_AGGREGATION = 228,
  /**
   * The 'report' parameter is invalid
   */
  INVALID_REPORT = 229,
  /**
   * Account password change is over. Try later
   */
  ACCOUNT_PASSWORD_CHANGE_TEMPORARY_BLOCKED = 230,
  /**
   * No more attempts to enter code
   */
  CODE_ENTRY_ATTEMPTS_EXHAUSTED = 231,
  /**
   * The 'code' parameter is invalid
   */
  INVALID_CODE = 232,
  /**
   * The 'date' parameter is invalid
   */
  INVALID_DATE = 233,
  /**
   * The 'account_transaction_description' parameter length must be less than 120
   */
  ACCOUNT_TRANSACTION_DESCRIPTION_TOO_LONG = 234,
  /**
   * The 'user_transaction_description' parameter length must be less than 120
   */
  USER_TRANSACTION_DESCRIPTION_TOO_LONG = 235,
  /**
   * The 'parent_transaction_description' parameter length must be less than 120
   */
  PARENT_TRANSACTION_DESCRIPTION_TOO_LONG = 236,
  /**
   * The 'child_transaction_description' parameter length must be less than 120
   */
  CHILD_TRANSACTION_DESCRIPTION_TOO_LONG = 237,
  /**
   * The 'country_code' parameter is invalid
   */
  INVALID_COUNTRY_CODE = 239,
  /**
   * The 'phone_category_name' parameter is invalid
   */
  INVALID_PHONE_CATEGORY_NAME = 240,
  /**
   * The 'phone_region_id' parameter is invalid
   */
  INVALID_PHONE_REGION_ID = 241,
  /**
   * The 'country_state' parameter is invalid
   */
  INVALID_COUNTRY_STATE = 242,
  /**
   * The 'phone_count' parameter is invalid
   */
  INVALID_PHONE_COUNT = 243,
  /**
   * The 'subscription_template_id' parameter is invalid
   */
  INVALID_SUBSCRIPTION_TEMPLATE_ID = 244,
  /**
   * The 'subscription_template_name' parameter is invalid
   */
  INVALID_SUBSCRIPTION_TEMPLATE_NAME = 245,
  /**
   * The 'subscription_template_type' parameter is invalid
   */
  INVALID_SUBSCRIPTION_TEMPLATE_TYPE = 246,
  /**
   * The 'prioriity' parameter is invaid
   */
  INVALID_PRIORIITY = 247,
  /**
   * The 'max_simultaneous' parameter is invalid
   */
  INVALID_MAX_SIMULTANEOUS = 248,
  /**
   * The 'num_attempts' parameter is invalid
   */
  INVALID_NUM_ATTEMPTS = 249,
  /**
   * Invalid CSV file
   */
  INVALID_CSV_FILE = 250,
  /**
   * Call service error
   */
  CALL_SERVICE_ERROR = 251,
  /**
   * Error response from call service
   */
  ERROR_RESPONSE_FROM_CALL_SERVICE = 252,
  /**
   * The 'name' parameter is invalid
   */
  INVALID_NAME = 253,
  /**
   * The 'group' parameter is invalid
   */
  INVALID_GROUP = 254,
  /**
   * The 'list_id' parameter is invalid
   */
  INVALID_LIST_ID = 255,
  /**
   * The 'reference_ip' parameter is invalid
   */
  INVALID_REFERENCE_IP = 257,
  /**
   * The 'to_phone_next_renewal' parameter is invalid
   */
  INVALID_TO_PHONE_NEXT_RENEWAL = 258,
  /**
   * The 'media_url' parameter is invalid
   */
  INVALID_MEDIA_URL = 259,
  /**
   * Access to the media link is denied
   */
  MEDIA_LINK_ACCESS_DENIED = 260,
  /**
   * The 'record_id' parameter is invalid
   */
  INVALID_RECORD_ID = 261,
  /**
   * The 'PaRes' parameter is invalid
   */
  INVALID_PARES = 262,
  /**
   * The 'MD' parameter is invalid
   */
  INVALID_MD = 263,
  /**
   * The 'private' parameter is invalid
   */
  INVALID_PRIVATE = 264,
  /**
   * The 'promo_code' parameter is invalid
   */
  INVALID_PROMO_CODE = 265,
  /**
   * The promo code is expired
   */
  PROMO_CODE_IS_EXPIRED = 266,
  /**
   * The promo code has been already redeemed
   */
  PROMO_CODE_HAS_BEEN_ALREADY_REDEEMED = 267,
  /**
   * The second promo code activation is forbidden
   */
  PROMO_CODE_ALREADY_USED = 268,
  /**
   * The 'conference_name' parameter is invalid
   */
  INVALID_CONFERENCE_NAME = 269,
  /**
   * The 'conference_name' parameter length must be less than 50
   */
  CONFERENCE_NAME_TOO_LONG = 270,
  /**
   * The service level threshold count must be less than 5
   */
  SERVICE_LEVEL_THRESHOLD_COUNT_TOO_BIG = 271,
  /**
   * Exceeded the maximum possible number of SIP registrations
   */
  SIP_REGISTRATIONS_COUNT_EXCEEDED = 272,
  /**
   * The 'username' parameter is invalid
   */
  INVALID_USERNAME = 273,
  /**
   * The 'proxy' parameter is invalid
   */
  INVALID_PROXY = 274,
  /**
   * The 'registration_id' parameter is invalid
   */
  INVALID_REGISTRATION_ID = 275,
  /**
   * The 'account_document' parameter is invalid
   */
  INVALID_ACCOUNT_DOCUMENT = 278,
  /**
   * Repeat an account document sending after 2 minutes
   */
  RESEND_DOCUMENTS = 280,
  /**
   * Account verification required
   */
  ACCOUNT_VERIFICATION_REQUIRED = 281,
  /**
   * Account verification in progress
   */
  ACCOUNT_VERIFICATION_IN_PROGRESS = 282,
  /**
   * The 'to_purchase_date' parameter is invalid
   */
  INVALID_TO_PURCHASE_DATE = 283,
  /**
   * The 'admin_user_id' parameter is invalid
   */
  INVALID_ADMIN_USER_ID = 284,
  /**
   * The 'required_admin_user_id' parameter is invalid
   */
  INVALID_REQUIRED_ADMIN_USER_ID = 285,
  /**
   * The 'required_admin_user_name' parameter is invalid
   */
  INVALID_REQUIRED_ADMIN_USER_NAME = 286,
  /**
   * The admin user name length must be less than 50
   */
  ADMIN_USER_NAME_TOO_LONG = 287,
  /**
   * The 'admin_user_display_name' parameter length must be less than 255
   */
  ADMIN_USER_DISPLAY_NAME_TOO_LONG = 288,
  /**
   * Exceeded the admin user count limit per account
   */
  ADMIN_USER_COUNT_LIMIT_EXCEEDED = 289,
  /**
   * The admin_user_name isn't unique
   */
  DUPLICATE_ADMIN_USER_NAME = 290,
  /**
   * The 'admin_role_id' parameter is invalid
   */
  INVALID_ADMIN_ROLE_ID = 291,
  /**
   * The 'admin_role_name' parameter is invalid
   */
  INVALID_ADMIN_ROLE_NAME = 292,
  /**
   * The admin role name length must be less than 160
   */
  ADMIN_ROLE_NAME_TOO_LONG = 293,
  /**
   * The admin_role_name isn't unique
   */
  DUPLICATE_ADMIN_ROLE_NAME = 294,
  /**
   * Exceeded the admin role count limit per account
   */
  ADMIN_ROLE_COUNT_LIMIT_IS_EXCEEDED = 295,
  /**
   * The 'allowed_entries' parameter is invalid
   */
  INVALID_ALLOWED_ENTRIES = 296,
  /**
   * The 'denied_entries' parameter is invalid
   */
  INVALID_DENIED_ENTRIES = 297,
  /**
   * The 'like_admin_role_id' parameter is invalid
   */
  INVALID_LIKE_ADMIN_ROLE_ID = 300,
  /**
   * The 'included_admin_role_id' parameter is invalid
   */
  INVALID_INCLUDED_ADMIN_ROLE_ID = 301,
  /**
   * The 'excluded_admin_role_id' parameter is invalid
   */
  INVALID_EXCLUDED_ADMIN_ROLE_ID = 302,
  /**
   * The 'payment_reference' parameter is ambiguous
   */
  PAYMENT_REFERENCE_IS_AMBIGUOUS = 303,
  /**
   * The 'payment_reference' parameter length must be less than 127
   */
  PAYMENT_REFERENCE_TOO_LONG = 304,
  /**
   * The 'inn' parameter is invalid
   */
  INVALID_INN = 305,
  /**
   * The 'kpp' parameter is invalid
   */
  INVALID_KPP = 306,
  /**
   * The 'company_name' parameter length must be less than 512
   */
  COMPANY_NAME_TOO_LONG = 307,
  /**
   * The 'company_address' parameter length must be less than 512
   */
  COMPANY_ADDRESS_TOO_LONG = 308,
  /**
   * The 'company_phone' parameter length must be less than 20
   */
  COMPANY_PHONE_TOO_LONG = 309,
  /**
   * Forbidden to edit the contractor. Please send an email to the Voximplant team instead
   */
  CONTRACTOR_EDIT_FORBIDDEN = 310,
  /**
   * Please set the contractor info first
   */
  CONTRACTOR_INFO_NOT_SET = 311,
  /**
   * The 'old_invoice_number' parameter is invalid
   */
  INVALID_OLD_INVOICE_NUMBER = 319,
  /**
   * Concurrent resource limit exceeded
   */
  CONCURRENT_RESOURCE_LIMIT_EXCEEDED = 314,
  /**
   * The requested resource parameter is invalid
   */
  INVALID_REQUESTED_RESOURCE = 315,
  /**
   * The requested resource parameter is forbidden
   */
  REQUESTED_RESOURCE_IS_FORBIDDEN = 316,
  /**
   * Upgrade to a paid account to use the requested resource parameter
   */
  ACCOUNT_UPGRADE_REQUIRED = 317,
  /**
   * The money amount must be greater than N RUR
   */
  MONEY_AMOUNT_TOO_LOW = 318,
  /**
   * The 'authorized_ip' parameter is invalid
   */
  INVALID_AUTHORIZED_IP = 320,
  /**
   * The authorized IP is not found
   */
  AUTHORIZED_IP_NOT_FOUND = 321,
  /**
   * The 'contains_ip' parameter is invalid
   */
  INVALID_CONTAINS_IP = 322,
  /**
   * Exceeded the authorized IP count limit per account
   */
  IP_WHITELIST_EXCEEDED = 323,
  /**
   * The 'verification_name' parameter is invalid
   */
  INVALID_VERIFICATION_NAME = 324,
  /**
   * The 'to_unverified_hold_until' parameter is invalid
   */
  INVALID_TO_UNVERIFIED_HOLD_UNTIL = 325,
  /**
   * The 'verification_status' parameter is invalid
   */
  INVALID_VERIFICATION_STATUS = 326,
  /**
   * Error parsing XLS file
   */
  ERROR_PARSING_XLS_FILE = 327,
  /**
   * No phones in the stock
   */
  NO_PHONES_IN_STOCK = 331,
  /**
   * Insufficient phones in the stock, available N
   */
  INSUFFICIENT_PHONES = 332,
  /**
   * Country's region is not found by code
   */
  NOT_FOUND_COUNTRYS_REGION_BY_CODE = 334,
  /**
   * Phone number already exists
   */
  PHONE_NUMBER_ALREADY_EXISTS = 335,
  /**
   * Ambiguous region
   */
  AMBIGUOUS_REGION = 336,
  /**
   * User documents are not found
   */
  USER_DOCUMENTS_NOT_FOUND = 337,
  /**
   * Verification user's document already complete
   */
  VERIFICATION_USERS_DOCUMENT_ALREADY_COMPLETE = 338,
  /**
   * User documents don't exist
   */
  NO_USER_DOCUMENTS = 339,
  /**
   * Rate limit exceed
   */
  RATE_LIMIT_EXCEED = 340,
  /**
   * Record is not found by ID
   */
  RECORD_NOT_FOUND = 341,
  /**
   * The 'individual_full_name' parameter is invalid
   */
  INVALID_INDIVIDUAL_FULL_NAME = 343,
  /**
   * The 'individual_birth_date' parameter is invalid
   */
  INVALID_INDIVIDUAL_BIRTH_DATE = 344,
  /**
   * The 'individual_passport_series' parameter is invalid
   */
  INVALID_INDIVIDUAL_PASSPORT_SERIES = 345,
  /**
   * The 'individual_passport_number' parameter is invalid
   */
  INVALID_INDIVIDUAL_PASSPORT_NUMBER = 346,
  /**
   * The 'individual_passport_issue_date' parameter is invalid
   */
  INVALID_INDIVIDUAL_PASSPORT_ISSUE_DATE = 347,
  /**
   * The 'individual_passport_issued_by' parameter is invalid
   */
  INVALID_INDIVIDUAL_PASSPORT_ISSUED_BY = 348,
  /**
   * The 'individual_registration_address' parameter is invalid
   */
  INVALID_INDIVIDUAL_REGISTRATION_ADDRESS = 349,
  /**
   * The 'legal_entry_full_name' parameter is invalid
   */
  INVALID_LEGAL_ENTRY_FULL_NAME = 350,
  /**
   * The 'legal_entry_phone' parameter is invalid
   */
  INVALID_LEGAL_ENTRY_PHONE = 351,
  /**
   * The 'legal_entry_address' parameter is invalid
   */
  INVALID_LEGAL_ENTRY_ADDRESS = 352,
  /**
   * The 'legal_entry_actual_address' parameter is invalid
   */
  INVALID_LEGAL_ENTRY_ACTUAL_ADDRESS = 353,
  /**
   * The 'ogrn' parameter is invalid
   */
  INVALID_OGRN = 354,
  /**
   * The 'call_history_report_id' parameter is invalid
   */
  INVALID_CALL_HISTORY_REPORT_ID = 355,
  /**
   * The call history report isn't ready yet
   */
  CALL_HISTORY_REPORT_IN_PROGRESS = 356,
  /**
   * The call history report generation failed
   */
  CALL_HISTORY_REPORT_GENERATION_FAILED = 357,
  /**
   * Invalid verification type
   */
  INVALID_VERIFICATION_TYPE = 358,
  /**
   * Invalid salutation
   */
  INVALID_SALUTATION = 359,
  /**
   * Voxbone verification type is not found
   */
  VERIFICATION_TYPE_NOT_FOUND = 360,
  /**
   * Proof of address is not found
   */
  PROOF_OF_ADDRESS_NOT_FOUND = 361,
  /**
   * The 'new_admin_user_name' parameter is invalid
   */
  INVALID_NEW_ADMIN_USER_NAME = 362,
  /**
   * The 'code' parameter (access token) is invalid
   */
  INVALID_CODE_OR_ACCESS_TOKEN = 363,
  /**
   * The current account password is missing
   */
  CURRENT_ACCOUNT_PASSWORD_NOT_SPECIFIED = 364,
  /**
   * Purchase info is not found
   */
  PURCHASE_INFO_NOT_FOUND = 365,
  /**
   * Pending address validation
   */
  PENDING_ADDRESS_VALIDATION = 366,
  /**
   * The 'callback_type' parameter is invalid
   */
  INVALID_CALLBACK_TYPE = 367,
  /**
   * Phone provider error
   */
  PHONE_PROVIDER_ERROR = 368,
  /**
   * Incorrect parameter 'phone_owner_region_code'
   */
  INVALID_PHONE_OWNER_REGION_CODE = 369,
  /**
   * Incorrect parameter 'phone_owner_region_code' or 'phone_owner_zip_code'
   */
  INVALID_REGION_CODE = 370,
  /**
   * The 'history_type' parameter is invalid
   */
  INVALID_HISTORY_TYPE = 371,
  /**
   * The 'pstn_blacklist_phone' parameter length must be less than 100
   */
  INVALID_PSTN_BLACKLIST_PHONE = 425,
  /**
   * Exceeded the PSTN blacklist phones count limit per account
   */
  PSTN_BLACKLIST_SIZE_IS_EXCEEDED = 373,
  /**
   * The 'carrier_id' parameter is invalid
   */
  INVALID_CARRIER_ID = 374,
  /**
   * No scenario is bound to the rule
   */
  RULE_NO_SCENARIO_BOUND = 375,
  /**
   * The 'subscription_id' parameter is invalid
   */
  INVALID_SUBSCRIPTION_ID = 376,
  /**
   * The phone group is incomplete
   */
  PHONE_GROUP_INCOMPLETE = 377,
  /**
   * The 'push_id' parameter is invalid
   */
  INVALID_PUSH_ID = 378,
  /**
   * Forbidden to change the account plan
   */
  ACCOUNT_PLAN_CHANGE_FORBIDDEN = 379,
  /**
   * The push provider is invalid
   */
  INVALID_PUSH_PROVIDER = 380,
  /**
   * No application is bound to the queue
   */
  QUEUE_APPLICATION_NOT_BOUND = 381,
  /**
   * The 'server_type' parameter is invalid
   */
  INVALID_SERVER_TYPE = 382,
  /**
   * The 'server_ip' parameter is invalid
   */
  INVALID_SERVER_IP = 383,
  /**
   * Push credential has already been attached to an application
   */
  PUSH_CREDENTIAL_ALREADY_ATTACHED = 384,
  /**
   * Sending sms error
   */
  SENDING_SMS_ERROR = 385,
  /**
   * SMS disabled for number
   */
  SMS_DISABLED_FOR_NUMBER = 386,
  /**
   * No bank card order
   */
  NO_BANK_CARD_ORDER = 389,
  /**
   * The card payment amount must be less than N
   */
  CARD_PAYMENT_AMOUNT_TOO_LARGE = 390,
  /**
   * Exceeded the card payment limit
   */
  CARD_PAYMENT_LIMIT_IS_EXCEEDED = 391,
  /**
   * Please enter the captcha!
   */
  CAPTCHA_ERROR = 392,
  /**
   * The user isn't bound to the application
   */
  USER_NOT_BOUND_TO_THE_APPLICATION = 393,
  /**
   * The SIP registration is persistent
   */
  SIP_REGISTRATION_IS_PERSISTENT = 394,
  /**
   * It's your phone number
   */
  PHONE_NUMBER_UNUSABLE = 395,
  /**
   * The 'record_storage_id' parameter is invalid
   */
  INVALID_RECORD_STORAGE_ID = 396,
  /**
   * Exceeded the children account count limit per day
   */
  CHILDREN_ACCOUNT_COUNT_LIMIT_PER_DAY_IS_EXCEEDED = 397,
  /**
   * The 'callback_url' parameter is invalid
   */
  INVALID_CALLBACK_URL = 398,
  /**
   * The 'callback_salt' parameter length must be less than 40
   */
  CALLBACK_SALT_INVALID = 399,
  /**
   * The 'pstn_blacklist_id' parameter is invalid
   */
  INVALID_PSTN_BLACKLIST_ID = 400,
  /**
   * The 'advanced_filters' parameter is invalid
   */
  INVALID_ADVANCED_FILTERS = 401,
  /**
   * The 'contact_id' parameter is invalid
   */
  INVALID_CONTACT_ID = 405,
  /**
   * The 'contact_data' parameter is invalid
   */
  INVALID_CONTACT_DATA = 406,
  /**
   * The contact isn't unique
   */
  DUPLICATE_CONTACT = 407,
  /**
   * The contact data must be at least 1 and up to 1024 characters long
   */
  CONTACT_DATA_INVALID = 408,
  /**
   * The 'contact_type' parameter is invalid
   */
  INVALID_CONTACT_TYPE = 409,
  /**
   * The 'notification_group' parameter is invalid
   */
  INVALID_NOTIFICATION_GROUP = 410,
  /**
   * Exceeded the contact count limit per account
   */
  CONTACT_COUNT_LIMIT_PER_ACCOUNT_IS_EXCEEDED = 411,
  /**
   * The 'new_contact_data' parameter is invalid
   */
  INVALID_NEW_CONTACT_DATA = 412,
  /**
   * The 'new_contact_type' parameter is invalid
   */
  INVALID_NEW_CONTACT_TYPE = 413,
  /**
   * The contact is already verified
   */
  CONTACT_IS_ALREADY_VERIFIED = 415,
  /**
   * Repeat after N seconds
   */
  RETRY_LATER = 416,
  /**
   * The contact description must be at least 1 and up to 1024 characters long
   */
  INVALID_CONTACT_DESCRIPTION_LENGTH = 417,
  /**
   * The scenario count limit is exceeded
   */
  SCENARIO_COUNT_LIMIT_IS_EXCEEDED = 418,
  /**
   * The scenario count limit per rule is exceeded
   */
  SCENARIO_COUNT_LIMIT_PER_RULE_IS_EXCEEDED = 419,
  /**
   * Multi subscription doesn't exists
   */
  MULTI_SUBSCRIPTION_DOESNT_EXISTS = 420,
  /**
   * Multi subscription doesn't exist for the specified numbers
   */
  MULTI_SUBSCRIPTION_DOESNT_EXIST_FOR_NUMBERS = 421,
  /**
   * The 'source' parameter is invalid
   */
  INVALID_SOURCE = 422,
  /**
   * The 'destination' parameter is invalid
   */
  INVALID_DESTINATION = 423,
  /**
   * Provided regulation address can't be used for numbers in the specified region
   */
  REGULATION_ADDRESS_AND_REGION_MISMATCH = 424,
  /**
   * The 'plan_type' parameter is invalid
   */
  INVALID_PLAN_TYPE = 426,
  /**
   * Invalid list type. Possible values are 'automatic' and 'manual'
   */
  INVALID_LIST_TYPE = 427,
  /**
   * Invalid status. Possible values are 'in progress', 'canceled' and 'completed'
   */
  INVALID_STATUS = 428,
  /**
   * The 'resource_type' parameter is invalid.
   */
  INVALID_RESOURCE_TYPE = 429,
  /**
   * The 'price_group_name' parameter is invalid.
   */
  INVALID_PRICE_GROUP_NAME = 430,
  /**
   * Invalid key id.
   */
  INVALID_KEY_ID = 433,
  /**
   * Invalid subuser id.
   */
  INVALID_SUB_USER_ID = 434,
  /**
   * Invalid role set.
   */
  INVALID_ROLE_SET = 435,
  /**
   * Sub user login isn't unique.
   */
  SUB_USER_LOGIN_NOT_UNIQUE = 436,
  /**
   * Max number of keys exceeded.
   */
  MAX_NUMBER_OF_KEYS_EXCEEDED = 437,
  /**
   * Max number of subusers exceeded.
   */
  MAX_NUMBER_OF_SUB_USERS_EXCEEDED = 438,
  /**
   * Subuser has at least one key with this roles.
   */
  SUB_USER_HAS_KEYS_WITH_ROLES_TO_REMOVE = 439,
  /**
   * The 'role_id' parameter is invalid.
   */
  INVALID_ROLE_ID = 440,
  /**
   * The 'role_name' parameter is invalid.
   */
  INVALID_ROLE_NAME = 441,
  /**
   * The 'resource_discount_id' parameter is invalid.
   */
  INVALID_RESOURCE_DISCOUNT_ID = 442,
  /**
   * The 'subscription_discount_id' parameter is invalid.
   */
  INVALID_SUBSCRIPTION_DISCOUNT_ID = 443,
  /**
   * The 'target_price_calculation_account_id' is forbidden for user.
   */
  INVALID_TARGET_PRICE_CALCULATION_ACCOUNT_ID = 444,
  /**
   * The 'subscription_periodic_fixed' must be greater than the base price.
   */
  INVALID_SUBSCRIPTION_PERIODIC_FIXED = 445,
  /**
   * The 'subscription_installation_fixed' must be greater than the base price.
   */
  INVALID_SUBSCRIPTION_INSTALLATION_FIXED = 446,
  /**
   * Invalid token format.
   */
  INVALID_TOKEN_FORMAT = 447,
  /**
   * Current subuser password is missing.
   */
  CURRENT_SUB_USER_PASSWORD_MISSING = 448,
  /**
   * Using 'role_id' and 'role_name' at the same_time.
   */
  ROLE_ID_AND_ROLE_NAME_AT_THE_SAME_TIME = 449,
  /**
   * The 'mgp_template_id' parameter is invalid.
   */
  INVALID_MGP_TEMPLATE_ID = 450,
  /**
   * The account's tax rate ID must be the same as the MGP tax rate ID.
   */
  INVALID_ACCOUNT_TAX_RATE_ID = 451,
  /**
   * Subuser name must be at least 5 and up to 20 characters long.
   */
  INVALID_SUB_USER_NAME_LEN = 452,
  /**
   * Subuser name should start with a letter and can contain latin characters
   */
  INVALID_SUB_USER_NAME_SYMBOLS = 453,
  /**
   * The token TTL exceeds the maximum limit.
   */
  INVALID_TOKEN_TTL = 454,
  /**
   * Token issued in the future.
   */
  TOKEN_ISSUED_IN_FUTURE = 455,
  /**
   * The token has expired.
   */
  TOKEN_EXPIRED = 456,
  /**
   * The 'min_payment_amount' parameter is invalid.
   */
  INVALID_MIN_PAYMENT_AMOUNT = 457,
  /**
   * Specify only one of the following parameters: %1$s
   */
  ONLY_ONE_OF_PARAMETERS = 458,
  /**
   * Unknown report type.
   */
  UNKNOWN_REPORT_TYPE = 459,
  /**
   * The 'per_time' parameter is invalid.
   */
  UNKNOWN_PERIOD = 460,
  /**
   * The 'resource id' parameter is invalid.
   */
  INVALID_RESOURCE_ID = 461,
  /**
   * New user name should start with a letter or digit and can contain latin characters
   */
  INVALID_NEW_USER_NAME = 462,
  /**
   * Blank password is not allowed. Please specify a new password at least 8 characters long.
   */
  EMPTY_NEW_PASSWORD = 463,
  /**
   * Password should be at least 8 characters long and contain uppercase characters (A-Z)
   */
  REQUIRED_CHARACTERS_NEW_PASSWORD = 464,
  /**
   * The 'dialogflow_key_id' parameter is invalid.
   */
  INVALID_DIALOGFLOW_KEY_ID = 465,
  /**
   * The 'billing_address_state' parameter length must be less than 
   */
  INVALID_BILLING_ADDRESS_STATE_LEN = 466,
  /**
   * The old contractor has a debt and can't be changed
   */
  CONTRACTOR_WITH_DEBT = 467,
  /**
   * Can't change the contractor because previous period is not closed
   */
  INVALID_CHANGE_CONTRACTOR_IN_PREV_PERIOD = 468,
  /**
   * Invalid value specified for the ‘direction’ parameter. Allowed parameter values are: 'IN'
   */
  INVALID_SMS_DIRECTION_PARAMETER = 470,
  /**
   * Cannot fetch the subscription templates for the current account as it does not support child account management.
   */
  CANT_GET_TEMPLATES_FOR_ACCOUNT = 471,
  /**
   * The following agent parameters can not be found: 
   */
  EMPTY_AGREEMENT_ARGUMENTS = 472,
  /**
   * Operation denied for the current status of the document: %s.
   */
  INVALID_DOCUMENT_STATUS = 473,
  /**
   * The 'document_id' parameter is invalid.
   */
  INVALID_DOCUMENT_ID = 474,
  /**
   * The 'individual_phone_number' parameter is invalid.
   */
  INVALID_INDIVIDUAL_PHONE_NUMBER = 475,
  /**
   * The 'legal_status' parameter is invalid.
   */
  INVALID_LEGAL_STATUS = 476,
  /**
   * The \'%s\' parameter length must not exceed %d symbols.
   */
  LENGTH_EXCEEDED = 477,
  /**
   * The 'proxy_passport_series' parameter is invalid.
   */
  INVALID_PROXY_PASSPORT_SERIES = 478,
  /**
   * The 'proxy_passport_number' parameter is invalid.
   */
  INVALID_PROXY_PASSPORT_NUMBER = 479,
  /**
   * Update failed. You cannot change your individual taxpayer number. To change it
   */
  CONTRACTOR_DATA_CONFLICTS_WITH_AGREEMENT = 480,
  /**
   * The 'agreement' parameter is invalid.
   */
  INVALID_AGREEMENT_DOCUMENT = 481,
  /**
   * Invalid MIME type.
   */
  INVALID_MIME_TYPE = 482,
  /**
   * Invalid email.
   */
  INVALID_AGREEMENT_EMAIL = 483,
  /**
   * HTTP request was rejected due to probable automatic request resend. Try again later.
   */
  HTTP_REQUEST_REJECTED = 484,
  /**
   * Specify the '%s' parameter
   */
  PARAMETER_CANT_BE_EMPTY = 485,
  /**
   * Specify the '%1$s' parameter.
   */
  PARAMETER_CANT_BE_EMPTY_EX = 485,
  /**
   * Invalid 'bik' parameter value.
   */
  INVALID_BIK = 486,
  /**
   * Invalid 'expense_account' parameter value.
   */
  INVALID_EXPENSE_ACCOUNT = 487,
  /**
   * Invalid 'correspondent_account' parameter value.
   */
  INVALID_CORRESPONDENT_ACCOUNT = 488,
  /**
   * Can't change the contractor in a closed period
   */
  INVALID_CHANGE_CONTRACTOR_IN_PERIOD = 489,
  /**
   * Not found selected contractor
   */
  INVALID_CONTRATOR = 490,
  /**
   * The '%1$s' must be greater than %3$s%4$s.
   */
  LOW_AMOUNT = 491,
  /**
   * The '%1$s' parameter is forbidden.
   */
  FORBIDDEN_PARAMETER = 492,
  /**
   * The '%1$s' isn't unique.
   */
  VALUE_NOT_UNIQUE = 493,
  /**
   * The queues limit per application is exceeded.
   */
  SC_QUEUE_COUNT_LIMIT = 494,
  /**
   * The skill count limit per application is exceeded.";
   */
  SC_SKILL_COUNT_LIMIT = 495,
  /**
   * The '%1$s' parameter is invalid.
   */
  INVALID = 496,
  /**
   * %2$s should be in range of %3$s..%4$s
   */
  INVALID_RANGE = 497,
  /**
   * Agent can be assigned up to 5 skills
   */
  MAX_AGENT_SKILLS_EXCEEDED = 498,
  /**
   * The '%1$s' parameter length must be less than %3$s.
   */
  TOO_LONG = 499,
  /**
   * The 'partner_code' parameter length must be less than 
   */
  INVALID_PARTNER_CODE_LENGTH = 500,
  /**
   * File not found.
   */
  FILE_NOT_FOUND = 501,
  /**
   * No routes for numbers %3$s in dst_numbers
   */
  NO_ROUTE_FOR_DST_NUMBERS = 506,
  /**
   * The 'src_number' parameter is invalid.
   */
  INVALID_SRC_NUMBER = 507,
  /**
   * The 'text' parameter is invalid. 
   */
  INVALID_TEXT = 508,
  /**
   * A2P SMS disabled for number %1$s
   */
  A2P_SMS_DISABLED = 509,
  /**
   * Registration incomplete
   */
  REGISTRATION_INCOMPLETE = 511,
  /**
   * '%1$s' parameter changes limit exceeded.
   */
  EXCEED = 512,
  /**
   * Unable to send an email
   */
  UNABLE_SEND_EMAIL = 513,
  /**
   * Account creation has already started
   */
  LOCKED = 514,
  /**
   * The same operation has been performed recently. Please
   */
  SAME_OPERATION_LIMIT = 515,
  /**
   * Payment in progress.
   */
  PAYMENT_IN_PROGRESS = 516,
  /**
   * The combined length of the '%1$s' and '%2$s' parameters can't be less than 6 characters.
   */
  INSUFFICIENT_PASSPORT_DATA_LENGTH = 517,
  /**
   * Invalid SSL Certificate type. You have specified the VOIP provider type in your request but the certificate provided is not of type VoIP.
   */
  CERT_APPLE_INVALID = 518,
  /**
   * Invalid SSL Certificate type. You have provided the VOIP certificate type in your request but the provider specified is not of type VOIP.
   */
  CERT_APPLE_VOIP_INVALID = 519,
  /**
   * SSL Certificate is expired. Expiration date: %s
   */
  CERT_EXPIRED = 520,
  /**
   * SSL Certificate is not yet valid. Please check the \'Not Valid Before\' parameter in the certificate properties.
   */
  CERT_NOT_YET_VALID = 521,
  /**
   * SSL Certificate does not support production mode. Please check the \'is_dev_mode\' parameter in your request.
   */
  CERT_PROD_MODE_NOT_SUPPORTED = 522,
  /**
   * Password is too weak
   */
  PASSWORD_TOO_WEAK = 523,
  /**
   * Password can't contain spaces.
   */
  WHITESPACES_NOT_ALLOWED = 524,
  /**
   * Grouping by user can be specified for %s reports only.
   */
  INAPPROPRIATE_AGENT_REPORTS = 525,
  /**
   * Grouping by queue can be specified for %s reports only.
   */
  INAPPROPRIATE_QUEUE_REPORTS = 526,
  /**
   * Please make a request outside VPN.
   */
  VPN_IS_NOT_ALLOWED = 527,
  /**
   * Sms is not supported
   */
  NOT_SUPPORT_SMS = 528,
  /**
   * The list of phone numbers for this category is not available.
   */
  PHONE_NUMBERS_LIST_IS_NOT_AVAILABLE = 529,
  /**
   * Cannot get the number list for this category. Please
   */
  BUYING_BY_PHONE_NUMBER_IS_NOT_SUPPORTED = 530,
  /**
   * This phone category does not require a regulation address.
   */
  REGULATION_ADDRESS_NOT_REQUIRED = 531,
  /**
   * This regulation address does not require additional documents.
   */
  REGULATION_ADDRESS_NOT_REQUIRED_ADDITIONAL_DOCUMENTS = 532,
  /**
   * We do not accept cards issued outside Russian Federation.
   */
  ALFABANK_PAYMENT_BY_NOT_RUS_CARD_FORBIDDEN = 533,
  /**
   * Can't find a proper email for receipts.
   */
  NO_EMAIL_FOR_RECEIPT = 534,
  /**
   * Please choose a password that you haven't used before.
   */
  PASSWORD_WAS_ALREADY_USED = 535,
  /**
   * Cannot add or delete Authorized IPs because this setting is managed by your parent account.
   */
  PARENT_AUTHORIZED_IPS_USED = 536,
  /**
   * Changing the email is only possible with password authentication.
   */
  ONLY_PASSWORD_AUTHENTICATION_FOR_EMAIL_CHANGING = 537,
  /**
   * Onboarding is currently in progress.
   */
  ONBOARDING_IN_PROGRESS = 538,
  /**
   * Update failed. No active onboarding process found.
   */
  ONBOARDING_NOT_STARTED = 539,
  /**
   * This type of subscription has been already attached
   */
  COUNTABLE_SUBSCRIPTION_WAS_ALREADY_USED = 540,
  /**
   * Countable subscription must be in active status
   */
  COUNTABLE_SUBSCRIPTION_MUST_BE_IN_ACTIVE_STATUS = 541,
  /**
   * The 'number_status' parameter is invalid.
   */
  INVALID_NUMBER_STATUS = 542,
  /**
   * The billing address is incorrect. Please check it and try again.
   */
  CAN_NOT_PAY_WITHOUT_VALID_ADDR = 543,
  /**
   * Invalid custom_record_storage_id.
   */
  INVALID_CUSTOM_RECORD_STORAGE_ID = 544,
  /**
   * Invalid 'host' parameter value.
   */
  INVALID_HOST_PARAMETER = 545,
  /**
   * Invalid Application IDs.
   */
  INVALID_APPLICATION_IDS = 546,
  /**
   * Test phone number already exists.
   */
  TEST_NUMBER_ALREADY_EXISTS = 547,
  /**
   * Test phone number does not exist.
   */
  TEST_NUMBER_NO_NUMBER = 548,
  /**
   * Test phone number is already verified.
   */
  TEST_NUMBER_VERIFIED = 549,
  /**
   * No attempts left to enter the verification code.
   */
  TEST_NUMBER_CODE_ATTEMPTS_LIMIT = 550,
  /**
   * Please get a code first.
   */
  TEST_NUMBER_NO_CODE = 551,
  /**
   * Wrong verification code.
   */
  TEST_NUMBER_WRONG_CODE = 552,
  /**
   * No attempts left to verify this number.
   */
  TEST_NUMBER_VERIFICATION_LIMIT = 553,
  /**
   * You've reached the daily limit on verification calls
   */
  TEST_NUMBER_VERIFICATION_DAILY_LIMIT = 554,
  /**
   * The 'verification_code' parameter is invalid.
   */
  INVALID_TEST_NUMBER_VERIFICATION_CODE = 555,
  /**
   * You can add only 10 emails addresses.
   */
  EMAIL_COUNT_LIMIT = 556,
  /**
   * Report was not found.
   */
  REPORT_NOT_FOUND = 557,
  /**
   * Application was not found.
   */
  APPLICATION_NOT_FOUND = 558,
  /**
   * Please enter a custom status that you haven't used before.
   */
  SQ_CUSTOM_STATUS_ALREADY_EXISTS = 559,
  /**
   * We need your email address to send a receipt after payment.
   */
  EMPTY_BILLING_EMAIL = 560,
  /**
   * You cannot use this currency with the current storage region. Please choose another currency or storage region.
   */
  MISMATCH_CURRENCY_AND_REGION = 561,
  /**
   * You cannot call this function for custom record storages.
   */
  FORBIDDEN_LINK_REMOVING = 562,
  /**
   * You cannot bind more than %1$s queues to an agent.
   */
  EXCEEDED_QUEUES_PER_AGENT_LIMIT = 563,
  /**
   * The 'price' parameter is invalid.
   */
  INVALID_SETTING_MGP_PRICE = 564,
  /**
   * Setting MGP already exists.
   */
  SETTING_MGP_ALREADY_EXISTS = 565,
  /**
   * Setting MGP doesn't exists.
   */
  SETTING_MGP_DOES_NOT_EXISTS = 566,
  /**
   * Account MGP already exists.
   */
  ACCOUNT_MGP_ALREADY_EXISTS = 567,
  /**
   * Account MGP doesn't exists.
   */
  ACCOUNT_MGP_DOES_NOT_EXISTS = 568,
  /**
   * Date range must be within %1$d days.
   */
  DATE_RANGE_LIMIT = 569,
  /**
   * The caller ID is already verified. You can extend the verification after %1$d day(s).
   */
  CALLER_ID_ALREADY_VERIFIED = 570,
  /**
   * MGP template doesn't exists.
   */
  MGP_TEMPLATE_DOES_NOT_EXISTS = 571,
  /**
   * Address not found.
   */
  AVALARA_ADDR_NOT_FOUND = 572,
  /**
   * You cannot transfer funds to this user
   */
  USER_WITHOUT_SEPARATE_BILLING_ACCOUNT = 573,
  /**
   * Cannot verify your documents at phone numbers provider. %1$s
   */
  BICS_DOCUMENT_FILE_ERROR = 574,
  /**
   * Required fields for phone number provider are missing or invalid. %1$s
   */
  BICS_MANDATORY_FIELDS_ERROR = 575,
  /**
   * Cannot buy the selected phone number. %1$s
   */
  BICS_NUMBERS_ERROR = 576,
  /**
   * Cannot request phone numbers request from the provider. Please contact support.
   */
  BICS_REQUEST_ERROR = 577,
  /**
   * Phone number provider is temporarily unavailable. Please contact support.
   */
  BICS_SERVICE_UNAVAILABLE = 578,
  /**
   * Required address for phone number provider is invalid. %1$s
   */
  BICS_ADDRESS_ERROR = 579,
  /**
   * Cannot purchase the selected phone number. Please contact support.
   */
  BICS_ORDER_ERROR = 580,
  /**
   * No phone numbers available for the current request. Please contact support.
   */
  PHONE_PROVIDER_NO_SUCH_PRODUCT = 581,
  /**
   * Specify a valid mobile number.
   */
  INVALID_PHONE_TO_PAYMENTS = 583,
  /**
   * Specified phone number is rented. Please enter a personal phone number.
   */
  PHONE_IS_NOT_PERSONAL = 584,
}
