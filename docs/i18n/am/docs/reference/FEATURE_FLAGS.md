# Feature Flags (አማርኛ)

🌐 **Languages:** 🇺🇸 [English](../../../../reference/FEATURE_FLAGS.md) · 🇸🇦 [ar](../../../ar/docs/reference/FEATURE_FLAGS.md) · 🇦🇿 [az](../../../az/docs/reference/FEATURE_FLAGS.md) · 🇧🇬 [bg](../../../bg/docs/reference/FEATURE_FLAGS.md) · 🇧🇩 [bn](../../../bn/docs/reference/FEATURE_FLAGS.md) · 🇧🇦 [bs](../../../bs/docs/reference/FEATURE_FLAGS.md) · 🇨🇿 [cs](../../../cs/docs/reference/FEATURE_FLAGS.md) · 🇩🇰 [da](../../../da/docs/reference/FEATURE_FLAGS.md) · 🇩🇪 [de](../../../de/docs/reference/FEATURE_FLAGS.md) · 🇬🇷 [el](../../../el/docs/reference/FEATURE_FLAGS.md) · 🇪🇸 [es](../../../es/docs/reference/FEATURE_FLAGS.md) · 🇪🇪 [et](../../../et/docs/reference/FEATURE_FLAGS.md) · 🇮🇷 [fa](../../../fa/docs/reference/FEATURE_FLAGS.md) · 🇫🇮 [fi](../../../fi/docs/reference/FEATURE_FLAGS.md) · 🇫🇷 [fr](../../../fr/docs/reference/FEATURE_FLAGS.md) · 🇮🇪 [ga](../../../ga/docs/reference/FEATURE_FLAGS.md) · 🇮🇳 [gu](../../../gu/docs/reference/FEATURE_FLAGS.md) · 🇳🇬 [ha](../../../ha/docs/reference/FEATURE_FLAGS.md) · 🇮🇱 [he](../../../he/docs/reference/FEATURE_FLAGS.md) · 🇮🇳 [hi](../../../hi/docs/reference/FEATURE_FLAGS.md) · 🇭🇷 [hr](../../../hr/docs/reference/FEATURE_FLAGS.md) · 🇭🇺 [hu](../../../hu/docs/reference/FEATURE_FLAGS.md) · 🇦🇲 [hy](../../../hy/docs/reference/FEATURE_FLAGS.md) · 🇮🇩 [id](../../../id/docs/reference/FEATURE_FLAGS.md) · 🇳🇬 [ig](../../../ig/docs/reference/FEATURE_FLAGS.md) · 🇮🇹 [it](../../../it/docs/reference/FEATURE_FLAGS.md) · 🇯🇵 [ja](../../../ja/docs/reference/FEATURE_FLAGS.md) · 🇬🇪 [ka](../../../ka/docs/reference/FEATURE_FLAGS.md) · 🇰🇭 [km](../../../km/docs/reference/FEATURE_FLAGS.md) · 🇮🇳 [kn](../../../kn/docs/reference/FEATURE_FLAGS.md) · 🇰🇷 [ko](../../../ko/docs/reference/FEATURE_FLAGS.md) · 🇱🇹 [lt](../../../lt/docs/reference/FEATURE_FLAGS.md) · 🇱🇻 [lv](../../../lv/docs/reference/FEATURE_FLAGS.md) · 🇮🇳 [ml](../../../ml/docs/reference/FEATURE_FLAGS.md) · 🇮🇳 [mr](../../../mr/docs/reference/FEATURE_FLAGS.md) · 🇲🇾 [ms](../../../ms/docs/reference/FEATURE_FLAGS.md) · 🇲🇹 [mt](../../../mt/docs/reference/FEATURE_FLAGS.md) · 🇲🇲 [my](../../../my/docs/reference/FEATURE_FLAGS.md) · 🇳🇵 [ne](../../../ne/docs/reference/FEATURE_FLAGS.md) · 🇳🇱 [nl](../../../nl/docs/reference/FEATURE_FLAGS.md) · 🇳🇴 [no](../../../no/docs/reference/FEATURE_FLAGS.md) · 🇮🇳 [or](../../../or/docs/reference/FEATURE_FLAGS.md) · 🇮🇳 [pa](../../../pa/docs/reference/FEATURE_FLAGS.md) · 🇵🇭 [phi](../../../phi/docs/reference/FEATURE_FLAGS.md) · 🇵🇱 [pl](../../../pl/docs/reference/FEATURE_FLAGS.md) · 🇵🇹 [pt](../../../pt/docs/reference/FEATURE_FLAGS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/reference/FEATURE_FLAGS.md) · 🇷🇴 [ro](../../../ro/docs/reference/FEATURE_FLAGS.md) · 🇷🇺 [ru](../../../ru/docs/reference/FEATURE_FLAGS.md) · 🇱🇰 [si](../../../si/docs/reference/FEATURE_FLAGS.md) · 🇸🇰 [sk](../../../sk/docs/reference/FEATURE_FLAGS.md) · 🇸🇮 [sl](../../../sl/docs/reference/FEATURE_FLAGS.md) · 🇷🇸 [sr](../../../sr/docs/reference/FEATURE_FLAGS.md) · 🇸🇪 [sv](../../../sv/docs/reference/FEATURE_FLAGS.md) · 🇰🇪 [sw](../../../sw/docs/reference/FEATURE_FLAGS.md) · 🇮🇳 [ta](../../../ta/docs/reference/FEATURE_FLAGS.md) · 🇮🇳 [te](../../../te/docs/reference/FEATURE_FLAGS.md) · 🇹🇭 [th](../../../th/docs/reference/FEATURE_FLAGS.md) · 🇹🇷 [tr](../../../tr/docs/reference/FEATURE_FLAGS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/reference/FEATURE_FLAGS.md) · 🇵🇰 [ur](../../../ur/docs/reference/FEATURE_FLAGS.md) · 🇺🇿 [uz](../../../uz/docs/reference/FEATURE_FLAGS.md) · 🇻🇳 [vi](../../../vi/docs/reference/FEATURE_FLAGS.md) · 🇳🇬 [yo](../../../yo/docs/reference/FEATURE_FLAGS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/reference/FEATURE_FLAGS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/reference/FEATURE_FLAGS.md)

---

> ያለ **ዳግም ማሰማራት** የOmniRouteን ባህሪ የሚቀይሩ የሩጫ ጊዜ መቀያየሪያዎች።
> እዚህ የተዘረዘረው እያንዳንዱ ጠቋሚ በ
> [`src/shared/constants/featureFlagDefinitions.ts`](../../src/shared/constants/featureFlagDefinitions.ts)
> ውስጥ ተገልጿል — ይህም ብቸኛው የእውነት ምንጭ ነው። ዳሽቦርዱም ሆነ REST API ከዚያ
> ፋይል ስለሚያነቡ፣ ከታች ያለው ሰንጠረዥ ከእሱ ጋር 1:1 እንዲዛመድ ተፈጥሯል።

---

## የባህሪ ጠቋሚዎች ምንድን ናቸው

የባህሪ ጠቋሚ በስም የተሰየመ መቀያየሪያ (boolean ወይም enum) ሲሆን፣ እሴቱ በሩጫ ጊዜ
ሊቀየር እና ዳግም የሂደት ማሰማራት ሳያስፈልግ በውሂብ ጎታው ውስጥ ሊቀመጥ ይችላል። እያንዳንዱ
ጠቋሚ `key`፣ `label`፣ `description`፣ `category`፣ `defaultValue`፣ `type` እና `requiresRestart`
ፍንጭ ባለው `FeatureFlagDefinition` ይገለጻል።

### የመፍትሔ ቅደም ተከተል

የአንድ ጠቋሚ **ተግባራዊ እሴት** በ
[`resolveFeatureFlag()`](../../src/shared/utils/featureFlags.ts) በሚከተለው
ቅድሚያ ይወሰናል (ከፍተኛው ያሸንፋል)፦

1. **የDB ተተኪ እሴት** — በ`feature_flags` የስም ክልል ስር ባለው `key_value`
   ሰንጠረዥ ውስጥ የተከማቸ እሴት (በዳሽቦርዱ ወይም በREST API በኩል የሚዋቀር)።
2. **የአካባቢ ተለዋዋጭ** — ከተዋቀረ እና ባዶ ካልሆነ `process.env[<KEY>]`።
3. **የትርጉም ነባሪ** — ከ`featureFlagDefinitions.ts` የሚገኘው `defaultValue`።

የboolean ጠቋሚ ተግባራዊ እሴቱ `"true"`፣ `"1"` ወይም `"yes"` ሲሆን
**እንደነቃ** ይቆጠራል (`isFeatureFlagEnabled()`ን ይመልከቱ)።

> [!NOTE]
> አብዛኞቹ ጠቋሚዎች በ[`ENVIRONMENT.md`](./ENVIRONMENT.md) ውስጥ የተመዘገበ
> **ተመሳሳይ ስም** ያለው ተዛማጅ የአካባቢ ተለዋዋጭም አላቸው። የጠቋሚው የDB ተተኪ እሴት
> ከዚያ የአካባቢ ተለዋዋጭ ቅድሚያ ይኖረዋል። `requiresRestart: true` ያለው ጠቋሚ
> ወዲያውኑ ይቀመጣል፣ ነገር ግን ዳግም የሚነበበው ሂደቱ ሲጀምር ብቻ ነው — እሱን መቀያየር በዳሽቦርዱ ውስጥ
> **"አገልጋዩን ዳግም ያስጀምሩ"** የሚል ሰንደቅ ያሳያል።

---

## የFlag ካታሎግ

በ6 ምድቦች የተከፋፈሉ 84 flags። **ነባሪ** ማለት በትርጉሙ የተወሰነው ነባሪ ነው — ይህም
የDB መሻርም ሆነ የአካባቢ ተለዋዋጭ በማይኖርበት ጊዜ ጥቅም ላይ የሚውለው እሴት ነው።

### ደህንነት (10)

| ቁልፍ                                     | ዓይነት    | ነባሪ      | መግለጫ                                                                                                                                                                                              |
| --------------------------------------- | ------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `REQUIRE_API_KEY`                       | boolean | `false`  | ለሁሉም ገቢ ጥያቄዎች የAPI ቁልፍ እንዲኖር ያስገድዱ።                                                                                                                                                               |
| `INPUT_SANITIZER_ENABLED`               | boolean | `true`   | ለሁሉም ጥያቄዎች የግብዓት ማጽዳትን ያንቁ።                                                                                                                                                                       |
| `INJECTION_GUARD_MODE`                  | enum    | `off`    | የPrompt injection ጥበቃ ሁነታ። እሴቶች፦ `off`፣ `warn`፣ `block`፣ `redact`።                                                                                                                                |
| `PII_REDACTION_ENABLED`                 | boolean | `false`  | PIIን ከጥያቄዎች ውስጥ ይሰውሩ (`INPUT_SANITIZER_MODE` ላይ ጥገኛ አይደለም)።                                                                                                                                       |
| `PII_RESPONSE_SANITIZATION`             | boolean | `false`  | PIIን ከአቅራቢ ምላሾች ውስጥ ያጽዱ።                                                                                                                                                                          |
| `PII_RESPONSE_SANITIZATION_MODE`        | enum    | `redact` | የPII ምላሽ ማጽዳት ሁነታ። እሴቶች፦ `redact`፣ `warn`፣ `block`፣ `off`።                                                                                                                                        |
| `OUTBOUND_SSRF_GUARD_ENABLED`           | boolean | `true`   | የቆየ ተለዋጭ ስም፦ በዚህ flag የdashboard መቀያየሪያ ላይ የተቀመጠ እሴት ከአካባቢው በፊት ይነበባል፤ በሁለቱም ውስጥ `false`፣ `0`፣ `no` ወይም `off` የወጪ URL ጥበቃውን የhost ፍተሻዎች እንደ `OMNIROUTE_ALLOW_PRIVATE_PROVIDER_URLS` ያጠፋል።         |
| `ALLOW_API_KEY_REVEAL`                  | boolean | `false`  | ማንነታቸው የተረጋገጠ የdashboard ተጠቃሚዎች የተሸፈኑ እሴቶችን ብቻ ከማየት ይልቅ የተከማቹ የAPI ቁልፎችን እንዲያሳዩ ይፍቀዱ።                                                                                                             |
| `AUTH_LOG_INCLUDE_ACCOUNT_ID`           | boolean | `false`  | በAUTH log መስመሮች ውስጥ የመለያ ቅድመ ቅጥያውን ያካትቱ (ለምሳሌ "የ<provider> መለያ በጥቅም ላይ ነው፦ abc12345...")። የመለያ መለያዎች ከጋራ/ባለብዙ-ተከራይ የሂደት logs እንዲሰወሩ በነባሪነት ተሰናክሏል። ከDebug Mode ነጻ ነው፤ Debug Modeን መቀየር ይህን አያሳይም። |
| `OMNIROUTE_OIDC_DISABLE_PASSWORD_LOGIN` | boolean | `false`  | OIDC ሲነቃ ተጠቃሚዎች በOIDC Single Sign-On በኩል ብቻ ማንነታቸውን እንዲያረጋግጡ የይለፍ ቃል መግቢያን ያሰናክሉ። ሲሰናከል (ነባሪው) ሁለቱም የይለፍ ቃል መግቢያ እና OIDC ይገኛሉ።                                                                    |

### አውታረ መረብ (23)

| ቁልፍ                                             | ዓይነት    | ነባሪ     | ዳግም ማስጀመር | መግለጫ                                                                                                                                                                                                                                                                                                                                                                                                         |
| ----------------------------------------------- | ------- | ------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `ENABLE_TLS_FINGERPRINT`                        | ቡሊያን    | `false` | ✓         | የTLS አሻራ መደበቂያ ሁነታን አንቃ።                                                                                                                                                                                                                                                                                                                                                                                     |
| `AUDIO_REMOTE_PROVIDER_NODES`                   | ቡሊያን    | `false` |           | የ /v1/audio/* መስመሮች ከlocalhost ውጭ በሚስተናገዱ OpenAI-ተኳኋኝ አቅራቢ ኖዶች እንዲጠቀሙ ፍቀድ። በነባሪ ጠፍቷል — ኦዲዮን ወደ ሩቅ አስተናጋጅ ማዘዋወር የወጪ ትራፊክ ማንነትን ስለሚቀይር ግልጽ የኦፕሬተር ውሳኔ መሆን አለበት። Loopback ኖዶች ሁልጊዜ ይፈቀዳሉ እና ተጽዕኖ አይደርስባቸውም።                                                                                                                                                                                                     |
| `RERANK_REMOTE_PROVIDER_NODES`                  | ቡሊያን    | `false` |           | POST /v1/rerank (እና የማህደረ ትውስታ ኤንጂኑ loopback ዳግም-ደረጃ-አሰጣጥ ደረጃ) ከlocalhost ውጭ በሚስተናገዱ OpenAI-ተኳኋኝ አቅራቢ ኖዶች እንዲጠቀም ፍቀድ። በነባሪ ጠፍቷል — ወደ ሩቅ አስተናጋጅ ማዘዋወር የወጪ ትራፊክ ማንነትን ስለሚቀይር ግልጽ የኦፕሬተር ውሳኔ መሆን አለበት። Loopback ኖዶች ሁልጊዜ ይፈቀዳሉ፤ የሩቅ ኖዶች የአቅራቢውን የውጪ URL ፖሊሲም ማለፍ አለባቸው።                                                                                                                                         |
| `PROXY_AUTO_SELECT_ENABLED`                     | ቡሊያን    | `false` |           | ለግንኙነት ምንም ፕሮክሲ ሳይመደብ፣ በመዝገቡ ውስጥ ካሉት መካከል የመጀመሪያውን የሚሰራ ፕሮክሲ በራስ-ሰር ምረጥ። በነባሪ ጠፍቷል (አለበለዚያ በመዝገቡ ያለ ማንኛውም ፕሮክሲ ዓለም አቀፍ ምትኬ ይሆናል — #3332)።                                                                                                                                                                                                                                                                    |
| `OMNIROUTE_CONTROL_PLANE_PROXY_DIRECT_FALLBACK` | ቡሊያን    | `false` |           | የፕሮክሲ ተደራሽነት ቅድመ-ማረጋገጫዎች ሲያልፉ OAuth እና የአቅራቢ ማረጋገጫ ፍሰቶች የተወሰነላቸውን ፕሮክሲ አልፈው በቀጥታ እንዲገናኙ ፍቀድ። ይህ የወጪ ትራፊክ IPን ሊቀይር ስለሚችል በነባሪ ጠፍቷል።                                                                                                                                                                                                                                                                           |
| `NETWORK_ROTATION_SHARED_EGRESS_GUARD`          | ቡሊያን    | `true`  |           | ለባለብዙ-መለያ ተዘዋዋሪ አስፈጻሚ የአውታረ መረብ ልዩ ሁኔታ (ጊዜ ማለፍ፣ ግንኙነት መከልከል/ዳግም መጀመር) ሲከሰት፣ የከሸፈው መለያ የተለየ ፕሮክሲ ከሌለው፣ እያንዳንዱን እንደገና ከመሞከር ይልቅ አጭር የማቀዝቀዣ ጊዜ ተግብር እና ለቀሪው ጥያቄ ፕሮክሲ የሌላቸውን ሌሎች መለያዎች ዝለል። በነባሪ ነቅቷል (ደህንነቱ የተጠበቀ፦ የወጪ ትራፊክ IP አይቀየርም፤ በጋራ የወጪ ትራፊክ መለያዎች ላይ የመዘግየት/የማቀዝቀዣ ጊዜ አደጋን ብቻ ይቀንሳል)። ፕሮክሲ ከሌለው የመጀመሪያው መጣል ላይ ወዲያውኑ ማስተላለፍን ለመመለስ አሰናክል።                                                               |
| `ROTATION_ATTRIBUTION`                          | ቡሊያን    | `false` |           | የOpencode ማዞሪያ የትኛው መለያ እንዳገለገለ ወይም እንደተዘለለ ይመዘግባል (የተሸፈኑ መታወቂያዎችን ብቻ፣ ሙሉ የመለያ መታወቂያዎችን ፈጽሞ አይመዘግብም) እና የፕሮክሲ ምዝግብ ማስገቢያዎችን ከጥያቄያቸው ጋር ያገናኛል፣ ስለዚህ ኦፕሬተሩ የተዘለሉ መለያዎችን ጥቅም ላይ ካልዋሉት መለየት ይችላል። በነባሪ ጠፍቷል።                                                                                                                                                                                                     |
| `PROXY_SKIP_RECENTLY_FAILED`                    | ቡሊያን    | `true`  |           | የፕሮክሲ ስብስቦች እና የOpencode በየመለያው ማዞሪያ በቅርቡ የከሸፈ ፕሮክሲን (የተከለከለ TCP ፍተሻ ወይም በእሱ በኩል የደረሰ 429) ለእያንዳንዱ ሂደት በየድግግሞሹ በእጥፍ ለሚጨምር፣ እስከ ከፍተኛ ገደብ ድረስ ለሚቆይ ጊዜ ዳግም ማቅረብ ያቆማሉ። ምንም የፕሮክሲ ሁኔታ አይጻፍም፤ እያንዳንዱ ዕጩ ወደ ጎን ሲቀመጥ ምርጫው ሳይቀየር ይቆያል። በነባሪ ነቅቷል፤ `false` መደበኛ ምርጫን ይመልሳል።                                                                                                                                            |
| `PROXY_POOL_SHARED_EGRESS_ORDER`                | boolean | `false` |           | ኮታቸው በመውጫ አድራሻ ለሚመደብ አቅራቢዎች፣ በቅርቡ ውድቅ ከተደረገ አባል ከታየው የመውጫ አድራሻ ጋር የሚጋራን የፑል አባል ከጤናማ አባላት በታች ደረጃ ይስጡት። ለቅደም ተከተል ብቻ ነው፤ ፈጽሞ አይገለልም። የሚያነበውን የውድቅ ምልክት የሚያመነጨውን PROXY_SKIP_RECENTLY_FAILED ይፈልጋል። በነባሪ ጠፍቷል።                                                                                                                                                                                                 |
| `PROXY_POOL_EGRESS_OBSERVATION`                 | boolean | `false` |           | በዳሽቦርዱ ውስጥ በፕሮክሲ ፑል ሥር፣ ባለፉት 24 ሰዓታት ስንት የታዩ የመውጫ IPዎች አባላቱን እንዳገለገሉ እና ስንት ግንኙነቶች እንደተጠቀሙባቸው አሳይ። ለንባብ ብቻ ነው፣ ከፕሮክሲ ሎግ ይሰላል፣ ለራውቲንግ ፈጽሞ አይጠቀምም። በነባሪ ጠፍቷል።                                                                                                                                                                                                                                                  |
| `PROXY_OPERATOR_EGRESS_ENABLED`                 | boolean | `false` |           | በኦፕሬተር የሚገፉ፣ ቀን የተያያዘላቸው የታዩ አድራሻዎችን ለእያንዳንዱ የፑል አባል ተቀብሎ፣ ለማሳያ እና ለፑል ቅደም ተከተል ከጆርናል ንባቡ ጋር ያዋህዳቸዋል። በነባሪ ጠፍቷል፦ የመግፊያ ራውቱ 404 ይመልሳል፣ የፑል ንባቦችም ልክ እንደቀድሞው ይሠራሉ።                                                                                                                                                                                                                                             |
| `OPENCODE_RESPONSES_STALL_ROTATION`             | boolean | `false` |           | ለOpenCode አስፈጻሚ፣ በዥረት የሚተላለፍ Responses ምላሽ የመጀመሪያውን የአካል ባይት ይከታተሉ (መስኮት፦ `RESPONSES_FIRST_BYTE_TIMEOUT_MS`፣ ነባሪ `15000`)። ከመስኮቱ በላይ ዝም የሚል 2xx Responses ዥረት እንደተቋረጠ ይቆጠራል፦ መለያው ለጊዜው ይቀዘቅዛል፣ ጥያቄውም አንድ ጊዜ ወደሚቀጥለው መለያ ይዘዋወራል፤ ሁለተኛ መቋረጥ በፍጥነት ውድቀትን ያስከትላል። በነባሪ ጠፍቷል፦ የተቋረጡ ዥረቶች እስከ ዥረት ዝግጁነት የጊዜ ገደብ ድረስ ያለውን የአሁኑን መጠበቅ ይቀጥላሉ።                                                                         |
| `OPENCODE_USER_BLOCKED_ROTATION`                | boolean | `false` |           | OpenCode አስፈጻሚ፦ የ`user_blocked` ውድቅ ምላሽ ያለው 403/451 ሲያጋጥም (የጂኦግራፊ ገደብ ያልሆነ፣ የCloudflare አሻራ ውድቅ ምላሽ ያልሆነ)፣ ውድቅ የተደረገውን መለያ ለጊዜው ያቀዘቅዛል እና በእያንዳንዱ ጥያቄ ቢበዛ አንድ ጊዜ ወደሚቀጥለው መለያ ያዘዋውራል፤ ሁለተኛ ውድቅ ምላሽ የስኬት ምልክት ሳይደረግበት እንዳለ ይመለሳል። በነባሪ ጠፍቷል፦ የላይኛውን አገልግሎት የተጠቃሚ እገዳ በራውቲንግ ማለፍ እንደ ማምለጥ ሊታይ እና ምልክቱን በመላው የመለያዎች ስብስብ ላይ ሊያሰራጭ ይችላል።                                                                          |
| `OPENCODE_TRANSIENT_FAILOVER_BACKOFF`           | boolean | `false` |           | OpenCode ማዘዋወር፦ ሁለት ተከታታይ ጊዜያዊ የላይኛው አገልግሎት ውድቀቶች ከተከሰቱ በኋላ (5xx ወይም ባዶ 400)፣ ወደሚቀጥለው መለያ ከመሄድ በፊት ቆም ይበሉ — 1.5 ሰከንድ፣ ለእያንዳንዱ ተጨማሪ ውድቀት እየተደራረበ በእጥፍ ይጨምራል፣ ለእያንዳንዱ መቆም ቢበዛ 6 ሰከንድ እና ለእያንዳንዱ ጥያቄ ቢበዛ 10 ሰከንድ፤ ደንበኛው ግንኙነቱን ካቋረጠ ይዘለላል። ያልተሳካው አካል ከመጠበቁ በፊት ይለቀቃል። በነባሪ ጠፍቷል፦ የውድቀት ሽግግር ወዲያውኑ እንደሆነ ይቆያል።                                                                                                  |
| `OPENCODE_PARK_AND_RESUME`                      | boolean | `false` |           | OpenCode ማዘዋወር፦ ተደጋጋሚ ጊዜያዊ 429ዎች (ወይም አዲስ የፑል ጫና ምልክት) ካጋጠሙ በኋላ ጥያቄውን ከheartbeat ጋር ያቁሙት፣ ከዚያም መላውን የመለያዎች ስብስብ በአንድ ጊዜ ከማስኬድ ይልቅ እስከ 3 ተከታታይ መለያዎችን የሚያካትት አንድ የተገደበ ዙር እንደገና ያጫውቱ። በነባሪ ጠፍቷል፦ እያንዳንዱ 429 ልክ እንደቀድሞው ወደሚቀጥለው መለያ ያዘዋውራል።                                                                                                                                                                    |
| `STREAM_READINESS_STALL_RETRY`                  | boolean | `false` |           | የዥረት ውይይት፦ የመጀመሪያው የላይኛው አገልግሎት አካል ጥቅም ላይ የሚውል ክስተት ከማመንጨቱ በፊት ከተቋረጠ፣ በተመሳሳይ የራውቲንግ መንገድ፣ በተመሳሳይ የዝግጁነት በጀት እና ያለመለያ ቅጣት አንድ የተገደበ ሁለተኛ ሙከራ ያድርጉ። በነባሪ ጠፍቷል፦ የተቋረጠ የመጀመሪያ አካል ያለድጋሚ ሙከራ ጥያቄውን ያሳካዋል።                                                                                                                                                                                                        |
| `FLUSH_EMPTY_RETRY_ENABLED`                     | boolean | `false` |           | በተተረጎሙ የዥረት ዙሮች ላይ፣ የላይኛው አገልግሎት ዙር ጥቅም ላይ የሚውል ይዘት ከሌለው (በምክንያታዊ አስተሳሰብ ብቻ የተጠናቀቀ ወይም ምንም ዋጋ ያለው ቁራጭ የሌለው)፣ ለደንበኛው ምንም ነገር ከመጋለጡ በፊት በመደበኛው የማረጋገጫ መንገድ የተገደቡ ድጋሚ ሙከራዎችን ያድርጉ (እስከ `STREAM_RECOVERY.EMPTY_TURN_RETRY_MAX`)። በነባሪ ጠፍቷል፦ ባዶ ዙሮች አሁን ያለውን ባህሪ ይቀጥላሉ (ባዶ 200 ወይም ባዶ-ይዘት 502)።                                                                                                                   |
| `OPENCODE_POOL_RESELECT`                        | boolean | `false` |           | OpenCode ማዘዋወር፦ በአካባቢያዊ የፑል አውድ ውስጥ ፕሮክሲ በሌለው መለያ ላይ፣ መውጫን በቡድን ከሚመድብ አቅራቢ 429 ከተመለሰ በኋላ፣ ተመሳሳዩን የመውጫ አድራሻ እንደገና ከመሞከር ይልቅ ለሚቀጥለው ሙከራ ሌላ አባል እንዲመርጥ የግንኙነት ፑሉን ይጠይቁ። ቅደም ተከተል ያስይዛል፣ ፈጽሞ አያገልም፦ አባላቱ ያለቁበት ፑል የአሁኑን ባህሪ ይቀጥላል። በነባሪ ጠፍቷል፦ እያንዳንዱ 429 ልክ እንደቀድሞው ወደሚቀጥለው መለያ ያዘዋውራል።                                                                                                                          |
| `OPENCODE_RATE_LIMITED_429_EARLY_STOP`          | boolean | `false` |           | OpenCode ማዞር፦ እውነተኛ የፍጥነት ገደብ ተብሎ በተመደበው የመጀመሪያው 429 ላይ የመለያዎችን ዙር ያቁሙ (`Retry-After` ሊተነተን የሚችል ከሆነ፣ ወይም የምላሹ ይዘት የፍጥነት/አጠቃቀም ገደብን ከጠቀሰ) እና ያንን የላይኛው አገልግሎት 429 ሳይቀየር ይመልሱ። ያልተመደቡ 429ዎች መዞራቸውን ይቀጥላሉ። በነባሪ ጠፍቷል፦ ነፃው ደረጃ በእያንዳንዱ የመውጫ IP የተገደበ ነው (#9611)፣ ስለዚህ እያንዳንዱ 429 ማዞርን ያስከትላል፣ እና ያለቀበት ዙር የመጨረሻውን የላይኛው አገልግሎት 429 ይመልሳል።                                                                       |
| `MITM_DISABLE_TLS_VERIFY`                       | boolean | `false` | ✓         | ለMITM ፕሮክሲው የTLS ሰርቲፊኬት ማረጋገጫን ያሰናክሉ። **አደገኛ።**                                                                                                                                                                                                                                                                                                                                                              |
| `OMNIROUTE_ALLOW_PRIVATE_PROVIDER_URLS`         | boolean | `false` |           | በአቅራቢ URL ማረጋገጫ፣ በሞዴል ፍለጋ፣ በአቅራቢ-ኖድ መሠረታዊ URLዎች እና በፕሮክሲ-ተተኪ ሙከራ ላይ የወጪ URL ጥበቃውን የአስተናጋጅ ማረጋገጫዎች፣ የደመና-ሜታዳታ እገዳን ጨምሮ፣ ያጠፋል፤ እንዲሁም የግል webhook መድረሻዎችን ይፈቅዳል። በማረጋገጫ፣ በፍለጋ እና በአቅራቢ-ኖድ መንገዶች ላይ አካባቢያዊ እና LAN URLዎች ቀድሞውኑ በነባሪ ያልፋሉ (`OMNIROUTE_ALLOW_LOCAL_PROVIDER_URLS`)፤ የፕሮክሲ-ተተኪ ሙከራው እና የግል webhook መድረሻዎች `OMNIROUTE_ALLOW_PRIVATE_PROVIDER_URLS`ን ብቻ ይመለከታሉ፣ እና ይህ ጠፍቶ ሳለ አካባቢያዊ/LAN አስተናጋጆችን ያግዳሉ። |
| `OMNIROUTE_ALLOW_LOCAL_PROVIDER_URLS`           | boolean | `true`  |           | በአካባቢያዊ/የግል አድራሻዎች (127.0.0.1, localhost, LAN) ላይ ያሉ የአቅራቢ URLዎችን ይፍቀዱ። በነባሪ ነቅቷል (አካባቢያዊ-ቅድሚያ)፦ ከዚያም ጥበቃው የደመና-ሜታዳታ መዳረሻዎችን (ሁሉንም የ169.254.0.0/16 ክልል እና የታወቁ የሜታዳታ አስተናጋጅ ስሞችን) ያግዳል። ጥብቅ የይፋ-ብቻ እገዳን ለመተግበር ያሰናክሉት፦ የግል እና loopback አስተናጋጆችም ይታገዳሉ።                                                                                                                                                       |
| `ENABLE_CC_COMPATIBLE_PROVIDER`                 | boolean | `false` | ✓         | ከClaude Code ጋር ተኳሃኝ የሆነውን የአቅራቢ ሁነታ ያንቁ።                                                                                                                                                                                                                                                                                                                                                                    |

### ፖሊሲዎች (6)

| ቁልፍ                             | ዓይነት    | ነባሪ        | መግለጫ                                                                                                                                                                              |
| ------------------------------- | ------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `TOOL_POLICY_MODE`              | enum    | `disabled` | የመሣሪያ አጠቃቀም ፖሊሲ ማስፈጸሚያ ሁነታ። እሴቶች፦ `disabled`፣ `warn`፣ `block`።                                                                                                                    |
| `RATE_LIMIT_AUTO_ENABLE`        | boolean | `false`    | በenv var አማካይነት የፍጥነት ገደብ ራስ-ሰር ማንቂያ የደህንነት መረቡ እንዲበራ/እንዲጠፋ ያስገድዱ። runtime የሚያነበው env varን ብቻ ነው፦ ካልተዋቀረ ይህን የካታሎግ ነባሪ ሳይሆን የdashboard ቅንብርን (በነባሪ ነቅቷል) ይከተላል።                   |
| `DISABLE_CONTEXT_WINDOW_CHECKS` | boolean | `false`    | ቀጥተኛ የነጠላ-ሞዴል ጥያቄዎችን ሲያስኬድ የOmniRouteን አካባቢያዊ የአውድ-መስኮት / ከፍተኛ-የግብዓት-token ማረጋገጫ ዝለሉ። የላይኛው አገልግሎት ገደቦች አሁንም ይተገበራሉ።                                                              |
| `CAPABILITY_FILTER_ENABLED`     | boolean | `false`    | የታለመው ሞዴል አስፈላጊ ችሎታዎች (ራዕይ፣ መሣሪያዎች፣ የተዋቀረ ውጤት፣ የአውድ መስኮት) ከሌሉት፣ ከመላክ በፊት ጥያቄዎችን ውድቅ ያድርጉ። የcombo-layer ተኳሃኝነት ማጣሪያን የሚያልፉ ቀጥተኛ የነጠላ-አቅራቢ ጥያቄዎችን ይጠብቃል።                            |
| `USAGE_LIMIT_IGNORE_UNPRICED`   | boolean | `false`    | ዋጋ የሌላቸውን ሞዴሎች አጠቃቀም ኮታው እንደታለፈ ከመቁጠር ይልቅ፣ በእያንዳንዱ ቁልፍ የUSD አጠቃቀም ኮታ ውስጥ እንደ $0 ይቁጠሩ። በነባሪ ጠፍቷል፦ ዋጋ ያልተመደበለት ሞዴል ወይም የማዞሪያ ተለዋጭ ስም እውነተኛ ወጪን ሊደብቅ ስለሚችል፣ ኮታው በደህንነት ምክንያት ይከለክላል። |
| `RADAR_ENABLED`                 | boolean | `false`    | የOmniRoute Radar ሞጁሉን (የካታሎግ feed ማያ ገጾችን እና ማመሳሰልን) ያንቁ። በነባሪ ጠፍቷል፤ ማንቃት UIውን ብቻ ይከፍታል — የውሂብ ማመሳሰል የተለየ የፈቃድ ምርጫ ሆኖ ይቆያል።                                                       |

### Runtime (35)

| ቁልፍ                                         | ዓይነት    | ነባሪ     | ዳግም ማስጀመር | መግለጫ                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------------------------------------- | ------- | ------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `UNIVERSAL_CONTEXT_HANDOFF_ENABLED`         | boolean | `true`  |           | የጥምር ማዘዋወር ሞዴሎችን ሲቀይር የውይይት ማጠቃለያዎችን ያመነጫል እና ያስገባል። የሞዴል ቅያሬዎችን በተናጥል ለማስተናገድ እና ለሁሉም ነባርና ወደፊት ለሚፈጠሩ ጥምሮች የጀርባ ርክክብ ጥያቄዎችን ለመከላከል ያሰናክሉት።                                                                                                                                                                                                                                                                                                                                                            |
| `REASONING_REPLAY_ENABLED`                  | boolean | `true`  |           | በበርካታ ዙር ውይይቶች ውስጥ የሞዴሉን ምክንያታዊ አስተሳሰብ በመሸጎጫ ያከማቻል እና እንደገና ያጫውታል። ምክንያታዊ አስተሳሰቡን ማከማቸትና እንደገና ማስገባት ለማቆም ያሰናክሉት።                                                                                                                                                                                                                                                                                                                                                                                      |
| `RESPONSES_PASSTHROUGH_DROP_COMMENTARY`     | boolean | `true`  |           | ወደ ደንበኞች ከማስተላለፍ በፊት የውስጥ አስተያየት-ደረጃ የውጤት ንጥሎችን ከResponses API ቀጥታ-ማስተላለፊያ ዥረቶች ያስወግዳል። ጥሬውን የላይኛው ምንጭ አስተያየት ለመቀበል ያሰናክሉት።                                                                                                                                                                                                                                                                                                                                                                            |
| `OMNIROUTE_MCP_ENFORCE_SCOPES`              | boolean | `false` |           | በMCP መሣሪያ መዳረሻ ላይ የወሰን ገደቦችን ያስፈጽማል።                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `OMNIROUTE_MCP_COMPRESS_DESCRIPTIONS`       | boolean | `false` |           | የቶከን አጠቃቀምን ለመቀነስ የMCP መሣሪያ መግለጫዎችን ይጨምቃል።                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `OMNIROUTE_ENABLE_RUNTIME_BACKGROUND_TASKS` | boolean | `false` |           | በሩጫ ጊዜ የጀርባ ተግባራት ሂደትን ያነቃል።                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `OMNIROUTE_DISABLE_BACKGROUND_SERVICES`     | boolean | `false` | ✓         | ሁሉንም የጀርባ አገልግሎቶች (የኮታ ማደስ፣ ማመሳሰል፣ ወዘተ) ያሰናክሉ።                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `OMNIROUTE_RTK_TRUST_PROJECT_FILTERS`       | boolean | `false` |           | የፕሮጀክት ደረጃ RTK ማጣሪያዎችን ያለ ማረጋገጫ ያምኑ።                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `OMNIROUTE_ENABLE_LIVE_WS`                  | boolean | `true`  | ✓         | በማስመጣት ጊዜ የእውነተኛ ጊዜ ዳሽቦርድ WebSocket አገልጋይን ያስጀምሩ (በነባሪ ወደብ 20132)።                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `OMNIROUTE_CODEX_WS_ENABLED`                | boolean | `true`  |           | Codex የResponses-over-WebSocket ማጓጓዣን እንዲጠቀም ይፍቀዱ። ሲጠፋ፣ Codex ወደ HTTP Responses ይመለሳል።                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `OMNIROUTE_CODEX_APP_SERVER_ENABLED`        | boolean | `true`  |           | Codex የአካባቢውን app-server WebSocket JSON-RPC ማጓጓዣ (`codexTransport=app-server`) እንዲጠቀም ይፍቀዱ። ሲጠፋ፣ app-server ለመጠቀም የተመረጡ ግንኙነቶች ወደ ሌሎቹ የCodex ማጓጓዣዎች ይመለሳሉ።                                                                                                                                                                                                                                                                                                                                             |
| `OMNIROUTE_EMERGENCY_FALLBACK`              | boolean | `true`  |           | በጀታቸው ያለቀባቸውን ጥያቄዎች ወደ ድንገተኛ ነፃ ምትክ አቅራቢ/ሞዴል ይምሩ። (ከታች [የድንገተኛ ጊዜ የበጀት ምትክ](#emergency-budget-fallback)ን ይመልከቱ።)                                                                                                                                                                                                                                                                                                                                                                                       |
| `STREAM_RECOVERY_ENABLED`                   | boolean | `false` |           | ማንኛውም የምላሽ ባይቶች ወደ ደንበኛው ከመድረሳቸው በፊት ለተቋረጡ የላይኛው ምንጭ SSE ዥረቶች ግልጽ የቅድሚያ ዳግም ሙከራን ያንቁ።                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `STREAM_RECOVERY_MIDSTREAM_ENABLED`         | boolean | `false` |           | ባይቶች አስቀድመው ወደ ደንበኛው ከደረሱ በኋላ የዥረት መልሶ ማግኛው ምላሽን እንደገና እንዲጠይቅና እንዲያጣምር ይፍቀዱ።                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `STREAM_RECOVERY_TOOLCALL_ORDER_FIX`        | boolean | `false` |           | በዥረት መሀል የሚደረግ ቀጣይነትን ለመሣሪያ ጥሪ ደህንነቱ የተጠበቀ ያድርጉ፦ የመሣሪያ ጥሪ ከተላከ በኋላ (በሂደት ላይ ያለ ወይም አስቀድሞ በ finish_reason tool_calls የተጠናቀቀ) የተቋረጠ ዥረትን ፈጽሞ አይቀጥሉ፤ እንዲሁም ሙሉ በጀቱን ከማውጣት ይልቅ አንድ ባዶ ቀጣይነት ከተደረገ በኋላ ይዝጉ። ጠፍቶ ሲሆን፦ የልቀት ባህሪ።                                                                                                                                                                                                                                                                               |
| `STREAM_EARLY_EOF_SIBLING_FAILOVER_ENABLED` | boolean | `false` |           | የSSE ዥረት ምንም ጠቃሚ ፍሬም ሳያወጣ ሲዘጋ እና የተገደበው የተመሳሳይ-ግንኙነት ዳግም ሙከራ ሲያልቅ፣ አንድ ጊዜ ወደ ተጓዳኝ ግንኙነት ይቀይሩ፤ ጥቅም ላይ የሚውል ተጓዳኝ ከሌለ የመጀመሪያው `STREAM_EARLY_EOF` 502 ይመለሳል። በነባሪነት ጠፍቷል፦ ቀደምት-EOF ከተመሳሳይ-ግንኙነት ዳግም ሙከራ በኋላ የመጨረሻ ሁኔታ ሆኖ ይቆያል።                                                                                                                                                                                                                                                                             |
| `MODEL_CATALOG_INCLUDE_NAMES`               | boolean | `true`  |           | ለእይታ ምቹ የሆኑ የስም መስኮችን በ`/v1/models` ምላሾች ውስጥ ያካትቱ። የሞዴል IDዎችን ብቻ ለሚጠብቁ ደንበኞች ያሰናክሉት።                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `MODELS_CATALOG_PREFIX_MODE`                | enum    | `dual`  |           | የሞዴል IDዎች በ/v1/models ውስጥ ቅድመ ቅጥያ የሚያገኙበትን መንገድ ይቆጣጠራል። 'dual' (ነባሪ) ለኋላ ተኳኋኝነት የቅጽል ስም እና መደበኛ የአቅራቢ-ID ቅድመ ቅጥያዎችን ሁለቱንም ያወጣል። 'alias' አጭሩን የቅጽል ስም ቅድመ ቅጥያ ብቻ ያወጣል (ለምሳሌ ds-web/model፣ deepseek-web/model አይደለም)። 'canonical' ሙሉውን የአቅራቢ-ID ቅድመ ቅጥያ ብቻ ያወጣል። እሴቶች፦ `dual`፣ `alias`፣ `canonical`።                                                                                                                                                                                                     |
| `ARENA_ELO_SYNC_ENABLED`                    | boolean | `true`  |           | ለሞዴል የብልህነት ደረጃዎች የArena AI የመሪዎች ሰሌዳ ELO ወቅታዊ ማመሳሰልን ያንቁ።                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `EXPOSE_CC_DISCOVERY_ALIASES`               | boolean | `false` |           | የClaude Code ጌትዌይ ሞዴል ፍለጋ Claude ያልሆኑ ሞዴሎችን እንዲዘረዝር፣ የ`claude/<provider>/<model>` መስታወት IDዎችን በ`/v1/models` ላይ ያስተዋውቁ። የሶስት-ደረጃ መግቢያው ዓለም አቀፍ ደረጃ (env ከዳሽቦርድ መሻሪያው ይቀድማል)። [የClaude Code ውቅር](../guides/CLAUDE-CODE-CONFIGURATION.md#discovery-aliases--surface-non-claude-models-in-the-model-picker)ን ይመልከቱ።                                                                                                                                                                                        |
| `NO_THINKING_ALIAS_ENABLED`                 | boolean | `true`  |           | ለ no-think/<provider>/<model> ጌትዌይ ቅጽል ስሞች ዋና ማብሪያ። ሲበራ (ነባሪ)፦ /v1/models ለእያንዳንዱ ብቁ እና የማሰብ ችሎታ ላለው Claude ሞዴል ያለ-ማሰብ ልዩነትን ያስተዋውቃል፤ እንዲሁም በጥያቄ የተላከ no-think/ ID ምክንያታዊ አስተሳሰብ ታፍኖ ወደ እውነተኛው ሞዴል ይፈታል። ሲጠፋ፦ ምንም ልዩነቶች አይተዋወቁም፣ እና no-think/ ID እንደ ማንኛውም ሌላ ያልታወቀ የሞዴል ID ይታያል። ይህ እንደበራ ሳለ የእያንዳንዱ ሞዴል ModelSpec.noThinkingAlias የመርጦ-መግባት/የመርጦ-መውጣት ቅንብር አሁንም ተግባራዊ ነው።                                                                                                                            |
| `OMNIROUTE_DISABLE_THINKING_LEVEL_VARIANTS` | boolean | `false` |           | በ/v1/models ካታሎግ ውስጥ የማሰብ ደረጃ ልዩነቶችን (ለምሳሌ -low፣ -medium፣ -high) ማመንጨትን ያሰናክሉ።                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `OMNIROUTE_CHAT_VIRTUAL_LANES`              | boolean | `false` | ✓         | ለአቅራቢ ማስተላለፍ በተከራይ የሚለያዩ እና ራሳቸውን የሚያስተካክሉ ምናባዊ የመግቢያ መስመሮችን ያንቁ (#9654)፦ የአንድ ተከራይ ድንገተኛ ጭማሪ ከእንግዲህ ሌላውን 503 እንዲያገኝ አያደርግም። የ`OMNIROUTE_CHAT_VIRTUAL_LANES` የአካባቢ ተለዋዋጭ ከዚህ የዳሽቦርድ መሻሪያ ይቀድማል፤ ለውጦች አገልጋዩ እንደገና ሲጀምር ተግባራዊ ይሆናሉ።                                                                                                                                                                                                                                                                      |
| `EXPOSE_FUNCTIONAL_GATEWAY_MIRRORS`         | boolean | `false` |           | ቀኖናዊ ባለቤታቸው ንቁ ማረጋገጫ የሌለው፣ ነገር ግን ንቁ ማረጋገጫ ያለው ቀጥታ-ማሳለፊያ ጌትዌይ የሚያስተላልፋቸው ሞዴሎች የ<gateway-alias>/<model> መስታወት መለያዎችን በ/v1/models ላይ ያስተዋውቁ። ማስጠንቀቂያ፦ በዓለም አቀፍ ደረጃ ሲነቃ ለሁሉም ደንበኞች የካታሎግ ግቤቶችን ይጨምራል።                                                                                                                                                                                                                                                                                                     |
| `NEWAPI_AGGREGATOR_BALANCE`                 | boolean | `false` |           | ከNew-API / One-API / Sub2API አሰባሳቢ ጋር ተኳኋኝ ለሆኑ ኖዶች የሒሳብ ቀሪ ማወቂያን ያንቁ። ሲነቃ፣ የአሰባሳቢ ምልክት የተዘጋጀላቸው ተኳኋኝ ኖዶች የሒሳብ ቀሪያቸውን በዳሽቦርዱ እና በኮታ-ቅድመ-ምርመራ ማስተላለፊያ ውስጥ ያሳያሉ።                                                                                                                                                                                                                                                                                                                                          |
| `SERVER_OWNED_TOOL_LOOP_ENABLED`            | boolean | `false` |           | ሞዴሉ ደንበኛው ሊጠቀምበት የሚችል ምላሽ እስኪመልስ ድረስ ዥረት-አልባ የአገልጋይ-ባለቤትነት ያላቸውን የመሣሪያ ጥሪዎች ይቀጥሉ።                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `SEARCH_STATS_HIDE_DELETED_CONNECTIONS`     | boolean | `false` |           | የፍለጋ ስታቲስቲክስ እና የቅርብ ጊዜ ፍለጋዎች አሁንም ንቁ ግንኙነት ያላቸውን አቅራቢዎች ብቻ ይቆጥራሉ (እንደ duckduckgo-free ያሉ ቁልፍ-አልባ አቅራቢዎች ሁልጊዜ ይቆጠራሉ)። ሲጠፋ፣ የተያዘ እያንዳንዱን የፍለጋ ረድፍ ከአቅራቢ መለያው ጋር ያቆያል።                                                                                                                                                                                                                                                                                                                                   |
| `FREE_BADGE_REQUIRES_PROVIDER_FREE_TIER`    | boolean | `false` |           | የዳሽቦርድ አቅራቢ ገጾች፦ የነፃ ባጁን አቅራቢው በሚያከብራቸው ምልክቶች ላይ ብቻ ያሳዩ — የማሳያ-ስም ግምታዊ ዘዴን፣ boolean ያልሆኑ የነፃ መስኮችን እና ሰነድ የተደረገ ነፃ ደረጃ በሌላቸው የተመዘገቡ አቅራቢዎች ላይ ያሉ :free ቅጥያዎችን ያስወግዳል። ሲጠፋ፣ ታሪካዊውን የባጅ ደንብ ያቆያል።                                                                                                                                                                                                                                                                                                        |
| `RETRY_AFTER_PROVENANCE_ENABLED`            | boolean | `false` |           | በተሰባሰቡ 429/503 የማይገኝ ምላሾች ላይ የተረጋገጠ የወደፊት የድጋሚ ሙከራ ጊዜ ካልታወቀ፣ `Retry-After`ን አያካትቱ (በሰው ሠራሽ 1s ፋንታ)፣ `error.retry_after_provenance` (`signal` \| `none`)ን ይጨምሩ፣ እና የጥምረት ማስወገጃ መንገዶች ከJSON እና ግልጽ-ጽሑፍ የላይኛው ሥርዓት አካላት ውስጥ በጽሑፍ የተገለጹ የድጋሚ ሙከራ ፍንጮችን እንዲያነቡ ያድርጉ። መስኩ በ`unavailableResponse()` በተገነቡ ምላሾች ላይ ብቻ ይታያል፤ ሌሎች የ429/503 አካላት አይቀየሩም።                                                                                                                                                          |
| `PROTECTED_PRIORITY_INFRA_502_ENABLED`      | boolean | `false` |           | ኮታ ሲያልቅ ብቻ ወደ ምትኬ እንዲዞር ምልክት የተደረገበት የ`priority` ጥምረት ዒላማ፣ ምክንያቱ በእርግጠኝነት ኮታ እንዳልሆነ በሚታወቅበት ጊዜ (የአቅራቢ ወረዳ ሰባሪ ክፍት፣ የትንበያ መዘግየት ዝለል) ጥምረቱን ካቆመ፣ ኮታ የሚመስለውን 503 በመተው 502 ይመልሱ። የመቆለፍ፣ የማቀዝቀዣ ጊዜ፣ የአለመገኘት፣ የመሟጠጥ እና የትይዩነት-ገደብ ማቆሚያዎች 503ን እንዳለ ያቆያሉ።                                                                                                                                                                                                                                                     |
| `MISTRAL_AMBIGUOUS_401_SOFT_LOCKOUT`        | boolean | `false` |           | ግልጽ የማረጋገጫ ምልክት የሌለው ቀላል Mistral 401 (`{"detail":"Unauthorized"}`) ለተሰረዘ ቁልፍም ሆነ ለተሟጠጠ ኮታ ተመሳሳይ ነው። ሲበራ፣ ግንኙነቱን `expired` በማለት ከማቆም ይልቅ ለጊዜው ያቀዘቅዘዋል፤ ይህም በእያንዳንዱ ግንኙነት በሰዓት ከ3 ጊዜ ያልበለጠ ነው። የሚቀጥለው ግን ያቆመዋል፣ ስለዚህ የተሰረዘ ቁልፍ አሁንም በመጨረሻ ወደዚያው ሁኔታ ይደርሳል። በነባሪነት ጠፍቷል፦ እያንዳንዱ ቀላል Mistral 401 እንደቀድሞው ግንኙነቱን ያቆማል።                                                                                                                                                                                      |
| `GROK_SUBSCRIPTION_IMAGES_ENABLED`          | boolean | `false` |           | የxai-oauth (xao) እና grok-cli ምስል መስመሮችን ይመዝግቡ፣ እንዲሁም የOpenAI የጥራት ደረጃ high/hdን ወደ xAI medium ያዛምዱ። በነባሪነት ጠፍቷል፦ በAPI ቁልፍ ላይ የተመሠረተው የxAI ምስል መንገድ ነባሩን ከOpenAI ጋር ተኳሃኝ የሆነ ጥያቄ መጠቀሙን ይቀጥላል፣ እንዲሁም የደንበኝነት ምዝገባ መስመሮቹ አይመዘገቡም።                                                                                                                                                                                                                                                                          |
| `XAI_OAUTH_LIVE_MODEL_DISCOVERY`            | boolean | `true`  |           | ከቀዘቀዘው የማይለወጥ መነሻ ዝርዝር ይልቅ፣ የOAuth bearer tokenን በመጠቀም ለxai-oauth ግንኙነቶች የቀጥታውን የxAI ሞዴል ካታሎግ ከhttps://api.x.ai/v1/models ያምጡ። በነባሪነት በርቷል። የማይለወጠውን መነሻ ዝርዝር ማቅረብዎን ለመቀጠል ጠቋሚውን ወደ false ያዘጋጁ። የHTTP አለመሳካቶች በማግኛ መስመሩ ውስጥ ወደ መነሻ ዝርዝሩ ይመለሳሉ፤ የጠቋሚው getter ራሱ የHTTP ጥያቄ አያቀርብም።                                                                                                                                                                                                                       |
| `BATCH_AND_FILE_AUTO_CLEANUP_ENABLED`       | boolean | `false` |           | ራስ-ሰር የማጽዳት ቅኝቱ `OMNIROUTE_BATCH_RETENTION_DAYS` ከተጠቀሱት ቀናት በላይ ያረጁ የመጨረሻ ሁኔታ ላይ ያሉ (የተጠናቀቁ/ያልተሳኩ/የተሰረዙ/ጊዜያቸው ያለፈ) የBatch API ሥራዎችን ከእያንዳንዱ መስመር የፍተሻ ነጥቦቻቸው ጋር እንዲሰርዝ፣ እንዲሁም የራሳቸው `expires_at` ያለፈባቸውን የተሰቀሉ ፋይሎች BLOB ይዘት እንዲያጸዳ ይፍቀዱ። በነባሪነት ጠፍቷል፦ ኦፕሬተር እስኪያነቃው ድረስ እያንዳንዱ ነባር ጭነት ይህን ውሂብ ልክ እንደቀድሞው ያቆያል። በኦፕሬተር የሚጀመረው `DELETE /api/v1/batches/delete-completed` መስመር በሁለቱም ሁኔታ አይጎዳም፤ ይህ የተለየና ያለምንም ቅድመ ሁኔታ የሚሠራ የሕዝብ API ውል ነው።                                                             |
| `ANTIGRAVITY_ACCOUNT_LEASE_ENABLED`         | boolean | `false` |           | የመረጠው ጥያቄ በሚለቀቅበት የዥረት የሕይወት ዑደት ጊዜ ሁሉ የተመረጠውን Antigravity መለያ ያስይዙ፤ በዚህም በተመሳሳይ ጊዜ የሚከናወን ዳግም ሙከራ ወይም የማረጋገጫ መረጃ ርክክብ አስቀድሞ በመካሄድ ላይ ላለ ዥረት የተመደበ መለያን እንደገና እንዳይመርጥ ያደርጋል። ቦታ ማስያዙ በ(ግንኙነት፣ ሊጠራ የሚችል upstream ሞዴል) ወሰን የተገደበ ነው፤ ስለዚህ አንድ መለያ አሁንም ሁለት የተለያዩ ሞዴሎችን በአንድ ጊዜ ማገልገል ይችላል። ለዚያ ሞዴል ብቁ የሆኑ መለያዎች በሙሉ አስቀድመው በቦታ ማስያዝ ከተያዙ፣ ጥያቄው በተጨናነቀ መለያ ላይ ከመደራረብ ይልቅ ገደብ ካለው `Retry-After` ጋር የተዋቀረ 503 `antigravity_pool_busy` ይመልሳል። በነባሪነት ጠፍቷል፦ የመለያ ምርጫው ልክ እንደቀድሞው ይቆያል፣ እና ምንም ቦታ ማስያዝ አይደረግም። |

### CLI (5)

| ቁልፍ                                   | ዓይነት    | ነባሪ     | ዳግም ማስጀመር | መግለጫ                                                                                                                                                             |
| ------------------------------------- | ------- | ------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `CLI_COMPAT_ALL`                      | boolean | `false` | ✓         | ለሁሉም የCLI ደንበኞች የተኳኋኝነት ሁነታን ያንቁ።                                                                                                                                |
| `MODEL_ALIAS_COMPAT_ENABLED`          | boolean | `false` |           | የሞዴል ተለዋጭ ስም ተኳኋኝነት ንብርብርን ያንቁ።                                                                                                                                  |
| `PRICING_SYNC_ENABLED`                | boolean | `false` |           | ራስ-ሰር የዋጋ ውሂብ ማመሳሰልን ያንቁ (`PRICING_SYNC_ENABLED` የአካባቢ ተለዋዋጭም ያስፈልጋል)።                                                                                           |
| `OMNIROUTE_AUTO_SYNC_CODEX_PROFILES`  | boolean | `false` |           | ከአቅራቢ ሞዴል ማመሳሰል በኋላ፣ ከቀጥታው ካታሎግ የ~/.codex/*.config.toml መገለጫ ፋይሎችን በራስ-ሰር (እንደገና) ይጻፉ። ንቁውን/ነባሪውን የCodex ውቅር ፈጽሞ አይለውጥም። በነባሪነት ጠፍቷል።                            |
| `OMNIROUTE_AUTO_SYNC_CLAUDE_PROFILES` | boolean | `false` |           | ከአቅራቢ ሞዴል ማመሳሰል በኋላ፣ ከቀጥታው ካታሎግ የ~/.claude/profiles/<name>/settings.json Claude Code መገለጫዎችን በራስ-ሰር (እንደገና) ይጻፉ። ንቁውን/ነባሪውን የClaude ውቅር ፈጽሞ አይለውጥም። በነባሪነት ጠፍቷል። |

### ጤና (5)

| ቁልፍ                                       | ዓይነት    | ነባሪ     | መግለጫ                                                                                                                                                                                                           |
| ----------------------------------------- | ------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `OMNIROUTE_DISABLE_LOCAL_HEALTHCHECK`     | boolean | `false` | የአካባቢያዊ ኢንስታንስ ጤና ማረጋገጫ መጨረሻ ነጥብን ያሰናክሉ።                                                                                                                                                                       |
| `OMNIROUTE_DISABLE_TOKEN_HEALTHCHECK`     | boolean | `false` | የቶከን ማረጋገጫ ጤና ምርመራን ያሰናክሉ።                                                                                                                                                                                     |
| `SKILLS_SANDBOX_NETWORK_ENABLED`          | boolean | `false` | በክህሎቶች ማጠሪያ አካባቢ ውስጥ የአውታረ መረብ መዳረሻን ያንቁ።                                                                                                                                                                      |
| `PROXY_HEALTH_BLOCKED_RESETS_STREAK`      | boolean | `false` | በፕሮክሲ ጤና ቅኝት ውስጥ፣ ኢላማው ያልተቀበለው ሙከራ (401/403/429) የፕሮክሲውን ተከታታይ ውድቀት ቆጠራ ዳግም ያስጀምራል። በነባሪነት ጠፍቷል፦ አለመቀበል ገለልተኛ ሆኖ ይቆያል (#10654)። 5xx በሁለቱም ሁኔታ የማያሳምን ሆኖ ይቆያል፤ አለመቀበል ፕሮክሲን ፈጽሞ አያስወግድም፣ አያሰናክልም ወይም ዳግም አያነቃም። |
| `DB_HEALTHCHECK_STARTUP_DEFERRED_ENABLED` | boolean | `false` | አገልጋዩ ጥያቄዎችን መቀበል ከጀመረ በኋላ (በ`setImmediate` በኩል) የማስጀመሪያ DB ሙሉነት/ጤና ምርመራውን ያሂዱ፤ ይህም ምርመራው እስኪጠናቀቅ ድረስ ማስጀመርን ከማገድ ይልቅ ነው (#13717)። በነባሪነት ጠፍቷል፦ ማስጀመር ከዚህ PR በፊት እንደነበረው በትክክል ይታገዳል።                          |

> [!NOTE]
> `INPUT_SANITIZER_BLOCK_THRESHOLD` እና የቀድሞ ተለዋጭ ስሙ
> `INJECTION_GUARD_BLOCK_THRESHOLD` የ`INJECTION_GUARD_MODE`ን `block` ሁነታ
> ያስተካክላሉ፣ ነገር ግን በ
> [`src/shared/utils/injectionSeverity.ts`](../../src/shared/utils/injectionSeverity.ts)
> የሚነበቡ መደበኛ የአካባቢ ተለዋዋጮች ናቸው እንጂ የባህሪ ጥቆማዎች አይደሉም፦ የDB መሻርም ሆነ የዳሽቦርድ ማብሪያ/ማጥፊያ የላቸውም።
> [`ENVIRONMENT.md`](./ENVIRONMENT.md#4-security--authentication)ን ይመልከቱ።

> [!NOTE]
> የ`Restart` ዓምድ `requiresRestart: true` ያላቸውን ጥቆማዎች ያመለክታል — እሴቱ
> ወዲያውኑ ይቀመጣል፣ ነገር ግን ሂደቱ ዳግም ከተጫነ በኋላ ብቻ ተግባራዊ ይሆናል። የEnum
> ጥቆማዎች ከተፈቀደላቸው ስብስብ ውጭ ያለ ማንኛውንም እሴት ውድቅ ያደርጋሉ (በሁለቱም
> `setFeatureFlagOverride()` እና በREST `PUT` ተቆጣጣሪ ውስጥ በአገልጋይ በኩል ይረጋገጣል)።

---

## ጠቋሚዎችን ማብራትና ማጥፋት

### ዳሽቦርድ

ወደ **ዳሽቦርድ → ቅንብሮች → የባህሪ ጠቋሚዎች**
(`/dashboard/settings/feature-flags`) ይሂዱ። ሰንጠረዡ
(`src/app/(dashboard)/dashboard/settings/components/FeatureFlagsGrid.tsx`)
የሚከተሉትን ይደግፋል፦

- በቁልፍ ወይም በመግለጫ **መፈለግ**፣ እና በምድብ **ማጣራት** (በተጨማሪም የተፈጠረ
  **ዳግም ማስጀመር ያስፈልገዋል** እይታ)።
- ለቡሊያን ጠቋሚዎች **ማብሪያ/ማጥፊያ** እና ለenum ጠቋሚዎች **ተቆልቋይ ምናሌ**
  (`src/app/(dashboard)/dashboard/settings/components/FeatureFlagCard.tsx`)።
- በእያንዳንዱ ጠቋሚ ላይ ውጤታማው እሴት ከየት እንደመጣ የሚያሳይ **የምንጭ ባጅ** — `DB`፣ `ENV`፣ ወይም `DEF`።
- ልዩ ቅንብሩን ለማስወገድ **ዳግም አስጀምር** አዝራር (`DB` ምንጭ ላላቸው ጠቋሚዎች ብቻ የሚታይ)፣
  እና ከታች **ሁሉንም ልዩ ቅንብሮች ዳግም አስጀምር** አዝራር።
- `requiresRestart` ያለው ጠቋሚ ሲቀየር **ሰርቨሩን ዳግም አስጀምር** ባነር።

### REST API

ሁሉም ክወናዎች በአንድ መስመር ብቻ ያልፋሉ፦
[`src/app/api/settings/feature-flags/route.ts`](../../src/app/api/settings/feature-flags/route.ts)።
እያንዳንዱ ዘዴ የተረጋገጠ የዳሽቦርድ ክፍለ ጊዜ ይፈልጋል (ካልሆነ `401`)።

#### `GET /api/settings/feature-flags`

እያንዳንዱን ጠቋሚ ከውጤታማ እሴቱ፣ ምንጩ እና ማጠቃለያው ጋር ይመልሳል።

```jsonc
{
  "flags": [
    {
      "key": "REQUIRE_API_KEY",
      "label": "Require API Key",
      "description": "Require an API key for all incoming requests",
      "category": "security",
      "type": "boolean",
      "enumValues": null,
      "defaultValue": "false",
      "effectiveValue": "false",
      "source": "default", // "db" | "env" | "default"
      "requiresRestart": false,
      "warningLevel": "caution",
    },
    // ... ሁሉም 77 ጠቋሚዎች
  ],
  "summary": {
    "total": 56,
    "active": 0,
    "inactive": 0,
    "overriddenByDb": 0,
    "overriddenByEnv": 0,
  },
}
```

#### `PUT /api/settings/feature-flags`

አንድ ልዩ ቅንብር ያዘጋጁ ወይም ያስወግዱ። የጥያቄ አካል፦ `{ key: string; value?: string }`።
`value`ን አለማካተት ልዩ ቅንብሩን ያስወግዳል (የenv / default እሴቱን ይመልሳል)።

```bash
# የDB ልዩ ቅንብር አዘጋጅ
curl -X PUT http://localhost:20128/api/settings/feature-flags \
  -H "Content-Type: application/json" \
  -d '{"key":"REQUIRE_API_KEY","value":"true"}'

# ልዩ ቅንብሩን አስወግድ ("value" የለም)
curl -X PUT http://localhost:20128/api/settings/feature-flags \
  -H "Content-Type: application/json" \
  -d '{"key":"REQUIRE_API_KEY"}'
```

ምላሹ አዲሱን `effectiveValue`/`source`፣ `previousValue`/
`previousSource` እና `requiresRestart` መልሶ ያሳያል። ያልታወቁ ቁልፎች እና ከተፈቀደው ክልል ውጭ ያሉ የenum
እሴቶች በ`400` ውድቅ ይደረጋሉ።

#### `DELETE /api/settings/feature-flags`

**ሁሉንም** የDB ልዩ ቅንብሮች በአንድ ጊዜ ያጸዳል፣ እያንዳንዱን ጠቋሚ ወደ env / default
እሴቱ ይመልሳል። `{ cleared: <count>, message: "..." }`ን ይመልሳል።

> [!NOTE]
> `requiresRestart: true` ያላቸው ጠቋሚዎች ሥራ ላይ የሚውሉት ፕሮሰሱ ዳግም ከተጫነ በኋላ ብቻ ነው።
> የዳሽቦርዱ ዳግም ማስጀመሪያ ፍሰት `POST /api/restart`ን ይጠራል፣ ከዚያም ሰርቨሩ ዳግም እስኪነሳ ድረስ
> `GET /api/health/ping`ን በተደጋጋሚ ይፈትሻል።

---

## የአደጋ ጊዜ በጀት አማራጭ

`OMNIROUTE_EMERGENCY_FALLBACK` (ምድብ `runtime`፣ ነባሪ `true`) በ
[`open-sse/services/emergencyFallback.ts`](../../open-sse/services/emergencyFallback.ts)
ውስጥ ያለውን የአደጋ ጊዜ ነፃ አማራጭ መንገድ ይቆጣጠራል።
ሲነቃ፣ በጀታቸውን የጨረሱ ጥያቄዎች ሙሉ በሙሉ ከመክሸፍ ይልቅ ወደ ነፃ አማራጭ
አቅራቢ/ሞዴል ይመራሉ። ይህን ባህሪ ለማሰናከል እና በጀታቸውን የጨረሱ ጥያቄዎች
እንዲከሽፉ ለማድረግ፣ በዳሽቦርድ ማብሪያ/ማጥፊያ፣ በDB መሻር፣ ወይም በ
`OMNIROUTE_EMERGENCY_FALLBACK` የአካባቢ ተለዋዋጭ በኩል — ወደ `false` (ወይም `0`)
ያቀናብሩት። (በPRs #3741 / #3752 ውስጥ እንደ የዳሽቦርድ ማብሪያ/ማጥፊያ ቀርቧል።)

በዚህ አማራጭ የቀረበ ምላሽ
`X-OmniRoute-Emergency-Fallback: from=<provider/model>; to=<provider/model>` ይይዛል፤ በዚህም
ደንበኛው `X-OmniRoute-Provider`ን ከጥያቄው ጋር ሳያነጻጽር ጥያቄው እንደገና መመራቱን
ማወቅ ይችላል። ይህ ራስጌ በሌሎች ምላሾች ሁሉ ላይ አይኖርም።

---

## በተጨማሪ ይመልከቱ

- [የአካባቢ ተለዋዋጮች ማጣቀሻ](./ENVIRONMENT.md) — አብዛኛዎቹ ጠቋሚዎች እዚያ የተመዘገበ ተመሳሳይ ስም ያለው የአካባቢ ተለዋዋጭ አላቸው (የDB መሻር ከእሱ ይቀድማል)።
- [`src/shared/constants/featureFlagDefinitions.ts`](../../src/shared/constants/featureFlagDefinitions.ts)
  — ለእያንዳንዱ ጠቋሚ ትክክለኛው የመረጃ ምንጭ።
- [`src/shared/utils/featureFlags.ts`](../../src/shared/utils/featureFlags.ts)
  — የመፍታት አመክንዮ (`resolveFeatureFlag`፣ `isFeatureFlagEnabled`፣
  `resolveAllFeatureFlags`)።
- [`src/lib/db/featureFlags.ts`](../../src/lib/db/featureFlags.ts) — በ`key_value` ሰንጠረዥ
  `feature_flags` namespace ውስጥ የDB መሻርን በቋሚነት ማከማቸት።
