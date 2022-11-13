const data = [
  {
    r: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Tom%20spricht%20den%20Buchstaben%20R%20nicht%20richtig%20aus.&hash=0194npma',
        currentSentence: 'Tom spricht den Buchstaben R nicht richtig aus.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Die%20Bonbonschachtel%20kostet%208%20R%24%20und%20enth%C3%A4lt%2015%20St%C3%BCck.&hash=01nfup18',
        currentSentence: 'Die Bonbonschachtel kostet 8 R$ und enthält 15 Stück.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Nach%2070%20Gesch%C3%A4ftsjahren%20schlie%C3%9Ft%20%E2%80%9EToys%20%E2%80%98R%E2%80%99%20Us%E2%80%9C%20die%20Pforten.&hash=01hutcw5',
        currentSentence: 'Nach 70 Geschäftsjahren schließt „Toys ‘R’ Us“ die Pforten.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Der%20Vollst%C3%A4ndigkeit%20halber%20wollen%20wir%20erw%C3%A4hnen%2C%20dass%20der%20Ring%20R%2C%20als%20Modul%20%C3%BCber%20sich%20selbst%20betrachtet%2C%20Untermoduln%20von%20beliebig%20gro%C3%9Fer%20endlicher%20L%C3%A4nge%20besitzt.&hash=003cn71e',
        currentSentence:
          'Der Vollständigkeit halber wollen wir erwähnen, dass der Ring R, als Modul über sich selbst betrachtet, Untermoduln von beliebig großer endlicher Länge besitzt.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Es%20ist%20eine%20Statistik%20%C3%BCber%20die%20Namen%20der%20im%20Februar%20dieses%20Jahres%202020%20neugeborenen%20Kinder%20herausgekommen.%20Bei%20den%20M%C3%A4dchennamen%20stand%20an%20erster%20Stelle%20Rin%2C%20bei%20den%20Jungennamen%20Ren.&hash=01qou40z',
        currentSentence:
          'Es ist eine Statistik über die Namen der im Februar dieses Jahres 2020 neugeborenen Kinder herausgekommen. Bei den Mädchennamen stand an erster Stelle Rin, bei den Jungennamen Ren.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=In%20den%20Monaten%20ohne%20%E2%80%9Er%E2%80%9C%20soll%20man%20wenig%20k%C3%BCssen%20und%20viel%20trinken.&hash=002rec7g',
        currentSentence: 'In den Monaten ohne „r“ soll man wenig küssen und viel trinken.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Tom%20spricht%20den%20Buchstaben%20%E2%80%9Er%E2%80%9C%20falsch%20aus.&hash=00orlsdv',
        currentSentence: 'Tom spricht den Buchstaben „r“ falsch aus.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Die%20Funktion%20z%20ist%20also%20auf%20einem%20Kreis%20mit%20Radius%20r%20durch%20eine%20Schranke%20M%20beschr%C3%A4nkt.&hash=01js6owe',
        currentSentence: 'Die Funktion z ist also auf einem Kreis mit Radius r durch eine Schranke M beschränkt.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Das%20Esperanto-Alphabet%20enth%C3%A4lt%20achtundzwanzig%20Buchstaben%3A%20a%2C%20b%2C%20c%2C%20%C4%89%2C%20d%2C%20e%2C%20f%2C%20g%2C%20%C4%9D%2C%20h%2C%20%C4%A5%2C%20i%2C%20j%2C%20%C4%B5%2C%20k%2C%20l%2C%20m%2C%20n%2C%20o%2C%20p%2C%20r%2C%20s%2C%20%C5%9D%2C%20t%2C%20u%2C%20%C5%AD%2C%20v%2C%20z.&hash=01lb278e',
        currentSentence:
          'Das Esperanto-Alphabet enthält achtundzwanzig Buchstaben: a, b, c, ĉ, d, e, f, g, ĝ, h, ĥ, i, j, ĵ, k, l, m, n, o, p, r, s, ŝ, t, u, ŭ, v, z.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Der%20achth%C3%A4ufigste%20Buchstabe%20im%20Esperanto%20ist%20%22r%22.&hash=01l143pw',
        currentSentence: 'Der achthäufigste Buchstabe im Esperanto ist "r".'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Es%20ist%20mir%20nie%20gelungen%2C%20meine%20r%20zu%20rollen...&hash=01p9ybba',
        currentSentence: 'Es ist mir nie gelungen, meine r zu rollen...'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20habe%20endlich%20gelernt%2C%20das%20r%20zu%20rollen!&hash=01kql9i2',
        currentSentence: 'Ich habe endlich gelernt, das r zu rollen!'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Die%20%C5%8Csakaner%20rollen%20das%20r%20manchmal%20so%20wie%20im%20Spanischen.&hash=01w22eos',
        currentSentence: 'Die Ōsakaner rollen das r manchmal so wie im Spanischen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Das%20franz%C3%B6sische%20Alphabet%20enth%C3%A4lt%20sechsundzwanzig%20Buchstaben%3A%20a%2C%20b%2C%20c%2C%20d%2C%20e%2C%20f%2C%20g%2C%20h%2C%20i%2C%20j%2C%20k%2C%20l%2C%20m%2C%20n%2C%20o%2C%20p%2C%20q%2C%20r%2C%20s%2C%20t%2C%20u%2C%20v%2C%20w%2C%20x%2C%20y%2C%20z.&hash=01slcsdb',
        currentSentence:
          'Das französische Alphabet enthält sechsundzwanzig Buchstaben: a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20habe%20es%20nie%20geschafft%2C%20das%20r%20zu%20rollen.&hash=011yh0po',
        currentSentence: 'Ich habe es nie geschafft, das r zu rollen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20m%C3%B6chte%20ein%20R-Gespr%C3%A4ch%20nach%20Los%20Angeles%20f%C3%BChren.&hash=00h5ip18',
        currentSentence: 'Ich möchte ein R-Gespräch nach Los Angeles führen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20h%C3%A4tte%20gern%20ein%20R-Gespr%C3%A4ch%20nach%20Japan.&hash=00p64x0c',
        currentSentence: 'Ich hätte gern ein R-Gespräch nach Japan.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Im%20%C5%8Csaka-Dialekt%20kommt%20es%20vor%2C%20dass%20das%20r%20wie%20im%20Spanischen%20gerollt%20wird.&hash=01824mp6',
        currentSentence: 'Im Ōsaka-Dialekt kommt es vor, dass das r wie im Spanischen gerollt wird.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Heute%20sind%20einige%20Artikel%20im%20Gesch%C3%A4ft%20im%20Sonderangebot%20f%C3%BCr%20nur%201%2C99%20R%24%20pro%20St%C3%BCck.&hash=006gfo7j',
        currentSentence: 'Heute sind einige Artikel im Geschäft im Sonderangebot für nur 1,99 R$ pro Stück.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=In%20seinem%20Haus%20in%20R%E2%80%99lyeh%20wartet%20tr%C3%A4umend%20der%20tote%20Cthulhu.&hash=01o0ypuf',
        currentSentence: 'In seinem Haus in R’lyeh wartet träumend der tote Cthulhu.'
      }
    ]
  },
  {
    arbeitest: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Arbeitest%20du%20heute%3F&hash=015rgcxe',
        currentSentence: 'Arbeitest du heute?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Arbeitest%20du%20schon%20lange%20hier%3F&hash=00h6xum9',
        currentSentence: 'Arbeitest du schon lange hier?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Arbeitest%20du%20noch%20in%20Boston%3F&hash=00l9rpwl',
        currentSentence: 'Arbeitest du noch in Boston?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=%E2%80%9EArbeitest%20du%20den%20ganzen%20Tag%3F%E2%80%9C%20%EF%BC%8D%20%E2%80%9EJa%2C%20und%20abends%20mit%20Beleuchtung.%E2%80%9C&hash=00fhq27f',
        currentSentence: '„Arbeitest du den ganzen Tag?“ － „Ja, und abends mit Beleuchtung.“'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Arbeitest%20du%20hier%3F&hash=00w50g4t',
        currentSentence: 'Arbeitest du hier?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Tom%20interessiert%20sich%20f%C3%BCr%20das%20Projekt%2C%20an%20dem%20du%20arbeitest.&hash=01kp04dq',
        currentSentence: 'Tom interessiert sich für das Projekt, an dem du arbeitest.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wann%20arbeitest%20du%3F&hash=008f7aat',
        currentSentence: 'Wann arbeitest du?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Darf%20ich%20fragen%2C%20wo%20du%20arbeitest%3F&hash=01cclftf',
        currentSentence: 'Darf ich fragen, wo du arbeitest?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Offen%20gesagt%2C%20ich%20m%C3%B6chte%20nicht%2C%20dass%20du%20f%C3%BCr%20jene%20Firma%20arbeitest.&hash=00cj5yo8',
        currentSentence: 'Offen gesagt, ich möchte nicht, dass du für jene Firma arbeitest.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Dein%20Erfolg%20h%C3%A4ngt%20davon%20ab%2C%20ob%20du%20arbeitest%20oder%20nicht.&hash=00beerfy',
        currentSentence: 'Dein Erfolg hängt davon ab, ob du arbeitest oder nicht.'
      }
    ]
  },
  {
    schraube: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Diese%20Schraube%20ist%20locker.&hash=01yqnugf',
        currentSentence: 'Diese Schraube ist locker.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Der%20Freund%20von%20Tom%20hat%20eine%20Schraube%20locker.&hash=01m0osab',
        currentSentence: 'Der Freund von Tom hat eine Schraube locker.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Zieh%20die%20Schraube%20etwas%20fester%20an%2C%20Tom!%20Dann%20h%C3%A4lt%20das.&hash=015flyyd',
        currentSentence: 'Zieh die Schraube etwas fester an, Tom! Dann hält das.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=%E2%80%9EIch%20habe%20den%20K%C3%BChlschrank%20repariert.%E2%80%9C%20%E2%80%93%20%E2%80%9EVon%20wegen!%20Du%20hast%20nur%20eine%20kleine%20Schraube%20angezogen.%E2%80%9C&hash=00401i4x',
        currentSentence:
          '„Ich habe den Kühlschrank repariert.“ – „Von wegen! Du hast nur eine kleine Schraube angezogen.“'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20hab%20die%20Schrauben.%20Wo%20sind%20die%20Muttern%3F&hash=0155fn04',
        currentSentence: 'Ich hab die Schrauben. Wo sind die Muttern?'
      }
    ]
  },
  {
    Löschung: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20schlage%20vor%2C%20diesen%20Eintrag%20in%20zwei%20Wochen%20zu%20l%C3%B6schen%C2%A0%E2%80%93%20oder%20fr%C3%BCher%2C%20wenn%20Tom%20die%20L%C3%B6schung%20vornimmt.&hash=00cl7xlq',
        currentSentence:
          'Ich schlage vor, diesen Eintrag in zwei Wochen zu löschen – oder früher, wenn Tom die Löschung vornimmt.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Philosophen%20sind%2C%20entgegen%20einem%20weitverbreiteten%20Urteil%2C%20nicht%20Feuerwehrleute%20zur%20L%C3%B6schung%20brennender%20Probleme%2C%20sondern%20Brandstifter.&hash=018ipgzm',
        currentSentence:
          'Philosophen sind, entgegen einem weitverbreiteten Urteil, nicht Feuerwehrleute zur Löschung brennender Probleme, sondern Brandstifter.'
      }
    ]
  },
  {
    wehtun: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Er%20hat%20nie%20jemandem%20wehgetan.&hash=01nbpari',
        currentSentence: 'Er hat nie jemandem wehgetan.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20habe%20ihm%20niemals%20wehgetan.&hash=00xjevzq',
        currentSentence: 'Ich habe ihm niemals wehgetan.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Sie%20ging%20zur%20Schule%2C%20obwohl%20ihr%20der%20Fu%C3%9F%20wehtat.&hash=01w1yfcx',
        currentSentence: 'Sie ging zur Schule, obwohl ihr der Fuß wehtat.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20dachte%20mir%2C%20dass%20es%20nicht%20wehtun%20w%C3%BCrde%2C%20ein%20paar%20Minuten%20mehr%20zu%20warten.&hash=00z079r9',
        currentSentence: 'Ich dachte mir, dass es nicht wehtun würde, ein paar Minuten mehr zu warten.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20wei%C3%9F%2C%20dass%20du%20nie%20zulassen%20w%C3%BCrdest%2C%20dass%20Tom%20mir%20wehtut.&hash=01bgu9w4',
        currentSentence: 'Ich weiß, dass du nie zulassen würdest, dass Tom mir wehtut.'
      }
    ]
  },
  {
    bunt: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Langsam%20wird%20es%20mir%20zu%20bunt.&hash=01ra2d39',
        currentSentence: 'Langsam wird es mir zu bunt.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Warum%20werden%20Bl%C3%A4tter%20im%20Herbst%20bunt%3F&hash=01hyotvq',
        currentSentence: 'Warum werden Blätter im Herbst bunt?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Maria%20hat%20bunte%20Socken%20gestrickt.&hash=0123m6ia',
        currentSentence: 'Maria hat bunte Socken gestrickt.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20habe%20Schmetterlinge%20im%20Bauch.%20Langsam%20wird%20es%20mir%20zu%20bunt!&hash=01g8tnov',
        currentSentence: 'Ich habe Schmetterlinge im Bauch. Langsam wird es mir zu bunt!'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Dein%20Kleid%20ist%20zu%20bunt%20f%C3%BCr%20eine%20Beerdigung.&hash=01e6ey1q',
        currentSentence: 'Dein Kleid ist zu bunt für eine Beerdigung.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Er%20ist%20bekannt%20wie%20ein%20bunter%20Hund.&hash=01ugcc3o',
        currentSentence: 'Er ist bekannt wie ein bunter Hund.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Du%20siehst%20nur%20Schwarz%20und%20Wei%C3%9F%2C%20doch%20dieses%20Leben%20ist%20bunt.&hash=00yl12cj',
        currentSentence: 'Du siehst nur Schwarz und Weiß, doch dieses Leben ist bunt.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Das%20Buch%20ist%20bunt.&hash=01il9f9d',
        currentSentence: 'Das Buch ist bunt.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ein%20buntes%20Pferd%20verkauft%20man%20gern.&hash=012bpyk4',
        currentSentence: 'Ein buntes Pferd verkauft man gern.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Die%20buntesten%20V%C3%B6gel%20singen%20am%20schlechtesten.%20Das%20gilt%20auch%20f%C3%BCr%20Menschen.&hash=00s1vkw7',
        currentSentence: 'Die buntesten Vögel singen am schlechtesten. Das gilt auch für Menschen.'
      }
    ]
  },
  {
    Flamme: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Die%20ganze%20Welt%20steht%20in%20Flammen.&hash=008e9xh2',
        currentSentence: 'Die ganze Welt steht in Flammen.'
      },
      {
        url: "https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Komm%2C%20setz'%20mein%20Herz%20in%20Flammen!&hash=00xkcddx",
        currentSentence: "Komm, setz' mein Herz in Flammen!"
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Als%20Markku%20Liisas%20Vorschlag%20h%C3%B6rte%2C%20war%20er%20sofort%20Feuer%20und%20Flamme.&hash=00l990xq',
        currentSentence: 'Als Markku Liisas Vorschlag hörte, war er sofort Feuer und Flamme.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Das%20Schiff%20ging%20in%20Flammen%20auf.&hash=00bsm0br',
        currentSentence: 'Das Schiff ging in Flammen auf.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Autos%20waren%20in%20Flammen%2C%20Menschen%20starben%2C%20und%20keiner%20konnte%20ihnen%20helfen.&hash=01a7q3nq',
        currentSentence: 'Autos waren in Flammen, Menschen starben, und keiner konnte ihnen helfen.'
      }
    ]
  },
  {
    sound: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Die%20h%C3%BCgeligen%20Landschaften%20%C3%96sterreichs%20erinnerten%20Herrn%20Bogart%20an%20%22The%20Sound%20of%20Music%22.&hash=00mrmiqz',
        currentSentence: 'Die hügeligen Landschaften Österreichs erinnerten Herrn Bogart an "The Sound of Music".'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Tom%20genoss%20den%20lupenreinen%20Sound%20seiner%20neuen%20HiFi-Stereoanlage.&hash=01xaw4fu',
        currentSentence: 'Tom genoss den lupenreinen Sound seiner neuen HiFi-Stereoanlage.'
      }
    ]
  },
  {
    Betrag: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Es%20handelt%20sich%20um%20einen%20Betrag%20von%201000%20Dollar.&hash=01ryeueh',
        currentSentence: 'Es handelt sich um einen Betrag von 1000 Dollar.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Worauf%20beziehen%20sich%20diese%20Betr%C3%A4ge%3F&hash=01jzpgyj',
        currentSentence: 'Worauf beziehen sich diese Beträge?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Geben%20Sie%20mir%20den%20entsprechenden%20Betrag%20in%20Dollar!&hash=01pgxp5q',
        currentSentence: 'Geben Sie mir den entsprechenden Betrag in Dollar!'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20hielt%20den%20wahren%20Betrag%2C%20den%20ich%20ausgegeben%20hatte%2C%20vor%20ihm%20geheim.&hash=00hmsq3o',
        currentSentence: 'Ich hielt den wahren Betrag, den ich ausgegeben hatte, vor ihm geheim.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Diesen%20Betrag%20k%C3%B6nnen%20wir%20nicht%20zahlen.&hash=00gvcfcv',
        currentSentence: 'Diesen Betrag können wir nicht zahlen.'
      }
    ]
  },
  {
    verschwenden: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Liebe%20ist%20nie%20verschwendet.&hash=0042ln3b',
        currentSentence: 'Liebe ist nie verschwendet.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Jugend%20ist%20an%20die%20Jugendlichen%20verschwendet.&hash=00gyl078',
        currentSentence: 'Jugend ist an die Jugendlichen verschwendet.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Das%20ist%20zu%20wichtig%20f%C3%BCr%20uns%2C%20als%20dass%20wir%20jetzt%20unsere%20Zeit%20verschwenden%20d%C3%BCrften!&hash=00kmoh3c',
        currentSentence: 'Das ist zu wichtig für uns, als dass wir jetzt unsere Zeit verschwenden dürften!'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Liebe%20ist%20das%20einzige%2C%20was%20w%C3%A4chst%2C%20indem%20wir%20es%20verschwenden.&hash=00oa6gm3',
        currentSentence: 'Liebe ist das einzige, was wächst, indem wir es verschwenden.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20kann%20es%20mir%20nicht%20leisten%2C%20meine%20Zeit%20damit%20zu%20verschwenden%2C%20Geld%20zu%20verdienen.&hash=00lzz7y7',
        currentSentence: 'Ich kann es mir nicht leisten, meine Zeit damit zu verschwenden, Geld zu verdienen.'
      }
    ]
  },
  {
    momentan: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Momentan%20arbeiten%20wir.&hash=01b3r2sv',
        currentSentence: 'Momentan arbeiten wir.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Momentan%20ben%C3%B6tige%20ich%20nichts.&hash=000cdcuk',
        currentSentence: 'Momentan benötige ich nichts.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Momentan%20brauche%20ich%20kein%20Geld.&hash=01bvj0qk',
        currentSentence: 'Momentan brauche ich kein Geld.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20mache%20vieles%20gleichzeitig%2C%20daher%20lese%20ich%20nicht%20nur%20Akutagawa.%20Momentan%20verbringe%20ich%20zunehmend%20mehr%20Zeit%20mit%20Englisch%20lesen.%20Auch%20Deutsch%20lese%20ich%20jeden%20Tag%20ein%20bisschen.&hash=00v5ralk',
        currentSentence:
          'Ich mache vieles gleichzeitig, daher lese ich nicht nur Akutagawa. Momentan verbringe ich zunehmend mehr Zeit mit Englisch lesen. Auch Deutsch lese ich jeden Tag ein bisschen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20suche%20einen%20Studentenjob%2C%20wo%20ich%20nebenbei%20B%C3%BCcher%20lesen%20kann%20und%20wo%20ich%20mir%20nicht%20den%20ganzen%20Tag%20die%20Beine%20in%20den%20Bauch%20stehen%20muss.%20Momentan%20arbeite%20ich%20bei%20McDonalds%20und%20bin%20nach%20der%20Arbeit%20immer%20fix%20und%20fertig.%20Das%20Studium%20bleibt%20dabei%20auf%20der%20Stecke.&hash=0137kym2',
        currentSentence:
          'Ich suche einen Studentenjob, wo ich nebenbei Bücher lesen kann und wo ich mir nicht den ganzen Tag die Beine in den Bauch stehen muss. Momentan arbeite ich bei McDonalds und bin nach der Arbeit immer fix und fertig. Das Studium bleibt dabei auf der Stecke.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Die%20Arbeit%20nimmt%20mich%20momentan%20sehr%20in%20Anspruch.&hash=00135jyh',
        currentSentence: 'Die Arbeit nimmt mich momentan sehr in Anspruch.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=L%C3%A4uft%20bei%20dir%20Tatoeba%20momentan%20auch%20so%20langsam%3F&hash=00ipztsw',
        currentSentence: 'Läuft bei dir Tatoeba momentan auch so langsam?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20habe%20momentan%20etwas%20freie%20Zeit.&hash=01mnvea4',
        currentSentence: 'Ich habe momentan etwas freie Zeit.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Das%20spielt%20momentan%20keine%20Rolle.&hash=000o5nw2',
        currentSentence: 'Das spielt momentan keine Rolle.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20kann%20dir%20momentan%20nichts%20erz%C3%A4hlen.&hash=01dlk18h',
        currentSentence: 'Ich kann dir momentan nichts erzählen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Was%20l%C3%A4uft%20momentan%20im%20Kino%3F&hash=001oc0fj',
        currentSentence: 'Was läuft momentan im Kino?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wir%20arbeiten%20momentan.&hash=00ieyx69',
        currentSentence: 'Wir arbeiten momentan.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Der%20Euro%20verliert%20momentan%20an%20Wert.&hash=01dsmzc1',
        currentSentence: 'Der Euro verliert momentan an Wert.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Was%20macht%20deine%20Schwester%20momentan%3F&hash=00bvpgw7',
        currentSentence: 'Was macht deine Schwester momentan?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Diese%20Musik%20passt%20zu%20meiner%20momentanen%20Stimmung.&hash=00bz99xz',
        currentSentence: 'Diese Musik passt zu meiner momentanen Stimmung.'
      }
    ]
  },
  {
    Labor: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Er%20arbeitet%20in%20jenem%20Labor.&hash=00cqotfv',
        currentSentence: 'Er arbeitet in jenem Labor.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Experimente%20werden%20in%20einem%20Labor%20durchgef%C3%BChrt.&hash=003du9hg',
        currentSentence: 'Experimente werden in einem Labor durchgeführt.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Tom%20hat%20keinen%20Zugang%20zum%20Labor.&hash=005mv7bl',
        currentSentence: 'Tom hat keinen Zugang zum Labor.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20habe%20das%20kleine%20Labor%20betreten.&hash=01bnkcql',
        currentSentence: 'Ich habe das kleine Labor betreten.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Dieses%20Labor%20ist%20mit%20den%20aktuellsten%20Rechnern%20ausgestattet.&hash=0180ka99',
        currentSentence: 'Dieses Labor ist mit den aktuellsten Rechnern ausgestattet.'
      }
    ]
  },
  {
    Militär: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Hast%20du%20Marika%20kennengelernt%2C%20bevor%20oder%20nachdem%20du%20zum%20Milit%C3%A4r%20gegangen%20bist%3F&hash=009d64jb',
        currentSentence: 'Hast du Marika kennengelernt, bevor oder nachdem du zum Militär gegangen bist?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Tom%20und%20Johannes%20waren%20zusammen%20beim%20Milit%C3%A4r.&hash=013n6i1m',
        currentSentence: 'Tom und Johannes waren zusammen beim Militär.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Kennst%20du%20den%20Namen%20des%20erfolgreichsten%20Milit%C3%A4rs%20aus%20dieser%20Gegend%3F&hash=012q71vm',
        currentSentence: 'Kennst du den Namen des erfolgreichsten Militärs aus dieser Gegend?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Die%20Regierung%20bat%20das%20Milit%C3%A4r%20eine%20Katastrophen-Truppe%20nach%20Okinawa%20zu%20schicken.&hash=01oc6xen',
        currentSentence: 'Die Regierung bat das Militär eine Katastrophen-Truppe nach Okinawa zu schicken.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Sind%20in%20Afghanistan%20Milit%C3%A4r%20und%20Polizei%20von%20Taliban%20infiltriert%3F&hash=01ut6yn0',
        currentSentence: 'Sind in Afghanistan Militär und Polizei von Taliban infiltriert?'
      }
    ]
  },
  {
    versehen: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ehe%20man%20sichs%20versieht%2C%20ist%20das%20Leben%20auch%20schon%20wieder%20vorbei.&hash=003xiq5h',
        currentSentence: 'Ehe man sichs versieht, ist das Leben auch schon wieder vorbei.'
      },
      {
        url: "https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ehe%20man%20sich's%20versah%2C%20war%20er%20auch%20schon%20wieder%20weg.&hash=00gptd8i",
        currentSentence: "Ehe man sich's versah, war er auch schon wieder weg."
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Und%20bevor%20wir%20uns%20versehen%2C%20steht%20Weihnachten%20vor%20der%20T%C3%BCr.&hash=009g1mq5',
        currentSentence: 'Und bevor wir uns versehen, steht Weihnachten vor der Tür.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Er%20versah%20seinen%20Dienst%20schlecht.&hash=00xt7055',
        currentSentence: 'Er versah seinen Dienst schlecht.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Der%20Gefangene%20ist%20mit%20Ketten%20versehen.&hash=010pansq',
        currentSentence: 'Der Gefangene ist mit Ketten versehen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Das%20war%20nur%20ein%20Versehen%20von%20dir.%20Deswegen%20geht%20die%20Welt%20nicht%20unter.&hash=00grwxx3',
        currentSentence: 'Das war nur ein Versehen von dir. Deswegen geht die Welt nicht unter.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Er%20nahm%20aus%20Versehen%20den%20falschen%20Bus.&hash=01vggw57',
        currentSentence: 'Er nahm aus Versehen den falschen Bus.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20glaube%2C%20ich%20habe%20die%20Datei%20aus%20Versehen%20gel%C3%B6scht.&hash=01db3dii',
        currentSentence: 'Ich glaube, ich habe die Datei aus Versehen gelöscht.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Er%20hat%20mich%20aus%20Versehen%20geschlagen.&hash=01kck07d',
        currentSentence: 'Er hat mich aus Versehen geschlagen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Jemand%20hat%20aus%20Versehen%20meine%20Schuhe%20genommen.&hash=01k4npuh',
        currentSentence: 'Jemand hat aus Versehen meine Schuhe genommen.'
      }
    ]
  },
  {
    jünger: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Meine%20Schwester%20ist%20j%C3%BCnger%20als%20ich.&hash=01cayxo8',
        currentSentence: 'Meine Schwester ist jünger als ich.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Mein%20Bruder%20ist%20j%C3%BCnger%20als%20ich.&hash=00dpcp8r',
        currentSentence: 'Mein Bruder ist jünger als ich.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Mein%20%C3%A4ltester%20Bruder%20ist%20j%C3%BCnger%20als%20ich.&hash=01ffot6s',
        currentSentence: 'Mein ältester Bruder ist jünger als ich.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Kein%20kluger%20Mensch%20hat%20jemals%20gew%C3%BCnscht%2C%20j%C3%BCnger%20zu%20sein.&hash=01slh5dl',
        currentSentence: 'Kein kluger Mensch hat jemals gewünscht, jünger zu sein.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wir%20werden%20%C3%A4lter%2C%20unsere%20%C3%9Cbel%20werden%20j%C3%BCnger.&hash=009ht2mi',
        currentSentence: 'Wir werden älter, unsere Übel werden jünger.'
      }
    ]
  },
  {
    level: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Du%20hast%20keine%20Leben%20mehr!%20M%C3%B6chtest%20du%20dieses%20Level%20noch%20einmal%20versuchen%3F&hash=00wyay0o',
        currentSentence: 'Du hast keine Leben mehr! Möchtest du dieses Level noch einmal versuchen?'
      }
    ]
  },
  {
    beseitigen: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Die%20meisten%20Besch%C3%A4digungen%20sollten%20sich%20beseitigen%20lassen.&hash=00v4y03q',
        currentSentence: 'Die meisten Beschädigungen sollten sich beseitigen lassen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Lieber%20schweigen%20und%20f%C3%BCr%20dumm%20gehalten%20werden%2C%20als%20den%20Mund%20aufmachen%20und%20alle%20Zweifel%20dar%C3%BCber%20beseitigen.&hash=01i8if08',
        currentSentence:
          'Lieber schweigen und für dumm gehalten werden, als den Mund aufmachen und alle Zweifel darüber beseitigen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Was%20unserem%20Fortkommen%20im%20Wege%20stand%2C%20ist%20endlich%20beseitigt.&hash=0181q7ll',
        currentSentence: 'Was unserem Fortkommen im Wege stand, ist endlich beseitigt.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Will%20man%20Frieden%20erreichen%2C%20muss%20man%20die%20%C3%9Cberheblichkeit%2C%20den%20Geiz%20und%20den%20Machthunger%20beseitigen.&hash=00vyn08w',
        currentSentence:
          'Will man Frieden erreichen, muss man die Überheblichkeit, den Geiz und den Machthunger beseitigen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wir%20k%C3%B6nnen%20extreme%20Armut%20nur%20beseitigen%2C%20wenn%20die%20von%20uns%20gesetzten%20Ziele%20f%C3%BCr%20eine%20nachhaltige%20Entwicklung%20mehr%20sind%20als%20nur%20Worte%20auf%20dem%20Papier.&hash=005ffa0d',
        currentSentence:
          'Wir können extreme Armut nur beseitigen, wenn die von uns gesetzten Ziele für eine nachhaltige Entwicklung mehr sind als nur Worte auf dem Papier.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Der%20Fehler%20besteht%20leider%20weiter.%20Gibt%20es%20immer%20noch%20keine%20M%C3%B6glichkeit%2C%20ihn%20zu%20beseitigen%3F&hash=007mxi70',
        currentSentence: 'Der Fehler besteht leider weiter. Gibt es immer noch keine Möglichkeit, ihn zu beseitigen?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Dieses%20Problem%20kann%20nur%20und%20ausschlie%C3%9Flich%20Tom%20beseitigen.&hash=002e84db',
        currentSentence: 'Dieses Problem kann nur und ausschließlich Tom beseitigen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20versuchte%20alle%20Zweifel%20zu%20beseitigen.&hash=0098mm71',
        currentSentence: 'Ich versuchte alle Zweifel zu beseitigen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Die%20Gewalt%20muss%20beseitigt%20werden.&hash=00t4ldlz',
        currentSentence: 'Die Gewalt muss beseitigt werden.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Es%20ist%20unm%C3%B6glich%2C%20den%20Schnee%20von%20allen%20Stra%C3%9Fen%20zu%20beseitigen.&hash=0069kgnp',
        currentSentence: 'Es ist unmöglich, den Schnee von allen Straßen zu beseitigen.'
      }
    ]
  },
  {
    riskieren: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Sie%20riskiert%20ihren%20Job.&hash=001b0ldb',
        currentSentence: 'Sie riskiert ihren Job.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=V%C3%B6llig%20unm%C3%B6glich%20ist%20es%20nicht.%20Aber%20ich%20w%C3%BCrde%20es%20nicht%20riskieren.&hash=000sze3p',
        currentSentence: 'Völlig unmöglich ist es nicht. Aber ich würde es nicht riskieren.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Manchmal%20ist%20nichts%20zu%20riskieren%20der%20sicherste%20Weg%2C%20um%20zu%20verlieren.&hash=013j2pu4',
        currentSentence: 'Manchmal ist nichts zu riskieren der sicherste Weg, um zu verlieren.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20riskiere%20es%2C%20mein%20eigenes%20Leben%20zu%20leben.&hash=01edqhw4',
        currentSentence: 'Ich riskiere es, mein eigenes Leben zu leben.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Das%20Leben%20ist%20ein%20Spiel.%20Man%20macht%20keine%20gr%C3%B6%C3%9Feren%20Gewinne%2C%20ohne%20Verluste%20zu%20riskieren.&hash=00erp6x4',
        currentSentence: 'Das Leben ist ein Spiel. Man macht keine größeren Gewinne, ohne Verluste zu riskieren.'
      }
    ]
  },
  {
    Jude: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Er%20war%20gl%C3%BCcklich%2C%20ein%20Jude%20zu%20sein.&hash=01ddm5ve',
        currentSentence: 'Er war glücklich, ein Jude zu sein.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Jerusalem%20ist%20die%20heilige%20Stadt%20der%20Juden.&hash=002zja42',
        currentSentence: 'Jerusalem ist die heilige Stadt der Juden.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20habe%20einen%20Nachbarn%2C%20der%20Jude%20ist.&hash=004uf7yj',
        currentSentence: 'Ich habe einen Nachbarn, der Jude ist.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Die%20Welt%20hat%20den%20Juden%20alles%20genommen%20und%20das%20hat%20sie%20uns%20nie%20vergeben.&hash=004qs43w',
        currentSentence: 'Die Welt hat den Juden alles genommen und das hat sie uns nie vergeben.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ein%20sehr%20ber%C3%BChmter%20Jude%20ist%20bei%20uns%20zu%20Gast.&hash=00hi6jap',
        currentSentence: 'Ein sehr berühmter Jude ist bei uns zu Gast.'
      }
    ]
  },
  {
    y: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Der%20Wert%20des%20Yen%20ist%20stark%20gestiegen.&hash=00ruhlbn',
        currentSentence: 'Der Wert des Yen ist stark gestiegen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20m%C3%B6chte%20gern%20den%20genauen%20Wechselkurs%20des%20Yen%20wissen.&hash=0162vaca',
        currentSentence: 'Ich möchte gern den genauen Wechselkurs des Yen wissen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Man%20erwartet%20einen%20Wertverlust%20des%20Yen%20gegen%C3%BCber%20dem%20Dollar.&hash=015z8u0d',
        currentSentence: 'Man erwartet einen Wertverlust des Yen gegenüber dem Dollar.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Tom%20wechselte%20circa%20die%20H%C3%A4lfte%20seiner%20Yen%20in%20Dollar%20um%20und%20die%20andere%20H%C3%A4lfte%20in%20Euro.&hash=018e68hx',
        currentSentence: 'Tom wechselte circa die Hälfte seiner Yen in Dollar um und die andere Hälfte in Euro.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Rhabdomantie%20ist%20jene%20geheimnisvolle%20F%C3%A4higkeit%2C%20die%20manche%20Menschen%20zu%20besitzen%20behaupten%20und%20die%20ihnen%20erlauben%20w%C3%BCrde%2C%20unterirdisches%20Wasser%20mit%20Hilfe%20einer%20Y-f%C3%B6rmigen%20Rute%20oder%20einem%20Pendel%20zu%20finden.&hash=00uplu48',
        currentSentence:
          'Rhabdomantie ist jene geheimnisvolle Fähigkeit, die manche Menschen zu besitzen behaupten und die ihnen erlauben würde, unterirdisches Wasser mit Hilfe einer Y-förmigen Rute oder einem Pendel zu finden.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Das%20franz%C3%B6sische%20Alphabet%20enth%C3%A4lt%20sechsundzwanzig%20Buchstaben%3A%20a%2C%20b%2C%20c%2C%20d%2C%20e%2C%20f%2C%20g%2C%20h%2C%20i%2C%20j%2C%20k%2C%20l%2C%20m%2C%20n%2C%20o%2C%20p%2C%20q%2C%20r%2C%20s%2C%20t%2C%20u%2C%20v%2C%20w%2C%20x%2C%20y%2C%20z.&hash=01slcsdb',
        currentSentence:
          'Das französische Alphabet enthält sechsundzwanzig Buchstaben: a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=K%C3%B6nnen%20Sie%20mir%20diesen%20Tausend-Yen-Schein%20wechseln%3F&hash=00ep38wp',
        currentSentence: 'Können Sie mir diesen Tausend-Yen-Schein wechseln?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Damals%20kostete%20eine%20Tasse%20Kaffee%20200%20Yen.&hash=01oo2pas',
        currentSentence: 'Damals kostete eine Tasse Kaffee 200 Yen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wie%20viel%20L%C3%A4nder%20beginnen%20mit%20dem%20Buchstabe%20Y%3F&hash=00coqus7',
        currentSentence: 'Wie viel Länder beginnen mit dem Buchstabe Y?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Das%205-Yen-St%C3%BCck%20besteht%20aus%20Messing%2C%20das%2010-Yen-St%C3%BCck%20aus%20Bronze.&hash=01x2b41l',
        currentSentence: 'Das 5-Yen-Stück besteht aus Messing, das 10-Yen-Stück aus Bronze.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Die%20Funktion%20y%20%3D%201%20ist%20eine%20Gerade%20parallel%20zur%20x-Achse.&hash=01sp4leh',
        currentSentence: 'Die Funktion y = 1 ist eine Gerade parallel zur x-Achse.'
      }
    ]
  },
  {
    Bogen: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Des%20Bogens%20Name%20ist%20also%20Leben%2C%20sein%20Werk%20Tod.&hash=017e7vwb',
        currentSentence: 'Des Bogens Name ist also Leben, sein Werk Tod.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Tom%20hat%20den%20Bogen%20raus.&hash=00zq380o',
        currentSentence: 'Tom hat den Bogen raus.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Hier%20macht%20der%20Fluss%20einen%20leichten%20Bogen%20nach%20links.&hash=01l7bzjg',
        currentSentence: 'Hier macht der Fluss einen leichten Bogen nach links.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20habe%20von%20einem%20Bogen%20getr%C3%A4umt.&hash=009ceqf6',
        currentSentence: 'Ich habe von einem Bogen geträumt.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Mach%20bitte%20einen%20Bogen%20um%20ihn.&hash=00ky3a36',
        currentSentence: 'Mach bitte einen Bogen um ihn.'
      }
    ]
  },
  {
    buchen: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Haben%20Sie%20auch%20das%20Hotel%20gebucht%3F&hash=01xah7yl',
        currentSentence: 'Haben Sie auch das Hotel gebucht?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20m%C3%B6chte%20einen%20Flug%20nach%20Paris%20buchen.&hash=005ejtza',
        currentSentence: 'Ich möchte einen Flug nach Paris buchen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20habe%20uns%20einen%20fr%C3%BCheren%20Flug%20gebucht.&hash=00qge6fp',
        currentSentence: 'Ich habe uns einen früheren Flug gebucht.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Lasst%20uns%20Tennis%20spielen.%20Ich%20habe%20f%C3%BCr%2010%3A30%20einen%20Platz%20gebucht.&hash=01u3s4uy',
        currentSentence: 'Lasst uns Tennis spielen. Ich habe für 10:30 einen Platz gebucht.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20rate%20Ihnen%2C%20Fl%C3%BCge%20sechs%20Monate%20vor%20dem%20gew%C3%BCnschten%20Termin%20zu%20buchen.&hash=01bqy67k',
        currentSentence: 'Ich rate Ihnen, Flüge sechs Monate vor dem gewünschten Termin zu buchen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Sie%20hat%20ein%20Zimmer%20gebucht.&hash=00wqrfzm',
        currentSentence: 'Sie hat ein Zimmer gebucht.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wir%20haben%20ein%20Zimmer%20in%20einem%20Vier-Sterne-Hotel%20gebucht.&hash=01nqw8gc',
        currentSentence: 'Wir haben ein Zimmer in einem Vier-Sterne-Hotel gebucht.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Er%20hat%20ein%20Ticket%20nach%20Paris%20gebucht.&hash=00meuyhp',
        currentSentence: 'Er hat ein Ticket nach Paris gebucht.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Sie%20haben%20die%20Reise%20im%20Reiseb%C3%BCro%20gebucht.&hash=01dfxo9c',
        currentSentence: 'Sie haben die Reise im Reisebüro gebucht.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Maria%20und%20Tom%20haben%20kein%20Hotelzimmer%20gebucht%2C%20sondern%20eine%20Ferienwohnung.&hash=00999zg5',
        currentSentence: 'Maria und Tom haben kein Hotelzimmer gebucht, sondern eine Ferienwohnung.'
      }
    ]
  },
  {
    Meile: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Auch%20eine%20Reise%20von%20tausend%20Meilen%20beginnt%20mit%20einem%20Schritt.&hash=00pc8eo1',
        currentSentence: 'Auch eine Reise von tausend Meilen beginnt mit einem Schritt.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Lola%20schwimmt%20eine%20Meile%20pro%20Woche.&hash=01xpz5w2',
        currentSentence: 'Lola schwimmt eine Meile pro Woche.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Mein%20Land%20ist%20zehntausend%20Meilen%20von%20seinem%20entfernt.&hash=00ifliu1',
        currentSentence: 'Mein Land ist zehntausend Meilen von seinem entfernt.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Fang%20nie%20mit%20dem%20Anfang%20an%2C%20sondern%20immer%20drei%20Meilen%20vor%20dem%20Anfang!&hash=012k1ou6',
        currentSentence: 'Fang nie mit dem Anfang an, sondern immer drei Meilen vor dem Anfang!'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Es%20sind%20ungef%C3%A4hr%20f%C3%BCnf%20Meilen.&hash=0189q9nf',
        currentSentence: 'Es sind ungefähr fünf Meilen.'
      }
    ]
  },
  {
    Führer: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ein%20F%C3%BChrer%2C%20das%20ist%20einer%2C%20der%20die%20anderen%20unendlich%20n%C3%B6tig%20hat.&hash=00qxskgz',
        currentSentence: 'Ein Führer, das ist einer, der die anderen unendlich nötig hat.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20kaufte%20mir%20einen%20F%C3%BChrer%20durch%20Tirol.&hash=01u5b158',
        currentSentence: 'Ich kaufte mir einen Führer durch Tirol.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Zum%20Dorf%2C%20das%20man%20sieht%2C%20braucht%20man%20keinen%20F%C3%BChrer.&hash=00epz40u',
        currentSentence: 'Zum Dorf, das man sieht, braucht man keinen Führer.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Sie%20betrachteten%20ihn%20als%20ihren%20F%C3%BChrer.&hash=0033u0uq',
        currentSentence: 'Sie betrachteten ihn als ihren Führer.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Der%20F%C3%BChrer%20f%C3%BChrte%20die%20Gruppe%20durch%20das%20Museum.&hash=0185npvc',
        currentSentence: 'Der Führer führte die Gruppe durch das Museum.'
      }
    ]
  },
  {
    endgültig: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Bevor%20ich%20eine%20endg%C3%BCltige%20Entscheidung%20treffe%2C%20muss%20ich%20es%20mir%20noch%20einmal%20%C3%BCberlegen.&hash=01nbehv1',
        currentSentence: 'Bevor ich eine endgültige Entscheidung treffe, muss ich es mir noch einmal überlegen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Die%20Entscheidung%20des%20Richters%20ist%20endg%C3%BCltig.&hash=00r83cb3',
        currentSentence: 'Die Entscheidung des Richters ist endgültig.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Auf%20einmal%20ist%20alles%20endg%C3%BCltig%2C%20und%20die%20Verluste%20z%C3%A4hlen%20anders.&hash=0048ctls',
        currentSentence: 'Auf einmal ist alles endgültig, und die Verluste zählen anders.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Morgen%20ist%20endg%C3%BCltig%20Schluss.&hash=00w5ycwl',
        currentSentence: 'Morgen ist endgültig Schluss.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20glaube%2C%20jetzt%20hat%20Tom%20endg%C3%BCltig%20den%20Verstand%20verloren.&hash=01q8e6vd',
        currentSentence: 'Ich glaube, jetzt hat Tom endgültig den Verstand verloren.'
      }
    ]
  },
  {
    wundervoll: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20w%C3%BCnsche%20jedem%20ein%20wundervolles%20Wochenende.&hash=01db8dcf',
        currentSentence: 'Ich wünsche jedem ein wundervolles Wochenende.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Sie%20hat%20eine%20wundervolle%20Pers%C3%B6nlichkeit.&hash=014lsa69',
        currentSentence: 'Sie hat eine wundervolle Persönlichkeit.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Toms%20Musik%20ist%20wundervoll.&hash=01hppct2',
        currentSentence: 'Toms Musik ist wundervoll.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Die%20Schweiz%20ist%20ein%20wundervolles%20Land%2C%20das%20einen%20Besuch%20wert%20ist.&hash=00yq02k3',
        currentSentence: 'Die Schweiz ist ein wundervolles Land, das einen Besuch wert ist.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Die%20Medizin%20hatte%20eine%20wundervolle%20Wirkung%20auf%20ihn.&hash=00vgay4u',
        currentSentence: 'Die Medizin hatte eine wundervolle Wirkung auf ihn.'
      }
    ]
  },
  {
    erholen: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20habe%20mich%20noch%20nicht%20von%20dieser%20Krankheit%20erholt.&hash=003a76ct',
        currentSentence: 'Ich habe mich noch nicht von dieser Krankheit erholt.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Endlich%20ist%20es%20Freitag.%20Habt%20ein%20sch%C3%B6nes%20Wochenende!%20Erholt%20euch%20etwas!&hash=001zag2f',
        currentSentence: 'Endlich ist es Freitag. Habt ein schönes Wochenende! Erholt euch etwas!'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20muss%20mich%20alle%20zwei%20Jahre%20an%20der%20See%20erholen.&hash=00o33ez8',
        currentSentence: 'Ich muss mich alle zwei Jahre an der See erholen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Der%20Patient%20erholt%20sich%20von%20seiner%20Krankheit.&hash=00vvtw4h',
        currentSentence: 'Der Patient erholt sich von seiner Krankheit.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Tom%20erholte%20sich%20schneller%2C%20als%20wir%20erwartet%20hatten.&hash=00keb7i6',
        currentSentence: 'Tom erholte sich schneller, als wir erwartet hatten.'
      }
    ]
  },
  {
    lade: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Lade%20nicht%20alles%20in%20ein%20Schiff.&hash=00ip48d9',
        currentSentence: 'Lade nicht alles in ein Schiff.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Lade%20uns%20zum%20Abendessen%20ins%20Restaurant%20ein.&hash=00x59lux',
        currentSentence: 'Lade uns zum Abendessen ins Restaurant ein.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Lade%20deinen%20Freund%20zum%20Essen%20ein.&hash=0067x2tf',
        currentSentence: 'Lade deinen Freund zum Essen ein.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Lade%20sie%20zu%20uns%20ein!&hash=00h37l03',
        currentSentence: 'Lade sie zu uns ein!'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Lade%20sie%20doch%20mal%20hierher%20ein!&hash=007ir69p',
        currentSentence: 'Lade sie doch mal hierher ein!'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20lade%20dich%20dazu%20ein%2C%20mich%20auf%20meinem%20Weg%20zu%20begleiten.&hash=01ft3vhz',
        currentSentence: 'Ich lade dich dazu ein, mich auf meinem Weg zu begleiten.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Heute%20lade%20ich%20dich%20zum%20Essen%20ein.&hash=00119frb',
        currentSentence: 'Heute lade ich dich zum Essen ein.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20lade%20gerne%20meine%20Freunde%20zu%20mir%20nach%20Hause%20ein.&hash=0115qgx7',
        currentSentence: 'Ich lade gerne meine Freunde zu mir nach Hause ein.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Das%20n%C3%A4chste%20Mal%20lade%20ich%20dich%20ein.&hash=01saap37',
        currentSentence: 'Das nächste Mal lade ich dich ein.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Komm%2C%20ich%20lade%20dich%20auf%20eine%20Currywurst%20ein!&hash=0016bt3g',
        currentSentence: 'Komm, ich lade dich auf eine Currywurst ein!'
      }
    ]
  },
  {
    Bearbeitung: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ihre%20englische%20Bearbeitung%20hat%20nur%20wenige%20Fehler.&hash=00cnx4mt',
        currentSentence: 'Ihre englische Bearbeitung hat nur wenige Fehler.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Die%20Verwaltung%20lie%C3%9F%20sich%20viel%20Zeit%20mit%20der%20Bearbeitung%20des%20Antrags.&hash=00q43ox0',
        currentSentence: 'Die Verwaltung ließ sich viel Zeit mit der Bearbeitung des Antrags.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=F%C3%BCr%20die%20Bearbeitung%20veranlagen%20wir%20pauschal%20eine%20Geb%C3%BChr%20von%2015%C2%A0%E2%82%AC.&hash=01k70q7i',
        currentSentence: 'Für die Bearbeitung veranlagen wir pauschal eine Gebühr von 15 €.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=F%C3%BCr%2095%20Prozent%20aller%20spanenden%20Bearbeitungen%20werden%20Genauigkeit%20und%20Oberfl%C3%A4cheng%C3%BCte%20wichtiger%20als%20hohe%20Zerspanleistungen.&hash=01eyv2ap',
        currentSentence:
          'Für 95 Prozent aller spanenden Bearbeitungen werden Genauigkeit und Oberflächengüte wichtiger als hohe Zerspanleistungen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20weigere%20mich%2C%20das%20von%20Tom%20abgegebene%20Geschmiere%2C%20das%20er%20seine%20Bearbeitung%20der%20Hausaufgaben%20nennt%2C%20auch%20nur%20anzusehen.%20Ein%20bisschen%20mehr%20M%C3%BChe%20kann%20er%20sich%20schon%20geben.&hash=00tqevcy',
        currentSentence:
          'Ich weigere mich, das von Tom abgegebene Geschmiere, das er seine Bearbeitung der Hausaufgaben nennt, auch nur anzusehen. Ein bisschen mehr Mühe kann er sich schon geben.'
      }
    ]
  },
  {
    unerwartet: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Der%20Pr%C3%A4sident%20starb%20unerwartet.&hash=019i7tyt',
        currentSentence: 'Der Präsident starb unerwartet.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Das%20ist%20ziemlich%20unerwartet.&hash=01tdlxpc',
        currentSentence: 'Das ist ziemlich unerwartet.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wir%20hatten%20unerwarteten%20Besuch.&hash=018istby',
        currentSentence: 'Wir hatten unerwarteten Besuch.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20wurde%20von%20dieser%20unerwarteten%20Neuigkeit%20%C3%BCberrascht.&hash=01sum177',
        currentSentence: 'Ich wurde von dieser unerwarteten Neuigkeit überrascht.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Er%20schaut%20immer%20unerwartet%20bei%20mir%20zuhause%20vorbei.&hash=00c2xst6',
        currentSentence: 'Er schaut immer unerwartet bei mir zuhause vorbei.'
      }
    ]
  },
  {
    Legende: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Das%20ist%20der%20Stoff%2C%20aus%20dem%20Legenden%20gemacht%20werden.&hash=00wfm2fo',
        currentSentence: 'Das ist der Stoff, aus dem Legenden gemacht werden.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Du%20bist%20eine%20lebende%20Legende.&hash=000jgmel',
        currentSentence: 'Du bist eine lebende Legende.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Pr%C3%A4sident%20Kennedy%20wurde%20get%C3%B6tet%2C%20doch%20seine%20Legende%20wird%20die%20Zeit%20%C3%BCberleben.&hash=019aaz1k',
        currentSentence: 'Präsident Kennedy wurde getötet, doch seine Legende wird die Zeit überleben.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Der%20Legende%20nach%20soll%20sein%20Schwert%20er%20von%20den%20G%C3%B6ttern%20selbst%20empfangen%20haben.&hash=00e70um5',
        currentSentence: 'Der Legende nach soll sein Schwert er von den Göttern selbst empfangen haben.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Der%20Name%20dieses%20Platzes%20geht%20auf%20eine%20Legende%20zur%C3%BCck.&hash=009jz7ni',
        currentSentence: 'Der Name dieses Platzes geht auf eine Legende zurück.'
      }
    ]
  },
  {
    eintreten: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Klopfen%20Sie%20bitte%20vor%20dem%20Eintreten.&hash=01duc5fb',
        currentSentence: 'Klopfen Sie bitte vor dem Eintreten.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Zieht%20euch%20vor%20dem%20Eintreten%20die%20Schuhe%20aus.&hash=01u94j2f',
        currentSentence: 'Zieht euch vor dem Eintreten die Schuhe aus.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Sein%20%C3%B6ffentliches%20Eintreten%20f%C3%BCr%20die%20britische%20Regierung%20kam%20schlecht%20an.&hash=007xv86l',
        currentSentence: 'Sein öffentliches Eintreten für die britische Regierung kam schlecht an.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Vor%20dem%20Eintreten%20duschen!&hash=00ohd5h0',
        currentSentence: 'Vor dem Eintreten duschen!'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Eintreten%2C%20ohne%20anzuklopfen%C2%A0%E2%80%93%20das%20haben%20wir%20gern.%20Was%20wollen%20Sie%20denn%2C%20M%C3%BCller%3F&hash=001rydvz',
        currentSentence: 'Eintreten, ohne anzuklopfen – das haben wir gern. Was wollen Sie denn, Müller?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wer%20ins%20Spiel%20eintritt%2C%20muss%20spielen.&hash=00lstyac',
        currentSentence: 'Wer ins Spiel eintritt, muss spielen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Dass%20Sie%20sp%C3%A4ter%20eintreten%20d%C3%BCrfen%2C%20das%20ist%20m%C3%B6glich%2C%20jetzt%20aber%20d%C3%BCrfen%20Sie%20nicht%20eintreten.&hash=00or1kr8',
        currentSentence: 'Dass Sie später eintreten dürfen, das ist möglich, jetzt aber dürfen Sie nicht eintreten.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20machte%20einen%20Schritt%20zu%20Seite%2C%20um%20ihn%20eintreten%20zu%20lassen.&hash=01hlt64p',
        currentSentence: 'Ich machte einen Schritt zu Seite, um ihn eintreten zu lassen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Eintritt%20nur%20f%C3%BCr%20Personal.&hash=00i44uo2',
        currentSentence: 'Eintritt nur für Personal.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Du%20kannst%20nicht%20eintreten.%20Es%20ist%20verboten.&hash=0106xd8b',
        currentSentence: 'Du kannst nicht eintreten. Es ist verboten.'
      }
    ]
  },
  {
    Politiker: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wenn%20du%20das%20glaubst%2C%20was%20Politiker%20sagen%2C%20bist%20du%20wirklich%20selbst%20schuld.&hash=00ktf113',
        currentSentence: 'Wenn du das glaubst, was Politiker sagen, bist du wirklich selbst schuld.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wenn%20du%20wissen%20willst%2C%20wie%20viele%20Menschen%20nicht%20f%C3%BCr%20dich%20stimmen%20werden%2C%20werde%20Politiker.&hash=000t3t9e',
        currentSentence: 'Wenn du wissen willst, wie viele Menschen nicht für dich stimmen werden, werde Politiker.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Die%20Politiker%20sollen%20endlich%20mal%20die%20Sorgen%20der%20B%C3%BCrger%20zur%20Kenntnis%20nehmen.&hash=0052wwvw',
        currentSentence: 'Die Politiker sollen endlich mal die Sorgen der Bürger zur Kenntnis nehmen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Politiker%20geben%20fast%20nie%20Fehler%20zu.&hash=01rwhgs9',
        currentSentence: 'Politiker geben fast nie Fehler zu.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Was%20haltet%20ihr%20vom%20Winterschlaf%20f%C3%BCr%20Politiker%3F&hash=00g9023k',
        currentSentence: 'Was haltet ihr vom Winterschlaf für Politiker?'
      }
    ]
  },
  {
    belegen: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=W%C3%A4re%20das%20okay%20f%C3%BCr%20dich%20mit%20ein%20paar%20belegten%20Broten%20zum%20Fr%C3%BChst%C3%BCck%3F&hash=00pf098y',
        currentSentence: 'Wäre das okay für dich mit ein paar belegten Broten zum Frühstück?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Alle%20guten%20Pl%C3%A4tze%20waren%20bereits%20belegt.&hash=01y08koo',
        currentSentence: 'Alle guten Plätze waren bereits belegt.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Alle%20Zimmer%20sind%20belegt.&hash=00yap10h',
        currentSentence: 'Alle Zimmer sind belegt.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Er%20sprach%20mit%20einer%20tiefen%2C%20belegten%20Stimme.&hash=00y2bem9',
        currentSentence: 'Er sprach mit einer tiefen, belegten Stimme.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20versuche%20schon%20den%20ganzen%20Tag%2C%20Tom%20zu%20erreichen%2C%20aber%20die%20Leitung%20ist%20belegt.&hash=0145coc5',
        currentSentence: 'Ich versuche schon den ganzen Tag, Tom zu erreichen, aber die Leitung ist belegt.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=DNS-Spuren%20belegen%3A%20Tom%20war%20der%20T%C3%A4ter.%20Wahrscheinlichkeit%3A%20zehn%20Milliarden%20zu%20eins.&hash=019pzrpq',
        currentSentence: 'DNS-Spuren belegen: Tom war der Täter. Wahrscheinlichkeit: zehn Milliarden zu eins.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Mit%20welcher%20Strafe%20wurde%20Tom%20belegt%3F&hash=01eof61a',
        currentSentence: 'Mit welcher Strafe wurde Tom belegt?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Sie%20k%C3%B6nnen%20die%20Pizza%20belegen%2C%20womit%20Sie%20gerne%20wollen.&hash=01rf9ew0',
        currentSentence: 'Sie können die Pizza belegen, womit Sie gerne wollen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Tom%20belegt%20dasselbe%20Zimmer%20wie%20letztes%20Mal%2C%20als%20er%20hier%20war.&hash=01dmymlt',
        currentSentence: 'Tom belegt dasselbe Zimmer wie letztes Mal, als er hier war.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Tom%20verdiente%20ganz%20gewiss%20die%20Strafe%20nicht%2C%20mit%20der%20er%20belegt%20wurde.&hash=00znyov9',
        currentSentence: 'Tom verdiente ganz gewiss die Strafe nicht, mit der er belegt wurde.'
      }
    ]
  },
  {
    äußere: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Unsere%20%C3%A4u%C3%9Feren%20Schicksale%20interessieren%20die%20Menschen%2C%20die%20inneren%20nur%20den%20Freund.&hash=00zf8a38',
        currentSentence: 'Unsere äußeren Schicksale interessieren die Menschen, die inneren nur den Freund.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Nur%20zur%20%C3%A4u%C3%9Feren%20Anwendung%2C%20nicht%20einnehmen.&hash=00e3trow',
        currentSentence: 'Nur zur äußeren Anwendung, nicht einnehmen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Sie%20richtet%20ihre%20Aufmerksamkeit%20lediglich%20auf%20die%20%C3%A4u%C3%9Fere%20Seite%20der%20Dinge.&hash=00q7w7hu',
        currentSentence: 'Sie richtet ihre Aufmerksamkeit lediglich auf die äußere Seite der Dinge.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Am%20%C3%A4u%C3%9Feren%20Ende%20eines%20jeden%20Fingers%20ist%20ein%20Nagel.&hash=01cveb8b',
        currentSentence: 'Am äußeren Ende eines jeden Fingers ist ein Nagel.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Seine%20%C3%A4u%C3%9Fere%20Erscheinung%20hat%20sich%20ziemlich%20ge%C3%A4ndert.&hash=00lri38v',
        currentSentence: 'Seine äußere Erscheinung hat sich ziemlich geändert.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Das%20Innere%20des%20Hauses%20entspricht%20seinem%20freundlichen%20%C3%84u%C3%9Feren.&hash=00kk3qkw',
        currentSentence: 'Das Innere des Hauses entspricht seinem freundlichen Äußeren.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ihrem%20%C3%84u%C3%9Feren%20nach%20scheint%20sie%20reich%20zu%20sein.&hash=014phrvx',
        currentSentence: 'Ihrem Äußeren nach scheint sie reich zu sein.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Das%20Innere%20bestimmt%20das%20%C3%84u%C3%9Fere.&hash=01rc5osw',
        currentSentence: 'Das Innere bestimmt das Äußere.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wenn%20mich%20jemand%20nur%20wegen%20meines%20%C3%84u%C3%9Feren%20mag%2C%20kann%20ich%20auf%20dessen%20Liebe%20verzichten.&hash=011vhvf2',
        currentSentence: 'Wenn mich jemand nur wegen meines Äußeren mag, kann ich auf dessen Liebe verzichten.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Das%20Innere%20verbrennt%20mich%2C%20das%20%C3%84u%C3%9Fere%20die%20Fremden.&hash=01undbx1',
        currentSentence: 'Das Innere verbrennt mich, das Äußere die Fremden.'
      }
    ]
  },
  {
    betreffend: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20richtete%20an%20Tom%20eine%20Frage%2C%20sein%20neues%20Buch%20betreffend.&hash=00wy3qut',
        currentSentence: 'Ich richtete an Tom eine Frage, sein neues Buch betreffend.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Herr%20Brown%20war%20zur%20betreffenden%20Zeit%20krank.&hash=013j89i7',
        currentSentence: 'Herr Brown war zur betreffenden Zeit krank.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Tom%20glaubte%20das%20Ger%C3%BCcht%20Maria%20und%20Johannes%20betreffend%20nicht.&hash=01b6jwdb',
        currentSentence: 'Tom glaubte das Gerücht Maria und Johannes betreffend nicht.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Deine%20Vorstellungen%20die%20Regierung%20betreffend%20unterscheiden%20sich%20von%20den%20meinen.&hash=00xev9gg',
        currentSentence: 'Deine Vorstellungen die Regierung betreffend unterscheiden sich von den meinen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Er%20hat%20das%20selbst%20erfahren%2C%20gerade%20bei%20Gelegenheit%20der%20betreffenden%20Sitzung.&hash=01xymbrm',
        currentSentence: 'Er hat das selbst erfahren, gerade bei Gelegenheit der betreffenden Sitzung.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20war%20mit%20ihm%2C%20den%20Plan%20betreffend%2C%20einer%20Meinung.&hash=007x13sv',
        currentSentence: 'Ich war mit ihm, den Plan betreffend, einer Meinung.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20h%C3%A4tte%20eine%20Frage%20betreffend%20einen%20Wagen%2C%20den%20Sie%20repariert%20haben.&hash=015xjn0r',
        currentSentence: 'Ich hätte eine Frage betreffend einen Wagen, den Sie repariert haben.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Tom%20wollte%20dem%20Ger%C3%BCcht%2C%20Maria%20und%20Johannes%20betreffend%2C%20keinen%20Glauben%20schenken.&hash=00osyl33',
        currentSentence: 'Tom wollte dem Gerücht, Maria und Johannes betreffend, keinen Glauben schenken.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20habe%20da%20einen%20Verdacht%2C%20seinen%20Tod%20betreffend.&hash=01tp0965',
        currentSentence: 'Ich habe da einen Verdacht, seinen Tod betreffend.'
      }
    ]
  },
  {
    irren: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Auch%20Professoren%20k%C3%B6nnen%20sich%20irren.&hash=01046qgs',
        currentSentence: 'Auch Professoren können sich irren.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Fresst%20Schei%C3%9Fe%20-%20Millionen%20von%20Fliegen%20k%C3%B6nnen%20nicht%20irren.&hash=00uyr8tw',
        currentSentence: 'Fresst Scheiße - Millionen von Fliegen können nicht irren.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Er%20hat%20sich%20im%20Datum%20geirrt.&hash=01056yvz',
        currentSentence: 'Er hat sich im Datum geirrt.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ein%20Mensch%20irrt%20in%20den%20entscheidenden%20Dingen%20seines%20Lebens%20entweder%20immer%20oder%20nie.&hash=00prpw6v',
        currentSentence: 'Ein Mensch irrt in den entscheidenden Dingen seines Lebens entweder immer oder nie.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wer%20seinen%20N%C3%A4chsten%20verurteilt%2C%20kann%20irren%3B%20wer%20ihm%20verzeiht%2C%20irrt%20nie.&hash=00zkypwo',
        currentSentence: 'Wer seinen Nächsten verurteilt, kann irren; wer ihm verzeiht, irrt nie.'
      }
    ]
  },
  {
    gelogen: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Er%20antwortete%2C%20dass%20er%20diesen%20Mann%20nicht%20kenne%2C%20aber%20das%20war%20gelogen.&hash=01irbnwg',
        currentSentence: 'Er antwortete, dass er diesen Mann nicht kenne, aber das war gelogen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Er%20sagte%2C%20dass%20sein%20Vater%20krank%20sei%2C%20aber%20das%20war%20gelogen.&hash=016ugxdu',
        currentSentence: 'Er sagte, dass sein Vater krank sei, aber das war gelogen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Alles%2C%20was%20ich%20%C3%BCber%20Tom%20zu%20wissen%20glaubte%2C%20war%20gelogen.&hash=0179kt3q',
        currentSentence: 'Alles, was ich über Tom zu wissen glaubte, war gelogen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Sie%20hat%20gelogen%2C%20als%20sie%20sagte%2C%20dass%20sie%20schwanger%20sei.&hash=01mzny3t',
        currentSentence: 'Sie hat gelogen, als sie sagte, dass sie schwanger sei.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Anders%20ausgedr%C3%BCckt%2C%20hat%20Tom%20gelogen.&hash=00iuvs1y',
        currentSentence: 'Anders ausgedrückt, hat Tom gelogen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Mindestens%20einer%20von%20ihnen%20hat%20gelogen.&hash=005mraw4',
        currentSentence: 'Mindestens einer von ihnen hat gelogen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=%E2%80%9EIch%20habe%20nicht%20absichtlich%20gelogen%E2%80%9C%2C%20log%20Tom.&hash=00hkr0zp',
        currentSentence: '„Ich habe nicht absichtlich gelogen“, log Tom.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Er%20hat%20nicht%20gelogen.%20Er%20hat%20nur%20nicht%20die%20ganze%20Wahrheit%20gesagt.&hash=00raqcsy',
        currentSentence: 'Er hat nicht gelogen. Er hat nur nicht die ganze Wahrheit gesagt.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Sie%20wurde%20w%C3%BCtend.%20Was%20er%20sagte%2C%20war%20n%C3%A4mlich%20gelogen.&hash=00j4x9es',
        currentSentence: 'Sie wurde wütend. Was er sagte, war nämlich gelogen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Der%20Junge%20hat%20zugegeben%2C%20dass%20er%20gelogen%20hat.&hash=00fiy0x7',
        currentSentence: 'Der Junge hat zugegeben, dass er gelogen hat.'
      }
    ]
  },
  {
    geistig: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=%C3%9Cber%20geistige%20Werte%20soll%20allein%20der%20Geist%20entscheiden.&hash=00uqp1t3',
        currentSentence: 'Über geistige Werte soll allein der Geist entscheiden.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Sein%20Freund%20ist%20geistig%20eher%20einfach%20gestrickt%2C%20aber%20eine%20ehrliche%20Haut.&hash=015lfm4e',
        currentSentence: 'Sein Freund ist geistig eher einfach gestrickt, aber eine ehrliche Haut.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Es%20gibt%20Menschen%2C%20die%20geistig%20so%20leer%20sind%2C%20dass%20sie%20nur%20von%20anderen%20leben.&hash=005ssy7m',
        currentSentence: 'Es gibt Menschen, die geistig so leer sind, dass sie nur von anderen leben.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Es%20steht%20vor%20meinem%20geistigen%20Auge.&hash=01yvu5tj',
        currentSentence: 'Es steht vor meinem geistigen Auge.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Dann%20hat%20er%20die%20Teile%20in%20seiner%20Hand%2C%20fehlt%20leider%20nur%20das%20geistige%20Band.&hash=00aycly7',
        currentSentence: 'Dann hat er die Teile in seiner Hand, fehlt leider nur das geistige Band.'
      }
    ]
  },
  {
    Ermittlung: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wie%20verl%C3%A4uft%20die%20Ermittlung%3F&hash=00wwao2j',
        currentSentence: 'Wie verläuft die Ermittlung?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Die%20Polizei%20nahm%20die%20Ermittlungen%20in%20dem%20Falle%20auf.&hash=01tp5kzn',
        currentSentence: 'Die Polizei nahm die Ermittlungen in dem Falle auf.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Da%20stehen%20wir%20noch%20vor%20Ermittlungen.&hash=01v1kfhh',
        currentSentence: 'Da stehen wir noch vor Ermittlungen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Irgendwie%20hatten%20sie%20von%20den%20Ermittlungen%20Wind%20bekommen%20und%20sich%20nach%20S%C3%BCdamerika%20abgesetzt.&hash=000eo89n',
        currentSentence: 'Irgendwie hatten sie von den Ermittlungen Wind bekommen und sich nach Südamerika abgesetzt.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Der%20Premierminister%20sagte%2C%20dass%20die%20Ermittlung%20ergeben%20werde%2C%20wer%20wann%20was%20gewusst%20habe.&hash=011v8iba',
        currentSentence: 'Der Premierminister sagte, dass die Ermittlung ergeben werde, wer wann was gewusst habe.'
      }
    ]
  },
  {
    Wachstum: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Gibt%20es%20bei%20Tieren%20solche%20Grenzen%20des%20Wachstums%3F&hash=01asfpbw',
        currentSentence: 'Gibt es bei Tieren solche Grenzen des Wachstums?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Gib%20deinen%20Beziehungen%20Zeit%20und%20Raum%20%E2%80%93%20Wachstums-Zeit%20und%20Frei-Raum.&hash=00r1zzrd',
        currentSentence: 'Gib deinen Beziehungen Zeit und Raum – Wachstums-Zeit und Frei-Raum.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Die%20Bev%C3%B6lkerung%20von%20Schweden%20befindet%20sich%20im%20Wachstum.&hash=013v2se7',
        currentSentence: 'Die Bevölkerung von Schweden befindet sich im Wachstum.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Sarkozy%20verteidigte%20ein%20Modell%20des%20nachhaltigen%20Wachstums.&hash=014zfog1',
        currentSentence: 'Sarkozy verteidigte ein Modell des nachhaltigen Wachstums.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Was%20Wachstum%20schafft%2C%20darf%20sehr%20wohl%20mit%20Schulden%20finanziert%20werden.&hash=00gx57y8',
        currentSentence: 'Was Wachstum schafft, darf sehr wohl mit Schulden finanziert werden.'
      }
    ]
  },
  {
    beruflich: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Maria%20ist%20beruflich%20viel%20unterwegs.&hash=011ghfb6',
        currentSentence: 'Maria ist beruflich viel unterwegs.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Was%20machst%20du%20eigentlich%20beruflich%3F&hash=01ww1qjn',
        currentSentence: 'Was machst du eigentlich beruflich?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Die%20berufliche%20Frage%20ist%20bei%20mir%20eigentlich%20nie%20ganz%20gel%C3%B6st%20worden.&hash=00itkgoq',
        currentSentence: 'Die berufliche Frage ist bei mir eigentlich nie ganz gelöst worden.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20verkaufe%20beruflich%20Autos.&hash=009mflgr',
        currentSentence: 'Ich verkaufe beruflich Autos.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20reise%20oft%20beruflich%20nach%20Australien.&hash=008ufbwf',
        currentSentence: 'Ich reise oft beruflich nach Australien.'
      }
    ]
  },
  {
    objektiv: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Objektiv%20sein%20hei%C3%9Ft%2C%20nicht%20zu%20verraten%2C%20zu%20wem%20man%20h%C3%A4lt.&hash=007nkbio',
        currentSentence: 'Objektiv sein heißt, nicht zu verraten, zu wem man hält.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Gibt%20es%20objektive%20Geschichte%3F&hash=01jyr5cb',
        currentSentence: 'Gibt es objektive Geschichte?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20glaube%2C%20ich%20bin%20objektiv.&hash=00rvi22r',
        currentSentence: 'Ich glaube, ich bin objektiv.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=H%C3%BCte%20dich%20vor%20jenen%2C%20die%20behaupten%2C%20objektiv%20zu%20sein.&hash=01yjed8a',
        currentSentence: 'Hüte dich vor jenen, die behaupten, objektiv zu sein.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20kann%20mich%20darauf%20verlassen%2C%20dass%20Tom%20bei%20allem%20objektiv%20ist.&hash=01mwmuf3',
        currentSentence: 'Ich kann mich darauf verlassen, dass Tom bei allem objektiv ist.'
      }
    ]
  },
  {
    gespeichert: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Die%20Zelle%20verf%C3%BCgt%20%C3%BCber%20ein%20System%20zum%20Verarbeiten%20der%20gespeicherten%20Informationen.&hash=00lhizvz',
        currentSentence: 'Die Zelle verfügt über ein System zum Verarbeiten der gespeicherten Informationen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Sollen%20die%20gespeicherten%20Daten%20%C3%BCberschrieben%20werden%3F&hash=01552lgr',
        currentSentence: 'Sollen die gespeicherten Daten überschrieben werden?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=F%C3%A4lle%20man%20B%C3%A4ume%2C%20so%20gelange%20der%20gespeicherte%20Kohlenstoff%20in%20die%20Atmosph%C3%A4re%2C%20so%20die%20%E2%80%9EVereinigung%20besorgter%20Wissenschaftler%E2%80%9C%20(Union%20of%20Concerned%20Scientists)%2C%20und%20das%20mache%20auf%20der%20Welt%2010%C2%A0%25%20der%20Treibhausabgase%20aus.&hash=01bl9475',
        currentSentence:
          'Fälle man Bäume, so gelange der gespeicherte Kohlenstoff in die Atmosphäre, so die „Vereinigung besorgter Wissenschaftler“ (Union of Concerned Scientists), und das mache auf der Welt 10 % der Treibhausabgase aus.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Der%20Algorithmus%2C%20dem%20eine%20Zelle%20bei%20der%20Herstellung%20eines%20Proteins%20folgt%2C%20ist%20%C3%A4u%C3%9Ferst%20komplex.%20Grob%20gesagt%20wird%20die%20in%20der%20DNA%20gespeicherte%20kodierte%20Information%20%E2%80%93%20W%C3%B6rter%20mit%20vier%20Buchstaben%20%E2%80%93%20kopiert%2C%20in%20eine%20Sprache%20mit%20zwanzig%20Buchstaben%20%C3%BCbersetzt%2C%20bearbeitet%20und%20an%20den%20Ort%20der%20Proteinassemblierung%20%C3%BCbermittelt.&hash=01ltmpf3',
        currentSentence:
          'Der Algorithmus, dem eine Zelle bei der Herstellung eines Proteins folgt, ist äußerst komplex. Grob gesagt wird die in der DNA gespeicherte kodierte Information – Wörter mit vier Buchstaben – kopiert, in eine Sprache mit zwanzig Buchstaben übersetzt, bearbeitet und an den Ort der Proteinassemblierung übermittelt.'
      }
    ]
  },
  {
    schneide: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Immer%20wenn%20ich%20Zwiebeln%20schneide%2C%20kommen%20mir%20die%20Tr%C3%A4nen.&hash=0137kmq7',
        currentSentence: 'Immer wenn ich Zwiebeln schneide, kommen mir die Tränen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Schneide%20bitte%20den%20Kuchen%20auf.&hash=0042sm3w',
        currentSentence: 'Schneide bitte den Kuchen auf.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Schneide%20dir%20nicht%20die%20Haare!&hash=016w4rhs',
        currentSentence: 'Schneide dir nicht die Haare!'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Nimm%20das%20Messer%20und%20schneide%20die%20Spitze%20ab.&hash=018zpl9q',
        currentSentence: 'Nimm das Messer und schneide die Spitze ab.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20schneide%20meine%20N%C3%A4gel%20niemals%20nachts.&hash=00s159ir',
        currentSentence: 'Ich schneide meine Nägel niemals nachts.'
      }
    ]
  },
  {
    Katastrophe: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Das%20Fr%C3%BChst%C3%BCck%20im%20Hotel%20war%20eine%20Katastrophe.&hash=00g83tsa',
        currentSentence: 'Das Frühstück im Hotel war eine Katastrophe.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Welche%20Katastrophen%20drohen%20der%20Menschheit%20in%20Zukunft%3F&hash=00tj97sg',
        currentSentence: 'Welche Katastrophen drohen der Menschheit in Zukunft?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Katastrophen%20kennt%20allein%20der%20Mensch%2C%20sofern%20er%20sie%20%C3%BCberlebt.%20Die%20Natur%20kennt%20keine%20Katastrophen.&hash=01trav6t',
        currentSentence:
          'Katastrophen kennt allein der Mensch, sofern er sie überlebt. Die Natur kennt keine Katastrophen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Irrt%C3%BCmer%20m%C3%BCssen%20nicht%20automatisch%20zu%20Katastrophen%20werden%2C%20man%20muss%20sie%20nur%20rechtzeitig%20erkennen.&hash=00ondwat',
        currentSentence:
          'Irrtümer müssen nicht automatisch zu Katastrophen werden, man muss sie nur rechtzeitig erkennen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Den%20fr%C3%BChen%20Tod%20des%20Vaters%20empfand%20das%20Kind%20als%20Katastrophe.&hash=00717lrb',
        currentSentence: 'Den frühen Tod des Vaters empfand das Kind als Katastrophe.'
      }
    ]
  },
  {
    Kerze: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wer%20eine%20Kerze%20sucht%2C%20bemerkt%20nicht%20die%20Sonne.&hash=01ggwole',
        currentSentence: 'Wer eine Kerze sucht, bemerkt nicht die Sonne.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=In%20der%20Wohnung%20brannten%20Kerzen.&hash=00v2pbpd',
        currentSentence: 'In der Wohnung brannten Kerzen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Kerzen%20und%20Lieder%20bilden%20zusammen%20eine%20sehr%20fr%C3%B6hliche%20Atmosph%C3%A4re.&hash=00fxq6sw',
        currentSentence: 'Kerzen und Lieder bilden zusammen eine sehr fröhliche Atmosphäre.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Eine%20einzige%20Kerze%20einer%20armen%20Frau%20wiegt%20schwerer%20als%20zehntausend%20eines%20Reichen.&hash=018r8pdl',
        currentSentence: 'Eine einzige Kerze einer armen Frau wiegt schwerer als zehntausend eines Reichen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Die%20Kerze%20ist%20von%20selber%20ausgegangen.&hash=003cs9s2',
        currentSentence: 'Die Kerze ist von selber ausgegangen.'
      }
    ]
  },
  {
    verwandte: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Der%20Arme%20kennt%20seine%20Verwandten%20besser%20als%20der%20Reiche.&hash=00t0ozxh',
        currentSentence: 'Der Arme kennt seine Verwandten besser als der Reiche.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ein%20Freund%20ist%20besser%20als%20zehn%20Verwandte.&hash=01xult8d',
        currentSentence: 'Ein Freund ist besser als zehn Verwandte.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=In%20Zeiten%20der%20Not%20bedarf%20man%20seiner%20Verwandten.&hash=00xdvdrq',
        currentSentence: 'In Zeiten der Not bedarf man seiner Verwandten.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ein%20kluger%20Feind%20ist%20besser%20als%20ein%20dummer%20Verwandter.&hash=00ofxgzy',
        currentSentence: 'Ein kluger Feind ist besser als ein dummer Verwandter.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Freunde%20sind%20Gottes%20Entschuldigung%20f%C3%BCr%20Verwandte.&hash=007kfnz5',
        currentSentence: 'Freunde sind Gottes Entschuldigung für Verwandte.'
      }
    ]
  },
  {
    Vermögen: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Was%20dem%20Einzelnen%20nicht%20m%C3%B6glich%20ist%2C%20das%20verm%C3%B6gen%20viele.&hash=016pojo0',
        currentSentence: 'Was dem Einzelnen nicht möglich ist, das vermögen viele.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Euer%20Leben%20hat%20genauso%20viel%20Sinn%2C%20als%20ihr%20selbst%20ihm%20zu%20geben%20verm%C3%B6get.&hash=0122ecqu',
        currentSentence: 'Euer Leben hat genauso viel Sinn, als ihr selbst ihm zu geben vermöget.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Die%20vordersten%20tun%2C%20was%20die%20hintersten%20nicht%20verm%C3%B6gen.&hash=00ecp1u0',
        currentSentence: 'Die vordersten tun, was die hintersten nicht vermögen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=H%C3%B6fliche%20Worte%20verm%C3%B6gen%20viel%20und%20kosten%20doch%20wenig.&hash=01fcirkb',
        currentSentence: 'Höfliche Worte vermögen viel und kosten doch wenig.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Einen%20Eindruck%20von%20der%20Wirklichkeit%20verm%C3%B6gen%20diese%20Erz%C3%A4hlungen%20nicht%20vermitteln.&hash=00drrvhi',
        currentSentence: 'Einen Eindruck von der Wirklichkeit vermögen diese Erzählungen nicht vermitteln.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Es%20kostet%20ein%20Verm%C3%B6gen.&hash=0128ze7y',
        currentSentence: 'Es kostet ein Vermögen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Mein%20Vater%20hat%20mir%20ein%20gro%C3%9Fes%20Verm%C3%B6gen%20hinterlassen.&hash=01deiwmb',
        currentSentence: 'Mein Vater hat mir ein großes Vermögen hinterlassen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Zum%20Tun%20geh%C3%B6rt%20Talent%20%E2%80%94%20zum%20Wohltun%20Verm%C3%B6gen.&hash=011cywdi',
        currentSentence: 'Zum Tun gehört Talent — zum Wohltun Vermögen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Da%20er%20sein%20ganzes%20Verm%C3%B6gen%20verloren%20hatte%2C%20befand%20er%20sich%20in%20gro%C3%9Fer%20Not.&hash=01r0shxa',
        currentSentence: 'Da er sein ganzes Vermögen verloren hatte, befand er sich in großer Not.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Jeder%20arbeitete%20nach%20seinem%20Verm%C3%B6gen.&hash=00gh0dag',
        currentSentence: 'Jeder arbeitete nach seinem Vermögen.'
      }
    ]
  },
  {
    Eier: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Der%20Preis%20f%C3%BCr%20Eier%20steigt.&hash=00ibq2pz',
        currentSentence: 'Der Preis für Eier steigt.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Sie%20kocht%20in%20der%20K%C3%BCche%20Eier.&hash=01c2xxxi',
        currentSentence: 'Sie kocht in der Küche Eier.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Sie%20muss%20jeden%20Morgen%20Eier%20legen.&hash=00ogt4h7',
        currentSentence: 'Sie muss jeden Morgen Eier legen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Habt%20ihr%20Eier%20gekauft%3F&hash=00voma45',
        currentSentence: 'Habt ihr Eier gekauft?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20habe%20ein%20halbes%20Dutzend%20Eier%20gekauft.&hash=00o8tq4z',
        currentSentence: 'Ich habe ein halbes Dutzend Eier gekauft.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wo%20sind%20bitte%20die%20Eier%3F&hash=01n7n8kw',
        currentSentence: 'Wo sind bitte die Eier?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=%E2%80%9EMaria%2C%20woher%20hast%20du%20diese%20gro%C3%9Fen%20Eier%3F%E2%80%9C%20-%20%E2%80%9EAb%20Hof%20nat%C3%BCrlich.%E2%80%9C&hash=0031ku3m',
        currentSentence: '„Maria, woher hast du diese großen Eier?“ - „Ab Hof natürlich.“'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wie%20viele%20Eier%20legen%20die%20H%C3%BChner%20pro%20Tag%3F&hash=00wbbg7b',
        currentSentence: 'Wie viele Eier legen die Hühner pro Tag?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wir%20haben%20Eier%20gegessen.&hash=009e8dx6',
        currentSentence: 'Wir haben Eier gegessen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20mag%20sehr%20gern%20hart%20gekochte%20Eier.&hash=01nkm6al',
        currentSentence: 'Ich mag sehr gern hart gekochte Eier.'
      }
    ]
  },
  {
    ausstatten: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Die%20neuen%20R%C3%A4ume%20sind%20komplett%20mit%20neuer%20Technik%20ausgestattet.&hash=01vyc9h7',
        currentSentence: 'Die neuen Räume sind komplett mit neuer Technik ausgestattet.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Die%20Soldaten%20waren%20mit%20Waffen%20ausgestattet.&hash=00wenxy0',
        currentSentence: 'Die Soldaten waren mit Waffen ausgestattet.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Dieses%20Zimmer%20ist%20mit%20zwei%20Betten%20ausgestattet.&hash=00mtqfqi',
        currentSentence: 'Dieses Zimmer ist mit zwei Betten ausgestattet.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Das%20Auto%20war%20mit%20allem%20ausgestattet.&hash=00g6xfve',
        currentSentence: 'Das Auto war mit allem ausgestattet.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wir%20werden%20mit%20einem%20gro%C3%9Fen%20Verm%C3%B6gen%20ausgestattet%20sein.&hash=00ccnftg',
        currentSentence: 'Wir werden mit einem großen Vermögen ausgestattet sein.'
      }
    ]
  },
  {
    zurückgehen: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20will%20nicht%20allein%20zur%C3%BCckgehen.&hash=00bxn7d3',
        currentSentence: 'Ich will nicht allein zurückgehen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Nein.%20Es%20tut%20mir%20leid%2C%20aber%20ich%20muss%20fr%C3%BCh%20zur%C3%BCckgehen.&hash=00nfljuh',
        currentSentence: 'Nein. Es tut mir leid, aber ich muss früh zurückgehen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wenn%20du%20in%20der%20Zeit%20zur%C3%BCckgehen%20k%C3%B6nntest%2C%20was%20w%C3%BCrdest%20du%20dann%20%C3%A4ndern%3F&hash=00w4h1ei',
        currentSentence: 'Wenn du in der Zeit zurückgehen könntest, was würdest du dann ändern?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20kann%20nicht%20allein%20dahin%20zur%C3%BCckgehen.&hash=00sd9akl',
        currentSentence: 'Ich kann nicht allein dahin zurückgehen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Carola%20ist%20zu%20ihrem%20Hotel%20zur%C3%BCckgegangen.&hash=00biidsd',
        currentSentence: 'Carola ist zu ihrem Hotel zurückgegangen.'
      }
    ]
  },
  {
    beurteilen: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ein%20Blinder%20sollte%20keine%20Farben%20beurteilen!&hash=0165cz1x',
        currentSentence: 'Ein Blinder sollte keine Farben beurteilen!'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Tom%20beurteilt%20die%20Menschen%20danach%2C%20welche%20Marken%20sie%20tragen.&hash=004ey4qq',
        currentSentence: 'Tom beurteilt die Menschen danach, welche Marken sie tragen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ach%2C%20welch%20ein%20Unterschied%20ist%20es%2C%20ob%20man%20sich%20oder%20die%20andern%20beurteilt.&hash=007x6gbf',
        currentSentence: 'Ach, welch ein Unterschied ist es, ob man sich oder die andern beurteilt.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Um%20einen%20Staat%20zu%20beurteilen%2C%20muss%20man%20sich%20seine%20Gef%C3%A4ngnisse%20von%20innen%20ansehen.&hash=002b8ywn',
        currentSentence: 'Um einen Staat zu beurteilen, muss man sich seine Gefängnisse von innen ansehen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wer%20die%20menschliche%20Natur%20beurteilen%20will%2C%20muss%20die%20Ausreden%20der%20Leute%20studieren.&hash=01ljs296',
        currentSentence: 'Wer die menschliche Natur beurteilen will, muss die Ausreden der Leute studieren.'
      }
    ]
  },
  {
    graben: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wer%20auf%20Rache%20aus%20ist%2C%20grabe%20zwei%20Gr%C3%A4ber.&hash=01pfctz4',
        currentSentence: 'Wer auf Rache aus ist, grabe zwei Gräber.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Die%20nach%20Gold%20suchen%2C%20graben%20viel%20Erde%20um%20und%20finden%20nur%20wenig.&hash=00zfq4qd',
        currentSentence: 'Die nach Gold suchen, graben viel Erde um und finden nur wenig.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Sie%20graben%20ein%20Loch.&hash=007e9tqg',
        currentSentence: 'Sie graben ein Loch.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wir%20gruben%20ein%20Loch%20in%20den%20Boden.&hash=004zihlv',
        currentSentence: 'Wir gruben ein Loch in den Boden.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Tom%20h%C3%B6rte%20auf%20zu%20graben.&hash=01qgan91',
        currentSentence: 'Tom hörte auf zu graben.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Rufe%20nicht%20Hurra%2C%20bis%20du%20%C3%BCber%20dem%20Graben%20bist.&hash=01wxxx6t',
        currentSentence: 'Rufe nicht Hurra, bis du über dem Graben bist.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wenn%20du%20in%20einem%20Loch%20sitzt%2C%20musst%20du%20zuerst%20mit%20dem%20Graben%20aufh%C3%B6ren.&hash=01b9xoi2',
        currentSentence: 'Wenn du in einem Loch sitzt, musst du zuerst mit dem Graben aufhören.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Er%20sprang%20%C3%BCber%20den%20flachen%20Graben.&hash=00gh2t62',
        currentSentence: 'Er sprang über den flachen Graben.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Er%20ist%20in%20den%20Graben%20gefallen.&hash=01myu5aa',
        currentSentence: 'Er ist in den Graben gefallen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Der%20Graben%20ist%20drei%20Meter%20breit.&hash=01syr2yv',
        currentSentence: 'Der Graben ist drei Meter breit.'
      }
    ]
  },
  {
    Gewohnheit: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Gewohnheit%20w%C3%A4chst%20mit%20den%20Jahren.&hash=00hnuvxm',
        currentSentence: 'Gewohnheit wächst mit den Jahren.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Die%20Gewohnheit%20ist%20eine%20zweite%20Natur.&hash=00c40vp7',
        currentSentence: 'Die Gewohnheit ist eine zweite Natur.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Man%20bleibt%20jung%2C%20solange%20man%20noch%20lernen%2C%20neue%20Gewohnheiten%20annehmen%20und%20Widerspruch%20ertragen%20kann.&hash=00iyiql8',
        currentSentence:
          'Man bleibt jung, solange man noch lernen, neue Gewohnheiten annehmen und Widerspruch ertragen kann.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wer%20keine%20%C3%BCblen%20Gewohnheiten%20hat%2C%20hat%20wahrscheinlich%20auch%20keine%20Pers%C3%B6nlichkeit.&hash=01rgco76',
        currentSentence: 'Wer keine üblen Gewohnheiten hat, hat wahrscheinlich auch keine Persönlichkeit.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Alte%20Gewohnheit%20soll%20man%20nicht%20brechen.&hash=017ueaiv',
        currentSentence: 'Alte Gewohnheit soll man nicht brechen.'
      }
    ]
  },
  {
    erinnere: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Erinnere%20dich%20deiner%20Worte!&hash=00k3mmyz',
        currentSentence: 'Erinnere dich deiner Worte!'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Erinnere%20dich%20an%20deine%20sch%C3%B6nsten%20Jahre!&hash=01vr26sn',
        currentSentence: 'Erinnere dich an deine schönsten Jahre!'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wenn%20ich%20nur%20einmal%20einen%20Weg%20gegangen%20bin%2C%20erinnere%20ich%20mich%20daran.&hash=01xowu2h',
        currentSentence: 'Wenn ich nur einmal einen Weg gegangen bin, erinnere ich mich daran.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Erinnere%20dich%2C%20was%20letztes%20Jahr%20passiert%20ist.&hash=01bza86k',
        currentSentence: 'Erinnere dich, was letztes Jahr passiert ist.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wenn%20ich%20mich%20recht%20erinnere%2C%20haben%20Tom%20und%20Maria%20im%20Oktober%202003%20geheiratet.&hash=00eueab7',
        currentSentence: 'Wenn ich mich recht erinnere, haben Tom und Maria im Oktober 2003 geheiratet.'
      }
    ]
  },
  {
    Sand: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Sie%20hatte%20Geld%20wie%20Sand%20am%20Meer.&hash=01s678o5',
        currentSentence: 'Sie hatte Geld wie Sand am Meer.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Sie%20wusste%20nicht%2C%20dass%20George%20Sand%20eine%20Frau%20war.&hash=01wl5zgz',
        currentSentence: 'Sie wusste nicht, dass George Sand eine Frau war.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=George%20Sand%20beschloss%2C%20sich%20wie%20ein%20Mann%20zu%20kleiden.&hash=00mae1la',
        currentSentence: 'George Sand beschloss, sich wie ein Mann zu kleiden.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Sand%20verbrachte%20den%20Winter%20mit%20Chopin%20auf%20Mallorca.&hash=017bj1sc',
        currentSentence: 'Sand verbrachte den Winter mit Chopin auf Mallorca.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Maria%20f%C3%BCllte%20mit%20einer%20Plastikschaufel%20Sand%20in%20ihr%20Eimerchen.&hash=01gkdztb',
        currentSentence: 'Maria füllte mit einer Plastikschaufel Sand in ihr Eimerchen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wir%20ruhen%20nackt%20im%20warmen%20Sand.&hash=00iyioxn',
        currentSentence: 'Wir ruhen nackt im warmen Sand.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Die%20Kinder%20spielen%20im%20Sand.&hash=010ekpa7',
        currentSentence: 'Die Kinder spielen im Sand.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20brauche%20mal%20wieder%20Sand%20und%20Meer.&hash=00bruzty',
        currentSentence: 'Ich brauche mal wieder Sand und Meer.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Er%20hat%20auf%20Sand%20gebaut.&hash=00o8ez8m',
        currentSentence: 'Er hat auf Sand gebaut.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wenn%20man%20den%20Kopf%20in%20den%20Sand%20steckt%2C%20bleibt%20doch%20der%20Hintern%20sichtbar.&hash=00m673tk',
        currentSentence: 'Wenn man den Kopf in den Sand steckt, bleibt doch der Hintern sichtbar.'
      }
    ]
  },
  {
    nutzlos: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Diese%20Ger%C3%A4te%20scheinen%20nutzlos%20zu%20sein.&hash=01imlmfr',
        currentSentence: 'Diese Geräte scheinen nutzlos zu sein.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wenn%20der%20Tod%20an%20deine%20T%C3%BCr%20klopft%2C%20sind%20alle%20Reicht%C3%BCmer%20der%20Welt%20nutzlos.&hash=005v6zjd',
        currentSentence: 'Wenn der Tod an deine Tür klopft, sind alle Reichtümer der Welt nutzlos.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=In%20guten%20Zeiten%20ist%20der%20Aufsichtsrat%20nutzlos%2C%20in%20schlechten%20hilflos.&hash=00h8yh6f',
        currentSentence: 'In guten Zeiten ist der Aufsichtsrat nutzlos, in schlechten hilflos.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20wei%C3%9F%20nicht%2C%20ob%20mein%20Leben%20nutzlos%20und%20blo%C3%9F%20ein%20Missverst%C3%A4ndnis%20war%20oder%20ob%20es%20einen%20Sinn%20hat.&hash=019si8o3',
        currentSentence:
          'Ich weiß nicht, ob mein Leben nutzlos und bloß ein Missverständnis war oder ob es einen Sinn hat.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Mit%20einem%20klugen%20Man%C3%B6ver%20eroberte%20die%20Armee%20in%20schwarzer%20Uniform%20die%20Dame%20des%20Gegners%20und%20er%20ergab%20sich%2C%20denn%20ohne%20seine%20wertvollste%20Figur%20w%C3%A4re%20es%20nutzlos%2C%20weiter%20zu%20k%C3%A4mpfen.%20Die%20Schlacht%20war%20verloren.&hash=00zl7dnc',
        currentSentence:
          'Mit einem klugen Manöver eroberte die Armee in schwarzer Uniform die Dame des Gegners und er ergab sich, denn ohne seine wertvollste Figur wäre es nutzlos, weiter zu kämpfen. Die Schlacht war verloren.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Computer%20sind%20nutzlos%2C%20sie%20k%C3%B6nnen%20uns%20nur%20Antworten%20geben.&hash=015z31p7',
        currentSentence: 'Computer sind nutzlos, sie können uns nur Antworten geben.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20habe%20viel%20Arbeit%20nutzlos%20getan.&hash=013dj8w5',
        currentSentence: 'Ich habe viel Arbeit nutzlos getan.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Es%20ist%20nutzlos%2C%20mir%20zu%20drohen%2C%20ich%20werde%20nichts%20sagen.&hash=00ev7fts',
        currentSentence: 'Es ist nutzlos, mir zu drohen, ich werde nichts sagen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20stellte%20fest%2C%20dass%20die%20Maschine%20nutzlos%20war.&hash=012bfryh',
        currentSentence: 'Ich stellte fest, dass die Maschine nutzlos war.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Nagellack%20ist%20nutzlos%3A%20es%20schaut%20sowieso%20niemand%20auf%20die%20N%C3%A4gel.&hash=00s14l0o',
        currentSentence: 'Nagellack ist nutzlos: es schaut sowieso niemand auf die Nägel.'
      }
    ]
  },
  {
    aufrufen: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Heben%20Sie%20die%20Hand%2C%20wenn%20ich%20Ihren%20Namen%20aufrufe.&hash=011eog6r',
        currentSentence: 'Heben Sie die Hand, wenn ich Ihren Namen aufrufe.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=W%C3%BCrden%20Sie%20bitte%20Herrn%20Sawada%20aufrufen%3F&hash=0088qrq6',
        currentSentence: 'Würden Sie bitte Herrn Sawada aufrufen?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20warte%20schon%20seit%206%20Uhr%2C%20aber%20ich%20werde%20noch%20immer%20nicht%20aufgerufen.&hash=00xw9a5f',
        currentSentence: 'Ich warte schon seit 6 Uhr, aber ich werde noch immer nicht aufgerufen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Steh%20auf%2C%20wenn%20du%20aufgerufen%20wirst!&hash=00guufbf',
        currentSentence: 'Steh auf, wenn du aufgerufen wirst!'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Sie%20wurden%20nacheinander%20aufgerufen.&hash=00owwu9g',
        currentSentence: 'Sie wurden nacheinander aufgerufen.'
      }
    ]
  },
  {
    steck: [
      {
        url: "https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Steck'%20deine%20Nase%20nicht%20in%20alles%20hinein!&hash=00i5p2ef",
        currentSentence: "Steck' deine Nase nicht in alles hinein!"
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Steck%20die%20Nase%20nicht%20in%20meine%20privaten%20Angelegenheiten!&hash=00usuhyv',
        currentSentence: 'Steck die Nase nicht in meine privaten Angelegenheiten!'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Steck%20dir%20das%20Geld%20in%20die%20Tasche!&hash=007m617b',
        currentSentence: 'Steck dir das Geld in die Tasche!'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Da%20liegt%20Geld%20auf%20dem%20Tisch.%20Steck%20dir%20das%20ins%20Portemonnaie%2C%20bevor%20es%20dir%20jemand%20klaut!&hash=00v1ndix',
        currentSentence: 'Da liegt Geld auf dem Tisch. Steck dir das ins Portemonnaie, bevor es dir jemand klaut!'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Steck%20nicht%20zu%20schnell%20auf!&hash=0105c93r',
        currentSentence: 'Steck nicht zu schnell auf!'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20stecke%20den%20Schl%C3%BCssel%20ins%20Schloss.&hash=019vt97q',
        currentSentence: 'Ich stecke den Schlüssel ins Schloss.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20stecke%20bis%20%C3%BCber%20die%20Ohren%20in%20Schulden.&hash=01qve23z',
        currentSentence: 'Ich stecke bis über die Ohren in Schulden.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Und%20jetzt%20stecke%20ich%20wegen%20dir%20in%20Schwierigkeiten.&hash=00qrgltg',
        currentSentence: 'Und jetzt stecke ich wegen dir in Schwierigkeiten.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Nun%20stecke%20ich%20diese%20Karte%20in%20den%20Hut.%20Siehst%20du%3F&hash=007qosc8',
        currentSentence: 'Nun stecke ich diese Karte in den Hut. Siehst du?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Es%20tut%20mir%20leid%2C%20aber%20ich%20werde%20versp%C3%A4tet%20kommen%2C%20ich%20stecke%20im%20Verkehr%20fest!&hash=00fvm8zj',
        currentSentence: 'Es tut mir leid, aber ich werde verspätet kommen, ich stecke im Verkehr fest!'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Steck%20den%20Brief%20weg.&hash=01kg64kw',
        currentSentence: 'Steck den Brief weg.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Steck%20deine%20Nase%20nicht%20in%20fremde%20Angelegenheiten!&hash=00m77kxo',
        currentSentence: 'Steck deine Nase nicht in fremde Angelegenheiten!'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Steck%20den%20Finger%20durch%20den%20Hals!&hash=00k67wda',
        currentSentence: 'Steck den Finger durch den Hals!'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Steck%20deine%20Nase%20nicht%20in%20meine%20Angelegenheiten.&hash=00s1k458',
        currentSentence: 'Steck deine Nase nicht in meine Angelegenheiten.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Steck%20die%20Kerze%20an!&hash=00jgo81j',
        currentSentence: 'Steck die Kerze an!'
      }
    ]
  },
  {
    Höhepunkt: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Der%20H%C3%B6hepunkt%20der%20deutschen%20Geschichte%20ist%20sicher%20die%20deutsche%20Einheit%2C%20die%20von%201871.&hash=001669iy',
        currentSentence: 'Der Höhepunkt der deutschen Geschichte ist sicher die deutsche Einheit, die von 1871.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wir%20sind%20auf%20dem%20H%C3%B6hepunkt%20unserer%20Jugend.&hash=00azyzhu',
        currentSentence: 'Wir sind auf dem Höhepunkt unserer Jugend.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Die%20Religion%20hatte%20ihren%20H%C3%B6hepunkt%20in%20dieser%20Zeit.&hash=00uqpf5t',
        currentSentence: 'Die Religion hatte ihren Höhepunkt in dieser Zeit.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20habe%20mir%20im%20Internet%20die%20H%C3%B6hepunkte%20des%20Spieles%20angesehen.&hash=01elqoeg',
        currentSentence: 'Ich habe mir im Internet die Höhepunkte des Spieles angesehen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Paris%20hat%20noch%20viele%20weitere%20H%C3%B6hepunkte%20zu%20bieten.&hash=00p1ou38',
        currentSentence: 'Paris hat noch viele weitere Höhepunkte zu bieten.'
      }
    ]
  },
  {
    türkisch: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Tom%20%C3%BCbt%20jeden%20Tag%20T%C3%BCrkisch%20mit%20seinen%20Freunden%20Akman%20und%20G%C3%BClcan.&hash=00hkbafb',
        currentSentence: 'Tom übt jeden Tag Türkisch mit seinen Freunden Akman und Gülcan.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Sprechen%20der%20Herr%20T%C3%BCrkisch%3F&hash=00pizwvl',
        currentSentence: 'Sprechen der Herr Türkisch?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Warum%20lernst%20du%20T%C3%BCrkisch%3F&hash=012wgsze',
        currentSentence: 'Warum lernst du Türkisch?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wieso%20sprichst%20du%20T%C3%BCrkisch%3F&hash=012lf8xd',
        currentSentence: 'Wieso sprichst du Türkisch?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=F%C3%BCr%20mich%20ist%20es%20leichter%20auf%20T%C3%BCrkisch%20zu%20schreiben.%20T%C3%BCrkisch%20zu%20sprechen%20ist%20ziemlich%20schwer.&hash=01yl9w89',
        currentSentence: 'Für mich ist es leichter auf Türkisch zu schreiben. Türkisch zu sprechen ist ziemlich schwer.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20liebe%20T%C3%BCrkisch!%20Weil%20diese%20Sprache%20mehr%20ist%20als%20die%20Summe%20ihrer%20Worte.&hash=01xip3n5',
        currentSentence: 'Ich liebe Türkisch! Weil diese Sprache mehr ist als die Summe ihrer Worte.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Welche%20t%C3%BCrkische%20Serien%20guckt%20ihr%3F&hash=00pczekz',
        currentSentence: 'Welche türkische Serien guckt ihr?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Sollte%20man%20einen%20t%C3%BCrkischen%20Pr%C3%A4sidenten%20%C3%BCberhaupt%20ernst%20nehmen%3F&hash=00bzz2ui',
        currentSentence: 'Sollte man einen türkischen Präsidenten überhaupt ernst nehmen?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Sprechen%20Sie%20T%C3%BCrkisch%3F&hash=00s8wi18',
        currentSentence: 'Sprechen Sie Türkisch?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20lerne%20T%C3%BCrkisch.&hash=01cno2a4',
        currentSentence: 'Ich lerne Türkisch.'
      }
    ]
  },
  {
    Zeichnung: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Zwei%20von%20Toms%20sch%C3%B6nsten%20Zeichnungen%20wanderten%20auf%20den%20M%C3%BCll.&hash=01dd52zt',
        currentSentence: 'Zwei von Toms schönsten Zeichnungen wanderten auf den Müll.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ist%20das%20ein%20Bild%20von%20seiner%20eigenen%20Zeichnung%3F&hash=01ecc2xh',
        currentSentence: 'Ist das ein Bild von seiner eigenen Zeichnung?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Mir%20gef%C3%A4llt%20die%20Farbe%20der%20Zeichnung!&hash=000hga5l',
        currentSentence: 'Mir gefällt die Farbe der Zeichnung!'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Warum%20haben%20Menschen%20in%20deinen%20Zeichnungen%20keinen%20Mund%20und%20keine%20Augen%3F&hash=00csaxmr',
        currentSentence: 'Warum haben Menschen in deinen Zeichnungen keinen Mund und keine Augen?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Schau%20dir%20diese%20Zeichnung%20an.&hash=01htt1uv',
        currentSentence: 'Schau dir diese Zeichnung an.'
      }
    ]
  },
  {
    inklusive: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Die%20Karten%20gelten%20nur%20zwei%20Tage%2C%20inklusive%20dem%20Tag%2C%20an%20dem%20sie%20gekauft%20wurden.&hash=013pmorv',
        currentSentence: 'Die Karten gelten nur zwei Tage, inklusive dem Tag, an dem sie gekauft wurden.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Der%20Preis%20ist%20inklusive%20Steuer.&hash=01fifcqc',
        currentSentence: 'Der Preis ist inklusive Steuer.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Er%20zahlte%20die%20Schulden%20inklusive%20Zinsen.&hash=006208wi',
        currentSentence: 'Er zahlte die Schulden inklusive Zinsen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ist%20dieser%20Preis%20inklusive%20der%20Mehrwertsteuer%3F&hash=00e9vpf5',
        currentSentence: 'Ist dieser Preis inklusive der Mehrwertsteuer?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Worum%20geht%20es%20bei%20einem%20Vorstellungsgespr%C3%A4ch%3F%20Nun%2C%20du%20musst%20sagen%2C%20was%20der%20Arbeitgeber%20in%20spe%20h%C3%B6ren%20will%2C%20inklusive%20aller%20verf%C3%BCgbaren%20Klischees%20-%20mit%20anderen%20Worten%2C%20du%20musst%20ein%20guter%20Schauspieler%20sein.&hash=001rxi9k',
        currentSentence:
          'Worum geht es bei einem Vorstellungsgespräch? Nun, du musst sagen, was der Arbeitgeber in spe hören will, inklusive aller verfügbaren Klischees - mit anderen Worten, du musst ein guter Schauspieler sein.'
      }
    ]
  },
  {
    Trennung: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Je%20sch%C3%B6ner%20und%20voller%20die%20Erinnerung%2C%20desto%20schwerer%20ist%20die%20Trennung.&hash=005prg2x',
        currentSentence: 'Je schöner und voller die Erinnerung, desto schwerer ist die Trennung.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Sehr%20oft%20ist%20das%20Wiedersehen%20erst%20die%20rechte%20Trennung.&hash=018lx79s',
        currentSentence: 'Sehr oft ist das Wiedersehen erst die rechte Trennung.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Mein%20Mann%20konnte%20Tom%20nach%20der%20Trennung%20besser%20versorgen%20als%20ich.&hash=01up7oj7',
        currentSentence: 'Mein Mann konnte Tom nach der Trennung besser versorgen als ich.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Tom%20und%20Maria%20stehen%20kurz%20vor%20der%20Trennung.&hash=017ikqtr',
        currentSentence: 'Tom und Maria stehen kurz vor der Trennung.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Es%20wird%20nach%20der%20Trennung%20Treffen%20geben.&hash=01fcadm1',
        currentSentence: 'Es wird nach der Trennung Treffen geben.'
      }
    ]
  },
  {
    Sprung: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Du%20hast%20wohl%20einen%20Sprung%20in%20der%20Platte.&hash=01r6dstl',
        currentSentence: 'Du hast wohl einen Sprung in der Platte.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Die%20Natur%20macht%20keine%20Spr%C3%BCnge.&hash=013906hc',
        currentSentence: 'Die Natur macht keine Sprünge.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Schnelle%20Spr%C3%BCnge%20geraten%20selten.&hash=01w38pvg',
        currentSentence: 'Schnelle Sprünge geraten selten.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Sie%20hat%20%E2%80%99nen%20Sprung%20in%20der%20Sch%C3%BCssel.&hash=017rho90',
        currentSentence: 'Sie hat ’nen Sprung in der Schüssel.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Liisa%20half%20Markku%20auf%20die%20Spr%C3%BCnge.&hash=01qycukf',
        currentSentence: 'Liisa half Markku auf die Sprünge.'
      }
    ]
  },
  {
    knusprig: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Die%20Rinde%20ist%20knusprig.&hash=01xboq13',
        currentSentence: 'Die Rinde ist knusprig.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Die%20Pommes%20sind%20sch%C3%B6n%20knusprig%2C%20wie%20ich%20sie%20mag.&hash=01q6bgj9',
        currentSentence: 'Die Pommes sind schön knusprig, wie ich sie mag.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20mag%20Br%C3%B6tchen%20mit%20einer%20knusprigen%20Kruste.&hash=013v6446',
        currentSentence: 'Ich mag Brötchen mit einer knusprigen Kruste.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20muss%20die%20Methode%20lernen%2C%20wie%20man%20Brath%C3%A4hnchen%20mit%20besonders%20knuspriger%20Haut%20hinbekommt.&hash=01m1k2tf',
        currentSentence: 'Ich muss die Methode lernen, wie man Brathähnchen mit besonders knuspriger Haut hinbekommt.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=In%20der%20Kantine%20von%20Toms%20Firma%20gibt%20es%20knusprig-k%C3%B6stliches%20Tonkatsu.&hash=01woblym',
        currentSentence: 'In der Kantine von Toms Firma gibt es knusprig-köstliches Tonkatsu.'
      }
    ]
  },
  {
    herunter: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Sie%20log%20das%20Blaue%20vom%20Himmel%20herunter.&hash=01aa3w4n',
        currentSentence: 'Sie log das Blaue vom Himmel herunter.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Danke%20f%C3%BCr%20das%20Lob%20-%20das%20geht%20wirklich%20wie%20Sahne%20herunter!&hash=0117mtb6',
        currentSentence: 'Danke für das Lob - das geht wirklich wie Sahne herunter!'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Es%20l%C3%A4uft%20ihm%20kalt%20den%20R%C3%BCcken%20herunter.&hash=00zybl68',
        currentSentence: 'Es läuft ihm kalt den Rücken herunter.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Lass%20das%20Fenster%20herunter!&hash=017cdhv6',
        currentSentence: 'Lass das Fenster herunter!'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Tom%20kommt%20die%20Treppe%20herunter.&hash=00uuxn05',
        currentSentence: 'Tom kommt die Treppe herunter.'
      }
    ]
  },
  {
    w: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Das%20franz%C3%B6sische%20Alphabet%20enth%C3%A4lt%20sechsundzwanzig%20Buchstaben%3A%20a%2C%20b%2C%20c%2C%20d%2C%20e%2C%20f%2C%20g%2C%20h%2C%20i%2C%20j%2C%20k%2C%20l%2C%20m%2C%20n%2C%20o%2C%20p%2C%20q%2C%20r%2C%20s%2C%20t%2C%20u%2C%20v%2C%20w%2C%20x%2C%20y%2C%20z.&hash=01slcsdb',
        currentSentence:
          'Das französische Alphabet enthält sechsundzwanzig Buchstaben: a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Eine%20Weste%20ist%20eine%20Jacke%20ohne%20%C3%84rmel.&hash=00bbxd36',
        currentSentence: 'Eine Weste ist eine Jacke ohne Ärmel.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Drei%20W%20bringen%20Pein%3A%20Weiber%2C%20W%C3%BCrfel%20und%20der%20Wein.&hash=00wm1lkj',
        currentSentence: 'Drei W bringen Pein: Weiber, Würfel und der Wein.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Das%20neue%20Jahr%20hat%20so%20lange%20eine%20wei%C3%9Fe%20Weste%2C%20bis%20man%20sie%20anzieht.&hash=00rc999c',
        currentSentence: 'Das neue Jahr hat so lange eine weiße Weste, bis man sie anzieht.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Er%20zog%20die%20Weste%20aus.&hash=00lw1a9e',
        currentSentence: 'Er zog die Weste aus.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Du%20hast%20deine%20Weste%20auf%20links%2C%20dreh%20sie%20mal%20um!&hash=00dmc1qi',
        currentSentence: 'Du hast deine Weste auf links, dreh sie mal um!'
      }
    ]
  },
  {
    mittels: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wenn%20du%20kommunizieren%20willst%2C%20dann%20kannst%20du%20das%20mittels%20Zeichen%20und%20Sprache.&hash=00pwxrcz',
        currentSentence: 'Wenn du kommunizieren willst, dann kannst du das mittels Zeichen und Sprache.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Er%20tut%20alles%20mittels%20der%20zehn%20Finger%20seiner%20H%C3%A4nde.&hash=01w7oe9n',
        currentSentence: 'Er tut alles mittels der zehn Finger seiner Hände.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Mittels%20Esperanto%20ist%20es%20sehr%20leicht%2C%20andere%20Kulturen%20kennenzulernen.&hash=00mfnxzh',
        currentSentence: 'Mittels Esperanto ist es sehr leicht, andere Kulturen kennenzulernen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Rufen%20Sie%20uns%20bitte%20mittels%20dieses%20Knopfes%2C%20wenn%20Sie%20bestellen%20m%C3%B6chten.&hash=01nnjo6w',
        currentSentence: 'Rufen Sie uns bitte mittels dieses Knopfes, wenn Sie bestellen möchten.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Der%20Affe%20nahm%20sich%20mittels%20eines%20Stockes%20eine%20Banane.&hash=00qhyxy6',
        currentSentence: 'Der Affe nahm sich mittels eines Stockes eine Banane.'
      }
    ]
  },
  {
    Reihenfolge: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=%E2%80%9ESollen%20sich%20die%20Kinder%20in%20einer%20bestimmten%20Reihenfolge%20aufstellen%3F%E2%80%9C%20%E2%80%93%20%E2%80%9EJa%2C%20nach%20Alter%20bitte.%E2%80%9C&hash=01y2bm59',
        currentSentence:
          '„Sollen sich die Kinder in einer bestimmten Reihenfolge aufstellen?“ – „Ja, nach Alter bitte.“'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Der%20Kunde%2C%20die%20Mitarbeiter%2C%20die%20Gesellschaft.%20In%20dieser%20Reihenfolge.&hash=00du3a4s',
        currentSentence: 'Der Kunde, die Mitarbeiter, die Gesellschaft. In dieser Reihenfolge.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Niemand%20konnte%20sich%20an%20die%20Reihenfolge%20der%20Ereignisse%20erinnern.&hash=000zd3f3',
        currentSentence: 'Niemand konnte sich an die Reihenfolge der Ereignisse erinnern.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Sie%20h%C3%B6rte%20CDs%20in%20zuf%C3%A4lliger%20Reihenfolge.&hash=012xlisd',
        currentSentence: 'Sie hörte CDs in zufälliger Reihenfolge.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Die%20optimale%20Reihenfolge%20ist%20nicht%201-2-3%2C%20sondern%203-2-1.&hash=00iq040y',
        currentSentence: 'Die optimale Reihenfolge ist nicht 1-2-3, sondern 3-2-1.'
      }
    ]
  },
  {
    Supermarkt: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Hat%20der%20Supermarkt%20schon%20zu%3F&hash=0065neph',
        currentSentence: 'Hat der Supermarkt schon zu?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Es%20ist%20in%20der%20N%C3%A4he%20des%20Supermarkts.&hash=002ekno8',
        currentSentence: 'Es ist in der Nähe des Supermarkts.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Der%20Supermarkt%20hat%20heute%20Tomaten%20im%20Angebot.&hash=01u0g0x5',
        currentSentence: 'Der Supermarkt hat heute Tomaten im Angebot.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20treffe%20sie%20oft%20im%20Supermarkt.&hash=00gfiu7u',
        currentSentence: 'Ich treffe sie oft im Supermarkt.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Sie%20kaufen%20Gem%C3%BCse%20im%20Supermarkt.&hash=00xg3i24',
        currentSentence: 'Sie kaufen Gemüse im Supermarkt.'
      }
    ]
  },
  {
    Cent: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wer%20den%20Cent%20achtet%2C%20sieht%2C%20wie%20er%20zum%20Euro%20w%C3%A4chst.&hash=014htqev',
        currentSentence: 'Wer den Cent achtet, sieht, wie er zum Euro wächst.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=%E2%80%9EDiese%20Puppe%20kostet%20nur%20sechzig%20Cent.%E2%80%9C%C2%A0%E2%80%93%20%E2%80%9EMit%20der%20kann%20aber%20was%20nicht%20stimmen.%E2%80%9C&hash=00cjxzg6',
        currentSentence: '„Diese Puppe kostet nur sechzig Cent.“ – „Mit der kann aber was nicht stimmen.“'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Sie%20bekommen%20keinen%20Cent.&hash=01p8wfk1',
        currentSentence: 'Sie bekommen keinen Cent.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=100%20Cent%20sind%20ein%20Dollar.&hash=01gtlz57',
        currentSentence: '100 Cent sind ein Dollar.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Schade%2C%20dass%20ich%20keinen%20Cent%20zur%20Verf%C3%BCgung%20habe.&hash=00dd0kk0',
        currentSentence: 'Schade, dass ich keinen Cent zur Verfügung habe.'
      }
    ]
  },
  {
    benehmen: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Das%20Benehmen%20der%20Sch%C3%BCler%20f%C3%A4llt%20oft%20auf%20die%20Lehrer%20zur%C3%BCck.&hash=01js4sck',
        currentSentence: 'Das Benehmen der Schüler fällt oft auf die Lehrer zurück.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Gutes%20Benehmen%20ist%20die%20Kunst%2C%20Menschen%20unseren%20Umgang%20angenehm%20zu%20machen.&hash=01vcke61',
        currentSentence: 'Gutes Benehmen ist die Kunst, Menschen unseren Umgang angenehm zu machen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Auf%20%C3%B6ffentlichen%20Posten%20ist%20das%20Benehmen%20nicht%20von%20der%20Position%20zu%20trennen.&hash=00sg5tkn',
        currentSentence: 'Auf öffentlichen Posten ist das Benehmen nicht von der Position zu trennen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Von%20Tom%20h%C3%A4tte%20ich%20mir%20ein%20besseres%20Benehmen%20erwartet.&hash=00i3xypa',
        currentSentence: 'Von Tom hätte ich mir ein besseres Benehmen erwartet.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20kann%20ihr%20schlechtes%20Benehmen%20einfach%20nicht%20ertragen.&hash=00sgi2vj',
        currentSentence: 'Ich kann ihr schlechtes Benehmen einfach nicht ertragen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Sie%20benimmt%20sich%20noch%20wie%20ein%20kleines%20Kind.&hash=017y0sya',
        currentSentence: 'Sie benimmt sich noch wie ein kleines Kind.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wir%20werden%20Tom%20schon%20zeigen%2C%20wie%20er%20sich%20zu%20benehmen%20hat.&hash=00o2skxh',
        currentSentence: 'Wir werden Tom schon zeigen, wie er sich zu benehmen hat.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wer%20sich%20immer%20normal%20benimmt%2C%20ist%20doch%20nicht%20normal.&hash=00365k9j',
        currentSentence: 'Wer sich immer normal benimmt, ist doch nicht normal.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wir%20werden%20nicht%20erwachsen%2C%20wir%20lernen%20nur%2C%20uns%20in%20der%20%C3%96ffentlichkeit%20zu%20benehmen.&hash=009nillp',
        currentSentence: 'Wir werden nicht erwachsen, wir lernen nur, uns in der Öffentlichkeit zu benehmen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Versuchen%20Sie%20sich%20zu%20benehmen!&hash=01wiyqbh',
        currentSentence: 'Versuchen Sie sich zu benehmen!'
      }
    ]
  },
  {
    treu: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Vergessen%20ist%20Mangel%20an%20Treue.&hash=01h6x7sm',
        currentSentence: 'Vergessen ist Mangel an Treue.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Vertrauen%20ist%20Mut%2C%20und%20Treue%20ist%20Kraft.&hash=0051zoqy',
        currentSentence: 'Vertrauen ist Mut, und Treue ist Kraft.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Treue%20ist%20irgendwo%20absolut%20oder%20sie%20ist%20gar%20nichts.&hash=01eu2mei',
        currentSentence: 'Treue ist irgendwo absolut oder sie ist gar nichts.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Treue%20gibt%20es%20nur%20in%20Freiheit.&hash=00h5j4r5',
        currentSentence: 'Treue gibt es nur in Freiheit.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Treue%20Diener%20verdienen%20treue%20Herrn.&hash=01h5x5ee',
        currentSentence: 'Treue Diener verdienen treue Herrn.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Bleib%20deinen%20Freunden%20treu!&hash=00ecs0jf',
        currentSentence: 'Bleib deinen Freunden treu!'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Nur%20wer%20sich%20%C3%A4ndert%2C%20bleibt%20sich%20treu.&hash=00z8ziko',
        currentSentence: 'Nur wer sich ändert, bleibt sich treu.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Liebe%20ist%2C%20wenn%20es%20Spass%20macht%2C%20treu%20zu%20sein.&hash=01le2qjk',
        currentSentence: 'Liebe ist, wenn es Spass macht, treu zu sein.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Bleibe%20dir%20treu.&hash=015fvc9w',
        currentSentence: 'Bleibe dir treu.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ihnen%20bleibt%20auch%20in%20Zukunft%20das%20Gl%C3%BCck%20treu.&hash=005quisi',
        currentSentence: 'Ihnen bleibt auch in Zukunft das Glück treu.'
      }
    ]
  },
  {
    Existenz: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Unser%20Ziel%20ist%20ein%20vollst%C3%A4ndiges%20Verst%C3%A4ndnis%20der%20Ereignisse%2C%20die%20uns%20umgeben%2C%20und%20unserer%20Existenz.&hash=00pda8jg',
        currentSentence:
          'Unser Ziel ist ein vollständiges Verständnis der Ereignisse, die uns umgeben, und unserer Existenz.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Der%20Sinn%20ihrer%20Existenz%20war%20es%2C%20zu%20sterben%20und%20auf%20ewig%20zu%20leben.&hash=0003h2mr',
        currentSentence: 'Der Sinn ihrer Existenz war es, zu sterben und auf ewig zu leben.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Toms%20Verschwendungssucht%20hat%20seine%20gesamte%20Existenz%20zerst%C3%B6rt.&hash=01j7cy71',
        currentSentence: 'Toms Verschwendungssucht hat seine gesamte Existenz zerstört.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Tirili!%20Tirili!%20Ich%20lebe!%20Ich%20f%C3%BChle%20den%20s%C3%BC%C3%9Fen%20Schmerz%20der%20Existenz.&hash=019pi1an',
        currentSentence: 'Tirili! Tirili! Ich lebe! Ich fühle den süßen Schmerz der Existenz.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wir%20glauben%20an%20die%20Existenz%20Gottes.&hash=0062oved',
        currentSentence: 'Wir glauben an die Existenz Gottes.'
      }
    ]
  },
  {
    angemessen: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Dieser%20Preis%20ist%20angemessen.&hash=013vuhfr',
        currentSentence: 'Dieser Preis ist angemessen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20muss%20Sie%20bitten%2C%20sich%20so%20zu%20benehmen%2C%20wie%20es%20der%20Situation%20angemessen%20ist.&hash=01j8foz1',
        currentSentence: 'Ich muss Sie bitten, sich so zu benehmen, wie es der Situation angemessen ist.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Er%20beobachtete%20das%20gelassen%20aus%20angemessenem%20Abstand.&hash=015gn6nj',
        currentSentence: 'Er beobachtete das gelassen aus angemessenem Abstand.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Es%20erschien%20angemessen.&hash=0015kl5r',
        currentSentence: 'Es erschien angemessen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Der%20Anwalt%20hat%20ein%20angemessenes%20Einkommen.&hash=00pljofc',
        currentSentence: 'Der Anwalt hat ein angemessenes Einkommen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Es%20war%20absolut%20angemessen%2C%20dass%20sie%20dies%20getan%20hat.&hash=00dq3f4z',
        currentSentence: 'Es war absolut angemessen, dass sie dies getan hat.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Diese%20Arbeit%20ist%20f%C3%BCr%20junge%20Frauen%20nicht%20angemessen.&hash=00nb5klp',
        currentSentence: 'Diese Arbeit ist für junge Frauen nicht angemessen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Das%20w%C3%A4re%20wahrscheinlich%20nicht%20angemessen.&hash=01lmzc1a',
        currentSentence: 'Das wäre wahrscheinlich nicht angemessen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Meine%20Rede%20war%20dem%20Anlass%20angemessen.&hash=01y80xn2',
        currentSentence: 'Meine Rede war dem Anlass angemessen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Seine%20Sprache%20war%20dem%20Anla%C3%9F%20angemessen.&hash=0106ie7d',
        currentSentence: 'Seine Sprache war dem Anlaß angemessen.'
      }
    ]
  },
  {
    bemühen: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Warum%20bem%C3%BChst%20du%20dich%2C%20mich%20zum%20L%C3%A4cheln%20zu%20bringen%3F&hash=01fef78s',
        currentSentence: 'Warum bemühst du dich, mich zum Lächeln zu bringen?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Man%20kann%20nicht%20immer%20perfekt%20sein.%20Wichtig%20ist%2C%20sich%20zu%20bem%C3%BChen.&hash=01tf0sq4',
        currentSentence: 'Man kann nicht immer perfekt sein. Wichtig ist, sich zu bemühen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Er%20hat%20sich%20sehr%20um%20das%20Projekt%20bem%C3%BCht.&hash=01vzpqhe',
        currentSentence: 'Er hat sich sehr um das Projekt bemüht.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20m%C3%B6chte%20mich%20bei%20allen%20bedanken%2C%20die%20sich%20bem%C3%BCht%20haben%2C%20meine%20S%C3%A4tze%20zu%20verbessern.&hash=007qr9rd',
        currentSentence: 'Ich möchte mich bei allen bedanken, die sich bemüht haben, meine Sätze zu verbessern.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Maria%20bem%C3%BChte%20sich%2C%20m%C3%B6glichst%20interessante%20S%C3%A4tze%20zu%20schreiben.&hash=00so8vg2',
        currentSentence: 'Maria bemühte sich, möglichst interessante Sätze zu schreiben.'
      }
    ]
  },
  {
    l: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Tom%20wei%C3%9F%20nicht%2C%20wie%20man%20die%20Regel%20von%20de%20L%E2%80%99H%C3%B4pital%20anwendet%2C%20um%20Limites%20zu%20finden.&hash=01v63rg3',
        currentSentence: 'Tom weiß nicht, wie man die Regel von de L’Hôpital anwendet, um Limites zu finden.'
      },
      {
        url: "https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Gewisse%20Leute%20behaupten%2C%20L'auberge%20espagnole%20sei%20ein%20Pornofilm.&hash=00j68vt1",
        currentSentence: "Gewisse Leute behaupten, L'auberge espagnole sei ein Pornofilm."
      },
      {
        url: "https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Vor%20einem%20Jahr%20wurde%20die%20italienische%20Stadt%20L'Aquila%20von%20einem%20Erdbeben%20der%20St%C3%A4rke%206%2C3%20auf%20der%20Richterskala%20ersch%C3%BCttert.&hash=00f2evvw",
        currentSentence:
          "Vor einem Jahr wurde die italienische Stadt L'Aquila von einem Erdbeben der Stärke 6,3 auf der Richterskala erschüttert."
      },
      {
        url: "https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Der%20erste%20belgische%20Esperantist%20war%20Armand%20Dethier%2C%20Direktor%20der%20Zeitschrift%20L'Annonce%20Timbrologique%2C%C2%A0in%20der%20er%20im%20Juni%20und%20September%201893%20Artikel%20%C3%BCber%20Esperanto%20ver%C3%B6ffentlichte.&hash=0045tfn3",
        currentSentence:
          "Der erste belgische Esperantist war Armand Dethier, Direktor der Zeitschrift L'Annonce Timbrologique, in der er im Juni und September 1893 Artikel über Esperanto veröffentlichte."
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Der%20Springer%20bewegt%20sich%20gem%C3%A4%C3%9F%20der%20Figur%20des%20Buchstabens%20%22L%22%3A%20zwei%20Quadrate%20vertikal%20und%20eines%20horizontal%20oder%20ein%20Quadrat%20vertikal%20und%20zwei%20horizontal.&hash=01eu7gx3',
        currentSentence:
          'Der Springer bewegt sich gemäß der Figur des Buchstabens "L": zwei Quadrate vertikal und eines horizontal oder ein Quadrat vertikal und zwei horizontal.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=J%C3%A4hrlich%20kommen%20etwa%204500%20neue%20LPs%20mit%20Popmusik%20raus.&hash=00ih3hjc',
        currentSentence: 'Jährlich kommen etwa 4500 neue LPs mit Popmusik raus.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Das%20Wort%20%E2%80%9EMilligramm%E2%80%9C%20schreibt%20man%20mit%20zwei%20l%20und%20zwei%20m.&hash=008wc9rz',
        currentSentence: 'Das Wort „Milligramm“ schreibt man mit zwei l und zwei m.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wenn%20man%20Rolll%C3%A4den%20mit%203%20L%20schreibt%2C%20sieht%20man%20sie%20f%C3%B6rmlich%20vor%20sich.&hash=00h0s4nq',
        currentSentence: 'Wenn man Rollläden mit 3 L schreibt, sieht man sie förmlich vor sich.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Das%20franz%C3%B6sische%20Alphabet%20enth%C3%A4lt%20sechsundzwanzig%20Buchstaben%3A%20a%2C%20b%2C%20c%2C%20d%2C%20e%2C%20f%2C%20g%2C%20h%2C%20i%2C%20j%2C%20k%2C%20l%2C%20m%2C%20n%2C%20o%2C%20p%2C%20q%2C%20r%2C%20s%2C%20t%2C%20u%2C%20v%2C%20w%2C%20x%2C%20y%2C%20z.&hash=01slcsdb',
        currentSentence:
          'Das französische Alphabet enthält sechsundzwanzig Buchstaben: a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ist%20es%20eigentlich%20wahr%2C%20dass%20in%20vielen%20Sprachen%20im%20Wort%20f%C3%BCr%20Nase%20ein%20N%20vorkommt%2C%20und%20im%20Wort%20f%C3%BCr%20Zunge%20ein%20L%3F&hash=006epcxk',
        currentSentence:
          'Ist es eigentlich wahr, dass in vielen Sprachen im Wort für Nase ein N vorkommt, und im Wort für Zunge ein L?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20les%E2%80%99%20jetzt%20keine%20Nachrichten%20mehr%2C%20weil%20ich%20keine%20Lust%20mehr%20drauf%20habe.&hash=01fb5uds',
        currentSentence: 'Ich les’ jetzt keine Nachrichten mehr, weil ich keine Lust mehr drauf habe.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Der%20sechsth%C3%A4ufigste%20Buchstabe%20im%20Esperanto%20ist%20%22l%22.&hash=01c5j9yu',
        currentSentence: 'Der sechsthäufigste Buchstabe im Esperanto ist "l".'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Welches%20die%20Sprache%20der%20Worte%2C%20die%20man%20in%20Anf%C3%BChrungszeichen%20einschlie%C3%9Ft%2C%20auch%20sei%3A%20man%20verwendet%20im%20Franz%C3%B6sischen%20franz%C3%B6sische%20Guillemets.%20Diese%20bestehen%20aus%20doppelten%20Chevrons%2C%20deren%20erstes%20Paar%20%E2%80%9Ele%20guillemet%20ouvrant%E2%80%9C%20(das%20%C3%B6ffnende%20Anf%C3%BChrungszeichen)%20und%20deren%20zweites%20%E2%80%9Ele%20guillemet%20fermant%E2%80%9C%20(das%20schlie%C3%9Fende%20Anf%C3%BChrungszeichen)%20hei%C3%9Ft.&hash=00shi5ue',
        currentSentence:
          'Welches die Sprache der Worte, die man in Anführungszeichen einschließt, auch sei: man verwendet im Französischen französische Guillemets. Diese bestehen aus doppelten Chevrons, deren erstes Paar „le guillemet ouvrant“ (das öffnende Anführungszeichen) und deren zweites „le guillemet fermant“ (das schließende Anführungszeichen) heißt.'
      }
    ]
  },
  {
    hacken: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Die%20Soldaten%20schlugen%20die%20Hacken%20zusammen.&hash=0128zj1j',
        currentSentence: 'Die Soldaten schlugen die Hacken zusammen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Beim%20Wandern%20in%20neuen%20Stiefeln%20habe%20ich%20mir%20am%20Hacken%20eine%20Blase%20zugezogen.&hash=00ccw39e',
        currentSentence: 'Beim Wandern in neuen Stiefeln habe ich mir am Hacken eine Blase zugezogen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Die%20Universit%C3%A4t%20bestrafte%20disziplinarisch%20Mark%20Zuckerberg%20f%C3%BCr%20das%20Hacken%20ihres%20Datenbestands.&hash=00hbib3d',
        currentSentence: 'Die Universität bestrafte disziplinarisch Mark Zuckerberg für das Hacken ihres Datenbestands.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20habe%20keine%20Arbeit%20und%20finde%20keine%20Wohnung.%20Seit%20Tagen%20laufe%20ich%20mir%20die%20Hacken%20ab.%20Entweder%20sind%20die%20Wohnungen%20unbezahlbar%2C%20oder%20die%20Makler%20wollen%20keine%20Kinder.%20Was%20mache%20ich%20nur%3F&hash=01pepkwu',
        currentSentence:
          'Ich habe keine Arbeit und finde keine Wohnung. Seit Tagen laufe ich mir die Hacken ab. Entweder sind die Wohnungen unbezahlbar, oder die Makler wollen keine Kinder. Was mache ich nur?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wenn%20sich%20Tom%20einer%20T%C3%BCr%20n%C3%A4hert%2C%20muss%20er%20drei%20Spr%C3%BCnge%20machen%2C%20dreimal%20die%20Hacken%20zusammenschlagen%20und%20dreimal%20in%20der%20Kehle%20einen%20Laut%20von%20sich%20geben.&hash=015qy3c6',
        currentSentence:
          'Wenn sich Tom einer Tür nähert, muss er drei Sprünge machen, dreimal die Hacken zusammenschlagen und dreimal in der Kehle einen Laut von sich geben.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wir%20m%C3%BCssen%20noch%20das%20Heu%20wenden%20und%20Holz%20hacken.&hash=0141ut7z',
        currentSentence: 'Wir müssen noch das Heu wenden und Holz hacken.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20glaube%20wohl%2C%20es%20hackt!&hash=01ddy474',
        currentSentence: 'Ich glaube wohl, es hackt!'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Der%20Feuerwehrmann%20hackte%20sich%20durch%20die%20T%C3%BCr.&hash=00qlo859',
        currentSentence: 'Der Feuerwehrmann hackte sich durch die Tür.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wie%20hackt%20man%20am%20besten%20eine%20Zwiebel%3F&hash=016yoz9f',
        currentSentence: 'Wie hackt man am besten eine Zwiebel?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Die%20anderen%20M%C3%A4dchen%20hackten%20auf%20Maria%20herum%2C%20weil%20sie%20h%C3%BCbsch%20war.&hash=01ocsf7l',
        currentSentence: 'Die anderen Mädchen hackten auf Maria herum, weil sie hübsch war.'
      }
    ]
  },
  {
    Herstellung: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Sie%20verwandte%20ihre%20freie%20Zeit%20auf%20die%20Herstellung%20von%20Puppen.&hash=00cpayka',
        currentSentence: 'Sie verwandte ihre freie Zeit auf die Herstellung von Puppen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Die%20Herstellung%20von%20Papier%20verbraucht%20viel%20Wasser.&hash=00ebfhhm',
        currentSentence: 'Die Herstellung von Papier verbraucht viel Wasser.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Diese%20traditionelle%20Herstellung%20ist%20aufw%C3%A4ndig.&hash=01cjgpka',
        currentSentence: 'Diese traditionelle Herstellung ist aufwändig.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Eine%20Spindel%20wird%20zur%20Herstellung%20von%20Garn%20verwendet.&hash=012dmqyr',
        currentSentence: 'Eine Spindel wird zur Herstellung von Garn verwendet.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Viele%20Kleidungsst%C3%BCcke%20werden%20in%20Bangladesch%20gefertigt%2C%20weil%20die%20Herstellung%20dort%20am%20billigsten%20ist.&hash=01djyqtu',
        currentSentence:
          'Viele Kleidungsstücke werden in Bangladesch gefertigt, weil die Herstellung dort am billigsten ist.'
      }
    ]
  },
  {
    Tricks: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Einem%20alten%20Hund%20kannst%20du%20keine%20neuen%20Tricks%20beibringen.&hash=00sgm0rv',
        currentSentence: 'Einem alten Hund kannst du keine neuen Tricks beibringen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Er%20kennt%20alle%20Tricks.&hash=001bj89d',
        currentSentence: 'Er kennt alle Tricks.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Tom%20hatte%20einige%20Tricks%20auf%20Lager.&hash=00n3ue3a',
        currentSentence: 'Tom hatte einige Tricks auf Lager.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Die%20folgenden%20Tricks%20k%C3%B6nnen%20dir%20helfen.&hash=00kcwasb',
        currentSentence: 'Die folgenden Tricks können dir helfen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Es%20gibt%20viele%20Tricks%2C%20um%20den%20Tod%20zu%20vermeiden.&hash=01182j27',
        currentSentence: 'Es gibt viele Tricks, um den Tod zu vermeiden.'
      }
    ]
  },
  {
    Drachen: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Sie%20ist%20ein%20Drachen.&hash=014u0c8o',
        currentSentence: 'Sie ist ein Drachen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Der%20Drachen%20h%C3%A4ngt%20im%20Baum%20fest.&hash=012ecc4i',
        currentSentence: 'Der Drachen hängt im Baum fest.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Der%20Drachen%20flog%20schnell%20wie%20ein%20Vogel%20in%20die%20Luft.&hash=002t0pb5',
        currentSentence: 'Der Drachen flog schnell wie ein Vogel in die Luft.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Lasst%20uns%20Drachen%20steigen%20lassen.&hash=018mkffr',
        currentSentence: 'Lasst uns Drachen steigen lassen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Tom%20hat%20mir%20einen%20Drachen%20gekauft.&hash=01wu8vjo',
        currentSentence: 'Tom hat mir einen Drachen gekauft.'
      }
    ]
  },
  {
    General: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Man%20gab%20General%20Grant%20die%20Schuld.&hash=01bdy3n3',
        currentSentence: 'Man gab General Grant die Schuld.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Zu%20Befehl%2C%20Herr%20General!&hash=00zht3yb',
        currentSentence: 'Zu Befehl, Herr General!'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=General%20de%20Gaulle%20hatte%20das%20Dorf%20Tizi%20Hibel%20besucht.&hash=01rghfl2',
        currentSentence: 'General de Gaulle hatte das Dorf Tizi Hibel besucht.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=General%20Montcalm%20griff%201757%20mehrere%20britische%20Forts%20an.&hash=013ce0t1',
        currentSentence: 'General Montcalm griff 1757 mehrere britische Forts an.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=General%20Clausewitz%20sagte%2C%20Krieg%20sei%20die%20Fortsetzung%20der%20Politik%20mit%20anderen%20Mitteln.&hash=01ljkfbw',
        currentSentence: 'General Clausewitz sagte, Krieg sei die Fortsetzung der Politik mit anderen Mitteln.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20sah%20noch%20niemals%20ein%20Grab%20des%20unbekannten%20Generals.&hash=00k2fihz',
        currentSentence: 'Ich sah noch niemals ein Grab des unbekannten Generals.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Gener%C3%A4le%20siegen%2C%20Soldaten%20fallen.&hash=00hbsrlr',
        currentSentence: 'Generäle siegen, Soldaten fallen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Der%20General%20verf%C3%BCgte%20%C3%BCber%20zehntausend%20Mann%20unter%20Waffen.&hash=002spiqx',
        currentSentence: 'Der General verfügte über zehntausend Mann unter Waffen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20sage%20oft%2C%20dass%20ein%20gro%C3%9Fartiger%20Arzt%20mehr%20Leute%20t%C3%B6tet%20als%20ein%20gro%C3%9Fartiger%20General.&hash=00nhri8d',
        currentSentence: 'Ich sage oft, dass ein großartiger Arzt mehr Leute tötet als ein großartiger General.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Die%20drei%20bekanntesten%20Generale%20in%20Amerika%20sind%20immer%20noch%20General%20Motors%2C%20General%20Electric%20und%20General%20Food.&hash=01lcj6gg',
        currentSentence:
          'Die drei bekanntesten Generale in Amerika sind immer noch General Motors, General Electric und General Food.'
      }
    ]
  },
  {
    versetzen: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Versuch%20dich%20in%20meine%20Lage%20zu%20versetzen!&hash=01j9kyb8',
        currentSentence: 'Versuch dich in meine Lage zu versetzen!'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Er%20ist%20in%20eine%20andere%20Abteilung%20versetzt%20worden.&hash=019x32v1',
        currentSentence: 'Er ist in eine andere Abteilung versetzt worden.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Tom%20fehlt%20die%20F%C3%A4higkeit%2C%20sich%20in%20jemandes%20anderen%20Lage%20zu%20versetzen.&hash=00bh2dv2',
        currentSentence: 'Tom fehlt die Fähigkeit, sich in jemandes anderen Lage zu versetzen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Aber%20Berge%20k%C3%B6nnen%20sie%20eben%20nicht%20versetzen.&hash=01v1kuxi',
        currentSentence: 'Aber Berge können sie eben nicht versetzen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Der%20Glaube%20kann%20Berge%20versetzen.&hash=00fgjn6c',
        currentSentence: 'Der Glaube kann Berge versetzen.'
      }
    ]
  },
  {
    Kapitän: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Kapit%C3%A4n%20Cook%20entdeckte%20diese%20Inseln.&hash=00vbcazp',
        currentSentence: 'Kapitän Cook entdeckte diese Inseln.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ja!%20Es%20ist%20unglaublich%2C%20aber%20wahr.%20Kapit%C3%A4n%20Nemo%20hat%20noch%20mehr%20B%C3%BCcher%20als%20ich.&hash=00q96k3n',
        currentSentence: 'Ja! Es ist unglaublich, aber wahr. Kapitän Nemo hat noch mehr Bücher als ich.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Kapit%C3%A4n%20Nemo%20k%C3%A4mpfte%20f%C3%BCr%20die%20Freiheit%20Indiens.&hash=00fcnk6n',
        currentSentence: 'Kapitän Nemo kämpfte für die Freiheit Indiens.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Kapit%C3%A4n%20Hansen%20ging%20mit%20seinem%20Schiff%20unter.&hash=00tc3m97',
        currentSentence: 'Kapitän Hansen ging mit seinem Schiff unter.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Der%20erste%20Mensch%2C%20dem%20es%20gelang%2C%20%C3%BCber%20den%20%C3%84rmelkanal%20zu%20schwimmen%2C%20war%20Kapit%C3%A4n%20Webb.&hash=01tcfx1s',
        currentSentence: 'Der erste Mensch, dem es gelang, über den Ärmelkanal zu schwimmen, war Kapitän Webb.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Der%20Kapit%C3%A4n%20geht%20als%20Letzter%20von%20Bord.&hash=01po7j9g',
        currentSentence: 'Der Kapitän geht als Letzter von Bord.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Der%20Kapit%C3%A4n%20ist%20noch%20nicht%20an%20Bord%20des%20Schiffes.&hash=01x2qvj7',
        currentSentence: 'Der Kapitän ist noch nicht an Bord des Schiffes.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20bin%20der%20Herr%20meines%20Schicksals.%20Ich%20bin%20der%20Kapit%C3%A4n%20meiner%20Seele.&hash=00hv0v8j',
        currentSentence: 'Ich bin der Herr meines Schicksals. Ich bin der Kapitän meiner Seele.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Sie%20w%C3%A4hlten%20Peter%20zu%20ihrem%20Kapit%C3%A4n.&hash=01rrlvqu',
        currentSentence: 'Sie wählten Peter zu ihrem Kapitän.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Der%20Kapit%C3%A4n%20begann%20mit%20neunzehn%20Jahren%2C%20zur%20See%20zu%20fahren.&hash=01g4z279',
        currentSentence: 'Der Kapitän begann mit neunzehn Jahren, zur See zu fahren.'
      }
    ]
  },
  {
    umfassend: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Seine%20umfassenden%20Kenntnisse%20haben%20mich%20beeindruckt.&hash=00i723q8',
        currentSentence: 'Seine umfassenden Kenntnisse haben mich beeindruckt.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Sie%20scheinen%20dar%C3%BCber%20umfassend%20Bescheid%20zu%20wissen.&hash=00ybei7f',
        currentSentence: 'Sie scheinen darüber umfassend Bescheid zu wissen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Es%20ist%20wichtig%2C%20sich%20vorher%20umfassend%20vorzubereiten.&hash=00mz542c',
        currentSentence: 'Es ist wichtig, sich vorher umfassend vorzubereiten.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Die%20Demokratische%20Partei%20bedarf%20einer%20umfassenden%20Reform.&hash=016u793j',
        currentSentence: 'Die Demokratische Partei bedarf einer umfassenden Reform.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20m%C3%B6chte%20aufzeigen%2C%20dass%20viele%20Tests%20notwendig%20sind%2C%20um%20ein%20umfassendes%20Bild%20zu%20erhalten.&hash=00zfwhuc',
        currentSentence: 'Ich möchte aufzeigen, dass viele Tests notwendig sind, um ein umfassendes Bild zu erhalten.'
      }
    ]
  },
  {
    verzichten: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wer%20verzichtet%2C%20gewinnt.&hash=00cxb87s',
        currentSentence: 'Wer verzichtet, gewinnt.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Manches%20Vergn%C3%BCgen%20besteht%20darin%2C%20dass%20man%20mit%20Vergn%C3%BCgen%20darauf%20verzichtet.&hash=003euapc',
        currentSentence: 'Manches Vergnügen besteht darin, dass man mit Vergnügen darauf verzichtet.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wer%20wenig%20bedarf%2C%20der%20kommt%20nicht%20in%20die%20Lage%2C%20auf%20vieles%20verzichten%20zu%20m%C3%BCssen.&hash=00vup6oy',
        currentSentence: 'Wer wenig bedarf, der kommt nicht in die Lage, auf vieles verzichten zu müssen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wer%20glaubt%2C%20dass%20er%20auf%20alle%20Welt%20verzichten%20k%C3%B6nnte%2C%20t%C3%A4uscht%20sich.&hash=00bzejy5',
        currentSentence: 'Wer glaubt, dass er auf alle Welt verzichten könnte, täuscht sich.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Liebe%C2%A0%E2%80%93%20das%20ist%20aus%20freien%20St%C3%BCcken%20verzichten.&hash=01go7rzq',
        currentSentence: 'Liebe – das ist aus freien Stücken verzichten.'
      }
    ]
  },
  {
    Arbeitsplatz: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20bin%20%C3%BCberzeugt%2C%20dass%20dieser%20Arbeitsplatz%20ideal%20f%C3%BCr%20dich%20ist.&hash=01dwnmj6',
        currentSentence: 'Ich bin überzeugt, dass dieser Arbeitsplatz ideal für dich ist.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wenn%20man%20das%20tun%20w%C3%BCrde%2C%20dann%20w%C3%BCrde%20man%20viele%20Arbeitspl%C3%A4tze%20schaffen.&hash=00gwxjpy',
        currentSentence: 'Wenn man das tun würde, dann würde man viele Arbeitsplätze schaffen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Manche%20sagen%3A%20Arbeitspl%C3%A4tze%20k%C3%B6nnen%20verloren%20gehen.&hash=01idajrj',
        currentSentence: 'Manche sagen: Arbeitsplätze können verloren gehen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20suche%20einen%20Arbeitsplatz%20in%20der%20N%C3%A4he%20meines%20Hauses.&hash=015565nr',
        currentSentence: 'Ich suche einen Arbeitsplatz in der Nähe meines Hauses.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Das%20Volk%20fordert%20mehr%20Arbeitspl%C3%A4tze%20und%20weniger%20Steuern.&hash=01uylvfx',
        currentSentence: 'Das Volk fordert mehr Arbeitsplätze und weniger Steuern.'
      }
    ]
  },
  {
    Datenverarbeitung: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Mit%20Ausbreitung%20der%20elektronischen%20Datenverarbeitung%20ist%20es%20in%20der%20Typografie%20aktuell%20zur%20Regel%20geworden%2C%20auch%20die%20Gro%C3%9Fbuchsatben%20mit%20einem%20Akzent%20zu%20versehen.&hash=00mtbizm',
        currentSentence:
          'Mit Ausbreitung der elektronischen Datenverarbeitung ist es in der Typografie aktuell zur Regel geworden, auch die Großbuchsatben mit einem Akzent zu versehen.'
      }
    ]
  },
  {
    Regelung: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Diese%20Regelung%20%C3%B6ffnet%20Betr%C3%BCgereien%20T%C3%BCr%20und%20Tor.&hash=01yglkag',
        currentSentence: 'Diese Regelung öffnet Betrügereien Tür und Tor.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Diese%20Regelung%20erscheint%20mir%20nicht%20die%20beste.&hash=009ot5hp',
        currentSentence: 'Diese Regelung erscheint mir nicht die beste.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Alles%20lief%20gem%C3%A4%C3%9F%20den%20gesetzlichen%20Regelungen%20ab.&hash=01grgi7u',
        currentSentence: 'Alles lief gemäß den gesetzlichen Regelungen ab.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20wollte%20damals%20eine%20allgemeine%20Regelung%20vorschlagen.&hash=00ar55hk',
        currentSentence: 'Ich wollte damals eine allgemeine Regelung vorschlagen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Diese%20Regelung%20besteht%20nur%20vor%C3%BCbergehend.&hash=01i6ncdy',
        currentSentence: 'Diese Regelung besteht nur vorübergehend.'
      }
    ]
  },
  {
    einst: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wir%20k%C3%B6nnten%20Menschen%20sein%2C%20einst%20waren%20wir%20schon%20Kinder.&hash=01b9wn1s',
        currentSentence: 'Wir könnten Menschen sein, einst waren wir schon Kinder.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Um%20diesen%20einst%20so%20beliebten%20S%C3%A4nger%20ist%20es%20still%20geworden.&hash=00fgbnzl',
        currentSentence: 'Um diesen einst so beliebten Sänger ist es still geworden.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Einst%20konnte%20man%20hier%20gut%20leben%2C%20doch%20jetzt%20ist%20das%20nicht%20mehr%20m%C3%B6glich.&hash=00er4y23',
        currentSentence: 'Einst konnte man hier gut leben, doch jetzt ist das nicht mehr möglich.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Heute%20erinnert%20nichts%20mehr%20an%20die%20Schlacht%2C%20die%20hier%20einst%20geschlagen%20wurde.&hash=00889e4j',
        currentSentence: 'Heute erinnert nichts mehr an die Schlacht, die hier einst geschlagen wurde.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wenn%20nur%20das%20Feuer%20von%20einst%20in%20uns%20brennte!&hash=01kas3ao',
        currentSentence: 'Wenn nur das Feuer von einst in uns brennte!'
      }
    ]
  },
  {
    zurückgeben: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Er%20hat%20die%20Tickets%20zur%C3%BCckgegeben.&hash=013s706r',
        currentSentence: 'Er hat die Tickets zurückgegeben.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20muss%20das%20Buch%20vor%20Samstag%20zur%C3%BCckgeben.&hash=01uynv1z',
        currentSentence: 'Ich muss das Buch vor Samstag zurückgeben.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wann%20muss%20ich%20das%20Auto%20zur%C3%BCckgeben%3F&hash=01rco8sa',
        currentSentence: 'Wann muss ich das Auto zurückgeben?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20habe%20ihm%20ein%20Buch%20geliehen%2C%20aber%20er%20hat%20es%20noch%20nicht%20zur%C3%BCckgegeben.&hash=0096iht9',
        currentSentence: 'Ich habe ihm ein Buch geliehen, aber er hat es noch nicht zurückgegeben.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Der%20lange%20Urlaub%20wird%20ihm%20seine%20Gesundheit%20zur%C3%BCckgeben.&hash=00ux4tg5',
        currentSentence: 'Der lange Urlaub wird ihm seine Gesundheit zurückgeben.'
      }
    ]
  },
  {
    versammeln: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Auf%20dem%20Platz%20vor%20dem%20ber%C3%BChmten%20Geb%C3%A4ude%20versammelten%20sich%20Besucher%20aus%20aller%20Herren%20L%C3%A4nder.&hash=0062s9do',
        currentSentence: 'Auf dem Platz vor dem berühmten Gebäude versammelten sich Besucher aus aller Herren Länder.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wir%20haben%20es%20uns%20zur%20Gewohnheit%20gemacht%2C%20uns%20regelm%C3%A4%C3%9Fig%20zu%20versammeln.&hash=01rm0m7i',
        currentSentence: 'Wir haben es uns zur Gewohnheit gemacht, uns regelmäßig zu versammeln.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Viele%20Menschen%20versammelten%20sich%20zu%20seinem%20Konzert.&hash=00zfvmnt',
        currentSentence: 'Viele Menschen versammelten sich zu seinem Konzert.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Die%20Leute%20versammelten%20sich%20um%20uns%20herum.&hash=005vywl0',
        currentSentence: 'Die Leute versammelten sich um uns herum.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Sie%20versammelte%20ihre%20Kinder%20um%20sich.&hash=004cvpk0',
        currentSentence: 'Sie versammelte ihre Kinder um sich.'
      }
    ]
  },
  {
    gemütlich: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Sein%20Heim%20ist%20sehr%20gem%C3%BCtlich%20eingerichtet.&hash=00dkp2t6',
        currentSentence: 'Sein Heim ist sehr gemütlich eingerichtet.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wir%20sitzen%20gem%C3%BCtlich%20zusammen.&hash=00uojabq',
        currentSentence: 'Wir sitzen gemütlich zusammen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Marias%20Zimmer%20ist%20sehr%20gem%C3%BCtlich.&hash=00ptw3uc',
        currentSentence: 'Marias Zimmer ist sehr gemütlich.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20w%C3%BCnsche%20allen%20einen%20gem%C3%BCtlichen%20Sonntag.&hash=01b136s3',
        currentSentence: 'Ich wünsche allen einen gemütlichen Sonntag.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Er%20wohnt%20in%20einem%20kleinen%2C%20gem%C3%BCtlichen%20Haus.&hash=011wo1c5',
        currentSentence: 'Er wohnt in einem kleinen, gemütlichen Haus.'
      }
    ]
  },
  {
    klettern: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Tom%20kletterte%20durch%20das%20Loch%20in%20der%20Wand%20in%20die%20Freiheit.&hash=00m8mag1',
        currentSentence: 'Tom kletterte durch das Loch in der Wand in die Freiheit.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Sie%20kletterte%20schnell%20auf%20den%20Baum.&hash=005xxaa6',
        currentSentence: 'Sie kletterte schnell auf den Baum.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Kinder%20klettern%20gern%20auf%20B%C3%A4ume.&hash=00c3ya2h',
        currentSentence: 'Kinder klettern gern auf Bäume.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Der%20Affe%20kletterte%20auf%20einen%20Baum.&hash=00msbamd',
        currentSentence: 'Der Affe kletterte auf einen Baum.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Danke%20sch%C3%B6n%2C%20dass%20du%20auf%20diesen%20Baum%20geklettert%20bist%2C%20um%20mir%20zu%20helfen!&hash=01pvem6z',
        currentSentence: 'Danke schön, dass du auf diesen Baum geklettert bist, um mir zu helfen!'
      }
    ]
  },
  {
    Umfang: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Dieser%20See%20hat%20einen%20Umfang%20von%2010%20Meilen.&hash=01ies137',
        currentSentence: 'Dieser See hat einen Umfang von 10 Meilen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Dieser%20Baum%20hat%20einen%20Umfang%20von%203%20Metern.&hash=00ss76jo',
        currentSentence: 'Dieser Baum hat einen Umfang von 3 Metern.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wie%20berechnet%20man%20den%20Radius%2C%20wenn%20man%20den%20Umfang%20kennt%3F&hash=00afo162',
        currentSentence: 'Wie berechnet man den Radius, wenn man den Umfang kennt?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Der%20Stengel%20hat%20einen%20etwas%20gr%C3%B6%C3%9Feren%20Umfang%20als%20dein%20kleiner%20Finger.&hash=01wl62fi',
        currentSentence: 'Der Stengel hat einen etwas größeren Umfang als dein kleiner Finger.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Es%20gab%20zahlreiche%20Beschwerden%20von%20Sch%C3%BClern%20%C3%BCber%20den%20Umfang%20der%20von%20Herrn%20Johannsen%20erteilten%20Hausaufgaben.&hash=00f6icb0',
        currentSentence:
          'Es gab zahlreiche Beschwerden von Schülern über den Umfang der von Herrn Johannsen erteilten Hausaufgaben.'
      }
    ]
  },
  {
    Merkmal: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Welche%20gemeinsamen%20Merkmale%20haben%20die%20verschiedenen%20Varianten%3F&hash=018x3xuv',
        currentSentence: 'Welche gemeinsamen Merkmale haben die verschiedenen Varianten?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Das%20ist%20ein%20f%C3%BCr%20ihn%20typisches%20Merkmal.&hash=01jprcio',
        currentSentence: 'Das ist ein für ihn typisches Merkmal.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Gibt%20es%20ein%20besonderes%20Merkmal%3F&hash=00hvtyma',
        currentSentence: 'Gibt es ein besonderes Merkmal?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Die%20optische%20Komponente%20ist%20hier%20nur%20ein%20Merkmal.&hash=01pz5gy5',
        currentSentence: 'Die optische Komponente ist hier nur ein Merkmal.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Kannst%20du%20uns%20etwas%20%C3%BCber%20die%20%C3%B6kologischen%20Merkmale%20dieser%20Gegend%20sagen%3F&hash=00pand9i',
        currentSentence: 'Kannst du uns etwas über die ökologischen Merkmale dieser Gegend sagen?'
      }
    ]
  }
];
export default data;
