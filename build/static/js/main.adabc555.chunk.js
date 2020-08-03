(this["webpackJsonpmy-app"] = this["webpackJsonpmy-app"] || []).push([
  [0],
  [
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, a) {
      e.exports = {
        logbookHeader: "LogbookHeader_logbookHeader__1jWX8",
        divAdd: "LogbookHeader_divAdd__1Ew60",
        addBtn: "LogbookHeader_addBtn__20AeG",
        search: "LogbookHeader_search__3dUWF",
        count: "LogbookHeader_count__bhutL",
        sort: "LogbookHeader_sort__3Ujk5",
        sortBtn: "LogbookHeader_sortBtn__eDlKV",
        arrowDown: "LogbookHeader_arrowDown__1ZyI3",
      };
    },
    ,
    ,
    function (e, t, a) {
      e.exports = {
        job: "Item_job__22GEe",
        jobName: "Item_jobName__cxa84",
        jobPrice: "Item_jobPrice__2lcb0",
        jobMileage: "Item_jobMileage__3ZAeF",
        btnDes: "Item_btnDes__1c4tr",
        description: "Item_description__19-CW",
        close: "Item_close__3n_gf",
      };
    },
    ,
    function (e, t, a) {
      e.exports = {
        addJob: "NewItem_addJob__2eFMq",
        formAddJob: "NewItem_formAddJob__ZiGwB",
        errorInput: "NewItem_errorInput__2cnXS",
        validInput: "NewItem_validInput__16nFN",
      };
    },
    ,
    ,
    function (e, t, a) {
      e.exports = {
        jobParam: "JobParam_jobParam__2RN74",
        jobParamName: "JobParam_jobParamName__3KQwU",
        jobParamItem: "JobParam_jobParamItem__1iUTu",
      };
    },
    ,
    ,
    ,
    function (e, t, a) {
      e.exports = {
        item: "NavItem_item__3c6dk",
        activeLink: "NavItem_activeLink__2tq-_",
      };
    },
    ,
    ,
    function (e, t, a) {
      e.exports = {
        footer: "Footer_footer__2Nk5g",
        footerTitle: "Footer_footerTitle__pJ--R",
      };
    },
    function (e, t, a) {
      e.exports = {
        addJob: "Form_addJob__Az3du",
        formAddJob: "Form_formAddJob__RvPez",
        errorInput: "Form_errorInput__1dq7X",
        validInput: "Form_validInput__29MiH",
      };
    },
    ,
    ,
    ,
    function (e, t, a) {
      e.exports = { header: "Header_header__35KdL" };
    },
    function (e, t, a) {
      e.exports = { nav: "Nav_nav__8ymvs" };
    },
    ,
    function (e, t, a) {
      e.exports = { logo: "Logo_logo__1XBVG" };
    },
    function (e, t, a) {
      e.exports = { home: "Home_home__3VxIB" };
    },
    function (e, t, a) {
      e.exports = { logbook: "Logbook_logbook__NXDl9" };
    },
    function (e, t, a) {
      e.exports = a(43);
    },
    ,
    ,
    ,
    ,
    function (e, t, a) {},
    ,
    ,
    ,
    ,
    ,
    function (e, t, a) {
      "use strict";
      a.r(t);
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      var n = a(25),
        r = a(0),
        o = a.n(r),
        c = (a(37), a(26)),
        l = a.n(c),
        m = a(27),
        i = a.n(m),
        u = a(18),
        s = a.n(u),
        d = a(7),
        b = function (e) {
          return o.a.createElement(
            "div",
            { className: s.a.item },
            o.a.createElement(
              d.c,
              { to: e.path, activeClassName: s.a.activeLink },
              e.name
            )
          );
        },
        _ = function () {
          return o.a.createElement(
            "nav",
            { className: i.a.nav },
            o.a.createElement(b, {
              path: "/home",
              name: "\u0413\u043b\u0430\u0432\u043d\u0430\u044f",
            }),
            o.a.createElement(b, { path: "/bmw-e46", name: "BMW e46" })
          );
        },
        p = a(29),
        f = a.n(p),
        E = function () {
          return o.a.createElement(
            "div",
            { className: f.a.logo },
            o.a.createElement(
              d.c,
              { to: "/home" },
              "\u0411\u043e\u0440\u0442\u0436\u0443\u0440\u043d\u0430\u043b"
            )
          );
        },
        v = function () {
          return o.a.createElement(
            "header",
            { className: l.a.header },
            o.a.createElement(
              "div",
              { className: "container" },
              o.a.createElement(E, null),
              o.a.createElement(_, null)
            )
          );
        },
        N = a(30),
        g = a.n(N),
        h = function () {
          return o.a.createElement(
            "div",
            { className: g.a.home },
            o.a.createElement(
              "p",
              null,
              "\u0412\u0441\u044f \u0438\u0441\u0442\u043e\u0440\u0438\u044f \u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u044f \u0412\u0430\u0448\u0435\u0433\u043e \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044f \u0432 \u043e\u0434\u043d\u043e\u043c \u043c\u0435\u0441\u0442\u0435"
            )
          );
        },
        j = a(21),
        I = a.n(j),
        k = function () {
          return o.a.createElement(
            "div",
            { className: I.a.footer },
            o.a.createElement(
              "div",
              { className: "container" },
              o.a.createElement(
                "p",
                { className: I.a.footerTitle },
                "\u0411\u043e\u0440\u0442\u0436\u0443\u0440\u043d\u0430\u043b 2020"
              )
            )
          );
        },
        w = a(1),
        O = a(16),
        x = a(8),
        P = a(11),
        J = a.n(P),
        y = Object(r.createContext)({}),
        H = function () {
          return Object(r.useContext)(y);
        },
        L = function (e) {
          var t = e.children,
            a = Object(r.useState)([]),
            n = Object(x.a)(a, 2),
            c = n[0],
            l = n[1],
            m = Object(r.useState)(""),
            i = Object(x.a)(m, 2),
            u = i[0],
            s = i[1],
            d = Object(r.useState)(""),
            b = Object(x.a)(d, 2),
            _ = b[0],
            p = b[1],
            f = Object(r.useState)(""),
            E = Object(x.a)(f, 2),
            v = E[0],
            N = E[1],
            g = Object(r.useState)(""),
            h = Object(x.a)(g, 2),
            j = h[0],
            I = h[1],
            k = Object(r.useState)(""),
            w = Object(x.a)(k, 2),
            P = w[0],
            H = w[1],
            L = function (e, t, a, n) {
              l(function (r) {
                return [
                  {
                    id: Math.random().toString(36).substr(2, 9),
                    name: e,
                    price: t,
                    mileage: a,
                    description: n,
                  },
                ].concat(Object(O.a)(r));
              });
            },
            B = {
              logbook: c,
              deleteItem: function (e) {
                l(function (t) {
                  return t.filter(function (t) {
                    return t.id !== e;
                  });
                });
              },
              sortPrice: function () {
                l(function (e) {
                  return Object(O.a)(e).sort(function (e, t) {
                    return e.price > t.price ? 1 : -1;
                  });
                });
              },
              filter: u,
              keydownHandler: function (e) {
                s(e.target.value.toLowerCase());
              },
              addItem: L,
              validForm: function (e) {
                e.preventDefault(),
                  [].forEach.call(e.target.elements, function (e) {
                    e.value || (e.className = "".concat(J.a.errorInput));
                  }),
                  _.trim() &&
                    v &&
                    j &&
                    P.trim() &&
                    (L(_, v, j, P),
                    p(""),
                    N(""),
                    I(""),
                    H(""),
                    (window.location.hash = "/bmw-e46"));
              },
              validInput: function (e) {
                e.target.value.trim().length < 1
                  ? (e.target.className = "".concat(J.a.errorInput))
                  : (e.target.className = "".concat(J.a.validInput));
              },
              sortName: function () {
                l(function (e) {
                  return Object(O.a)(e).sort(function (e, t) {
                    return e.name > t.name ? 1 : -1;
                  });
                });
              },
              name: _,
              setName: p,
              price: v,
              setPrice: N,
              mileage: j,
              setMileage: I,
              description: P,
              setDescription: H,
            };
          return (
            Object(r.useEffect)(function () {
              var e = localStorage.getItem("logbook") || [];
              l(function () {
                return JSON.parse(e);
              });
            }, []),
            Object(r.useEffect)(
              function () {
                localStorage.setItem("logbook", JSON.stringify(c));
              },
              [c]
            ),
            o.a.createElement(y.Provider, { value: B }, t)
          );
        },
        B = a(31),
        S = a.n(B),
        C = a(9),
        D = a.n(C),
        F = function (e) {
          var t = e.name,
            a = e.price,
            n = e.id,
            c = e.mileage,
            l = e.description,
            m = H().deleteItem,
            i = Object(r.useState)(!1),
            u = Object(x.a)(i, 2),
            s = u[0],
            d = u[1];
          return o.a.createElement(
            "div",
            null,
            o.a.createElement(
              "div",
              { className: D.a.job },
              o.a.createElement("div", { className: D.a.jobName }, t),
              o.a.createElement("div", { className: D.a.jobPrice }, a),
              o.a.createElement("div", { className: D.a.jobMileage }, c),
              o.a.createElement("button", {
                className: D.a.close,
                onClick: function () {
                  return m(n);
                },
              }),
              o.a.createElement(
                "button",
                {
                  className: D.a.btnDes,
                  onClick: function () {
                    return d(function (e) {
                      return !e;
                    });
                  },
                },
                s
                  ? "\u0421\u043a\u0440\u044b\u0442\u044c"
                  : "\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"
              )
            ),
            s && o.a.createElement("div", { className: D.a.description }, l)
          );
        },
        A = a(6),
        M = a.n(A),
        W = a(14),
        X = a.n(W),
        G = function () {
          return o.a.createElement(
            "div",
            { className: X.a.jobParam },
            o.a.createElement(
              "div",
              { className: X.a.jobParamName },
              "\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"
            ),
            o.a.createElement(
              "div",
              { className: X.a.jobParamItem },
              "\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c (BYN)"
            ),
            o.a.createElement(
              "div",
              { className: X.a.jobParamItem },
              "\u041f\u0440\u043e\u0431\u0435\u0433 (\u043a\u043c)"
            )
          );
        },
        T = function () {
          var e = H(),
            t = e.logbook,
            a = e.sortName,
            n = e.sortPrice,
            r = e.keydownHandler;
          return o.a.createElement(
            "div",
            null,
            o.a.createElement(
              "div",
              { className: M.a.logbookHeader },
              o.a.createElement(
                "div",
                { className: M.a.divAdd },
                o.a.createElement(
                  d.c,
                  { className: M.a.addBtn, to: "/new-job" },
                  "\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u0432 \u0431\u043e\u0440\u0442\u0436\u0443\u0440\u043d\u0430\u043b"
                )
              ),
              o.a.createElement("input", {
                className: M.a.search,
                placeholder: "\u041f\u043e\u0438\u0441\u043a",
                type: "text",
                onInput: r,
              }),
              o.a.createElement(
                "p",
                { className: M.a.count },
                "\u0417\u0430\u043f\u0438\u0441\u0435\u0439 \u0432 \u0436\u0443\u0440\u043d\u0430\u043b\u0435: ",
                t.length,
                " "
              ),
              o.a.createElement(
                "div",
                { className: M.a.sort },
                o.a.createElement(
                  "p",
                  null,
                  "\u041e\u0442\u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c:"
                ),
                o.a.createElement(
                  "button",
                  {
                    className: M.a.sortBtn,
                    onClick: function () {
                      return a();
                    },
                  },
                  "\u041f\u043e \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044e ",
                  o.a.createElement("i", { className: M.a.arrowDown })
                ),
                o.a.createElement(
                  "button",
                  {
                    className: M.a.sortBtn,
                    onClick: function () {
                      return n();
                    },
                  },
                  "\u041f\u043e \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u0438 ",
                  o.a.createElement("i", { className: M.a.arrowDown })
                )
              )
            ),
            o.a.createElement(G, null)
          );
        },
        U = function () {
          var e = H(),
            t = e.logbook,
            a = e.filter;
          return o.a.createElement(
            "div",
            { className: "container" },
            o.a.createElement(
              "div",
              { className: S.a.logbook },
              o.a.createElement(T, null),
              t
                .filter(function (e) {
                  return e.name.search(a) >= 0;
                })
                .map(function (e) {
                  var t = e.id,
                    a = e.name,
                    n = e.price,
                    r = e.mileage,
                    c = e.description;
                  return o.a.createElement(F, {
                    key: t,
                    id: t,
                    name: a,
                    price: n,
                    mileage: r,
                    description: c,
                  });
                })
            )
          );
        },
        q = a(22),
        K = a.n(q),
        R = function () {
          var e = H(),
            t = e.validInput,
            a = e.validForm,
            n = e.name,
            r = e.setName,
            c = e.price,
            l = e.setPrice,
            m = e.mileage,
            i = e.setMileage,
            u = e.description,
            s = e.setDescription;
          return o.a.createElement(
            "form",
            { onSubmit: a, className: K.a.formAddJob },
            o.a.createElement(
              "div",
              null,
              o.a.createElement(
                "label",
                null,
                o.a.createElement(
                  "p",
                  null,
                  "\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435:*"
                ),
                o.a.createElement("input", {
                  className: K.a.inputName,
                  type: "text",
                  placeholder:
                    "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435",
                  value: n,
                  onInput: t,
                  onChange: function (e) {
                    r(e.target.value);
                  },
                })
              )
            ),
            o.a.createElement(
              "div",
              null,
              o.a.createElement(
                "label",
                null,
                o.a.createElement(
                  "p",
                  null,
                  "\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c:*"
                ),
                o.a.createElement("input", {
                  type: "number",
                  min: "0",
                  placeholder:
                    "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435",
                  value: c,
                  onInput: t,
                  onChange: function (e) {
                    return l(e.target.value);
                  },
                })
              )
            ),
            o.a.createElement(
              "div",
              null,
              o.a.createElement(
                "label",
                null,
                o.a.createElement(
                  "p",
                  null,
                  "\u041f\u0440\u043e\u0431\u0435\u0433:*"
                ),
                o.a.createElement("input", {
                  type: "number",
                  min: "0",
                  placeholder:
                    "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435",
                  value: m,
                  onInput: t,
                  onChange: function (e) {
                    return i(e.target.value);
                  },
                })
              )
            ),
            o.a.createElement(
              "div",
              null,
              o.a.createElement(
                "label",
                null,
                o.a.createElement(
                  "p",
                  null,
                  "\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435:*"
                ),
                o.a.createElement("textarea", {
                  type: "text",
                  placeholder:
                    "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435",
                  value: u,
                  onInput: t,
                  onChange: function (e) {
                    return s(e.target.value);
                  },
                })
              )
            ),
            o.a.createElement(
              "button",
              { type: "submit" },
              "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u043f\u0438\u0441\u044c"
            )
          );
        },
        V = function () {
          return o.a.createElement(
            "div",
            { className: "container" },
            o.a.createElement(
              "div",
              { className: J.a.addJob },
              o.a.createElement(
                "h2",
                { className: J.a.title },
                "\u041d\u043e\u0432\u0430\u044f \u0437\u0430\u043f\u0438\u0441\u044c : "
              ),
              o.a.createElement(R, null)
            )
          );
        },
        Z = function () {
          return o.a.createElement(
            d.b,
            null,
            o.a.createElement(
              L,
              null,
              o.a.createElement(
                "div",
                { className: "wrapper" },
                o.a.createElement(v, null),
                o.a.createElement(w.b, {
                  exact: !0,
                  path: "/",
                  render: function () {
                    return o.a.createElement(w.a, { to: "/home" });
                  },
                }),
                o.a.createElement(w.b, { path: "/home", component: h }),
                o.a.createElement(w.b, { path: "/bmw-e46", component: U }),
                o.a.createElement(w.b, { path: "/new-job", component: V }),
                o.a.createElement(k, null)
              )
            )
          );
        };
      Object(n.render)(
        o.a.createElement(d.a, null, o.a.createElement(Z, null)),
        document.getElementById("root")
      ),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready
            .then(function (e) {
              e.unregister();
            })
            .catch(function (e) {
              console.error(e.message);
            });
    },
  ],
  [[32, 1, 2]],
]);
//# sourceMappingURL=main.adabc555.chunk.js.map
