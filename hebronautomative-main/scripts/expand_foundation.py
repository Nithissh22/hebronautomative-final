import re

translations_path = "src/i18n/translations.ts"
with open(translations_path, "r", encoding="utf-8") as f:
    content = f.read()

data = {
    "EN": {
        "hosurTn": "'Hosur, Tamil Nadu'",
        "sqft": "'42,000 sq. ft.'",
        "shifts": "'3-shift, 365 days'",
        "customers": "'Gabriel India — Hosur, Parwanoo, Hitachi Astemo — Tumkur'",
        "capacity": "'2,400 metric tons / year'",
        "turnover": "'INR 41 Crores (~$4.9 Million USD) / Annum'"
    },
    "JP": {
        "hosurTn": "'タミル・ナードゥ州ホスール'",
        "sqft": "'42,000 平方フィート'",
        "shifts": "'3交代制、365日'",
        "customers": "'ガブリエル・インディア — ホスール、パルワヌー、日立アステモ — トゥムクル'",
        "capacity": "'2,400 メートルトン / 年'",
        "turnover": "'41クロールインドルピー (~490万米ドル) / 年'"
    },
    "ES": {
        "hosurTn": "'Hosur, Tamil Nadu'",
        "sqft": "'42,000 pies cuadrados'",
        "shifts": "'3 turnos, 365 días'",
        "customers": "'Gabriel India — Hosur, Parwanoo, Hitachi Astemo — Tumkur'",
        "capacity": "'2,400 toneladas métricas / año'",
        "turnover": "'41 Crores INR (~4.9 Millones USD) / Año'"
    },
    "DE": {
        "hosurTn": "'Hosur, Tamil Nadu'",
        "sqft": "'42.000 Quadratfuß'",
        "shifts": "'3 Schichten, 365 Tage'",
        "customers": "'Gabriel India — Hosur, Parwanoo, Hitachi Astemo — Tumkur'",
        "capacity": "'2.400 Tonnen / Jahr'",
        "turnover": "'41 Crore INR (~4,9 Millionen USD) / Jahr'"
    },
    "IL": {
        "hosurTn": "'הוסור, טאמיל נאדו'",
        "sqft": "'42,000 רגל מרובע'",
        "shifts": "'3 משמרות, 365 ימים'",
        "customers": "'גבריאל הודו — הוסור, פארוואנו, היטאצ\\'י אסטמו — טומקור'",
        "capacity": "'2,400 טון מטרי / שנה'",
        "turnover": "'41 קרוד רופי (~4.9 מיליון דולר) / שנה'"
    },
    "RU": {
        "hosurTn": "'Хосур, Тамилнад'",
        "sqft": "'42 000 кв. футов'",
        "shifts": "'3 смены, 365 дней'",
        "customers": "'Gabriel India — Хосур, Парвану, Hitachi Astemo — Тумкур'",
        "capacity": "'2400 метрических тонн / год'",
        "turnover": "'41 крор рупий (~4,9 млн долл. США) / год'"
    },
    "FR": {
        "hosurTn": "'Hosur, Tamil Nadu'",
        "sqft": "'42 000 pieds carrés'",
        "shifts": "'3 quarts de travail, 365 jours'",
        "customers": "'Gabriel India — Hosur, Parwanoo, Hitachi Astemo — Tumkur'",
        "capacity": "'2 400 tonnes métriques / an'",
        "turnover": "'41 crores INR (~4,9 millions USD) / an'"
    },
    "PL": {
        "hosurTn": "'Hosur, Tamil Nadu'",
        "sqft": "'42 000 stóp kwadratowych'",
        "shifts": "'3 zmiany, 365 dni'",
        "customers": "'Gabriel India — Hosur, Parwanoo, Hitachi Astemo — Tumkur'",
        "capacity": "'2400 ton metrycznych / rok'",
        "turnover": "'41 krorów INR (~4,9 mln USD) / rok'"
    }
}

for lang, blocks in data.items():
    # find `glanceCert: '...'\n    }` and insert values before it
    if lang == "EN":
      search_str = "glanceCert: 'CERTIFICATIONS'"
    elif lang == "JP":
      search_str = "glanceCert: '認証'"
    elif lang == "ES":
      search_str = "glanceCert: 'CERTIFICACIONES'"
    elif lang == "DE":
      search_str = "glanceCert: 'ZERTIFIZIERUNGEN'"
    elif lang == "IL":
      search_str = "glanceCert: 'אישורים'"
    elif lang == "RU":
      search_str = "glanceCert: 'СЕРТИФИКАЦИЯ'"
    elif lang == "FR":
      search_str = "glanceCert: 'CERTIFICATIONS'"
    elif lang == "PL":
      search_str = "glanceCert: 'CERTYFIKATY'"

    replace_str = f"valHosur: {blocks['hosurTn']},\n      valSqft: {blocks['sqft']},\n      valShifts: {blocks['shifts']},\n      valCustomers: {blocks['customers']},\n      valCapacity: {blocks['capacity']},\n      valTurnover: {blocks['turnover']},\n      {search_str}"
    
    # We replace exactly the glanceCert line
    content = content.replace(search_str, replace_str)

with open(translations_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Foundation values translations added successfully.")
