const data = [
  {
    schein: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=K%C3%B6nnen%20Sie%20diesen%2010-Dollar-Schein%20wechseln%3F&hash=01bv729k',
        currentSentence: 'Können Sie diesen 10-Dollar-Schein wechseln?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20hatte%20einen%20Zwanzig-Dollar-Schein%2C%20aber%20ich%20habe%20ihn%20verloren.&hash=002egnox',
        currentSentence: 'Ich hatte einen Zwanzig-Dollar-Schein, aber ich habe ihn verloren.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Kleiner%20habe%20ich%20es%20leider%20nicht.%20K%C3%B6nnen%20Sie%20einen%2010%E2%80%AF000-Yen-Schein%20wechseln%3F&hash=005il77x',
        currentSentence: 'Kleiner habe ich es leider nicht. Können Sie einen 10 000-Yen-Schein wechseln?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Erfolg%20im%20Leben%20ist%20etwas%20Sein%2C%20etwas%20Schein%20und%20sehr%20viel%20Schwein.&hash=00fy55fm',
        currentSentence: 'Erfolg im Leben ist etwas Sein, etwas Schein und sehr viel Schwein.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=25.%20Gesetz%20der%20Macht%3A%20Ergib%20dich%20zum%20Schein%20-%20verwandle%20Schw%C3%A4che%20in%20St%C3%A4rke.&hash=01fyak5i',
        currentSentence: '25. Gesetz der Macht: Ergib dich zum Schein - verwandle Schwäche in Stärke.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Glaube%20an%20deine%20Tr%C3%A4ume%2C%20so%20unm%C3%B6glich%20sie%20auch%20scheinen%20m%C3%B6gen!&hash=00r79ox1',
        currentSentence: 'Glaube an deine Träume, so unmöglich sie auch scheinen mögen!'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Tom%20und%20Maria%20scheinen%20nicht%20besch%C3%A4ftigt%20zu%20sein.&hash=00dpperh',
        currentSentence: 'Tom und Maria scheinen nicht beschäftigt zu sein.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20scheine%20Fieber%20zu%20haben.&hash=0004qf9b',
        currentSentence: 'Ich scheine Fieber zu haben.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Die%20Zahl%20ist%20klein%3B%20drum%2C%20dass%20sie%20gr%C3%B6%C3%9Fer%20scheine%2C%20schreiben%20wir%20sie%20aus.&hash=01j3eako',
        currentSentence: 'Die Zahl ist klein; drum, dass sie größer scheine, schreiben wir sie aus.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Meine%20Augen%20scheinen%20entz%C3%BCndet%20zu%20sein.&hash=01uosdvl',
        currentSentence: 'Meine Augen scheinen entzündet zu sein.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Der%20Schein%20regiert%20die%20Welt%2C%20und%20die%20Gerechtigkeit%20ist%20nur%20auf%20der%20B%C3%BChne.&hash=00zu96qo',
        currentSentence: 'Der Schein regiert die Welt, und die Gerechtigkeit ist nur auf der Bühne.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Der%20Schein%20t%C3%A4uscht.&hash=0105imxw',
        currentSentence: 'Der Schein täuscht.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wer%20den%20Euro%20nicht%20ehrt%2C%20ist%20die%20Scheine%20nicht%20wert.&hash=00helx30',
        currentSentence: 'Wer den Euro nicht ehrt, ist die Scheine nicht wert.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Sonne%20kann%20nicht%20ohne%20Schein%2C%20Mensch%20nicht%20ohne%20Liebe%20sein.&hash=01hjca41',
        currentSentence: 'Sonne kann nicht ohne Schein, Mensch nicht ohne Liebe sein.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=H%C3%BCte%20dich%20vor%20dem%20Schein.&hash=01vwicr0',
        currentSentence: 'Hüte dich vor dem Schein.'
      }
    ]
  },
  {
    essenziell: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Sonnenlicht%20ist%20essenziell%20f%C3%BCr%20das%20Pflanzenwachstum.&hash=015mw135',
        currentSentence: 'Sonnenlicht ist essenziell für das Pflanzenwachstum.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Und%20doch%20steht%20unsere%20k%C3%BCnstlich%20geschaffene%20Umwelt%20in%20einer%20essenziellen%20Wechselbeziehung%20mit%20der%20Natur.&hash=01jnsqrk',
        currentSentence:
          'Und doch steht unsere künstlich geschaffene Umwelt in einer essenziellen Wechselbeziehung mit der Natur.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Nachdem%20ich%20%C3%BCber%20diese%20elementare%20Frage%20grundlegend%20nachgedacht%20hatte%2C%20kam%20ich%20zu%20dem%20Schluss%2C%20dass%20der%20von%20bedeutenden%20Menschen%20oft%20als%20%22wesentlich%22%20oder%20%22bedeutsam%22%20bezeichnete%20Unterschied%20zwischen%20den%20unentbehrlichen%20W%C3%B6rtern%20%22wichtig%22%20und%20%22essenziell%22%20nicht%20signifikant%2C%20sondern%20irrelevant%20ist.&hash=000ufiq6',
        currentSentence:
          'Nachdem ich über diese elementare Frage grundlegend nachgedacht hatte, kam ich zu dem Schluss, dass der von bedeutenden Menschen oft als "wesentlich" oder "bedeutsam" bezeichnete Unterschied zwischen den unentbehrlichen Wörtern "wichtig" und "essenziell" nicht signifikant, sondern irrelevant ist.'
      }
    ]
  },
  {
    Auszeichnung: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Du%20hast%20die%20Auszeichnung%20mehr%20als%20verdient.&hash=01n7vdpm',
        currentSentence: 'Du hast die Auszeichnung mehr als verdient.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Tom%20hat%20viele%20Auszeichnungen%20erhalten.&hash=00jxuzdu',
        currentSentence: 'Tom hat viele Auszeichnungen erhalten.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Tom%20hat%20nie%20eine%20Auszeichnung%20bekommen.&hash=00thoqcw',
        currentSentence: 'Tom hat nie eine Auszeichnung bekommen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Sie%20schloss%20ihr%20Studium%20mit%20Auszeichnung%20ab.&hash=00qdmtxh',
        currentSentence: 'Sie schloss ihr Studium mit Auszeichnung ab.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Athleten%2C%20die%20hervorragende%20Ergebnisse%20gezeigt%20haben%2C%20wurden%20Auszeichnungen%20%C3%BCberreicht.&hash=007s59mt',
        currentSentence: 'Athleten, die hervorragende Ergebnisse gezeigt haben, wurden Auszeichnungen überreicht.'
      }
    ]
  },
  {
    Pirat: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Maria%20wurde%20von%20Piraten%20entf%C3%BChrt.&hash=00ykbbpu',
        currentSentence: 'Maria wurde von Piraten entführt.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wir%20wurden%20von%20Piraten%20angegriffen!&hash=00ufisfa',
        currentSentence: 'Wir wurden von Piraten angegriffen!'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Den%20Piraten%20blieb%20nichts%20anderes%20%C3%BCbrig%2C%20als%20sich%20zu%20ergeben.&hash=00arom01',
        currentSentence: 'Den Piraten blieb nichts anderes übrig, als sich zu ergeben.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Piraten%20sind%20mit%20dem%20Schiff%20auf%20die%20Insel%20gekommen.&hash=01xfx1n2',
        currentSentence: 'Piraten sind mit dem Schiff auf die Insel gekommen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Tom%20kam%2C%20als%20Pirat%20verkleidet%2C%20auf%20die%20Feier.&hash=00yl4erv',
        currentSentence: 'Tom kam, als Pirat verkleidet, auf die Feier.'
      }
    ]
  },
  {
    Verlag: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Der%20Verlag%20gab%20meinem%20Plan%20eine%20Chance.&hash=00jena6v',
        currentSentence: 'Der Verlag gab meinem Plan eine Chance.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Laut%20Auskunft%20des%20Verlags%20wird%20die%20Zeitschrift%20bereits%20ab%20September%20erscheinen.&hash=01arjp6u',
        currentSentence: 'Laut Auskunft des Verlags wird die Zeitschrift bereits ab September erscheinen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Haben%20Sie%20Ihren%20Roman%20schon%20an%20einen%20Verlag%20geschickt%3F&hash=010rb2ka',
        currentSentence: 'Haben Sie Ihren Roman schon an einen Verlag geschickt?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20m%C3%B6chte%20gerne%20eine%20Bestellung%20beim%20Verlag%20aufgeben%20f%C3%BCr%20das%20Buch.&hash=01aj908x',
        currentSentence: 'Ich möchte gerne eine Bestellung beim Verlag aufgeben für das Buch.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=In%20diesem%20Verlag%20wird%20wirklich%20alles%20ver%C3%B6ffentlicht.&hash=004y9gf1',
        currentSentence: 'In diesem Verlag wird wirklich alles veröffentlicht.'
      }
    ]
  },
  {
    allerseits: [
      {
        url: "https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Guten%20Tag%20allerseits%2C%20wie%20geht's%3F&hash=01xtv54h",
        currentSentence: "Guten Tag allerseits, wie geht's?"
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Guten%20Morgen%20allerseits!&hash=014h1lr4',
        currentSentence: 'Guten Morgen allerseits!'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Hallo%20allerseits!%20Ich%20hei%C3%9Fe%20Maria.&hash=00woxd8t',
        currentSentence: 'Hallo allerseits! Ich heiße Maria.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Hallo%20allerseits!%20Ich%20bin%20Maria.&hash=005lxeuc',
        currentSentence: 'Hallo allerseits! Ich bin Maria.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Hallo%20allerseits!%20Ich%20bin%20Tom.&hash=00lq0362',
        currentSentence: 'Hallo allerseits! Ich bin Tom.'
      }
    ]
  },
  {
    Rasse: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Das%20Geld%20ist%20der%20Gott%20der%20menschlichen%20Rasse.&hash=008ptorb',
        currentSentence: 'Das Geld ist der Gott der menschlichen Rasse.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=In%20den%20Vereinigten%20Staaten%20leben%20verschiedene%20Rassen%20zusammen.&hash=00dr3cur',
        currentSentence: 'In den Vereinigten Staaten leben verschiedene Rassen zusammen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Was%20ist%20die%20Rasse%20deines%20Hundes%3F&hash=00nzp5k9',
        currentSentence: 'Was ist die Rasse deines Hundes?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Zu%20welcher%20Rasse%20geh%C3%B6rt%20diese%20Katze%3F&hash=00ilwvgv',
        currentSentence: 'Zu welcher Rasse gehört diese Katze?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Niemand%20wei%C3%9F%20genau%2C%20aus%20wie%20vielen%20Rassen%20die%20Bev%C3%B6lkerung%20der%20USA%20sich%20zusammensetzt.&hash=01sy4i93',
        currentSentence: 'Niemand weiß genau, aus wie vielen Rassen die Bevölkerung der USA sich zusammensetzt.'
      }
    ]
  },
  {
    klammern: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=%C3%9Cbersetzen%20Sie%20die%20W%C3%B6rter%20zwischen%20den%20Klammern.&hash=00zusblu',
        currentSentence: 'Übersetzen Sie die Wörter zwischen den Klammern.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Bitte%20schreiben%20Sie%20ein%20Wort%20zwischen%20die%20Klammern.&hash=00mzn3oi',
        currentSentence: 'Bitte schreiben Sie ein Wort zwischen die Klammern.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Mach%20es%20mit%20den%20Klammern%20da%20fest!&hash=00x8vs61',
        currentSentence: 'Mach es mit den Klammern da fest!'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Bitte%20keine%20Klammern%20verwenden%2C%20sondern%20Zusatzinformationen%20im%20Kommentarteil%20bereitstellen!%20Bei%20Bedarf%20k%C3%B6nnen%20auch%20zwei%20S%C3%A4tze%20hinzugef%C3%BCgt%20werden.&hash=00keub5j',
        currentSentence:
          'Bitte keine Klammern verwenden, sondern Zusatzinformationen im Kommentarteil bereitstellen! Bei Bedarf können auch zwei Sätze hinzugefügt werden.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=%E2%80%9EDer%20Hund%20hat%20die%20W%C3%A4scheklammer%20gefressen!%20Was%20soll%20ich%20jetzt%20machen%3F%E2%80%9C%20%E2%80%93%20%E2%80%9EAch%20was%2C%20kein%20Problem!%20Da%20dr%C3%BCben%20in%20der%20Sch%C3%BCssel%20gibt%20es%20noch%20mehr%20Klammern.%E2%80%9C&hash=007ldo9z',
        currentSentence:
          '„Der Hund hat die Wäscheklammer gefressen! Was soll ich jetzt machen?“ – „Ach was, kein Problem! Da drüben in der Schüssel gibt es noch mehr Klammern.“'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Schmerz%20klammert%20sich%20ans%20Herz.&hash=009vhbyz',
        currentSentence: 'Schmerz klammert sich ans Herz.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wer%20in%20den%20See%20gefallen%20ist%2C%20klammert%20sich%20sogar%20an%20eine%20Schlange.&hash=002971yc',
        currentSentence: 'Wer in den See gefallen ist, klammert sich sogar an eine Schlange.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Zwei%20M%C3%A4dchen%20klammerten%20sich%20an%20Toms%20Arme.&hash=00f6efsi',
        currentSentence: 'Zwei Mädchen klammerten sich an Toms Arme.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wir%20klammern%20uns%20noch%20immer%20an%20die%20Tr%C3%A4ume%20unserer%20Jugend.&hash=01lhftoy',
        currentSentence: 'Wir klammern uns noch immer an die Träume unserer Jugend.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Der%20Junge%20klammert%20sich%20an%20seine%20Mutter.&hash=011fli6a',
        currentSentence: 'Der Junge klammert sich an seine Mutter.'
      }
    ]
  },
  {
    Behälter: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=F%C3%BCr%20Ihren%20Salz-%20und%20Pfeffervorrat%20haben%20wir%20die%20richtigen%20Beh%C3%A4lter.&hash=01ebse6n',
        currentSentence: 'Für Ihren Salz- und Pfeffervorrat haben wir die richtigen Behälter.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20kann%20diesen%20Beh%C3%A4lter%20nicht%20heben.&hash=016oshra',
        currentSentence: 'Ich kann diesen Behälter nicht heben.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Diese%20Gesetze%20gelten%20nur%2C%20wenn%20der%20Beh%C3%A4lter%20geschlossen%20ist.&hash=00v0k14m',
        currentSentence: 'Diese Gesetze gelten nur, wenn der Behälter geschlossen ist.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wem%20geh%C3%B6rt%20dieser%20Beh%C3%A4lter%3F&hash=017499yc',
        currentSentence: 'Wem gehört dieser Behälter?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wei%C3%9Ft%20du%2C%20was%20sich%20in%20den%20Beh%C3%A4ltern%20dort%20befindet%3F&hash=004qufx4',
        currentSentence: 'Weißt du, was sich in den Behältern dort befindet?'
      }
    ]
  },
  {
    bezahlt: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20bezahlte%20die%20Rechnung.&hash=01r97sqr',
        currentSentence: 'Ich bezahlte die Rechnung.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Tom%20bezahlte%20die%20Miete.&hash=01ijmy6f',
        currentSentence: 'Tom bezahlte die Miete.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20bezahlte%20zus%C3%A4tzlich%20f%C3%BCnf%20Dollar.&hash=01rnnjc9',
        currentSentence: 'Ich bezahlte zusätzlich fünf Dollar.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Der%20Italiener%20bezahlte%20in%20Deutschland%20seinen%20Kaffee%20mit%20griechischen%20Eurom%C3%BCnzen.&hash=00b8ntyq',
        currentSentence: 'Der Italiener bezahlte in Deutschland seinen Kaffee mit griechischen Euromünzen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Der%20H%C3%A4ndler%20bezahlte%20den%20Zwergen%20kaum%20etwas%20f%C3%BCr%20die%20Edelsteine.&hash=01qj495c',
        currentSentence: 'Der Händler bezahlte den Zwergen kaum etwas für die Edelsteine.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Sie%20hat%20die%20Rechnung%20bezahlt.&hash=00cc7pqa',
        currentSentence: 'Sie hat die Rechnung bezahlt.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20habe%20bezahlten%20Urlaub.&hash=014w3l7y',
        currentSentence: 'Ich habe bezahlten Urlaub.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Tom%20hat%20eine%20Menge%20Geld%20f%C3%BCr%20diese%20Gitarre%20bezahlt.&hash=01lgq56e',
        currentSentence: 'Tom hat eine Menge Geld für diese Gitarre bezahlt.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Arbeiter%20in%20Frankreich%20haben%20vier%20Wochen%20bezahlten%20Urlaub%20pro%20Jahr.&hash=00dlvi84',
        currentSentence: 'Arbeiter in Frankreich haben vier Wochen bezahlten Urlaub pro Jahr.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20suche%20eine%20gut%20bezahlte%20Arbeit.&hash=00uge9xn',
        currentSentence: 'Ich suche eine gut bezahlte Arbeit.'
      }
    ]
  },
  {
    klebrig: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Warum%20muss%20Tom%20mit%20seinen%20klebrigen%20Fingern%20immer%20alles%20anfassen%3F&hash=013kg8yz',
        currentSentence: 'Warum muss Tom mit seinen klebrigen Fingern immer alles anfassen?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Dieser%20Reis%20ist%20klebrig.&hash=01cnmjor',
        currentSentence: 'Dieser Reis ist klebrig.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Meine%20H%C3%A4nde%20werden%20klebrig.&hash=01nhzq2i',
        currentSentence: 'Meine Hände werden klebrig.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Schmieren%20bedeutet%2C%C2%A0auf%20etwas%20eine%20d%C3%BCnne%20Schicht%20aus%20einer%20fettigen%20oder%20klebrigen%20Substanz%20aufzubringen.&hash=00u83kpt',
        currentSentence:
          'Schmieren bedeutet, auf etwas eine dünne Schicht aus einer fettigen oder klebrigen Substanz aufzubringen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=H%C3%B6r%20auf%2C%20so%20klebrig%20zu%20glotzen%3B%20ich%20bin%20nicht%20zum%20Begaffen%20da!&hash=01l9oqpy',
        currentSentence: 'Hör auf, so klebrig zu glotzen; ich bin nicht zum Begaffen da!'
      }
    ]
  },
  {
    tagsüber: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Lasst%20uns%20heute%20tags%C3%BCber%20ins%20Museum%20gehen.&hash=01qkhokl',
        currentSentence: 'Lasst uns heute tagsüber ins Museum gehen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=%C3%9Cber%20Nacht%20wird%20man%20nur%20dann%20ber%C3%BChmt%2C%20wenn%20man%20tags%C3%BCber%20hart%20gearbeitet%20hat.&hash=00zk780r',
        currentSentence: 'Über Nacht wird man nur dann berühmt, wenn man tagsüber hart gearbeitet hat.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Tom%20bleibt%20immer%20bis%20in%20die%20Puppen%20auf%2C%20und%20tags%C3%BCber%20ist%20er%20dann%20m%C3%BCde.&hash=00al11ts',
        currentSentence: 'Tom bleibt immer bis in die Puppen auf, und tagsüber ist er dann müde.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Die%20Sonne%20scheint%20tags%C3%BCber.&hash=01octry3',
        currentSentence: 'Die Sonne scheint tagsüber.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Tags%C3%BCber%20passt%20Gro%C3%9Fmutter%20auf%20die%20Kinder%20auf.&hash=00j0wmbs',
        currentSentence: 'Tagsüber passt Großmutter auf die Kinder auf.'
      }
    ]
  },
  {
    egoistisch: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Liebe%20ist%20egoistisch.&hash=00v1azbl',
        currentSentence: 'Liebe ist egoistisch.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Vielleicht%20hast%20du%20Recht%2C%20ich%20war%20egoistisch.&hash=005570ie',
        currentSentence: 'Vielleicht hast du Recht, ich war egoistisch.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Man%20muss%20lernen%20zu%20teilen%20und%20nicht%20so%20egoistisch%20zu%20sein.&hash=00g89m7v',
        currentSentence: 'Man muss lernen zu teilen und nicht so egoistisch zu sein.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20kenne%20keinen%20egoistischeren%20Menschen%20als%20Tom.&hash=009tzh78',
        currentSentence: 'Ich kenne keinen egoistischeren Menschen als Tom.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ein%20egoistischer%20Mensch%20denkt%20nur%20an%20seine%20eigenen%20Gef%C3%BChle.&hash=01bubco1',
        currentSentence: 'Ein egoistischer Mensch denkt nur an seine eigenen Gefühle.'
      }
    ]
  },
  {
    bit: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=64-Bit-Programme%20laufen%20auf%20einem%2032-Bit-System%20nicht.&hash=01vj4nt1',
        currentSentence: '64-Bit-Programme laufen auf einem 32-Bit-System nicht.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Bite%20bitte%20nicht%20anfassen!&hash=01ytumsy',
        currentSentence: 'Bite bitte nicht anfassen!'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Maria%20gibt%20es%20in%20Bits%20und%20Bytes.&hash=004vtqwv',
        currentSentence: 'Maria gibt es in Bits und Bytes.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ein%20Nibble%20ist%20eine%20Datenmenge%2C%20die%204%20Bits%20umfasst%2C%20es%20wird%20auch%20Halbbyte%2C%20Tetrade%20oder%20Quadrupel%20genannt.&hash=01g3tlz3',
        currentSentence:
          'Ein Nibble ist eine Datenmenge, die 4 Bits umfasst, es wird auch Halbbyte, Tetrade oder Quadrupel genannt.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=64-Bit-Programme%20laufen%20auf%20einem%2032-Bit-System%20nicht.&hash=01vj4nt1',
        currentSentence: '64-Bit-Programme laufen auf einem 32-Bit-System nicht.'
      }
    ]
  },
  {
    durchlaufen: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Das%20neue%20Auto%20durchlief%20erfolgreich%20alle%20Tests.&hash=00u9nahp',
        currentSentence: 'Das neue Auto durchlief erfolgreich alle Tests.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Sie%20durchl%C3%A4uft%20nur%20eine%20Phase.&hash=011nqivr',
        currentSentence: 'Sie durchläuft nur eine Phase.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Der%20neue%20Motor%20muss%20alle%20notwendigen%20Tests%20durchlaufen.&hash=00njolqn',
        currentSentence: 'Der neue Motor muss alle notwendigen Tests durchlaufen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Sie%20scheint%20einen%20Gesinnungswandel%20durchlaufen%20zu%20haben.&hash=007fwyaa',
        currentSentence: 'Sie scheint einen Gesinnungswandel durchlaufen zu haben.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Er%20hat%20eine%20klassische%20Schulausbildung%20durchlaufen.&hash=00exr50j',
        currentSentence: 'Er hat eine klassische Schulausbildung durchlaufen.'
      }
    ]
  },
  {
    Börse: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Alles%20ist%20an%20der%20B%C3%B6rse%20m%C3%B6glich%2C%20sogar%20das%2C%20was%20logisch%20ist.&hash=01ouovrf',
        currentSentence: 'Alles ist an der Börse möglich, sogar das, was logisch ist.'
      },
      {
        url: "https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wer's%20kann%2C%20handelt%20an%20der%20B%C3%B6rse%2C%20wer's%20nicht%20kann%2C%20ber%C3%A4t%20andere.&hash=01nhyhvc",
        currentSentence: "Wer's kann, handelt an der Börse, wer's nicht kann, berät andere."
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Geben%20Sie%20mir%20eine%20gute%20Regierung%2C%20und%20wir%20haben%20eine%20gesunde%20B%C3%B6rse!&hash=017v1h1q',
        currentSentence: 'Geben Sie mir eine gute Regierung, und wir haben eine gesunde Börse!'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Sch%C3%B6ne%20M%C3%A4dchen%20tragen%20keine%20B%C3%B6rsen.&hash=00ddtc97',
        currentSentence: 'Schöne Mädchen tragen keine Börsen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Die%20B%C3%B6rse%20erf%C3%BCllt%20eine%20wirtschaftliche%20Funktion.%20Ohne%20sie%20verbreiten%20sich%20neue%20Witze%20wesentlich%20langsamer.&hash=01n2gydq',
        currentSentence:
          'Die Börse erfüllt eine wirtschaftliche Funktion. Ohne sie verbreiten sich neue Witze wesentlich langsamer.'
      }
    ]
  },
  {
    Klimaanlage: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Funktioniert%20die%20Klimaanlage%3F&hash=00g7xh27',
        currentSentence: 'Funktioniert die Klimaanlage?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Mein%20Auto%20hat%20eine%20Klimaanlage.&hash=01v6yhj6',
        currentSentence: 'Mein Auto hat eine Klimaanlage.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=W%C3%A4lder%20sind%20die%20gr%C3%B6%C3%9Fte%20Klimaanlage%20der%20Welt.&hash=00e4pbn8',
        currentSentence: 'Wälder sind die größte Klimaanlage der Welt.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Eine%20gro%C3%9Fe%20Menge%20von%20Klimaanlagen%20ist%20verkauft%20worden%2C%20da%20die%20Temperatur%20hoch%20ist.&hash=0199lv1f',
        currentSentence: 'Eine große Menge von Klimaanlagen ist verkauft worden, da die Temperatur hoch ist.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Dieses%20Zimmer%20verf%C3%BCgt%20%C3%BCber%20eine%20Klimaanlage.&hash=008l4vb1',
        currentSentence: 'Dieses Zimmer verfügt über eine Klimaanlage.'
      }
    ]
  },
  {
    wache: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20halte%20seit%20drei%20Tagen%20Wache.&hash=01eh87e2',
        currentSentence: 'Ich halte seit drei Tagen Wache.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Der%20Apfel%20schmeckt%20s%C3%BC%C3%9F%2C%20um%20den%20man%20die%20Wache%20betr%C3%BCgt.&hash=014ogdr2',
        currentSentence: 'Der Apfel schmeckt süß, um den man die Wache betrügt.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Drau%C3%9Fen%20ist%20eine%20Wache.&hash=01vqixbz',
        currentSentence: 'Draußen ist eine Wache.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20halte%20jetzt%20Wache.%20Leg%20dich%20etwas%20hin!&hash=014jt9f1',
        currentSentence: 'Ich halte jetzt Wache. Leg dich etwas hin!'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Drau%C3%9Fen%20steht%20eine%20Wache.&hash=01i3ouwt',
        currentSentence: 'Draußen steht eine Wache.'
      }
    ]
  },
  {
    Skript: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=F%C3%BChren%20Sie%20einmal%20dieses%20Skript%20aus.&hash=00536r93',
        currentSentence: 'Führen Sie einmal dieses Skript aus.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Er%20erg%C3%A4nzte%20seine%20Vorlesung%20durch%20ein%20Skript.&hash=01jbdkio',
        currentSentence: 'Er ergänzte seine Vorlesung durch ein Skript.'
      }
    ]
  },
  {
    Spezialist: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20bin%20kein%20Spezialist.&hash=00njeng8',
        currentSentence: 'Ich bin kein Spezialist.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ihr%20Arzt%20will%20sie%20zu%20einem%20Spezialisten%20schicken.&hash=01xqilp7',
        currentSentence: 'Ihr Arzt will sie zu einem Spezialisten schicken.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Es%20gibt%20nur%20einige%20wenige%20Spezialisten%20auf%20der%20Welt%2C%20die%20diese%20Krankheit%20behandeln%20k%C3%B6nnen.&hash=016qti1z',
        currentSentence: 'Es gibt nur einige wenige Spezialisten auf der Welt, die diese Krankheit behandeln können.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Er%20ist%20Spezialist%20in%20diesem%20Bereich.&hash=01bm8mcf',
        currentSentence: 'Er ist Spezialist in diesem Bereich.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Viele%20neue%20Firmen%20k%C3%B6nnen%20keine%20guten%20Spezialisten%20finden.&hash=00zmpan3',
        currentSentence: 'Viele neue Firmen können keine guten Spezialisten finden.'
      }
    ]
  },
  {
    klinge: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Maria%20l%C3%A4sst%20Tom%20%C3%BCber%20die%20Klinge%20springen.&hash=00mxagfh',
        currentSentence: 'Maria lässt Tom über die Klinge springen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Die%20Klinge%20meines%20Messers%20ist%20sehr%20scharf.&hash=01vrw4ma',
        currentSentence: 'Die Klinge meines Messers ist sehr scharf.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Das%20Wort%20ist%20sch%C3%A4rfer%20als%20die%20Klinge!&hash=0039k8cq',
        currentSentence: 'Das Wort ist schärfer als die Klinge!'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Es%20ist%20gef%C3%A4hrlich%2C%20mit%20einer%20Klinge%20so%20herumzuwedeln.&hash=012ftyu8',
        currentSentence: 'Es ist gefährlich, mit einer Klinge so herumzuwedeln.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Mir%20ist%20die%20Klinge%20eines%20K%C3%BCchenmessers%20abgebrochen%2C%20das%20ich%20jahrelang%20regelm%C3%A4%C3%9Fig%20benutzt%20hatte.&hash=01dvigy8',
        currentSentence:
          'Mir ist die Klinge eines Küchenmessers abgebrochen, das ich jahrelang regelmäßig benutzt hatte.'
      }
    ]
  },
  {
    unberührt: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=In%20dieser%20Gegend%20ist%20die%20Natur%20noch%20unber%C3%BChrt.&hash=00lmf5cj',
        currentSentence: 'In dieser Gegend ist die Natur noch unberührt.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Unber%C3%BChrt%20vom%20Niedrig-Menschlichen%20wanderte%20er%20r%C3%BCstig%20gen%20Westen%2C%20den%20dunklen%20W%C3%A4ldern%20zu.%20Auf%20den%20blanken%20Schellen%20seiner%20Narrenkappe%20tanzten%20fr%C3%B6hliche%20Herbstsonnenlichter.&hash=011gvabl',
        currentSentence:
          'Unberührt vom Niedrig-Menschlichen wanderte er rüstig gen Westen, den dunklen Wäldern zu. Auf den blanken Schellen seiner Narrenkappe tanzten fröhliche Herbstsonnenlichter.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Der%20gr%C3%B6%C3%9Fte%20Teil%20des%20Amazonas-Dschungels%20ist%20noch%20unber%C3%BChrt.&hash=018g3xsx',
        currentSentence: 'Der größte Teil des Amazonas-Dschungels ist noch unberührt.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Sehr%20wenige%20Orte%20auf%20unserer%20Erde%20sind%20von%20der%20Zivilisation%20unber%C3%BChrt%20geblieben.&hash=00dkio1t',
        currentSentence: 'Sehr wenige Orte auf unserer Erde sind von der Zivilisation unberührt geblieben.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Maria%20tr%C3%A4umt%20von%20einem%20friedlichen%20Land%20mit%20unber%C3%BChrter%20Natur%2C%20mit%20Bergen%20und%20Seen.&hash=00a0k1d1',
        currentSentence: 'Maria träumt von einem friedlichen Land mit unberührter Natur, mit Bergen und Seen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Welche%20Waldespracht!%20Wo%20gibt%20es%20noch%20Natur%2C%20so%20unber%C3%BChrt%20von%20des%20Menschen%20zerst%C3%B6rerischer%20Hand!&hash=00v8h71g',
        currentSentence:
          'Welche Waldespracht! Wo gibt es noch Natur, so unberührt von des Menschen zerstörerischer Hand!'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Arrokoth%20ist%20das%20entfernteste%2C%20primitivste%20und%20unber%C3%BChrteste%20Objekt%2C%20das%20je%20von%20einer%20Raumsonde%20erforscht%20wurde.&hash=01nwfv1u',
        currentSentence:
          'Arrokoth ist das entfernteste, primitivste und unberührteste Objekt, das je von einer Raumsonde erforscht wurde.'
      }
    ]
  },
  {
    Kooperation: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20wei%C3%9F%20Ihre%20Kooperation%20wirklich%20zu%20sch%C3%A4tzen.&hash=006vrgp0',
        currentSentence: 'Ich weiß Ihre Kooperation wirklich zu schätzen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Niemand%20kann%20das%20Ergebnis%20dieser%20Kooperation%20vorhersagen.&hash=00dd1hcw',
        currentSentence: 'Niemand kann das Ergebnis dieser Kooperation vorhersagen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Russland%20und%20die%20Europ%C3%A4ische%20Union%20sind%20nat%C3%BCrliche%20Partner%20und%20sollten%20ihre%20strategische%20Kooperation%20zum%20gegenseitigen%20Vorteil%20ausbauen.&hash=01wrnuk9',
        currentSentence:
          'Russland und die Europäische Union sind natürliche Partner und sollten ihre strategische Kooperation zum gegenseitigen Vorteil ausbauen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20wollte%20Ihre%20Kooperation.&hash=01n419ty',
        currentSentence: 'Ich wollte Ihre Kooperation.'
      }
    ]
  },
  {
    vorhersagen: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Vorhersagen%20sind%20schwierig.%20Vor%20allem%2C%20wenn%20sie%20sich%20auf%20die%20Zukunft%20beziehen.&hash=01ruzo00',
        currentSentence: 'Vorhersagen sind schwierig. Vor allem, wenn sie sich auf die Zukunft beziehen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Keine%20seiner%20Vorhersagen%20traf%20ein.&hash=01t1c5mz',
        currentSentence: 'Keine seiner Vorhersagen traf ein.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Meine%20Vorhersagen%20waren%20korrekt.&hash=00065z33',
        currentSentence: 'Meine Vorhersagen waren korrekt.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Vorhersagen%20ist%20sagen%2C%20was%20geschehen%20wird%2C%20um%20dann%20zu%20erkl%C3%A4ren%2C%20warum%20es%20nicht%20eintraf.&hash=01tiwkup',
        currentSentence: 'Vorhersagen ist sagen, was geschehen wird, um dann zu erklären, warum es nicht eintraf.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Die%20Vorhersagen%20f%C3%BCr%20die%20Weltwirtschaft%20werden%20d%C3%BCsterer.&hash=00603su1',
        currentSentence: 'Die Vorhersagen für die Weltwirtschaft werden düsterer.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wird%20f%C3%BCr%20morgen%20ein%20Sturm%20vorhergesagt%3F&hash=007nrfcf',
        currentSentence: 'Wird für morgen ein Sturm vorhergesagt?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=F%C3%BCr%20heute%20sind%20zehn%20Grad%20vorhergesagt.&hash=012mu41l',
        currentSentence: 'Für heute sind zehn Grad vorhergesagt.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Kann%20jener%20Mann%20dein%20Schicksal%20vorhersagen%3F&hash=001c5lny',
        currentSentence: 'Kann jener Mann dein Schicksal vorhersagen?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Das%20Wetter%20wird%20wissenschaftlich%20vorhergesagt.&hash=013v73rm',
        currentSentence: 'Das Wetter wird wissenschaftlich vorhergesagt.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Die%20Ereignisse%20entwickelten%20sich%20genauso%2C%20wie%20sie%20vorhergesagt%20hatte.&hash=01005c0f',
        currentSentence: 'Die Ereignisse entwickelten sich genauso, wie sie vorhergesagt hatte.'
      }
    ]
  },
  {
    wehren: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=H%C3%B6r%20auf%2C%20dich%20zu%20wehren!&hash=00kytisp',
        currentSentence: 'Hör auf, dich zu wehren!'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Er%20wehrte%20sich%20die%20Arbeit%20zu%20%C3%BCbernehmen.&hash=01f8km9f',
        currentSentence: 'Er wehrte sich die Arbeit zu übernehmen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Echtes%20ehren%2C%20Schlechtem%20wehren%2C%20Schweres%20%C3%BCben%2C%20Sch%C3%B6nes%20lieben.&hash=01h2ux95',
        currentSentence: 'Echtes ehren, Schlechtem wehren, Schweres üben, Schönes lieben.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wir%20m%C3%BCssen%20denen%20helfen%2C%20die%20sich%20nicht%20wehren%20k%C3%B6nnen.&hash=01ixbe88',
        currentSentence: 'Wir müssen denen helfen, die sich nicht wehren können.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Tom%20wehrte%20Marys%20Schlag%20ab%20und%20schlug%20sie%20dann%20mit%20seiner%20rechten%20Hand.&hash=00wqg7y9',
        currentSentence: 'Tom wehrte Marys Schlag ab und schlug sie dann mit seiner rechten Hand.'
      }
    ]
  },
  {
    Jäger: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Treffen%20sich%20zwei%20J%C3%A4ger%3A%20Beide%20tot.&hash=01pakq46',
        currentSentence: 'Treffen sich zwei Jäger: Beide tot.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Im%20Wilden%20Westen%20geboren%2C%20wurde%20Tom%20nat%C3%BCrlich%20zu%20den%20J%C3%A4gern%20eingezogen.&hash=00axv386',
        currentSentence: 'Im Wilden Westen geboren, wurde Tom natürlich zu den Jägern eingezogen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Einen%20Satz%20wie%20%22Schmalspie%C3%9Fer%20haben%20keine%20Rosen%22%20d%C3%BCrften%20nur%20J%C3%A4ger%20ohne%20weiteres%20verstehen.&hash=00m2apcs',
        currentSentence: 'Einen Satz wie "Schmalspießer haben keine Rosen" dürften nur Jäger ohne weiteres verstehen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ein%20guter%20J%C3%A4ger%20l%C3%A4sst%20sich%20nicht%20aufs%20Rohr%20sehen.&hash=00ahydun',
        currentSentence: 'Ein guter Jäger lässt sich nicht aufs Rohr sehen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ein%20J%C3%A4ger%20und%20sein%20Hund%20essen%20zu%20jeder%20Stund.&hash=00wsmb3a',
        currentSentence: 'Ein Jäger und sein Hund essen zu jeder Stund.'
      }
    ]
  },
  {
    Jury: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Niemals%20wird%20die%20Satire%20ihr%20Examen%20bestehen.%20In%20der%20Jury%20sitzen%20ihre%20Objekte.&hash=01a09jij',
        currentSentence: 'Niemals wird die Satire ihr Examen bestehen. In der Jury sitzen ihre Objekte.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Der%20Generalstaatsanwalt%20Russlands%20Jury%20Tschaika%20hat%20neulich%20erkl%C3%A4rt%2C%20dass%20die%20Gef%C3%A4ngnisse%20und%20Untersuchungshaftr%C3%A4ume%20in%2016%20Regionen%20des%20Landes%20%C3%BCberf%C3%BCllt%20und%20dortige%20Haftbedingungen%20im%20Gegensatz%20zu%20Hygienestandards%20sind.&hash=00efzclo',
        currentSentence:
          'Der Generalstaatsanwalt Russlands Jury Tschaika hat neulich erklärt, dass die Gefängnisse und Untersuchungshafträume in 16 Regionen des Landes überfüllt und dortige Haftbedingungen im Gegensatz zu Hygienestandards sind.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Sie%20stand%20bei%20Gericht%20vor%20dem%20Richter%20und%20der%20Jury.&hash=01fqbvgx',
        currentSentence: 'Sie stand bei Gericht vor dem Richter und der Jury.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Es%20gab%20auch%20Menschen%2C%20die%20dachten%2C%20dass%20die%20Jury%20nicht%20weise%20entschieden%20habe.&hash=01e1g7h9',
        currentSentence: 'Es gab auch Menschen, die dachten, dass die Jury nicht weise entschieden habe.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Die%20Jury%20hat%20ihm%20einen%20Preis%20zuerkannt.&hash=00g835c7',
        currentSentence: 'Die Jury hat ihm einen Preis zuerkannt.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Mit%20allen%20Gl%C3%BCckw%C3%BCnschen%20der%20Jury!&hash=013ibba5',
        currentSentence: 'Mit allen Glückwünschen der Jury!'
      }
    ]
  },
  {
    ausatmen: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Der%20Doktor%20sagte%20mir%2C%20ich%20solle%20langsam%20und%20tief%20ein-%20und%20ausatmen.&hash=003c9xmx',
        currentSentence: 'Der Doktor sagte mir, ich solle langsam und tief ein- und ausatmen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Einatmen%C2%A0%E2%80%93%20und%20ausatmen!&hash=004sx0ia',
        currentSentence: 'Einatmen – und ausatmen!'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Durch%20den%20Mund%20ausatmen!&hash=01bdiu0k',
        currentSentence: 'Durch den Mund ausatmen!'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Gleichm%C3%A4%C3%9Fig%20durch%20die%20Nase%20ein-%20und%20wieder%20ausatmen!&hash=01joepri',
        currentSentence: 'Gleichmäßig durch die Nase ein- und wieder ausatmen!'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wenn%20Sie%20Ihren%20Atem%20sehen%20k%C3%B6nnen%2C%20wenn%20Sie%20ausatmen%2C%20wissen%20Sie%2C%20dass%20es%20kalt%20ist.&hash=00kcwb0l',
        currentSentence: 'Wenn Sie Ihren Atem sehen können, wenn Sie ausatmen, wissen Sie, dass es kalt ist.'
      }
    ]
  },
  {
    herzlichen: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=%E2%80%9EHerzlichen%20Dank%20f%C3%BCr%20alles.%E2%80%9C%20%E2%80%93%20%E2%80%9EGern%20geschehen.%E2%80%9C&hash=00potlla',
        currentSentence: '„Herzlichen Dank für alles.“ – „Gern geschehen.“'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=%E2%80%9EIn%20welchem%20Haus%20wohnt%20Tom%20denn%3F%E2%80%9C%C2%A0%E2%80%93%20%E2%80%9EIch%20denke%2C%20er%20wohnt%20in%20dem%20Haus%20mit%20den%20roten%20Ballons%20und%20dem%20gro%C3%9Fen%20Schild%2C%20auf%20dem%20steht%3A%20%E2%80%9AHerzlichen%20Gl%C3%BCckwunsch%2C%20Tom!%E2%80%98%E2%80%9C&hash=000o5gci',
        currentSentence:
          '„In welchem Haus wohnt Tom denn?“ – „Ich denke, er wohnt in dem Haus mit den roten Ballons und dem großen Schild, auf dem steht: ‚Herzlichen Glückwunsch, Tom!‘“'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Als%20Tom%20den%20Raum%20betrat%2C%20sah%20er%20ein%20gro%C3%9Fes%20Spruchband%2C%20auf%20dem%20stand%3A%20%E2%80%9EHerzlichen%20Gl%C3%BCckwunsch%20zum%20Geburtstag%2C%20Tom!%E2%80%9C&hash=006vmudq',
        currentSentence:
          'Als Tom den Raum betrat, sah er ein großes Spruchband, auf dem stand: „Herzlichen Glückwunsch zum Geburtstag, Tom!“'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20werde%20der%20Witwe%20einen%20Brief%20schreiben%2C%20aber%20ich%20bin%20mir%20noch%20nicht%20sicher%2C%20was%20in%20diesem%20Fall%20passend%20ist%3A%20%E2%80%9EAufrichtiges%20Beileid%E2%80%9C%20oder%20%E2%80%9EHerzlichen%20Gl%C3%BCckwunsch%E2%80%9C.&hash=001p95dw',
        currentSentence:
          'Ich werde der Witwe einen Brief schreiben, aber ich bin mir noch nicht sicher, was in diesem Fall passend ist: „Aufrichtiges Beileid“ oder „Herzlichen Glückwunsch“.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Herzlichen%20Dank%20f%C3%BCr%20die%20Einladung%2C%20die%20ich%20heute%20bekommen%20habe.&hash=005g8pxy',
        currentSentence: 'Herzlichen Dank für die Einladung, die ich heute bekommen habe.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Herzlichen%20Gl%C3%BCckwunsch%20zu%20deinem%20Abschluss.&hash=01b36i5y',
        currentSentence: 'Herzlichen Glückwunsch zu deinem Abschluss.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Vielen%20herzlichen%20Dank!&hash=01b45gzy',
        currentSentence: 'Vielen herzlichen Dank!'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Recht%20herzlichen%20Dank!&hash=001t824t',
        currentSentence: 'Recht herzlichen Dank!'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Nimm%20meinen%20herzlichen%20Dank%20f%C3%BCr%20deine%20freundliche%20Unterst%C3%BCtzung%20entgegen.&hash=016idry5',
        currentSentence: 'Nimm meinen herzlichen Dank für deine freundliche Unterstützung entgegen.'
      }
    ]
  },
  {
    genügen: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Hat%20das%20Geld%20gen%C3%BCgt%3F&hash=00lh7zm1',
        currentSentence: 'Hat das Geld genügt?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Mir%20gen%C3%BCgt%20das%20Wasser%2C%20das%20im%20Bier%20ist.&hash=016vewd4',
        currentSentence: 'Mir genügt das Wasser, das im Bier ist.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Es%20gen%C3%BCgt%20nicht%2C%20ein%20anst%C3%A4ndiger%20Mensch%20zu%20sein.%20Man%20muss%20es%20auch%20zeigen.&hash=00nr6xlp',
        currentSentence: 'Es genügt nicht, ein anständiger Mensch zu sein. Man muss es auch zeigen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ein%20Stern%20gen%C3%BCgt%2C%20um%20an%20das%20Licht%20zu%20glauben.&hash=00mgu8ln',
        currentSentence: 'Ein Stern genügt, um an das Licht zu glauben.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Mir%20gen%C3%BCgt%20es%2C%20mich%20%C3%BCber%20die%20Geheimnisse%20zu%20wundern.&hash=0107l1r6',
        currentSentence: 'Mir genügt es, mich über die Geheimnisse zu wundern.'
      }
    ]
  },
  {
    Wäsche: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20muss%20die%20W%C3%A4sche%20machen%2C%20solange%20die%20Sonne%20noch%20da%20ist.&hash=01iw7ms7',
        currentSentence: 'Ich muss die Wäsche machen, solange die Sonne noch da ist.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Nach%20der%20W%C3%A4sche%20in%20Form%20bringen.&hash=01oxsnwh',
        currentSentence: 'Nach der Wäsche in Form bringen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Die%20W%C3%A4sche%20trocknet.&hash=01n3igai',
        currentSentence: 'Die Wäsche trocknet.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wie%20gro%C3%9F%20ist%20Ihre%20Sorge%2C%20dass%20jetzt%20in%20der%20%C3%96ffentlichkeit%20schmutzige%20W%C3%A4sche%20gewaschen%20wird%3F&hash=01b9piwb',
        currentSentence: 'Wie groß ist Ihre Sorge, dass jetzt in der Öffentlichkeit schmutzige Wäsche gewaschen wird?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Tom%20h%C3%A4ngt%20gerade%20die%20W%C3%A4sche%20auf.&hash=01qrbe83',
        currentSentence: 'Tom hängt gerade die Wäsche auf.'
      }
    ]
  },
  {
    probier: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Probier%20mal%20etwas%20von%20diesem%20Kuchen.&hash=00v0cgud',
        currentSentence: 'Probier mal etwas von diesem Kuchen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Probier%20es%20nicht%20l%C3%A4nger.&hash=016kru1f',
        currentSentence: 'Probier es nicht länger.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Das%20Kleid%20ist%20viel%20zu%20knallig%2C%20probier%20lieber%20nochmal%20ein%20anderes%20an.&hash=01vsbk5d',
        currentSentence: 'Das Kleid ist viel zu knallig, probier lieber nochmal ein anderes an.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Maria%20klebte%20einen%20Zettel%20an%20den%20Spiegel%20im%20Bad%3A%20%E2%80%9ELieber%20Tom%2C%20probier%20mal%20wieder%20Bratkartoffeln%20mit%20gebratener%20Blutwurst!%20Das%20ist%20die%20absolute%20Geschmacksexplosion.%E2%80%9C&hash=00vbonu0',
        currentSentence:
          'Maria klebte einen Zettel an den Spiegel im Bad: „Lieber Tom, probier mal wieder Bratkartoffeln mit gebratener Blutwurst! Das ist die absolute Geschmacksexplosion.“'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Probier%20mal%20den%20anderen%20da!&hash=00r8zw43',
        currentSentence: 'Probier mal den anderen da!'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Probier%20den%20Kuchen.&hash=01j7qc4s',
        currentSentence: 'Probier den Kuchen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Probiere%20einmal%20diese%20So%C3%9Fe.&hash=01jzue5g',
        currentSentence: 'Probiere einmal diese Soße.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Probiere%20diesen%20neuen%20Anzug%20an%2C%20damit%20wir%20sehen%2C%20ob%20er%20gut%20passt.&hash=01qi3l14',
        currentSentence: 'Probiere diesen neuen Anzug an, damit wir sehen, ob er gut passt.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Probiere%20diese%20S%C3%BC%C3%9Figkeit.&hash=00tbwq0r',
        currentSentence: 'Probiere diese Süßigkeit.'
      }
    ]
  },
  {
    wartest: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wartest%20du%20eine%20Minute%3F&hash=00bcxgnp',
        currentSentence: 'Wartest du eine Minute?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wartest%20du%20schon%20lange%3F&hash=01xgfowq',
        currentSentence: 'Wartest du schon lange?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Du%20sitzt%20schon%20den%20ganzen%20Nachmittag%20hier.%20Wartest%20du%20auf%20jemanden%3F&hash=00szcle8',
        currentSentence: 'Du sitzt schon den ganzen Nachmittag hier. Wartest du auf jemanden?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Warum%20wartest%20du%20nicht%20im%20Auto%2C%20solange%20ich%20in%20den%20Laden%20gehe%3F&hash=01j792lr',
        currentSentence: 'Warum wartest du nicht im Auto, solange ich in den Laden gehe?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wie%20lange%20wartest%20du%20schon%20darauf%2C%20dass%20dein%20Traum%20in%20Erf%C3%BCllung%20geht%3F&hash=01t7233i',
        currentSentence: 'Wie lange wartest du schon darauf, dass dein Traum in Erfüllung geht?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Worauf%20wartest%20du%20noch%3F&hash=01yq0g6k',
        currentSentence: 'Worauf wartest du noch?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Worauf%20wartest%20du%3F%20Antworte!&hash=007r0zg1',
        currentSentence: 'Worauf wartest du? Antworte!'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wie%20lange%20wartest%20du%20schon%3F&hash=01ytv333',
        currentSentence: 'Wie lange wartest du schon?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ist%20die%20Person%2C%20auf%20die%20du%20wartest%2C%20ein%20Mann%20oder%20eine%20Frau%3F&hash=004b0fjy',
        currentSentence: 'Ist die Person, auf die du wartest, ein Mann oder eine Frau?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Je%20l%C3%A4nger%20du%20wartest%2C%20desto%20schwieriger%20wird%20es%20werden.&hash=002x7p50',
        currentSentence: 'Je länger du wartest, desto schwieriger wird es werden.'
      }
    ]
  },
  {
    elend: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Nichts%20ist%20so%20elend%20als%20der%20Mann%2C%20der%20alles%20will%20und%20der%20nichts%20kann.&hash=019cofy9',
        currentSentence: 'Nichts ist so elend als der Mann, der alles will und der nichts kann.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20f%C3%BChle%20mich%20elend.&hash=018mjzqm',
        currentSentence: 'Ich fühle mich elend.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Sie%20geh%C3%B6ren%20ins%20Bett%2C%20so%20elend%2C%20wie%20Sie%20aussehen!&hash=01g5t0au',
        currentSentence: 'Sie gehören ins Bett, so elend, wie Sie aussehen!'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20habe%20noch%20nie%20einen%20Menschen%20in%20so%20einem%20elenden%20Zustand%20gesehen.&hash=01n4q2bw',
        currentSentence: 'Ich habe noch nie einen Menschen in so einem elenden Zustand gesehen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20st%C3%B6hnte%20ins%20Telefon%3A%20%E2%80%9EMir%20ist%20elend.%E2%80%9C&hash=00h3zhqt',
        currentSentence: 'Ich stöhnte ins Telefon: „Mir ist elend.“'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Alles%20Elend%20kommt%20davon%2C%20dass%20wir%20nicht%20ruhig%20allein%20in%20einem%20Zimmer%20sitzen%20k%C3%B6nnen.&hash=00xpk1sm',
        currentSentence: 'Alles Elend kommt davon, dass wir nicht ruhig allein in einem Zimmer sitzen können.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Arbeit%20sch%C3%BCtzt%20vor%20Elend.&hash=01al3t34',
        currentSentence: 'Arbeit schützt vor Elend.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Du%20z%C3%A4hlst%20im%20Elend%20keinen%20Freund.&hash=00jrwpii',
        currentSentence: 'Du zählst im Elend keinen Freund.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Das%20gr%C3%B6%C3%9Fte%20Elend%20ist%2C%20kein%20Elend%20ertragen%20zu%20k%C3%B6nnen.&hash=01nfv75x',
        currentSentence: 'Das größte Elend ist, kein Elend ertragen zu können.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ein%20kurzer%20Schmerz%20ist%20besser%20als%20ein%20langes%20Elend.&hash=014w7193',
        currentSentence: 'Ein kurzer Schmerz ist besser als ein langes Elend.'
      }
    ]
  },
  {
    erfreuen: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Niemand%20erfreut%20sich%20mehr%20an%20Rache%20als%20eine%20Frau.&hash=00pan0d1',
        currentSentence: 'Niemand erfreut sich mehr an Rache als eine Frau.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20bin%20%C3%BCber%20das%20Wetter%20erfreut.&hash=00q7rv5k',
        currentSentence: 'Ich bin über das Wetter erfreut.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Das%20Essen%20soll%20zuerst%20das%20Auge%20erfreuen%20und%20dann%20den%20Magen.&hash=00skx3w2',
        currentSentence: 'Das Essen soll zuerst das Auge erfreuen und dann den Magen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Es%20ist%20sch%C3%B6n%2C%20sich%20an%20der%20Natur%20zu%20erfreuen.&hash=010dicc8',
        currentSentence: 'Es ist schön, sich an der Natur zu erfreuen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Sich%20an%20den%20einfachen%20Dingen%20des%20Lebens%20zu%20erfreuen%2C%20bedeutet%2C%20sein%20Leben%20zu%20genie%C3%9Fen.&hash=0088x0ql',
        currentSentence: 'Sich an den einfachen Dingen des Lebens zu erfreuen, bedeutet, sein Leben zu genießen.'
      }
    ]
  },
  {
    unfassbar: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Es%20ist%20unfassbar%2C%20dass%20Tom%20schon%20%C3%BCber%2080%20Jahre%20alt%20ist.&hash=00zoqn59',
        currentSentence: 'Es ist unfassbar, dass Tom schon über 80 Jahre alt ist.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Es%20ist%20unfassbar%2C%20einfach%20unfassbar!&hash=01r7zd2n',
        currentSentence: 'Es ist unfassbar, einfach unfassbar!'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Auf%20der%20Insel%20Java%20leben%20148%2C8%20Millionen%20Menschen%2C%20mehr%20als%20in%20ganz%20Russland!%20Das%20finde%20ich%20unfassbar.&hash=00swtv1s',
        currentSentence:
          'Auf der Insel Java leben 148,8 Millionen Menschen, mehr als in ganz Russland! Das finde ich unfassbar.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Dass%20andere%20Leute%20kein%20Gl%C3%BCck%20haben%2C%20finden%20wir%20sehr%20nat%C3%BCrlich%2C%20dass%20wir%20selber%20keines%20haben%2C%20erscheint%20uns%20immer%20unfassbar.&hash=00gyk5df',
        currentSentence:
          'Dass andere Leute kein Glück haben, finden wir sehr natürlich, dass wir selber keines haben, erscheint uns immer unfassbar.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Unfassbar%2C%20dass%20du%20Hanako%20nachstellst!%20Da%20du%20dich%20in%20der%20letzten%20Zeit%20ruhig%20verhalten%20hast%2C%20war%20ich%20nicht%20mehr%20so%20wachsam.&hash=011h5joz',
        currentSentence:
          'Unfassbar, dass du Hanako nachstellst! Da du dich in der letzten Zeit ruhig verhalten hast, war ich nicht mehr so wachsam.'
      }
    ]
  },
  {
    bemerkenswert: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=F%C3%BCr%20ein%20M%C3%A4dchen%20ihres%20Alters%20%C3%A4u%C3%9Fert%20Maria%20wirklich%20sehr%20kluge%2C%20bemerkenswerte%20Gedanken.&hash=01hkn2xl',
        currentSentence: 'Für ein Mädchen ihres Alters äußert Maria wirklich sehr kluge, bemerkenswerte Gedanken.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Diese%20Tatsache%20erscheint%20mir%20bemerkenswert.&hash=01e91h94',
        currentSentence: 'Diese Tatsache erscheint mir bemerkenswert.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Diese%20junge%20Frau%20ist%20bemerkenswert%20h%C3%BCbsch.&hash=00zx8487',
        currentSentence: 'Diese junge Frau ist bemerkenswert hübsch.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Den%20Mut%2C%20sich%20an%20diesem%20Abenteuer%20nicht%20zu%20beteiligen%2C%20finde%20ich%20bemerkenswert.&hash=01ldymnk',
        currentSentence: 'Den Mut, sich an diesem Abenteuer nicht zu beteiligen, finde ich bemerkenswert.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Was%20f%C3%BCr%20eine%20bemerkenswerte%20Leistung!&hash=01t4zuv3',
        currentSentence: 'Was für eine bemerkenswerte Leistung!'
      }
    ]
  },
  {
    Rindfleisch: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20mag%20eher%20Rindfleisch.&hash=01hrgiti',
        currentSentence: 'Ich mag eher Rindfleisch.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20h%C3%A4tte%20auch%20gerne%20Rindfleisch.&hash=019jih4i',
        currentSentence: 'Ich hätte auch gerne Rindfleisch.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20esse%20kein%20Schweine-%20oder%20Rindfleisch%20und%20auch%20keine%20Eier.&hash=00opz0z8',
        currentSentence: 'Ich esse kein Schweine- oder Rindfleisch und auch keine Eier.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Japanisches%20Rindfleisch%20war%20gestern%20im%20Angebot.&hash=00zywyok',
        currentSentence: 'Japanisches Rindfleisch war gestern im Angebot.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Rindfleisch%20ist%20heutzutage%20teuer.&hash=00l9bz9q',
        currentSentence: 'Rindfleisch ist heutzutage teuer.'
      }
    ]
  },
  {
    erreichbar: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wenn%20Sie%20mich%20brauchen%C2%A0%E2%80%93%20ich%20bin%20%C3%BCber%20Handy%20erreichbar.&hash=00p0pbrw',
        currentSentence: 'Wenn Sie mich brauchen – ich bin über Handy erreichbar.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Dieses%20Ziel%20ist%20erreichbar.&hash=01ipte4y',
        currentSentence: 'Dieses Ziel ist erreichbar.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Unsere%20Stadt%20ist%20gut%20mit%20Bahn%20oder%20Auto%20erreichbar.&hash=01iwbuq5',
        currentSentence: 'Unsere Stadt ist gut mit Bahn oder Auto erreichbar.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Der%20Ort%20ist%20nur%20zu%20Fu%C3%9F%20oder%20per%20Pferd%20erreichbar.&hash=00rsrcgr',
        currentSentence: 'Der Ort ist nur zu Fuß oder per Pferd erreichbar.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Die%20Stadt%20ist%20mit%20dem%20Zug%20erreichbar.&hash=01mk53nl',
        currentSentence: 'Die Stadt ist mit dem Zug erreichbar.'
      }
    ]
  },
  {
    Feinde: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wer%20keine%20Feinde%20hat%2C%20hat%20selten%20echte%20Freunde.&hash=00iuefv6',
        currentSentence: 'Wer keine Feinde hat, hat selten echte Freunde.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Hast%20du%20keine%20Feinde%2C%20dann%20hast%20du%20keinen%20Charakter.&hash=01euskpt',
        currentSentence: 'Hast du keine Feinde, dann hast du keinen Charakter.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=In%20der%20Wahl%20seiner%20Feinde%20kann%20der%20Mensch%20nicht%20vorsichtig%20genug%20sein.&hash=00lzs6nx',
        currentSentence: 'In der Wahl seiner Feinde kann der Mensch nicht vorsichtig genug sein.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=%C3%9Cberzeugungen%20sind%20oft%20die%20gef%C3%A4hrlichsten%20Feinde%20der%20Wahrheit.&hash=00cp5jcu',
        currentSentence: 'Überzeugungen sind oft die gefährlichsten Feinde der Wahrheit.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Religion%20und%20Familie%20sind%20die%20beiden%20gr%C3%B6%C3%9Ften%20Feinde%20des%20Fortschritts.&hash=01oki8fp',
        currentSentence: 'Religion und Familie sind die beiden größten Feinde des Fortschritts.'
      }
    ]
  },
  {
    verknüpfen: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Es%20sind%20Bedingungen%20damit%20verkn%C3%BCpft.&hash=0145tv47',
        currentSentence: 'Es sind Bedingungen damit verknüpft.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=K%C3%B6nnte%20bitte%20jemand%20die%20S%C3%A4tze%20mit%20den%20Nummern%201%20und%202%20miteinander%20verkn%C3%BCpfen%3F&hash=000uskdk',
        currentSentence: 'Könnte bitte jemand die Sätze mit den Nummern 1 und 2 miteinander verknüpfen?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Sie%20sollten%20Beruf%20und%20Privatleben%20miteinander%20verkn%C3%BCpfen.&hash=014poss0',
        currentSentence: 'Sie sollten Beruf und Privatleben miteinander verknüpfen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Seine%20Vorstellungen%20waren%20eng%20mit%20dem%20Buddhismus%20verkn%C3%BCpft.&hash=00yfr0xb',
        currentSentence: 'Seine Vorstellungen waren eng mit dem Buddhismus verknüpft.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=In%20Japan%20sind%20L%C3%B6hne%20allgemein%20mit%20der%20Dienstdauer%20verkn%C3%BCpft.&hash=01c1pp1l',
        currentSentence: 'In Japan sind Löhne allgemein mit der Dienstdauer verknüpft.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wenn%20du%20meinen%20Satz%20schon%20%C3%BCbersetzt%20hast%2C%20warum%20hast%20du%20ihn%20dann%20nicht%20mit%20deinem%20verkn%C3%BCpft%3F&hash=0048utr3',
        currentSentence: 'Wenn du meinen Satz schon übersetzt hast, warum hast du ihn dann nicht mit deinem verknüpft?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Alle%20Dinge%20und%20Vorg%C3%A4nge%20der%20Welt%20sind%20miteinander%20verkn%C3%BCpft%20und%20verschlungen.&hash=00kco7zc',
        currentSentence: 'Alle Dinge und Vorgänge der Welt sind miteinander verknüpft und verschlungen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wie%20verkn%C3%BCpft%20oder%20entkoppelt%20man%20S%C3%A4tze%3F&hash=00vs78ls',
        currentSentence: 'Wie verknüpft oder entkoppelt man Sätze?'
      }
    ]
  },
  {
    erhitzen: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20erhitze%20das%20Abendessen.&hash=00t3czm1',
        currentSentence: 'Ich erhitze das Abendessen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Sie%20erhitzt%20das%20Wasser.&hash=01c1wnn0',
        currentSentence: 'Sie erhitzt das Wasser.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20kann%20das%20Abendessen%20nicht%20erhitzen.%20Es%20ist%20kein%20Gas%20da.&hash=01o120hc',
        currentSentence: 'Ich kann das Abendessen nicht erhitzen. Es ist kein Gas da.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ein%20oder%20zwei%20Essl%C3%B6ffel%20Oliven%C3%B6l%20werden%20im%20Topf%20erhitzt.&hash=01tuhkh0',
        currentSentence: 'Ein oder zwei Esslöffel Olivenöl werden im Topf erhitzt.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wenn%20man%20Eis%20erhitzt%2C%20schmilzt%20es.&hash=01vwety9',
        currentSentence: 'Wenn man Eis erhitzt, schmilzt es.'
      }
    ]
  },
  {
    dekorieren: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Tom%20dekoriert%20sein%20Zimmer.&hash=01j0b3be',
        currentSentence: 'Tom dekoriert sein Zimmer.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Tom%20hat%20vor%2C%20sein%20Schlafzimmer%20neu%20zu%20dekorieren.&hash=004z73ux',
        currentSentence: 'Tom hat vor, sein Schlafzimmer neu zu dekorieren.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20dekoriere%20die%20Seiten%20meines%20Buches%20mit%20den%20Farben%20verschiedener%20Flaggen.&hash=01hi5im5',
        currentSentence: 'Ich dekoriere die Seiten meines Buches mit den Farben verschiedener Flaggen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20mag%20es%2C%20mein%20Zimmer%20mit%20Blumen%20zu%20dekorieren.&hash=00gzm6h8',
        currentSentence: 'Ich mag es, mein Zimmer mit Blumen zu dekorieren.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Sie%20dekoriert%20sich%20die%20W%C3%A4nde%20mit%20Postern.&hash=004zmgna',
        currentSentence: 'Sie dekoriert sich die Wände mit Postern.'
      }
    ]
  },
  {
    Karotte: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Er%20isst%20meine%20Karotte.&hash=0012kj9m',
        currentSentence: 'Er isst meine Karotte.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Au%C3%9Fer%20Karotten%20gibt%20es%20nichts%2C%20was%20er%20nicht%20isst.&hash=01jhvgvw',
        currentSentence: 'Außer Karotten gibt es nichts, was er nicht isst.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Die%20Karotten%20kosten%20drei%20Dollar.&hash=00mwu3cg',
        currentSentence: 'Die Karotten kosten drei Dollar.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Er%20schnitt%20die%20Karotte%20klein.&hash=005eclyt',
        currentSentence: 'Er schnitt die Karotte klein.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wir%20brauchen%20Karotten%20und%20Tomaten%20f%C3%BCr%20die%20Suppe.&hash=0069kg20',
        currentSentence: 'Wir brauchen Karotten und Tomaten für die Suppe.'
      }
    ]
  },
  {
    geradeaus: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Gehen%20Sie%20weiter%20geradeaus.&hash=00uda5kb',
        currentSentence: 'Gehen Sie weiter geradeaus.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Geht%20diese%20Stra%C3%9Fe%20geradeaus.&hash=01efd5cp',
        currentSentence: 'Geht diese Straße geradeaus.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Soll%20ich%20links%20rum%2C%20rechts%20rum%20oder%20geradeaus%20gehen%3F&hash=01570hgr',
        currentSentence: 'Soll ich links rum, rechts rum oder geradeaus gehen?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Es%20ist%20so%20klein%20bei%20mir!%20Geradeaus%20kommt%20man%20nicht%20besonders%20weit%20...&hash=01y57yg9',
        currentSentence: 'Es ist so klein bei mir! Geradeaus kommt man nicht besonders weit ...'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20bin%20so%20m%C3%BCde%2C%20dass%20ich%20nicht%20mehr%20geradeaus%20gucken%20kann.&hash=01mvqrpi',
        currentSentence: 'Ich bin so müde, dass ich nicht mehr geradeaus gucken kann.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Gehen%20Sie%20geradeaus%20bis%20ans%20Ende%20der%20Stra%C3%9Fe.&hash=00wpm8d2',
        currentSentence: 'Gehen Sie geradeaus bis ans Ende der Straße.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Fahren%20Sie%20auf%20dieser%20Stra%C3%9Fe%20bitte%20geradeaus!&hash=007q2nvb',
        currentSentence: 'Fahren Sie auf dieser Straße bitte geradeaus!'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Fahre%20geradeaus%20und%20biege%20dann%20nach%20rechts%20ab.&hash=00w60o9v',
        currentSentence: 'Fahre geradeaus und biege dann nach rechts ab.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Geh%20einfach%20geradeaus%2C%20dann%20kommst%20du%20zum%20Bahnhof.&hash=00dvcjuo',
        currentSentence: 'Geh einfach geradeaus, dann kommst du zum Bahnhof.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Geh%20weiter%20geradeaus.&hash=00u9i8ij',
        currentSentence: 'Geh weiter geradeaus.'
      }
    ]
  },
  {
    Flüchtling: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Das%20Boot%20ist%20voller%20Fl%C3%BCchtlinge.&hash=01847dd8',
        currentSentence: 'Das Boot ist voller Flüchtlinge.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wir%20m%C3%BCssen%20die%20Fl%C3%BCchtlinge%20von%20ihrem%20Leid%20befreien.&hash=01lwcrre',
        currentSentence: 'Wir müssen die Flüchtlinge von ihrem Leid befreien.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Die%20Fl%C3%BCchtlinge%20k%C3%A4mpften%20gegen%20den%20Hunger.&hash=01vk7zqx',
        currentSentence: 'Die Flüchtlinge kämpften gegen den Hunger.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Unter%20den%20Fl%C3%BCchtlingen%20sind%20viele%20Kinder.&hash=00vql4hd',
        currentSentence: 'Unter den Flüchtlingen sind viele Kinder.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Es%20ist%20eine%20Schande%2C%20was%20mit%20den%20Fl%C3%BCchtlingen%20an%20der%20Grenze%20passiert.&hash=00t5wq1b',
        currentSentence: 'Es ist eine Schande, was mit den Flüchtlingen an der Grenze passiert.'
      }
    ]
  },
  {
    Kapazität: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Alle%20Fabriken%20arbeiten%20mit%20voller%20Kapazit%C3%A4t.&hash=002qo1vi',
        currentSentence: 'Alle Fabriken arbeiten mit voller Kapazität.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=In%20dem%20Bericht%20wurde%20die%20Kapazit%C3%A4t%20der%20Halle%20%C3%BCbertrieben.&hash=01yw6lh8',
        currentSentence: 'In dem Bericht wurde die Kapazität der Halle übertrieben.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wie%20berechnet%20man%20die%20Kapazit%C3%A4t%20eines%20Kondensators%3F&hash=01ddqexv',
        currentSentence: 'Wie berechnet man die Kapazität eines Kondensators?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Die%20Amerikaner%20verf%C3%BCgen%20sicherlich%20%C3%BCber%20ausreichende%20Kapazit%C3%A4t%20und%20Kenntnisse%2C%20um%20diese%20Schiffe%20selbst%20zu%20verschrotten.&hash=0159z59h',
        currentSentence:
          'Die Amerikaner verfügen sicherlich über ausreichende Kapazität und Kenntnisse, um diese Schiffe selbst zu verschrotten.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Das%20maximale%20Volumen%20diverser%20Knollenfr%C3%BCchte%20verh%C3%A4lt%20sich%20reziprok%20zur%20intellektuellen%20Kapazit%C3%A4t%20der%20sie%20produzierenden%20Agrarier.&hash=015cfjaa',
        currentSentence:
          'Das maximale Volumen diverser Knollenfrüchte verhält sich reziprok zur intellektuellen Kapazität der sie produzierenden Agrarier.'
      }
    ]
  },
  {
    Wange: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20hab%20ihn%20auf%20die%20Wange%20gek%C3%BCsst.&hash=009n9i55',
        currentSentence: 'Ich hab ihn auf die Wange geküsst.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Trocken%20Brot%20macht%20Wangen%20rot.&hash=01ohyxxn',
        currentSentence: 'Trocken Brot macht Wangen rot.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ihre%20Wangen%20waren%20kalt%20wie%20Eis.&hash=00unc4ar',
        currentSentence: 'Ihre Wangen waren kalt wie Eis.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ihm%20fielen%20Augen%20und%20Wangen%20ein.&hash=00n5o70k',
        currentSentence: 'Ihm fielen Augen und Wangen ein.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Tom%20trug%20Maria%20auf%20den%20Armen%20und%20gab%20ihr%20auf%20die%20Wange%20einen%20Kuss.&hash=008lwc4n',
        currentSentence: 'Tom trug Maria auf den Armen und gab ihr auf die Wange einen Kuss.'
      }
    ]
  },
  {
    Festplatte: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20speichere%20meine%20Arbeiten%20immer%20zus%C3%A4tzlich%20auf%20einer%20externen%20Festplatte.&hash=01qmyrow',
        currentSentence: 'Ich speichere meine Arbeiten immer zusätzlich auf einer externen Festplatte.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20habe%20aus%20Versehen%20meine%20Festplatte%20gel%C3%B6scht.&hash=003tzyvv',
        currentSentence: 'Ich habe aus Versehen meine Festplatte gelöscht.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Es%20besteht%20immer%20das%20Risiko%2C%20dass%20s%C3%A4mtliche%20Daten%20auf%20der%20Festplatte%20verloren%20gehen.&hash=01w8a4v5',
        currentSentence: 'Es besteht immer das Risiko, dass sämtliche Daten auf der Festplatte verloren gehen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Meine%20Festplatte%20ist%20fast%20voll.&hash=000xfz99',
        currentSentence: 'Meine Festplatte ist fast voll.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wer%20hat%20die%20neue%20Festplatte%20installiert%3F&hash=001fp1nc',
        currentSentence: 'Wer hat die neue Festplatte installiert?'
      }
    ]
  },
  {
    leidenschaftlich: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ehen%2C%20aus%20leidenschaftlicher%2C%20blinder%20Liebe%20geschlossen%2C%20geraten%20selten.&hash=01v614se',
        currentSentence: 'Ehen, aus leidenschaftlicher, blinder Liebe geschlossen, geraten selten.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Er%20hat%20keinerlei%20%C3%9Cberzeugung%2C%20aber%20die%20verteidigt%20er%20leidenschaftlich.&hash=01g79lxi',
        currentSentence: 'Er hat keinerlei Überzeugung, aber die verteidigt er leidenschaftlich.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ihr%20Gesicht%20tr%C3%A4gt%20die%20Spuren%20einer%20leidenschaftlichen%20Vergangenheit.&hash=01nl2349',
        currentSentence: 'Ihr Gesicht trägt die Spuren einer leidenschaftlichen Vergangenheit.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Tom%20empfindet%20einen%20leidenschaftlichen%20Hass%20gegen%20Maria.&hash=018dbn6x',
        currentSentence: 'Tom empfindet einen leidenschaftlichen Hass gegen Maria.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Das%20neue%20Jahr%20wird%20stets%20leidenschaftlich%20begr%C3%BC%C3%9Ft.%20Egal%20wie%20es%20dann%20wirklich%20wird.&hash=01y2euxu',
        currentSentence: 'Das neue Jahr wird stets leidenschaftlich begrüßt. Egal wie es dann wirklich wird.'
      }
    ]
  },
  {
    zuordnen: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Jedem%20Haus%20ist%20ein%20Garten%20zugeordnet.&hash=0184p2qe',
        currentSentence: 'Jedem Haus ist ein Garten zugeordnet.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Jeder%20Wohnung%20ist%20ein%20Garten%20zugeordnet.&hash=01y8e2q6',
        currentSentence: 'Jeder Wohnung ist ein Garten zugeordnet.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Jeder%20Kategorie%20ist%20ein%20eindeutiger%20Code%20zugeordnet.&hash=000pmfes',
        currentSentence: 'Jeder Kategorie ist ein eindeutiger Code zugeordnet.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Es%20ist%20zu%20empfehlen%2C%20keine%20S%C3%A4tze%20zu%20%C3%BCbersetzen%2C%20die%20nicht%20einem%20Muttersprachler%20zugeordnet%20sind.&hash=014ag8xm',
        currentSentence:
          'Es ist zu empfehlen, keine Sätze zu übersetzen, die nicht einem Muttersprachler zugeordnet sind.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Steine%20werden%20gemeinhin%20der%20toten%20Materie%20zugeordnet.&hash=00104kg2',
        currentSentence: 'Steine werden gemeinhin der toten Materie zugeordnet.'
      }
    ]
  },
  {
    umkehren: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wer%20umkehrt%2C%20dem%20kommt%20man%20entgegen.&hash=01k7b4wh',
        currentSentence: 'Wer umkehrt, dem kommt man entgegen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Einfach%20reden%2C%20aber%20kompliziert%20denken%20%E2%80%94%20nicht%20umgekehrt.&hash=000ox56x',
        currentSentence: 'Einfach reden, aber kompliziert denken — nicht umgekehrt.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Umgekehrt%20wird%20ein%20Schuh%20daraus.&hash=01ykvfo1',
        currentSentence: 'Umgekehrt wird ein Schuh daraus.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Die%20Praxis%20sollte%20das%20Ergebnis%20des%20Nachdenkens%20sein%2C%20nicht%20umgekehrt.&hash=013db15y',
        currentSentence: 'Die Praxis sollte das Ergebnis des Nachdenkens sein, nicht umgekehrt.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Unter%20Stil%20verstehe%20ich%20die%20F%C3%A4higkeit%2C%20komplizierte%20Dinge%20einfach%20zu%20sagen%2C%20nicht%20umgekehrt.&hash=01kqtvci',
        currentSentence: 'Unter Stil verstehe ich die Fähigkeit, komplizierte Dinge einfach zu sagen, nicht umgekehrt.'
      }
    ]
  },
  {
    ausüben: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wer%20Angst%20hat%2C%20sollte%20meinen%20Beruf%20nicht%20aus%C3%BCben.&hash=00cfdo4j',
        currentSentence: 'Wer Angst hat, sollte meinen Beruf nicht ausüben.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Macht%20besitzen%20und%20nicht%20aus%C3%BCben%20ist%20wahre%20Gr%C3%B6%C3%9Fe.&hash=00asnajy',
        currentSentence: 'Macht besitzen und nicht ausüben ist wahre Größe.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Macht%20ist%20der%20leichte%20Ersatz%20f%C3%BCr%20Liebe.%20Macht%20aus%C3%BCben%20ist%20leicht%20%E2%80%93%20Liebe%20%C3%BCben%20dagegen%20schwer.&hash=00srim7s',
        currentSentence: 'Macht ist der leichte Ersatz für Liebe. Macht ausüben ist leicht – Liebe üben dagegen schwer.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Eines%20recht%20wissen%20und%20aus%C3%BCben%20gibt%20h%C3%B6here%20Bildung%20als%20Halbheit%20im%20Hundertf%C3%A4ltigen.&hash=00nc3wff',
        currentSentence: 'Eines recht wissen und ausüben gibt höhere Bildung als Halbheit im Hundertfältigen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Verehrter%20Herr%20Kollege%2C%20es%20wird%20einfach%20nichts%20Gescheites%20daraus%2C%20wenn%20man%20die%20Galle%20die%20Funktion%20des%20Gehirns%20aus%C3%BCben%20l%C3%A4sst!&hash=00v0hfms',
        currentSentence:
          'Verehrter Herr Kollege, es wird einfach nichts Gescheites daraus, wenn man die Galle die Funktion des Gehirns ausüben lässt!'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Es%20wird%20Druck%20ausge%C3%BCbt.&hash=01kjtk2q',
        currentSentence: 'Es wird Druck ausgeübt.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wir%20m%C3%BCssen%20weiterhin%20Druck%20aus%C3%BCben.&hash=00a3noug',
        currentSentence: 'Wir müssen weiterhin Druck ausüben.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Tut%20es%20weh%2C%20wenn%20ich%20hier%20Druck%20aus%C3%BCbe%3F&hash=0080qtez',
        currentSentence: 'Tut es weh, wenn ich hier Druck ausübe?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Eine%20F%C3%BChrung%2C%20die%20Druck%20aus%C3%BCbt%2C%20h%C3%A4tte%20die%20Ergebnisse%2C%20die%20wir%20hier%20sehen%2C%20nicht%20erzielen%20k%C3%B6nnen.&hash=00r1szaq',
        currentSentence:
          'Eine Führung, die Druck ausübt, hätte die Ergebnisse, die wir hier sehen, nicht erzielen können.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Er%20hat%20den%20Beruf%20zwar%20erlernt%2C%20aber%20nie%20ausge%C3%BCbt.&hash=00yt4lmq',
        currentSentence: 'Er hat den Beruf zwar erlernt, aber nie ausgeübt.'
      }
    ]
  },
  {
    Paradies: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Erinnerung%20ist%20das%20Paradies%2C%20aus%20dem%20man%20nicht%20vertrieben%20werden%20kann.&hash=01mah8ey',
        currentSentence: 'Erinnerung ist das Paradies, aus dem man nicht vertrieben werden kann.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Das%20Paradies%20auf%20Erden%20ist%20dort%2C%20wo%20ich%20bin.&hash=008jywgl',
        currentSentence: 'Das Paradies auf Erden ist dort, wo ich bin.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=K%C3%BCsse%20sind%20das%2C%20was%20von%20der%20Sprache%20des%20Paradieses%20%C3%BCbrig%20geblieben%20ist.&hash=0139dyn5',
        currentSentence: 'Küsse sind das, was von der Sprache des Paradieses übrig geblieben ist.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Mit%20dir%20zusammen%20w%C3%BCrde%20mir%20sogar%20die%20H%C3%B6lle%20wie%20ein%20Paradies%20vorkommen.&hash=00kbvk46',
        currentSentence: 'Mit dir zusammen würde mir sogar die Hölle wie ein Paradies vorkommen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Sch%C3%B6nes%20kann%20nur%20der%20entdecken%2C%20der%20wei%C3%9F%2C%20dass%20er%20nicht%20im%20Paradies%20lebt.&hash=01pjlo36',
        currentSentence: 'Schönes kann nur der entdecken, der weiß, dass er nicht im Paradies lebt.'
      }
    ]
  },
  {
    Berater: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=In%20der%20Vielzahl%20der%20Berater%20liegt%20die%20Sicherheit.&hash=00hjg7q6',
        currentSentence: 'In der Vielzahl der Berater liegt die Sicherheit.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Die%20Firma%20hat%20ihn%20als%20Berater%20besch%C3%A4ftigt.&hash=00xrk6a3',
        currentSentence: 'Die Firma hat ihn als Berater beschäftigt.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Daf%C3%BCr%20ben%C3%B6tige%20ich%20die%20Hilfe%20eines%20professionellen%20Beraters.&hash=01dl94xb',
        currentSentence: 'Dafür benötige ich die Hilfe eines professionellen Beraters.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20war%20sein%20pers%C3%B6nlicher%20Freund%20sowie%20sein%20%C3%A4rztlicher%20Berater.&hash=014z815m',
        currentSentence: 'Ich war sein persönlicher Freund sowie sein ärztlicher Berater.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Er%20ist%20der%20engste%20Berater%20des%20K%C3%B6nigs.&hash=01z0to69',
        currentSentence: 'Er ist der engste Berater des Königs.'
      }
    ]
  },
  {
    zuversichtlich: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Anfangs%20war%20ich%20noch%20zuversichtlich%2C%20was%20sich%20aber%20schnell%20%C3%A4ndern%20sollte.&hash=01s5el5e',
        currentSentence: 'Anfangs war ich noch zuversichtlich, was sich aber schnell ändern sollte.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20hoffe%20zuversichtlich%2C%20dass%20die%20Zukunft%20fr%C3%B6hlichere%20M%C3%B6glichkeiten%20bietet%20als%20Computer%20und%20Internet.&hash=01hxz0kp',
        currentSentence:
          'Ich hoffe zuversichtlich, dass die Zukunft fröhlichere Möglichkeiten bietet als Computer und Internet.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20bin%20zuversichtlich%2C%20dass%20er%20sein%20Versprechen%20halten%20wird.&hash=01kj5rss',
        currentSentence: 'Ich bin zuversichtlich, dass er sein Versprechen halten wird.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Er%20ist%20zuversichtlich%2C%20dass%20er%20den%20Test%20besteht.&hash=00881b6s',
        currentSentence: 'Er ist zuversichtlich, dass er den Test besteht.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wir%20sind%20nicht%20recht%20zuversichtlich.&hash=007strbf',
        currentSentence: 'Wir sind nicht recht zuversichtlich.'
      }
    ]
  },
  {
    Bestandteil: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Was%20ist%20ein%20wichtiger%20Bestandteil%2C%20um%20Geld%20zu%20verdienen%3F&hash=01pss5lg',
        currentSentence: 'Was ist ein wichtiger Bestandteil, um Geld zu verdienen?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Eine%20gute%20Kommunikation%20und%20gegenseitiger%20Respekt%20sind%20die%20wesentlichen%20Bestandteile%20erfolgreicher%20Zusammenarbeit.&hash=00apx8vs',
        currentSentence:
          'Eine gute Kommunikation und gegenseitiger Respekt sind die wesentlichen Bestandteile erfolgreicher Zusammenarbeit.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Neugier%20ist%20ein%20Bestandteil%20von%20Intelligenz.&hash=00dto9ts',
        currentSentence: 'Neugier ist ein Bestandteil von Intelligenz.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Das%20war%20Bestandteil%20des%20Plans.&hash=00zlocrz',
        currentSentence: 'Das war Bestandteil des Plans.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ist%20ein%20Gegenstand%2C%20dessen%20s%C3%A4mtliche%20Bestandteile%20ausgetauscht%20wurden%2C%20noch%20immer%20derselbe%20Gegenstand%3F&hash=012c9y96',
        currentSentence:
          'Ist ein Gegenstand, dessen sämtliche Bestandteile ausgetauscht wurden, noch immer derselbe Gegenstand?'
      }
    ]
  },
  {
    Aussprache: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wie%20ist%20meine%20Aussprache%3F%20H%C3%B6rt%20man%20die%20Deutsche%20stark%20heraus%3F&hash=01498igq',
        currentSentence: 'Wie ist meine Aussprache? Hört man die Deutsche stark heraus?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Sie%20hat%20eine%20ziemlich%20feuchte%20Aussprache.&hash=00hoacll',
        currentSentence: 'Sie hat eine ziemlich feuchte Aussprache.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Bei%20ihrer%20klaren%20Aussprache%20verstehe%20ich%20jedes%20Wort.&hash=01vr3jyh',
        currentSentence: 'Bei ihrer klaren Aussprache verstehe ich jedes Wort.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=F%C3%BCr%20einen%20Versuch%20ist%20es%20niemals%20zu%20fr%C3%BCh%2C%20f%C3%BCr%20eine%20Aussprache%20niemals%20zu%20sp%C3%A4t.&hash=009h0enw',
        currentSentence: 'Für einen Versuch ist es niemals zu früh, für eine Aussprache niemals zu spät.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Bitte%20entschuldige%20meine%20schlechte%20Aussprache!&hash=00t28rsu',
        currentSentence: 'Bitte entschuldige meine schlechte Aussprache!'
      }
    ]
  },
  {
    Tank: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Der%20Tank%20ist%20leer.&hash=00e2xje7',
        currentSentence: 'Der Tank ist leer.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wenn%20ich%20ein%20Gehirn%20im%20Tank%20w%C3%A4re%2C%20w%C3%BCrde%20ich%20dies%20nicht%20schreiben.&hash=00snlt8z',
        currentSentence: 'Wenn ich ein Gehirn im Tank wäre, würde ich dies nicht schreiben.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Der%20Tank%20ist%20noch%20halb%20voll.&hash=00xxrtzv',
        currentSentence: 'Der Tank ist noch halb voll.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Das%20Fahrzeug%20blieb%20mit%20leerem%20Tank%20liegen.&hash=00cs7jmu',
        currentSentence: 'Das Fahrzeug blieb mit leerem Tank liegen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=F%C3%BCll%20den%20Tank%20auf.&hash=01f1ml8n',
        currentSentence: 'Füll den Tank auf.'
      }
    ]
  },
  {
    unterdrücken: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Viele%20k%C3%B6nnen%20die%20Tr%C3%A4nen%20kaum%20unterdr%C3%BCcken.&hash=01b3jymn',
        currentSentence: 'Viele können die Tränen kaum unterdrücken.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Die%20Wahrheit%20kann%20gedr%C3%BCckt%2C%20aber%20nicht%20unterdr%C3%BCckt%20werden.&hash=00gwzt4n',
        currentSentence: 'Die Wahrheit kann gedrückt, aber nicht unterdrückt werden.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Warum%20unterdr%C3%BCcken%20Sie%20Ihre%20Mitarbeiter%3F&hash=01vwzdnh',
        currentSentence: 'Warum unterdrücken Sie Ihre Mitarbeiter?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Es%20ist%20leichter%2C%20den%20ersten%20Wunsch%20zu%20unterdr%C3%BCcken%2C%20als%20die%20folgenden%20zu%20erf%C3%BCllen.&hash=00d3nmql',
        currentSentence: 'Es ist leichter, den ersten Wunsch zu unterdrücken, als die folgenden zu erfüllen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Sie%20unterdr%C3%BCckte%20ein%20Lachen.&hash=00qnf27b',
        currentSentence: 'Sie unterdrückte ein Lachen.'
      }
    ]
  },
  {
    Algorithmus: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Dann%20k%C3%B6nnen%20wir%20den%20Algorithmus%20fortsetzen.&hash=00583vq1',
        currentSentence: 'Dann können wir den Algorithmus fortsetzen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Der%20Begriff%20des%20Algorithmus%20bildet%20den%20Kern%20der%20gesamten%20Berechnungstheorie.&hash=01al5fpz',
        currentSentence: 'Der Begriff des Algorithmus bildet den Kern der gesamten Berechnungstheorie.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Dieser%20Algorithmus%20konvergiert%20nicht.&hash=00wmmxp1',
        currentSentence: 'Dieser Algorithmus konvergiert nicht.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Einen%20geeigneten%20Algorithmus%20f%C3%BCr%20mein%20Maschinenprogramm%20zu%20finden%2C%20bereitete%20mir%20gro%C3%9Fe%20Schwierigkeiten.&hash=00mzobky',
        currentSentence:
          'Einen geeigneten Algorithmus für mein Maschinenprogramm zu finden, bereitete mir große Schwierigkeiten.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Die%20Menschheit%20manipuliert%20mittels%20diverser%20Algorithmen%20Datenverarbeitungsprozesse%20und%20erschafft%20so%20das%20Leben%20der%20Datenwelt.&hash=01tf139o',
        currentSentence:
          'Die Menschheit manipuliert mittels diverser Algorithmen Datenverarbeitungsprozesse und erschafft so das Leben der Datenwelt.'
      }
    ]
  },
  {
    Fitnessstudio: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Bist%20du%20Mitglied%20in%20einem%20Fitnessstudio%3F&hash=01crg1sy',
        currentSentence: 'Bist du Mitglied in einem Fitnessstudio?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Das%20Fitnessstudio%20liegt%20um%20die%20Ecke.&hash=01qxeuwf',
        currentSentence: 'Das Fitnessstudio liegt um die Ecke.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20gehe%20regelm%C3%A4%C3%9Fig%20ins%20Fitnessstudio.&hash=00uc22ya',
        currentSentence: 'Ich gehe regelmäßig ins Fitnessstudio.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Tom%20trainiert%20zweimal%20bis%20dreimal%20in%20der%20Woche%20im%20Fitnessstudio.&hash=00d9adif',
        currentSentence: 'Tom trainiert zweimal bis dreimal in der Woche im Fitnessstudio.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20habe%20meine%20jetzige%20Freundin%20im%20Fitnessstudio%20kennengelernt.&hash=01pwwz8l',
        currentSentence: 'Ich habe meine jetzige Freundin im Fitnessstudio kennengelernt.'
      }
    ]
  },
  {
    aufsteigen: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Nach%20dieser%20Rede%20im%20Bundestag%20ist%20Tom%20zu%20einem%20meiner%20pers%C3%B6nlichen%20Helden%20aufgestiegen.&hash=00vn24fo',
        currentSentence: 'Nach dieser Rede im Bundestag ist Tom zu einem meiner persönlichen Helden aufgestiegen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20f%C3%BChlte%20von%20Anfang%20an%20Zweifel%20in%20mir%20aufsteigen.&hash=00ewzzmw',
        currentSentence: 'Ich fühlte von Anfang an Zweifel in mir aufsteigen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Tom%20verdient%20es%20aufzusteigen.&hash=012suxb5',
        currentSentence: 'Tom verdient es aufzusteigen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Sie%20will%20als%20Stern%20aufsteigen.&hash=016shduc',
        currentSentence: 'Sie will als Stern aufsteigen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wir%20wollten%20ein%20Gef%C3%BChl%20der%20Hoffnung%20aufsteigen%20lassen.&hash=00hvhmvg',
        currentSentence: 'Wir wollten ein Gefühl der Hoffnung aufsteigen lassen.'
      }
    ]
  },
  {
    bessere: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Du%20verdienst%20etwas%20Besseres%20als%20mich.&hash=010t35k6',
        currentSentence: 'Du verdienst etwas Besseres als mich.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Besser%20weniger%20und%20daf%C3%BCr%20etwas%20Besseres.&hash=01f8qhzl',
        currentSentence: 'Besser weniger und dafür etwas Besseres.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Mach%20das%20Beste%20aus%20dir%2C%20etwas%20Besseres%20kannst%20du%20nicht%20tun.&hash=00y9b6at',
        currentSentence: 'Mach das Beste aus dir, etwas Besseres kannst du nicht tun.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Nach%20einem%20Bad%20gibt%20es%20doch%20nichts%20Besseres%20als%20ein%20Bier!&hash=015bfflj',
        currentSentence: 'Nach einem Bad gibt es doch nichts Besseres als ein Bier!'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20schw%C3%B6re%2C%20ich%20habe%20nie%20etwas%20Besseres%20gegessen.&hash=01atgev7',
        currentSentence: 'Ich schwöre, ich habe nie etwas Besseres gegessen.'
      }
    ]
  },
  {
    Fortsetzung: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Die%20Fortsetzung%20folgt.&hash=00i7d6v1',
        currentSentence: 'Die Fortsetzung folgt.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Der%20Krieg%20ist%20die%20Fortsetzung%20der%20Politik%20mit%20anderen%20Mitteln.&hash=01q0vykp',
        currentSentence: 'Der Krieg ist die Fortsetzung der Politik mit anderen Mitteln.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Stell%20dir%20eine%20m%C3%B6gliche%20Fortsetzung%20der%20Geschichte%20vor%20und%20schreib%20den%20Dialog!&hash=01km51kc',
        currentSentence: 'Stell dir eine mögliche Fortsetzung der Geschichte vor und schreib den Dialog!'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Dir%20hat%20man%20die%20Fortsetzung%20dieser%20Arbeit%20%C3%BCbertragen.&hash=0143iaec',
        currentSentence: 'Dir hat man die Fortsetzung dieser Arbeit übertragen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ein%20Jahr%20sp%C3%A4ter%20kam%20eine%20Fortsetzung%20heraus.&hash=01fanilo',
        currentSentence: 'Ein Jahr später kam eine Fortsetzung heraus.'
      }
    ]
  },
  {
    Stange: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Peter%20kauft%20seine%20Kleidung%20immer%20von%20der%20Stange.&hash=017k3pea',
        currentSentence: 'Peter kauft seine Kleidung immer von der Stange.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Der%20Urlaub%20hat%20mich%20eine%20Stange%20Geld%20gekostet.&hash=00e6bg3d',
        currentSentence: 'Der Urlaub hat mich eine Stange Geld gekostet.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Es%20ist%20seltsam%2C%20dass%20die%20H%C3%BChner%20beim%20Schlafen%20nie%20von%20der%20Stange%20fallen.&hash=005evkn2',
        currentSentence: 'Es ist seltsam, dass die Hühner beim Schlafen nie von der Stange fallen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Er%20bemerkte%20eine%20aus%20dem%20Schnee%20hervorragende%20Stange.&hash=01bjg4a4',
        currentSentence: 'Er bemerkte eine aus dem Schnee hervorragende Stange.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Mary%20h%C3%A4lt%20Tom%20immer%20noch%20die%20Stange.&hash=00yhzoqh',
        currentSentence: 'Mary hält Tom immer noch die Stange.'
      }
    ]
  },
  {
    beitreten: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Warum%20m%C3%B6chtest%20du%20unserer%20Gruppe%20beitreten%3F&hash=0031mgtr',
        currentSentence: 'Warum möchtest du unserer Gruppe beitreten?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wer%20einer%20geschlagenen%20Partei%20beitritt%2C%20hat%20entweder%20Charakter%20oder%20keinen%20Verstand.&hash=01obbw8y',
        currentSentence: 'Wer einer geschlagenen Partei beitritt, hat entweder Charakter oder keinen Verstand.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Sie%20weigerten%20sich%2C%20der%20Armee%20beizutreten.&hash=00s66wuc',
        currentSentence: 'Sie weigerten sich, der Armee beizutreten.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20m%C3%B6chte%20Tom%20bitten%2C%20unserer%20Gruppe%20beizutreten.&hash=00i2e4ah',
        currentSentence: 'Ich möchte Tom bitten, unserer Gruppe beizutreten.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Lasst%20mich%20dem%20Spiel%20auch%20beitreten.&hash=00ztq8j0',
        currentSentence: 'Lasst mich dem Spiel auch beitreten.'
      }
    ]
  },
  {
    fülle: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Auch%20ein%20F%C3%BClle%20von%20B%C3%BCchern%20ersetzt%20den%20guten%20Lehrer%20nicht.&hash=00j3n25y',
        currentSentence: 'Auch ein Fülle von Büchern ersetzt den guten Lehrer nicht.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20f%C3%BChle%2C%20dass%20Kleinigkeiten%20die%20F%C3%BClle%20des%20Lebens%20ausmachen.&hash=00us8rgu',
        currentSentence: 'Ich fühle, dass Kleinigkeiten die Fülle des Lebens ausmachen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Diesen%20F%C3%BCller%20habe%20ich%20in%20Paris%20gekauft.&hash=011cpyes',
        currentSentence: 'Diesen Füller habe ich in Paris gekauft.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=F%C3%BClle%20dieses%20Formular%20aus.&hash=00b1uevb',
        currentSentence: 'Fülle dieses Formular aus.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Schreib%20bitte%20mit%20F%C3%BCller.&hash=01eq4tlz',
        currentSentence: 'Schreib bitte mit Füller.'
      }
    ]
  },
  {
    verwechseln: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Diese%20W%C3%B6rter%20verwechselt%20man%20leicht.&hash=004gaggf',
        currentSentence: 'Diese Wörter verwechselt man leicht.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Man%20darf%20die%20Mehrheit%20nicht%20mit%20der%20Wahrheit%20verwechseln.&hash=01cm0jho',
        currentSentence: 'Man darf die Mehrheit nicht mit der Wahrheit verwechseln.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Alexmarcelo%20und%20Marcelostockle%20werden%20h%C3%A4ufig%20verwechselt.&hash=00q2red6',
        currentSentence: 'Alexmarcelo und Marcelostockle werden häufig verwechselt.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wer%20Dank%20mit%20Belohnung%20verwechseln%20kann%2C%20hat%20nur%20die%20letztere%20verdient.&hash=015mklt8',
        currentSentence: 'Wer Dank mit Belohnung verwechseln kann, hat nur die letztere verdient.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Er%20verwechselt%20mich%20immer%20mit%20meiner%20Schwester.&hash=01taduv0',
        currentSentence: 'Er verwechselt mich immer mit meiner Schwester.'
      }
    ]
  },
  {
    verkleiden: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Liisa%20verkleidete%20ihre%20Tochter%20als%20Prinzessin.&hash=01jclmsc',
        currentSentence: 'Liisa verkleidete ihre Tochter als Prinzessin.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Er%20verkleidete%20sich%20als%20Frau.&hash=01hm9okg',
        currentSentence: 'Er verkleidete sich als Frau.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Sie%20war%20als%20Mann%20verkleidet.&hash=01nizgjq',
        currentSentence: 'Sie war als Mann verkleidet.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Er%20entkam%2C%20als%20Polizist%20verkleidet.&hash=00pfvicu',
        currentSentence: 'Er entkam, als Polizist verkleidet.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Tom%20lie%C3%9F%20sich%20einen%20Bart%20wachsen%20und%20versuchte%20sich%20zu%20verkleiden.&hash=00b5cvrg',
        currentSentence: 'Tom ließ sich einen Bart wachsen und versuchte sich zu verkleiden.'
      }
    ]
  },
  {
    nuß: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Du%20kriegst%20gleich%20einen%20auf%20die%20Nuss!&hash=00f94b7p',
        currentSentence: 'Du kriegst gleich einen auf die Nuss!'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Am%20Baum%20der%20Erkenntnis%20h%C3%A4ngen%20keine%20%C3%84pfel%2C%20sondern%20harte%20N%C3%BCsse.&hash=01a3vgae',
        currentSentence: 'Am Baum der Erkenntnis hängen keine Äpfel, sondern harte Nüsse.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Bring%20mal%20die%20N%C3%BCsse%20her!&hash=00qnqaob',
        currentSentence: 'Bring mal die Nüsse her!'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Mit%20seinen%20Knochen%20wollen%20wir%20noch%20N%C3%BCsse%20von%20den%20B%C3%A4umen%20werfen.&hash=00twhn7u',
        currentSentence: 'Mit seinen Knochen wollen wir noch Nüsse von den Bäumen werfen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=N%C3%BCsse%20sind%20vorhanden%2C%20aber%20keine%20Z%C3%A4hne%2C%20Z%C3%A4hne%20sind%20vorhanden%2C%20aber%20keine%20N%C3%BCsse.&hash=01fl06wq',
        currentSentence: 'Nüsse sind vorhanden, aber keine Zähne, Zähne sind vorhanden, aber keine Nüsse.'
      }
    ]
  },
  {
    Action: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Tai-Chi%20ist%20mir%20zu%20langweilig.%20Ich%20brauche%20mehr%20Action.&hash=00eh9dwt',
        currentSentence: 'Tai-Chi ist mir zu langweilig. Ich brauche mehr Action.'
      }
    ]
  },
  {
    verkünden: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Die%20Polizei%20verk%C3%BCndete%20das%20Ende%20s%C3%A4mtlicher%20Ermittlungen.&hash=00sea8c9',
        currentSentence: 'Die Polizei verkündete das Ende sämtlicher Ermittlungen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Es%20wurde%20verk%C3%BCndet%2C%20dass%20ich%20schuldig%20bin.&hash=00drkmjr',
        currentSentence: 'Es wurde verkündet, dass ich schuldig bin.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Maria%20verk%C3%BCndete%20Oliver%2C%20dass%20er%20bald%20einen%20neuen%20Bruder%20haben%20werde.&hash=01y4rypb',
        currentSentence: 'Maria verkündete Oliver, dass er bald einen neuen Bruder haben werde.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Maria%20verk%C3%BCndete%20Oliver%2C%20dass%20er%20bald%20eine%20neue%20Schwester%20h%C3%A4tte.&hash=00w5rec7',
        currentSentence: 'Maria verkündete Oliver, dass er bald eine neue Schwester hätte.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Zu%20guter%20Letzt%20verk%C3%BCndete%20man%20die%20Namen%20derer%2C%20die%20gesiegt%20hatten.&hash=0171uike',
        currentSentence: 'Zu guter Letzt verkündete man die Namen derer, die gesiegt hatten.'
      }
    ]
  },
  {
    verfassen: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20muss%20einen%20Brief%20verfassen.&hash=014911cw',
        currentSentence: 'Ich muss einen Brief verfassen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wer%20hat%20dieses%20Gedicht%20verfasst%3F&hash=01a8vs5p',
        currentSentence: 'Wer hat dieses Gedicht verfasst?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Dieses%20Gedicht%20wurde%20letzte%20Nacht%20verfasst.&hash=01x79bei',
        currentSentence: 'Dieses Gedicht wurde letzte Nacht verfasst.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20will%20Mails%20verfassen%2C%20doch%20meine%20Augen%20schmerzen.&hash=01vrmw5i',
        currentSentence: 'Ich will Mails verfassen, doch meine Augen schmerzen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Habt%20ihr%20euren%20Bericht%20verfasst%3F&hash=01y86pxh',
        currentSentence: 'Habt ihr euren Bericht verfasst?'
      }
    ]
  },
  {
    lebt: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wer%20Immobilien%20auf%20Kredit%20kauft%2C%20lebt%20gef%C3%A4hrlich.&hash=00sap72w',
        currentSentence: 'Wer Immobilien auf Kredit kauft, lebt gefährlich.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Die%20Ruhe%20t%C3%B6tet%2C%20nur%20wer%20handelt%2C%20lebt.&hash=00dypjtn',
        currentSentence: 'Die Ruhe tötet, nur wer handelt, lebt.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wer%20lange%20lacht%2C%20lebt%20lange!&hash=00hu687e',
        currentSentence: 'Wer lange lacht, lebt lange!'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wer%20r%C3%BCckw%C3%A4rts%20blickt%2C%20gibt%20sich%20verloren%3A%20wer%20lebt%20und%20leben%20will%2C%20muss%20vorw%C3%A4rts%20sehen.&hash=00coew9b',
        currentSentence: 'Wer rückwärts blickt, gibt sich verloren: wer lebt und leben will, muss vorwärts sehen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wisst%20ihr%20zuf%C3%A4llig%2C%20wo%20sie%20lebt%3F&hash=01utet71',
        currentSentence: 'Wisst ihr zufällig, wo sie lebt?'
      }
    ]
  },
  {
    andere: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Andere%20beherrschen%20erfordert%20Kraft.%20Sich%20selbst%20beherrschen%20fordert%20St%C3%A4rke.&hash=015acbrf',
        currentSentence: 'Andere beherrschen erfordert Kraft. Sich selbst beherrschen fordert Stärke.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Manche%20Menschen%20leben%2C%20um%20zu%20essen.%20Andere%20hingegen%20essen%2C%20um%20zu%20leben.&hash=0079tzpz',
        currentSentence: 'Manche Menschen leben, um zu essen. Andere hingegen essen, um zu leben.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Andere%20bedeuteten%20ihm%20mehr%20als%20er%20sich%20selber.&hash=00nth4a7',
        currentSentence: 'Andere bedeuteten ihm mehr als er sich selber.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Hab%20die%20Menschen%20gern%2C%20so%20wie%20sie%20sind.%20Andere%20gibt%20es%20n%C3%A4mlich%20nicht.&hash=003vjezm',
        currentSentence: 'Hab die Menschen gern, so wie sie sind. Andere gibt es nämlich nicht.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Andere%20bekommen%20gleich%20kalte%20F%C3%BC%C3%9Fe%2C%20wenn%20ihnen%20der%20Wind%20einmal%20ins%20Gesicht%20bl%C3%A4st.&hash=01lbmswp',
        currentSentence: 'Andere bekommen gleich kalte Füße, wenn ihnen der Wind einmal ins Gesicht bläst.'
      }
    ]
  },
  {
    beauftragen: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Er%20wurde%20mit%20einer%20streng%20geheimen%20Mission%20beauftragt.&hash=012qaqcb',
        currentSentence: 'Er wurde mit einer streng geheimen Mission beauftragt.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20bin%20mit%20einer%20wichtigen%20Mission%20beauftragt.&hash=01eebghb',
        currentSentence: 'Ich bin mit einer wichtigen Mission beauftragt.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Tom%20beauftragte%20mich%2C%20eine%20Geschichte%20f%C3%BCr%20ihn%20zu%20schreiben.&hash=01r6pipg',
        currentSentence: 'Tom beauftragte mich, eine Geschichte für ihn zu schreiben.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Der%20Minister%20hat%20mich%20beauftragt%2C%20diese%20Angelegenheit%20zu%20%C3%BCberpr%C3%BCfen.&hash=014bgnjs',
        currentSentence: 'Der Minister hat mich beauftragt, diese Angelegenheit zu überprüfen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ein%20f%C3%BChrender%20Experte%20wurde%20mit%20der%20Authentifizierung%20des%20Gem%C3%A4ldes%20beauftragt.&hash=00p6hxlc',
        currentSentence: 'Ein führender Experte wurde mit der Authentifizierung des Gemäldes beauftragt.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Tom%20hat%20eine%20Agentur%20mit%20der%20Erstellung%20des%20Werbematerials%20beauftragt.&hash=01tx81ik',
        currentSentence: 'Tom hat eine Agentur mit der Erstellung des Werbematerials beauftragt.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Der%20Beamte%20wurde%20gefeuert%2C%20weil%20er%20sich%20bei%20den%20beauftragten%20Firmen%20anbiederte.&hash=00c6dv09',
        currentSentence: 'Der Beamte wurde gefeuert, weil er sich bei den beauftragten Firmen anbiederte.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Papa%20hat%20die%20Helferin%20nicht%20beauftragt%20unser%20Zimmer%20reinigen%20zu%20lassen.&hash=01py3pko',
        currentSentence: 'Papa hat die Helferin nicht beauftragt unser Zimmer reinigen zu lassen.'
      }
    ]
  },
  {
    Landwirtschaft: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Die%20Wirtschaft%20des%20Landes%20h%C3%A4ngt%20von%20der%20Landwirtschaft%20ab.&hash=013fcbv4',
        currentSentence: 'Die Wirtschaft des Landes hängt von der Landwirtschaft ab.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Er%20arbeitet%20in%20der%20Landwirtschaft.&hash=0007arxb',
        currentSentence: 'Er arbeitet in der Landwirtschaft.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Landwirtschaft%20ist%20schwere%20Arbeit.&hash=00pg868o',
        currentSentence: 'Landwirtschaft ist schwere Arbeit.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Auf%20keinen%20Fall%20habe%20ich%20etwas%20gegen%20die%20Landwirtschaft.&hash=0080l2tp',
        currentSentence: 'Auf keinen Fall habe ich etwas gegen die Landwirtschaft.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Das%20Klima%20hat%20stets%20einen%20Einfluss%20auf%20die%20Entwicklung%20der%20Landwirtschaft.&hash=01ou18qw',
        currentSentence: 'Das Klima hat stets einen Einfluss auf die Entwicklung der Landwirtschaft.'
      }
    ]
  },
  {
    nacheinander: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Die%20Mutter%20rief%20die%20Kinder%20nacheinander%20beim%20Namen%2C%20doch%20keines%20antwortete.&hash=00nfpt7o',
        currentSentence: 'Die Mutter rief die Kinder nacheinander beim Namen, doch keines antwortete.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Tom%20hat%20drei%20Rennen%20nacheinander%20gewonnen.&hash=002zkrho',
        currentSentence: 'Tom hat drei Rennen nacheinander gewonnen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20werde%20euch%20alle%20nacheinander%20anh%C3%B6ren.&hash=00siktt4',
        currentSentence: 'Ich werde euch alle nacheinander anhören.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Die%20Autos%20sind%20dort%20nacheinander%20angekommen.&hash=01k1wm4f',
        currentSentence: 'Die Autos sind dort nacheinander angekommen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Sie%20gingen%20nacheinander%20aus%20dem%20Zimmer.&hash=00m859hc',
        currentSentence: 'Sie gingen nacheinander aus dem Zimmer.'
      }
    ]
  },
  {
    beziehungsweise: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Sagt%20mir%20bitte%2C%20was%20ihr%20davon%20haltet%20beziehungsweise%20was%20ich%20noch%20verbessern%20muss.&hash=0067u9lm',
        currentSentence: 'Sagt mir bitte, was ihr davon haltet beziehungsweise was ich noch verbessern muss.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20habe%20Tom%20gestern%20Nacht%20gesehen%C2%A0%E2%80%93%20beziehungsweise%20sehr%20fr%C3%BCh%20heute%20Morgen.&hash=00trmi96',
        currentSentence: 'Ich habe Tom gestern Nacht gesehen – beziehungsweise sehr früh heute Morgen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wir%20haben%20vor%20beziehungsweise%20hinter%20die%20T%C3%BCr%20einen%20Schrank%20geschoben.&hash=01jnqqtr',
        currentSentence: 'Wir haben vor beziehungsweise hinter die Tür einen Schrank geschoben.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Im%20engeren%20Sinne%20bezeichnet%20Dummheit%20die%20mangelhafte%20F%C3%A4higkeit%2C%20aus%20Wahrnehmungen%20angemessene%20Schl%C3%BCsse%20zu%20ziehen%20beziehungsweise%20zu%20lernen.&hash=00q6xtve',
        currentSentence:
          'Im engeren Sinne bezeichnet Dummheit die mangelhafte Fähigkeit, aus Wahrnehmungen angemessene Schlüsse zu ziehen beziehungsweise zu lernen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Spricht%20man%20%C3%BCberhaupt%20hochdeutsch%20in%20Deutschland%2C%20in%20%C3%96sterreich%20beziehungsweise%20in%20der%20Schweiz%3B%20oder%20nur%20einen%20unverst%C3%A4ndlichen%20Dialekt%3F&hash=00urv098',
        currentSentence:
          'Spricht man überhaupt hochdeutsch in Deutschland, in Österreich beziehungsweise in der Schweiz; oder nur einen unverständlichen Dialekt?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20gehe%20um%20drei%20beziehungsweise%20um%20Viertel%20nach%20drei.&hash=006pq7kp',
        currentSentence: 'Ich gehe um drei beziehungsweise um Viertel nach drei.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wer%20wird%20zum%20Bundeskanzler%20beziehungsweise%20zur%20Bundeskanzlerin%20gew%C3%A4hlt%3F&hash=00g7altl',
        currentSentence: 'Wer wird zum Bundeskanzler beziehungsweise zur Bundeskanzlerin gewählt?'
      }
    ]
  },
  {
    gesellschaftlich: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Maria%20sagte%2C%20sie%20nehme%20einen%20Kerl%20nicht%20wegen%20seiner%20gesellschaftlichen%20Position.&hash=014uf8i6',
        currentSentence: 'Maria sagte, sie nehme einen Kerl nicht wegen seiner gesellschaftlichen Position.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Alles%20gesellschaftliche%20Leben%20ist%20wesentlich%20praktisch.&hash=012xx2tq',
        currentSentence: 'Alles gesellschaftliche Leben ist wesentlich praktisch.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Die%20gesellschaftlichen%20Verh%C3%A4ltnisse%20waren%20damals%20ganz%20anders.&hash=017dpnq5',
        currentSentence: 'Die gesellschaftlichen Verhältnisse waren damals ganz anders.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Je%20h%C3%B6her%20er%20gesellschaftlich%20aufstieg%2C%20umso%20bescheidener%20wurde%20er.&hash=01nd9ugv',
        currentSentence: 'Je höher er gesellschaftlich aufstieg, umso bescheidener wurde er.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Das%20ist%20ein%20sehr%20gro%C3%9Fes%20gesellschaftliches%20Problem.&hash=00vmxicb',
        currentSentence: 'Das ist ein sehr großes gesellschaftliches Problem.'
      }
    ]
  },
  {
    losgehen: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20bin%20fertig!%20K%C3%B6nnen%20wir%20losgehen%3F&hash=018fp5m7',
        currentSentence: 'Ich bin fertig! Können wir losgehen?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Sag%20ihnen%2C%20dass%20sie%20mich%20anrufen%20sollen%2C%20bevor%20sie%20losgehen.&hash=01hhxbz4',
        currentSentence: 'Sag ihnen, dass sie mich anrufen sollen, bevor sie losgehen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wir%20sind%20fertig%20mit%20dem%20Einladen.%20Es%20kann%20losgehen!&hash=01mat3wn',
        currentSentence: 'Wir sind fertig mit dem Einladen. Es kann losgehen!'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Komm!%20Wir%20m%C3%BCssen%20jetzt%20losgehen%2C%20wenn%20wir%20den%20Zug%20bekommen%20wollen.&hash=008oko5r',
        currentSentence: 'Komm! Wir müssen jetzt losgehen, wenn wir den Zug bekommen wollen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Dein%20Schuss%20kann%20nach%20hinten%20losgehen.&hash=00knyi8g',
        currentSentence: 'Dein Schuss kann nach hinten losgehen.'
      }
    ]
  },
  {
    einbringen: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wie%20kann%20ich%20mich%20in%20dieses%20Projekt%20einbringen%3F&hash=00b1ffa9',
        currentSentence: 'Wie kann ich mich in dieses Projekt einbringen?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Das%20sollte%20uns%20genug%20Geld%20einbringen%2C%20um%20wieder%20schwarze%20Zahlen%20zu%20schreiben.&hash=01noyp3p',
        currentSentence: 'Das sollte uns genug Geld einbringen, um wieder schwarze Zahlen zu schreiben.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Seine%20Ideen%20haben%20ihm%20nie%20etwas%20eingebracht.&hash=00pfmufv',
        currentSentence: 'Seine Ideen haben ihm nie etwas eingebracht.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Deine%20Art%20zu%20reden%20wird%20dir%20irgendwann%20noch%20einmal%20%C3%84rger%20einbringen.&hash=013qrjug',
        currentSentence: 'Deine Art zu reden wird dir irgendwann noch einmal Ärger einbringen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Es%20wird%20Ihrer%20Familie%20Schwierigkeiten%20einbringen.&hash=00cb0xy7',
        currentSentence: 'Es wird Ihrer Familie Schwierigkeiten einbringen.'
      }
    ]
  },
  {
    knacken: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Gott%20schenkt%20uns%20die%20N%C3%BCsse%2C%20aber%20er%20knackt%20sie%20uns%20nicht%20auch%20noch.&hash=00t5mkjy',
        currentSentence: 'Gott schenkt uns die Nüsse, aber er knackt sie uns nicht auch noch.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Tom%20wird%20von%20jetzt%20ab%20Autos%20knacken.&hash=002v91mo',
        currentSentence: 'Tom wird von jetzt ab Autos knacken.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Etwas%20Hartes%20kann%20man%20knacken.&hash=010wazpm',
        currentSentence: 'Etwas Hartes kann man knacken.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Hast%20du%20etwas%2C%20womit%20man%20diese%20N%C3%BCsse%20knacken%20kann%3F&hash=001u7wdi',
        currentSentence: 'Hast du etwas, womit man diese Nüsse knacken kann?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Tom%20knackte%20das%20Schloss%20und%20betrat%20das%20Zimmer.&hash=01siinwz',
        currentSentence: 'Tom knackte das Schloss und betrat das Zimmer.'
      }
    ]
  },
  {
    Rettung: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ohne%20Rettung%20war%20ich%20verloren%2C%20Roderich%2C%20w%C3%A4r%E2%80%99%20ich%20in%20eines%20Engels%20H%C3%A4nde%20nicht%20gefallen.&hash=01ee15s8',
        currentSentence: 'Ohne Rettung war ich verloren, Roderich, wär’ ich in eines Engels Hände nicht gefallen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Gibt%20es%20Hoffnung%20auf%20Rettung%3F&hash=0170bbiv',
        currentSentence: 'Gibt es Hoffnung auf Rettung?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Sie%20sind%20offensichtlich%20nicht%20an%20Ihrer%20Rettung%20interessiert.&hash=016d7ldh',
        currentSentence: 'Sie sind offensichtlich nicht an Ihrer Rettung interessiert.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Sie%20war%20unsere%20Rettung%20in%20der%20Not%C2%A0%E2%80%93%20mal%20wieder.&hash=00smk62g',
        currentSentence: 'Sie war unsere Rettung in der Not – mal wieder.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Die%20Rettung%20kam%2C%20gleich%20nachdem%20wir%20angerufen%20hatten.&hash=0160ehdv',
        currentSentence: 'Die Rettung kam, gleich nachdem wir angerufen hatten.'
      }
    ]
  },
  {
    chaotisch: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Tom%20f%C3%BChrt%20ein%20chaotisches%20Leben.&hash=007plj3o',
        currentSentence: 'Tom führt ein chaotisches Leben.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wir%20ziehen%20demn%C3%A4chst%20um%2C%20und%20dementsprechend%20chaotisch%20geht%20es%20bei%20uns%20zu.&hash=00ocwjbe',
        currentSentence: 'Wir ziehen demnächst um, und dementsprechend chaotisch geht es bei uns zu.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Das%20Wetter%20macht%2C%20was%20es%20will%2C%20weil%20es%20dynamisch%20und%20damit%20vom%20Verhalten%20her%20chaotisch%20ist.&hash=01q8033s',
        currentSentence: 'Das Wetter macht, was es will, weil es dynamisch und damit vom Verhalten her chaotisch ist.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wenn%20man%20die%20Graphik%20betrachtet%2C%20wird%20einem%20klar%2C%20dass%20das%20eine%20ziemlich%20chaotische%20Woche%20war.&hash=01n5oq3s',
        currentSentence:
          'Wenn man die Graphik betrachtet, wird einem klar, dass das eine ziemlich chaotische Woche war.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Toms%20chaotische%20Lebensweise%20st%C3%B6rt%20meine%20Ordnungsliebe.&hash=001i9kyo',
        currentSentence: 'Toms chaotische Lebensweise stört meine Ordnungsliebe.'
      }
    ]
  },
  {
    Burg: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Mein%20Haus%20ist%20meine%20Burg.&hash=01ix95dc',
        currentSentence: 'Mein Haus ist meine Burg.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wie%20baut%20man%20mit%20Mitteln%20und%20Methoden%20des%2014.%20Jahrhunderts%20eine%20ganze%20Burg%3F&hash=00rlmbh7',
        currentSentence: 'Wie baut man mit Mitteln und Methoden des 14. Jahrhunderts eine ganze Burg?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Dieser%20Name%20leitet%20sich%20vom%20Namen%20einer%20Burg%20an%20der%20Grenze%20ab.&hash=005g3t03',
        currentSentence: 'Dieser Name leitet sich vom Namen einer Burg an der Grenze ab.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Die%20Burgen%20sind%20erobert.&hash=005uy2na',
        currentSentence: 'Die Burgen sind erobert.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=F%C3%BChlen%20Sie%20sich%20sicher%20in%20Ihrer%20Burg%3F&hash=00cwec0j',
        currentSentence: 'Fühlen Sie sich sicher in Ihrer Burg?'
      }
    ]
  },
  {
    Gestalt: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=In%20der%20H%C3%B6lle%20ist%20der%20Teufel%20eine%20positive%20Gestalt.&hash=00ugigsj',
        currentSentence: 'In der Hölle ist der Teufel eine positive Gestalt.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Die%20Erde%20hat%20die%20Gestalt%20eines%20Balles.&hash=00jqqfde',
        currentSentence: 'Die Erde hat die Gestalt eines Balles.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Versprechen%20und%20Halten%20sind%20zweierlei%20Gestalten.&hash=01gisgap',
        currentSentence: 'Versprechen und Halten sind zweierlei Gestalten.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Im%20Spiegel%20sieht%20man%20die%20Gestalt%2C%20im%20Wein%20das%20Herz.&hash=00frysbw',
        currentSentence: 'Im Spiegel sieht man die Gestalt, im Wein das Herz.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Von%20solchen%20Gestalten%20bin%20ich%20hier%20umgeben.&hash=00c1at3u',
        currentSentence: 'Von solchen Gestalten bin ich hier umgeben.'
      }
    ]
  },
  {
    gewaltig: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Tom%20hat%20oft%20recht%3B%20manchmal%20aber%20irrt%20er%20gewaltig.&hash=00qitk9m',
        currentSentence: 'Tom hat oft recht; manchmal aber irrt er gewaltig.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Der%20Sturm%20richtete%20gewaltige%20Sch%C3%A4den%20an.&hash=0004ynij',
        currentSentence: 'Der Sturm richtete gewaltige Schäden an.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ihm%20ging%20etwas%20gewaltig%20in%20die%20Hose.&hash=018pkoh9',
        currentSentence: 'Ihm ging etwas gewaltig in die Hose.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wer%20glaubt%2C%20dass%20Forschung%20nur%20etwas%20f%C3%BCr%20Wissenschaftler%20ist%2C%20irrt%20sich%20gewaltig.&hash=01yhnvkz',
        currentSentence: 'Wer glaubt, dass Forschung nur etwas für Wissenschaftler ist, irrt sich gewaltig.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ein%20kleiner%20Schritt%20f%C3%BCr%20einen%20Menschen%2C%20aber%20ein%20gewaltiger%20Sprung%20f%C3%BCr%20die%20Menschheit.&hash=00kmuql7',
        currentSentence: 'Ein kleiner Schritt für einen Menschen, aber ein gewaltiger Sprung für die Menschheit.'
      }
    ]
  },
  {
    verlierst: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wenn%20dein%20Kind%20stirbt%2C%20verlierst%20du%20deine%20Zukunft.&hash=01ls7iad',
        currentSentence: 'Wenn dein Kind stirbt, verlierst du deine Zukunft.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wenn%20du%20verlierst%2C%20mach%20dir%20nichts%20daraus!&hash=00qu43uf',
        currentSentence: 'Wenn du verlierst, mach dir nichts daraus!'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Was%20ist%20dann%2C%20wenn%20du%20dein%20Handy%20verlierst%3F&hash=010959b0',
        currentSentence: 'Was ist dann, wenn du dein Handy verlierst?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wenn%20du%20deinen%20gr%C3%B6%C3%9Ften%20Gegner%20verlierst%2C%20verlierst%20du%20auch%20einen%20Teil%20deiner%20selbst.&hash=01uxo0vi',
        currentSentence: 'Wenn du deinen größten Gegner verlierst, verlierst du auch einen Teil deiner selbst.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wenn%20du%20deinen%20Pass%20verlierst%2C%20rufe%20die%20Botschaft%20an.&hash=00wv8vii',
        currentSentence: 'Wenn du deinen Pass verlierst, rufe die Botschaft an.'
      }
    ]
  },
  {
    trägen: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Tr%C3%A4gt%20Tom%20das%20neue%20Hemd%2C%20das%20du%20ihm%20gekauft%20hast%3F&hash=01ju33vt',
        currentSentence: 'Trägt Tom das neue Hemd, das du ihm gekauft hast?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Tr%C3%A4gt%20Tom%20drinnen%20Schuhe%3F&hash=013w4u2w',
        currentSentence: 'Trägt Tom drinnen Schuhe?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Maria%20hat%20lauter%20Sachen%20im%20Schrank%2C%20die%20sie%20niemals%20tr%C3%A4gt.&hash=01dxw741',
        currentSentence: 'Maria hat lauter Sachen im Schrank, die sie niemals trägt.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Tr%C3%A4gt%20Tom%20noch%20immer%20eine%20Brille%3F&hash=012anejn',
        currentSentence: 'Trägt Tom noch immer eine Brille?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Rechts%20hat%20sie%20eine%20h%C3%A4ngende%20Schulter%2C%20wohl%20weil%20sie%20ihre%20schwere%20Tasche%20immer%20in%20der%20rechten%20Hand%20tr%C3%A4gt.&hash=01rapilr',
        currentSentence:
          'Rechts hat sie eine hängende Schulter, wohl weil sie ihre schwere Tasche immer in der rechten Hand trägt.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wer%20nicht%20wei%C3%9F%2C%20dass%20er%20eine%20Maske%20tr%C3%A4gt%2C%20tr%C3%A4gt%20sie%20am%20vollkommensten.&hash=01u5zx47',
        currentSentence: 'Wer nicht weiß, dass er eine Maske trägt, trägt sie am vollkommensten.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Was%20man%20in%20der%20Kindheit%20erlebt%2C%20tr%C3%A4gt%20man%20in%20sich%2C%20wenn%20man%20erwachsen%20wird.&hash=015go4qm',
        currentSentence: 'Was man in der Kindheit erlebt, trägt man in sich, wenn man erwachsen wird.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Das%20Milit%C3%A4r%20ist%20eine%20Pflanze%2C%20die%20man%20sorgf%C3%A4ltig%20pflegen%20muss%2C%20damit%20sie%20keine%20Fr%C3%BCchte%20tr%C3%A4gt.&hash=01ri83pb',
        currentSentence: 'Das Militär ist eine Pflanze, die man sorgfältig pflegen muss, damit sie keine Früchte trägt.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Keiner%2C%20den%20ich%20kenne%2C%20tr%C3%A4gt%20noch%20Krawatte.&hash=01hn0fas',
        currentSentence: 'Keiner, den ich kenne, trägt noch Krawatte.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Immer%2C%20wenn%20ich%20Tom%20sehe%2C%20tr%C3%A4gt%20er%20eine%20Sonnenbrille.&hash=01hta0oz',
        currentSentence: 'Immer, wenn ich Tom sehe, trägt er eine Sonnenbrille.'
      }
    ]
  },
  {
    gelegentlich: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Gelegentlich%20werden%20wir%20auf%20dieses%20Thema%20zur%C3%BCckkommen.&hash=01edut3q',
        currentSentence: 'Gelegentlich werden wir auf dieses Thema zurückkommen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Gelegentlich%20legte%20er%20das%20Buch%20beiseite%20und%20schaute%20aus%20dem%20Fenster.&hash=01lzgmlh',
        currentSentence: 'Gelegentlich legte er das Buch beiseite und schaute aus dem Fenster.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Mach%20dir%20keine%20Sorgen.%20Dies%20passiert%20mir%20gelegentlich%20auch.&hash=017j0w7c',
        currentSentence: 'Mach dir keine Sorgen. Dies passiert mir gelegentlich auch.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Es%20ist%20besser%2C%20gelegentlich%20betrogen%20zu%20werden%2C%20als%20niemandem%20mehr%20zu%20vertrauen.&hash=00d4expo',
        currentSentence: 'Es ist besser, gelegentlich betrogen zu werden, als niemandem mehr zu vertrauen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Benutz%20gelegentlich%20mal%20deinen%20Kopf.&hash=01cfz0cm',
        currentSentence: 'Benutz gelegentlich mal deinen Kopf.'
      }
    ]
  },
  {
    zurückbringen: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Hast%20du%20die%20B%C3%BCcher%20zur%C3%BCckgebracht%3F&hash=01ilellr',
        currentSentence: 'Hast du die Bücher zurückgebracht?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Bis%20zum%2025.%20Januar%20muss%20ich%20die%20B%C3%BCcher%20zur%20Bibliothek%20zur%C3%BCckbringen.&hash=01uusip4',
        currentSentence: 'Bis zum 25. Januar muss ich die Bücher zur Bibliothek zurückbringen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Er%20hat%20uns%20mit%20dem%20Auto%20zur%C3%BCckgebracht.&hash=00e8243k',
        currentSentence: 'Er hat uns mit dem Auto zurückgebracht.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wie%20in%20aller%20Welt%20k%C3%B6nnen%20wir%20unsere%20Jugend%20zur%C3%BCckbringen%3F&hash=01l0t5ek',
        currentSentence: 'Wie in aller Welt können wir unsere Jugend zurückbringen?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Du%20musst%20den%20Ring%20dahin%20zur%C3%BCckbringen%2C%20woher%20er%20gekommen%20ist.&hash=001ggwy7',
        currentSentence: 'Du musst den Ring dahin zurückbringen, woher er gekommen ist.'
      }
    ]
  },
  {
    rausgehen: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Vergiss%20nicht%2C%20beim%20Rausgehen%20das%20Licht%20auszumachen.&hash=00i9i48w',
        currentSentence: 'Vergiss nicht, beim Rausgehen das Licht auszumachen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Die%20T%C3%BCr%20schlie%C3%9Ft%20nach%20dem%20Rausgehen%20automatisch.&hash=0092mbrp',
        currentSentence: 'Die Tür schließt nach dem Rausgehen automatisch.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Zieh%20dir%20vor%20dem%20Rausgehen%20den%20Mantel%20an%3B%20sonst%20erk%C3%A4ltest%20du%20dich.&hash=008aax6y',
        currentSentence: 'Zieh dir vor dem Rausgehen den Mantel an; sonst erkältest du dich.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Tom%20war%20wie%20ausgewechselt.%20Er%20hat%20Maria%20beim%20Rausgehen%20sogar%20die%20T%C3%BCr%20aufgehalten.&hash=01f81khk',
        currentSentence: 'Tom war wie ausgewechselt. Er hat Maria beim Rausgehen sogar die Tür aufgehalten.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Heute%20ist%20das%20Wetter%20gut%20und%20der%20Wind%20ist%20auch%20angenehm%20k%C3%BChl%20-%20der%20perfekte%20Tag%20zum%20Rausgehen.&hash=0057qda7',
        currentSentence:
          'Heute ist das Wetter gut und der Wind ist auch angenehm kühl - der perfekte Tag zum Rausgehen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=M%C3%B6chtest%20du%20kurz%20rausgehen%3F&hash=01thcpi2',
        currentSentence: 'Möchtest du kurz rausgehen?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wohl%20oder%20%C3%BCbel%20muss%20Tom%20rausgehen%2C%20wenn%20sein%20Hund%20Gassi%20gehen%20will.&hash=01j457lj',
        currentSentence: 'Wohl oder übel muss Tom rausgehen, wenn sein Hund Gassi gehen will.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wenn%20du%20rausgehst%2C%20schlie%C3%9Fe%20bitte%20die%20T%C3%BCr.&hash=01y85d67',
        currentSentence: 'Wenn du rausgehst, schließe bitte die Tür.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Mach%20das%20Fenster%20zu%2C%20bevor%20du%20rausgehst.&hash=01lprba4',
        currentSentence: 'Mach das Fenster zu, bevor du rausgehst.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=An%20so%20einem%20kalten%20Tag%20m%C3%B6chte%20ich%20nicht%20ohne%20Jacke%20rausgehen.&hash=00a9734f',
        currentSentence: 'An so einem kalten Tag möchte ich nicht ohne Jacke rausgehen.'
      }
    ]
  },
  {
    Stellung: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Dreimal%20dieselbe%20Stellung%20hei%C3%9Ft%20Remis.&hash=01ylkori',
        currentSentence: 'Dreimal dieselbe Stellung heißt Remis.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Der%20gesellschaftliche%20Fortschritt%20l%C3%A4sst%20sich%20exakt%20messen%20an%20der%20gesellschaftlichen%20Stellung%20des%20sch%C3%B6nen%20Geschlechts.&hash=01gn9lj2',
        currentSentence:
          'Der gesellschaftliche Fortschritt lässt sich exakt messen an der gesellschaftlichen Stellung des schönen Geschlechts.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=F%C3%BChlen%20Sie%20sich%20sicher%20in%20Ihrer%20Stellung%3F&hash=01n8cdvj',
        currentSentence: 'Fühlen Sie sich sicher in Ihrer Stellung?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Es%20ist%20mir%20nicht%20m%C3%B6glich%2C%20zu%20Ihrem%20Buch%20Stellung%20zu%20nehmen.&hash=01ac4huc',
        currentSentence: 'Es ist mir nicht möglich, zu Ihrem Buch Stellung zu nehmen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wie%20ist%20die%20Stellung%20der%20Beine%3F&hash=00gk3c7g',
        currentSentence: 'Wie ist die Stellung der Beine?'
      }
    ]
  },
  {
    Heilung: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Die%20%C3%84rzte%20sagen%2C%20ich%20habe%20gute%20Chancen%20auf%20Heilung.&hash=00v1fnny',
        currentSentence: 'Die Ärzte sagen, ich habe gute Chancen auf Heilung.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Im%20Bade%20liegt%20Heilung.&hash=01fovee7',
        currentSentence: 'Im Bade liegt Heilung.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wie%20sind%20die%20Aussichten%20auf%20Heilung%3F&hash=00iwiw0z',
        currentSentence: 'Wie sind die Aussichten auf Heilung?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wer%20weder%20durch%20Butter%20noch%20Whiskey%20geheilt%20wird%2C%20hat%20keine%20Heilung%20zu%20erwarten.&hash=006naj4p',
        currentSentence: 'Wer weder durch Butter noch Whiskey geheilt wird, hat keine Heilung zu erwarten.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ich%20hoffe%2C%20sie%20haben%20eine%20Heilung%20gefunden.&hash=00xf1pje',
        currentSentence: 'Ich hoffe, sie haben eine Heilung gefunden.'
      }
    ]
  },
  {
    Erdbeben: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=In%20keinem%20anderen%20Land%20kommen%20Erdbeben%20so%20h%C3%A4ufig%20vor%20wie%20in%20Japan.&hash=00kby15w',
        currentSentence: 'In keinem anderen Land kommen Erdbeben so häufig vor wie in Japan.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Ein%20heftiges%20Erdbeben%20geschah%20in%20Tokio.&hash=00x4eqr4',
        currentSentence: 'Ein heftiges Erdbeben geschah in Tokio.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Nichts%20ist%20so%20furchtbar%20wie%20ein%20Erdbeben.&hash=00z03d5e',
        currentSentence: 'Nichts ist so furchtbar wie ein Erdbeben.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Das%20starke%20Erdbeben%20in%20Hokkaido%20verursachte%20gro%C3%9Fen%20Schaden.&hash=017a76f0',
        currentSentence: 'Das starke Erdbeben in Hokkaido verursachte großen Schaden.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Der%20Zeitung%20zufolge%2C%20gab%20es%20in%20Peru%20ein%20Erdbeben.&hash=015zju31',
        currentSentence: 'Der Zeitung zufolge, gab es in Peru ein Erdbeben.'
      }
    ]
  },
  {
    strahlen: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wer%20auf%20sich%20sieht%2C%20strahlt%20nicht%20in%20die%20Welt.&hash=018on8k9',
        currentSentence: 'Wer auf sich sieht, strahlt nicht in die Welt.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Das%20Bild%20strahlte%20eine%20W%C3%A4rme%20aus%2C%20die%20man%20fast%20mit%20H%C3%A4nden%20greifen%20konnte.&hash=00d5mpvr',
        currentSentence: 'Das Bild strahlte eine Wärme aus, die man fast mit Händen greifen konnte.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Mach%20es%20wie%20die%20Sonne%3A%20wenn%20sie%20kommt%2C%20dann%20strahlt%20sie.&hash=00r1rgla',
        currentSentence: 'Mach es wie die Sonne: wenn sie kommt, dann strahlt sie.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Strahlt%20der%20Himmel%20blau%20und%20klar%2C%20wird%20das%20Wetter%20wunderbar.&hash=01e1x6ir',
        currentSentence: 'Strahlt der Himmel blau und klar, wird das Wetter wunderbar.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wenn%20ich%20gl%C3%BCcklich%20bin%2C%20dann%20strahle%20ich%20so%20hell%20wie%20die%20Sonne.&hash=015myb69',
        currentSentence: 'Wenn ich glücklich bin, dann strahle ich so hell wie die Sonne.'
      }
    ]
  },
  {
    Redaktion: [
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Tom%20lieferte%20regelm%C3%A4%C3%9Fig%20Beitr%C3%A4ge%20in%20der%20Redaktion%20ab.&hash=014lv2i7',
        currentSentence: 'Tom lieferte regelmäßig Beiträge in der Redaktion ab.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wo%20befindet%20sich%20die%20Redaktion%20dieser%20Zeitung%3F&hash=00ka9u92',
        currentSentence: 'Wo befindet sich die Redaktion dieser Zeitung?'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wir%20haben%20sie%20zur%20Pr%C3%BCfung%20an%20die%20daf%C3%BCr%20zust%C3%A4ndige%20Redaktion%20weitergeleitet.&hash=00nelfx7',
        currentSentence: 'Wir haben sie zur Prüfung an die dafür zuständige Redaktion weitergeleitet.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Die%20Redaktion%20beh%C3%A4lt%20sich%20das%20Recht%20vor%2C%20Kommentare%20zu%20k%C3%BCrzen.&hash=01jmgfxe',
        currentSentence: 'Die Redaktion behält sich das Recht vor, Kommentare zu kürzen.'
      },
      {
        url: 'https://lb.dioco.io/base_cached_getSentenceTts_3?lang=de&text=Wir%20leiten%20grunds%C3%A4tzlich%20alle%20Ihre%20Nachrichten%20bzw.%20Hinweise%20an%20die%20Redaktion%20weiter.&hash=01op7fk8',
        currentSentence: 'Wir leiten grundsätzlich alle Ihre Nachrichten bzw. Hinweise an die Redaktion weiter.'
      }
    ]
  }
];
export default data;
