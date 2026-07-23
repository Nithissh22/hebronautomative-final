import re

translations_path = "src/i18n/translations.ts"
with open(translations_path, "r", encoding="utf-8") as f:
    content = f.read()

data = {
    "EN": {
        "capGrid": """    capGrid: {
      whatWeDo: 'WHAT WE DO',
      fiveCap: 'Five Capabilities. One Supply Chain.',
      clickAny: 'Click any capability to explore our full technical specifications.',
      readyPartner: 'Ready to partner with us?',
      reqQuote: 'Request a Quote →',
      downloadDeck: 'Download Capabilities Deck'
    }""",
        "qualityStrip": """    qualityStrip: {
      assurance: 'QUALITY ASSURANCE',
      zeroDefect: 'Zero Defect Target.',
      everyComp: 'Every component passes through our integrated CMM and vision inspection systems. PPAP Level 3 capable with 100% traceability.',
      cpkTarget: 'CPK TARGET',
      traceability: 'TRACEABILITY'
    }""",
        "cta": """    cta: {
      readyScale: 'Ready to scale\\nyour assembly line?',
      sendDrawings: 'Send us your drawings for a technical review and quote within 48 hours.',
      reqQuote: 'REQUEST QUOTE',
      emailSales: 'Email Sales'
    }""",
        "timeline": """    timeline: {
      growthStory: 'OUR GROWTH STORY',
      m20: '2020',
      m20Desc: 'Semi-automatic powder coating facility added',
      m21: '2021',
      m21Desc: '2 additional die casting machines added',
      m22: '2022',
      m22Desc: 'New machining & bush assembly facility for Gabriel',
      m23: '2023',
      m23Desc: 'Standard Room installed – UTM, Spectro, VMM, 2D',
      milestone: 'MILESTONE'
    }"""
    },
    "JP": {
        "capGrid": """    capGrid: {
      whatWeDo: '業務内容',
      fiveCap: '5つの能力。1つのサプライチェーン。',
      clickAny: '機能をクリックして、完全な技術仕様を調べます。',
      readyPartner: '提携する準備はできましたか？',
      reqQuote: '見積もりを依頼する →',
      downloadDeck: '機能デッキをダウンロード'
    }""",
        "qualityStrip": """    qualityStrip: {
      assurance: '品質保証',
      zeroDefect: '欠陥ゼロの目標。',
      everyComp: 'すべてのコンポーネントは、統合されたCMMおよび視覚検査システムを通過します。100%のトレーサビリティを備えたPPAPレベル3に対応。',
      cpkTarget: 'CPK目標',
      traceability: 'トレーサビリティ'
    }""",
        "cta": """    cta: {
      readyScale: '組立ラインを拡張する準備はできましたか？',
      sendDrawings: '技術レビューのために図面をお送りください。48時間以内にお見積もりいたします。',
      reqQuote: '見積もり依頼',
      emailSales: '営業部にメール'
    }""",
        "timeline": """    timeline: {
      growthStory: '私たちの成長の物語',
      m20: '2020',
      m20Desc: '半自動粉体塗装施設を追加',
      m21: '2021',
      m21Desc: 'ダイカストマシン2台追加',
      m22: '2022',
      m22Desc: 'ガブリエル向けの新機械加工・ブッシュ組立工場',
      m23: '2023',
      m23Desc: '標準室設置 – UTM、Spectro、VMM、2D',
      milestone: 'マイルストーン'
    }"""
    },
    "ES": {
        "capGrid": """    capGrid: {
      whatWeDo: 'LO QUE HACEMOS',
      fiveCap: 'Cinco Capacidades. Una Cadena de Suministro.',
      clickAny: 'Haga clic en cualquier capacidad para explorar nuestras especificaciones técnicas.',
      readyPartner: '¿Listo para asociarse con nosotros?',
      reqQuote: 'Solicitar una Cotización →',
      downloadDeck: 'Descargar Presentación'
    }""",
        "qualityStrip": """    qualityStrip: {
      assurance: 'GARANTÍA DE CALIDAD',
      zeroDefect: 'Objetivo de Cero Defectos.',
      everyComp: 'Cada componente pasa por nuestros sistemas integrados de inspección visual y CMM. Capaz de nivel 3 de PPAP con 100% de trazabilidad.',
      cpkTarget: 'OBJETIVO CPK',
      traceability: 'TRAZABILIDAD'
    }""",
        "cta": """    cta: {
      readyScale: '¿Listo para escalar\\nsu línea de ensamblaje?',
      sendDrawings: 'Envíenos sus dibujos para una revisión técnica y cotización dentro de 48 horas.',
      reqQuote: 'SOLICITAR COTIZACIÓN',
      emailSales: 'Enviar Email'
    }""",
        "timeline": """    timeline: {
      growthStory: 'NUESTRA HISTORIA DE CRECIMIENTO',
      m20: '2020',
      m20Desc: 'Instalación de recubrimiento en polvo semi-automática añadida',
      m21: '2021',
      m21Desc: '2 máquinas de fundición a presión adicionales',
      m22: '2022',
      m22Desc: 'Nueva instalación de mecanizado y ensamblaje para Gabriel',
      m23: '2023',
      m23Desc: 'Sala Estándar instalada – UTM, Spectro, VMM, 2D',
      milestone: 'HITO'
    }"""
    },
    "DE": {
        "capGrid": """    capGrid: {
      whatWeDo: 'WAS WIR TUN',
      fiveCap: 'Fünf Fähigkeiten. Eine Lieferkette.',
      clickAny: 'Klicken Sie auf eine Fähigkeit, um unsere technischen Spezifikationen zu erkunden.',
      readyPartner: 'Bereit für eine Partnerschaft?',
      reqQuote: 'Ein Angebot anfordern →',
      downloadDeck: 'Fähigkeiten-Deck herunterladen'
    }""",
        "qualityStrip": """    qualityStrip: {
      assurance: 'QUALITÄTSSICHERUNG',
      zeroDefect: 'Null-Fehler-Ziel.',
      everyComp: 'Jedes Bauteil durchläuft unsere integrierten CMM- und Sichtprüfsysteme. PPAP Level 3 fähig mit 100% Rückverfolgbarkeit.',
      cpkTarget: 'CPK-ZIEL',
      traceability: 'RÜCKVERFOLGBARKEIT'
    }""",
        "cta": """    cta: {
      readyScale: 'Bereit, Ihre Montagelinie\\nzu skalieren?',
      sendDrawings: 'Senden Sie uns Ihre Zeichnungen für eine technische Prüfung und ein Angebot innerhalb von 48 Stunden.',
      reqQuote: 'ANGEBOT ANFORDERN',
      emailSales: 'E-Mail Vertrieb'
    }""",
        "timeline": """    timeline: {
      growthStory: 'UNSERE WACHSTUMSGESCHICHTE',
      m20: '2020',
      m20Desc: 'Halbautomatische Pulverbeschichtungsanlage hinzugefügt',
      m21: '2021',
      m21Desc: '2 zusätzliche Druckgussmaschinen',
      m22: '2022',
      m22Desc: 'Neue Bearbeitungs- und Buchsenmontage für Gabriel',
      m23: '2023',
      m23Desc: 'Standardraum installiert – UTM, Spectro, VMM, 2D',
      milestone: 'MEILENSTEIN'
    }"""
    },
    "IL": {
        "capGrid": """    capGrid: {
      whatWeDo: 'מה אנחנו עושים',
      fiveCap: 'חמש יכולות. שרשרת אספקה אחת.',
      clickAny: 'לחץ על כל יכולת כדי לחקור את המפרט הטכני המלא שלנו.',
      readyPartner: 'מוכנים לשתף פעולה?',
      reqQuote: 'בקש הצעת מחיר →',
      downloadDeck: 'הורד מצגת יכולות'
    }""",
        "qualityStrip": """    qualityStrip: {
      assurance: 'הבטחת איכות',
      zeroDefect: 'יעד אפס תקלות.',
      everyComp: 'כל רכיב עובר במערכות ה-CMM ומערכות הראייה המשולבות שלנו. מסוגל ל-PPAP רמה 3 עם 100% עקיבות.',
      cpkTarget: 'יעד CPK',
      traceability: 'עקיבות'
    }""",
        "cta": """    cta: {
      readyScale: 'מוכנים להרחיב\\nאת קו ההרכבה שלכם?',
      sendDrawings: 'שלח לנו את השרטוטים שלך לבדיקה טכנית והצעת מחיר תוך 48 שעות.',
      reqQuote: 'בקש הצעת מחיר',
      emailSales: 'אימייל למכירות'
    }""",
        "timeline": """    timeline: {
      growthStory: 'סיפור הצמיחה שלנו',
      m20: '2020',
      m20Desc: 'נוסף מתקן ציפוי אבקה חצי אוטומטי',
      m21: '2021',
      m21Desc: 'נוספו 2 מכונות יציקת תבנית',
      m22: '2022',
      m22Desc: 'מתקן עיבוד והרכבת תותבים חדש עבור גבריאל',
      m23: '2023',
      m23Desc: 'חדר תקן הותקן – UTM, Spectro, VMM, 2D',
      milestone: 'אבן דרך'
    }"""
    },
    "RU": {
        "capGrid": """    capGrid: {
      whatWeDo: 'ЧТО МЫ ДЕЛАЕМ',
      fiveCap: 'Пять Возможностей. Одна Цепочка Поставок.',
      clickAny: 'Нажмите на любую возможность, чтобы изучить наши технические спецификации.',
      readyPartner: 'Готовы к партнерству?',
      reqQuote: 'Запросить расценки →',
      downloadDeck: 'Скачать презентацию возможностей'
    }""",
        "qualityStrip": """    qualityStrip: {
      assurance: 'КОНТРОЛЬ КАЧЕСТВА',
      zeroDefect: 'Цель: Ноль Дефектов.',
      everyComp: 'Каждый компонент проходит через наши интегрированные системы визуального контроля и КИМ. Способность PPAP уровня 3 со 100% прослеживаемостью.',
      cpkTarget: 'ЦЕЛЕВОЙ CPK',
      traceability: 'ПРОСЛЕЖИВАЕМОСТЬ'
    }""",
        "cta": """    cta: {
      readyScale: 'Готовы масштабировать\\nсвою сборочную линию?',
      sendDrawings: 'Пришлите нам свои чертежи для технической оценки и коммерческого предложения в течение 48 часов.',
      reqQuote: 'ЗАПРОСИТЬ РАСЦЕНКИ',
      emailSales: 'Написать в отдел продаж'
    }""",
        "timeline": """    timeline: {
      growthStory: 'ИСТОРИЯ НАШЕГО РОСТА',
      m20: '2020',
      m20Desc: 'Добавлен полуавтоматический цех порошковой окраски',
      m21: '2021',
      m21Desc: 'Добавлены 2 дополнительные машины для литья под давлением',
      m22: '2022',
      m22Desc: 'Новый цех обработки и сборки втулок для Gabriel',
      m23: '2023',
      m23Desc: 'Установлено стандартное помещение – UTM, Spectro, VMM, 2D',
      milestone: 'ВЕХА'
    }"""
    },
    "FR": {
        "capGrid": """    capGrid: {
      whatWeDo: 'CE QUE NOUS FAISONS',
      fiveCap: 'Cinq Capacités. Une Chaîne d\\'Approvisionnement.',
      clickAny: 'Cliquez sur n\\'importe quelle capacité pour explorer nos spécifications techniques.',
      readyPartner: 'Prêt à vous associer avec nous ?',
      reqQuote: 'Demander un devis →',
      downloadDeck: 'Télécharger la présentation'
    }""",
        "qualityStrip": """    qualityStrip: {
      assurance: 'ASSURANCE QUALITÉ',
      zeroDefect: 'Objectif Zéro Défaut.',
      everyComp: 'Chaque composant passe par nos systèmes intégrés d\\'inspection visuelle et de MMT. Capable de niveau 3 PPAP avec une traçabilité à 100 %.',
      cpkTarget: 'CIBLE CPK',
      traceability: 'TRAÇABILITÉ'
    }""",
        "cta": """    cta: {
      readyScale: 'Prêt à étendre\\nvotre ligne d\\'assemblage ?',
      sendDrawings: 'Envoyez-nous vos dessins pour un examen technique et un devis sous 48 heures.',
      reqQuote: 'DEMANDER UN DEVIS',
      emailSales: 'Contacter les ventes'
    }""",
        "timeline": """    timeline: {
      growthStory: 'NOTRE HISTOIRE DE CROISSANCE',
      m20: '2020',
      m20Desc: 'Ajout d\\'une installation de revêtement en poudre semi-automatique',
      m21: '2021',
      m21Desc: '2 machines de moulage sous pression supplémentaires',
      m22: '2022',
      m22Desc: 'Nouvelle installation d\\'usinage et d\\'assemblage pour Gabriel',
      m23: '2023',
      m23Desc: 'Salle standard installée – UTM, Spectro, VMM, 2D',
      milestone: 'JALON'
    }"""
    },
    "PL": {
        "capGrid": """    capGrid: {
      whatWeDo: 'CO ROBIMY',
      fiveCap: 'Pięć Możliwości. Jeden Łańcuch Dostaw.',
      clickAny: 'Kliknij dowolną możliwość, aby poznać nasze pełne specyfikacje techniczne.',
      readyPartner: 'Gotowy na współpracę z nami?',
      reqQuote: 'Poproś o wycenę →',
      downloadDeck: 'Pobierz prezentację możliwości'
    }""",
        "qualityStrip": """    qualityStrip: {
      assurance: 'ZAPEWNIENIE JAKOŚCI',
      zeroDefect: 'Cel: Zero Defektów.',
      everyComp: 'Każdy komponent przechodzi przez nasze zintegrowane systemy kontroli wizyjnej i CMM. Zgodność z PPAP poziom 3 i 100% identyfikowalności.',
      cpkTarget: 'CEL CPK',
      traceability: 'IDENTYFIKOWALNOŚĆ'
    }""",
        "cta": """    cta: {
      readyScale: 'Gotowy na rozwój\\ntwojej linii montażowej?',
      sendDrawings: 'Prześlij nam swoje rysunki do analizy technicznej i wyceny w ciągu 48 godzin.',
      reqQuote: 'POPROŚ O WYCENĘ',
      emailSales: 'Napisz do sprzedaży'
    }""",
        "timeline": """    timeline: {
      growthStory: 'NASZA HISTORIA WZROSTU',
      m20: '2020',
      m20Desc: 'Dodano półautomatyczną instalację do malowania proszkowego',
      m21: '2021',
      m21Desc: 'Dodano 2 maszyny do odlewania ciśnieniowego',
      m22: '2022',
      m22Desc: 'Nowy zakład obróbki i montażu tulei dla Gabriel',
      m23: '2023',
      m23Desc: 'Standard Room zainstalowany – UTM, Spectro, VMM, 2D',
      milestone: 'KAMIEŃ MILOWY'
    }"""
    }
}

for lang, blocks in data.items():
    # Insert new blocks before the closing '}' of the lang object.
    # We find the lang block.
    # The block ends with "    foundation: { ... }\n  },"
    # We can match `foundation: { ... }` using a regex and append to it.
    
    # Simple strategy: find `foundation: { ... }` block and append our blocks.
    # Since we can't easily parse matching braces with simple regex, we will search for `CERTIFICATIONS',\n    }` 
    # which is the end of the foundation block we just added.
    
    search_str = f"glanceCert: 'CERTIFICATIONS',\n    }}" if lang != "EN" else f"glanceCert: 'CERTIFICATIONS'\n    }}"
    if lang == "EN":
      search_str = "glanceCert: 'CERTIFICATIONS'\n    }"
    elif lang == "JP":
      search_str = "glanceCert: '認証',\n    }"
    elif lang == "ES":
      search_str = "glanceCert: 'CERTIFICACIONES',\n    }"
    elif lang == "DE":
      search_str = "glanceCert: 'ZERTIFIZIERUNGEN',\n    }"
    elif lang == "IL":
      search_str = "glanceCert: 'אישורים',\n    }"
    elif lang == "RU":
      search_str = "glanceCert: 'СЕРТИФИКАЦИЯ',\n    }"
    elif lang == "FR":
      search_str = "glanceCert: 'CERTIFICATIONS',\n    }"
    elif lang == "PL":
      search_str = "glanceCert: 'CERTYFIKATY',\n    }"

    replace_str = search_str + ",\n" + blocks["capGrid"] + ",\n" + blocks["qualityStrip"] + ",\n" + blocks["cta"] + ",\n" + blocks["timeline"]
    content = content.replace(search_str, replace_str)

with open(translations_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Translations expanded successfully.")
