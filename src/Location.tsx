
import React from 'react';
import { Autocomplete, Box, TextField } from '@mui/material';

export interface CountryType {
  code: string;
  lat: string;
  long: string;
  name: string;
}

// from https://developers.google.com/public-data/docs/canonical/countries_csv
const countries: readonly CountryType[] = [
  { 'code': 'AD', 'lat': '42.546245', 'long': '1.601554', 'name': 'Andorra' },
  { 'code': 'AE', 'lat': '23.424076', 'long': '53.847818', 'name': 'United Arab Emirates' },
  { 'code': 'AF', 'lat': '33.93911', 'long': '67.709953', 'name': 'Afghanistan' },
  { 'code': 'AG', 'lat': '17.060816', 'long': '-61.796428', 'name': 'Antigua and Barbuda' },
  { 'code': 'AI', 'lat': '18.220554', 'long': '-63.068615', 'name': 'Anguilla' },
  { 'code': 'AL', 'lat': '41.153332', 'long': '20.168331', 'name': 'Albania' },
  { 'code': 'AM', 'lat': '40.069099', 'long': '45.038189', 'name': 'Armenia' },
  { 'code': 'AN', 'lat': '12.226079', 'long': '-69.060087', 'name': 'Netherlands Antilles' },
  { 'code': 'AO', 'lat': '-11.202692', 'long': '17.873887', 'name': 'Angola' },
  { 'code': 'AQ', 'lat': '-75.250973', 'long': '-0.071389', 'name': 'Antarctica' },
  { 'code': 'AR', 'lat': '-38.416097', 'long': '-63.616672', 'name': 'Argentina' },
  { 'code': 'AS', 'lat': '-14.270972', 'long': '-170.132217', 'name': 'American Samoa' },
  { 'code': 'AT', 'lat': '47.516231', 'long': '14.550072', 'name': 'Austria' },
  { 'code': 'AU', 'lat': '-25.274398', 'long': '133.775136', 'name': 'Australia' },
  { 'code': 'AW', 'lat': '12.52111', 'long': '-69.968338', 'name': 'Aruba' },
  { 'code': 'AZ', 'lat': '40.143105', 'long': '47.576927', 'name': 'Azerbaijan' },
  { 'code': 'BA', 'lat': '43.915886', 'long': '17.679076', 'name': 'Bosnia and Herzegovina' },
  { 'code': 'BB', 'lat': '13.193887', 'long': '-59.543198', 'name': 'Barbados' },
  { 'code': 'BD', 'lat': '23.684994', 'long': '90.356331', 'name': 'Bangladesh' },
  { 'code': 'BE', 'lat': '50.503887', 'long': '4.469936', 'name': 'Belgium' },
  { 'code': 'BF', 'lat': '12.238333', 'long': '-1.561593', 'name': 'Burkina Faso' },
  { 'code': 'BG', 'lat': '42.733883', 'long': '25.48583', 'name': 'Bulgaria' },
  { 'code': 'BH', 'lat': '25.930414', 'long': '50.637772', 'name': 'Bahrain' },
  { 'code': 'BI', 'lat': '-3.373056', 'long': '29.918886', 'name': 'Burundi' },
  { 'code': 'BJ', 'lat': '9.30769', 'long': '2.315834', 'name': 'Benin' },
  { 'code': 'BM', 'lat': '32.321384', 'long': '-64.75737', 'name': 'Bermuda' },
  { 'code': 'BN', 'lat': '4.535277', 'long': '114.727669', 'name': 'Brunei' },
  { 'code': 'BO', 'lat': '-16.290154', 'long': '-63.588653', 'name': 'Bolivia' },
  { 'code': 'BR', 'lat': '-14.235004', 'long': '-51.92528', 'name': 'Brazil' },
  { 'code': 'BS', 'lat': '25.03428', 'long': '-77.39628', 'name': 'Bahamas' },
  { 'code': 'BT', 'lat': '27.514162', 'long': '90.433601', 'name': 'Bhutan' },
  { 'code': 'BV', 'lat': '-54.423199', 'long': '3.413194', 'name': 'Bouvet Island' },
  { 'code': 'BW', 'lat': '-22.328474', 'long': '24.684866', 'name': 'Botswana' },
  { 'code': 'BY', 'lat': '53.709807', 'long': '27.953389', 'name': 'Belarus' },
  { 'code': 'BZ', 'lat': '17.189877', 'long': '-88.49765', 'name': 'Belize' },
  { 'code': 'CA', 'lat': '56.130366', 'long': '-106.346771', 'name': 'Canada' },
  { 'code': 'CC', 'lat': '-12.164165', 'long': '96.870956', 'name': 'Cocos [Keeling] Islands' },
  { 'code': 'CD', 'lat': '-4.038333', 'long': '21.758664', 'name': 'Congo [DRC]' },
  { 'code': 'CF', 'lat': '6.611111', 'long': '20.939444', 'name': 'Central African Republic' },
  { 'code': 'CG', 'lat': '-0.228021', 'long': '15.827659', 'name': 'Congo [Republic]' },
  { 'code': 'CH', 'lat': '46.818188', 'long': '8.227512', 'name': 'Switzerland' },
  { 'code': 'CI', 'lat': '7.539989', 'long': '-5.54708', 'name': "CÃ´te d'Ivoire" },
  { 'code': 'CK', 'lat': '-21.236736', 'long': '-159.777671', 'name': 'Cook Islands' },
  { 'code': 'CL', 'lat': '-35.675147', 'long': '-71.542969', 'name': 'Chile' },
  { 'code': 'CM', 'lat': '7.369722', 'long': '12.354722', 'name': 'Cameroon' },
  { 'code': 'CN', 'lat': '35.86166', 'long': '104.195397', 'name': 'China' },
  { 'code': 'CO', 'lat': '4.570868', 'long': '-74.297333', 'name': 'Colombia' },
  { 'code': 'CR', 'lat': '9.748917', 'long': '-83.753428', 'name': 'Costa Rica' },
  { 'code': 'CU', 'lat': '21.521757', 'long': '-77.781167', 'name': 'Cuba' },
  { 'code': 'CV', 'lat': '16.002082', 'long': '-24.013197', 'name': 'Cape Verde' },
  { 'code': 'CX', 'lat': '-10.447525', 'long': '105.690449', 'name': 'Christmas Island' },
  { 'code': 'CY', 'lat': '35.126413', 'long': '33.429859', 'name': 'Cyprus' },
  { 'code': 'CZ', 'lat': '49.817492', 'long': '15.472962', 'name': 'Czech Republic' },
  { 'code': 'DE', 'lat': '51.165691', 'long': '10.451526', 'name': 'Germany' },
  { 'code': 'DJ', 'lat': '11.825138', 'long': '42.590275', 'name': 'Djibouti' },
  { 'code': 'DK', 'lat': '56.26392', 'long': '9.501785', 'name': 'Denmark' },
  { 'code': 'DM', 'lat': '15.414999', 'long': '-61.370976', 'name': 'Dominica' },
  { 'code': 'DO', 'lat': '18.735693', 'long': '-70.162651', 'name': 'Dominican Republic' },
  { 'code': 'DZ', 'lat': '28.033886', 'long': '1.659626', 'name': 'Algeria' },
  { 'code': 'EC', 'lat': '-1.831239', 'long': '-78.183406', 'name': 'Ecuador' },
  { 'code': 'EE', 'lat': '58.595272', 'long': '25.013607', 'name': 'Estonia' },
  { 'code': 'EG', 'lat': '26.820553', 'long': '30.802498', 'name': 'Egypt' },
  { 'code': 'EH', 'lat': '24.215527', 'long': '-12.885834', 'name': 'Western Sahara' },
  { 'code': 'ER', 'lat': '15.179384', 'long': '39.782334', 'name': 'Eritrea' },
  { 'code': 'ES', 'lat': '40.463667', 'long': '-3.74922', 'name': 'Spain' },
  { 'code': 'ET', 'lat': '9.145', 'long': '40.489673', 'name': 'Ethiopia' },
  { 'code': 'FI', 'lat': '61.92411', 'long': '25.748151', 'name': 'Finland' },
  { 'code': 'FJ', 'lat': '-16.578193', 'long': '179.414413', 'name': 'Fiji' },
  { 'code': 'FK', 'lat': '-51.796253', 'long': '-59.523613', 'name': 'Falkland Islands [Islas Malvinas]' },
  { 'code': 'FM', 'lat': '7.425554', 'long': '150.550812', 'name': 'Micronesia' },
  { 'code': 'FO', 'lat': '61.892635', 'long': '-6.911806', 'name': 'Faroe Islands' },
  { 'code': 'FR', 'lat': '46.227638', 'long': '2.213749', 'name': 'France' },
  { 'code': 'GA', 'lat': '-0.803689', 'long': '11.609444', 'name': 'Gabon' },
  { 'code': 'GB', 'lat': '55.378051', 'long': '-3.435973', 'name': 'United Kingdom' },
  { 'code': 'GD', 'lat': '12.262776', 'long': '-61.604171', 'name': 'Grenada' },
  { 'code': 'GE', 'lat': '42.315407', 'long': '43.356892', 'name': 'Georgia' },
  { 'code': 'GF', 'lat': '3.933889', 'long': '-53.125782', 'name': 'French Guiana' },
  { 'code': 'GG', 'lat': '49.465691', 'long': '-2.585278', 'name': 'Guernsey' },
  { 'code': 'GH', 'lat': '7.946527', 'long': '-1.023194', 'name': 'Ghana' },
  { 'code': 'GI', 'lat': '36.137741', 'long': '-5.345374', 'name': 'Gibraltar' },
  { 'code': 'GL', 'lat': '71.706936', 'long': '-42.604303', 'name': 'Greenland' },
  { 'code': 'GM', 'lat': '13.443182', 'long': '-15.310139', 'name': 'Gambia' },
  { 'code': 'GN', 'lat': '9.945587', 'long': '-9.696645', 'name': 'Guinea' },
  { 'code': 'GP', 'lat': '16.995971', 'long': '-62.067641', 'name': 'Guadeloupe' },
  { 'code': 'GQ', 'lat': '1.650801', 'long': '10.267895', 'name': 'Equatorial Guinea' },
  { 'code': 'GR', 'lat': '39.074208', 'long': '21.824312', 'name': 'Greece' },
  { 'code': 'GS', 'lat': '-54.429579', 'long': '-36.587909', 'name': 'South Georgia and the South Sandwich Islands' },
  { 'code': 'GT', 'lat': '15.783471', 'long': '-90.230759', 'name': 'Guatemala' },
  { 'code': 'GU', 'lat': '13.444304', 'long': '144.793731', 'name': 'Guam' },
  { 'code': 'GW', 'lat': '11.803749', 'long': '-15.180413', 'name': 'Guinea-Bissau' },
  { 'code': 'GY', 'lat': '4.860416', 'long': '-58.93018', 'name': 'Guyana' },
  { 'code': 'GZ', 'lat': '31.354676', 'long': '34.308825', 'name': 'Gaza Strip' },
  { 'code': 'HK', 'lat': '22.396428', 'long': '114.109497', 'name': 'Hong Kong' },
  { 'code': 'HM', 'lat': '-53.08181', 'long': '73.504158', 'name': 'Heard Island and McDonald Islands' },
  { 'code': 'HN', 'lat': '15.199999', 'long': '-86.241905', 'name': 'Honduras' },
  { 'code': 'HR', 'lat': '45.1', 'long': '15.2', 'name': 'Croatia' },
  { 'code': 'HT', 'lat': '18.971187', 'long': '-72.285215', 'name': 'Haiti' },
  { 'code': 'HU', 'lat': '47.162494', 'long': '19.503304', 'name': 'Hungary' },
  { 'code': 'ID', 'lat': '-0.789275', 'long': '113.921327', 'name': 'Indonesia' },
  { 'code': 'IE', 'lat': '53.41291', 'long': '-8.24389', 'name': 'Ireland' },
  { 'code': 'IL', 'lat': '31.046051', 'long': '34.851612', 'name': 'Israel' },
  { 'code': 'IM', 'lat': '54.236107', 'long': '-4.548056', 'name': 'Isle of Man' },
  { 'code': 'IN', 'lat': '20.593684', 'long': '78.96288', 'name': 'India' },
  { 'code': 'IO', 'lat': '-6.343194', 'long': '71.876519', 'name': 'British Indian Ocean Territory' },
  { 'code': 'IQ', 'lat': '33.223191', 'long': '43.679291', 'name': 'Iraq' },
  { 'code': 'IR', 'lat': '32.427908', 'long': '53.688046', 'name': 'Iran' },
  { 'code': 'IS', 'lat': '64.963051', 'long': '-19.020835', 'name': 'Iceland' },
  { 'code': 'IT', 'lat': '41.87194', 'long': '12.56738', 'name': 'Italy' },
  { 'code': 'JE', 'lat': '49.214439', 'long': '-2.13125', 'name': 'Jersey' },
  { 'code': 'JM', 'lat': '18.109581', 'long': '-77.297508', 'name': 'Jamaica' },
  { 'code': 'JO', 'lat': '30.585164', 'long': '36.238414', 'name': 'Jordan' },
  { 'code': 'JP', 'lat': '36.204824', 'long': '138.252924', 'name': 'Japan' },
  { 'code': 'KE', 'lat': '-0.023559', 'long': '37.906193', 'name': 'Kenya' },
  { 'code': 'KG', 'lat': '41.20438', 'long': '74.766098', 'name': 'Kyrgyzstan' },
  { 'code': 'KH', 'lat': '12.565679', 'long': '104.990963', 'name': 'Cambodia' },
  { 'code': 'KI', 'lat': '-3.370417', 'long': '-168.734039', 'name': 'Kiribati' },
  { 'code': 'KM', 'lat': '-11.875001', 'long': '43.872219', 'name': 'Comoros' },
  { 'code': 'KN', 'lat': '17.357822', 'long': '-62.782998', 'name': 'Saint Kitts and Nevis' },
  { 'code': 'KP', 'lat': '40.339852', 'long': '127.510093', 'name': 'North Korea' },
  { 'code': 'KR', 'lat': '35.907757', 'long': '127.766922', 'name': 'South Korea' },
  { 'code': 'KW', 'lat': '29.31166', 'long': '47.481766', 'name': 'Kuwait' },
  { 'code': 'KY', 'lat': '19.513469', 'long': '-80.566956', 'name': 'Cayman Islands' },
  { 'code': 'KZ', 'lat': '48.019573', 'long': '66.923684', 'name': 'Kazakhstan' },
  { 'code': 'LA', 'lat': '19.85627', 'long': '102.495496', 'name': 'Laos' },
  { 'code': 'LB', 'lat': '33.854721', 'long': '35.862285', 'name': 'Lebanon' },
  { 'code': 'LC', 'lat': '13.909444', 'long': '-60.978893', 'name': 'Saint Lucia' },
  { 'code': 'LI', 'lat': '47.166', 'long': '9.555373', 'name': 'Liechtenstein' },
  { 'code': 'LK', 'lat': '7.873054', 'long': '80.771797', 'name': 'Sri Lanka' },
  { 'code': 'LR', 'lat': '6.428055', 'long': '-9.429499', 'name': 'Liberia' },
  { 'code': 'LS', 'lat': '-29.609988', 'long': '28.233608', 'name': 'Lesotho' },
  { 'code': 'LT', 'lat': '55.169438', 'long': '23.881275', 'name': 'Lithuania' },
  { 'code': 'LU', 'lat': '49.815273', 'long': '6.129583', 'name': 'Luxembourg' },
  { 'code': 'LV', 'lat': '56.879635', 'long': '24.603189', 'name': 'Latvia' },
  { 'code': 'LY', 'lat': '26.3351', 'long': '17.228331', 'name': 'Libya' },
  { 'code': 'MA', 'lat': '31.791702', 'long': '-7.09262', 'name': 'Morocco' },
  { 'code': 'MC', 'lat': '43.750298', 'long': '7.412841', 'name': 'Monaco' },
  { 'code': 'MD', 'lat': '47.411631', 'long': '28.369885', 'name': 'Moldova' },
  { 'code': 'ME', 'lat': '42.708678', 'long': '19.37439', 'name': 'Montenegro' },
  { 'code': 'MG', 'lat': '-18.766947', 'long': '46.869107', 'name': 'Madagascar' },
  { 'code': 'MH', 'lat': '7.131474', 'long': '171.184478', 'name': 'Marshall Islands' },
  { 'code': 'MK', 'lat': '41.608635', 'long': '21.745275', 'name': 'Macedonia [FYROM]' },
  { 'code': 'ML', 'lat': '17.570692', 'long': '-3.996166', 'name': 'Mali' },
  { 'code': 'MM', 'lat': '21.913965', 'long': '95.956223', 'name': 'Myanmar [Burma]' },
  { 'code': 'MN', 'lat': '46.862496', 'long': '103.846656', 'name': 'Mongolia' },
  { 'code': 'MO', 'lat': '22.198745', 'long': '113.543873', 'name': 'Macau' },
  { 'code': 'MP', 'lat': '17.33083', 'long': '145.38469', 'name': 'Northern Mariana Islands' },
  { 'code': 'MQ', 'lat': '14.641528', 'long': '-61.024174', 'name': 'Martinique' },
  { 'code': 'MR', 'lat': '21.00789', 'long': '-10.940835', 'name': 'Mauritania' },
  { 'code': 'MS', 'lat': '16.742498', 'long': '-62.187366', 'name': 'Montserrat' },
  { 'code': 'MT', 'lat': '35.937496', 'long': '14.375416', 'name': 'Malta' },
  { 'code': 'MU', 'lat': '-20.348404', 'long': '57.552152', 'name': 'Mauritius' },
  { 'code': 'MV', 'lat': '3.202778', 'long': '73.22068', 'name': 'Maldives' },
  { 'code': 'MW', 'lat': '-13.254308', 'long': '34.301525', 'name': 'Malawi' },
  { 'code': 'MX', 'lat': '23.634501', 'long': '-102.552784', 'name': 'Mexico' },
  { 'code': 'MY', 'lat': '4.210484', 'long': '101.975766', 'name': 'Malaysia' },
  { 'code': 'MZ', 'lat': '-18.665695', 'long': '35.529562', 'name': 'Mozambique' },
  { 'code': 'NA', 'lat': '-22.95764', 'long': '18.49041', 'name': 'Namibia' },
  { 'code': 'NC', 'lat': '-20.904305', 'long': '165.618042', 'name': 'New Caledonia' },
  { 'code': 'NE', 'lat': '17.607789', 'long': '8.081666', 'name': 'Niger' },
  { 'code': 'NF', 'lat': '-29.040835', 'long': '167.954712', 'name': 'Norfolk Island' },
  { 'code': 'NG', 'lat': '9.081999', 'long': '8.675277', 'name': 'Nigeria' },
  { 'code': 'NI', 'lat': '12.865416', 'long': '-85.207229', 'name': 'Nicaragua' },
  { 'code': 'NL', 'lat': '52.132633', 'long': '5.291266', 'name': 'Netherlands' },
  { 'code': 'NO', 'lat': '60.472024', 'long': '8.468946', 'name': 'Norway' },
  { 'code': 'NP', 'lat': '28.394857', 'long': '84.124008', 'name': 'Nepal' },
  { 'code': 'NR', 'lat': '-0.522778', 'long': '166.931503', 'name': 'Nauru' },
  { 'code': 'NU', 'lat': '-19.054445', 'long': '-169.867233', 'name': 'Niue' },
  { 'code': 'NZ', 'lat': '-40.900557', 'long': '174.885971', 'name': 'New Zealand' },
  { 'code': 'OM', 'lat': '21.512583', 'long': '55.923255', 'name': 'Oman' },
  { 'code': 'PA', 'lat': '8.537981', 'long': '-80.782127', 'name': 'Panama' },
  { 'code': 'PE', 'lat': '-9.189967', 'long': '-75.015152', 'name': 'Peru' },
  { 'code': 'PF', 'lat': '-17.679742', 'long': '-149.406843', 'name': 'French Polynesia' },
  { 'code': 'PG', 'lat': '-6.314993', 'long': '143.95555', 'name': 'Papua New Guinea' },
  { 'code': 'PH', 'lat': '12.879721', 'long': '121.774017', 'name': 'Philippines' },
  { 'code': 'PK', 'lat': '30.375321', 'long': '69.345116', 'name': 'Pakistan' },
  { 'code': 'PL', 'lat': '51.919438', 'long': '19.145136', 'name': 'Poland' },
  { 'code': 'PM', 'lat': '46.941936', 'long': '-56.27111', 'name': 'Saint Pierre and Miquelon' },
  { 'code': 'PN', 'lat': '-24.703615', 'long': '-127.439308', 'name': 'Pitcairn Islands' },
  { 'code': 'PR', 'lat': '18.220833', 'long': '-66.590149', 'name': 'Puerto Rico' },
  { 'code': 'PS', 'lat': '31.952162', 'long': '35.233154', 'name': 'Palestinian Territories' },
  { 'code': 'PT', 'lat': '39.399872', 'long': '-8.224454', 'name': 'Portugal' },
  { 'code': 'PW', 'lat': '7.51498', 'long': '134.58252', 'name': 'Palau' },
  { 'code': 'PY', 'lat': '-23.442503', 'long': '-58.443832', 'name': 'Paraguay' },
  { 'code': 'QA', 'lat': '25.354826', 'long': '51.183884', 'name': 'Qatar' },
  { 'code': 'RE', 'lat': '-21.115141', 'long': '55.536384', 'name': 'RÃ©union' },
  { 'code': 'RO', 'lat': '45.943161', 'long': '24.96676', 'name': 'Romania' },
  { 'code': 'RS', 'lat': '44.016521', 'long': '21.005859', 'name': 'Serbia' },
  { 'code': 'RU', 'lat': '61.52401', 'long': '105.318756', 'name': 'Russia' },
  { 'code': 'RW', 'lat': '-1.940278', 'long': '29.873888', 'name': 'Rwanda' },
  { 'code': 'SA', 'lat': '23.885942', 'long': '45.079162', 'name': 'Saudi Arabia' },
  { 'code': 'SB', 'lat': '-9.64571', 'long': '160.156194', 'name': 'Solomon Islands' },
  { 'code': 'SC', 'lat': '-4.679574', 'long': '55.491977', 'name': 'Seychelles' },
  { 'code': 'SD', 'lat': '12.862807', 'long': '30.217636', 'name': 'Sudan' },
  { 'code': 'SE', 'lat': '60.128161', 'long': '18.643501', 'name': 'Sweden' },
  { 'code': 'SG', 'lat': '1.352083', 'long': '103.819836', 'name': 'Singapore' },
  { 'code': 'SH', 'lat': '-24.143474', 'long': '-10.030696', 'name': 'Saint Helena' },
  { 'code': 'SI', 'lat': '46.151241', 'long': '14.995463', 'name': 'Slovenia' },
  { 'code': 'SJ', 'lat': '77.553604', 'long': '23.670272', 'name': 'Svalbard and Jan Mayen' },
  { 'code': 'SK', 'lat': '48.669026', 'long': '19.699024', 'name': 'Slovakia' },
  { 'code': 'SL', 'lat': '8.460555', 'long': '-11.779889', 'name': 'Sierra Leone' },
  { 'code': 'SM', 'lat': '43.94236', 'long': '12.457777', 'name': 'San Marino' },
  { 'code': 'SN', 'lat': '14.497401', 'long': '-14.452362', 'name': 'Senegal' },
  { 'code': 'SO', 'lat': '5.152149', 'long': '46.199616', 'name': 'Somalia' },
  { 'code': 'SR', 'lat': '3.919305', 'long': '-56.027783', 'name': 'Suriname' },
  { 'code': 'ST', 'lat': '0.18636', 'long': '6.613081', 'name': 'SÃ£o TomÃ© and PrÃ\xadncipe' },
  { 'code': 'SV', 'lat': '13.794185', 'long': '-88.89653', 'name': 'El Salvador' },
  { 'code': 'SY', 'lat': '34.802075', 'long': '38.996815', 'name': 'Syria' },
  { 'code': 'SZ', 'lat': '-26.522503', 'long': '31.465866', 'name': 'Swaziland' },
  { 'code': 'TC', 'lat': '21.694025', 'long': '-71.797928', 'name': 'Turks and Caicos Islands' },
  { 'code': 'TD', 'lat': '15.454166', 'long': '18.732207', 'name': 'Chad' },
  { 'code': 'TF', 'lat': '-49.280366', 'long': '69.348557', 'name': 'French Southern Territories' },
  { 'code': 'TG', 'lat': '8.619543', 'long': '0.824782', 'name': 'Togo' },
  { 'code': 'TH', 'lat': '15.870032', 'long': '100.992541', 'name': 'Thailand' },
  { 'code': 'TJ', 'lat': '38.861034', 'long': '71.276093', 'name': 'Tajikistan' },
  { 'code': 'TK', 'lat': '-8.967363', 'long': '-171.855881', 'name': 'Tokelau' },
  { 'code': 'TL', 'lat': '-8.874217', 'long': '125.727539', 'name': 'Timor-Leste' },
  { 'code': 'TM', 'lat': '38.969719', 'long': '59.556278', 'name': 'Turkmenistan' },
  { 'code': 'TN', 'lat': '33.886917', 'long': '9.537499', 'name': 'Tunisia' },
  { 'code': 'TO', 'lat': '-21.178986', 'long': '-175.198242', 'name': 'Tonga' },
  { 'code': 'TR', 'lat': '38.963745', 'long': '35.243322', 'name': 'Turkey' },
  { 'code': 'TT', 'lat': '10.691803', 'long': '-61.222503', 'name': 'Trinidad and Tobago' },
  { 'code': 'TV', 'lat': '-7.109535', 'long': '177.64933', 'name': 'Tuvalu' },
  { 'code': 'TW', 'lat': '23.69781', 'long': '120.960515', 'name': 'Taiwan' },
  { 'code': 'TZ', 'lat': '-6.369028', 'long': '34.888822', 'name': 'Tanzania' },
  { 'code': 'UA', 'lat': '48.379433', 'long': '31.16558', 'name': 'Ukraine' },
  { 'code': 'UG', 'lat': '1.373333', 'long': '32.290275', 'name': 'Uganda' },
  { 'code': 'UM', 'lat': 'U.S.', 'long': 'Minor', 'name': 'Outlying Islands' },
  { 'code': 'US', 'lat': '37.09024', 'long': '-95.712891', 'name': 'United States' },
  { 'code': 'UY', 'lat': '-32.522779', 'long': '-55.765835', 'name': 'Uruguay' },
  { 'code': 'UZ', 'lat': '41.377491', 'long': '64.585262', 'name': 'Uzbekistan' },
  { 'code': 'VA', 'lat': '41.902916', 'long': '12.453389', 'name': 'Vatican City' },
  { 'code': 'VC', 'lat': '12.984305', 'long': '-61.287228', 'name': 'Saint Vincent and the Grenadines' },
  { 'code': 'VE', 'lat': '6.42375', 'long': '-66.58973', 'name': 'Venezuela' },
  { 'code': 'VG', 'lat': '18.420695', 'long': '-64.639968', 'name': 'British Virgin Islands' },
  { 'code': 'VI', 'lat': '18.335765', 'long': '-64.896335', 'name': 'U.S. Virgin Islands' },
  { 'code': 'VN', 'lat': '14.058324', 'long': '108.277199', 'name': 'Vietnam' },
  { 'code': 'VU', 'lat': '-15.376706', 'long': '166.959158', 'name': 'Vanuatu' },
  { 'code': 'WF', 'lat': '-13.768752', 'long': '-177.156097', 'name': 'Wallis and Futuna' },
  { 'code': 'WS', 'lat': '-13.759029', 'long': '-172.104629', 'name': 'Samoa' },
  { 'code': 'XK', 'lat': '42.602636', 'long': '20.902977', 'name': 'Kosovo' },
  { 'code': 'YE', 'lat': '15.552727', 'long': '48.516388', 'name': 'Yemen' },
  { 'code': 'YT', 'lat': '-12.8275', 'long': '45.166244', 'name': 'Mayotte' },
  { 'code': 'ZA', 'lat': '-30.559482', 'long': '22.937506', 'name': 'South Africa' },
  { 'code': 'ZM', 'lat': '-13.133897', 'long': '27.849332', 'name': 'Zambia' },
  { 'code': 'ZW', 'lat': '-19.015438', 'long': '29.154857', 'name': 'Zimbabwe' }
];

interface LocationProps {
  handleNextClick: () => void
  location: CountryType | undefined
  setLocation: React.Dispatch<React.SetStateAction<CountryType | undefined>>;
}

export default function Location({ handleNextClick, location, setLocation }: LocationProps) {
  return (
    <Box sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: '100vh',
      backgroundImage: "url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80)",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
      <Autocomplete
        id="country-select-demo"
        sx={{
          width: 300,
          background: "white",
          padding: "10px",
          borderRadius: "20px",
          "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            border: "1px solid white"
          },
          "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline:hover": {
            border: "1px solid white"
          }
        }}
        value={location}
        options={countries}
        autoHighlight
        getOptionLabel={(option) => option.name}
        onChange={(event, value) => {
          if (value) {
            setLocation(value)
            handleNextClick()
          }
        }}
        renderOption={(props, option) => (
          <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
            <img
              loading="lazy"
              width="20"
              src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
              srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
              alt=""
            />
            {option.name} ({option.code})
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Choose a country"
            inputProps={{
              ...params.inputProps,
              autoComplete: 'new-password', // disable autocomplete and autofill
            }}
          />
        )}
      />
    </Box>
  );
}
