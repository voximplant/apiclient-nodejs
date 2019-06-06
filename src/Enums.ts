export enum APIErrorCode{
  /**
   * Fatal error.
   */
  ERR_1 = 1,
  /**
   * Internal error.
   */
  ERR_2 = 2,
  /**
   * DB error.
   */
  ERR_4 = 4,
  /**
   * Billing failed.
   */
  ERR_5 = 5,
  /**
   * Can not generate the unique 'api_key'.
   */
  ERR_6 = 6,
  /**
   * Activation mail error.
   */
  ERR_9 = 9,
  /**
   * Can not generate the unique 'session_id'.
   */
  ERR_10 = 10,
  /**
   * Invalid 'func_name' parameter.
   */
  ERR_12 = 12,
  /**
   * The 'config' table error.
   */
  ERR_13 = 13,
  /**
   * SMS gateway error.
   */
  ERR_14 = 14,
  /**
   * Media server error.
   */
  ERR_15 = 15,
  /**
   * Media balancer error.
   */
  ERR_16 = 16,
  /**
   * Paypoint failed.
   */
  ERR_17 = 17,
  /**
   * CallerID verification server error.
   */
  ERR_18 = 18,
  /**
   * ACD failed.
   */
  ERR_19 = 19,
  /**
   * Phone provider failed.
   */
  ERR_20 = 20,
  /**
   * Call service failed.
   */
  ERR_21 = 21,
  /**
   * Conference balancer error.
   */
  ERR_22 = 22,
  /**
   * Conference server error.
   */
  ERR_23 = 23,
  /**
   * Authorization failed.
   */
  ERR_100 = 100,
  /**
   * Invalid arguments.
   */
  ERR_101 = 101,
  /**
   * Missing 'cmd' parameter.
   */
  ERR_102 = 102,
  /**
   * Unknown command.
   */
  ERR_103 = 103,
  /**
   * Forbidden command.
   */
  ERR_104 = 104,
  /**
   * The required output format type is not supported.
   */
  ERR_105 = 105,
  /**
   * Account's name isn't unique.
   */
  ERR_106 = 106,
  /**
   * Invalid application name.
   */
  ERR_107 = 107,
  /**
   * Exceeded the application count limit per the account.
   */
  ERR_108 = 108,
  /**
   * Exceeded the user count limit per the account.
   */
  ERR_109 = 109,
  /**
   * Invalid plan.
   */
  ERR_110 = 110,
  /**
   * Invalid date format.
   */
  ERR_111 = 111,
  /**
   * The password must be at least 6 characters long.
   */
  ERR_112 = 112,
  /**
   * Account's name must be at least 5 and up to 20 characters long
   */
  ERR_113 = 113,
  /**
   * Account's name should start with a letter and can contain latin characters, digits, hyphen
   */
  ERR_114 = 114,
  /**
   * The 'account_id' parameter is invalid.
   */
  ERR_115 = 115,
  /**
   * The 'application_id' parameter is invalid.
   */
  ERR_116 = 116,
  /**
   * The 'user_id' parameter is invalid.
   */
  ERR_117 = 117,
  /**
   * The user name isn't unique.
   */
  ERR_118 = 118,
  /**
   * Invalid phone number.
   */
  ERR_121 = 121,
  /**
   * The user name should start with a letter or digit and can contain latin characters, digits, hyphen and must be at least 5 characters long
   */
  ERR_122 = 122,
  /**
   * Invalid date range.
   */
  ERR_123 = 123,
  /**
   * Invalid money amount.
   */
  ERR_125 = 125,
  /**
   * Insufficient money.
   */
  ERR_127 = 127,
  /**
   * Account's e-mail isn't unique.
   */
  ERR_128 = 128,
  /**
   * Application name isn't unique.
   */
  ERR_129 = 129,
  /**
   * The script text is too long.
   */
  ERR_130 = 130,
  /**
   * The account isn't activated.
   */
  ERR_131 = 131,
  /**
   * The 'scenario_id' parameter is invalid.
   */
  ERR_132 = 132,
  /**
   * The scenario name isn't unique.
   */
  ERR_133 = 133,
  /**
   * Required parameter is empty.
   */
  ERR_134 = 134,
  /**
   * Session timeout.
   */
  ERR_135 = 135,
  /**
   * Invalid e-mail.
   */
  ERR_136 = 136,
  /**
   * The account isn't logged.
   */
  ERR_137 = 137,
  /**
   * Activation is over for the phone number.
   */
  ERR_139 = 139,
  /**
   * Exceed the max SMS code entering attempts.
   */
  ERR_140 = 140,
  /**
   * The 'sms_code' parameter is invalid.
   */
  ERR_141 = 141,
  /**
   * Activation is not required.
   */
  ERR_142 = 142,
  /**
   * The 'rule_id' parameter is invalid.
   */
  ERR_147 = 147,
  /**
   * The 'rule_pattern' parameter is invalid.
   */
  ERR_148 = 148,
  /**
   * The 'rule_pattern_exclude' parameter is invalid.
   */
  ERR_149 = 149,
  /**
   * The 'call_session_history_id' parameter is invalid.
   */
  ERR_150 = 150,
  /**
   * Rejected payment request.
   */
  ERR_151 = 151,
  /**
   * No bank card.
   */
  ERR_152 = 152,
  /**
   * The card payment amount must be greater than 10$
   */
  ERR_153 = 153,
  /**
   * The 'min_balance' must be greater than 1 $
   */
  ERR_154 = 154,
  /**
   * The 'card_overrun_value' must be greater than 10$
   */
  ERR_155 = 155,
  /**
   * The 'rule_name' parameter is invalid.
   */
  ERR_156 = 156,
  /**
   * The 'user_display_name' parameter is invalid.
   */
  ERR_157 = 157,
  /**
   * The 'card_holder' parameter is invalid.
   */
  ERR_158 = 158,
  /**
   * The 'acct' parameter is invalid.
   */
  ERR_159 = 159,
  /**
   * The 'cvv' parameter is invalid.
   */
  ERR_160 = 160,
  /**
   * The 'session_id' parameter is invalid.
   */
  ERR_161 = 161,
  /**
   * try later...
   */
  ERR_162 = 162,
  /**
   * The 'account_first_name' parameter length must be less than 50
   */
  ERR_163 = 163,
  /**
   * The 'account_last_name' parameter length must be less than 50
   */
  ERR_164 = 164,
  /**
   * Exceed the max SMS sending attempts.
   */
  ERR_165 = 165,
  /**
   * Repeat SMS sending after 3 minutes
   */
  ERR_166 = 166,
  /**
   * The 'activation_method' parameter is invalid.
   */
  ERR_167 = 167,
  /**
   * The 'scenario_name' parameter is invalid.
   */
  ERR_168 = 168,
  /**
   * The 'sip_whitelist_id' parameter is invalid.
   */
  ERR_169 = 169,
  /**
   * The 'sip_whitelist_network' parameter is invalid.
   */
  ERR_170 = 170,
  /**
   * The 'min_balance' must be less than 50 $
   */
  ERR_171 = 171,
  /**
   * Exceeded the SIP white list network count limit per the account.
   */
  ERR_172 = 172,
  /**
   * The account name is forbidden by the black list. Try another name.
   */
  ERR_173 = 173,
  /**
   * The 'sms_message' parameter is invalid.
   */
  ERR_174 = 174,
  /**
   * The 'rule_name' isn't unique.
   */
  ERR_175 = 175,
  /**
   * The 'parent_account_id' parameter is invalid.
   */
  ERR_177 = 177,
  /**
   * Invalid excluded application name.
   */
  ERR_178 = 178,
  /**
   * The 'excluded_application_id' parameter is invalid.
   */
  ERR_179 = 179,
  /**
   * The 'excluded_user_id' parameter is invalid.
   */
  ERR_180 = 180,
  /**
   * The 'phone_id' parameter is invalid.
   */
  ERR_181 = 181,
  /**
   * Occupied phone number.
   */
  ERR_182 = 182,
  /**
   * The 'callerid_id' parameter is invalid.
   */
  ERR_183 = 183,
  /**
   * The 'callerid_number' parameter is invalid.
   */
  ERR_184 = 184,
  /**
   * Forbidden CallerID.
   */
  ERR_185 = 185,
  /**
   * The 'verification_code' parameter is invalid.
   */
  ERR_186 = 186,
  /**
   * Exceeded the unverified CallerID count limit per the account. Try to verify or delete some unverified CallerID.
   */
  ERR_187 = 187,
  /**
   * The 'callerid_number' isn't unique.
   */
  ERR_188 = 188,
  /**
   * The 'mobile_phone' parameter is invalid.
   */
  ERR_189 = 189,
  /**
   * The 'to_number' parameter is invalid.
   */
  ERR_190 = 190,
  /**
   * The 'from_number' parameter is invalid.
   */
  ERR_191 = 191,
  /**
   * The 'sms_id' parameter is invalid.
   */
  ERR_192 = 192,
  /**
   * The callerid number is forbidden.
   */
  ERR_193 = 193,
  /**
   * The 'child_account_id' parameter is invalid.
   */
  ERR_194 = 194,
  /**
   * Unsupported batch command.
   */
  ERR_195 = 195,
  /**
   * Too many batch commands. The max command count is 50 per batch.
   */
  ERR_196 = 196,
  /**
   * The 'transaction_id' parameter is invalid.
   */
  ERR_197 = 197,
  /**
   * The 'child_account_name' parameter is invalid.
   */
  ERR_198 = 198,
  /**
   * The 'child_account_email' parameter is invalid.
   */
  ERR_199 = 199,
  /**
   * The 'new_child_account_name' parameter is invalid.
   */
  ERR_200 = 200,
  /**
   * The 'new_child_account_email' parameter is invalid.
   */
  ERR_201 = 201,
  /**
   * The 'language_code' parameter is invalid.
   */
  ERR_202 = 202,
  /**
   * The 'mobile_phone' parameter is invalid.
   */
  ERR_203 = 203,
  /**
   * The 'billing_address_country_code' parameter is invalid.
   */
  ERR_204 = 204,
  /**
   * The 'billing_address_name' parameter length must be less than 200.
   */
  ERR_205 = 205,
  /**
   * The 'billing_address_address' parameter length must be less than 512.
   */
  ERR_206 = 206,
  /**
   * The 'billing_address_zip' parameter length must be less than 30.
   */
  ERR_207 = 207,
  /**
   * The 'billing_address_phone' parameter length must be less than 30.
   */
  ERR_208 = 208,
  /**
   * The 'transaction_type' parameter is invalid.
   */
  ERR_209 = 209,
  /**
   * The 'currency' parameter is invalid.
   */
  ERR_210 = 210,
  /**
   * The 'account_custom_data' parameter length must be less than 8192.
   */
  ERR_211 = 211,
  /**
   * The 'user_custom_data' parameter length must be less than 8192.
   */
  ERR_212 = 212,
  /**
   * The 'acd_queue_name' parameter length must be less than 100.
   */
  ERR_213 = 213,
  /**
   * The 'service_probability' parameter value must be in range [0.5 ... 1].
   */
  ERR_214 = 214,
  /**
   * The 'max_queue_size' parameter is invalid.
   */
  ERR_215 = 215,
  /**
   * The 'max_waiting_time' parameter is invalid.
   */
  ERR_216 = 216,
  /**
   * The 'average_service_time' parameter is invalid.
   */
  ERR_217 = 217,
  /**
   * The 'acd_queue_id' parameter is invalid.
   */
  ERR_218 = 218,
  /**
   * Queue's name isn't unique.
   */
  ERR_219 = 219,
  /**
   * The 'skill_name' parameter length must be less than 512.
   */
  ERR_220 = 220,
  /**
   * Skill's name isn't unique.
   */
  ERR_221 = 221,
  /**
   * The 'skill_id' parameter is invalid.
   */
  ERR_222 = 222,
  /**
   * The 'acd_queue_priority' parameter should be positive.
   */
  ERR_223 = 223,
  /**
   * The 'excluded_skill_id' parameter is invalid.
   */
  ERR_224 = 224,
  /**
   * The 'amount' parameter is invalid.
   */
  ERR_225 = 225,
  /**
   * The payment amount is very low. The amount must be greater than 500 RUR.
   */
  ERR_226 = 226,
  /**
   * The 'acd_status' parameter is invalid.
   */
  ERR_227 = 227,
  /**
   * The 'aggregation' parameter is invalid.
   */
  ERR_228 = 228,
  /**
   * The 'report' parameter is invalid.
   */
  ERR_229 = 229,
  /**
   * Account password change is over. Try later.
   */
  ERR_230 = 230,
  /**
   * No more attempts to enter code.
   */
  ERR_231 = 231,
  /**
   * The 'code' parameter is invalid.
   */
  ERR_232 = 232,
  /**
   * The 'date' parameter is invalid.
   */
  ERR_233 = 233,
  /**
   * The 'account_transaction_description' parameter length must be less than 120.
   */
  ERR_234 = 234,
  /**
   * The 'user_transaction_description' parameter length must be less than 120.
   */
  ERR_235 = 235,
  /**
   * The 'parent_transaction_description' parameter length must be less than 120.
   */
  ERR_236 = 236,
  /**
   * The 'child_transaction_description' parameter length must be less than 120.
   */
  ERR_237 = 237,
  /**
   * The 'acceptable_waiting_time' list size must be less than 30.
   */
  ERR_238 = 238,
  /**
   * The 'country_code' parameter is invalid.
   */
  ERR_239 = 239,
  /**
   * The 'phone_category_name' parameter is invalid.
   */
  ERR_240 = 240,
  /**
   * The 'phone_region_id' parameter is invalid.
   */
  ERR_241 = 241,
  /**
   * The 'country_state' parameter is invalid.
   */
  ERR_242 = 242,
  /**
   * The 'phone_count' parameter is invalid.
   */
  ERR_243 = 243,
  /**
   * The 'subscription_template_id' parameter is invalid.
   */
  ERR_244 = 244,
  /**
   * The 'subscription_template_name' parameter is invalid.
   */
  ERR_245 = 245,
  /**
   * The 'subscription_template_type' parameter is invalid.
   */
  ERR_246 = 246,
  /**
   * The 'prioriity' parameter is invaid.
   */
  ERR_247 = 247,
  /**
   * The 'max_simultaneous' parameter is invalid.
   */
  ERR_248 = 248,
  /**
   * The 'num_attempts' parameter is invalid.
   */
  ERR_249 = 249,
  /**
   * Invalid CSV file.
   */
  ERR_250 = 250,
  /**
   * Call service error
   */
  ERR_251 = 251,
  /**
   * Error response from call service.
   */
  ERR_252 = 252,
  /**
   * The 'name' parameter is invalid.
   */
  ERR_253 = 253,
  /**
   * The 'group' parameter is invalid.
   */
  ERR_254 = 254,
  /**
   * The 'list_id' parameter is invalid.
   */
  ERR_255 = 255,
  /**
   * Not found parent account.
   */
  ERR_256 = 256,
  /**
   * The 'reference_ip' parameter is invalid.
   */
  ERR_257 = 257,
  /**
   * The 'to_phone_next_renewal' parameter is invalid.
   */
  ERR_258 = 258,
  /**
   * The 'media_url' parameter is invalid.
   */
  ERR_259 = 259,
  /**
   * Denied access to the media link.
   */
  ERR_260 = 260,
  /**
   * The 'record_id' parameter is invalid.
   */
  ERR_261 = 261,
  /**
   * The 'PaRes' parameter is invalid.
   */
  ERR_262 = 262,
  /**
   * The 'MD' parameter is invalid.
   */
  ERR_263 = 263,
  /**
   * The 'private' parameter is invalid.
   */
  ERR_264 = 264,
  /**
   * The 'promo_code' parameter is invalid.
   */
  ERR_265 = 265,
  /**
   * The promo code is expired.
   */
  ERR_266 = 266,
  /**
   * The promo code has been already redeemed.
   */
  ERR_267 = 267,
  /**
   * The second promo code activation is forbidden.
   */
  ERR_268 = 268,
  /**
   * The 'conference_name' parameter is invalid.
   */
  ERR_269 = 269,
  /**
   * The 'conference_name' parameter length must be less than 50.
   */
  ERR_270 = 270,
  /**
   * The service level threshold count must be less than 5.
   */
  ERR_271 = 271,
  /**
   * Exceeded the maximum possible number of sip registrations.
   */
  ERR_272 = 272,
  /**
   * The 'username' parameter is invalid.
   */
  ERR_273 = 273,
  /**
   * The 'proxy' parameter is invalid.
   */
  ERR_274 = 274,
  /**
   * The 'registration_id' parameter is invalid.
   */
  ERR_275 = 275,
  /**
   * The 'account_document' parameter is invalid.
   */
  ERR_278 = 278,
  /**
   * Repeat an account document sending after 2 minutes.
   */
  ERR_280 = 280,
  /**
   * Account verification required.
   */
  ERR_281 = 281,
  /**
   * Account verification in progress.
   */
  ERR_282 = 282,
  /**
   * The 'to_purchase_date' parameter is invalid.
   */
  ERR_283 = 283,
  /**
   * The 'admin_user_id' parameter is invalid.
   */
  ERR_284 = 284,
  /**
   * The 'required_admin_user_id' parameter is invalid.
   */
  ERR_285 = 285,
  /**
   * The 'required_admin_user_name' parameter is invalid.
   */
  ERR_286 = 286,
  /**
   * The admin user name length must be less than 50.
   */
  ERR_287 = 287,
  /**
   * The 'admin_user_display_name' parameter length must be less than 255.
   */
  ERR_288 = 288,
  /**
   * Exceeded the admin user count limit per the account.
   */
  ERR_289 = 289,
  /**
   * The admin_user_name isn't unique.
   */
  ERR_290 = 290,
  /**
   * The 'admin_role_id' parameter is invalid.
   */
  ERR_291 = 291,
  /**
   * The 'admin_role_name' parameter is invalid.
   */
  ERR_292 = 292,
  /**
   * The admin role name length must be less than 160.
   */
  ERR_293 = 293,
  /**
   * The admin_role_name isn't unique.
   */
  ERR_294 = 294,
  /**
   * Exceeded the admin role count limit per the account.
   */
  ERR_295 = 295,
  /**
   * The 'allowed_entries' parameter is invalid.
   */
  ERR_296 = 296,
  /**
   * The 'denied_entries' parameter is invalid.
   */
  ERR_297 = 297,
  /**
   * The 'included_admin_user_id' parameter is invalid.
   */
  ERR_298 = 298,
  /**
   * The 'excluded_admin_user_id' parameter is invalid.
   */
  ERR_299 = 299,
  /**
   * The 'like_admin_role_id' parameter is invalid.
   */
  ERR_300 = 300,
  /**
   * The 'included_admin_role_id' parameter is invalid.
   */
  ERR_301 = 301,
  /**
   * The 'excluded_admin_role_id' parameter is invalid.
   */
  ERR_302 = 302,
  /**
   * The 'payment_reference' parameter is ambiguous.
   */
  ERR_303 = 303,
  /**
   * The 'payment_reference' parameter length must be less than 127.
   */
  ERR_304 = 304,
  /**
   * The 'inn' parameter is invalid.
   */
  ERR_305 = 305,
  /**
   * The 'kpp' parameter is invalid.
   */
  ERR_306 = 306,
  /**
   * The 'company_name' parameter length must be less than 512.
   */
  ERR_307 = 307,
  /**
   * The 'company_address' parameter length must be less than 512.
   */
  ERR_308 = 308,
  /**
   * The 'company_phone' parameter length must be less than 20.
   */
  ERR_309 = 309,
  /**
   * Forbidden to edit the contractor. Please send an email to the VoxImplant team instead.
   */
  ERR_310 = 310,
  /**
   * Please set the contractor info first.
   */
  ERR_311 = 311,
  /**
   * The 'old_invoice_number' parameter is invalid.
   */
  ERR_312 = 312,
  /**
   * The 'amount' parameter is invalid.
   */
  ERR_313 = 313,
  /**
   * Concurrent resource limit exceeded.
   */
  ERR_314 = 314,
  /**
   * The requested resource parameter is invalid.
   */
  ERR_315 = 315,
  /**
   * The requested resource parameter is forbidden.
   */
  ERR_316 = 316,
  /**
   * Upgrade to a paid account to use the requested resource parameter.
   */
  ERR_317 = 317,
  /**
   * The money amount must be greater than N RUR.
   */
  ERR_318 = 318,
  /**
   * The 'old_invoice_number' parameter is invalid.
   */
  ERR_319 = 319,
  /**
   * The 'authorized_ip' parameter is invalid.
   */
  ERR_320 = 320,
  /**
   * The authorized IP not found.
   */
  ERR_321 = 321,
  /**
   * The 'contains_ip' parameter is invalid.
   */
  ERR_322 = 322,
  /**
   * Exceeded the authorized IP count limit per the account.
   */
  ERR_323 = 323,
  /**
   * The 'verification_name' parameter is invalid.
   */
  ERR_324 = 324,
  /**
   * The 'to_unverified_hold_until' parameter is invalid.
   */
  ERR_325 = 325,
  /**
   * The 'verification_status' parameter is invalid.
   */
  ERR_326 = 326,
  /**
   * Error parsing XLS file.
   */
  ERR_327 = 327,
  /**
   * Occupied subscription.
   */
  ERR_330 = 330,
  /**
   * No phones in the stock.
   */
  ERR_331 = 331,
  /**
   * Insufficient phones in the stock, available %1$s
   */
  ERR_332 = 332,
  /**
   * Not found country by code 'UA'
   */
  ERR_333 = 333,
  /**
   * Not found country's region by code
   */
  ERR_334 = 334,
  /**
   * Phone number already exists
   */
  ERR_335 = 335,
  /**
   * Ambiguous region
   */
  ERR_336 = 336,
  /**
   * Not found user documents
   */
  ERR_337 = 337,
  /**
   * Verification user's document already complete
   */
  ERR_338 = 338,
  /**
   * User documents not exists
   */
  ERR_339 = 339,
  /**
   * Rate limit exceed.
   */
  ERR_340 = 340,
  /**
   * Not found record by id
   */
  ERR_341 = 341,
  /**
   * The 'queue_id' parameter is invalid.
   */
  ERR_342 = 342,
  /**
   * The 'individual_full_name' parameter is invalid.
   */
  ERR_343 = 343,
  /**
   * The 'individual_birth_date' parameter is invalid.
   */
  ERR_344 = 344,
  /**
   * The 'individual_passport_series' parameter is invalid.
   */
  ERR_345 = 345,
  /**
   * The 'individual_passport_number' parameter is invalid.
   */
  ERR_346 = 346,
  /**
   * The 'individual_passport_issue_date' parameter is invalid.
   */
  ERR_347 = 347,
  /**
   * The 'individual_passport_issued_by' parameter is invalid.
   */
  ERR_348 = 348,
  /**
   * The 'individual_registration_address' parameter is invalid.
   */
  ERR_349 = 349,
  /**
   * The 'legal_entry_full_name' parameter is invalid.
   */
  ERR_350 = 350,
  /**
   * The 'legal_entry_phone' parameter is invalid.
   */
  ERR_351 = 351,
  /**
   * The 'legal_entry_address' parameter is invalid.
   */
  ERR_352 = 352,
  /**
   * The 'legal_entry_actual_address' parameter is invalid.
   */
  ERR_353 = 353,
  /**
   * The 'ogrn' parameter is invalid.
   */
  ERR_354 = 354,
  /**
   * The 'call_history_report_id' parameter is invalid.
   */
  ERR_355 = 355,
  /**
   * The call history report isn't ready.
   */
  ERR_356 = 356,
  /**
   * The call history report generating failed.
   */
  ERR_357 = 357,
  /**
   * Invalid verification type
   */
  ERR_358 = 358,
  /**
   * Invalid salutation
   */
  ERR_359 = 359,
  /**
   * Not found voxbone verification type
   */
  ERR_360 = 360,
  /**
   * Not found proof of address
   */
  ERR_361 = 361,
  /**
   * The 'new_admin_user_name' parameter is invalid.
   */
  ERR_362 = 362,
  /**
   * The 'code' parameter (access token) is invalid.
   */
  ERR_363 = 363,
  /**
   * The current account password is missing.
   */
  ERR_364 = 364,
  /**
   * Not found purchase info.
   */
  ERR_365 = 365,
  /**
   * Pending address validation.
   */
  ERR_366 = 366,
  /**
   * The 'callback_type' parameter is invalid.
   */
  ERR_367 = 367,
  /**
   * Phone provider error: %1$s
   */
  ERR_368 = 368,
  /**
   * Incorrect parameter 'phone_owner_region_code'
   */
  ERR_369 = 369,
  /**
   * Incorrect parameter 'phone_owner_region_code' or 'phone_owner_zip_code'
   */
  ERR_370 = 370,
  /**
   * The 'history_type' parameter is invalid.
   */
  ERR_371 = 371,
  /**
   * The 'pstn_blacklist_phone' parameter is invalid
   */
  ERR_372 = 372,
  /**
   * Exceeded the PSTN blacklist phones count limit per the account.
   */
  ERR_373 = 373,
  /**
   * The 'carrier_id' parameter is invalid.
   */
  ERR_374 = 374,
  /**
   * No scenario is bound to the rule.
   */
  ERR_375 = 375,
  /**
   * The 'subscription_id' parameter is invalid.
   */
  ERR_376 = 376,
  /**
   * The phone group is incomplete.
   */
  ERR_377 = 377,
  /**
   * The 'push_id' parameter is invalid.
   */
  ERR_378 = 378,
  /**
   * Forbidden to change the account plan.
   */
  ERR_379 = 379,
  /**
   * The push provider is invalid.
   */
  ERR_380 = 380,
  /**
   * No application is bound to the queue.
   */
  ERR_381 = 381,
  /**
   * The 'server_type' parameter is invalid.
   */
  ERR_382 = 382,
  /**
   * The 'server_ip' parameter is invalid.
   */
  ERR_383 = 383,
  /**
   * Push credential has already attached to any of applications: 
   */
  ERR_384 = 384,
  /**
   * Sending sms error
   */
  ERR_385 = 385,
  /**
   * Sms disabled for number 
   */
  ERR_386 = 386,
  /**
   * Sms disabling error
   */
  ERR_387 = 387,
  /**
   * Sms enabling error
   */
  ERR_388 = 388,
  /**
   * No bank card order.
   */
  ERR_389 = 389,
  /**
   * The card payment amount must be less than %1$s $.
   */
  ERR_390 = 390,
  /**
   * Exceeded the card payment limit.
   */
  ERR_391 = 391,
  /**
   * Please enter the captcha!
   */
  ERR_392 = 392,
  /**
   * The user isn't bound to the application.
   */
  ERR_393 = 393,
  /**
   * The SIP registration is persistent.
   */
  ERR_394 = 394,
  /**
   * It's your phone number.
   */
  ERR_395 = 395,
  /**
   * The 'record_storage_id' parameter is invalid.
   */
  ERR_396 = 396,
  /**
   * Exceeded the children account count limit per day.
   */
  ERR_397 = 397,
  /**
   * The 'callback_url' parameter is invalid.
   */
  ERR_398 = 398,
  /**
   * The 'callback_salt' parameter length must be less than 40.
   */
  ERR_399 = 399,
  /**
   * The 'pstn_blacklist_id' parameter is invalid.
   */
  ERR_400 = 400,
  /**
   * The 'advanced_filters' parameter is invalid.
   */
  ERR_401 = 401,
  /**
   * The 'contact_id' parameter is invalid.
   */
  ERR_405 = 405,
  /**
   * The 'contact_data' parameter is invalid.
   */
  ERR_406 = 406,
  /**
   * The contact isn't unique.
   */
  ERR_407 = 407,
  /**
   * The contact data must be at least 1 and up to 1024 characters long
   */
  ERR_408 = 408,
  /**
   * The 'contact_type' parameter is invalid.
   */
  ERR_409 = 409,
  /**
   * The 'notification_group' parameter is invalid.
   */
  ERR_410 = 410,
  /**
   * Exceeded the contact count limit per the account.
   */
  ERR_411 = 411,
  /**
   * The 'new_contact_data' parameter is invalid.
   */
  ERR_412 = 412,
  /**
   * The 'new_contact_type' parameter is invalid.
   */
  ERR_413 = 413,
  /**
   * The 'verification_code' parameter is invalid.
   */
  ERR_414 = 414,
  /**
   * The contact is already verified.
   */
  ERR_415 = 415,
  /**
   * Repeat after %1$s seconds
   */
  ERR_416 = 416,
  /**
   * The contact description must be at least 1 and up to 1024 characters long
   */
  ERR_417 = 417,
  /**
   * The scenario count limit is exceeded.
   */
  ERR_418 = 418,
  /**
   * The scenario count limit per rule is exceeded.
   */
  ERR_419 = 419,
  /**
   * Multi subscription doesn't exists.
   */
  ERR_420 = 420,
  /**
   * Multi subscription doesn't exist for the specified numbers.
   */
  ERR_421 = 421,
  /**
   * The 'source' parameter is invalid.
   */
  ERR_422 = 422,
  /**
   * The 'destination' parameter is invalid.
   */
  ERR_423 = 423,
  /**
   * Provided regulation address can't be used for numbers in the specified region.
   */
  ERR_424 = 424,
  /**
   * The 'pstn_blacklist_phone' parameter length must be less than 100.
   */
  ERR_425 = 425,
  /**
   * The 'plan_type' parameter is invalid.
   */
  ERR_426 = 426,
  /**
   * Invalid list type. Possible values are: 'automatic' and 'manual'.
   */
  ERR_427 = 427,
  /**
   * Invalid status. Possible values are: 'in progress', 'canceled' and 'completed'.
   */
  ERR_428 = 428,
}
