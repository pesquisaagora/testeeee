(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[549], {

    7480: function (e, a, t) {
        Promise.resolve().then(t.bind(t, 3234))
    },
    4103: function (e, a, t) {
        "use strict";
        t.d(a, {
            default: function () {
                return n
            }
        });
        var s = t(7437)
            , r = t(9376)
            , l = t(2869)
            , i = t(2660);
        function n() {
            let e = (0,
                r.useRouter)()
                , a = (0,
                    r.usePathname)();
            return "/" === a ? null : (0,
                s.jsx)(l.z, {
                    variant: "ghost",
                    size: "icon",
                    className: "fixed top-4 left-4 z-50",
                    onClick: () => {
                        "/" !== a && e.back()
                    }
                    ,
                    children: (0,
                        s.jsx)(i.Z, {
                            className: "w-6 h-6"
                        })
                })
        }
    },
    1361: function (e, a, t) {
        "use strict";
        t.d(a, {
            RewardsProvider: function () {
                return i
            },
            t: function () {
                return n
            }
        });
        var s = t(7437)
            , r = t(2265);
        let l = (0,
            r.createContext)(void 0);
        function i(e) {
            let { children: a } = e
                , [t, i] = (0,
                    r.useState)(0)
                , [n, d] = (0,
                    r.useState)(0)
                , [c, o] = (0,
                    r.useState)(!1)
                , [m, u] = (0,
                    r.useState)(null)
                , [x, f] = (0,
                    r.useState)(!0)
                , [h, p] = (0,
                    r.useState)(null)
                , g = (0,
                    r.useCallback)(() => {
                        if (!m)
                            return !0;
                        let e = new Date(m)
                            , a = new Date
                            , t = new Date(e);
                        return t.setHours(24, 0, 0, 0),
                            a >= t
                    }
                        , [m])
                , b = (0,
                    r.useCallback)(e => {
                        p(e),
                            localStorage.setItem("kwai-pix-details", JSON.stringify(e))
                        sessionStorage.setItem("userName", S.name);
                    }
                        , [])
                , v = (0,
                    r.useCallback)(() => {
                        if (!m)
                            return null;
                        let e = new Date(m);
                        return e.setHours(24, 0, 0, 0),
                            e
                    }
                        , [m])
                , j = (0,
                    r.useCallback)(e => {
                        i(a => {
                            let t = Math.max(0, a + e);
                            return localStorage.setItem("kwai-balance", t.toString()),
                                t
                        }
                        )
                    }
                        , [])
                , N = (0,
                    r.useCallback)(() => {
                        c || (o(!0),
                            j(50),
                            localStorage.setItem("kwai-initial-bonus", "true"))
                    }
                        , [c, j])
                , w = (0,
                    r.useCallback)(() => {
                        f(!1),
                            localStorage.setItem("kwai-first-visit-complete", "true")
                    }
                        , [])
                , y = (0,
                    r.useCallback)(() => {
                        d(e => {
                            let a = e + 1;
                            if (localStorage.setItem("kwai-questions-completed", a.toString()),
                                a >= 14) {
                                let e = new Date().toISOString();
                                u(e),
                                    localStorage.setItem("kwai-last-completion", e)
                            }
                            return a
                        }
                        )
                    }
                        , [])
                , k = (0,
                    r.useCallback)(() => {
                        g() && (d(0),
                            localStorage.setItem("kwai-questions-completed", "0"),
                            u(null),
                            localStorage.removeItem("kwai-last-completion"))
                    }
                        , [g]);
            return (0,
                r.useEffect)(() => {
                    let e = localStorage.getItem("kwai-balance")
                        , a = localStorage.getItem("kwai-questions-completed")
                        , t = localStorage.getItem("kwai-initial-bonus")
                        , s = localStorage.getItem("kwai-last-completion")
                        , r = localStorage.getItem("kwai-first-visit-complete")
                        , l = localStorage.getItem("kwai-pix-details");
                    e && i(Number(e)),
                        a && d(Number(a)),
                        "true" === t && o(!0),
                        s && u(s),
                        "true" === r && f(!1),
                        l && p(JSON.parse(l)),
                        s && !g() && k()
                }
                    , [g, k]),
                (0,
                    s.jsx)(l.Provider, {
                        value: {
                            balance: t,
                            questionsCompleted: n,
                            totalQuestions: 14,
                            addToBalance: j,
                            markQuestionCompleted: y,
                            isQuestionnaireCompleted: n >= 14,
                            resetQuestionnaire: k,
                            hasInitialBonus: c,
                            setInitialBonus: N,
                            canTakeQuestionnaire: g(),
                            nextQuestionnaireTime: v(),
                            lastCompletionDate: m,
                            isFirstVisit: x,
                            markFirstVisitComplete: w,
                            savedPixDetails: h,
                            savePixDetails: b
                        },
                        children: a
                    })
        }
        function n() {
            let e = (0,
                r.useContext)(l);
            if (void 0 === e)
                throw Error("useRewards must be used within a RewardsProvider");
            return e
        }
    },
    3234: function (e, a, t) {
        "use strict";
        t.r(a),
            t.d(a, {
                default: function () {
                    return q
                }
            });
        var s = t(7437)
            , r = t(6070)
            , l = t(2869)
            , i = t(2265)
            , n = t(4508);
        let d = i.forwardRef((e, a) => {
            let { className: t, type: r, ...l } = e;
            return (0,
                s.jsx)("input", {
                    type: r,
                    className: (0,
                        n.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", t),
                    ref: a,
                    ...l
                })
        }
        );
        d.displayName = "Input";
        var c = t(6394);
        let o = (0,
            t(535).j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70")
            , m = i.forwardRef((e, a) => {
                let { className: t, ...r } = e;
                return (0,
                    s.jsx)(c.f, {
                        ref: a,
                        className: (0,
                            n.cn)(o(), t),
                        ...r
                    })
            }
            );
        m.displayName = c.f.displayName;
        var u = t(8226)
            , x = t(5368)
            , f = t(3245)
            , h = t(9376)
            , p = t(1361)
            , g = t(7648)
            , b = t(7864)
            , v = t(875)
            , j = t(2135)
            , N = t(401);
        let w = b.fC;
        b.ZA;
        let y = b.B4
            , k = i.forwardRef((e, a) => {
                let { className: t, children: r, ...l } = e;
                return (0,
                    s.jsxs)(b.xz, {
                        ref: a,
                        className: (0,
                            n.cn)("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", t),
                        ...l,
                        children: [r, (0,
                            s.jsx)(b.JO, {
                                asChild: !0,
                                children: (0,
                                    s.jsx)(v.Z, {
                                        className: "h-4 w-4 opacity-50"
                                    })
                            })]
                    })
            }
            );
        k.displayName = b.xz.displayName;
        let C = i.forwardRef((e, a) => {
            let { className: t, ...r } = e;
            return (0,
                s.jsx)(b.u_, {
                    ref: a,
                    className: (0,
                        n.cn)("flex cursor-default items-center justify-center py-1", t),
                    ...r,
                    children: (0,
                        s.jsx)(j.Z, {
                            className: "h-4 w-4"
                        })
                })
        }
        );
        C.displayName = b.u_.displayName;
        let S = i.forwardRef((e, a) => {
            let { className: t, ...r } = e;
            return (0,
                s.jsx)(b.$G, {
                    ref: a,
                    className: (0,
                        n.cn)("flex cursor-default items-center justify-center py-1", t),
                    ...r,
                    children: (0,
                        s.jsx)(v.Z, {
                            className: "h-4 w-4"
                        })
                })
        }
        );
        S.displayName = b.$G.displayName;
        let R = i.forwardRef((e, a) => {
            let { className: t, children: r, position: l = "popper", ...i } = e;
            return (0,
                s.jsx)(b.h_, {
                    children: (0,
                        s.jsxs)(b.VY, {
                            ref: a,
                            className: (0,
                                n.cn)("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", "popper" === l && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", t),
                            position: l,
                            ...i,
                            children: [(0,
                                s.jsx)(C, {}), (0,
                                    s.jsx)(b.l_, {
                                        className: (0,
                                            n.cn)("p-1", "popper" === l && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
                                        children: r
                                    }), (0,
                                        s.jsx)(S, {})]
                        })
                })
        }
        );
        R.displayName = b.VY.displayName,
            i.forwardRef((e, a) => {
                let { className: t, ...r } = e;
                return (0,
                    s.jsx)(b.__, {
                        ref: a,
                        className: (0,
                            n.cn)("py-1.5 pl-8 pr-2 text-sm font-semibold", t),
                        ...r
                    })
            }
            ).displayName = b.__.displayName;
        let I = i.forwardRef((e, a) => {
            let { className: t, children: r, ...l } = e;
            return (0,
                s.jsxs)(b.ck, {
                    ref: a,
                    className: (0,
                        n.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", t),
                    ...l,
                    children: [(0,
                        s.jsx)("span", {
                            className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                            children: (0,
                                s.jsx)(b.wU, {
                                    children: (0,
                                        s.jsx)(N.Z, {
                                            className: "h-4 w-4"
                                        })
                                })
                        }), (0,
                            s.jsx)(b.eT, {
                                children: r
                            })]
                })
        }
        );
        I.displayName = b.ck.displayName,
            i.forwardRef((e, a) => {
                let { className: t, ...r } = e;
                return (0,
                    s.jsx)(b.Z0, {
                        ref: a,
                        className: (0,
                            n.cn)("-mx-1 my-1 h-px bg-muted", t),
                        ...r
                    })
            }
            ).displayName = b.Z0.displayName;
        var z = t(4103);
        function q() {
            let e = (0,
                h.useRouter)()
                , { balance: a, isQuestionnaireCompleted: t, canTakeQuestionnaire: n, savedPixDetails: c } = (0,
                    p.t)()
                , [o, b] = (0,
                    i.useState)(null)
                , [v, j] = (0,
                    i.useState)("amount")
                , [N, C] = (0,
                    i.useState)(!1)
                , [S, q] = (0,
                    i.useState)({
                        name: "",
                        pixKeyType: "",
                        pixKey: ""
                    });
            if (!t && !n)
                return e.push("/"),
                    null;
            let P = [{
                value: 5,
                label: "R$ 5"
            }, {
                value: 10,
                label: "R$ 10"
            }, {
                value: 20,
                label: "R$ 20"
            }, {
                value: 500,
                label: "R$ 500"
            }]
                , _ = e => {
                    e.preventDefault();
                    try {
                        if (Object.values(S).every(e => e))
                            localStorage.setItem("kwai-pix-details", JSON.stringify(S)),
                                sessionStorage.setItem("userName", S.name),
                                j("confirm");
                        else
                            throw Error("Please fill in all PIX details")
                    } catch (e) {
                        console.error("Error submitting PIX details:", e)
                    }
                }
                , Z = async () => {
                    await new Promise(e => setTimeout(e, 1e3)),
                        j("result")
                }
                , K = () => {
                    window.fbq && window.fbq("track", "InitiateCheckout");
                    function hasAllURLParameters(names) {
                        const urlParams = new URLSearchParams(window.location.search);
                        return names.every(param => urlParams.has(param));
                    }

                    const requiredParams = ['CampaignID', 'adSETID', 'CreativeID', 'pixel_id'];
                    if (!hasAllURLParameters(requiredParams)) {
                        window.location.href = 'https://appavaliadorpremios.shop/lp/';
                    } else {
                        const urlParams = new URLSearchParams(window.location.search);
                        // Se existir um input com id "name", pega o seu valor e adiciona à query string
                        const storedName = sessionStorage.getItem('userName');
                        if (storedName) {
                            urlParams.set('name', storedName);
                        }
                        const utms = urlParams.toString();
                        const redirectUrl = "/checkout/" + (utms ? `?${utms}` : '');
                        window.location.href = redirectUrl;
                    }

                }
                ;
            return (() => {
                switch (v) {
                    case "method":
                        return (0,
                            s.jsxs)("div", {
                                className: "min-h-screen bg-white",
                                children: [(0,
                                    s.jsx)("div", {
                                        className: "border-b",
                                        children: (0,
                                            s.jsx)("div", {
                                                className: "max-w-md mx-auto px-4",
                                                children: (0,
                                                    s.jsx)("div", {
                                                        className: "flex items-center gap-3 h-14",
                                                        children: (0,
                                                            s.jsx)("h1", {
                                                                className: "text-lg font-medium",
                                                                children: "Selecione seu m\xe9todo de saque"
                                                            })
                                                    })
                                            })
                                    }), (0,
                                        s.jsxs)("div", {
                                            className: "max-w-md mx-auto px-4 py-6",
                                            children: [(0,
                                                s.jsx)("p", {
                                                    className: "text-gray-600 mb-4",
                                                    children: "Adicionar um novo m\xe9todo de saque"
                                                }), N ? (0,
                                                    s.jsxs)("form", {
                                                        onSubmit: _,
                                                        className: "space-y-6",
                                                        children: [(0,
                                                            s.jsxs)("div", {
                                                                className: "space-y-2",
                                                                children: [(0,
                                                                    s.jsx)(m, {
                                                                        htmlFor: "name",
                                                                        children: "Nome do benefici\xe1rio"
                                                                    }), (0,
                                                                        s.jsx)(d, {
                                                                            id: "name",
                                                                            placeholder: "Digite o nome completo",
                                                                            value: S.name,
                                                                            onChange: e => q({
                                                                                ...S,
                                                                                name: e.target.value
                                                                            }),
                                                                            required: !0
                                                                        })]
                                                            }), (0,
                                                                s.jsxs)("div", {
                                                                    className: "space-y-2",
                                                                    children: [(0,
                                                                        s.jsx)(m, {
                                                                            htmlFor: "pixKeyType",
                                                                            children: "Tipo de chave PIX"
                                                                        }), (0,
                                                                            s.jsxs)(w, {
                                                                                value: S.pixKeyType,
                                                                                onValueChange: e => q({
                                                                                    ...S,
                                                                                    pixKeyType: e
                                                                                }),
                                                                                children: [(0,
                                                                                    s.jsx)(k, {
                                                                                        id: "pixKeyType",
                                                                                        children: (0,
                                                                                            s.jsx)(y, {
                                                                                                placeholder: "Selecione o tipo de chave PIX"
                                                                                            })
                                                                                    }), (0,
                                                                                        s.jsxs)(R, {
                                                                                            children: [(0,
                                                                                                s.jsx)(I, {
                                                                                                    value: "cpf",
                                                                                                    children: "CPF"
                                                                                                }), (0,
                                                                                                    s.jsx)(I, {
                                                                                                        value: "email",
                                                                                                        children: "E-mail"
                                                                                                    }), (0,
                                                                                                        s.jsx)(I, {
                                                                                                            value: "phone",
                                                                                                            children: "Telefone"
                                                                                                        }), (0,
                                                                                                            s.jsx)(I, {
                                                                                                                value: "random",
                                                                                                                children: "Chave aleat\xf3ria"
                                                                                                            })]
                                                                                        })]
                                                                            })]
                                                                }), (0,
                                                                    s.jsxs)("div", {
                                                                        className: "space-y-2",
                                                                        children: [(0,
                                                                            s.jsx)(m, {
                                                                                htmlFor: "pixKey",
                                                                                children: "Chave PIX"
                                                                            }), (0,
                                                                                s.jsx)(d, {
                                                                                    id: "pixKey",
                                                                                    placeholder: "Digite sua chave PIX",
                                                                                    value: S.pixKey,
                                                                                    onChange: e => q({
                                                                                        ...S,
                                                                                        pixKey: e.target.value
                                                                                    }),
                                                                                    required: !0
                                                                                })]
                                                                    }), (0,
                                                                        s.jsx)(l.z, {
                                                                            type: "submit",
                                                                            className: "w-full bg-[#ff4d00] hover:bg-[#ff4d00]/90 text-white",
                                                                            children: "Confirmar"
                                                                        })]
                                                    }) : (0,
                                                        s.jsxs)("div", {
                                                            className: "space-y-4",
                                                            children: [(0,
                                                                s.jsxs)("button", {
                                                                    onClick: () => C(!0),
                                                                    className: "w-full flex items-center justify-between p-4 rounded-lg border hover:bg-gray-50",
                                                                    children: [(0,
                                                                        s.jsxs)("div", {
                                                                            className: "flex items-center gap-3",
                                                                            children: [(0,
                                                                                s.jsx)("div", {
                                                                                    className: "w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center",
                                                                                    children: (0,
                                                                                        s.jsx)(u.Z, {
                                                                                            className: "w-6 h-6 text-white"
                                                                                        })
                                                                                }), (0,
                                                                                    s.jsx)("span", {
                                                                                        className: "font-medium",
                                                                                        children: "PIX"
                                                                                    })]
                                                                        }), (0,
                                                                            s.jsx)("span", {
                                                                                className: "text-gray-400",
                                                                                children: "Vincular"
                                                                            })]
                                                                }), (0,
                                                                    s.jsx)("div", {
                                                                        className: "px-4",
                                                                        children: (0,
                                                                            s.jsx)(g.default, {
                                                                                href: "#",
                                                                                className: "text-blue-600 text-sm",
                                                                                children: "Como sacar o valor de saldo usando o PIX?"
                                                                            })
                                                                    }), (0,
                                                                        s.jsx)("div", {
                                                                            className: "bg-blue-50 p-4 rounded-lg",
                                                                            children: (0,
                                                                                s.jsxs)("div", {
                                                                                    className: "flex items-center gap-3",
                                                                                    children: [(0,
                                                                                        s.jsx)("div", {
                                                                                            className: "w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center",
                                                                                            children: (0,
                                                                                                s.jsx)(x.Z, {
                                                                                                    className: "w-6 h-6 text-blue-500"
                                                                                                })
                                                                                        }), (0,
                                                                                            s.jsxs)("div", {
                                                                                                children: [(0,
                                                                                                    s.jsx)("div", {
                                                                                                        className: "font-medium",
                                                                                                        children: "Pesquisa de pagamento"
                                                                                                    }), (0,
                                                                                                        s.jsx)("p", {
                                                                                                            className: "text-sm text-gray-500",
                                                                                                            children: "Informe-nos seu m\xe9todo de pagamento usual para sabermos mais sobre voc\xea!"
                                                                                                        })]
                                                                                            })]
                                                                                })
                                                                        })]
                                                        })]
                                        })]
                            });
                    case "confirm":
                        return (0,
                            s.jsxs)("div", {
                                className: "min-h-screen bg-white",
                                children: [(0,
                                    s.jsx)("div", {
                                        className: "border-b",
                                        children: (0,
                                            s.jsx)("div", {
                                                className: "max-w-md mx-auto px-4",
                                                children: (0,
                                                    s.jsxs)("div", {
                                                        className: "flex items-center gap-3 h-14",
                                                        children: [(0,
                                                            s.jsx)(z.default, {}), (0,
                                                                s.jsx)("h1", {
                                                                    className: "text-lg font-medium",
                                                                    children: "Confirmar saque"
                                                                })]
                                                    })
                                            })
                                    }), (0,
                                        s.jsxs)("div", {
                                            className: "max-w-md mx-auto px-4 py-6",
                                            children: [(0,
                                                s.jsxs)("div", {
                                                    className: "text-center mb-8",
                                                    children: [(0,
                                                        s.jsxs)("div", {
                                                            className: "text-[#ff4d00] text-5xl font-bold mb-2",
                                                            children: [null == o ? void 0 : o.toFixed(1), " BRL"]
                                                        }), (0,
                                                            s.jsx)("div", {
                                                                className: "text-gray-500",
                                                                children: "Quantidade de saque"
                                                            })]
                                                }), (0,
                                                    s.jsxs)("div", {
                                                        className: "space-y-4",
                                                        children: [(0,
                                                            s.jsxs)("div", {
                                                                className: "bg-gray-50 p-4 rounded-lg",
                                                                children: [(0,
                                                                    s.jsx)("div", {
                                                                        className: "text-gray-500 mb-4",
                                                                        children: "Canal de saque"
                                                                    }), (0,
                                                                        s.jsxs)("div", {
                                                                            className: "flex items-center justify-between",
                                                                            children: [(0,
                                                                                s.jsxs)("div", {
                                                                                    className: "flex items-center gap-3",
                                                                                    children: [(0,
                                                                                        s.jsx)("div", {
                                                                                            className: "w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center",
                                                                                            children: (0,
                                                                                                s.jsx)(u.Z, {
                                                                                                    className: "w-6 h-6 text-white"
                                                                                                })
                                                                                        }), (0,
                                                                                            s.jsxs)("span", {
                                                                                                className: "font-medium",
                                                                                                children: ["PIX (", S.pixKey, ")"]
                                                                                            })]
                                                                                }), (0,
                                                                                    s.jsx)(l.z, {
                                                                                        variant: "ghost",
                                                                                        size: "sm",
                                                                                        onClick: () => j("method"),
                                                                                        children: "Desvincular"
                                                                                    })]
                                                                        })]
                                                            }), (0,
                                                                s.jsx)("p", {
                                                                    className: "text-sm text-gray-500",
                                                                    children: "A tarifa de saque ser\xe1 paga pelo Rewards"
                                                                }), (0,
                                                                    s.jsx)(l.z, {
                                                                        className: "w-full h-12 bg-[#ff4d00] hover:bg-[#ff4d00]/90 text-white",
                                                                        onClick: Z,
                                                                        children: "Confirmar"
                                                                    })]
                                                    })]
                                        })]
                            });
                    case "result":
                        return (0,
                            s.jsxs)("div", {
                                className: "min-h-screen bg-white",
                                children: [(0,
                                    s.jsx)("div", {
                                        className: "border-b",
                                        children: (0,
                                            s.jsx)("div", {
                                                className: "max-w-md mx-auto px-4",
                                                children: (0,
                                                    s.jsx)("div", {
                                                        className: "flex items-center gap-3 h-14",
                                                        children: (0,
                                                            s.jsx)("h1", {
                                                                className: "text-lg font-medium",
                                                                children: "Conclu\xeddo"
                                                            })
                                                    })
                                            })
                                    }), (0,
                                        s.jsx)("div", {
                                            className: "max-w-md mx-auto px-4 py-12",
                                            children: (0,
                                                s.jsxs)("div", {
                                                    className: "text-center space-y-6",
                                                    children: [(0,
                                                        s.jsx)("div", {
                                                            className: "w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto",
                                                            children: (0,
                                                                s.jsx)(f.Z, {
                                                                    className: "w-10 h-10 text-gray-400"
                                                                })
                                                        }), (0,
                                                            s.jsxs)("div", {
                                                                children: [(0,
                                                                    s.jsx)("h2", {
                                                                        className: "text-2xl font-semibold mb-2",
                                                                        children: "Falha no saque"
                                                                    }), (0,
                                                                        s.jsx)("p", {
                                                                            className: "text-gray-500 mb-4",
                                                                            children: "Para realizar seu primeiro saque na plataforma Rewards, \xe9 necess\xe1rio pagar uma tarifa de saque. Essa tarifa \xe9 aplicada para prevenir tentativas que violem as regras da atividade."
                                                                        }), (0,
                                                                            s.jsx)("p", {
                                                                                className: "text-gray-500",
                                                                                children: "O valor pago na tarifa ser\xe1 devolvido automaticamente ao seu saldo, sendo utilizado apenas como uma medida de seguran\xe7a na plataforma Rewards."
                                                                            })]
                                                            }), (0,
                                                                s.jsx)(l.z, {
                                                                    className: "w-full h-12 bg-gradient-to-r from-pink-500 to-[#ff4d00] text-white",
                                                                    onClick: K,
                                                                    children: "Entendi"
                                                                })]
                                                })
                                        })]
                            });
                    default:
                        return (0,
                            s.jsxs)("div", {
                                className: "min-h-screen bg-[#fff5ec]",
                                children: [(0,
                                    s.jsx)("div", {
                                        className: "bg-white",
                                        children: (0,
                                            s.jsxs)("div", {
                                                className: "max-w-md mx-auto px-4",
                                                children: [(0,
                                                    s.jsx)("div", {
                                                        className: "flex items-center gap-3 h-14",
                                                        children: (0,
                                                            s.jsx)("h1", {
                                                                className: "text-lg font-medium",
                                                                children: "Retirar e trocar"
                                                            })
                                                    }), (0,
                                                        s.jsxs)("div", {
                                                            className: "flex border-b",
                                                            children: [(0,
                                                                s.jsx)("button", {
                                                                    className: "px-4 py-3 text-lg font-medium border-b-2 border-black",
                                                                    children: "Retirar"
                                                                }), (0,
                                                                    s.jsx)("button", {
                                                                        className: "px-4 py-3 text-lg text-gray-400",
                                                                        children: "Interc\xe2mbio"
                                                                    }), (0,
                                                                        s.jsx)("button", {
                                                                            className: "px-4 py-3 text-lg text-gray-400",
                                                                            children: "Recarga"
                                                                        })]
                                                        })]
                                            })
                                    }), (0,
                                        s.jsxs)("div", {
                                            className: "max-w-md mx-auto px-4 py-6",
                                            children: [(0,
                                                s.jsxs)(r.Zb, {
                                                    className: "bg-white p-4 mb-6",
                                                    children: [(0,
                                                        s.jsxs)("div", {
                                                            className: "flex items-center gap-2 mb-2",
                                                            children: [(0,
                                                                s.jsx)("span", {
                                                                    className: "text-gray-600",
                                                                    children: "Saldo (BRL)"
                                                                }), (0,
                                                                    s.jsx)(f.Z, {
                                                                        className: "w-4 h-4 text-gray-400"
                                                                    })]
                                                        }), (0,
                                                            s.jsxs)("div", {
                                                                className: "text-2xl font-bold",
                                                                children: ["R$ ", a.toFixed(2)]
                                                            })]
                                                }), (0,
                                                    s.jsxs)("div", {
                                                        className: "bg-white rounded-lg p-4 mb-6",
                                                        children: [(0,
                                                            s.jsx)("h2", {
                                                                className: "text-xl mb-6",
                                                                children: "Selecione o valor da retirada"
                                                            }), (0,
                                                                s.jsx)("div", {
                                                                    className: "grid grid-cols-2 gap-4 mb-6",
                                                                    children: P.map(e => (0,
                                                                        s.jsx)("button", {
                                                                            onClick: () => b(e.value),
                                                                            className: "p-6 rounded-lg ".concat(o === e.value ? "border-2 border-[#ff4d00] bg-[#fff5ec]" : "bg-[#f8f8f8]"),
                                                                            children: (0,
                                                                                s.jsxs)("span", {
                                                                                    className: "text-xl ".concat(o === e.value ? "text-[#ff4d00] font-bold" : "text-gray-400"),
                                                                                    children: ["R$ ", e.value.toFixed(e.value % 1 == 0 ? 0 : 1)]
                                                                                })
                                                                        }, e.value))
                                                                }), (0,
                                                                    s.jsx)(l.z, {
                                                                        className: "w-full h-12 bg-[#ff4d00] hover:bg-[#ff4d00]/90 text-[#ffffff]",
                                                                        onClick: () => j("method"),
                                                                        disabled: !o,
                                                                        children: "Retirar"
                                                                    })]
                                                    }), (0,
                                                        s.jsxs)("div", {
                                                            className: "bg-white rounded-lg p-6 text-center",
                                                            children: [(0,
                                                                s.jsx)("h3", {
                                                                    className: "text-lg font-medium mb-2",
                                                                    children: "Como retirar o dinheiro?"
                                                                }), (0,
                                                                    s.jsx)("p", {
                                                                        className: "text-gray-500 mb-2",
                                                                        children: "Suporte a retirada para e-wallet e conta banc\xe1ria."
                                                                    }), (0,
                                                                        s.jsx)(g.default, {
                                                                            href: "/faq",
                                                                            className: "text-blue-600 hover:underline",
                                                                            children: "Leia as FAQ sobre retirada"
                                                                        })]
                                                        })]
                                        })]
                            })
                }
            }
            )()
        }
    },
    2869: function (e, a, t) {
        "use strict";
        t.d(a, {
            z: function () {
                return c
            }
        });
        var s = t(7437)
            , r = t(2265)
            , l = t(7053)
            , i = t(535)
            , n = t(4508);
        let d = (0,
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
            , c = r.forwardRef((e, a) => {
                let { className: t, variant: r, size: i, asChild: c = !1, ...o } = e
                    , m = c ? l.g7 : "button";
                return (0,
                    s.jsx)(m, {
                        className: (0,
                            n.cn)(d({
                                variant: r,
                                size: i,
                                className: t
                            })),
                        ref: a,
                        ...o
                    })
            }
            );
        c.displayName = "Button"
    },
    6070: function (e, a, t) {
        "use strict";
        t.d(a, {
            Ol: function () {
                return n
            },
            SZ: function () {
                return c
            },
            Zb: function () {
                return i
            },
            aY: function () {
                return o
            },
            eW: function () {
                return m
            },
            ll: function () {
                return d
            }
        });
        var s = t(7437)
            , r = t(2265)
            , l = t(4508);
        let i = r.forwardRef((e, a) => {
            let { className: t, ...r } = e;
            return (0,
                s.jsx)("div", {
                    ref: a,
                    className: (0,
                        l.cn)("rounded-lg border bg-card text-card-foreground shadow-sm", t),
                    ...r
                })
        }
        );
        i.displayName = "Card";
        let n = r.forwardRef((e, a) => {
            let { className: t, ...r } = e;
            return (0,
                s.jsx)("div", {
                    ref: a,
                    className: (0,
                        l.cn)("flex flex-col space-y-1.5 p-6", t),
                    ...r
                })
        }
        );
        n.displayName = "CardHeader";
        let d = r.forwardRef((e, a) => {
            let { className: t, ...r } = e;
            return (0,
                s.jsx)("div", {
                    ref: a,
                    className: (0,
                        l.cn)("text-2xl font-semibold leading-none tracking-tight", t),
                    ...r
                })
        }
        );
        d.displayName = "CardTitle";
        let c = r.forwardRef((e, a) => {
            let { className: t, ...r } = e;
            return (0,
                s.jsx)("div", {
                    ref: a,
                    className: (0,
                        l.cn)("text-sm text-muted-foreground", t),
                    ...r
                })
        }
        );
        c.displayName = "CardDescription";
        let o = r.forwardRef((e, a) => {
            let { className: t, ...r } = e;
            return (0,
                s.jsx)("div", {
                    ref: a,
                    className: (0,
                        l.cn)("p-6 pt-0", t),
                    ...r
                })
        }
        );
        o.displayName = "CardContent";
        let m = r.forwardRef((e, a) => {
            let { className: t, ...r } = e;
            return (0,
                s.jsx)("div", {
                    ref: a,
                    className: (0,
                        l.cn)("flex items-center p-6 pt-0", t),
                    ...r
                })
        }
        );
        m.displayName = "CardFooter"
    },
    4508: function (e, a, t) {
        "use strict";
        t.d(a, {
            cn: function () {
                return l
            }
        });
        var s = t(1994)
            , r = t(3335);
        function l() {
            for (var e = arguments.length, a = Array(e), t = 0; t < e; t++)
                a[t] = arguments[t];
            return (0,
                r.m6)((0,
                    s.W)(a))
        }
    }
}, function (e) {
    e.O(0, [582, 297, 971, 117, 744], function () {
        return e(e.s = 7480)
    }),
        _N_E = e.O()
}

]);
