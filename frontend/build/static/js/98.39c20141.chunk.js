'use strict';
(self.webpackChunksdk_structure_app =
  self.webpackChunksdk_structure_app || []).push([
  [98],
  {
    4111: (e, t, s) => {
      s.r(t), s.d(t, { default: () => j });
      var o = s(6152),
        r = s(1591),
        c = s(2582),
        n = s(1688),
        a = (s(7418), s(8472)),
        i = s(6691),
        l = s(7077),
        A = s(3192),
        d = s(9432),
        p = s(5360),
        h = s(7728),
        u = s(1753),
        P = s(6863),
        m = s(8552),
        _ = s(3777),
        x = s(579);
      const C = {
          MenuNavBar: [{ text: '', link: '', href: '', icon: '' }],
          MenuSideBarSup: [
            {
              text: 'Plateforme',
              link: '',
              href: 'http://socotec.tridyme.com/dashboard',
              icon: (0, x.jsx)(P.A, {}),
            },
          ],
          MenuSideBarInf: [
            {
              text: 'GitHub',
              link: '',
              href: 'https://github.com/Igor-TriDyme/bolts-app.git',
              icon: 'code',
            },
          ],
          MenuSideBarNotion: [
            {
              text: 'Documentation',
              link: '',
              href: 'https://www.notion.so/tridyme/CB71-RectangularSection-Calcul-de-pannes-et-poutres-en-bois-3da4109cc8194f47aade5d4cbb554273',
              icon: 'code',
            },
          ],
        },
        {
          REACT_APP_LOGO: I,
          REACT_APP_COMPANY: f,
          REACT_APP_APPLICATION_ID: T,
          REACT_APP_PLATFORM_URL: g,
        } = {
          REACT_APP_LOGO: './logo.svg',
          REACT_APP_COMPANY: 'Socotec',
          REACT_APP_APPLICATION_ID: '67588539087737a25386473a',
        },
        j = () => {
          console.log('REACT_APP_APPLICATION_ID', T);
          const e = (0, i.A)('(prefers-color-scheme: dark)'),
            t = (0, o.useMemo)(
              () => (0, l.A)((0, _.A)({ prefersDarkMode: e })),
              [e],
            );
          return (
            (0, o.useEffect)(() => {
              (async () => {
                const e = localStorage.getItem('user');
                console.log('user', e);
                const t = JSON.parse(e);
                console.log('newUser', t);
              })();
            }, []),
            (0, x.jsxs)(A.ThemeProvider, {
              theme: t,
              children: [
                (0, x.jsxs)(r.A, {
                  children: [
                    (0, x.jsx)('title', { children: 'TriDyme | Applications' }),
                    (0, x.jsx)('link', {
                      rel: 'icon',
                      type: 'image/png',
                      href: h.A,
                      sizes: '16x16',
                    }),
                  ],
                }),
                (0, x.jsx)(c.Kd, {
                  history: a.A,
                  children: (0, x.jsx)(d.A, {
                    title: (0, x.jsxs)(p.ListItem, {
                      children: [
                        (0, x.jsx)(p.ListItemAvatar, {
                          children: (0, x.jsx)(p.Avatar, {
                            alt: 'EC2-Ferraillage',
                            src: m.A,
                            style: { borderRadius: '0%' },
                          }),
                        }),
                        (0, x.jsx)(p.ListItemText, {
                          primary: 'EC2- Ferraillage',
                        }),
                      ],
                    }),
                    menu: C,
                    children: (0, x.jsxs)(n.dO, {
                      children: [
                        (0, x.jsx)(n.qh, {
                          exact: !0,
                          path: '/applications/ID'.concat(T),
                          component: u.A,
                        }),
                        (0, x.jsx)(n.qh, {
                          exact: !0,
                          path: '/applications/ID'.concat(
                            T,
                            '/models/:modelId',
                          ),
                          component: u.A,
                        }),
                        (0, x.jsx)(n.rd, {
                          from: '/',
                          to: '/applications/ID'.concat(T),
                          component: u.A,
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            })
          );
        };
    },
  },
]);
//# sourceMappingURL=98.39c20141.chunk.js.map
