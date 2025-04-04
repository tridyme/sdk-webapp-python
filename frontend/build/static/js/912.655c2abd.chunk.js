'use strict';
(self.webpackChunksdk_structure_app =
  self.webpackChunksdk_structure_app || []).push([
  [912],
  {
    1303: (e, o, t) => {
      var n = t(6152),
        r = t(2390),
        i = t.n(r),
        s = t(1591),
        a = t(2582),
        c = t(1688),
        l = (t(7418), t(8472)),
        d = t(6691),
        h = t(7077),
        p = t(3192),
        A = t(9432),
        u = t(5360),
        g = t(7728),
        m = t(1753),
        f = t(6863),
        P = t(8552),
        w = t(3777),
        x = t(579);
      const v = {
          MenuNavBar: [{ text: '', link: '', href: '', icon: '' }],
          MenuSideBarSup: [
            {
              text: 'Plateforme',
              link: '',
              href: 'http://socotec.tridyme.com/dashboard',
              icon: (0, x.jsx)(f.A, {}),
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
          REACT_APP_LOGO: _,
          REACT_APP_COMPANY: C,
          REACT_APP_APPLICATION_ID: k,
          REACT_APP_PLATFORM_URL: I,
        } = {
          REACT_APP_LOGO: './logo.svg',
          REACT_APP_COMPANY: 'Socotec',
          REACT_APP_APPLICATION_ID: '67588539087737a25386473a',
        },
        b = () => {
          console.log('REACT_APP_APPLICATION_ID', k);
          const e = (0, d.A)('(prefers-color-scheme: dark)'),
            o = (0, n.useMemo)(
              () => (0, h.A)((0, w.A)({ prefersDarkMode: e })),
              [e],
            );
          return (
            (0, n.useEffect)(() => {
              (async () => {
                const e = localStorage.getItem('user');
                console.log('user', e);
                const o = JSON.parse(e);
                console.log('newUser', o);
              })();
            }, []),
            (0, x.jsxs)(p.ThemeProvider, {
              theme: o,
              children: [
                (0, x.jsxs)(s.A, {
                  children: [
                    (0, x.jsx)('title', { children: 'TriDyme | Applications' }),
                    (0, x.jsx)('link', {
                      rel: 'icon',
                      type: 'image/png',
                      href: g.A,
                      sizes: '16x16',
                    }),
                  ],
                }),
                (0, x.jsx)(a.Kd, {
                  history: l.A,
                  children: (0, x.jsx)(A.A, {
                    title: (0, x.jsxs)(u.ListItem, {
                      children: [
                        (0, x.jsx)(u.ListItemAvatar, {
                          children: (0, x.jsx)(u.Avatar, {
                            alt: 'EC2-Ferraillage',
                            src: P.A,
                            style: { borderRadius: '0%' },
                          }),
                        }),
                        (0, x.jsx)(u.ListItemText, {
                          primary: 'EC2- Ferraillage',
                        }),
                      ],
                    }),
                    menu: v,
                    children: (0, x.jsxs)(c.dO, {
                      children: [
                        (0, x.jsx)(c.qh, {
                          exact: !0,
                          path: '/applications/ID'.concat(k),
                          component: m.A,
                        }),
                        (0, x.jsx)(c.qh, {
                          exact: !0,
                          path: '/applications/ID'.concat(
                            k,
                            '/models/:modelId',
                          ),
                          component: m.A,
                        }),
                        (0, x.jsx)(c.rd, {
                          from: '/',
                          to: '/applications/ID'.concat(k),
                          component: m.A,
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            })
          );
        },
        j = Boolean(
          'localhost' === window.location.hostname ||
            '[::1]' === window.location.hostname ||
            window.location.hostname.match(
              /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/,
            ),
        );
      function T(e, o) {
        navigator.serviceWorker
          .register(e)
          .then((e) => {
            e.onupdatefound = () => {
              const t = e.installing;
              null != t &&
                (t.onstatechange = () => {
                  'installed' === t.state &&
                    (navigator.serviceWorker.controller
                      ? (console.log(
                          'New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA.',
                        ),
                        o && o.onUpdate && o.onUpdate(e))
                      : (console.log('Content is cached for offline use.'),
                        o && o.onSuccess && o.onSuccess(e)));
                });
            };
          })
          .catch((e) => {
            console.error('Error during service worker registration:', e);
          });
      }
      i().render((0, x.jsx)(b, {}), document.getElementById('root')),
        (function (e) {
          if ('serviceWorker' in navigator) {
            if (
              new URL('.', window.location.href).origin !==
              window.location.origin
            )
              return;
            window.addEventListener('load', () => {
              const o = ''.concat('.', '/service-worker.js');
              j
                ? (!(function (e, o) {
                    fetch(e)
                      .then((t) => {
                        const n = t.headers.get('content-type');
                        404 === t.status ||
                        (null != n && -1 === n.indexOf('javascript'))
                          ? navigator.serviceWorker.ready.then((e) => {
                              e.unregister().then(() => {
                                window.location.reload();
                              });
                            })
                          : T(e, o);
                      })
                      .catch(() => {
                        console.log(
                          'No internet connection found. App is running in offline mode.',
                        );
                      });
                  })(o, e),
                  navigator.serviceWorker.ready.then(() => {
                    console.log(
                      'This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA',
                    );
                  }))
                : T(o, e);
            });
          }
        })();
    },
  },
]);
//# sourceMappingURL=912.655c2abd.chunk.js.map
