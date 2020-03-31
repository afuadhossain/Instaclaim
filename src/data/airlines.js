var airlines = [
{"id":"1","name":"Other/Private flight","alias":"\\N","iata":"","icao":"N/A","callsign":"","country":"","active":"Y"}
,
{"id":"3","name":"1Time Airline","alias":"\\N","iata":"1T","icao":"RNX","callsign":"NEXTIME","country":"South Africa","active":"Y"}
,
{"id":"10","name":"40-Mile Air","alias":"\\N","iata":"Q5","icao":"MLA","callsign":"MILE-AIR","country":"United States","active":"Y"}
,
{"id":"13","name":"Ansett Australia","alias":"\\N","iata":"AN","icao":"AAA","callsign":"ANSETT","country":"Australia","active":"Y"}
,
{"id":"14","name":"Abacus International","alias":"\\N","iata":"1B","icao":"","callsign":"","country":"Singapore","active":"Y"}
,
{"id":"21","name":"Aigle Azur","alias":"\\N","iata":"ZI","icao":"AAF","callsign":"AIGLE AZUR","country":"France","active":"Y"}
,
{"id":"22","name":"Aloha Airlines","alias":"\\N","iata":"AQ","icao":"AAH","callsign":"ALOHA","country":"United States","active":"Y"}
,
{"id":"24","name":"American Airlines","alias":"\\N","iata":"AA","icao":"AAL","callsign":"AMERICAN","country":"United States","active":"Y"}
,
{"id":"28","name":"Asiana Airlines","alias":"\\N","iata":"OZ","icao":"AAR","callsign":"ASIANA","country":"Republic of Korea","active":"Y"}
,
{"id":"29","name":"Askari Aviation","alias":"\\N","iata":"4K","icao":"AAS","callsign":"AL-AAS","country":"Pakistan","active":"Y"}
,
{"id":"32","name":"Afriqiyah Airways","alias":"\\N","iata":"8U","icao":"AAW","callsign":"AFRIQIYAH","country":"Libya","active":"Y"}
,
{"id":"35","name":"Allegiant Air","alias":"\\N","iata":"G4","icao":"AAY","callsign":"ALLEGIANT","country":"United States","active":"Y"}
,
{"id":"42","name":"ABSA - Aerolinhas Brasileiras","alias":"\\N","iata":"M3","icao":"TUS","callsign":"ABSA Cargo","country":"Brazil","active":"Y"}
,
{"id":"55","name":"Astral Aviation","alias":"\\N","iata":"8V","icao":"ACP","callsign":"ASTRAL CARGO","country":"Kenya","active":"Y"}
,
{"id":"68","name":"Air Tindi","alias":"\\N","iata":"8T","icao":"","callsign":"","country":"Canadian Territories","active":"Y"}
,
{"id":"72","name":"Ada Air","alias":"\\N","iata":"ZY","icao":"ADE","callsign":"ADA AIR","country":"Albania","active":"Y"}
,
{"id":"83","name":"Adria Airways","alias":"\\N","iata":"JP","icao":"ADR","callsign":"ADRIA","country":"Slovenia","active":"Y"}
,
{"id":"90","name":"Air Europa","alias":"\\N","iata":"UX","icao":"AEA","callsign":"EUROPA","country":"Spain","active":"Y"}
,
{"id":"93","name":"Aero Benin","alias":"\\N","iata":"EM","icao":"AEB","callsign":"AEROBEN","country":"Benin","active":"Y"}
,
{"id":"96","name":"Aegean Airlines","alias":"\\N","iata":"A3","icao":"AEE","callsign":"AEGEAN","country":"Greece","active":"Y"}
,
{"id":"106","name":"Air Europe","alias":"\\N","iata":"PE","icao":"AEL","callsign":"AIR EUROPE","country":"Italy","active":"Y"}
,
{"id":"109","name":"Alaska Central Express","alias":"\\N","iata":"KO","icao":"AER","callsign":"ACE AIR","country":"United States","active":"Y"}
,
{"id":"110","name":"ACES Colombia","alias":"\\N","iata":"","icao":"AES","callsign":"ACES","country":"Colombia","active":"Y"}
,
{"id":"112","name":"Astraeus","alias":"\\N","iata":"5W","icao":"AEU","callsign":"FLYSTAR","country":"United Kingdom","active":"Y"}
,
{"id":"114","name":"Aerosvit Airlines","alias":"\\N","iata":"VV","icao":"AEW","callsign":"AEROSVIT","country":"Ukraine","active":"Y"}
,
{"id":"116","name":"Air Italy","alias":"\\N","iata":"I9","icao":"AEY","callsign":"AIR ITALY","country":"Italy","active":"Y"}
,
{"id":"120","name":"Alliance Airlines","alias":"\\N","iata":"QQ","icao":"UTY","callsign":"UNITY","country":"Australia","active":"Y"}
,
{"id":"125","name":"Ariana Afghan Airlines","alias":"\\N","iata":"FG","icao":"AFG","callsign":"ARIANA","country":"Afghanistan","active":"Y"}
,
{"id":"130","name":"Aeroflot Russian Airlines","alias":"\\N","iata":"SU","icao":"AFL","callsign":"AEROFLOT","country":"Russia","active":"Y"}
,
{"id":"132","name":"Air Bosna","alias":"\\N","iata":"JA","icao":"BON","callsign":"AIR BOSNA","country":"Bosnia and Herzegovina","active":"Y"}
,
{"id":"137","name":"Air France","alias":"\\N","iata":"AF","icao":"AFR","callsign":"AIRFRANS","country":"France","active":"Y"}
,
{"id":"139","name":"Air Caledonie International","alias":"\\N","iata":"SB","icao":"ACI","callsign":"AIRCALIN","country":"France","active":"Y"}
,
{"id":"146","name":"Air Salone","alias":"\\N","iata":"2O","icao":"","callsign":"","country":"Sierra Leone","active":"Y"}
,
{"id":"149","name":"Air Cargo Carriers","alias":"\\N","iata":"2Q","icao":"SNC","callsign":"NIGHT CARGO","country":"United States","active":"Y"}
,
{"id":"153","name":"Air Namibia","alias":"\\N","iata":"SW","icao":"NMB","callsign":"NAMIBIA","country":"Namibia","active":"Y"}
,
{"id":"165","name":"Aerolitoral","alias":"\\N","iata":"5D","icao":"SLI","callsign":"COSTERA","country":"Mexico","active":"Y"}
,
{"id":"174","name":"Air Glaciers","alias":"\\N","iata":"7T","icao":"AGV","callsign":"AIR GLACIERS","country":"Switzerland","active":"Y"}
,
{"id":"176","name":"Aviogenex","alias":"\\N","iata":"","icao":"AGX","callsign":"GENEX","country":"Serbia","active":"Y"}
,
{"id":"179","name":"Aeroper","alias":"\\N","iata":"PL","icao":"PLI","callsign":"Aeroperu","country":"Peru","active":"Y"}
,
{"id":"180","name":"Atlas Blue","alias":"\\N","iata":"8A","icao":"BMM","callsign":"ATLAS BLUE","country":"Morocco","active":"Y"}
,
{"id":"197","name":"Azerbaijan Airlines","alias":"\\N","iata":"J2","icao":"AHY","callsign":"AZAL","country":"Azerbaijan","active":"Y"}
,
{"id":"198","name":"Avies","alias":"\\N","iata":"U3","icao":"AIA","callsign":"AVIES","country":"Estonia","active":"Y"}
,
{"id":"208","name":"Airblue","alias":"\\N","iata":"ED","icao":"ABQ","callsign":"PAKBLUE","country":"Pakistan","active":"Y"}
,
{"id":"210","name":"Airlift International","alias":"\\N","iata":"","icao":"AIR","callsign":"AIRLIFT","country":"United States","active":"Y"}
,
{"id":"214","name":"Air Berlin","alias":"\\N","iata":"AB","icao":"BER","callsign":"AIR BERLIN","country":"Germany","active":"Y"}
,
{"id":"218","name":"Air India Limited","alias":"\\N","iata":"AI","icao":"AIC","callsign":"AIRINDIA","country":"India","active":"Y"}
,
{"id":"220","name":"Air Bourbon","alias":"\\N","iata":"ZB","icao":"BUB","callsign":"BOURBON","country":"Reunion","active":"Y"}
,
{"id":"221","name":"Air Atlanta Icelandic","alias":"\\N","iata":"CC","icao":"ABD","callsign":"ATLANTA","country":"Iceland","active":"Y"}
,
{"id":"225","name":"Air Tahiti Nui","alias":"\\N","iata":"TN","icao":"THT","callsign":"TAHITI AIRLINES","country":"France","active":"Y"}
,
{"id":"231","name":"Arkia Israel Airlines","alias":"\\N","iata":"IZ","icao":"AIZ","callsign":"ARKIA","country":"Israel","active":"Y"}
,
{"id":"239","name":"Air Jamaica","alias":"\\N","iata":"JM","icao":"AJM","callsign":"JAMAICA","country":"Jamaica","active":"Y"}
,
{"id":"240","name":"Air One","alias":"\\N","iata":"AP","icao":"ADH","callsign":"HERON","country":"Italy","active":"Y"}
,
{"id":"241","name":"Air Sahara","alias":"\\N","iata":"S2","icao":"RSH","callsign":"SAHARA","country":"India","active":"Y"}
,
{"id":"242","name":"Air Malta","alias":"\\N","iata":"KM","icao":"AMC","callsign":"AIR MALTA","country":"Malta","active":"Y"}
,
{"id":"250","name":"Air Japan","alias":"\\N","iata":"NQ","icao":"AJX","callsign":"AIR JAPAN","country":"Japan","active":"Y"}
,
{"id":"252","name":"Air Korea Co. Ltd.","alias":"\\N","iata":"","icao":"AKA","callsign":"","country":"Republic of Korea","active":"Y"}
,
{"id":"263","name":"Air Kiribati","alias":"\\N","iata":"4A","icao":"AKL","callsign":"","country":"Kiribati","active":"Y"}
,
{"id":"281","name":"America West Airlines","alias":"\\N","iata":"HP","icao":"AWE","callsign":"CACTUS","country":"United States","active":"Y"}
,
{"id":"282","name":"Air Wisconsin","alias":"\\N","iata":"ZW","icao":"AWI","callsign":"AIR WISCONSIN","country":"United States","active":"Y"}
,
{"id":"286","name":"Tatarstan Airlines","alias":"\\N","iata":"U9","icao":"TAK","callsign":"TATARSTAN","country":"Russia","active":"Y"}
,
{"id":"287","name":"Allegheny Commuter Airlines","alias":"\\N","iata":"","icao":"ALO","callsign":"ALLEGHENY","country":"United States","active":"Y"}
,
{"id":"295","name":"Air Sunshine","alias":"\\N","iata":"","icao":"RSI","callsign":"AIR SUNSHINE","country":"United States","active":"Y"}
,
{"id":"299","name":"Air Libert","alias":"\\N","iata":"VD","icao":"","callsign":"","country":"France","active":"Y"}
,
{"id":"306","name":"Air Malawi","alias":"\\N","iata":"QM","icao":"AML","callsign":"MALAWI","country":"Malawi","active":"Y"}
,
{"id":"312","name":"Air Sicilia","alias":"\\N","iata":"BM","icao":"","callsign":"","country":"Italy","active":"Y"}
,
{"id":"315","name":"ATA Airlines","alias":"\\N","iata":"","icao":"AMT","callsign":"AMTRAN","country":"United States","active":"Y"}
,
{"id":"316","name":"Air Macau","alias":"\\N","iata":"NX","icao":"AMU","callsign":"AIR MACAO","country":"Macao","active":"Y"}
,
{"id":"317","name":"AMC Airlines","alias":"\\N","iata":"","icao":"AMV","callsign":"","country":"Egypt","active":"Y"}
,
{"id":"319","name":"Air Seychelles","alias":"\\N","iata":"HM","icao":"SEY","callsign":"SEYCHELLES","country":"Seychelles","active":"Y"}
,
{"id":"321","name":"AeroMéxico","alias":"\\N","iata":"AM","icao":"AMX","callsign":"AEROMEXICO","country":"Mexico","active":"Y"}
,
{"id":"324","name":"All Nippon Airways","alias":"ANA All Nippon Airways","iata":"NH","icao":"ANA","callsign":"ALL NIPPON","country":"Japan","active":"Y"}
,
{"id":"327","name":"Air Nostrum","alias":"\\N","iata":"YW","icao":"ANE","callsign":"AIR NOSTRUM","country":"Spain","active":"Y"}
,
{"id":"328","name":"Air Niugini","alias":"\\N","iata":"PX","icao":"ANG","callsign":"NUIGINI","country":"Papua New Guinea","active":"Y"}
,
{"id":"329","name":"Air Arabia","alias":"\\N","iata":"G9","icao":"ABY","callsign":"ARABIA","country":"United Arab Emirates","active":"Y"}
,
{"id":"330","name":"Air Canada","alias":"\\N","iata":"AC","icao":"ACA","callsign":"AIR CANADA","country":"Canada","active":"Y"}
,
{"id":"333","name":"Air Baltic","alias":"\\N","iata":"BT","icao":"BTI","callsign":"AIRBALTIC","country":"Latvia","active":"Y"}
,
{"id":"336","name":"Air Nippon","alias":"\\N","iata":"EL","icao":"ANK","callsign":"ANK AIR","country":"Japan","active":"Y"}
,
{"id":"338","name":"Airnorth","alias":"\\N","iata":"TL","icao":"ANO","callsign":"TOPEND","country":"Australia","active":"Y"}
,
{"id":"341","name":"Air North Charter - Canada","alias":"\\N","iata":"4N","icao":"ANT","callsign":"AIR NORTH","country":"Canada","active":"Y"}
,
{"id":"345","name":"Air New Zealand","alias":"\\N","iata":"NZ","icao":"ANZ","callsign":"NEW ZEALAND","country":"New Zealand","active":"Y"}
,
{"id":"371","name":"Alitalia Express","alias":"\\N","iata":"XM","icao":"SMX","callsign":"ALIEXPRESS","country":"Italy","active":"Y"}
,
{"id":"386","name":"Aero Flight","alias":"\\N","iata":"GV","icao":"ARF","callsign":"Aero Fox","country":"Germany","active":"Y"}
,
{"id":"397","name":"Arrow Air","alias":"\\N","iata":"JW","icao":"APW","callsign":"BIG A","country":"United States","active":"Y"}
,
{"id":"410","name":"Aerocondor","alias":"\\N","iata":"2B","icao":"ARD","callsign":"AEROCONDOR","country":"Portugal","active":"Y"}
,
{"id":"411","name":"Aires","alias":"\\N","iata":"4C","icao":"ARE","callsign":" Aerovias de Integracion Regional","country":" S.A.","active":"Y"}
,
{"id":"412","name":"Aerolineas Argentinas","alias":"\\N","iata":"AR","icao":"ARG","callsign":"ARGENTINA","country":"Argentina","active":"Y"}
,
{"id":"439","name":"Alaska Airlines","alias":"\\N","iata":"AS","icao":"ASA","callsign":" Inc.","country":"ALASKA","active":"Y"}
,
{"id":"442","name":"Air Sinai","alias":"\\N","iata":"4D","icao":"ASD","callsign":"AIR SINAI","country":"Egypt","active":"Y"}
,
{"id":"452","name":"Atlantic Southeast Airlines","alias":"\\N","iata":"EV","icao":"ASQ","callsign":"ACEY","country":"United States","active":"Y"}
,
{"id":"462","name":"Astrakhan Airlines","alias":"\\N","iata":"OB","icao":"ASZ","callsign":"AIR ASTRAKHAN","country":"Russia","active":"Y"}
,
{"id":"465","name":"Air Tanzania","alias":"\\N","iata":"TC","icao":"ATC","callsign":"TANZANIA","country":"Tanzania","active":"Y"}
,
{"id":"470","name":"Air Burkina","alias":"\\N","iata":"2J","icao":"VBW","callsign":"BURKINA","country":"Burkina Faso","active":"Y"}
,
{"id":"476","name":"Airlines Of Tasmania","alias":"\\N","iata":"FO","icao":"ATM","callsign":"AIRTAS","country":"Australia","active":"Y"}
,
{"id":"477","name":"Air Saint Pierre","alias":"\\N","iata":"PJ","icao":"SPM","callsign":"","country":"France","active":"Y"}
,
{"id":"491","name":"Austrian Airlines","alias":"\\N","iata":"OS","icao":"AUA","callsign":"AUSTRIAN","country":"Austria","active":"Y"}
,
{"id":"492","name":"Air Southwest","alias":"\\N","iata":"","icao":"WOW","callsign":"SWALLOW","country":"United Kingdom","active":"Y"}
,
{"id":"493","name":"Augsburg Airways","alias":"\\N","iata":"IQ","icao":"AUB","callsign":"AUGSBURG-AIR","country":"Germany","active":"Y"}
,
{"id":"497","name":"ATUR","alias":"\\N","iata":"","icao":"TUR","callsign":"","country":"Ecuador","active":"Y"}
,
{"id":"502","name":"Abu Dhabi Amiri Flight","alias":"\\N","iata":"MO","icao":"AUH","callsign":"SULTAN","country":"United Arab Emirates","active":"Y"}
,
{"id":"503","name":"Aeroflot-Nord","alias":"\\N","iata":"5N","icao":"AUL","callsign":"DVINA","country":"Russia","active":"Y"}
,
{"id":"508","name":"Aurigny Air Services","alias":"\\N","iata":"GR","icao":"AUR","callsign":"AYLINE","country":"United Kingdom","active":"Y"}
,
{"id":"510","name":"Austral Lineas Aereas","alias":"\\N","iata":"AU","icao":"AUT","callsign":"AUSTRAL","country":"Argentina","active":"Y"}
,
{"id":"515","name":"Avianca - Aerovias Nacionales de Colombia","alias":"\\N","iata":"AV","icao":"AVA","callsign":" S.A.","country":"AVIANCA","active":"Y"}
,
{"id":"524","name":"Air Vanuatu","alias":"\\N","iata":"NF","icao":"AVN","callsign":"AIR VAN","country":"Vanuatu","active":"Y"}
,
{"id":"543","name":"Air Bangladesh","alias":"\\N","iata":"B9","icao":"BGD","callsign":"AIR BANGLA","country":"Bangladesh","active":"Y"}
,
{"id":"547","name":"Air Mediterranee","alias":"\\N","iata":"DR","icao":"BIE","callsign":"MEDITERRANEE","country":"France","active":"Y"}
,
{"id":"551","name":"Air Moorea","alias":"\\N","iata":"","icao":"TAH","callsign":"AIR MOOREA","country":"France","active":"Y"}
,
{"id":"563","name":"Aeroline GmbH","alias":"\\N","iata":"7E","icao":"AWU","callsign":"SYLT-AIR","country":"Germany","active":"Y"}
,
{"id":"565","name":"Air Wales","alias":"\\N","iata":"6G","icao":"AWW","callsign":"RED DRAGON","country":"United Kingdom","active":"Y"}
,
{"id":"567","name":"Air Caraïbes","alias":"\\N","iata":"TX","icao":"FWI","callsign":"FRENCH WEST","country":"France","active":"Y"}
,
{"id":"569","name":"Air India Express","alias":"\\N","iata":"IX","icao":"AXB","callsign":"EXPRESS INDIA","country":"India","active":"Y"}
,
{"id":"575","name":"Air Exel","alias":"\\N","iata":"XT","icao":"AXL","callsign":"EXEL COMMUTER","country":"Netherlands","active":"Y"}
,
{"id":"576","name":"AirAsia","alias":"Air Asia","iata":"AK","icao":"AXM","callsign":"ASIAN EXPRESS","country":"Malaysia","active":"Y"}
,
{"id":"595","name":"Atlant-Soyuz Airlines","alias":"\\N","iata":"3G","icao":"AYZ","callsign":"ATLANT-SOYUZ","country":"Russia","active":"Y"}
,
{"id":"596","name":"Alitalia","alias":"\\N","iata":"AZ","icao":"AZA","callsign":"ALITALIA","country":"Italy","active":"Y"}
,
{"id":"603","name":"Amaszonas","alias":"\\N","iata":"Z8","icao":"AZN","callsign":"","country":"Bolivia","active":"Y"}
,
{"id":"608","name":"Air Zimbabwe","alias":"\\N","iata":"UM","icao":"AZW","callsign":"AIR ZIMBABWE","country":"Zimbabwe","active":"Y"}
,
{"id":"622","name":"Aserca Airlines","alias":"\\N","iata":"R7","icao":"OCA","callsign":"AROSCA","country":"Venezuela","active":"Y"}
,
{"id":"641","name":"Rossiya-Russian Airlines","alias":"Pulkovo Aviation Enterprise","iata":"FV","icao":"SDM","callsign":"PULKOVO","country":"Russia","active":"Y"}
,
{"id":"659","name":"American Eagle Airlines","alias":"\\N","iata":"MQ","icao":"EGF","callsign":"EAGLE FLIGHT","country":"United States","active":"Y"}
,
{"id":"665","name":"AD Aviation","alias":"\\N","iata":"","icao":"VUE","callsign":"FLIGHTVUE","country":"United Kingdom","active":"Y"}
,
{"id":"682","name":"Air Ivoire","alias":"\\N","iata":"VU","icao":"VUN","callsign":"AIRIVOIRE","country":"Ivory Coast","active":"Y"}
,
{"id":"683","name":"Air Botswana","alias":"\\N","iata":"BP","icao":"BOT","callsign":"BOTSWANA","country":"Botswana","active":"Y"}
,
{"id":"690","name":"Air Foyle","alias":"\\N","iata":"GS","icao":"UPA","callsign":"FOYLE","country":"United Kingdom","active":"Y"}
,
{"id":"692","name":"Air Tahiti","alias":"\\N","iata":"VT","icao":"VTA","callsign":"AIR TAHITI","country":"French Polynesia","active":"Y"}
,
{"id":"695","name":"Air VIA","alias":"\\N","iata":"VL","icao":"VIM","callsign":"","country":"Bulgaria","active":"Y"}
,
{"id":"715","name":"Africa West","alias":"\\N","iata":"FK","icao":"WTA","callsign":"WEST TOGO","country":"Togo","active":"Y"}
,
{"id":"724","name":"ATRAN Cargo Airlines","alias":"\\N","iata":"V8","icao":"VAS","callsign":"ATRAN","country":"Russian Federation","active":"Y"}
,
{"id":"751","name":"Air China","alias":"\\N","iata":"CA","icao":"CCA","callsign":"AIR CHINA","country":"China","active":"Y"}
,
{"id":"753","name":"Aero Condor Peru","alias":"\\N","iata":"Q6","icao":"CDP","callsign":"CONDOR-PERU","country":"Peru","active":"Y"}
,
{"id":"787","name":"Air Chathams","alias":"\\N","iata":"CV","icao":"CVA","callsign":"CHATHAM","country":"New Zealand","active":"Y"}
,
{"id":"788","name":"Air Marshall Islands","alias":"\\N","iata":"CW","icao":"CWM","callsign":"AIR MARSHALLS","country":"Marshall Islands","active":"Y"}
,
{"id":"792","name":"Access Air","alias":"\\N","iata":"ZA","icao":"CYD","callsign":"CYCLONE","country":"United States","active":"Y"}
,
{"id":"794","name":"Air Algerie","alias":"\\N","iata":"AH","icao":"DAH","callsign":"AIR ALGERIE","country":"Algeria","active":"Y"}
,
{"id":"800","name":"Adam Air","alias":"\\N","iata":"KI","icao":"DHI","callsign":"ADAM SKY","country":"Indonesia","active":"Y"}
,
{"id":"807","name":"Air Dolomiti","alias":"\\N","iata":"EN","icao":"DLA","callsign":"DOLOMOTI","country":"Italy","active":"Y"}
,
{"id":"816","name":"Aeroflot-Don","alias":"\\N","iata":"D9","icao":"DNV","callsign":"DONAVIA","country":"Russia","active":"Y"}
,
{"id":"817","name":"Air Madrid","alias":"\\N","iata":"NM","icao":"DRD","callsign":"ALADA AIR","country":"Spain","active":"Y"}
,
{"id":"837","name":"Aer Lingus","alias":"\\N","iata":"EI","icao":"EIN","callsign":"SHAMROCK","country":"Ireland","active":"Y"}
,
{"id":"876","name":"Air Finland","alias":"\\N","iata":"OF","icao":"FIF","callsign":"AIR FINLAND","country":"Finland","active":"Y"}
,
{"id":"878","name":"Airfix Aviation","alias":"\\N","iata":"","icao":"FIX","callsign":"AIRFIX","country":"Finland","active":"Y"}
,
{"id":"879","name":"Air Pacific","alias":"\\N","iata":"FJ","icao":"FJI","callsign":"PACIFIC","country":"Fiji","active":"Y"}
,
{"id":"881","name":"Atlantic Airways","alias":"\\N","iata":"RC","icao":"FLI","callsign":"FAROELINE","country":"Faroe Islands","active":"Y"}
,
{"id":"882","name":"Air Florida","alias":"\\N","iata":"QH","icao":"FLZ","callsign":"AIR FLORIDA","country":"United States","active":"Y"}
,
{"id":"896","name":"Air Iceland","alias":"\\N","iata":"NY","icao":"FXI","callsign":"FAXI","country":"Iceland","active":"Y"}
,
{"id":"897","name":"Air Philippines","alias":"\\N","iata":"2P","icao":"GAP","callsign":"ORIENT PACIFIC","country":"Philippines","active":"Y"}
,
{"id":"909","name":"Air Guinee Express","alias":"\\N","iata":"2U","icao":"GIP","callsign":"FUTURE EXPRESS","country":"Guinea","active":"Y"}
,
{"id":"921","name":"Air Greenland","alias":"\\N","iata":"GL","icao":"GRL","callsign":"GREENLAND","country":"Denmark","active":"Y"}
,
{"id":"928","name":"Atlas Air","alias":"\\N","iata":"5Y","icao":"GTI","callsign":"GIANT","country":"United States","active":"Y"}
,
{"id":"931","name":"Air Guyane","alias":"\\N","iata":"GG","icao":"GUY","callsign":"GREEN BIRD","country":"French Guiana","active":"Y"}
,
{"id":"970","name":"Air Bagan","alias":"\\N","iata":"W9","icao":"JAB","callsign":"AIR BAGAN","country":"Myanmar","active":"Y"}
,
{"id":"983","name":"Air Canada Jazz","alias":"\\N","iata":"QK","icao":"JZA","callsign":"JAZZ","country":"Canada","active":"Y"}
,
{"id":"995","name":"Atlasjet","alias":"\\N","iata":"KK","icao":"KKK","callsign":"ATLASJET","country":"Turkey","active":"Y"}
,
{"id":"998","name":"Air Koryo","alias":"\\N","iata":"JS","icao":"KOR","callsign":"AIR KORYO","country":"Democratic People's Republic of Korea","active":"Y"}
,
{"id":"1006","name":"Air Astana","alias":"\\N","iata":"KC","icao":"KZR","callsign":"ASTANALINE","country":"Kazakhstan","active":"Y"}
,
{"id":"1008","name":"Albanian Airlines","alias":"\\N","iata":"LV","icao":"LBC","callsign":"ALBANIAN","country":"Albania","active":"Y"}
,
{"id":"1017","name":"Air Alfa","alias":"\\N","iata":"","icao":"LFA","callsign":"","country":"Turkey","active":"Y"}
,
{"id":"1034","name":"Aerolane","alias":"\\N","iata":"XL","icao":"LNE","callsign":"LAN ECUADOR","country":"Ecuador","active":"Y"}
,
{"id":"1048","name":"Atlantis European Airways","alias":"\\N","iata":"TD","icao":"LUR","callsign":"","country":"Armenia","active":"Y"}
,
{"id":"1052","name":"Air Luxor","alias":"\\N","iata":"LK","icao":"LXR","callsign":"AIRLUXOR","country":"Portugal","active":"Y"}
,
{"id":"1057","name":"Air Mauritius","alias":"\\N","iata":"MK","icao":"MAU","callsign":"AIRMAURITIUS","country":"Mauritius","active":"Y"}
,
{"id":"1066","name":"Air Madagascar","alias":"\\N","iata":"MD","icao":"MDG","callsign":"AIR MADAGASCAR","country":"Madagascar","active":"Y"}
,
{"id":"1073","name":"Air Moldova","alias":"\\N","iata":"9U","icao":"MLD","callsign":"AIR MOLDOVA","country":"Moldova","active":"Y"}
,
{"id":"1087","name":"Air Plus Comet","alias":"\\N","iata":"A7","icao":"MPD","callsign":"RED COMET","country":"Spain","active":"Y"}
,
{"id":"1109","name":"Astair","alias":"\\N","iata":"8D","icao":"","callsign":"","country":"Russian Federation","active":"Y"}
,
{"id":"1116","name":"Aero Contractors","alias":"\\N","iata":"AJ","icao":"NIG","callsign":"AEROLINE","country":"Nigeria","active":"Y"}
,
{"id":"1143","name":"Aeropelican Air Services","alias":"\\N","iata":"OT","icao":"PEL","callsign":"PELICAN","country":"Australia","active":"Y"}
,
{"id":"1188","name":"Aer Arann","alias":"\\N","iata":"RE","icao":"REA","callsign":"AER ARANN","country":"Ireland","active":"Y"}
,
{"id":"1191","name":"Air Austral","alias":"\\N","iata":"UU","icao":"REU","callsign":"REUNION","country":"France","active":"Y"}
,
{"id":"1200","name":"Asian Spirit","alias":"\\N","iata":"6K","icao":"RIT","callsign":"ASIAN SPIRIT","country":"Philippines","active":"Y"}
,
{"id":"1202","name":"Air Afrique","alias":"\\N","iata":"RK","icao":"RKA","callsign":"AIRAFRIC","country":"Ivory Coast","active":"Y"}
,
{"id":"1203","name":"Airlinair","alias":"\\N","iata":"A5","icao":"RLA","callsign":"AIRLINAIR","country":"France","active":"Y"}
,
{"id":"1206","name":"Aero Lanka","alias":"\\N","iata":"QL","icao":"RLN","callsign":"AERO LANKA","country":"Sri Lanka","active":"Y"}
,
{"id":"1213","name":"Air Salone","alias":"\\N","iata":"20","icao":"RNE","callsign":"AIR SALONE","country":"Sierra Leone","active":"Y"}
,
{"id":"1216","name":"Armavia","alias":"\\N","iata":"U8","icao":"RNV","callsign":"ARMAVIA","country":"Armenia","active":"Y"}
,
{"id":"1224","name":"AeroRep","alias":"\\N","iata":"P5","icao":"RPB","callsign":"AEROREPUBLICA","country":"Colombia","active":"Y"}
,
{"id":"1230","name":"Aero-Service","alias":"\\N","iata":"BF","icao":"RSR","callsign":"CONGOSERV","country":"Republic of the Congo","active":"Y"}
,
{"id":"1231","name":"Aerosur","alias":"\\N","iata":"5L","icao":"RSU","callsign":"AEROSUR","country":"Bolivia","active":"Y"}
,
{"id":"1232","name":"Aeronorte","alias":"\\N","iata":"","icao":"RTE","callsign":"LUZAVIA","country":"Portugal","active":"Y"}
,
{"id":"1266","name":"Avient Aviation","alias":"\\N","iata":"Z3","icao":"SMJ","callsign":"AVAVIA","country":"Zimbabwe","active":"Y"}
,
{"id":"1287","name":"Aircompany Yakutia","alias":"\\N","iata":"R3","icao":"SYL","callsign":"AIR YAKUTIA","country":"Russia","active":"Y"}
,
{"id":"1290","name":"Aeromar","alias":"\\N","iata":"VW","icao":"TAO","callsign":"TRANS-AEROMAR","country":"Mexico","active":"Y"}
,
{"id":"1299","name":"Arkefly","alias":"\\N","iata":"OR","icao":"TFL","callsign":"ARKEFLY","country":"Netherlands","active":"Y"}
,
{"id":"1308","name":"Airlines PNG","alias":"\\N","iata":"CG","icao":"TOK","callsign":"BALUS","country":"Papua New Guinea","active":"Y"}
,
{"id":"1316","name":"AirTran Airways","alias":"\\N","iata":"FL","icao":"TRS","callsign":"CITRUS","country":"United States","active":"Y"}
,
{"id":"1317","name":"Air Transat","alias":"\\N","iata":"TS","icao":"TSC","callsign":"TRANSAT","country":"Canada","active":"Y"}
,
{"id":"1322","name":"Avialeasing Aviation Company","alias":"\\N","iata":"EC","icao":"TWN","callsign":"TWINARROW","country":"Uzbekistan","active":"Y"}
,
{"id":"1326","name":"Tyrolean Airways","alias":"\\N","iata":"VO","icao":"TYR","callsign":"TYROLEAN","country":"Austria","active":"Y"}
,
{"id":"1338","name":"Aerolineas Galapagos (Aerogal)","alias":"\\N","iata":"2K","icao":"GLG","callsign":"AEROGAL","country":"Ecuador","active":"Y"}
,
{"id":"1340","name":"Alrosa Mirny Air Enterprise","alias":"\\N","iata":"6R","icao":"DRU","callsign":"MIRNY","country":"Russia","active":"Y"}
,
{"id":"1355","name":"British Airways","alias":"\\N","iata":"BA","icao":"BAW","callsign":"SPEEDBIRD","country":"United Kingdom","active":"Y"}
,
{"id":"1359","name":"Biman Bangladesh Airlines","alias":"\\N","iata":"BG","icao":"BBC","callsign":"BANGLADESH","country":"Bangladesh","active":"Y"}
,
{"id":"1401","name":"Belair Airlines","alias":"\\N","iata":"4T","icao":"BHP","callsign":"BELAIR","country":"Switzerland","active":"Y"}
,
{"id":"1403","name":"Bahamasair","alias":"\\N","iata":"UP","icao":"BHS","callsign":"BAHAMAS","country":"Bahamas","active":"Y"}
,
{"id":"1406","name":"Balkan Bulgarian Airlines","alias":"\\N","iata":"LZ","icao":"","callsign":"","country":"","active":"Y"}
,
{"id":"1411","name":"British International Helicopters","alias":"\\N","iata":"BS","icao":"BIH","callsign":"BRINTEL","country":"United Kingdom","active":"Y"}
,
{"id":"1420","name":"BF-Lento OY","alias":"\\N","iata":"","icao":"BKF","callsign":"BAKERFLIGHT","country":"Finland","active":"Y"}
,
{"id":"1422","name":"Bangkok Airways","alias":"\\N","iata":"PG","icao":"BKP","callsign":"BANGKOK AIR","country":"Thailand","active":"Y"}
,
{"id":"1427","name":"Blue1","alias":"\\N","iata":"KF","icao":"BLF","callsign":"BLUEFIN","country":"Finland","active":"Y"}
,
{"id":"1431","name":"Baltic Airlines","alias":"\\N","iata":"","icao":"BLL","callsign":"BALTIC AIRLINES","country":"Russia","active":"Y"}
,
{"id":"1434","name":"Bearskin Lake Air Service","alias":"\\N","iata":"JV","icao":"BLS","callsign":"BEARSKIN","country":"Canada","active":"Y"}
,
{"id":"1436","name":"Bellview Airlines","alias":"\\N","iata":"B3","icao":"BLV","callsign":"BELLVIEW AIRLINES","country":"Nigeria","active":"Y"}
,
{"id":"1437","name":"bmi","alias":"bmi British Midland","iata":"BD","icao":"BMA","callsign":"MIDLAND","country":"United Kingdom","active":"Y"}
,
{"id":"1441","name":"bmibaby","alias":"\\N","iata":"WW","icao":"BMI","callsign":"BABY","country":"United Kingdom","active":"Y"}
,
{"id":"1442","name":"Bemidji Airlines","alias":"\\N","iata":"CH","icao":"BMJ","callsign":"BEMIDJI","country":"United States","active":"Y"}
,
{"id":"1445","name":"British Midland Regional","alias":"\\N","iata":"","icao":"BMR","callsign":"","country":"United Kingdom","active":"Y"}
,
{"id":"1463","name":"Blue Panorama Airlines","alias":"\\N","iata":"BV","icao":"BPA","callsign":"BLUE PANOROMA","country":"Italy","active":"Y"}
,
{"id":"1466","name":"Budapest Aircraft Services/Manx2","alias":"\\N","iata":"","icao":"BPS","callsign":"BASE","country":"Hungary","active":"Y"}
,
{"id":"1472","name":"Bering Air","alias":"\\N","iata":"8E","icao":"BRG","callsign":"BERING AIR","country":"United States","active":"Y"}
,
{"id":"1476","name":"Brazilian Air Force","alias":"\\N","iata":"","icao":"BRS","callsign":"BRAZILIAN AIR FORCE","country":"Brazil","active":"Y"}
,
{"id":"1478","name":"Belavia Belarusian Airlines","alias":"\\N","iata":"B2","icao":"BRU","callsign":"BELARUS AVIA","country":"Belarus","active":"Y"}
,
{"id":"1500","name":"Metro Batavia","alias":"\\N","iata":"7P","icao":"BTV","callsign":"BATAVIA","country":"Indonesia","active":"Y"}
,
{"id":"1508","name":"Berjaya Air","alias":"\\N","iata":"J8","icao":"BVT","callsign":"BERJAYA","country":"Malaysia","active":"Y"}
,
{"id":"1510","name":"Blue Wings","alias":"\\N","iata":"QW","icao":"BWG","callsign":"BLUE WINGS","country":"Germany","active":"Y"}
,
{"id":"1523","name":"Brit Air","alias":"\\N","iata":"DB","icao":"BZH","callsign":"BRITAIR","country":"France","active":"Y"}
,
{"id":"1531","name":"Brussels Airlines","alias":"SN Brussels Airlines","iata":"SN","icao":"DAT","callsign":"BEE-LINE","country":"Belgium","active":"Y"}
,
{"id":"1539","name":"Binter Canarias","alias":"\\N","iata":"NT","icao":"IBB","callsign":"","country":"Spain","active":"Y"}
,
{"id":"1542","name":"Blue Air","alias":"\\N","iata":"0B","icao":"JOR","callsign":"BLUE TRANSPORT","country":"Romania","active":"Y"}
,
{"id":"1543","name":"British Mediterranean Airways","alias":"\\N","iata":"KJ","icao":"LAJ","callsign":"BEE MED","country":"United Kingdom","active":"Y"}
,
{"id":"1548","name":"Bulgaria Air","alias":"\\N","iata":"FB","icao":"LZB","callsign":"FLYING BULGARIA","country":"Bulgaria","active":"Y"}
,
{"id":"1550","name":"Barents AirLink","alias":"\\N","iata":"8N","icao":"NKF","callsign":"NORDFLIGHT","country":"Sweden","active":"Y"}
,
{"id":"1581","name":"CAL Cargo Air Lines","alias":"\\N","iata":"5C","icao":"ICL","callsign":"CAL","country":"Israel","active":"Y"}
,
{"id":"1607","name":"Calima Aviacion","alias":"\\N","iata":"XG","icao":"CLI","callsign":"CALIMA","country":"Spain","active":"Y"}
,
{"id":"1615","name":"Canadian Airlines","alias":"\\N","iata":"CP","icao":"CDN","callsign":"CANADIAN","country":"Canada","active":"Y"}
,
{"id":"1623","name":"Canadian North","alias":"\\N","iata":"5T","icao":"MPE","callsign":"EMPRESS","country":"Canada","active":"Y"}
,
{"id":"1629","name":"Cape Air","alias":"\\N","iata":"9K","icao":"KAP","callsign":"CAIR","country":"United States","active":"Y"}
,
{"id":"1663","name":"Caribbean Airlines","alias":"\\N","iata":"BW","icao":"BWA","callsign":"CARIBBEAN AIRLINES","country":"Trinidad and Tobago","active":"Y"}
,
{"id":"1669","name":"Carpatair","alias":"\\N","iata":"V3","icao":"KRP","callsign":"CARPATAIR","country":"Romania","active":"Y"}
,
{"id":"1675","name":"Caspian Airlines","alias":"\\N","iata":"RV","icao":"CPN","callsign":"CASPIAN","country":"Iran","active":"Y"}
,
{"id":"1680","name":"Cathay Pacific","alias":"\\N","iata":"CX","icao":"CPA","callsign":"CATHAY","country":"Hong Kong SAR of China","active":"Y"}
,
{"id":"1682","name":"Cayman Airways","alias":"\\N","iata":"KX","icao":"CAY","callsign":"CAYMAN","country":"Cayman Islands","active":"Y"}
,
{"id":"1683","name":"Cebu Pacific","alias":"\\N","iata":"5J","icao":"CEB","callsign":"CEBU AIR","country":"Philippines","active":"Y"}
,
{"id":"1700","name":"Central Connect Airlines","alias":"\\N","iata":"","icao":"CCG","callsign":"","country":"Czech Republic","active":"Y"}
,
{"id":"1708","name":"Centralwings","alias":"\\N","iata":"C0","icao":"CLW","callsign":"CENTRALWINGS","country":"Poland","active":"Y"}
,
{"id":"1737","name":"Charter Air","alias":"\\N","iata":"","icao":"CHW","callsign":"CHARTER WIEN","country":"Austria","active":"Y"}
,
{"id":"1739","name":"Chautauqua Airlines","alias":"\\N","iata":"RP","icao":"CHQ","callsign":"CHAUTAUQUA","country":"United States","active":"Y"}
,
{"id":"1756","name":"China Airlines","alias":"\\N","iata":"CI","icao":"CAL","callsign":"DYNASTY","country":"Taiwan","active":"Y"}
,
{"id":"1758","name":"China Eastern Airlines","alias":"\\N","iata":"MU","icao":"CES","callsign":"CHINA EASTERN","country":"China","active":"Y"}
,
{"id":"1767","name":"China Southern Airlines","alias":"\\N","iata":"CZ","icao":"CSN","callsign":"CHINA SOUTHERN","country":"China","active":"Y"}
,
{"id":"1769","name":"China United Airlines","alias":"\\N","iata":"HR","icao":"CUA","callsign":"LIANHANG","country":"China","active":"Y"}
,
{"id":"1771","name":"Yunnan Airlines","alias":"\\N","iata":"3Q","icao":"CYH","callsign":"YUNNAN","country":"China","active":"Y"}
,
{"id":"1781","name":"Cimber Air","alias":"\\N","iata":"QI","icao":"CIM","callsign":"CIMBER","country":"Denmark","active":"Y"}
,
{"id":"1784","name":"Cirrus Airlines","alias":"\\N","iata":"C9","icao":"RUS","callsign":"CIRRUS AIR","country":"Germany","active":"Y"}
,
{"id":"1789","name":"City Airline","alias":"\\N","iata":"CF","icao":"SDR","callsign":"SWEDESTAR","country":"Sweden","active":"Y"}
,
{"id":"1790","name":"City Connexion Airlines","alias":"\\N","iata":"G3","icao":"CIX","callsign":"CONNEXION","country":"Burundi","active":"Y"}
,
{"id":"1792","name":"CityJet","alias":"\\N","iata":"WX","icao":"BCY","callsign":"CITY-IRELAND","country":"Ireland","active":"Y"}
,
{"id":"1795","name":"BA CityFlyer","alias":"\\N","iata":"CJ","icao":"CFE","callsign":"FLYER","country":"United Kingdom","active":"Y"}
,
{"id":"1808","name":"Click Airways","alias":"\\N","iata":"","icao":"CGK","callsign":"CLICK AIR","country":"Kyrgyzstan","active":"Y"}
,
{"id":"1814","name":"Coastal Air","alias":"\\N","iata":"DQ","icao":"","callsign":"U.S. Virgin Islands","country":"United States","active":"Y"}
,
{"id":"1821","name":"Colgan Air","alias":"\\N","iata":"9L","icao":"CJC","callsign":"COLGAN","country":"United States","active":"Y"}
,
{"id":"1828","name":"Comair","alias":"\\N","iata":"OH","icao":"COM","callsign":"COMAIR","country":"United States","active":"Y"}
,
{"id":"1829","name":"Comair","alias":"\\N","iata":"MN","icao":"CAW","callsign":"COMMERCIAL","country":"South Africa","active":"Y"}
,
{"id":"1843","name":"CommutAir","alias":"\\N","iata":"C5","icao":"UCA","callsign":"COMMUTAIR","country":"United States","active":"Y"}
,
{"id":"1844","name":"Comores Airlines","alias":"\\N","iata":"KR","icao":"CWK","callsign":"CONTICOM","country":"Comoros","active":"Y"}
,
{"id":"1860","name":"Compass Airlines","alias":"\\N","iata":"CP","icao":"CPZ","callsign":"Compass Rose","country":"United States","active":"Y"}
,
{"id":"1868","name":"Condor Flugdienst","alias":"\\N","iata":"DE","icao":"CFG","callsign":"CONDOR","country":"Germany","active":"Y"}
,
{"id":"1876","name":"Consorcio Aviaxsa","alias":"\\N","iata":"6A","icao":"CHP","callsign":"AVIACSA","country":"Mexico","active":"Y"}
,
{"id":"1879","name":"Contact Air","alias":"Contactair","iata":"C3","icao":"KIS","callsign":"CONTACTAIR","country":"Germany","active":"Y"}
,
{"id":"1881","name":"Continental Airlines","alias":"\\N","iata":"CO","icao":"COA","callsign":"CONTINENTAL","country":"United States","active":"Y"}
,
{"id":"1883","name":"Continental Express","alias":"\\N","iata":"CO","icao":"","callsign":"JETLINK","country":"United States","active":"Y"}
,
{"id":"1884","name":"Continental Micronesia","alias":"\\N","iata":"CS","icao":"CMI","callsign":"AIR MIKE","country":"United States","active":"Y"}
,
{"id":"1886","name":"Conviasa","alias":"\\N","iata":"V0","icao":"VCV","callsign":"CONVIASA","country":"Venezuela","active":"Y"}
,
{"id":"1889","name":"Copa Airlines","alias":"\\N","iata":"CM","icao":"CMP","callsign":"COPA","country":"Panama","active":"Y"}
,
{"id":"1892","name":"Copterline","alias":"\\N","iata":"","icao":"AAQ","callsign":"COPTERLINE","country":"Finland","active":"Y"}
,
{"id":"1894","name":"Corendon Airlines","alias":"\\N","iata":"","icao":"CAI","callsign":"CORENDON","country":"Turkey","active":"Y"}
,
{"id":"1908","name":"Corsairfly","alias":"\\N","iata":"SS","icao":"CRL","callsign":"CORSAIR","country":"France","active":"Y"}
,
{"id":"1909","name":"Corse-Mediterranee","alias":"\\N","iata":"XK","icao":"CCM","callsign":"CORSICA","country":"France","active":"Y"}
,
{"id":"1923","name":"Crest Aviation","alias":"\\N","iata":"","icao":"CAN","callsign":"CREST","country":"United Kingdom","active":"Y"}
,
{"id":"1925","name":"Croatia Airlines","alias":"\\N","iata":"OU","icao":"CTN","callsign":"CROATIA","country":"Croatia","active":"Y"}
,
{"id":"1931","name":"Crown Airways","alias":"\\N","iata":"","icao":"CRO","callsign":"CROWN AIRWAYS","country":"United States","active":"Y"}
,
{"id":"1936","name":"Cubana de Aviación","alias":"\\N","iata":"CU","icao":"CUB","callsign":"CUBANA","country":"Cuba","active":"Y"}
,
{"id":"1942","name":"Cyprus Airways","alias":"\\N","iata":"CY","icao":"CYP","callsign":"CYPRUS","country":"Cyprus","active":"Y"}
,
{"id":"1943","name":"Cyprus Turkish Airlines","alias":"\\N","iata":"YK","icao":"","callsign":"","country":"Turkey","active":"Y"}
,
{"id":"1946","name":"Czech Airlines","alias":"CSA Czech Airlines","iata":"OK","icao":"CSA","callsign":"CSA-LINES","country":"Czech Republic","active":"Y"}
,
{"id":"1954","name":"DAT Danish Air Transport","alias":"\\N","iata":"DX","icao":"DTR","callsign":"DANISH","country":"Denmark","active":"Y"}
,
{"id":"1966","name":"Daallo Airlines","alias":"\\N","iata":"D3","icao":"DAO","callsign":"DALO AIRLINES","country":"Djibouti","active":"Y"}
,
{"id":"1973","name":"Dalavia","alias":"\\N","iata":"H8","icao":"KHB","callsign":"DALAVIA","country":"Russia","active":"Y"}
,
{"id":"1983","name":"Darwin Airline","alias":"\\N","iata":"0D","icao":"DWT","callsign":"DARWIN","country":"Switzerland","active":"Y"}
,
{"id":"2006","name":"Delta Aerotaxi","alias":"\\N","iata":"","icao":"DEA","callsign":"JET SERVICE","country":"Italy","active":"Y"}
,
{"id":"2009","name":"Delta Air Lines","alias":"\\N","iata":"DL","icao":"DAL","callsign":"DELTA","country":"United States","active":"Y"}
,
{"id":"2013","name":"Denim Air","alias":"\\N","iata":"","icao":"DNM","callsign":"DENIM","country":"Netherlands","active":"Y"}
,
{"id":"2021","name":"Deutsche Bahn","alias":"\\N","iata":"2A","icao":"","callsign":"","country":"Germany","active":"Y"}
,
{"id":"2041","name":"Djibouti Airlines","alias":"\\N","iata":"D8","icao":"DJB","callsign":"DJIBOUTI AIR","country":"Djibouti","active":"Y"}
,
{"id":"2042","name":"Dniproavia","alias":"\\N","iata":"","icao":"UDN","callsign":"DNIEPRO","country":"Ukraine","active":"Y"}
,
{"id":"2047","name":"Dominicana de Aviaci","alias":"\\N","iata":"DO","icao":"DOA","callsign":"DOMINICANA","country":"Dominican Republic","active":"Y"}
,
{"id":"2048","name":"Domodedovo Airlines","alias":"\\N","iata":"E3","icao":"DMO","callsign":"DOMODEDOVO","country":"Russia","active":"Y"}
,
{"id":"2051","name":"DonbassAero","alias":"\\N","iata":"5D","icao":"UDC","callsign":"DONBASS AERO","country":"Ukraine","active":"Y"}
,
{"id":"2056","name":"Dragonair","alias":"\\N","iata":"KA","icao":"HDA","callsign":" Hong Kong Dragon Airlines","country":"DRAGON","active":"Y"}
,
{"id":"2058","name":"Druk Air","alias":"\\N","iata":"KB","icao":"DRK","callsign":"ROYAL BHUTAN","country":"Bhutan","active":"Y"}
,
{"id":"2061","name":"Dubrovnik Air","alias":"\\N","iata":"","icao":"DBK","callsign":"SEAGULL","country":"Croatia","active":"Y"}
,
{"id":"2070","name":"Dutch Antilles Express","alias":"\\N","iata":"","icao":"DNL","callsign":"DUTCH ANTILLES","country":"Netherlands Antilles","active":"Y"}
,
{"id":"2077","name":"dba","alias":"\\N","iata":"DI","icao":"BAG","callsign":"SPEEDWAY","country":"Germany","active":"Y"}
,
{"id":"2091","name":"EVA Air","alias":"\\N","iata":"BR","icao":"EVA","callsign":"EVA","country":"Taiwan","active":"Y"}
,
{"id":"2094","name":"Eagle Air","alias":"\\N","iata":"H7","icao":"","callsign":"","country":"Uganda","active":"Y"}
,
{"id":"2104","name":"East African","alias":"\\N","iata":"QU","icao":"UGX","callsign":"CRANE","country":"Uganda","active":"Y"}
,
{"id":"2117","name":"Eastern Airways","alias":"\\N","iata":"T3","icao":"EZE","callsign":"EASTFLIGHT","country":"United Kingdom","active":"Y"}
,
{"id":"2125","name":"Eastland Air","alias":"\\N","iata":"DK","icao":"ELA","callsign":"","country":"Australia","active":"Y"}
,
{"id":"2137","name":"Ecuavia","alias":"\\N","iata":"","icao":"ECU","callsign":"ECUAVIA","country":"Ecuador","active":"Y"}
,
{"id":"2138","name":"Edelweiss Air","alias":"\\N","iata":"WK","icao":"EDW","callsign":"EDELWEISS","country":"Switzerland","active":"Y"}
,
{"id":"2143","name":"Egyptair","alias":"\\N","iata":"MS","icao":"MSR","callsign":"EGYPTAIR","country":"Egypt","active":"Y"}
,
{"id":"2150","name":"El Al Israel Airlines","alias":"\\N","iata":"LY","icao":"ELY","callsign":"ELAL","country":"Israel","active":"Y"}
,
{"id":"2155","name":"El-Buraq Air Transport","alias":"\\N","iata":"UZ","icao":"BRQ","callsign":"BURAQAIR","country":"Libya","active":"Y"}
,
{"id":"2183","name":"Emirates","alias":"Emirates Airlines","iata":"EK","icao":"UAE","callsign":"EMIRATES","country":"United Arab Emirates","active":"Y"}
,
{"id":"2193","name":"Empresa Ecuatoriana De Aviacion","alias":"\\N","iata":"EU","icao":"EEA","callsign":"ECUATORIANA","country":"Ecuador","active":"Y"}
,
{"id":"2213","name":"Eritrean Airlines","alias":"\\N","iata":"B8","icao":"ERT","callsign":"ERITREAN","country":"Eritrea","active":"Y"}
,
{"id":"2218","name":"Estonian Air","alias":"\\N","iata":"OV","icao":"ELL","callsign":"ESTONIAN","country":"Estonia","active":"Y"}
,
{"id":"2220","name":"Ethiopian Airlines","alias":"\\N","iata":"ET","icao":"ETH","callsign":"ETHIOPIAN","country":"Ethiopia","active":"Y"}
,
{"id":"2222","name":"Etihad Airways","alias":"\\N","iata":"EY","icao":"ETD","callsign":"ETIHAD","country":"United Arab Emirates","active":"Y"}
,
{"id":"2226","name":"Euro Exec Express","alias":"\\N","iata":"RZ","icao":"","callsign":"","country":"Sweden","active":"Y"}
,
{"id":"2237","name":"Eurocypria Airlines","alias":"\\N","iata":"UI","icao":"ECA","callsign":"EUROCYPRIA","country":"Cyprus","active":"Y"}
,
{"id":"2239","name":"Eurofly Service","alias":"\\N","iata":"GJ","icao":"EEU","callsign":"EUROFLY","country":"Italy","active":"Y"}
,
{"id":"2245","name":"Eurolot","alias":"\\N","iata":"K2","icao":"ELO","callsign":"EUROLOT","country":"Poland","active":"Y"}
,
{"id":"2251","name":"European Air Express","alias":"\\N","iata":"EA","icao":"EAL","callsign":"STAR WING","country":"Germany","active":"Y"}
,
{"id":"2260","name":"Eurowings","alias":"\\N","iata":"EW","icao":"EWG","callsign":"EUROWINGS","country":"Germany","active":"Y"}
,
{"id":"2261","name":"Evergreen International Airlines","alias":"\\N","iata":"EZ","icao":"EIA","callsign":"EVERGREEN","country":"United States","active":"Y"}
,
{"id":"2264","name":"Excel Airways","alias":"\\N","iata":"JN","icao":"XLA","callsign":"EXPO","country":"United Kingdom","active":"Y"}
,
{"id":"2265","name":"Excel Charter","alias":"\\N","iata":"","icao":"XEL","callsign":"HELI EXCEL","country":"United Kingdom","active":"Y"}
,
{"id":"2293","name":"Express One International","alias":"\\N","iata":"EO","icao":"LHN","callsign":"LONGHORN","country":"United States","active":"Y"}
,
{"id":"2295","name":"ExpressJet","alias":"\\N","iata":"XE","icao":"BTA","callsign":"JET LINK","country":"United States","active":"Y"}
,
{"id":"2297","name":"easyJet","alias":"EasyJet Airline","iata":"U2","icao":"EZY","callsign":"EASY","country":"United Kingdom","active":"Y"}
,
{"id":"2324","name":"Far Eastern Air Transport","alias":"\\N","iata":"EF","icao":"EFA","callsign":"Far Eastern","country":"Taiwan","active":"Y"}
,
{"id":"2350","name":"Finnair","alias":"\\N","iata":"AY","icao":"FIN","callsign":"FINNAIR","country":"Finland","active":"Y"}
,
{"id":"2351","name":"Finncomm Airlines","alias":"\\N","iata":"FC","icao":"WBA","callsign":"WESTBIRD","country":"Finland","active":"Y"}
,
{"id":"2353","name":"Firefly","alias":"\\N","iata":"FY","icao":"FFM","callsign":"FIREFLY","country":"Malaysia","active":"Y"}
,
{"id":"2354","name":"First Air","alias":"\\N","iata":"7F","icao":"FAB","callsign":"","country":"Canada","active":"Y"}
,
{"id":"2357","name":"First Choice Airways","alias":"\\N","iata":"DP","icao":"FCA","callsign":"JETSET","country":"United Kingdom","active":"Y"}
,
{"id":"2395","name":"Flightline","alias":"\\N","iata":"B5","icao":"FLT","callsign":"FLIGHTLINE","country":"United Kingdom","active":"Y"}
,
{"id":"2404","name":"Florida West International Airways","alias":"\\N","iata":"RF","icao":"FWL","callsign":"FLO WEST","country":"United States","active":"Y"}
,
{"id":"2417","name":"AirAsia X","alias":"FlyAsianXpress","iata":"D7","icao":"XAX","callsign":"XANADU","country":"Malaysia","active":"Y"}
,
{"id":"2418","name":"FlyLal","alias":"\\N","iata":"TE","icao":"LIL","callsign":"LITHUANIA AIR","country":"Lithuania","active":"Y"}
,
{"id":"2419","name":"FlyNordic","alias":"\\N","iata":"LF","icao":"NDC","callsign":"NORDIC","country":"Sweden","active":"Y"}
,
{"id":"2420","name":"Flybaboo","alias":"\\N","iata":"F7","icao":"BBO","callsign":"BABOO","country":"Switzerland","active":"Y"}
,
{"id":"2421","name":"Flybe","alias":"\\N","iata":"BE","icao":"BEE","callsign":"JERSEY","country":"United Kingdom","active":"Y"}
,
{"id":"2425","name":"Flyglobespan","alias":"\\N","iata":"B4","icao":"GSM","callsign":"GLOBESPAN","country":"United Kingdom","active":"Y"}
,
{"id":"2429","name":"Flyhy Cargo Airlines","alias":"\\N","iata":"","icao":"FYH","callsign":"FLY HIGH","country":"Thailand","active":"Y"}
,
{"id":"2439","name":"Formosa Airlines","alias":"\\N","iata":"VY","icao":"FOS","callsign":"","country":"Taiwan","active":"Y"}
,
{"id":"2454","name":"Freedom Air","alias":"\\N","iata":"FP","icao":"FRE","callsign":"FREEDOM","country":"United States","active":"Y"}
,
{"id":"2456","name":"Freedom Airlines","alias":"\\N","iata":"","icao":"FRL","callsign":"FREEDOM AIR","country":"United States","active":"Y"}
,
{"id":"2468","name":"Frontier Airlines","alias":"\\N","iata":"F9","icao":"FFT","callsign":"FRONTIER FLIGHT","country":"United States","active":"Y"}
,
{"id":"2470","name":"Frontier Flying Service","alias":"\\N","iata":"2F","icao":"FTA","callsign":"FRONTIER-AIR","country":"United States","active":"Y"}
,
{"id":"2486","name":"GB Airways","alias":"\\N","iata":"GT","icao":"GBL","callsign":"GEEBEE AIRWAYS","country":"United Kingdom","active":"Y"}
,
{"id":"2520","name":"Garuda Indonesia","alias":"\\N","iata":"GA","icao":"GIA","callsign":"INDONESIA","country":"Indonesia","active":"Y"}
,
{"id":"2524","name":"Gazpromavia","alias":"\\N","iata":"4G","icao":"GZP","callsign":"GAZPROMAVIA","country":"Russia","active":"Y"}
,
{"id":"2538","name":"Georgian Airways","alias":"\\N","iata":"A9","icao":"TGZ","callsign":"TAMAZI","country":"Georgia","active":"Y"}
,
{"id":"2541","name":"Georgian National Airlines","alias":"\\N","iata":"QB","icao":"GFG","callsign":"NATIONAL","country":"Georgia","active":"Y"}
,
{"id":"2547","name":"Germania","alias":"\\N","iata":"ST","icao":"GMI","callsign":"GERMANIA","country":"Germany","active":"Y"}
,
{"id":"2548","name":"Germanwings","alias":"\\N","iata":"4U","icao":"GWI","callsign":"GERMAN WINGS","country":"Germany","active":"Y"}
,
{"id":"2556","name":"Ghana International Airlines","alias":"\\N","iata":"G0","icao":"GHB","callsign":"GHANA AIRLINES","country":"Ghana","active":"Y"}
,
{"id":"2575","name":"Go Air","alias":"\\N","iata":"G8","icao":"GOW","callsign":"GOAIR","country":"India","active":"Y"}
,
{"id":"2577","name":"GoJet Airlines","alias":"\\N","iata":"G7","icao":"GJS","callsign":"GATEWAY","country":"United States","active":"Y"}
,
{"id":"2581","name":"Gol Transportes Aéreos","alias":"\\N","iata":"G3","icao":"GLO","callsign":"GOL TRANSPORTE","country":"Brazil","active":"Y"}
,
{"id":"2585","name":"Golden Air","alias":"\\N","iata":"DC","icao":"GAO","callsign":"GOLDEN","country":"Sweden","active":"Y"}
,
{"id":"2607","name":"Great Lakes Airlines","alias":"\\N","iata":"ZK","icao":"GLA","callsign":"LAKES AIR","country":"United States","active":"Y"}
,
{"id":"2622","name":"Grupo TACA","alias":"TACA","iata":"TA","icao":"TAT","callsign":"TACA-COSTARICA","country":"Costa Rica","active":"Y"}
,
{"id":"2637","name":"Gulf Air","alias":"\\N","iata":"","icao":"GFA","callsign":"GULF AIR","country":"Oman","active":"Y"}
,
{"id":"2638","name":"Gulf Air Bahrain","alias":"\\N","iata":"GF","icao":"GBA","callsign":"GULF BAHRAIN","country":"Bahrain","active":"Y"}
,
{"id":"2645","name":"Gulfstream International Airlines","alias":"\\N","iata":"","icao":"GFT","callsign":"GULF FLIGHT","country":"United States","active":"Y"}
,
{"id":"2657","name":"Hageland Aviation Services","alias":"\\N","iata":"H6","icao":"HAG","callsign":"HAGELAND","country":"United States","active":"Y"}
,
{"id":"2660","name":"Hainan Airlines","alias":"\\N","iata":"HU","icao":"CHH","callsign":"HAINAN","country":"China","active":"Y"}
,
{"id":"2663","name":"Haiti Ambassador Airlines","alias":"\\N","iata":"2T","icao":"HAM","callsign":"","country":"Haiti","active":"Y"}
,
{"id":"2674","name":"Hamburg International","alias":"\\N","iata":"4R","icao":"HHI","callsign":"HAMBURG JET","country":"Germany","active":"Y"}
,
{"id":"2681","name":"TUIfly","alias":"\\N","iata":"X3","icao":"HLX","callsign":"YELLOW CAB","country":"Germany","active":"Y"}
,
{"id":"2682","name":"Hapagfly","alias":"\\N","iata":"HF","icao":"HLF","callsign":"HAPAG LLOYD","country":"Germany","active":"Y"}
,
{"id":"2688","name":"Hawaiian Airlines","alias":"\\N","iata":"HA","icao":"HAL","callsign":"HAWAIIAN","country":"United States","active":"Y"}
,
{"id":"2692","name":"Hawkair","alias":"\\N","iata":"BH","icao":"","callsign":"","country":"Canada","active":"Y"}
,
{"id":"2704","name":"Heli France","alias":"\\N","iata":"8H","icao":"HFR","callsign":"HELIFRANCE","country":"France","active":"Y"}
,
{"id":"2731","name":"Helijet","alias":"\\N","iata":"JB","icao":"JBA","callsign":"HELIJET","country":"Canada","active":"Y"}
,
{"id":"2747","name":"Hellas Jet","alias":"\\N","iata":"T4","icao":"HEJ","callsign":"HELLAS JET","country":"Greece","active":"Y"}
,
{"id":"2748","name":"Hello","alias":"\\N","iata":"HW","icao":"FHE","callsign":"FLYHELLO","country":"Switzerland","active":"Y"}
,
{"id":"2750","name":"Helvetic Airways","alias":"\\N","iata":"2L","icao":"OAW","callsign":"HELVETIC","country":"Switzerland","active":"Y"}
,
{"id":"2757","name":"Hex'Air","alias":"\\N","iata":"UD","icao":"HER","callsign":"HEX AIRLINE","country":"France","active":"Y"}
,
{"id":"2761","name":"Highland Airways","alias":"\\N","iata":"","icao":"HWY","callsign":"HIWAY","country":"United Kingdom","active":"Y"}
,
{"id":"2765","name":"Hokkaido International Airlines","alias":"\\N","iata":"HD","icao":"ADO","callsign":"AIR DO","country":"Japan","active":"Y"}
,
{"id":"2773","name":"Hong Kong Airlines","alias":"\\N","iata":"HX","icao":"CRK","callsign":"BAUHINIA","country":"Hong Kong SAR of China","active":"Y"}
,
{"id":"2774","name":"Hong Kong Express Airways","alias":"\\N","iata":"UO","icao":"HKE","callsign":"HONGKONG SHUTTLE","country":"Hong Kong SAR of China","active":"Y"}
,
{"id":"2778","name":"Horizon Air","alias":"Horizon Airlines","iata":"QX","icao":"QXE","callsign":"HORIZON AIR","country":"United States","active":"Y"}
,
{"id":"2782","name":"Horizon Airlines","alias":"\\N","iata":"BN","icao":"HZA","callsign":"","country":"Australia","active":"Y"}
,
{"id":"2822","name":"Iberia Airlines","alias":"\\N","iata":"IB","icao":"IBE","callsign":"IBERIA","country":"Spain","active":"Y"}
,
{"id":"2825","name":"Iberworld","alias":"\\N","iata":"TY","icao":"IWD","callsign":"","country":"Spain","active":"Y"}
,
{"id":"2826","name":"Ibex Airlines","alias":"\\N","iata":"FW","icao":"IBX","callsign":"IBEX","country":"Japan","active":"Y"}
,
{"id":"2829","name":"Icar Air","alias":"\\N","iata":"","icao":"RAC","callsign":"TUZLA AIR","country":"Bosnia and Herzegovina","active":"Y"}
,
{"id":"2835","name":"Icelandair","alias":"\\N","iata":"FI","icao":"ICE","callsign":"ICEAIR","country":"Iceland","active":"Y"}
,
{"id":"2845","name":"Imair Airlines","alias":"\\N","iata":"IK","icao":"ITX","callsign":"IMPROTEX","country":"Azerbaijan","active":"Y"}
,
{"id":"2850","name":"IndiGo Airlines","alias":"\\N","iata":"6E","icao":"IGO","callsign":"IFLY","country":"India","active":"Y"}
,
{"id":"2853","name":"Indian Airlines","alias":"\\N","iata":"IC","icao":"IAC","callsign":"INDAIR","country":"India","active":"Y"}
,
{"id":"2855","name":"Indigo","alias":"\\N","iata":"I9","icao":"IBU","callsign":"INDIGO BLUE","country":"United States","active":"Y"}
,
{"id":"2857","name":"Indonesia AirAsia","alias":"\\N","iata":"QZ","icao":"AWQ","callsign":"WAGON AIR","country":"Indonesia","active":"Y"}
,
{"id":"2858","name":"Indonesian Airlines","alias":"\\N","iata":"IO","icao":"IAA","callsign":"INDO LINES","country":"Indonesia","active":"Y"}
,
{"id":"2881","name":"Interair South Africa","alias":"\\N","iata":"D6","icao":"ILN","callsign":"INLINE","country":"South Africa","active":"Y"}
,
{"id":"2883","name":"Interavia Airlines","alias":"\\N","iata":"ZA","icao":"SUW","callsign":"ASTAIR","country":"Russia","active":"Y"}
,
{"id":"2896","name":"Interlink Airlines","alias":"\\N","iata":"ID","icao":"ITK","callsign":"INTERLINK","country":"South Africa","active":"Y"}
,
{"id":"2916","name":"Intersky","alias":"\\N","iata":"3L","icao":"ISK","callsign":"INTERSKY","country":"Austria","active":"Y"}
,
{"id":"2922","name":"Iran Air","alias":"\\N","iata":"IR","icao":"IRA","callsign":"IRANAIR","country":"Iran","active":"Y"}
,
{"id":"2923","name":"Iran Aseman Airlines","alias":"\\N","iata":"EP","icao":"IRC","callsign":"","country":"Iran","active":"Y"}
,
{"id":"2926","name":"Iraqi Airways","alias":"\\N","iata":"IA","icao":"IAW","callsign":"IRAQI","country":"Iraq","active":"Y"}
,
{"id":"2937","name":"Island Airlines","alias":"\\N","iata":"IS","icao":"","callsign":"","country":"United States","active":"Y"}
,
{"id":"2942","name":"Cargo Plus Aviation","alias":"\\N","iata":"8L","icao":"CGP","callsign":"","country":"United Arab Emirates","active":"Y"}
,
{"id":"2948","name":"Islas Airways","alias":"\\N","iata":"IF","icao":"ISW","callsign":"PINTADERA","country":"Spain","active":"Y"}
,
{"id":"2950","name":"Islena De Inversiones","alias":"\\N","iata":"WC","icao":"ISV","callsign":"","country":"Honduras","active":"Y"}
,
{"id":"2954","name":"Israir","alias":"\\N","iata":"6H","icao":"ISR","callsign":"ISRAIR","country":"Israel","active":"Y"}
,
{"id":"2958","name":"Itek Air","alias":"\\N","iata":"GI","icao":"IKA","callsign":"ITEK-AIR","country":"Kyrgyzstan","active":"Y"}
,
{"id":"2969","name":"JAL Express","alias":"\\N","iata":"JC","icao":"JEX","callsign":"JANEX","country":"Japan","active":"Y"}
,
{"id":"2970","name":"JALways","alias":"\\N","iata":"JO","icao":"JAZ","callsign":"JALWAYS","country":"Japan","active":"Y"}
,
{"id":"2987","name":"Japan Airlines","alias":"JAL Japan Airlines","iata":"JL","icao":"JAL","callsign":"JAPANAIR","country":"Japan","active":"Y"}
,
{"id":"2988","name":"Japan Airlines Domestic","alias":"\\N","iata":"JL","icao":"JAL","callsign":"J-BIRD","country":"Japan","active":"Y"}
,
{"id":"2989","name":"Japan Asia Airways","alias":"\\N","iata":"EG","icao":"JAA","callsign":"ASIA","country":"Japan","active":"Y"}
,
{"id":"2990","name":"Japan Transocean Air","alias":"\\N","iata":"NU","icao":"JTA","callsign":"JAI OCEAN","country":"Japan","active":"Y"}
,
{"id":"2991","name":"Jat Airways","alias":"\\N","iata":"JU","icao":"JAT","callsign":"JAT","country":"Serbia","active":"Y"}
,
{"id":"2993","name":"Jazeera Airways","alias":"\\N","iata":"J9","icao":"JZR","callsign":"JAZEERA","country":"Kuwait","active":"Y"}
,
{"id":"2994","name":"Jeju Air","alias":"\\N","iata":"7C","icao":"JJA","callsign":"JEJU AIR","country":"Republic of Korea","active":"Y"}
,
{"id":"3000","name":"Jet Airways","alias":"\\N","iata":"9W","icao":"JAI","callsign":"JET AIRWAYS","country":"India","active":"Y"}
,
{"id":"3001","name":"Jet Airways","alias":"\\N","iata":"QJ","icao":"","callsign":"","country":"United States","active":"Y"}
,
{"id":"3021","name":"Jetstar Asia Airways","alias":"\\N","iata":"3K","icao":"JSA","callsign":"JETSTAR ASIA","country":"Singapore","active":"Y"}
,
{"id":"3026","name":"Jet2.com","alias":"\\N","iata":"LS","icao":"EXS","callsign":"CHANNEX","country":"United Kingdom","active":"Y"}
,
{"id":"3027","name":"Jet4You","alias":"","iata":"8J","icao":"JFU","callsign":"ARGAN","country":"Morocco","active":"Y"}
,
{"id":"3029","name":"JetBlue Airways","alias":"\\N","iata":"B6","icao":"JBU","callsign":"JETBLUE","country":"United States","active":"Y"}
,
{"id":"3032","name":"Jetairfly","alias":"\\N","iata":"JF","icao":"JAF","callsign":"BEAUTY","country":"Belgium","active":"Y"}
,
{"id":"3039","name":"Jetflite","alias":"\\N","iata":"","icao":"JEF","callsign":"JETFLITE","country":"Finland","active":"Y"}
,
{"id":"3052","name":"Jetstar Airways","alias":"\\N","iata":"JQ","icao":"JST","callsign":"JETSTAR","country":"Australia","active":"Y"}
,
{"id":"3081","name":"Juneyao Airlines","alias":"\\N","iata":"HO","icao":"DKH","callsign":"JUNEYAO AIRLINES","country":"China","active":"Y"}
,
{"id":"3087","name":"KD Avia","alias":"\\N","iata":"KD","icao":"KNI","callsign":"KALININGRAD AIR","country":"Russia","active":"Y"}
,
{"id":"3088","name":"KLM Cityhopper","alias":"\\N","iata":"WA","icao":"KLC","callsign":"CITY","country":"Netherlands","active":"Y"}
,
{"id":"3090","name":"KLM Royal Dutch Airlines","alias":"\\N","iata":"KL","icao":"KLM","callsign":"KLM","country":"Netherlands","active":"Y"}
,
{"id":"3097","name":"Kam Air","alias":"\\N","iata":"RQ","icao":"KMF","callsign":"KAMGAR","country":"Afghanistan","active":"Y"}
,
{"id":"3110","name":"Kavminvodyavia","alias":"\\N","iata":"KV","icao":"MVD","callsign":"AIR MINVODY","country":"Russia","active":"Y"}
,
{"id":"3122","name":"Kendell Airlines","alias":"\\N","iata":"","icao":"KDA","callsign":"KENDELL","country":"Australia","active":"Y"}
,
{"id":"3123","name":"Kenmore Air","alias":"\\N","iata":"M5","icao":"KEN","callsign":"KENMORE","country":"United States","active":"Y"}
,
{"id":"3126","name":"Kenya Airways","alias":"\\N","iata":"KQ","icao":"KQA","callsign":"KENYA","country":"Kenya","active":"Y"}
,
{"id":"3142","name":"Kingfisher Airlines","alias":"\\N","iata":"IT","icao":"KFR","callsign":"KINGFISHER","country":"India","active":"Y"}
,
{"id":"3148","name":"Kish Air","alias":"\\N","iata":"Y9","icao":"IRK","callsign":"KISHAIR","country":"Iran","active":"Y"}
,
{"id":"3157","name":"Kogalymavia Air Company","alias":"\\N","iata":"7K","icao":"KGL","callsign":"KOGALYM","country":"Russia","active":"Y"}
,
{"id":"3163","name":"Korean Air","alias":"\\N","iata":"KE","icao":"KAL","callsign":"KOREANAIR","country":"Republic of Korea","active":"Y"}
,
{"id":"3165","name":"Kosmos","alias":"\\N","iata":"","icao":"KSM","callsign":"KOSMOS","country":"Russia","active":"Y"}
,
{"id":"3168","name":"Krasnojarsky Airlines","alias":"\\N","iata":"7B","icao":"KJC","callsign":"KRASNOJARSKY AIR","country":"Russia","active":"Y"}
,
{"id":"3175","name":"Kuban Airlines","alias":"\\N","iata":"GW","icao":"KIL","callsign":"AIR KUBAN","country":"Russia","active":"Y"}
,
{"id":"3179","name":"Kuwait Airways","alias":"\\N","iata":"KU","icao":"KAC","callsign":"KUWAITI","country":"Kuwait","active":"Y"}
,
{"id":"3180","name":"Kuzu Airlines Cargo","alias":"\\N","iata":"GO","icao":"KZU","callsign":"KUZU CARGO","country":"Turkey","active":"Y"}
,
{"id":"3197","name":"LACSA","alias":"\\N","iata":"LR","icao":"LRC","callsign":"LACSA","country":"Costa Rica","active":"Y"}
,
{"id":"3200","name":"LAN Airlines","alias":"\\N","iata":"LA","icao":"LAN","callsign":"LAN","country":"Chile","active":"Y"}
,
{"id":"3201","name":"LAN Argentina","alias":"\\N","iata":"4M","icao":"DSM","callsign":"LAN AR","country":"Argentina","active":"Y"}
,
{"id":"3204","name":"LAN Express","alias":"\\N","iata":"LU","icao":"LXP","callsign":"LANEX","country":"Chile","active":"Y"}
,
{"id":"3205","name":"LAN Peru","alias":"\\N","iata":"LP","icao":"LPE","callsign":"LANPERU","country":"Peru","active":"Y"}
,
{"id":"3210","name":"LOT Polish Airlines","alias":"\\N","iata":"LO","icao":"LOT","callsign":"POLLOT","country":"Poland","active":"Y"}
,
{"id":"3211","name":"LTE International Airways","alias":"\\N","iata":"XO","icao":"LTE","callsign":"FUN JET","country":"Spain","active":"Y"}
,
{"id":"3212","name":"LTU Austria","alias":"\\N","iata":"L3","icao":"LTO","callsign":"BILLA TRANSPORT","country":"Austria","active":"Y"}
,
{"id":"3213","name":"LTU International","alias":"\\N","iata":"LT","icao":"LTU","callsign":"LTU","country":"Germany","active":"Y"}
,
{"id":"3233","name":"Lao Airlines","alias":"\\N","iata":"QV","icao":"LAO","callsign":"LAO","country":"Lao Peoples Democratic Republic","active":"Y"}
,
{"id":"3237","name":"LatCharter","alias":"\\N","iata":"","icao":"LTC","callsign":"LATCHARTER","country":"Latvia","active":"Y"}
,
{"id":"3239","name":"Lauda Air","alias":"\\N","iata":"NG","icao":"LDA","callsign":"LAUDA AIR","country":"Austria","active":"Y"}
,
{"id":"3251","name":"Leeward Islands Air Transport","alias":"\\N","iata":"LI","icao":"LIA","callsign":"LIAT","country":"Antigua and Barbuda","active":"Y"}
,
{"id":"3258","name":"Libyan Arab Airlines","alias":"\\N","iata":"LN","icao":"LAA","callsign":"LIBAIR","country":"Libya","active":"Y"}
,
{"id":"3287","name":"Linhas A","alias":"\\N","iata":"LM","icao":"LAM","callsign":"MOZAMBIQUE","country":"Mozambique","active":"Y"}
,
{"id":"3290","name":"Lion Mentari Airlines","alias":"\\N","iata":"JT","icao":"LNI","callsign":"LION INTER","country":"Indonesia","active":"Y"}
,
{"id":"3319","name":"Luftfahrtgesellschaft Walter","alias":"\\N","iata":"HE","icao":"LGW","callsign":"WALTER","country":"Germany","active":"Y"}
,
{"id":"3320","name":"Lufthansa","alias":"\\N","iata":"LH","icao":"DLH","callsign":"LUFTHANSA","country":"Germany","active":"Y"}
,
{"id":"3321","name":"Lufthansa Cargo","alias":"\\N","iata":"LH","icao":"GEC","callsign":"LUFTHANSA CARGO","country":"Germany","active":"Y"}
,
{"id":"3322","name":"Lufthansa CityLine","alias":"\\N","iata":"CL","icao":"CLH","callsign":"HANSALINE","country":"Germany","active":"Y"}
,
{"id":"3326","name":"Lufttransport","alias":"\\N","iata":"L5","icao":"LTR","callsign":"LUFT TRANSPORT","country":"Norway","active":"Y"}
,
{"id":"3329","name":"Luxair","alias":"\\N","iata":"LG","icao":"LGL","callsign":"LUXAIR","country":"Luxembourg","active":"Y"}
,
{"id":"3342","name":"L","alias":"\\N","iata":"MJ","icao":"LPR","callsign":"LAPA","country":"Argentina","active":"Y"}
,
{"id":"3349","name":"MasAir","alias":"\\N","iata":"M7","icao":"MAA","callsign":"MAS CARGA","country":"Mexico","active":"Y"}
,
{"id":"3350","name":"MAT Macedonian Airlines","alias":"\\N","iata":"IN","icao":"MAK","callsign":"MAKAVIO","country":"Macedonia","active":"Y"}
,
{"id":"3354","name":"MIAT Mongolian Airlines","alias":"\\N","iata":"OM","icao":"MGL","callsign":"MONGOL AIR","country":"Mongolia","active":"Y"}
,
{"id":"3357","name":"MNG Airlines","alias":"\\N","iata":"MB","icao":"MNB","callsign":"BLACK SEA","country":"Turkey","active":"Y"}
,
{"id":"3363","name":"Macair Airlines","alias":"\\N","iata":"CC","icao":"MCK","callsign":"","country":"Australia","active":"Y"}
,
{"id":"3366","name":"Maersk","alias":"\\N","iata":"DM","icao":"","callsign":"","country":"Denmark","active":"Y"}
,
{"id":"3370","name":"Mahan Air","alias":"\\N","iata":"W5","icao":"IRM","callsign":"MAHAN AIR","country":"Iran","active":"Y"}
,
{"id":"3378","name":"Malaysia Airlines","alias":"\\N","iata":"MH","icao":"MAS","callsign":"MALAYSIAN","country":"Malaysia","active":"Y"}
,
{"id":"3384","name":"Malmo Aviation","alias":"\\N","iata":"","icao":"SCW","callsign":"SCANWING","country":"Sweden","active":"Y"}
,
{"id":"3386","name":"Malmö Aviation","alias":"\\N","iata":"TF","icao":"SCW","callsign":"Scanwings","country":"Sweden","active":"Y"}
,
{"id":"3387","name":"Malta Air Charter","alias":"\\N","iata":"R5","icao":"MAC","callsign":"MALTA CHARTER","country":"Malta","active":"Y"}
,
{"id":"3389","name":"Malév","alias":"\\N","iata":"MA","icao":"MAH","callsign":"MALEV","country":"Hungary","active":"Y"}
,
{"id":"3391","name":"Mandala Airlines","alias":"\\N","iata":"RI","icao":"MDL","callsign":"MANDALA","country":"Indonesia","active":"Y"}
,
{"id":"3392","name":"Mandarin Airlines","alias":"\\N","iata":"AE","icao":"MDA","callsign":"Mandarin","country":"Taiwan","active":"Y"}
,
{"id":"3393","name":"Mango","alias":"\\N","iata":"JE","icao":"MNO","callsign":"TULCA","country":"South Africa","active":"Y"}
,
{"id":"3411","name":"Martinair","alias":"\\N","iata":"MP","icao":"MPH","callsign":"MARTINAIR","country":"Netherlands","active":"Y"}
,
{"id":"3432","name":"Maxair","alias":"\\N","iata":"8M","icao":"MXL","callsign":"MAXAIR","country":"Sweden","active":"Y"}
,
{"id":"3437","name":"Maya Island Air","alias":"\\N","iata":"MW","icao":"MYD","callsign":"MYLAND","country":"Belize","active":"Y"}
,
{"id":"3463","name":"Meridiana","alias":"\\N","iata":"IG","icao":"ISS","callsign":"MERAIR","country":"Italy","active":"Y"}
,
{"id":"3465","name":"Merpati Nusantara Airlines","alias":"\\N","iata":"MZ","icao":"MNA","callsign":"MERPATI","country":"Indonesia","active":"Y"}
,
{"id":"3466","name":"Mesa Airlines","alias":"\\N","iata":"YV","icao":"ASH","callsign":"AIR SHUTTLE","country":"United States","active":"Y"}
,
{"id":"3467","name":"Mesaba Airlines","alias":"\\N","iata":"XJ","icao":"MES","callsign":"MESABA","country":"United States","active":"Y"}
,
{"id":"3479","name":"Mexicana de Aviaci","alias":"\\N","iata":"MX","icao":"MXA","callsign":"MEXICANA","country":"Mexico","active":"Y"}
,
{"id":"3490","name":"Middle East Airlines","alias":"\\N","iata":"ME","icao":"MEA","callsign":"CEDAR JET","country":"Lebanon","active":"Y"}
,
{"id":"3494","name":"Midway Airlines","alias":"\\N","iata":"JI","icao":"MDW","callsign":"MIDWAY","country":"United States","active":"Y"}
,
{"id":"3497","name":"Midwest Airlines","alias":"\\N","iata":"YX","icao":"MEP","callsign":"","country":"United States","active":"Y"}
,
{"id":"3498","name":"Midwest Airlines (Egypt)","alias":"\\N","iata":"MY","icao":"MWA","callsign":"","country":"Egypt","active":"Y"}
,
{"id":"3529","name":"Moldavian Airlines","alias":"\\N","iata":"2M","icao":"MDV","callsign":"MOLDAVIAN","country":"Moldova","active":"Y"}
,
{"id":"3532","name":"Monarch Airlines","alias":"\\N","iata":"ZB","icao":"MON","callsign":"MONARCH","country":"United Kingdom","active":"Y"}
,
{"id":"3534","name":"Myway Airlines","alias":"\\N","iata":"8I","icao":"","callsign":"","country":"Italy","active":"Y"}
,
{"id":"3539","name":"Montenegro Airlines","alias":"\\N","iata":"YM","icao":"MGX","callsign":"MONTAIR","country":"Montenegro","active":"Y"}
,
{"id":"3542","name":"Morningstar Air Express","alias":"\\N","iata":"","icao":"MAL","callsign":"MORNINGSTAR","country":"Canada","active":"Y"}
,
{"id":"3545","name":"Moskovia Airlines","alias":"\\N","iata":"3R","icao":"GAI","callsign":"GROMOV AIRLINE","country":"Russia","active":"Y"}
,
{"id":"3547","name":"Motor Sich","alias":"\\N","iata":"M9","icao":"MSI","callsign":"MOTOR SICH","country":"Ukraine","active":"Y"}
,
{"id":"3568","name":"MyTravel Airways","alias":"\\N","iata":"VZ","icao":"MYT","callsign":"KESTREL","country":"United Kingdom","active":"Y"}
,
{"id":"3569","name":"Myanma Airways","alias":"\\N","iata":"UB","icao":"UBA","callsign":"UNIONAIR","country":"Myanmar","active":"Y"}
,
{"id":"3570","name":"Myanmar Airways International","alias":"\\N","iata":"8M","icao":"MMM","callsign":"assignment postponed","country":"Myanmar","active":"Y"}
,
{"id":"3571","name":"Myflug","alias":"\\N","iata":"","icao":"MYA","callsign":"MYFLUG","country":"Iceland","active":"Y"}
,
{"id":"3589","name":"Nasair","alias":"\\N","iata":"UE","icao":"NAS","callsign":"NASAIRWAYS","country":"Eritrea","active":"Y"}
,
{"id":"3608","name":"National Jet Systems","alias":"\\N","iata":"NC","icao":"NJS","callsign":"NATIONAL JET","country":"Australia","active":"Y"}
,
{"id":"3613","name":"Nationwide Airlines","alias":"\\N","iata":"CE","icao":"NTW","callsign":"NATIONWIDE","country":"South Africa","active":"Y"}
,
{"id":"3618","name":"Nauru Air Corporation","alias":"\\N","iata":"ON","icao":"RON","callsign":"AIR NAURU","country":"Nauru","active":"Y"}
,
{"id":"3637","name":"Nepal Airlines","alias":"\\N","iata":"RA","icao":"RNA","callsign":"ROYAL NEPAL","country":"Nepal","active":"Y"}
,
{"id":"3641","name":"NetJets","alias":"\\N","iata":"1I","icao":"EJA","callsign":"EXECJET","country":"United States","active":"Y"}
,
{"id":"3644","name":"New England Airlines","alias":"\\N","iata":"EJ","icao":"NEA","callsign":"NEW ENGLAND","country":"United States","active":"Y"}
,
{"id":"3652","name":"NextJet","alias":"\\N","iata":"2N","icao":"NTJ","callsign":"NEXTJET","country":"Sweden","active":"Y"}
,
{"id":"3661","name":"Niki","alias":"\\N","iata":"HG","icao":"NLY","callsign":"FLYNIKI","country":"Austria","active":"Y"}
,
{"id":"3674","name":"Nok Air","alias":"\\N","iata":"DD","icao":"NOK","callsign":"NOK AIR","country":"Thailand","active":"Y"}
,
{"id":"3684","name":"Norfolk County Flight College","alias":"\\N","iata":"","icao":"NCF","callsign":"COUNTY","country":"United Kingdom","active":"Y"}
,
{"id":"3693","name":"North American Airlines","alias":"\\N","iata":"","icao":"NTM","callsign":"NORTHAM","country":"Canada","active":"Y"}
,
{"id":"3694","name":"North American Charters","alias":"\\N","iata":"","icao":"HMR","callsign":"HAMMER","country":"Canada","active":"Y"}
,
{"id":"3721","name":"Northern Dene Airways","alias":"\\N","iata":"U7","icao":"","callsign":"","country":"Canada","active":"Y"}
,
{"id":"3731","name":"Northwest Airlines","alias":"\\N","iata":"NW","icao":"NWA","callsign":"NORTHWEST","country":"United States","active":"Y"}
,
{"id":"3734","name":"Northwestern Air","alias":"\\N","iata":"J3","icao":"PLR","callsign":"POLARIS","country":"Canada","active":"Y"}
,
{"id":"3737","name":"Norwegian Air Shuttle","alias":"\\N","iata":"DY","icao":"NAX","callsign":"NOR SHUTTLE","country":"Norway","active":"Y"}
,
{"id":"3738","name":"Norwegian Aviation College","alias":"\\N","iata":"","icao":"TFN","callsign":"SPRIT","country":"Norway","active":"Y"}
,
{"id":"3740","name":"Nouvel Air Tunisie","alias":"\\N","iata":"BJ","icao":"LBT","callsign":"NOUVELAIR","country":"Tunisia","active":"Y"}
,
{"id":"3743","name":"Novair","alias":"\\N","iata":"1I","icao":"NVR","callsign":"NAVIGATOR","country":"Sweden","active":"Y"}
,
{"id":"3754","name":"Nas Air","alias":"\\N","iata":"XY","icao":"KNE","callsign":"NAS EXPRESS","country":"Saudi Arabia","active":"Y"}
,
{"id":"3759","name":"Oasis Hong Kong Airlines","alias":"\\N","iata":"O8","icao":"OHK","callsign":"OASIS","country":"Hong Kong","active":"Y"}
,
{"id":"3760","name":"Ocean Air","alias":"\\N","iata":"","icao":"BCN","callsign":"BLUE OCEAN","country":"Mauritania","active":"Y"}
,
{"id":"3764","name":"Oceanair","alias":"\\N","iata":"O6","icao":"ONE","callsign":"OCEANAIR","country":"Brazil","active":"Y"}
,
{"id":"3765","name":"Oceanic Airlines","alias":"\\N","iata":"O2","icao":"","callsign":"","country":"Guinea","active":"Y"}
,
{"id":"3776","name":"Olympic Airlines","alias":"\\N","iata":"OA","icao":"OAL","callsign":"OLYMPIC","country":"Greece","active":"Y"}
,
{"id":"3778","name":"Oman Air","alias":"\\N","iata":"WY","icao":"OMA","callsign":"OMAN AIR","country":"Oman","active":"Y"}
,
{"id":"3781","name":"Omni Air International","alias":"\\N","iata":"OY","icao":"OAE","callsign":"OMNI-EXPRESS","country":"United States","active":"Y"}
,
{"id":"3785","name":"One Two Go Airlines","alias":"\\N","iata":"","icao":"OTG","callsign":"THAI EXPRESS","country":"Thailand","active":"Y"}
,
{"id":"3788","name":"Onur Air","alias":"\\N","iata":"8Q","icao":"OHY","callsign":"ONUR AIR","country":"Turkey","active":"Y"}
,
{"id":"3805","name":"Orenburg Airlines","alias":"\\N","iata":"R2","icao":"ORB","callsign":"ORENBURG","country":"Russia","active":"Y"}
,
{"id":"3811","name":"Orient Thai Airlines","alias":"\\N","iata":"OX","icao":"OEA","callsign":"ORIENT THAI","country":"Thailand","active":"Y"}
,
{"id":"3814","name":"Origin Pacific Airways","alias":"\\N","iata":"QO","icao":"OGN","callsign":"ORIGIN","country":"New Zealand","active":"Y"}
,
{"id":"3822","name":"Ostfriesische Lufttransport","alias":"\\N","iata":"OL","icao":"OLT","callsign":"OLTRA","country":"Germany","active":"Y"}
,
{"id":"3826","name":"Overland Airways","alias":"\\N","iata":"OJ","icao":"OLA","callsign":"OVERLAND","country":"Nigeria","active":"Y"}
,
{"id":"3831","name":"Ozjet Airlines","alias":"\\N","iata":"O7","icao":"OZJ","callsign":"AUSJET","country":"Australia","active":"Y"}
,
{"id":"3834","name":"PAN Air","alias":"\\N","iata":"PV","icao":"PNR","callsign":"SKYJET","country":"Spain","active":"Y"}
,
{"id":"3835","name":"PB Air","alias":"\\N","iata":"9Q","icao":"PBA","callsign":"PEEBEE AIR","country":"Thailand","active":"Y"}
,
{"id":"3839","name":"PLUNA","alias":"\\N","iata":"PU","icao":"PUA","callsign":"PLUNA","country":"Uruguay","active":"Y"}
,
{"id":"3840","name":"PMTair","alias":"\\N","iata":"U4","icao":"PMT","callsign":"MULTITRADE","country":"Cambodia","active":"Y"}
,
{"id":"3850","name":"Jetstar Pacific","alias":"Pacific Airlines","iata":"BL","icao":"PIC","callsign":"PACIFIC AIRLINES","country":"Vietnam","active":"Y"}
,
{"id":"3856","name":"Pacific Coastal Airline","alias":"\\N","iata":"8P","icao":"PCO","callsign":"PASCO","country":"Canada","active":"Y"}
,
{"id":"3857","name":"Pacific East Asia Cargo Airlines","alias":"\\N","iata":"Q8","icao":"PEC","callsign":"PAC-EAST CARGO","country":"Philippines","active":"Y"}
,
{"id":"3860","name":"Pacific Island Aviation","alias":"\\N","iata":"","icao":"PSA","callsign":"PACIFIC ISLE","country":"United States","active":"Y"}
,
{"id":"3865","name":"Pacific Wings","alias":"\\N","iata":"LW","icao":"NMI","callsign":"TSUNAMI","country":"United States","active":"Y"}
,
{"id":"3871","name":"Pakistan International Airlines","alias":"PIA Pakistan International","iata":"PK","icao":"PIA","callsign":"PAKISTAN","country":"Pakistan","active":"Y"}
,
{"id":"3907","name":"Paramount Airways","alias":"\\N","iata":"I7","icao":"PMW","callsign":"PARAWAY","country":"India","active":"Y"}
,
{"id":"3914","name":"Passaredo Transportes Aereos","alias":"\\N","iata":"","icao":"PTB","callsign":"PASSAREDO","country":"Brazil","active":"Y"}
,
{"id":"3926","name":"Pegasus Airlines","alias":"\\N","iata":"PC","icao":"PGT","callsign":"SUNTURK","country":"Turkey","active":"Y"}
,
{"id":"3935","name":"Peninsula Airways","alias":"\\N","iata":"KS","icao":"PEN","callsign":"PENINSULA","country":"United States","active":"Y"}
,
{"id":"3952","name":"Philippine Airlines","alias":"\\N","iata":"PR","icao":"PAL","callsign":"PHILIPPINE","country":"Philippines","active":"Y"}
,
{"id":"3969","name":"Piedmont Airlines (1948-1989)","alias":"\\N","iata":"PI","icao":"PDT","callsign":"PIEDMONT","country":"United States","active":"Y"}
,
{"id":"3976","name":"Pinnacle Airlines","alias":"\\N","iata":"9E","icao":"FLG","callsign":"FLAGSHIP","country":"United States","active":"Y"}
,
{"id":"3995","name":"Polet","alias":"\\N","iata":"","icao":"POT","callsign":"POLET","country":"Russia","active":"Y"}
,
{"id":"4013","name":"Polynesian Airlines","alias":"\\N","iata":"PH","icao":"PAO","callsign":"POLYNESIAN","country":"Samoa","active":"Y"}
,
{"id":"4021","name":"Porter Airlines","alias":"\\N","iata":"PD","icao":"POE","callsign":"PORTER AIR","country":"Canada","active":"Y"}
,
{"id":"4022","name":"Portugalia","alias":"\\N","iata":"NI","icao":"PGA","callsign":"PORTUGALIA","country":"Portugal","active":"Y"}
,
{"id":"4026","name":"Potomac Air","alias":"\\N","iata":"BK","icao":"PDC","callsign":"DISTRICT","country":"United States","active":"Y"}
,
{"id":"4031","name":"Precision Air","alias":"\\N","iata":"PW","icao":"PRF","callsign":"PRECISION AIR","country":"Tanzania","active":"Y"}
,
{"id":"4056","name":"Privatair","alias":"\\N","iata":"","icao":"PTI","callsign":"PRIVATAIR","country":"Switzerland","active":"Y"}
,
{"id":"4066","name":"Proflight Commuter Services","alias":"\\N","iata":"P0","icao":"","callsign":"","country":"Zambia","active":"Y"}
,
{"id":"4089","name":"Qantas","alias":"Qantas Airways","iata":"QF","icao":"QFA","callsign":"QANTAS","country":"Australia","active":"Y"}
,
{"id":"4091","name":"Qatar Airways","alias":"\\N","iata":"QR","icao":"QTR","callsign":"QATARI","country":"Qatar","active":"Y"}
,
{"id":"4106","name":"RACSA","alias":"\\N","iata":"R6","icao":"","callsign":"","country":"Guatemala","active":"Y"}
,
{"id":"4113","name":"Kinloss Flying Training Unit","alias":"\\N","iata":"","icao":"KIN","callsign":"KINLOSS","country":"United Kingdom","active":"Y"}
,
{"id":"4177","name":"Regional Airlines","alias":"\\N","iata":"FN","icao":"","callsign":"","country":"Morocco","active":"Y"}
,
{"id":"4178","name":"Regional Express","alias":"\\N","iata":"ZL","icao":"RXA","callsign":"REX","country":"Australia","active":"Y"}
,
{"id":"4187","name":"Republic Airlines","alias":"\\N","iata":"RW","icao":"RPA","callsign":"BRICKYARD","country":"United States","active":"Y"}
,
{"id":"4188","name":"Republic Express Airlines","alias":"\\N","iata":"RH","icao":"RPH","callsign":"PUBLIC EXPRESS","country":"Indonesia","active":"Y"}
,
{"id":"4232","name":"Rossiya","alias":"\\N","iata":"R4","icao":"","callsign":"","country":"Russia","active":"Y"}
,
{"id":"4234","name":"Air Rarotonga","alias":"\\N","iata":"GZ","icao":"RAR","callsign":"","country":"Cook Islands","active":"Y"}
,
{"id":"4248","name":"Royal Air Maroc","alias":"\\N","iata":"AT","icao":"RAM","callsign":"ROYALAIR MAROC","country":"Morocco","active":"Y"}
,
{"id":"4255","name":"Royal Brunei Airlines","alias":"\\N","iata":"BI","icao":"RBA","callsign":"BRUNEI","country":"Brunei","active":"Y"}
,
{"id":"4259","name":"Royal Jordanian","alias":"\\N","iata":"RJ","icao":"RJA","callsign":"JORDANIAN","country":"Jordan","active":"Y"}
,
{"id":"4264","name":"Royal Nepal Airlines","alias":"\\N","iata":"RA","icao":"RNA","callsign":"ROYAL NEPAL","country":"Nepal","active":"Y"}
,
{"id":"4270","name":"Royal Phnom Penh Airways","alias":"\\N","iata":"","icao":"PPW","callsign":"PHNOM-PENH AIR","country":"Cambodia","active":"Y"}
,
{"id":"4283","name":"Rusline","alias":"\\N","iata":"","icao":"RLU","callsign":"RUSLINE AIR","country":"Russia","active":"Y"}
,
{"id":"4292","name":"Rwandair Express","alias":"\\N","iata":"WB","icao":"RWD","callsign":"RWANDAIR","country":"Rwanda","active":"Y"}
,
{"id":"4294","name":"Ryan Air Services","alias":"\\N","iata":"","icao":"RYA","callsign":"RYAN AIR","country":"United States","active":"Y"}
,
{"id":"4295","name":"Ryan International Airlines","alias":"\\N","iata":"RD","icao":"RYN","callsign":"RYAN INTERNATIONAL","country":"United States","active":"Y"}
,
{"id":"4296","name":"Ryanair","alias":"\\N","iata":"FR","icao":"RYR","callsign":"RYANAIR","country":"Ireland","active":"Y"}
,
{"id":"4299","name":"Régional","alias":"\\N","iata":"YS","icao":"RAE","callsign":"REGIONAL EUROPE","country":"France","active":"Y"}
,
{"id":"4304","name":"SATA International","alias":"\\N","iata":"S4","icao":"RZO","callsign":"AIR AZORES","country":"Portugal","active":"Y"}
,
{"id":"4305","name":"South African Airways","alias":"SAA South African Airways","iata":"SA","icao":"SAA","callsign":"SPRINGBOK","country":"South Africa","active":"Y"}
,
{"id":"4311","name":"Shaheen Air International","alias":"\\N","iata":"NL","icao":"SAI","callsign":"SHAHEEN AIR","country":"Pakistan","active":"Y"}
,
{"id":"4319","name":"Scandinavian Airlines System","alias":"SAS Scandinavian Airlines","iata":"SK","icao":"SAS","callsign":"SCANDINAVIAN","country":"Sweden","active":"Y"}
,
{"id":"4323","name":"ScotAirways","alias":"\\N","iata":"","icao":"SAY","callsign":"SUCKLING","country":"United Kingdom","active":"Y"}
,
{"id":"4329","name":"S7 Airlines","alias":"Sibir Airlines","iata":"S7","icao":"SBI","callsign":"SIBERIAN AIRLINES","country":"Russia","active":"Y"}
,
{"id":"4335","name":"Seaborne Airlines","alias":"\\N","iata":"BB","icao":"SBS","callsign":"SEABORNE","country":"United States","active":"Y"}
,
{"id":"4342","name":"Scenic Airlines","alias":"\\N","iata":"","icao":"SCE","callsign":"SCENIC","country":"United States","active":"Y"}
,
{"id":"4349","name":"SriLankan Airlines","alias":"\\N","iata":"UL","icao":"ALK","callsign":"SRILANKAN","country":"Sri Lanka","active":"Y"}
,
{"id":"4356","name":"Sun Country Airlines","alias":"\\N","iata":"SY","icao":"SCX","callsign":"SUN COUNTRY","country":"United States","active":"Y"}
,
{"id":"4370","name":"Southeast Air","alias":"\\N","iata":"","icao":"SEA","callsign":"SOUTHEAST AIR","country":"United States","active":"Y"}
,
{"id":"4374","name":"Sky Express","alias":"\\N","iata":"G3","icao":"SEH","callsign":"AIR CRETE","country":"Greece","active":"Y"}
,
{"id":"4375","name":"Spicejet","alias":"\\N","iata":"SG","icao":"SEJ","callsign":"SPICEJET","country":"India","active":"Y"}
,
{"id":"4388","name":"Star Flyer","alias":"\\N","iata":"7G","icao":"SFJ","callsign":"STARFLYER","country":"Japan","active":"Y"}
,
{"id":"4411","name":"Skagway Air Service","alias":"\\N","iata":"N5","icao":"SGY","callsign":"SKAGWAY AIR","country":"United States","active":"Y"}
,
{"id":"4414","name":"Sahara Airlines","alias":"\\N","iata":"","icao":"SHD","callsign":"","country":"Algeria","active":"Y"}
,
{"id":"4429","name":"SATA Air Acores","alias":"\\N","iata":"SP","icao":"SAT","callsign":"SATA","country":"Portugal","active":"Y"}
,
{"id":"4435","name":"Singapore Airlines","alias":"\\N","iata":"SQ","icao":"SIA","callsign":"SINGAPORE","country":"Singapore","active":"Y"}
,
{"id":"4436","name":"Sibaviatrans","alias":"\\N","iata":"5M","icao":"SIB","callsign":"SIBAVIA","country":"Russia","active":"Y"}
,
{"id":"4438","name":"Skynet Airlines","alias":"\\N","iata":"SI","icao":"SIH","callsign":"BLUEJET","country":"Ireland","active":"Y"}
,
{"id":"4454","name":"Sriwijaya Air","alias":"\\N","iata":"SJ","icao":"SJY","callsign":"SRIWIJAYA","country":"Indonesia","active":"Y"}
,
{"id":"4455","name":"Sama Airlines","alias":"\\N","iata":"ZS","icao":"SMY","callsign":"NAJIM","country":"Saudi Arabia","active":"Y"}
,
{"id":"4464","name":"Singapore Airlines Cargo","alias":"\\N","iata":"SQ","icao":"SQC","callsign":"SINGCARGO","country":"Singapore","active":"Y"}
,
{"id":"4469","name":"Siem Reap Airways","alias":"\\N","iata":"FT","icao":"SRH","callsign":"SIEMREAP AIR","country":"Cambodia","active":"Y"}
,
{"id":"4475","name":"South East Asian Airlines","alias":"\\N","iata":"DG","icao":"SRQ","callsign":"SEAIR","country":"Philippines","active":"Y"}
,
{"id":"4496","name":"Skyservice Airlines","alias":"\\N","iata":"5G","icao":"SSV","callsign":"SKYTOUR","country":"Canada","active":"Y"}
,
{"id":"4513","name":"Servicios de Transportes A","alias":"\\N","iata":"FS","icao":"STU","callsign":"FUEGUINO","country":"Argentina","active":"Y"}
,
{"id":"4521","name":"Sudan Airways","alias":"\\N","iata":"SD","icao":"SUD","callsign":"SUDANAIR","country":"Sudan","active":"Y"}
,
{"id":"4533","name":"Saudi Arabian Airlines","alias":"\\N","iata":"SV","icao":"SVA","callsign":"SAUDIA","country":"Saudi Arabia","active":"Y"}
,
{"id":"4547","name":"Southwest Airlines","alias":"\\N","iata":"WN","icao":"SWA","callsign":"SOUTHWEST","country":"United States","active":"Y"}
,
{"id":"4550","name":"Southern Winds Airlines","alias":"\\N","iata":"A4","icao":"SWD","callsign":"SOUTHERN WINDS","country":"Argentina","active":"Y"}
,
{"id":"4559","name":"Swiss International Air Lines","alias":"Swiss Airlines","iata":"LX","icao":"SWR","callsign":"SWISS","country":"Switzerland","active":"Y"}
,
{"id":"4560","name":"Swissair","alias":"\\N","iata":"SR","icao":"SWR","callsign":"Swissair","country":"Switzerland","active":"Y"}
,
{"id":"4563","name":"Swiss European Air Lines","alias":"Swiss European","iata":"","icao":"SWU","callsign":"EUROSWISS","country":"Switzerland","active":"Y"}
,
{"id":"4564","name":"Swe Fly","alias":"\\N","iata":"WV","icao":"SWV","callsign":"FLYING SWEDE","country":"Sweden","active":"Y"}
,
{"id":"4573","name":"SunExpress","alias":"\\N","iata":"XQ","icao":"SXS","callsign":"SUNEXPRESS","country":"Turkey","active":"Y"}
,
{"id":"4586","name":"Syrian Arab Airlines","alias":"\\N","iata":"RB","icao":"SYR","callsign":"SYRIANAIR","country":"Syrian Arab Republic","active":"Y"}
,
{"id":"4589","name":"Skywalk Airlines","alias":"\\N","iata":"AL","icao":"SYX","callsign":"SKYWAY-EX","country":"United States","active":"Y"}
,
{"id":"4599","name":"Shandong Airlines","alias":"\\N","iata":"SC","icao":"CDG","callsign":"SHANDONG","country":"China","active":"Y"}
,
{"id":"4606","name":"SAS Braathens","alias":"\\N","iata":"","icao":"CNO","callsign":"SCANOR","country":"Norway","active":"Y"}
,
{"id":"4607","name":"Spring Airlines","alias":"\\N","iata":"9S","icao":"CQH","callsign":"AIR SPRING","country":"China","active":"Y"}
,
{"id":"4608","name":"Sichuan Airlines","alias":"\\N","iata":"3U","icao":"CSC","callsign":"SI CHUAN","country":"China","active":"Y"}
,
{"id":"4609","name":"Shanghai Airlines","alias":"\\N","iata":"FM","icao":"CSH","callsign":"SHANGHAI AIR","country":"China","active":"Y"}
,
{"id":"4611","name":"Shenzhen Airlines","alias":"\\N","iata":"ZH","icao":"CSZ","callsign":"SHENZHEN AIR","country":"China","active":"Y"}
,
{"id":"4619","name":"Sun D'Or","alias":"\\N","iata":"7L","icao":"ERO","callsign":"ECHO ROMEO","country":"Israel","active":"Y"}
,
{"id":"4620","name":"SkyEurope","alias":"\\N","iata":"NE","icao":"ESK","callsign":"RELAX","country":"Slovakia","active":"Y"}
,
{"id":"4640","name":"Sky Europe Airlines","alias":"\\N","iata":"","icao":"HSK","callsign":"MATRA","country":"Slovakia","active":"Y"}
,
{"id":"4652","name":"Spanair","alias":"\\N","iata":"JK","icao":"JKK","callsign":"SPANAIR","country":"Spain","active":"Y"}
,
{"id":"4687","name":"Spirit Airlines","alias":"\\N","iata":"NK","icao":"NKS","callsign":"SPIRIT WINGS","country":"United States","active":"Y"}
,
{"id":"4691","name":"SATENA","alias":"\\N","iata":"9R","icao":"NSE","callsign":"SATENA","country":"Colombia","active":"Y"}
,
{"id":"4702","name":"Skywest Airlines","alias":"\\N","iata":"","icao":"OZW","callsign":"OZWEST","country":"Australia","active":"Y"}
,
{"id":"4735","name":"Santa Barbara Airlines","alias":"\\N","iata":"S3","icao":"BBR","callsign":"SANTA BARBARA","country":"Venezuela","active":"Y"}
,
{"id":"4737","name":"Sky Airline","alias":"\\N","iata":"H2","icao":"SKU","callsign":"AEROSKY","country":"Chile","active":"Y"}
,
{"id":"4738","name":"SkyWest","alias":"\\N","iata":"OO","icao":"SKW","callsign":"SKYWEST","country":"United States","active":"Y"}
,
{"id":"4739","name":"Skyways Express","alias":"\\N","iata":"JZ","icao":"SKX","callsign":"SKY EXPRESS","country":"Sweden","active":"Y"}
,
{"id":"4740","name":"Skymark Airlines","alias":"\\N","iata":"BC","icao":"SKY","callsign":"SKYMARK","country":"Japan","active":"Y"}
,
{"id":"4750","name":"SilkAir","alias":"\\N","iata":"MI","icao":"SLK","callsign":"SILKAIR","country":"Singapore","active":"Y"}
,
{"id":"4752","name":"Surinam Airways","alias":"\\N","iata":"PY","icao":"SLM","callsign":"SURINAM","country":"Suriname","active":"Y"}
,
{"id":"4776","name":"Sterling Airlines","alias":"\\N","iata":"NB","icao":"SNB","callsign":"STERLING","country":"Denmark","active":"Y"}
,
{"id":"4781","name":"Skynet Asia Airways","alias":"\\N","iata":"6J","icao":"SNJ","callsign":"NEWSKY","country":"Japan","active":"Y"}
,
{"id":"4797","name":"Solomon Airlines","alias":"\\N","iata":"IE","icao":"SOL","callsign":"SOLOMON","country":"Solomon Islands","active":"Y"}
,
{"id":"4804","name":"Southern Airways","alias":"\\N","iata":"","icao":"SOU","callsign":"SOUTHERN EXPRESS","country":"United States","active":"Y"}
,
{"id":"4805","name":"Saratov Aviation Division","alias":"\\N","iata":"6W","icao":"SOV","callsign":"SARATOV AIR","country":"Russia","active":"Y"}
,
{"id":"4808","name":"Sat Airlines","alias":"\\N","iata":"HZ","icao":"SOZ","callsign":"SATCO","country":"Kazakhstan","active":"Y"}
,
{"id":"4816","name":"South Pacific Island Airways","alias":"\\N","iata":"","icao":"SPI","callsign":"SOUTH PACIFIC","country":"United States","active":"Y"}
,
{"id":"4822","name":"Shuttle America","alias":"\\N","iata":"S5","icao":"TCF","callsign":"MERCURY","country":"United States","active":"Y"}
,
{"id":"4840","name":"Scat Air","alias":"","iata":"DV","icao":"VSV","callsign":"VLASTA","country":"Kazakhstan","active":"Y"}
,
{"id":"4863","name":"TAME","alias":"\\N","iata":"EQ","icao":"TAE","callsign":"TAME","country":"Ecuador","active":"Y"}
,
{"id":"4867","name":"TAM Brazilian Airlines","alias":"\\N","iata":"JJ","icao":"TAM","callsign":"TAM","country":"Brazil","active":"Y"}
,
{"id":"4869","name":"TAP Portugal","alias":"TAP Air Portugal","iata":"TP","icao":"TAP","callsign":"AIR PORTUGAL","country":"Portugal","active":"Y"}
,
{"id":"4870","name":"Tunisair","alias":"\\N","iata":"TU","icao":"TAR","callsign":"TUNAIR","country":"Tunisia","active":"Y"}
,
{"id":"4889","name":"Thai Air Cargo","alias":"\\N","iata":"T2","icao":"TCG","callsign":"THAI CARGO","country":"Thailand","active":"Y"}
,
{"id":"4896","name":"Thomas Cook Airlines","alias":"\\N","iata":"FQ","icao":"TCW","callsign":"THOMAS COOK","country":"Belgium","active":"Y"}
,
{"id":"4897","name":"Thomas Cook Airlines","alias":"\\N","iata":"MT","icao":"TCX","callsign":"KESTREL","country":"United Kingdom","active":"Y"}
,
{"id":"4933","name":"Trigana Air Service","alias":"\\N","iata":"","icao":"TGN","callsign":"TRIGANA","country":"Indonesia","active":"Y"}
,
{"id":"4936","name":"Tiger Airways","alias":"\\N","iata":"TR","icao":"TGW","callsign":"GO CAT","country":"Singapore","active":"Y"}
,
{"id":"4937","name":"Tiger Airways Australia","alias":"\\N","iata":"TT","icao":"TGW","callsign":"GO CAT","country":"Australia","active":"Y"}
,
{"id":"4940","name":"Thai Airways International","alias":"\\N","iata":"TG","icao":"THA","callsign":"THAI","country":"Thailand","active":"Y"}
,
{"id":"4946","name":"Turk Hava Kurumu Hava Taksi Isletmesi","alias":"\\N","iata":"","icao":"THK","callsign":"HUR KUS","country":"Turkey","active":"Y"}
,
{"id":"4947","name":"Thai AirAsia","alias":"Thai Air Asia","iata":"FD","icao":"AIQ","callsign":"THAI ASIA","country":"Thailand","active":"Y"}
,
{"id":"4951","name":"Turkish Airlines","alias":"\\N","iata":"TK","icao":"THY","callsign":"TURKAIR","country":"Turkey","active":"Y"}
,
{"id":"4957","name":"Tajikistan International Airlines","alias":"\\N","iata":"","icao":"TIL","callsign":"TIL","country":"Tajikistan","active":"Y"}
,
{"id":"4965","name":"Twin Jet","alias":"\\N","iata":"T7","icao":"TJT","callsign":"TWINJET","country":"France","active":"Y"}
,
{"id":"4970","name":"Translift Airways","alias":"\\N","iata":"","icao":"TLA","callsign":"TRANSLIFT","country":"Ireland","active":"Y"}
,
{"id":"4981","name":"Trans Mediterranean Airlines","alias":"\\N","iata":"TL","icao":"TMA","callsign":"TANGO LIMA","country":"Lebanon","active":"Y"}
,
{"id":"5002","name":"Tiara Air","alias":"\\N","iata":"3P","icao":"TNM","callsign":"TIARA","country":"Aruba","active":"Y"}
,
{"id":"5013","name":"Thomsonfly","alias":"\\N","iata":"BY","icao":"TOM","callsign":"TOMSON","country":"United Kingdom","active":"Y"}
,
{"id":"5016","name":"Tropic Air","alias":"\\N","iata":"PM","icao":"TOS","callsign":"TROPISER","country":"Belize","active":"Y"}
,
{"id":"5020","name":"TAMPA","alias":"\\N","iata":"QT","icao":"TPA","callsign":"TAMPA","country":"Colombia","active":"Y"}
,
{"id":"5038","name":"TransAsia Airways","alias":"\\N","iata":"GE","icao":"TNA","callsign":"TransAsia","country":"Taiwan","active":"Y"}
,
{"id":"5039","name":"Transavia Holland","alias":"\\N","iata":"HV","icao":"TRA","callsign":"TRANSAVIA","country":"Netherlands","active":"Y"}
,
{"id":"5041","name":"TACV","alias":"\\N","iata":"VR","icao":"TCV","callsign":"CABOVERDE","country":"Portugal","active":"Y"}
,
{"id":"5064","name":"Transwest Air","alias":"\\N","iata":"9T","icao":"ABS","callsign":"ATHABASKA","country":"Canada","active":"Y"}
,
{"id":"5067","name":"Transaero Airlines","alias":"\\N","iata":"UN","icao":"TSO","callsign":"TRANSOVIET","country":"Russia","active":"Y"}
,
{"id":"5083","name":"Turkmenistan Airlines","alias":"Turkmenhovayollary","iata":"T5","icao":"TUA","callsign":"TURKMENISTAN","country":"Turkmenistan","active":"Y"}
,
{"id":"5085","name":"Tuninter","alias":"\\N","iata":"UG","icao":"TUI","callsign":"","country":"Tunisia","active":"Y"}
,
{"id":"5097","name":"Travel Service","alias":"\\N","iata":"QS","icao":"TVS","callsign":"SKYTRAVEL","country":"Czech Republic","active":"Y"}
,
{"id":"5122","name":"TUIfly Nordic","alias":"\\N","iata":"6B","icao":"BLX","callsign":"BLUESCAN","country":"Sweden","active":"Y"}
,
{"id":"5133","name":"TAAG Angola Airlines","alias":"\\N","iata":"DT","icao":"DTA","callsign":"DTA","country":"Angola","active":"Y"}
,
{"id":"5146","name":"Turkish Air Force","alias":"\\N","iata":"","icao":"HVK","callsign":"TURKISH AIRFORCE","country":"Turkey","active":"Y"}
,
{"id":"5156","name":"TAM Mercosur","alias":"\\N","iata":"PZ","icao":"LAP","callsign":"PARAGUAYA","country":"Paraguay","active":"Y"}
,
{"id":"5160","name":"Trans States Airlines","alias":"\\N","iata":"AX","icao":"LOF","callsign":"WATERSKI","country":"United States","active":"Y"}
,
{"id":"5179","name":"Tarom","alias":"\\N","iata":"RO","icao":"ROT","callsign":"TAROM","country":"Romania","active":"Y"}
,
{"id":"5187","name":"Turan Air","alias":"\\N","iata":"3T","icao":"URN","callsign":"TURAN","country":"Azerbaijan","active":"Y"}
,
{"id":"5188","name":"TRIP Linhas A","alias":"\\N","iata":"8R","icao":"TIB","callsign":"TRIP","country":"Brazil","active":"Y"}
,
{"id":"5207","name":"USA3000 Airlines","alias":"\\N","iata":"U5","icao":"GWY","callsign":"GETAWAY","country":"United States","active":"Y"}
,
{"id":"5209","name":"United Airlines","alias":"\\N","iata":"UA","icao":"UAL","callsign":"UNITED","country":"United States","active":"Y"}
,
{"id":"5210","name":"United Air Charters","alias":"\\N","iata":"","icao":"UAC","callsign":"UNITAIR","country":"Zimbabwe","active":"Y"}
,
{"id":"5234","name":"Ural Airlines","alias":"\\N","iata":"U6","icao":"SVR","callsign":"SVERDLOVSK AIR","country":"Russia","active":"Y"}
,
{"id":"5251","name":"UM Airlines","alias":"\\N","iata":"UF","icao":"UKM","callsign":"UKRAINE MEDITERRANEE","country":"Ukraine","active":"Y"}
,
{"id":"5265","name":"US Airways","alias":"\\N","iata":"US","icao":"USA","callsign":"U S AIR","country":"United States","active":"Y"}
,
{"id":"5268","name":"US Helicopter","alias":"\\N","iata":"","icao":"USH","callsign":"US-HELI","country":"United States","active":"Y"}
,
{"id":"5271","name":"UTair Aviation","alias":"\\N","iata":"UT","icao":"UTA","callsign":"UTAIR","country":"Russia","active":"Y"}
,
{"id":"5279","name":"United States Air Force","alias":"\\N","iata":"","icao":"AIO","callsign":"AIR CHIEF","country":"United States","active":"Y"}
,
{"id":"5281","name":"Uzbekistan Airways","alias":"\\N","iata":"HY","icao":"UZB","callsign":"UZBEK","country":"Uzbekistan","active":"Y"}
,
{"id":"5282","name":"Ukraine International Airlines","alias":"\\N","iata":"PS","icao":"AUI","callsign":"UKRAINE INTERNATIONAL","country":"Ukraine","active":"Y"}
,
{"id":"5284","name":"US Helicopter Corporation","alias":"\\N","iata":"UH","icao":"","callsign":"","country":"United States","active":"Y"}
,
{"id":"5297","name":"Valuair","alias":"\\N","iata":"VF","icao":"VLU","callsign":"VALUAIR","country":"Singapore","active":"Y"}
,
{"id":"5301","name":"Vasco Air","alias":"\\N","iata":"","icao":"VFC","callsign":"VASCO AIR","country":"Vietnam","active":"Y"}
,
{"id":"5309","name":"Vietnam Airlines","alias":"\\N","iata":"VN","icao":"HVN","callsign":"VIET NAM AIRLINES","country":"Vietnam","active":"Y"}
,
{"id":"5311","name":"VIM Airlines","alias":"\\N","iata":"NN","icao":"MOV","callsign":"MOV AIR","country":"Russia","active":"Y"}
,
{"id":"5325","name":"Volaris","alias":"\\N","iata":"Y4","icao":"VOI","callsign":"VOLARIS","country":"Mexico","active":"Y"}
,
{"id":"5326","name":"Volga-Dnepr Airlines","alias":"\\N","iata":"VI","icao":"VDA","callsign":"VOLGA-DNEPR","country":"Russia","active":"Y"}
,
{"id":"5331","name":"Virgin America","alias":"\\N","iata":"VX","icao":"VRD","callsign":"REDWOOD","country":"United States","active":"Y"}
,
{"id":"5333","name":"Virgin Express","alias":"\\N","iata":"TV","icao":"VEX","callsign":"VIRGIN EXPRESS","country":"Belgium","active":"Y"}
,
{"id":"5335","name":"Virgin Nigeria Airways","alias":"\\N","iata":"VK","icao":"VGN","callsign":"VIRGIN NIGERIA","country":"Nigeria","active":"Y"}
,
{"id":"5347","name":"Virgin Atlantic Airways","alias":"\\N","iata":"VS","icao":"VIR","callsign":"VIRGIN","country":"United Kingdom","active":"Y"}
,
{"id":"5350","name":"Viva Macau","alias":"\\N","iata":"ZG","icao":"VVM","callsign":"JACKPOT","country":"Macao","active":"Y"}
,
{"id":"5351","name":"Volare Airlines","alias":"\\N","iata":"VE","icao":"VLE","callsign":"VOLA","country":"Italy","active":"Y"}
,
{"id":"5352","name":"Vueling Airlines","alias":"\\N","iata":"VY","icao":"VLG","callsign":"VUELING","country":"Spain","active":"Y"}
,
{"id":"5353","name":"Vladivostok Air","alias":"\\N","iata":"XF","icao":"VLK","callsign":"VLADAIR","country":"Russia","active":"Y"}
,
{"id":"5354","name":"Varig Log","alias":"\\N","iata":"LC","icao":"VLO","callsign":"VELOG","country":"Brazil","active":"Y"}
,
{"id":"5360","name":"Virgin Australia","alias":"\\N","iata":"VA","icao":"VOZ","callsign":"VIRGIN","country":"Australia","active":"Y"}
,
{"id":"5368","name":"VRG Linhas Aereas","alias":"Varig","iata":"RG","icao":"VRN","callsign":"VARIG","country":"Brazil","active":"Y"}
,
{"id":"5373","name":"VASP","alias":"\\N","iata":"VP","icao":"VSP","callsign":"VASP","country":"Brazil","active":"Y"}
,
{"id":"5383","name":"VLM Airlines","alias":"\\N","iata":"VG","icao":"VLM","callsign":"RUBENS","country":"Belgium","active":"Y"}
,
{"id":"5397","name":"Wayraper","alias":"\\N","iata":"7W","icao":"","callsign":"WAYRAPER","country":"Peru","active":"Y"}
,
{"id":"5399","name":"WebJet Linhas A","alias":"\\N","iata":"WJ","icao":"WEB","callsign":"WEB-BRASIL","country":"Brazil","active":"Y"}
,
{"id":"5401","name":"Welcome Air","alias":"\\N","iata":"2W","icao":"WLC","callsign":"WELCOMEAIR","country":"Austria","active":"Y"}
,
{"id":"5411","name":"West Coast Air","alias":"\\N","iata":"8O","icao":"","callsign":"","country":"Canada","active":"Y"}
,
{"id":"5416","name":"WestJet","alias":"\\N","iata":"WS","icao":"WJA","callsign":"WESTJET","country":"Canada","active":"Y"}
,
{"id":"5424","name":"Western Airlines","alias":"\\N","iata":"WA","icao":"WAL","callsign":"WESTERN","country":"United States","active":"Y"}
,
{"id":"5439","name":"Widerøe","alias":"\\N","iata":"WF","icao":"WIF","callsign":"WIDEROE","country":"Norway","active":"Y"}
,
{"id":"5447","name":"Wind Jet","alias":"\\N","iata":"IV","icao":"JET","callsign":"GHIBLI","country":"Italy","active":"Y"}
,
{"id":"5451","name":"Wings Air","alias":"\\N","iata":"IW","icao":"WON","callsign":"WINGS ABADI","country":"Indonesia","active":"Y"}
,
{"id":"5461","name":"Wizz Air","alias":"\\N","iata":"W6","icao":"WZZ","callsign":"WIZZ AIR","country":"Hungary","active":"Y"}
,
{"id":"5462","name":"Wizz Air Hungary","alias":"\\N","iata":"8Z","icao":"WVL","callsign":"WIZZBUL","country":"Bulgaria","active":"Y"}
,
{"id":"5465","name":"World Airways","alias":"\\N","iata":"WO","icao":"WOA","callsign":"WORLD","country":"United States","active":"Y"}
,
{"id":"5479","name":"XL Airways France","alias":"\\N","iata":"SE","icao":"SEU","callsign":"STARWAY","country":"France","active":"Y"}
,
{"id":"5484","name":"Xiamen Airlines","alias":"\\N","iata":"MF","icao":"CXA","callsign":"XIAMEN AIR","country":"China","active":"Y"}
,
{"id":"5492","name":"Yamal Airlines","alias":"\\N","iata":"YL","icao":"LLM","callsign":"YAMAL","country":"Russia","active":"Y"}
,
{"id":"5496","name":"Yemenia","alias":"\\N","iata":"IY","icao":"IYE","callsign":"YEMENI","country":"Yemen","active":"Y"}
,
{"id":"5501","name":"Yuzhmashavia","alias":"\\N","iata":"","icao":"UMK","callsign":"YUZMASH","country":"Ukraine","active":"Y"}
,
{"id":"5510","name":"Zanair","alias":"\\N","iata":"","icao":"TAN","callsign":"ZANAIR","country":"Tanzania","active":"Y"}
,
{"id":"5523","name":"Zoom Airlines","alias":"\\N","iata":"Z4","icao":"OOM","callsign":"ZOOM","country":"Canada","active":"Y"}
,
{"id":"5559","name":"Maldivian Air Taxi","alias":"\\N","iata":"8Q","icao":"\\N","callsign":"\\N","country":"Maldives","active":"Y"}
,
{"id":"5651","name":"Royal Air Cambodge","alias":"","iata":"VJ","icao":"RAC","callsign":"","country":"Cambodia","active":"Y"}
,
{"id":"5813","name":"Air Mandalay","alias":"","iata":"6T","icao":"\\N","callsign":"Six Tango","country":"Burma","active":"Y"}
,
{"id":"5982","name":"Air Busan","alias":"\\N","iata":"BX","icao":"ABL","callsign":"Air Busan","country":"Republic of Korea","active":"Y"}
,
{"id":"5584","name":"Sky Express","alias":"SkyExpress","iata":"XW","icao":"SXR","callsign":"SKYSTORM","country":"Russia","active":"Y"}
,
{"id":"6196","name":"Globus","alias":"","iata":"GH","icao":"GLP","callsign":"","country":"Russia","active":"Y"}
,
{"id":"6222","name":"Air Kazakhstan","alias":"","iata":"9Y","icao":"KZK","callsign":"Kazakh","country":"Kazakhstan","active":"Y"}
,
{"id":"6557","name":"Japan Air System","alias":"","iata":"JD","icao":"JAS","callsign":"Air System","country":"Japan","active":"Y"}
,
{"id":"6855","name":"EasyJet (DS)","alias":"","iata":"DS","icao":"\\N","callsign":"","country":"Switzerland","active":"Y"}
,
{"id":"8359","name":"Star Peru (2I)","alias":"","iata":"2I","icao":"\\N","callsign":"","country":"Peru","active":"Y"}
,
{"id":"8461","name":"Carnival Air Lines","alias":"","iata":"KW","icao":"\\N","callsign":"Carnival Air","country":"United States","active":"Y"}
,
{"id":"8463","name":"United Airways","alias":"","iata":"4H","icao":"UBD","callsign":"UNITED BANGLADESH","country":"Bangladesh","active":"Y"}
,
{"id":"8576","name":"Fly540","alias":"","iata":"5H","icao":"FFV","callsign":"SWIFT TANGO","country":"Kenya","active":"Y"}
,
{"id":"8745","name":"Transavia France","alias":"","iata":"TO","icao":"TVF","callsign":"FRENCH SUN","country":"France","active":"Y"}
,
{"id":"8809","name":"Island Air (WP)","alias":"","iata":"WP","icao":"MKU","callsign":"","country":"United States","active":"Y"}
,
{"id":"9082","name":"Uni Air","alias":"","iata":"B7","icao":"UIA","callsign":"Glory","country":"Taiwan","active":"Y"}
,
{"id":"9135","name":"Gomelavia","alias":"","iata":"YD","icao":"\\N","callsign":"","country":"Belarus","active":"Y"}
,
{"id":"9239","name":"Red Wings","alias":"Avialinii 400","iata":"WZ","icao":"RWZ","callsign":"AIR RED","country":"Russia","active":"Y"}
,
{"id":"9335","name":"TUIfly (X3)","alias":"","iata":"11","icao":"\\N","callsign":"","country":"Germany","active":"Y"}
,
{"id":"9343","name":"Felix Airways","alias":"","iata":"FU","icao":"FXX","callsign":"","country":"Yemen","active":"Y"}
,
{"id":"9344","name":"Kostromskie avialinii","alias":"","iata":"K1","icao":"KOQ","callsign":"","country":"Russia","active":"Y"}
,
{"id":"9373","name":"Greenfly","alias":"","iata":"XX","icao":"GFY","callsign":"","country":"Spain","active":"Y"}
,
{"id":"9531","name":"Tajik Air","alias":"","iata":"7J","icao":"\\N","callsign":"","country":"Tajikistan","active":"Y"}
,
{"id":"9541","name":"Air Mozambique","alias":"","iata":"TM","icao":"\\N","callsign":"","country":"Mozambique","active":"Y"}
,
{"id":"9620","name":"Gabon Airlines","alias":"\\N","iata":"GY","icao":"GBK","callsign":"GABON AIRLINES","country":"Gabon","active":"Y"}
,
{"id":"9626","name":"MCA Airlines","alias":"","iata":"","icao":"MCA","callsign":"CALSON","country":"Sweden","active":"Y"}
,
{"id":"9656","name":"Maldivo Airlines","alias":"","iata":"ML","icao":"MAV","callsign":"Maldivo","country":"Maldives","active":"Y"}
,
{"id":"9666","name":"Virgin Pacific","alias":"","iata":"VH","icao":"VNP","callsign":"","country":"Fiji","active":"Y"}
,
{"id":"9764","name":"Zest Air","alias":"","iata":"Z2","icao":"\\N","callsign":"","country":"Philippines","active":"Y"}
,
{"id":"9784","name":"Yangon Airways","alias":"","iata":"HK","icao":"\\N","callsign":"Hotel Kilo","country":"Burma","active":"Y"}
,
{"id":"9809","name":"Eastar Jet","alias":"","iata":"ZE","icao":"ESR","callsign":"Eastar","country":"South Korea","active":"Y"}
,
{"id":"9810","name":"Jin Air","alias":"","iata":"LJ","icao":"JNA","callsign":"Jin Air","country":"South Korea","active":"Y"}
,
{"id":"9811","name":"Wataniya Airways","alias":"","iata":"","icao":"KW1","callsign":"","country":"Kuwait","active":"Y"}
,
{"id":"9818","name":"Air Arabia Maroc","alias":"","iata":"3O","icao":"\\N","callsign":"Air Arabia","country":"Morocco","active":"Y"}
,
{"id":"9825","name":"Baltic Air lines","alias":"","iata":"B1","icao":"BA1","callsign":"Baltic","country":"Latvia","active":"Y"}
,
{"id":"9828","name":"Ciel Canadien","alias":"","iata":"YC","icao":"YCC","callsign":"Ciel","country":"Canada","active":"Y"}
,
{"id":"9829","name":"Canadian National Airways","alias":"","iata":"CN","icao":"YCP","callsign":"CaNational","country":"Canada","active":"Y"}
,
{"id":"9833","name":"Epic Holiday","alias":"Epic Holidays","iata":"FA","icao":"4AA","callsign":"Epic","country":"United States","active":"Y"}
,
{"id":"9838","name":"Indochina Airlines","alias":"","iata":"","icao":"AXC","callsign":"Airspup","country":"Vietnam","active":"Y"}
,
{"id":"9851","name":"Air Comet Chile","alias":"","iata":"3I","icao":"\\N","callsign":"","country":"Chile","active":"Y"}
,
{"id":"9859","name":"German Air Force - FLB","alias":"","iata":"","icao":"FLB","callsign":"FLB","country":"Germany","active":"Y"}
,
{"id":"10114","name":"Line Blue","alias":"","iata":"L8","icao":"LBL","callsign":"Bluebird","country":"Germany","active":"Y"}
,
{"id":"10117","name":"FlyLAL Charters","alias":"","iata":"","icao":"LLC","callsign":"","country":"Lithuania","active":"Y"}
,
{"id":"10122","name":"Salzburg arrows","alias":"SZA","iata":"SZ","icao":"\\N","callsign":"SZA","country":"Austria","active":"Y"}
,
{"id":"10123","name":"Texas Wings","alias":"","iata":"TQ","icao":"TXW","callsign":"TXW","country":"United States","active":"Y"}
,
{"id":"10128","name":"Dennis Sky","alias":"Dennis Sky Holding","iata":"DH","icao":"DSY","callsign":"DSY","country":"Israel","active":"Y"}
,
{"id":"10224","name":"Zz","alias":"","iata":"ZZ","icao":"\\N","callsign":"","country":"Belgium","active":"Y"}
,
{"id":"10226","name":"Atifly","alias":"","iata":"A1","icao":"A1F","callsign":"atifly","country":"United States","active":"Y"}
,
{"id":"10371","name":"Aerolineas heredas santa maria","alias":"","iata":"","icao":"SZB","callsign":"","country":"Dominican Republic","active":"Y"}
,
{"id":"10372","name":"Ciao Air","alias":"","iata":"99","icao":"\\N","callsign":"","country":"Italy","active":"Y"}
,
{"id":"10642","name":"Jc royal.britannica","alias":"","iata":"","icao":"JRB","callsign":"","country":"United Kingdom","active":"Y"}
,
{"id":"10650","name":"Pal airlines","alias":"","iata":"5P","icao":"\\N","callsign":"","country":"Chile","active":"Y"}
,
{"id":"10673","name":"CanXpress","alias":"","iata":"C1","icao":"CA1","callsign":"CAX","country":"Canada","active":"Y"}
,
{"id":"10674","name":"Danube Wings (V5)","alias":"","iata":"V5","icao":"\\N","callsign":"","country":"Slovakia","active":"Y"}
,
{"id":"10675","name":"Sharp Airlines","alias":"","iata":"SH","icao":"SHA","callsign":"SHARP","country":"Australia","active":"Y"}
,
{"id":"10683","name":"CanXplorer","alias":"","iata":"C2","icao":"CAP","callsign":"","country":"Canada","active":"Y"}
,
{"id":"10715","name":"Click (Mexicana)","alias":"","iata":"QA","icao":"\\N","callsign":"","country":"Mexico","active":"Y"}
,
{"id":"10735","name":"World Experience Airline","alias":"WEA","iata":"W1","icao":"WE1","callsign":"WEA","country":"Canada","active":"Y"}
,
{"id":"10737","name":"ALAK","alias":"","iata":"J4","icao":"\\N","callsign":"","country":"Russia","active":"Y"}
,
{"id":"10739","name":"Air Choice One","alias":"","iata":"3E","icao":"\\N","callsign":"","country":"United States","active":"Y"}
,
{"id":"10740","name":"Tianjin Airlines","alias":"","iata":"","icao":"GCR","callsign":"","country":"China","active":"Y"}
,
{"id":"10741","name":"China United","alias":"","iata":"KN","icao":"\\N","callsign":"","country":"China","active":"Y"}
,
{"id":"10748","name":"Locair","alias":"","iata":"ZQ","icao":"LOC","callsign":"LOCAIR","country":"United States","active":"Y"}
,
{"id":"10758","name":"Safi Airlines","alias":"","iata":"4Q","icao":"\\N","callsign":"","country":"Afghanistan","active":"Y"}
,
{"id":"10765","name":"SeaPort Airlines","alias":"","iata":"K5","icao":"SQH","callsign":"SASQUATCH","country":"United States","active":"Y"}
,
{"id":"10776","name":"Salmon Air","alias":"","iata":"S6","icao":"\\N","callsign":"","country":"United States","active":"Y"}
,
{"id":"10798","name":"Bobb Air Freight","alias":"","iata":"01","icao":"\\N","callsign":"","country":"Germany","active":"Y"}
,
{"id":"10800","name":"Star1 Airlines","alias":"","iata":"V9","icao":"HCW","callsign":"","country":"Lithuania","active":"Y"}
,
{"id":"10845","name":"Pelita","alias":"","iata":"6D","icao":"\\N","callsign":"","country":"Indonesia","active":"Y"}
,
{"id":"10912","name":"Alaska Seaplane Service","alias":"","iata":"J5","icao":"\\N","callsign":"","country":"United States","active":"Y"}
,
{"id":"10945","name":"Enerjet","alias":"","iata":"","icao":"ENJ","callsign":"ENERJET AIR","country":"Canada","active":"Y"}
,
{"id":"10955","name":"MexicanaLink","alias":"","iata":"I6","icao":"MXI","callsign":"LINK","country":"Mexico","active":"Y"}
,
{"id":"10960","name":"Island Spirit","alias":"","iata":"IP","icao":"ISX","callsign":"","country":"Iceland","active":"Y"}
,
{"id":"10969","name":"TACA Peru","alias":"","iata":"T0","icao":"\\N","callsign":"TACA PERU","country":"Peru","active":"Y"}
,
{"id":"11700","name":"Orbest","alias":"","iata":"","icao":"OBS","callsign":"ORBEST","country":"Portugal","active":"Y"}
,
{"id":"11719","name":"Southern Air Charter","alias":"","iata":"","icao":"SOA","callsign":"","country":"Bahamas","active":"Y"}
,
{"id":"11724","name":"SVG Air","alias":"","iata":"","icao":"SVG","callsign":"Grenadines","country":"Saint Vincent and the Grenadines","active":"Y"}
,
{"id":"11726","name":"Air Century","alias":"","iata":"","icao":"CEY","callsign":"","country":"Dominican Republic","active":"Y"}
,
{"id":"11731","name":"Pan Am World Airways Dominicana","alias":"PAWA Dominicana","iata":"7Q","icao":"\\N","callsign":"PAWA","country":"Dominican Republic","active":"Y"}
,
{"id":"11732","name":"Primera Air","alias":"","iata":"PF","icao":"\\N","callsign":"PRIMERA","country":"Iceland","active":"Y"}
,
{"id":"11741","name":"Air Antilles Express","alias":"","iata":"3S","icao":"\\N","callsign":"GREEN BIRD","country":"Guadeloupe","active":"Y"}
,
{"id":"11751","name":"Sol Lineas Aereas","alias":"","iata":"","icao":"OLS","callsign":"FLIGHT SOL","country":"Argentina","active":"Y"}
,
{"id":"11755","name":"Regional Paraguaya","alias":"","iata":"P7","icao":"REP","callsign":"REGIOPAR","country":"Paraguay","active":"Y"}
,
{"id":"11761","name":"VIP Ecuador","alias":"","iata":"V6","icao":"\\N","callsign":"","country":"Ecuador","active":"Y"}
,
{"id":"11762","name":"Transportes Aereos Cielos Andinos","alias":"","iata":"","icao":"NDN","callsign":"ANDINOS","country":"Peru","active":"Y"}
,
{"id":"11763","name":"Peruvian Airlines","alias":"","iata":"P9","icao":"\\N","callsign":"","country":"Peru","active":"Y"}
,
{"id":"11765","name":"EasyFly","alias":"","iata":"","icao":"EFY","callsign":"EASYFLY","country":"Colombia","active":"Y"}
,
{"id":"11767","name":"Polar Airlines","alias":"","iata":"ЯП","icao":"\\N","callsign":"","country":"Russia","active":"Y"}
,
{"id":"11794","name":"Catovair","alias":"","iata":"OC","icao":"\\N","callsign":"CATOVAIR","country":"Mauritius","active":"Y"}
,
{"id":"11795","name":"Andalus Lineas Aereas","alias":"","iata":"","icao":"ANU","callsign":"Andalus","country":"Spain","active":"Y"}
,
{"id":"11798","name":"Air 26","alias":"","iata":"","icao":"DCD","callsign":"DUCARD","country":"Angola","active":"Y"}
,
{"id":"11800","name":"Mauritania Airways","alias":"","iata":"","icao":"MTW","callsign":"MAURITANIA AIRWAYS","country":"Mauritania","active":"Y"}
,
{"id":"11802","name":"CEIBA Intercontinental","alias":"","iata":"","icao":"CEL","callsign":"CEIBA LINE","country":"Equatorial Guinea","active":"Y"}
,
{"id":"11804","name":"Halcyonair","alias":"","iata":"7Z","icao":"\\N","callsign":"CREOLE","country":"Cape Verde","active":"Y"}
,
{"id":"11805","name":"Business Aviation","alias":"","iata":"4P","icao":"\\N","callsign":"AFRICAN BUSINESS","country":"Congo (Kinshasa)","active":"Y"}
,
{"id":"11806","name":"Compagnie Africaine d'Aviation","alias":"","iata":"E9","icao":"\\N","callsign":"AFRICOMPANY","country":"Congo (Kinshasa)","active":"Y"}
,
{"id":"11808","name":"Zambia Skyways","alias":"","iata":"K8","icao":"\\N","callsign":"ZAMBIA SKIES","country":"Zambia","active":"Y"}
,
{"id":"11811","name":"AlMasria Universal Airlines","alias":"","iata":"UJ","icao":"LMU","callsign":"ALMASRIA","country":"Egypt","active":"Y"}
,
{"id":"11813","name":"EgyptAir Express","alias":"","iata":"","icao":"MSE","callsign":"EGYPTAIR EXPRESS","country":"Egypt","active":"Y"}
,
{"id":"11814","name":"SmartLynx Airlines","alias":"","iata":"6Y","icao":"\\N","callsign":"","country":"Latvia","active":"Y"}
,
{"id":"11815","name":"Air Italy Egypt","alias":"","iata":"","icao":"EUD","callsign":"","country":"Egypt","active":"Y"}
,
{"id":"11816","name":"KoralBlue Airlines","alias":"","iata":"K7","icao":"KBR","callsign":"KORAL BLUE","country":"Egypt","active":"Y"}
,
{"id":"11820","name":"Wind Rose Aviation","alias":"","iata":"","icao":"WRC","callsign":"WIND ROSE","country":"Ukraine","active":"Y"}
,
{"id":"11823","name":"Elysian Airlines","alias":"","iata":"E4","icao":"GIE","callsign":"","country":"Cameroon","active":"Y"}
,
{"id":"11833","name":"Sevenair","alias":"","iata":"","icao":"SEN","callsign":"SEVENAIR","country":"Tunisia","active":"Y"}
,
{"id":"11834","name":"Hellenic Imperial Airways","alias":"","iata":"HT","icao":"IMP","callsign":"IMPERIAL","country":"Greece","active":"Y"}
,
{"id":"11836","name":"Amsterdam Airlines","alias":"","iata":"WD","icao":"AAN","callsign":"AMSTEL","country":"Netherlands","active":"Y"}
,
{"id":"11838","name":"Arik Niger","alias":"","iata":"Q9","icao":"NAK","callsign":"","country":"Niger","active":"Y"}
,
{"id":"11839","name":"Dana Air","alias":"","iata":"DA","icao":"\\N","callsign":"DANACO","country":"Nigeria","active":"Y"}
,
{"id":"11840","name":"STP Airways","alias":"","iata":"8F","icao":"STP","callsign":"SAOTOME AIRWAYS","country":"Sao Tome and Principe","active":"Y"}
,
{"id":"11843","name":"Med Airways","alias":"","iata":"7Y","icao":"\\N","callsign":"FLYING CARPET","country":"Lebanon","active":"Y"}
,
{"id":"11850","name":"Skyjet Airlines","alias":"","iata":"UQ","icao":"SJU","callsign":"SKYJET","country":"Uganda","active":"Y"}
,
{"id":"11855","name":"Air Volga","alias":"","iata":"G6","icao":"\\N","callsign":"GOUMRAK","country":"Russia","active":"Y"}
,
{"id":"11856","name":"Transavia Denmark","alias":"","iata":"","icao":"TDK","callsign":"","country":"Denmark","active":"Y"}
,
{"id":"11857","name":"Royal Falcon","alias":"","iata":"RL","icao":"RFJ","callsign":"","country":"Jordan","active":"Y"}
,
{"id":"11873","name":"Euroline","alias":"","iata":"4L","icao":"MJX","callsign":"GEO-LINE","country":"Georgia","active":"Y"}
,
{"id":"11943","name":"Turkuaz Airlines","alias":"","iata":"","icao":"TRK","callsign":"TURKU","country":"Turkey","active":"Y"}
,
{"id":"11947","name":"Athens Airways","alias":"","iata":"ZF","icao":"\\N","callsign":"ATHENSAIR","country":"Greece","active":"Y"}
,
{"id":"11948","name":"Viking Hellas","alias":"","iata":"VQ","icao":"VKH","callsign":"DELPHI","country":"Greece","active":"Y"}
,
{"id":"11949","name":"Norlandair","alias":"","iata":"","icao":"FNA","callsign":"NORLAND","country":"Iceland","active":"Y"}
,
{"id":"11950","name":"Flugfelag Vestmannaeyja","alias":"","iata":"","icao":"FVM","callsign":"ELEGANT","country":"Iceland","active":"Y"}
,
{"id":"11963","name":"Starline.kz","alias":"","iata":"DZ","icao":"\\N","callsign":"ALUNK","country":"Kazakhstan","active":"Y"}
,
{"id":"12960","name":"Lugansk Airlines","alias":"","iata":"L7","icao":"\\N","callsign":"ENTERPRISE LUHANSK","country":"Ukraine","active":"Y"}
,
{"id":"12961","name":"Gryphon Airlines","alias":"","iata":"6P","icao":"\\N","callsign":"","country":"United States","active":"Y"}
,
{"id":"12962","name":"Gadair European Airlines","alias":"","iata":"GP","icao":"GDR","callsign":"GADAIR","country":"Spain","active":"Y"}
,
{"id":"12965","name":"Spirit of Manila Airlines","alias":"","iata":"SM","icao":"MNP","callsign":"MANILA SKY","country":"Philippines","active":"Y"}
,
{"id":"12975","name":"Chongqing Airlines","alias":"","iata":"OQ","icao":"CQN","callsign":"CHONG QING","country":"China","active":"Y"}
,
{"id":"12976","name":"Grand China Air","alias":"","iata":"","icao":"GDC","callsign":"GRAND CHINA","country":"China","active":"Y"}
,
{"id":"12978","name":"West Air China","alias":"","iata":"PN","icao":"CHB","callsign":"WEST CHINA","country":"China","active":"Y"}
,
{"id":"12997","name":"QatXpress","alias":"qatXpress","iata":"C3","icao":"QAX","callsign":"","country":"Qatar","active":"Y"}
,
{"id":"13076","name":"OneChina","alias":"OneChina","iata":"1C","icao":"1CH","callsign":"","country":"China","active":"Y"}
,
{"id":"13088","name":"NordStar Airlines","alias":"","iata":"Y7","icao":"\\N","callsign":"","country":"Russia","active":"Y"}
,
{"id":"13089","name":"Joy Air","alias":"","iata":"JR","icao":"JOY","callsign":"JOY AIR","country":"China","active":"Y"}
,
{"id":"13105","name":"Air India Regional","alias":"","iata":"CD","icao":"\\N","callsign":"ALLIED","country":"India","active":"Y"}
,
{"id":"13106","name":"MDLR Airlines","alias":"","iata":"9H","icao":"\\N","callsign":"MDLR","country":"India","active":"Y"}
,
{"id":"13107","name":"Jagson Airlines","alias":"","iata":"","icao":"JGN","callsign":"JAGSON","country":"India","active":"Y"}
,
{"id":"13108","name":"Maldivian","alias":"","iata":"Q2","icao":"\\N","callsign":"ISLAND AVIATION","country":"Maldives","active":"Y"}
,
{"id":"13130","name":"Xpressair","alias":"","iata":"XN","icao":"\\N","callsign":"","country":"Indonesia","active":"Y"}
,
{"id":"13178","name":"Strategic Airlines","alias":"","iata":"VC","icao":"\\N","callsign":"","country":"Australia","active":"Y"}
,
{"id":"13181","name":"Fars Air Qeshm","alias":"","iata":"","icao":"QFZ","callsign":"FARS AIR","country":"Iran","active":"Y"}
,
{"id":"13187","name":"Eastok Avia","alias":"","iata":"","icao":"EAA","callsign":"","country":"Kyrgyzstan","active":"Y"}
,
{"id":"13188","name":"Jupiter Airlines","alias":"","iata":"","icao":"JPU","callsign":"JUPITERAIR","country":"United Arab Emirates","active":"Y"}
,
{"id":"13189","name":"Vision Air International","alias":"","iata":"","icao":"VIS","callsign":"","country":"Pakistan","active":"Y"}
,
{"id":"13190","name":"Al-Naser Airlines","alias":"","iata":"NA","icao":"\\N","callsign":"","country":"Iraq","active":"Y"}
,
{"id":"13200","name":"Fuji Dream Airlines","alias":"","iata":"JH","icao":"\\N","callsign":"FUJI DREAM","country":"Japan","active":"Y"}
,
{"id":"13202","name":"Korea Express Air","alias":"","iata":"","icao":"KEA","callsign":"","country":"South Korea","active":"Y"}
,
{"id":"13209","name":"Eznis Airways","alias":"","iata":"","icao":"EZA","callsign":"EZNIS","country":"Mongolia","active":"Y"}
,
{"id":"13211","name":"Pacific Flier","alias":"","iata":"","icao":"PFL","callsign":"KOROR","country":"Palau","active":"Y"}
,
{"id":"13217","name":"Syrian Pearl Airlines","alias":"","iata":"","icao":"PSB","callsign":"","country":"Syria","active":"Y"}
,
{"id":"13218","name":"SGA Airlines","alias":"","iata":"5E","icao":"\\N","callsign":"SIAM","country":"Thailand","active":"Y"}
,
{"id":"13242","name":"Air2there","alias":"","iata":"F8","icao":"\\N","callsign":"","country":"New Zealand","active":"Y"}
,
{"id":"13254","name":"Avianova (Russia)","alias":"","iata":"AO","icao":"\\N","callsign":"Nova","country":"Russia","active":"Y"}
,
{"id":"13303","name":"Parmiss Airlines (IPV)","alias":"","iata":"PA","icao":"IPV","callsign":"IPV","country":"Iran","active":"Y"}
,
{"id":"13304","name":"EuropeSky","alias":"","iata":"ES","icao":"EUV","callsign":"EuropeSky","country":"Germany","active":"Y"}
,
{"id":"13306","name":"BRAZIL AIR","alias":"BRAZIL AIR","iata":"GB","icao":"BZE","callsign":"BRAZIL AIR","country":"Brazil","active":"Y"}
,
{"id":"13335","name":"Homer Air","alias":"Homer Sky","iata":"MR","icao":"OME","callsign":"","country":"Germany","active":"Y"}
,
{"id":"13633","name":"PanAm World Airways","alias":"","iata":"WQ","icao":"PQW","callsign":"","country":"United States","active":"Y"}
,
{"id":"13690","name":"Virginwings","alias":"","iata":"YY","icao":"VWA","callsign":"","country":"Germany","active":"Y"}
,
{"id":"13704","name":"KSY","alias":"Kreta Sky","iata":"KY","icao":"KSY","callsign":"KSY","country":"Greece","active":"Y"}
,
{"id":"13732","name":"Buquebus Líneas Aéreas","alias":"","iata":"BQ","icao":"BQB","callsign":"","country":"Uruguay","active":"Y"}
,
{"id":"13734","name":"SOCHI AIR","alias":"SOCHI","iata":"CQ","icao":"KOL","callsign":"SLOW FROG","country":"Russia","active":"Y"}
,
{"id":"13757","name":"Wizz Air Ukraine","alias":"","iata":"WU","icao":"WAU","callsign":"WIZZAIR UKRAINE","country":"Ukraine","active":"Y"}
,
{"id":"13781","name":"88","alias":"","iata":"47","icao":"VVN","callsign":"","country":"Cyprus","active":"Y"}
,
{"id":"13815","name":"LCM AIRLINES","alias":"","iata":"LQ","icao":"LMM","callsign":"","country":"Russia","active":"Y"}
,
{"id":"13899","name":"Cambodia Angkor Air (K6)","alias":"","iata":"K6","icao":"\\N","callsign":"","country":"Cambodia","active":"Y"}
,
{"id":"13936","name":"Royal European Airlines","alias":"","iata":"69","icao":"\\N","callsign":"","country":"United Kingdom","active":"Y"}
,
{"id":"13983","name":"Azul","alias":"Azul Linhas Aéreas Brasileiras","iata":"AD","icao":"AZU","callsign":"","country":"Brazil","active":"Y"}
,
{"id":"14061","name":"LSM Airlines","alias":"slowbird","iata":"PQ","icao":"LOO","callsign":"slowbird","country":"Russia","active":"Y"}
,
{"id":"14069","name":"Zapolyarie Airlines","alias":"Zapolyarye Airlines","iata":"","icao":"PZY","callsign":"","country":"Russia","active":"Y"}
,
{"id":"14073","name":"Finlandian","alias":"","iata":"","icao":"FN1","callsign":"","country":"Finland","active":"Y"}
,
{"id":"14094","name":"LionXpress","alias":"lionXpress","iata":"C4","icao":"LIX","callsign":"LIX","country":"Cameroon","active":"Y"}
,
{"id":"14118","name":"Genesis","alias":"","iata":"GK","icao":"\\N","callsign":"","country":"Pakistan","active":"Y"}
,
{"id":"14388","name":"Congo Express","alias":"","iata":"XZ","icao":"\\N","callsign":"EXPRESSWAYS","country":"Congo (Kinshasa)","active":"Y"}
,
{"id":"14485","name":"Fly Dubai","alias":"","iata":"FZ","icao":"FDB","callsign":"","country":"United Arab Emirates","active":"Y"}
,
{"id":"14620","name":"Domenican Airlines","alias":"Domenican","iata":"D1","icao":"MDO","callsign":"Domenican","country":"Dominican Republic","active":"Y"}
,
{"id":"14679","name":"ConneX European Airline","alias":"","iata":"","icao":"2CO","callsign":"ConneX","country":"Austria","active":"Y"}
,
{"id":"14849","name":"Aereonautica militare","alias":"","iata":"JY","icao":"AXZ","callsign":"","country":"Italy","active":"Y"}
,
{"id":"14858","name":"Kal Star Aviation","alias":"","iata":"","icao":"KLS","callsign":"","country":"Indonesia","active":"Y"}
,
{"id":"14881","name":"LSM AIRLINES ","alias":"Russian. Yours Air Lines ","iata":"YZ","icao":"YZZ","callsign":"Moscow frog ","country":"Russia","active":"Y"}
,
{"id":"15814","name":"UTair-Express","alias":"","iata":"UR","icao":"\\N","callsign":"","country":"Russia","active":"Y"}
,
{"id":"15837","name":"Huaxia","alias":"HUAXIA","iata":"G5","icao":"\\N","callsign":"","country":"China","active":"Y"}
,
{"id":"15867","name":"Zabaykalskii Airlines","alias":"Baikal Airlines","iata":"ZP","icao":"ZZZ","callsign":"Lakeair","country":"Russia","active":"Y"}
,
{"id":"15887","name":"CBM America","alias":"","iata":"","icao":"XBM","callsign":"AIRMAX","country":"United States","active":"Y"}
,
{"id":"15893","name":"Marysya Airlines","alias":"MARYSYA AIRLINES","iata":"M4","icao":"1QA","callsign":"MARSHAK AIR","country":"Russia","active":"Y"}
,
{"id":"15897","name":"N1","alias":"","iata":"N1","icao":"\\N","callsign":"","country":"Peru","active":"Y"}
,
{"id":"15930","name":"Airlink (SAA)","alias":"","iata":"4Z","icao":"\\N","callsign":"","country":"South Africa","active":"Y"}
,
{"id":"15939","name":"Westfalia Express VA","alias":"","iata":"","icao":"WFX","callsign":"","country":"Germany","active":"Y"}
,
{"id":"15953","name":"JobAir","alias":"","iata":"3B","icao":"\\N","callsign":"","country":"Czech Republic","active":"Y"}
,
{"id":"15975","name":"Black Stallion Airways","alias":"","iata":"BZ","icao":"BSA","callsign":"Stallion","country":"United States","active":"Y"}
,
{"id":"15984","name":"German International Air Lines","alias":"Germanair","iata":"GM","icao":"GER","callsign":"","country":"Germany","active":"Y"}
,
{"id":"15985","name":"TrasBrasil","alias":"","iata":"TB","icao":"TBZ","callsign":"","country":"Brazil","active":"Y"}
,
{"id":"15989","name":"TransBrasil Airlines","alias":"","iata":"TH","icao":"THS","callsign":"","country":"Brazil","active":"Y"}
,
{"id":"15999","name":"China SSS","alias":"Chunqiu Airlines","iata":"9C","icao":"\\N","callsign":"","country":"China","active":"Y"}
,
{"id":"16084","name":"AIR INDOCHINE","alias":"","iata":"","icao":"IIA","callsign":"","country":"Vietnam","active":"Y"}
,
{"id":"16100","name":"Happy Air","alias":"","iata":"","icao":"HPY","callsign":"","country":"Thailand","active":"Y"}
,
{"id":"16101","name":"Solar Air","alias":"","iata":"","icao":"SRB","callsign":"Solar Air","country":"Thailand","active":"Y"}
,
{"id":"16103","name":"Air Mekong","alias":"","iata":"P8","icao":"MKG","callsign":"Air Mekong","country":"Vietnam","active":"Y"}
,
{"id":"16110","name":"Harbour Air (Priv)","alias":"","iata":"H3","icao":"\\N","callsign":"","country":"Canada","active":"Y"}
,
{"id":"16116","name":"Air Hamburg (AHO)","alias":"","iata":"HH","icao":"AHO","callsign":"Air Hamburg","country":"Germany","active":"Y"}
,
{"id":"16120","name":"ZABAIKAL AIRLINES","alias":"ZABAIKAL ","iata":"Z6","icao":"ZTT","callsign":"BAIKAL ","country":"Russia","active":"Y"}
,
{"id":"16127","name":"TransHolding","alias":"Trans","iata":"TI","icao":"THI","callsign":"","country":"Brazil","active":"Y"}
,
{"id":"16130","name":"SUR Lineas Aereas","alias":"","iata":"","icao":"SZZ","callsign":"","country":"Argentina","active":"Y"}
,
{"id":"16131","name":"Aerolineas Africanas","alias":"","iata":"","icao":"AA1","callsign":"","country":"Guinea","active":"Y"}
,
{"id":"16133","name":"Yeti Airways","alias":"","iata":"YT","icao":"\\N","callsign":"","country":"Nepal","active":"Y"}
,
{"id":"16135","name":"Yellowstone Club Private Shuttle","alias":"","iata":"Y1","icao":"\\N","callsign":"YCS","country":"United States","active":"Y"}
,
{"id":"16136","name":"Caucasus Airlines","alias":"","iata":"NS","icao":"\\N","callsign":"","country":"Georgia","active":"Y"}
,
{"id":"16139","name":"Serbian Airlines","alias":"","iata":"S1","icao":"SA1","callsign":"","country":"Serbia","active":"Y"}
,
{"id":"16149","name":"Windward Islands Airways","alias":"","iata":"WM","icao":"\\N","callsign":"Winair","country":"Netherlands Antilles","active":"Y"}
,
{"id":"16150","name":"TransHolding System","alias":"","iata":"YO","icao":"TYS","callsign":"","country":"Brazil","active":"Y"}
,
{"id":"16151","name":"CCML Airlines","alias":"","iata":"CB","icao":"CCC","callsign":"","country":"Colombia","active":"Y"}
,
{"id":"16198","name":"Small Planet Airlines","alias":"","iata":"","icao":"ELC","callsign":"","country":"Lithuania","active":"Y"}
,
{"id":"16234","name":"Fly Brasil","alias":"Fly Brasil","iata":"F1","icao":"FBL","callsign":"FBL","country":"Brazil","active":"Y"}
,
{"id":"16261","name":"CB Airways UK ( Interliging Flights )","alias":"","iata":"1F","icao":"CIF","callsign":"","country":"United Kingdom","active":"Y"}
,
{"id":"16262","name":"Fly Colombia ( Interliging Flights )","alias":"","iata":"3F","icao":"3FF","callsign":"","country":"Colombia","active":"Y"}
,
{"id":"16264","name":"Trans Pas Air","alias":"","iata":"T6","icao":"TP6","callsign":"","country":"United States","active":"Y"}
,
{"id":"16273","name":"KMV","alias":"","iata":"МИ","icao":"\\N","callsign":"Air Minvody","country":"Russia","active":"Y"}
,
{"id":"16323","name":"Himalayan Airlines","alias":"Himalaya","iata":"HC","icao":"HYM","callsign":"Himalayan","country":"Nepal","active":"Y"}
,
{"id":"16327","name":"Indya Airline Group","alias":"Indya1","iata":"G1","icao":"IG1","callsign":"Indya1","country":"India","active":"Y"}
,
{"id":"16329","name":"Sunwing","alias":"","iata":"WG","icao":"\\N","callsign":"sunwing","country":"Canada","active":"Y"}
,
{"id":"16358","name":"Turkish Wings Domestic","alias":"","iata":"","icao":"TWD","callsign":"TWD","country":"Turkey","active":"Y"}
,
{"id":"16359","name":"Japan Regio","alias":"","iata":"ZX","icao":"ZXY","callsign":"","country":"Japan","active":"Y"}
,
{"id":"16362","name":"OCEAN AIR CARGO","alias":"","iata":"","icao":"IXO","callsign":"","country":"India","active":"Y"}
,
{"id":"16363","name":"Norte Lineas Aereas","alias":"NORTE","iata":"N0","icao":"\\N","callsign":"","country":"Argentina","active":"Y"}
,
{"id":"16364","name":"Austral Brasil","alias":"Austral Brasil lineas aereas","iata":"W7","icao":"\\N","callsign":"","country":"Brazil","active":"Y"}
,
{"id":"16373","name":"PEGASUS AIRLINES-","alias":"","iata":"H9","icao":"\\N","callsign":"","country":"Turkey","active":"Y"}
,
{"id":"16409","name":"Nihon.jet connect","alias":"","iata":"","icao":"NX1","callsign":"","country":"Kyrgyzstan","active":"Y"}
,
{"id":"16415","name":"Camair-co","alias":"","iata":"QC","icao":"\\N","callsign":"","country":"Cameroon","active":"Y"}
,
{"id":"16459","name":"Sky Regional","alias":"Air Canada Express","iata":"RS","icao":"\\N","callsign":"Sky Regional","country":"Canada","active":"Y"}
,
{"id":"16507","name":"LSM International ","alias":"Moskva-air","iata":"II","icao":"UWW","callsign":"moose","country":"Russia","active":"Y"}
,
{"id":"16508","name":"Baikotovitchestrian Airlines ","alias":"","iata":"BU","icao":"BUU","callsign":"","country":"American Samoa","active":"Y"}
,
{"id":"16511","name":"Luchsh Airlines ","alias":"Air luch","iata":"L4","icao":"LJJ","callsign":"russian sky","country":"Russia","active":"Y"}
,
{"id":"16556","name":"ENTERair","alias":"","iata":"","icao":"QQQ","callsign":"","country":"Poland","active":"Y"}
,
{"id":"16585","name":"Air Cargo Germany","alias":"","iata":"6U","icao":"\\N","callsign":"Loadmaster","country":"Germany","active":"Y"}
,
{"id":"16615","name":"Mongolian International Air Lines ","alias":"Mongol Air ","iata":"7M","icao":"ZTF","callsign":"Mongol_AIr ","country":"Mongolia","active":"Y"}
,
{"id":"16624","name":"Tway Airlines","alias":"","iata":"TW","icao":"TWB","callsign":"TWAY AIR","country":"South Korea","active":"Y"}
,
{"id":"16625","name":"Papillon Grand Canyon Helicopters","alias":"","iata":"HI","icao":"\\N","callsign":"","country":"United States","active":"Y"}
,
{"id":"16628","name":"Jusur airways","alias":"","iata":"JX","icao":"JSR","callsign":"","country":"Egypt","active":"Y"}
,
{"id":"16645","name":"NEXT Brasil","alias":"NEXT","iata":"XB","icao":"NXB","callsign":"XB","country":"Brazil","active":"Y"}
,
{"id":"16660","name":"AeroWorld ","alias":"Sovet Air ","iata":"W4","icao":"WER","callsign":"sovet","country":"Russia","active":"Y"}
,
{"id":"16695","name":"GNB Linhas Aereas","alias":"","iata":"GN","icao":"\\N","callsign":"","country":"Brazil","active":"Y"}
,
{"id":"16702","name":"Usa Sky Cargo","alias":"USky","iata":"E1","icao":"ES2","callsign":"USKY","country":"United States","active":"Y"}
,
{"id":"16707","name":"Hankook Airline","alias":"","iata":"HN","icao":"HNX","callsign":"HNX","country":"South Korea","active":"Y"}
,
{"id":"16717","name":"REDjet","alias":"","iata":"Z7","icao":"\\N","callsign":"","country":"Barbados","active":"Y"}
,
{"id":"16720","name":"Red Jet Andes","alias":"","iata":"PT","icao":"\\N","callsign":"","country":"Peru","active":"Y"}
,
{"id":"16721","name":"Red Jet Canada","alias":"","iata":"QY","icao":"\\N","callsign":"","country":"Canada","active":"Y"}
,
{"id":"16723","name":"Sprintair","alias":"","iata":"0G","icao":"SAR","callsign":"","country":"Poland","active":"Y"}
,
{"id":"16724","name":"Red Jet Mexico","alias":"","iata":"4X","icao":"\\N","callsign":"","country":"Mexico","active":"Y"}
,
{"id":"16725","name":"Marusya Airways","alias":"Marusya Air","iata":"Y8","icao":"MRS","callsign":"snowball","country":"Russia","active":"Y"}
,
{"id":"16726","name":"Era Alaska","alias":"","iata":"7H","icao":"ERR","callsign":"ERAH","country":"United States","active":"Y"}
,
{"id":"16728","name":"AirRussia","alias":"RussianConector","iata":"R8","icao":"RRJ","callsign":"russiancloud","country":"Russia","active":"Y"}
,
{"id":"16735","name":"Hankook Air US","alias":"","iata":"H1","icao":"HA1","callsign":"","country":"United States","active":"Y"}
,
{"id":"16794","name":"Carpatair Flight Training","alias":"","iata":"","icao":"SMW","callsign":"Smartwings","country":"Romania","active":"Y"}
,
{"id":"16796","name":"I-Fly","alias":"","iata":"H5","icao":"RSY","callsign":"RUSSIAN SKY","country":"Russia","active":"Y"}
,
{"id":"16826","name":"Whitejets","alias":"","iata":"","icao":"WTJ","callsign":"WHITEJET","country":"Brazil","active":"Y"}
,
{"id":"16837","name":"VickJet","alias":"","iata":"KT","icao":"VKJ","callsign":"Vickjet","country":"France","active":"Y"}
,
{"id":"16844","name":"BVI Airways","alias":"","iata":"XV","icao":"\\N","callsign":"","country":"British Virgin Islands","active":"Y"}
,
{"id":"16858","name":"Hamburg Airways","alias":"","iata":"","icao":"HAY","callsign":"","country":"Germany","active":"Y"}
,
{"id":"16860","name":"Salsa d'Haiti","alias":"","iata":"SO","icao":"SLC","callsign":"SALSA","country":"Haiti","active":"Y"}
,
{"id":"16867","name":"Zambezi Airlines (ZMA)","alias":"","iata":"ZJ","icao":"\\N","callsign":"","country":"Zambia","active":"Y"}
,
{"id":"16868","name":"Kan Air","alias":"","iata":"","icao":"KND","callsign":"Kan Air","country":"Thailand","active":"Y"}
,
{"id":"16881","name":"Air Cudlua","alias":"Air Cudlua","iata":"","icao":"CUD","callsign":"Cudlua","country":"United Kingdom","active":"Y"}
,
{"id":"16882","name":"Polet Airlines (Priv)","alias":"","iata":"YQ","icao":"\\N","callsign":"","country":"Russia","active":"Y"}
,
{"id":"16895","name":"Air Explore","alias":"","iata":"","icao":"AXE","callsign":"","country":"Slovakia","active":"Y"}
,
{"id":"16901","name":"12 North","alias":"","iata":"12","icao":"N12","callsign":"12N","country":"India","active":"Y"}
,
{"id":"16919","name":"Holidays Czech Airlines","alias":"","iata":"","icao":"HCC","callsign":"","country":"Czech Republic","active":"Y"}
,
{"id":"16921","name":"Comtel Air","alias":"","iata":"","icao":"COE","callsign":"","country":"Austria","active":"Y"}
,
{"id":"16926","name":"Mint Airways","alias":"","iata":"","icao":"MIC","callsign":"","country":"Spain","active":"Y"}
,
{"id":"16932","name":"Orbit Airlines","alias":"Orbit","iata":"","icao":"OBT","callsign":"Orbit","country":"United States","active":"Y"}
,
{"id":"16939","name":"Air Bucharest","alias":"","iata":"","icao":"BUR","callsign":"","country":"Romania","active":"Y"}
,
{"id":"16940","name":"AlbaStar","alias":"","iata":"","icao":"LAV","callsign":"","country":"Spain","active":"Y"}
,
{"id":"16942","name":"Mauritania Airlines International","alias":"","iata":"L6","icao":"MAI","callsign":"","country":"Mauritania","active":"Y"}
,
{"id":"16956","name":"MAT Airways","alias":"","iata":"6F","icao":"MKD","callsign":"","country":"Macedonia","active":"Y"}
,
{"id":"16960","name":"Asian Wings Airways","alias":"","iata":"AW","icao":"AWM","callsign":"Asian Star","country":"Burma","active":"Y"}
,
{"id":"16963","name":"Air Arabia Egypt","alias":"","iata":"E5","icao":"RBG","callsign":"","country":"Egypt","active":"Y"}
,
{"id":"16967","name":"Eagles Airlines","alias":"","iata":"","icao":"EGS","callsign":"EAGLES","country":"Italy","active":"Y"}
,
{"id":"16973","name":"YES Airways","alias":"","iata":"","icao":"YEP","callsign":"","country":"Poland","active":"Y"}
,
{"id":"16975","name":"Alitalia Cityliner","alias":"","iata":"CT","icao":"\\N","callsign":"","country":"Italy","active":"Y"}
,
{"id":"16983","name":"Direct Aero Services","alias":"","iata":"","icao":"DSV","callsign":"","country":"Romania","active":"Y"}
,
{"id":"16985","name":"Medallion Air","alias":"","iata":"","icao":"MDP","callsign":"MEDALS","country":"Romania","active":"Y"}
,
{"id":"17022","name":"Orchid Airlines","alias":"","iata":"OI","icao":"ORC","callsign":"","country":"Australia","active":"Y"}
,
{"id":"17023","name":"Asia Wings","alias":"","iata":"Y5","icao":"AWA","callsign":"","country":"Kazakhstan","active":"Y"}
,
{"id":"17026","name":"Georgian International Airlines","alias":"","iata":"","icao":"GNN","callsign":"GEO-LINE","country":"Georgia","active":"Y"}
,
{"id":"17027","name":"Air Batumi","alias":"","iata":"","icao":"BTM","callsign":"","country":"Georgia","active":"Y"}
,
{"id":"17082","name":"Skywest Australia","alias":"","iata":"XR","icao":"\\N","callsign":"","country":"Australia","active":"Y"}
,
{"id":"17083","name":"Nile Air","alias":"","iata":"NP","icao":"NIA","callsign":"NILEBIRD","country":"Egypt","active":"Y"}
,
{"id":"17086","name":"Feeder Airlines","alias":"","iata":"","icao":"FDD","callsign":"","country":"Sudan","active":"Y"}
,
{"id":"17094","name":"Senegal Airlines","alias":"","iata":"DN","icao":"SGG","callsign":"","country":"Senegal","active":"Y"}
,
{"id":"17095","name":"Fly 6ix","alias":"","iata":"6I","icao":"\\N","callsign":"","country":"Sierra Leone","active":"Y"}
,
{"id":"17099","name":"Starbow Airlines","alias":"","iata":"S9","icao":"\\N","callsign":"","country":"Ghana","active":"Y"}
,
{"id":"17115","name":"Copenhagen Express","alias":"","iata":"0X","icao":"CX0","callsign":"Copex","country":"Denmark","active":"Y"}
,
{"id":"17408","name":"BusinessAir","alias":"","iata":"8B","icao":"BCC","callsign":"","country":"Thailand","active":"Y"}
,
{"id":"17519","name":"SENIC AIRLINES","alias":"","iata":"YR","icao":"\\N","callsign":"","country":"United States","active":"Y"}
,
{"id":"17563","name":"XOJET","alias":"","iata":"","icao":"XOJ","callsign":"","country":"United States","active":"Y"}
,
{"id":"17571","name":"Sky Wing Pacific","alias":"","iata":"C7","icao":"CR7","callsign":"","country":"South Korea","active":"Y"}
,
{"id":"17572","name":"Bateleur Air","alias":"","iata":"","icao":"BEU","callsign":"","country":"South Africa","active":"Y"}
,
{"id":"17574","name":"Air Indus","alias":"Indus Airlines Pak","iata":"PP","icao":"AI0","callsign":"AIPL","country":"Pakistan","active":"Y"}
,
{"id":"17628","name":"Orbit International Airlines","alias":"","iata":"","icao":"OAI","callsign":"OA","country":"United States","active":"Y"}
,
{"id":"17629","name":"Orbit Regional Airlines","alias":"","iata":"","icao":"OAR","callsign":"OA","country":"United States","active":"Y"}
,
{"id":"17630","name":"Orbit Atlantic Airways","alias":"","iata":"","icao":"OAN","callsign":"","country":"United States","active":"Y"}
,
{"id":"17658","name":"Volotea","alias":"","iata":"","icao":"VOO","callsign":"Volotea","country":"Spain","active":"Y"}
,
{"id":"17675","name":"Peach Aviation","alias":"","iata":"MM","icao":"\\N","callsign":"Air Peach","country":"Japan","active":"Y"}
,
{"id":"17694","name":"Helitt Líneas Aéreas","alias":"","iata":"","icao":"HTH","callsign":"","country":"Spain","active":"Y"}
,
{"id":"17695","name":"Russia State Transport","alias":"Federal State Budget Inst","iata":"","icao":"RSD","callsign":"STATE AERO","country":"Russia","active":"Y"}
,
{"id":"17726","name":"Malaysia Wings","alias":"","iata":"","icao":"MWI","callsign":"MWI","country":"Malaysia","active":"Y"}
,
{"id":"17750","name":"Aviabus","alias":"","iata":"U1","icao":"ABI","callsign":"","country":"Russia","active":"Y"}
,
{"id":"17780","name":"Michael Airlines","alias":"Javi","iata":"DF","icao":"MJG","callsign":"MJG","country":"Puerto Rico","active":"Y"}
,
{"id":"17786","name":"Korongo Airlines","alias":"","iata":"ZC","icao":"KGO","callsign":"KORONGO","country":"Congo (Kinshasa)","active":"Y"}
,
{"id":"17794","name":"Indonesia Sky","alias":"","iata":"I5","icao":"IDS","callsign":"","country":"Indonesia","active":"Y"}
,
{"id":"17841","name":"Aws express","alias":"","iata":"B0","icao":"666","callsign":"aws","country":"United States","active":"Y"}
,
{"id":"17859","name":"Southjet","alias":"","iata":"76","icao":"SJS","callsign":"","country":"United States","active":"Y"}
,
{"id":"17860","name":"Southjet connect","alias":"","iata":"77","icao":"ZCS","callsign":"","country":"United States","active":"Y"}
,
{"id":"17862","name":"Southjet cargo","alias":"","iata":"78","icao":"XAN","callsign":"","country":"United States","active":"Y"}
,
{"id":"17881","name":"Iberia Express","alias":"","iata":"I2","icao":"IBS","callsign":"","country":"Spain","active":"Y"}
,
{"id":"17885","name":"Interjet (ABC Aerolineas)","alias":"","iata":"4O","icao":"\\N","callsign":"INTERJET","country":"Mexico","active":"Y"}
,
{"id":"17889","name":"AirOnix","alias":"","iata":"OG","icao":"\\N","callsign":"","country":"Ukraine","active":"Y"}
,
{"id":"17890","name":"Nordic Global Airlines","alias":"","iata":"NJ","icao":"NGB","callsign":"Nordic Global","country":"Finland","active":"Y"}
,
{"id":"17891","name":"Scoot","alias":"","iata":"TZ","icao":"SCO","callsign":"","country":"Singapore","active":"Y"}
,
{"id":"17909","name":"Hi Fly (5K)","alias":"","iata":"5K","icao":"\\N","callsign":"","country":"Portugal","active":"Y"}
,
{"id":"17911","name":"China Northwest Airlines (WH)","alias":"","iata":"WH","icao":"\\N","callsign":"","country":"China","active":"Y"}
,
{"id":"17935","name":"Zenith International Airline","alias":"Zenith","iata":"ZN","icao":"ZNA","callsign":"ZENITH","country":"Thailand","active":"Y"}
,
{"id":"17936","name":"Orbit Airlines Azerbaijan","alias":"Orbit Azerbaijan","iata":"O1","icao":"OAB","callsign":"Orbitaz","country":"Azerbaijan","active":"Y"}
,
{"id":"17989","name":"Air Alps Aviation (A6)","alias":"","iata":"A6","icao":"\\N","callsign":"ALPAV","country":"Austria","active":"Y"}
,
{"id":"18076","name":"Flying kangaroo Airline","alias":"Skippy","iata":"","icao":"FKA","callsign":"Skippy","country":"Australia","active":"Y"}
,
{"id":"18083","name":"RusJet","alias":"","iata":"","icao":"RSJ","callsign":"","country":"Russia","active":"Y"}
,
{"id":"18118","name":"VietJet Air","alias":"VietJet","iata":"","icao":"VJC","callsign":"VIETJETAIR","country":"Vietnam","active":"Y"}
,
{"id":"18169","name":"Patriot Airways","alias":"","iata":"P4","icao":"\\N","callsign":"","country":"United States","active":"Y"}
,
{"id":"18178","name":"Vision Airlines (V2)","alias":"","iata":"V2","icao":"RBY","callsign":"RUBY","country":"United States","active":"Y"}
,
{"id":"18232","name":"BQB Lineas Aereas","alias":"Buquebus","iata":"5Q","icao":"\\N","callsign":"","country":"Uruguay","active":"Y"}
,
{"id":"18237","name":"AirAsia Japan","alias":"","iata":"","icao":"WAJ","callsign":"WING ASIA","country":"Japan","active":"Y"}
,
{"id":"18239","name":"Yellowtail","alias":"","iata":"YE","icao":"YEL","callsign":"","country":"United States","active":"Y"}
,
{"id":"18241","name":"Royal Airways","alias":"Royal Inc.","iata":"KG","icao":"RAW","callsign":"RAW","country":"United States","active":"Y"}
,
{"id":"18252","name":"FlyHigh Airlines Ireland (FH)","alias":"","iata":"FH","icao":"FHI","callsign":"FLYHIRELAND","country":"Ireland","active":"Y"}
,
{"id":"18257","name":"Executive AirShare","alias":"","iata":"","icao":"XSR","callsign":"","country":"United States","active":"Y"}
,
{"id":"18475","name":"Hebei Airlines","alias":"","iata":"","icao":"HBH","callsign":"Hebei Air","country":"China","active":"Y"}
,
{"id":"18476","name":"Air KBZ","alias":"","iata":"","icao":"KBZ","callsign":"Air KBZ","country":"Burma","active":"Y"}
,
{"id":"18477","name":"Aero VIP (2D)","alias":"","iata":"2D","icao":"\\N","callsign":"","country":"Portugal","active":"Y"}
,
{"id":"18497","name":"Yangon Airways Ltd.","alias":"","iata":"YH","icao":"\\N","callsign":"","country":"Burma","active":"Y"}
,
{"id":"18529","name":"T.J. Air","alias":"","iata":"TJ","icao":"TJA","callsign":"T.J. Air","country":"United States","active":"Y"}
,
{"id":"18543","name":"SkyWork Airlines ","alias":"","iata":"SX","icao":"\\N","callsign":"SKYFOX","country":"Switzerland","active":"Y"}
,
{"id":"18553","name":"Maastricht Airlines","alias":"","iata":"W2","icao":"\\N","callsign":"","country":"Netherlands","active":"Y"}
,
{"id":"18617","name":"Euro Jet","alias":"","iata":"24","icao":"\\N","callsign":"","country":"Germany","active":"Y"}
,
{"id":"18621","name":"Ukraine Atlantic","alias":"","iata":"","icao":"UAT","callsign":"","country":"Ukraine","active":"Y"}
,
{"id":"18668","name":"Nesma Airlines","alias":"","iata":"","icao":"NMA","callsign":"Nesma Airlines","country":"Egypt","active":"Y"}
,
{"id":"18672","name":"East Horizon","alias":"","iata":"","icao":"EHN","callsign":"EAST HORIZON","country":"Afghanistan","active":"Y"}
,
{"id":"18676","name":"Air Majoro","alias":"","iata":"","icao":"MJP","callsign":"Air Majoro","country":"Peru","active":"Y"}
,
{"id":"18692","name":"Rotana Jet","alias":"","iata":"","icao":"RJD","callsign":"ROTANA","country":"United Arab Emirates","active":"Y"}
,
{"id":"18700","name":"SOCHI AIR CHATER","alias":"Sochi Air ","iata":"Q3","icao":"QER","callsign":"russian doll","country":"Russia","active":"Y"}
,
{"id":"18702","name":"Denim Air ","alias":"FlyNonstop","iata":"J7","icao":"\\N","callsign":"DNM","country":"Norway","active":"Y"}
,
{"id":"18732","name":"Malindo Air","alias":"","iata":"OD","icao":"MXD","callsign":"Malindo","country":"Malaysia","active":"Y"}
,
{"id":"18781","name":"Hermes Airlines","alias":"","iata":"","icao":"HRM","callsign":"HERMES","country":"Greece","active":"Y"}
,
{"id":"18825","name":"Flightlink Tanzania","alias":"Flightlink","iata":"Z9","icao":"\\N","callsign":"","country":"Tanzania","active":"Y"}
,
{"id":"18828","name":"IzAvia","alias":"","iata":"I8","icao":"\\N","callsign":"","country":"Russia","active":"Y"}
,
{"id":"18860","name":"Катэкавиа","alias":"","iata":"","icao":"КТК","callsign":"","country":"Russia","active":"Y"}
,
{"id":"18863","name":"Псковавиа","alias":"Псков Авиа","iata":"","icao":"PKV","callsign":"","country":"Russia","active":"Y"}
,
{"id":"18930","name":"Maryland Air","alias":"Maryland","iata":"M1","icao":"M1F","callsign":"Maryland Flight","country":"United States","active":"Y"}
,
{"id":"18944","name":"Insel Air (7I/INC) (Priv)","alias":"","iata":"7I","icao":"\\N","callsign":"","country":"Netherlands Antilles","active":"Y"}
,
{"id":"18946","name":"VivaColombia","alias":"","iata":"5Z","icao":"VVC","callsign":"","country":"Colombia","active":"Y"}
,
{"id":"18952","name":"Flybe Finland Oy","alias":"","iata":"","icao":"FCM","callsign":"FINNCOMM","country":"Finland","active":"Y"}
,
{"id":"18959","name":"Bingo Airways","alias":"Bingo","iata":"","icao":"BGY","callsign":"","country":"Poland","active":"Y"}
,
{"id":"19007","name":"Bluebird Airways (BZ)","alias":"","iata":"","icao":"BBG","callsign":"","country":"Greece","active":"Y"}
,
{"id":"19016","name":"Apache Air","alias":"Apache","iata":"ZM","icao":"IWA","callsign":"APACHE","country":"United States","active":"Y"}
,
{"id":"19026","name":"MHS Aviation GmbH","alias":"","iata":"M2","icao":"\\N","callsign":"","country":"Germany","active":"Y"}
,
{"id":"19030","name":"Jettor Airlines","alias":"Jettor","iata":"NR","icao":"JTO","callsign":"JETHAPPY","country":"Hong Kong","active":"Y"}
,
{"id":"19215","name":"Flyme (VP)","alias":"","iata":"","icao":"VQI","callsign":"","country":"Maldives","active":"Y"}
,
{"id":"19225","name":"Thai Lion Air","alias":"","iata":"SL","icao":"\\N","callsign":"","country":"Thailand","active":"Y"}
,
{"id":"19244","name":"Golden Myanmar Airlines","alias":"","iata":"","icao":"GMR","callsign":"Golden Myanmar","country":"Burma","active":"Y"}
,
{"id":"19276","name":"Canaryfly","alias":"","iata":"","icao":"CNF","callsign":"","country":"Spain","active":"Y"}
,
{"id":"19280","name":"Sunrise Airways","alias":"","iata":"","icao":"KSZ","callsign":"","country":"Haiti","active":"Y"}
,
{"id":"19287","name":"National Air Cargo","alias":"","iata":"N8","icao":"NCR","callsign":"","country":"United States","active":"Y"}
,
{"id":"19290","name":"Eastern Atlantic Virtual Airlines","alias":"","iata":"13","icao":"EAV","callsign":"EAVA","country":"United States","active":"Y"}
,
{"id":"19305","name":"Citilink Indonesia","alias":"","iata":"QG","icao":"\\N","callsign":"SUPERGREEN","country":"Indonesia","active":"Y"}
,
{"id":"19337","name":"Transair","alias":"","iata":"","icao":"TTZ","callsign":"","country":"Canada","active":"Y"}
,
{"id":"19350","name":"Comfort Express Virtual Charters Albany","alias":"","iata":"","icao":"EVC","callsign":"Comfort Express","country":"United States","active":"Y"}
,
{"id":"19351","name":"Comfort Express Virtual Charters","alias":"","iata":"","icao":"CEO","callsign":"","country":"United States","active":"Y"}
,
{"id":"19359","name":"FLYJET","alias":"","iata":"","icao":"FYJ","callsign":"Fast Jet","country":"Poland","active":"Y"}
,
{"id":"19361","name":"Snowbird Airlines","alias":"","iata":"S8","icao":"SBD","callsign":"","country":"Finland","active":"Y"}
,
{"id":"19363","name":"Russkie Krylya","alias":"","iata":"","icao":"KRY","callsign":"","country":"Russia","active":"Y"}
,
{"id":"19367","name":"Kharkiv Airlines","alias":"","iata":"KH","icao":"KHK","callsign":"","country":"Ukraine","active":"Y"}
,
{"id":"19433","name":"XAIR USA","alias":"","iata":"XA","icao":"XAU","callsign":"XAIR","country":"United States","active":"Y"}
,
{"id":"19451","name":"Air Costa","alias":"","iata":"LB","icao":"\\N","callsign":"","country":"India","active":"Y"}
,
{"id":"19459","name":"Simrik Airlines","alias":"","iata":"","icao":"RMK","callsign":"","country":"Nepal","active":"Y"}
,
{"id":"19473","name":"XPTO","alias":"XPTO  ","iata":"XP","icao":"XPT","callsign":"XPTO","country":"Portugal","active":"Y"}
,
{"id":"19474","name":"Royal Flight","alias":"","iata":"","icao":"DME","callsign":"","country":"Russia","active":"Y"}
,
{"id":"19525","name":"BBN-Airways","alias":"BlackBurn","iata":"","icao":"EGH","callsign":"BBN","country":"United Kingdom","active":"Y"}
,
{"id":"19531","name":"Tomsk-Avia","alias":"","iata":"","icao":"TKS","callsign":"","country":"Russia","active":"Y"}
,
{"id":"19541","name":"Malawian Airlines","alias":"","iata":"3W","icao":"\\N","callsign":"","country":"Malawi","active":"Y"}
,
{"id":"19548","name":"Yeti Airlines ","alias":"","iata":"","icao":"NYT","callsign":"","country":"Nepal","active":"Y"}
,
{"id":"19599","name":"Skyline Ulasim Ticaret A.S.","alias":"Skyline Ulasim Ticaret A.S.","iata":"","icao":"KCU","callsign":"Kocoglu","country":"Turkey","active":"Y"}
,
{"id":"19619","name":"Envoy Air","alias":"","iata":"","icao":"ENY","callsign":"Envoy","country":"United States","active":"Y"}
,
{"id":"19651","name":"CARICOM AIRWAYS (BARBADOS) INC.","alias":"CARICOM AIRWAYS","iata":"","icao":"CCB","callsign":"","country":"Barbados","active":"Y"}
,
{"id":"19674","name":"Rainbow Air (RAI)","alias":"Rainbow Air (RAI)","iata":"RN","icao":"RAB","callsign":"Rainbow","country":"United States","active":"Y"}
,
{"id":"19675","name":"Rainbow Air Canada","alias":"Rainbow Air CAN","iata":"RY","icao":"RAY","callsign":"Rainbow CAN","country":"Canada","active":"Y"}
,
{"id":"19676","name":"Rainbow Air Polynesia","alias":"Rainbow Air POL","iata":"RX","icao":"RPO","callsign":"Rainbow Air","country":"United States","active":"Y"}
,
{"id":"19677","name":"Rainbow Air Euro","alias":"Rainbow Air EU","iata":"RU","icao":"RUE","callsign":"Rainbow Air","country":"United Kingdom","active":"Y"}
,
{"id":"19678","name":"Rainbow Air US","alias":"Rainbow Air US","iata":"RM","icao":"RNY","callsign":"Rainbow Air","country":"United States","active":"Y"}
,
{"id":"19745","name":"Transilvania","alias":"","iata":"","icao":"TNS","callsign":"","country":"Romania","active":"Y"}
,
{"id":"19751","name":"Dobrolet","alias":"Добролёт","iata":"QD","icao":"DOB","callsign":"DOBROLET","country":"Russia","active":"Y"}
,
{"id":"19774","name":"Spike Airlines","alias":"Aero Spike","iata":"S0","icao":"SAL","callsign":"Spike Air","country":"United States","active":"Y"}
,
{"id":"19776","name":"Grand Cru Airlines","alias":"","iata":"","icao":"GCA","callsign":"","country":"Lithuania","active":"Y"}
,
{"id":"19785","name":"Go2Sky","alias":"","iata":"","icao":"RLX","callsign":"RELAX","country":"Slovakia","active":"Y"}
,
{"id":"19803","name":"All Argentina","alias":"All Argentina","iata":"L1","icao":"AL1","callsign":"","country":"Argentina","active":"Y"}
,
{"id":"19804","name":"All America","alias":"All America","iata":"A2","icao":"AL2","callsign":"","country":"United States","active":"Y"}
,
{"id":"19805","name":"All Asia","alias":"All Asia","iata":"L9","icao":"AL3","callsign":"","country":"China","active":"Y"}
,
{"id":"19806","name":"All Africa","alias":"All Africa","iata":"9A","icao":"99F","callsign":"","country":"South Africa","active":"Y"}
,
{"id":"19807","name":"Regionalia México","alias":"Regionalia México","iata":"N4","icao":"J88","callsign":"","country":"Mexico","active":"Y"}
,
{"id":"19808","name":"All Europe","alias":"All Europe","iata":"N9","icao":"N99","callsign":"","country":"United Kingdom","active":"Y"}
,
{"id":"19809","name":"All Spain","alias":"All Spain","iata":"N7","icao":"N77","callsign":"","country":"Spain","active":"Y"}
,
{"id":"19810","name":"Regional Air Iceland","alias":"Regional Air Iceland","iata":"9N","icao":"N78","callsign":"","country":"Iceland","active":"Y"}
,
{"id":"19812","name":"Voestar","alias":"Voestar Brasil","iata":"8K","icao":"K88","callsign":"","country":"Brazil","active":"Y"}
,
{"id":"19813","name":"All Colombia","alias":"All Colombia","iata":"7O","icao":"7KK","callsign":"","country":"Colombia","active":"Y"}
,
{"id":"19814","name":"Regionalia Uruguay","alias":"Regionalia Uruguay","iata":"2X","icao":"2K2","callsign":"","country":"Uruguay","active":"Y"}
,
{"id":"19815","name":"Regionalia Venezuela","alias":"Regionalia Venezuela","iata":"9X","icao":"9XX","callsign":"","country":"Venezuela","active":"Y"}
,
{"id":"19827","name":"Regionalia Chile","alias":"Regionalia Chile","iata":"9J","icao":"CR1","callsign":"","country":"Chile","active":"Y"}
,
{"id":"19828","name":"Vuela Cuba","alias":"Vuela Cuba","iata":"6C","icao":"6CC","callsign":"","country":"Cuba","active":"Y"}
,
{"id":"19830","name":"All Australia","alias":"All Australia","iata":"88","icao":"8K8","callsign":"","country":"Australia","active":"Y"}
,
{"id":"19831","name":"Fly Europa","alias":"","iata":"ER","icao":"RWW","callsign":"","country":"Spain","active":"Y"}
,
{"id":"19834","name":"FlyPortugal","alias":"","iata":"PO","icao":"FPT","callsign":"FlyPortugal","country":"Portugal","active":"Y"}
,
{"id":"19845","name":"FTI Fluggesellschaft","alias":"","iata":"","icao":"FTI","callsign":"","country":"Germany","active":"N"}
]