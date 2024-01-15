import React from 'react';
import styled from 'styled-components';
import Navbar from '../../components/navbar/Navbar';
import SettingsSidePanel from '../../components/SettingsSidePanel/SettingsSidePanel';
import Footer from '../../components/Footer';

const MainDiv = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const PlaylistH2 = styled.h2`
  text-align: center;
`;

const UsersDiv = styled.div`
  display: flex;
  flex: 1;
`;

const Videos = () => {
  return (
    <>
      <Navbar />
      <UsersDiv>
        <SettingsSidePanel />
        <MainDiv>
          <PlaylistH2>
            Materijali preuzeti sa platforme Microsoft Stream
          </PlaylistH2>
          <a href="https://www.youtube.com/playlist?list=PLtPZX8kHjmdJAFQGNHShiwmGxXgrdrzr2">
            Svi materijali
          </a>
          <div style={{ display: 'flex' }}>
            <p>
              **Na linku iznad se nalaze svi materijali preuzeti sa platforme
              Microsoft Stream. Da bi smo napravili sortirane liste za svaki od
              predmeta, potrebna nam je pomoc. Ako zelis da se prikljucis:
              <a
                as="a"
                href="https://docs.google.com/document/d/1ktu2u97ZVWWkA9iWx_NgcXP7n91FJ2GnkX14wuvooW0/edit?usp=sharing"
                target="_blank"
              >
                ➡️ kontaktiraj nas 📞
              </a>
            </p>
          </div>
          <br />
          {playlists.map((playlist) => (
            <div key={playlist.name}>
              <PlaylistH2>{playlist.name}</PlaylistH2>
              {playlist.subjects.map((subject) => (
                <div key={subject.name}>
                  <h3>{subject.name}</h3>
                  {subject.links.map((link) => (
                    <div key={link.name}>
                      <a href={link.link}>{link.name}</a>
                      <br />
                    </div>
                  ))}

                  <br />
                </div>
              ))}
            </div>
          ))}
        </MainDiv>
      </UsersDiv>
      <Footer />
    </>
  );
};

export default Videos;

const playlists = [
  {
    name: 'YT Playliste 3. Semestar',
    subjects: [
      {
        name: 'Logičko Projektovanje',
        links: [
          {
            name: 'Predavanje',
            link: 'https://www.youtube.com/playlist?list=PLFUwkwonRM-8Y5vgTUunSeQLBYnhl4Fsx',
          },
          {
            name: 'Vezbe',
            link: 'https://www.youtube.com/playlist?list=PLFUwkwonRM-9_lWMp3qo5Olfk2jZ8O4ic',
          },
        ],
      },
      {
        name: 'Digitalna Elektronika',
        links: [
          {
            name: 'Predavanje',
            link: 'https://www.youtube.com/playlist?list=PLFUwkwonRM-_Xs90xbTrhPAoxOwQ3DwwB',
          },
          {
            name: 'Vezbe',
            link: 'https://www.youtube.com/playlist?list=PLFUwkwonRM-8O6J0nBGjmo2bKb1-9CqjL',
          },
        ],
      },
      {
        name: 'Objektno Orijentisano Programiranje',
        links: [
          {
            name: 'Predavanje',
            link: 'https://www.youtube.com/playlist?list=PLFUwkwonRM-_fA9UO-wt-wYG8H592pc5o',
          },
          {
            name: 'Vezbe',
            link: 'https://www.youtube.com/playlist?list=PLFUwkwonRM-9k6e2Z3cQFz-4RDmFe17jD',
          },
        ],
      },
      {
        name: 'Računarski Sistemi',
        links: [
          {
            name: 'Predavanje',
            link: 'https://www.youtube.com/playlist?list=PLFUwkwonRM-8v1hmKfaqLZkhTgZhJPP84',
          },
          {
            name: 'Vezbe',
            link: 'https://www.youtube.com/playlist?list=PLFUwkwonRM-8e9j5K9PjksKwXHGEsJ7ns',
          },
        ],
      },
      {
        name: 'Diskretna Matematika',
        links: [
          {
            name: 'Predavanje',
            link: 'https://www.youtube.com/playlist?list=PLFUwkwonRM-_DPN8rkakRyp9ghe5Zr-jZ',
          },
          {
            name: 'Vezbe',
            link: 'https://www.youtube.com/playlist?list=PLFUwkwonRM-9vXWq2KhxVT92c3cI_7ydi',
          },
        ],
      },
    ],
  },
  {
    name: 'YT Playliste 4. Semestar',
    subjects: [
      {
        name: 'Baze Podataka',
        links: [
          {
            name: 'Predavanje',
            link: 'https://www.youtube.com/playlist?list=PLFUwkwonRM--NYmKVGARiKFyLwYwyFQ_N',
          },
          {
            name: 'Vezbe',
            link: 'https://www.youtube.com/playlist?list=PLFUwkwonRM-8J4cz2R9PYxv4cDBKqM4r9',
          },
        ],
      },
      {
        name: 'Strukture Podataka',
        links: [
          {
            name: 'Predavanje',
            link: 'https://www.youtube.com/playlist?list=PLFUwkwonRM--QaHYxv6KFA4UYVWWkkMg4',
          },
          {
            name: 'Vezbe',
            link: 'https://www.youtube.com/playlist?list=PLFUwkwonRM-82scPbPxuONEiD9vmwqz09',
          },
          {
            name: 'Goole drive',
            link: 'https://drive.google.com/file/d/1L4GtJsRSLpiUD6kLe2FcdmSH9NmKu1QM',
          },
        ],
      },
      {
        name: 'Arhitektura i Organizacija Racunara',
        links: [
          {
            name: 'Predavanje',
            link: 'https://www.youtube.com/playlist?list=PLFUwkwonRM-8nVkIkUIkN2w0M_sZAwlM_',
          },
          {
            name: 'Vezbe',
            link: 'https://www.youtube.com/playlist?list=PLFUwkwonRM-_q_f2hcyTy2xV29dAOfX2J',
          },
        ],
      },
      {
        name: 'Programski Jezici',
        links: [
          {
            name: 'Predavanje',
            link: 'https://www.youtube.com/playlist?list=PLFUwkwonRM--aAQSWd_BjDKAwQDdg2WDv',
          },
          {
            name: 'Vezbe1',
            link: 'https://www.youtube.com/playlist?list=PLXM7vWCYZbTa8ldmat548bZ-u9ZNMJMQT',
          },
          {
            name: 'Vezbe2',
            link: 'https://www.youtube.com/playlist?list=PLFUwkwonRM--gjbTwQO8l-7XWcsd17Iln',
          },
        ],
      },
      {
        name: 'Teorija Grafova',
        links: [
          {
            name: 'Predavanje',
            link: 'https://www.youtube.com/playlist?list=PLFUwkwonRM--MYz15AEih-yWjZPUu-BHc',
          },
          {
            name: 'Vezbe',
            link: 'https://www.youtube.com/playlist?list=PLFUwkwonRM-9YFhyZjatI9BbSnp6NbBQN',
          },
        ],
      },
      {
        name: 'Statistika i Verovatnoca',
        links: [
          {
            name: 'Predavanje',
            link: 'https://www.youtube.com/playlist?list=PL22G7CrTbN_CBgfpF8s1IKgHY31o_cD0Y',
          },
          {
            name: 'Vezbe',
            link: 'https://www.youtube.com/playlist?list=PL22G7CrTbN_Alfldz9EXFsbFxyCGFJ1yr',
          },
        ],
      },
    ],
  },
  {
    name: 'YT Playliste 5. Semestar',
    subjects: [
      {
        name: 'Objektno Orijentisano Projektovanje',
        links: [
          {
            name: 'Predavanje',
            link: 'https://www.youtube.com/playlist?list=PLFUwkwonRM-_4B_DSmm58CE2iWcFo-WmE',
          },
          {
            name: 'Vezbe',
            link: 'https://www.youtube.com/playlist?list=PLFUwkwonRM-9oMnXJRH1GN515SKYsNGd4',
          },
        ],
      },
      {
        name: 'Računarske Mreže',
        links: [
          {
            name: 'Predavanje',
            link: 'https://www.youtube.com/playlist?list=PLFUwkwonRM-__4YwUGH29oRlvMg1UmQkU',
          },
          {
            name: 'Vezbe',
            link: 'https://www.youtube.com/playlist?list=PLFUwkwonRM--Z_jJtGprHrU7XZMbJ7K_X',
          },
        ],
      },
      {
        name: 'Operativni Sistemi',
        links: [
          {
            name: 'Vezbe',
            link: 'https://www.youtube.com/playlist?list=PLFUwkwonRM-9jjPYHufsXSykY7_Kj59cU',
          },
          {
            name: 'Lab',
            link: 'https://www.youtube.com/playlist?list=PL22G7CrTbN_DZ7gj7nRjxBW1GTdK46pNO',
          },
        ],
      },
      {
        name: 'Web Programiranje',
        links: [
          {
            name: 'Predavanje',
            link: 'https://www.youtube.com/playlist?list=PLFUwkwonRM--2Fgm_wxN1Ee6_ZIYiQoNc',
          },
          {
            name: 'Vezbe',
            link: 'https://www.youtube.com/playlist?list=PLFUwkwonRM-8--58T6Br9-4OobKKJ1iBF',
          },
        ],
      },
      {
        name: 'Engleski Jezik 1',
        links: [
          {
            name: 'Predavanje',
            link: 'https://www.youtube.com/playlist?list=PLFUwkwonRM-9JNk4LTrNZyZGq3ifOC5FO',
          },
        ],
      },
      {
        name: 'Teorija Igara',
        links: [
          {
            name: 'Vezbe',
            link: 'https://www.youtube.com/playlist?list=PLFUwkwonRM-_k2U5gSCWXRCU0mpjPkAQN',
          },
        ],
      },
    ],
  },
  {
    name: 'YT Playliste 6. Semestar',
    subjects: [
      {
        name: 'Softversko Inženjerstvo',
        links: [
          {
            name: 'Predavanje',
            link: 'https://www.youtube.com/playlist?list=PLv3M2rNIbPTacuvrv96rxpxom09_1RzHo',
          },
          {
            name: 'Vezbe',
            link: 'https://www.youtube.com/playlist?list=PLv3M2rNIbPTbzcPOzlbBfX0y341vMg90A',
          },
          {
            name: 'Lab',
            link: 'https://www.youtube.com/playlist?list=PLv3M2rNIbPTb_OkHO5DPIaRgaknKmLYAe',
          },
        ],
      },
      {
        name: 'Distribuirani Sistemi',
        links: [
          {
            name: 'Predavanje',
            link: 'https://www.youtube.com/playlist?list=PLv3M2rNIbPTbDNES8E5n5oBYTET4WrhYT',
          },
          {
            name: 'Vezbe',
            link: 'https://www.youtube.com/playlist?list=PLv3M2rNIbPTZSRqDd0iUI9MOIPdIu_n2S',
          },
        ],
      },
      {
        name: 'Informacioni Sistemi',
        links: [
          {
            name: 'Vezbe',
            link: 'https://www.youtube.com/playlist?list=PLv3M2rNIbPTbbI2TdDcTqEuDXnKCULVKB',
          },
        ],
      },
      {
        name: 'Mikroračunarski Sistemi',
        links: [
          {
            name: 'Predavanje',
            link: 'https://www.youtube.com/playlist?list=PLv3M2rNIbPTZln5d0ZILpZlnv37_etv6P',
          },
          {
            name: 'Vezbe',
            link: 'https://www.youtube.com/playlist?list=PLv3M2rNIbPTY5lbkqWYGkb2EacVhMLafF',
          },
        ],
      },
      {
        name: 'Engleski Jezik 2',
        links: [
          {
            name: 'Predavanje',
            link: 'https://www.youtube.com/playlist?list=PLv3M2rNIbPTaXLquevMWzDhQ8EQ6SjxAi',
          },
        ],
      },
      {
        name: 'Razvoj Web Aplikacija',
        links: [
          {
            name: 'Predavanje',
            link: 'https://www.youtube.com/playlist?list=PLyfnKiJ2ShR4OZNvnr2qu7qepwbDnDp-t',
          },
        ],
      },
      {
        name: 'Sistemi Baza Podataka',
        links: [
          {
            name: 'Predavanje',
            link: 'https://www.youtube.com/watch?v=8bt7f_GPsrw&list=PLv3M2rNIbPTYnVxERYaf8OiBcj9l3tkWz',
          },
          {
            name: 'Vezbe',
            link: 'https://www.youtube.com/playlist?list=PLv3M2rNIbPTY5lbkqWYGkb2EacVhMLafF',
          },
        ],
      },
    ],
  },
  {
    name: 'YT Playliste 7. Semestar',
    subjects: [
      {
        name: 'Veštačka Inteligencija: Školska 2021/22',
        links: [
          {
            name: 'Predavanje',
            link: 'https://www.youtube.com/watch?v=cGpvw7A8k5Y&list=PLWLPHZCdUNsP_TXcHLrgd0jiaeW090tAk',
          },
          {
            name: 'Vezbe',
            link: 'https://www.youtube.com/watch?v=BfG7eoE6Mww&list=PLWLPHZCdUNsNulbWQdfIwOperY6ra7iu2',
          },
        ],
      },
      {
        name: 'Veštačka Inteligencija: Školska 2020/21',
        links: [
          {
            name: 'Predavanje',
            link: 'https://www.youtube.com/watch?v=55moOz1m5t0&list=PLWLPHZCdUNsOD9kmx0tyrYuLRC2ua-cvN',
          },
        ],
      },
      {
        name: 'Računarska Grafika: Školska 2021/22',
        links: [
          {
            name: 'Predavanje',
            link: 'https://www.youtube.com/watch?v=ntA1Wga6Xqc&list=PLWLPHZCdUNsPSfjP04QoIkr74qBY2QhcR',
          },
          {
            name: 'Vezbe',
            link: 'https://www.youtube.com/watch?v=xGgDt_fS55A&list=PLWLPHZCdUNsOh4telXXzBG_KMSikT_MTm',
          },
        ],
      },
      {
        name: 'Računarska Grafika: Školska 2020/21',
        links: [
          {
            name: 'Predavanje',
            link: 'https://www.youtube.com/watch?v=HukaUrD-I4I&list=PLWLPHZCdUNsPMOdXOb2jOYud7aZSD3oeG',
          },
          {
            name: 'Vezbe',
            link: 'https://www.youtube.com/watch?v=BlSjdPOeVNA&list=PLWLPHZCdUNsNesx4ldsmYL-AvikaBsfDk',
          },
        ],
      },
      {
        name: 'Programski Prevodioci: Školska 2021/22',
        links: [
          {
            name: 'Predavanje',
            link: 'https://www.youtube.com/watch?v=_RZfr6RuFio&list=PLWLPHZCdUNsPVdX83FJmMbf8W1vNcFmPe',
          },
          {
            name: 'Vezbe',
            link: 'https://www.youtube.com/watch?v=HmW5lCkzY6Y&list=PLWLPHZCdUNsM8Gn2KUOtZV61mQSsNSTML',
          },
        ],
      },
    ],
  },
  {
    name: '-----Izborni Predmeti-----',
    subjects: [
      {
        name: 'Projektovanje Računarskih Mreža: Školska 2021/22',
        links: [
          {
            name: 'Predavanje',
            link: 'https://www.youtube.com/watch?v=Cs0ffNaj0f4&list=PLWLPHZCdUNsMZY097_6cGaoxp8EK7Ivw7',
          },
          {
            name: 'Vezbe',
            link: 'https://www.youtube.com/watch?v=2ncAaCBD-gs&list=PLWLPHZCdUNsN_HDyhcLhO9QombAC0FpXp',
          },
        ],
      },
      {
        name: 'Zaštita Informacija Školska 2021/22',
        links: [
          {
            name: 'Predavanje',
            link: 'https://www.youtube.com/watch?v=CEHoJUkcb_w&list=PLWLPHZCdUNsOvcxCqAQkJPYF38P1aIHKd',
          },
          {
            name: 'Vezbe',
            link: 'https://www.youtube.com/watch?v=F_ihbCgb5i8&list=PLWLPHZCdUNsOUsnwFjV6gg_81IsGXQl12',
          },
        ],
      },
      {
        name: 'Zaštita Informacija Školska 2020/21',
        links: [
          {
            name: 'Predavanje',
            link: 'https://www.youtube.com/watch?v=0VAqQHRkq1E&list=PLWLPHZCdUNsM7OubQukbcXrG1hRQtoXBH',
          },
          {
            name: 'Vezbe',
            link: 'https://www.youtube.com/watch?v=VArgqLd6QQs&list=PLWLPHZCdUNsOZvg6esDaqKqrBBd4jlrov',
          },
        ],
      },
      {
        name: 'Napredne Baze Podataka: Školska 2021/22',
        links: [
          {
            name: 'Predavanje',
            link: 'https://www.youtube.com/watch?v=1strSWO0q0c&list=PLWLPHZCdUNsM6typP_eWIviyyN14BCotR',
          },
          {
            name: 'Vezbe',
            link: 'https://www.youtube.com/watch?v=kVAKmipsoBg&list=PLWLPHZCdUNsNQF9Huvl6DoRfR1px9svXr',
          },
        ],
      },
      {
        name: 'Napredne Baze Podataka: Školska 2020/21',
        links: [
          {
            name: 'Vezbe',
            link: 'https://www.youtube.com/watch?v=4VtrqiQBBKQ&list=PLWLPHZCdUNsOxAxWTzyRcxBkDxYbdRVDz',
          },
        ],
      },
      {
        name: 'Arhitektura i Projektovanje Softvera: Školska 2020/21',
        links: [
          {
            name: 'Predavanje',
            link: 'https://www.youtube.com/watch?v=6MT1mg6LuF4&list=PLWLPHZCdUNsPKC7BxdNh2iHVc-_tmXwe2',
          },
          {
            name: 'Vezbe',
            link: 'https://www.youtube.com/watch?v=BEPGhU1MT3c&list=PLWLPHZCdUNsOpWf9w_rWrpQJeWyWiheux',
          },
        ],
      },
      {
        name: 'Tehnologije za Podršku Učenju: Školska 2021/22',
        links: [
          {
            name: 'Predavanje',
            link: 'https://www.youtube.com/watch?v=sPvvJpVaJmo&list=PLWLPHZCdUNsOeUIaK9e5uhkJDshRJsTat',
          },
        ],
      },
    ],
  },
];
