console.log("ciaone");
var n_link = 0;
var form_minore = 0;

var index_form_minore = 0;
var risposte = new Array();
var url = document.URL;

var key = url.split("?")[1];
if (key) {  // se esiste una chiave splitta via la roba in eccesso
    key = key.split("&")[0];        //splitta & (se c'è) e prendi il primo blocco
    key = key.split("=")[0];
    key = key.split("?")[0];

}
// var altezza = window.screen.height; 
// var altezza = "1920px"; 

var frasi_donazione = [ 
    "Offrimi un caffè 😪",
    "Offrimi un caffè 😉",
    "Offrimi un caffè ☕",
    "Offrimi un caffè 😪",
    "Offrimi un caffè 😉",
    "Offrimi un caffè 😉",
    "DONA UN SOLDO AL TUO WITCHER",
    "Kaffèèè!1!?? 👴🏻",
    "Birretta? 🍻",
    "Coffee me ☕",
    "Dona il tuo 5x1000" ];

// console.log(url);
// console.log("chiave " +key)

var prop = key;

var link = {
// 1
//note
// "tenda_da_campeggio_innovativa": [
// "https://docs.google.com/forms/d/1mwQvflYLPuJimfTQSs_22qfKS64QRmllZbC7s1nD9Ek",
// "https://docs.google.com/forms/d/1RYb7rwZAD_VZwIE2j9g7JfcTEBrY9FhAtjHRlpVhuvs",
// "https://docs.google.com/forms/d/1dQRvPfKtH4McEEnU1LjCy5OivuVbaf6tkrlAt079el0",
// "https://docs.google.com/forms/d/1O5Dd7Tv-_szDg-n3M5wZ-AkMadzQIWlc3vK2hEDAakI",
// "https://docs.google.com/forms/d/1hyoHuL9TeKjXP3v-PCeoFADwOeyGf9tEmEHoHZ7g7eI",
// "https://docs.google.com/forms/d/1rB2GXpd8MLnTmrSkitmd7sP9XCayFPu_Wg85BzTSTxI",
// "https://docs.google.com/forms/d/1NiIlDHxet-SBf22VnrHlquxv8AdjgUNpXdj7vabvUD8",
// "https://docs.google.com/forms/d/1RMFIHcPW5-lihOV_FY6eqlBpElwpm1IpDXntttEnzmU",
// "https://docs.google.com/forms/d/1pmDiu5aDyrqlVjMRpCEs7S-WsHGeSrWtchuSARHslVc",
// "https://docs.google.com/forms/d/1jF3MGNRn9MLZyKMS-_XKxlPweZ2dDTmKlKJQG6Y9EkI",
// ],
    "the_alla_pesca_o_the_al_limone": [
        "https://docs.google.com/forms/d/12r0Vhc5mitPBadE0MZg2Y2C1huYhBX0sehTv-Ejdcc0",
        "https://docs.google.com/forms/d/14_SU0eaAeSegTjjm6zjNx2C8aBMk6JLer03ocgVMY5g",
        "https://docs.google.com/forms/d/1yP6RwVtXeNuDjtHdhuY-nLKr0jzegN97jQZ2IPQsI_4",
        "https://docs.google.com/forms/d/1jLmVLim2XexkQOH4B71EmK_h4RFL7aptwLvNNCVGPpg",
        "https://docs.google.com/forms/d/1EUSQksDNIYkW68bJ93R30AhS90nGt2GCG9Ok7iV_8mc",
        "https://docs.google.com/forms/d/1pFs5jec0Vno_iMClzpmHOkeGh2Jw8AMG9C-daQLpqwg",
        "https://docs.google.com/forms/d/1-ySeIkqSyuJDXlRltMKkfQlharzMoqHJBBh7E-FH_2E",
        "https://docs.google.com/forms/d/1xbmqHNPaZw_pVfPjFK6ga60fg6mseL98i--a4bU6UHs",
        "https://docs.google.com/forms/d/1bLEwvvvvplr5Pw5Po62wvkeg-mH6UqgkEN4ug6da0k0",
        "https://docs.google.com/forms/d/1MhQQL8-E_Vi4q8VmfAj0UH4X5MxaXpD9tSjFshinc0c",

    ],    
    // 2
//gruppo 40
"coltura_idroponica": [
    "https://docs.google.com/forms/d/e/1FAIpQLSct702lmfZXVdd0rr6AgWS-DaB-LdzFZbbm9R95auT6euiGTA",
    "https://docs.google.com/forms/d/e/1FAIpQLSeCI7r--XD9uSwdGducssShWtbQbZDZWFGnXiGqcw4yrN7ANA",
    "https://docs.google.com/forms/d/e/1FAIpQLSd9SDubU4MDjr6JRttIO-PfkjRE328WUKgxVLOvPSnf9lIb0A",
    "https://docs.google.com/forms/d/e/1FAIpQLScqgI5oWsKI7isRxHXUz6uO4JddsDXpMDa-wRk2CdNxK75-Lg",
    "https://docs.google.com/forms/d/e/1FAIpQLSeQjAv2iwjDQmZo0ZANZENEJoElDFx2y7OuLCtw12rkP7kxBg",
    "https://docs.google.com/forms/d/e/1FAIpQLSeiBGlniWgN_vJQ8UoZZYT-Q9J458xK8JiwX5MlcPL3eGCHVQ",
    "https://docs.google.com/forms/d/e/1FAIpQLSfIIgSoin32-loAHHtFiChAjPRefbuTDtkH6oPMcy9MavZA4Q",
    "https://docs.google.com/forms/d/e/1FAIpQLSeu5KRnLr82pfIBWLYqtK3242Q5ccAt6_2K49Su5qYgAqPuHQ",
    "https://docs.google.com/forms/d/e/1FAIpQLSfVi-3rShe5jaqWeHRAK6FaOlmefDIOme63M3aSrrc_Kffpww",
    "https://docs.google.com/forms/d/e/1FAIpQLSctHpyv1rGMMcxS89sEcWnSTc-SIJES0SFnIXpC7tpN8waOHg",
            ],


            // 3
//Gruppo 23
"automobile_a_idrogeno": [
    "https://docs.google.com/forms/d/e/1FAIpQLSelEIqbBoL2L3boTKnxgz8mRwjqXRE2p_DjjjCeZHz7-XPTyA",
    "https://docs.google.com/forms/d/e/1FAIpQLSfQpDZj3Xwzy313-wCkKgH_u1pFIywL5QWmsVgFiiKaPNMA3A",
    "https://docs.google.com/forms/d/e/1FAIpQLSff5JoUcEAa8gmVML2x8BWgRFZmv1njoshZF3LRlQoqEOWuMQ",
    "https://docs.google.com/forms/d/e/1FAIpQLSc9FPUJKJ-yPywezxOEjzh40xEDBpjNuLuxtAMfonUw5_N8bw",
    "https://docs.google.com/forms/d/e/1FAIpQLSewPt4OcRwsmRpuQHMscTqNqTIAsUQJwuEB6ntvIuzbLsXjsg",
    "https://docs.google.com/forms/d/e/1FAIpQLScreUn3O5BR-BU4MEbhCQVNFa_zD46wVqPqbsVV7oRl-hlq0w",
    "https://docs.google.com/forms/d/e/1FAIpQLScSTA5Hy5X536jFX_AlwLOlxUlKnxwqJO4lMKZf0JVxn_ZNxg",
    "https://docs.google.com/forms/d/e/1FAIpQLSf0nxWAYxGtUBuQd4JHBfbpowQeRYQAIyFNBIyWtEfsRDFFqA",
    "https://docs.google.com/forms/d/e/1FAIpQLScEuAYWPDKSwyjlihB9W6PuEnrTvJ_j7eMH75Qdap0q51eN8g",
    "https://docs.google.com/forms/d/e/1FAIpQLScdhwIk76UQ9tOXN0urd4WuhrwoP_bfATnnO042tEhHzNaTZg",
            ],
            // 4
//Gruppo 25
"cover_da_smartphone_con_memoria_ssd_integrata": [
    "https://docs.google.com/forms/d/e/1FAIpQLSfUvJWgR6lg7o_jxE8FqAKLFq_90XcKNY9txL5OpT1Lbv6URA",
    "https://docs.google.com/forms/d/e/1FAIpQLSc6SzDSttpH5vRSIjTRXhgzAsaEnogLJ0_-20q_Jwf0n7Ew2A",
    "https://docs.google.com/forms/d/e/1FAIpQLSefcecdGY_hZCjrDXFCJ7pnXxow-aNtl5MYI7hyv5SYVK8ShQ",
    "https://docs.google.com/forms/d/e/1FAIpQLSchQLaxoq9Yca5n4-TdFhKIfPjBibOJopo2ogKt3lxmk-ec7g",
    "https://docs.google.com/forms/d/e/1FAIpQLSflg6y6x178av1koBbgIY2ciQCpT1hLc3xSCS82uwsjP5rnxQ",
    "https://docs.google.com/forms/d/e/1FAIpQLSfvBuQoyQ6PEMR9qX9WfkdTAsIjKkqvKp3WipoCvIWF1W1PsA",
    "https://docs.google.com/forms/d/e/1FAIpQLScNlamyP5tZsQvBNuifBsLDXlkjrsEw0bbToCiAOsWRLbHDnw",
    "https://docs.google.com/forms/d/e/1FAIpQLSfJzCmnaY7n_R70FyESXVkLhJ4L3inuE14-1hPNnwNhDkSaLg",
    "https://docs.google.com/forms/d/e/1FAIpQLSdnmdLax80N22fFHOihYe8Ig_0msi8wIRmGVdZhtDWUtClczg",
    "https://docs.google.com/forms/d/e/1FAIpQLSfNTy8eS_2em1YJbrIpn971FHeCZU18rJlUTBDvv45g8DoEQQ",
            ],
            // 6
//Gruppo 1
    "attivita_in_quota": [
    "https://docs.google.com/forms/d/e/1FAIpQLScmz6uI3jjXbZwHtmyo7DfaaAUpEFT1Nl6dupjhk-GjVy4big",
    "https://docs.google.com/forms/d/e/1FAIpQLSezvz0k4CuOBgHUVOipi7W5OcrKkjHCkzLex2Mi_Wjd481K_A",
    "https://docs.google.com/forms/d/e/1FAIpQLSew-858Wyi6ouqLVdHKfBUt19xaduaQGq7b2Ttm6vMR7K0lAA",
    "https://docs.google.com/forms/d/e/1FAIpQLSdpBdTjSCwt8jov8jMTiAnuHY87hhUIlzZeLK5Zpz18W30rjQ",
    "https://docs.google.com/forms/d/e/1FAIpQLScoWe22cSEgEzMuLoiaDsr7IbjxobkL88CMxuvppwbLREpcbg",
    "https://docs.google.com/forms/d/e/1FAIpQLSfm3HtthFS8m4fhTm3HJ3pu2TtqfJ5kOpcAkA01iPPujlgPRA",
    "https://docs.google.com/forms/d/e/1FAIpQLSfw822dtkoOx-Dwv13BHQFHavDAnd48ERHzFGeAOwUcsZ9u1A",
    "https://docs.google.com/forms/d/e/1FAIpQLSdep0zsS7AqSHdRhZbVEa7Q4NjcBzo8Br6uFjTnaI_q9yoIeQ",
    "https://docs.google.com/forms/d/e/1FAIpQLSddoGbXQWq7aP010CC1L2COnXRCQJVFiC4nmXwy2Xyf5wklbA",
    "https://docs.google.com/forms/d/187RfBohep4IW-932V885x8ciwzAOEtCRZ64LEIoNNdU",
            ],
            // 7
//gruppo 14
// 7
//gruppo 14
"etextile": [
    "https://docs.google.com/forms/d/1y8frgEwMY2xVeO99pglytUPWB1nHdAjmgaRI1gkyKqQ",
    "https://docs.google.com/forms/d/1847Y6lU0CmW-_YgoVXYt3Voz9vxqcGRuW5zGx1wh1nw",
    "https://docs.google.com/forms/d/1DQGP8S17iR4Ze-0Y3ljChBN_G1IT4ig6B8op97A8wC4",
    "https://docs.google.com/forms/d/1CEmDy7voctf7Jj20yk7oPWI1HGDgRN7FQkiDLSY0mSo",
    "https://docs.google.com/forms/d/1nA6Aj5bhepkzfDwjCS9rhEcdOLA2YasU3NJddzDfIIU",
    "https://docs.google.com/forms/d/1WHih4500hmQj2y__iA9ODT9LBIuvIbjCQRMGWYS4_kU",
    "https://docs.google.com/forms/d/1IHi9QwcBYDUMjowS22F514OEep1GfCcQmFMZ2G8LaN8",
    "https://docs.google.com/forms/d/1xGSPqS_OGq2mf1eNriGY3sCInVOk4G6FJ1q2CYWCUC0",
    "https://docs.google.com/forms/d/18rfV1OOX3IqNpyc4JvkA9GWjHMiyoiA6B89tpch38w8",
    "https://docs.google.com/forms/d/1NXZgmclp_-IS7cbGiNvLPcTOEnm2nmBaqi1h8xJvKRc",
            ],
            // 8
//gruppo 11
"tappeti_ignifughi_ecosostenibili": [
    "https://docs.google.com/forms/d/1aORUP22N_bH02hxMaoiDsKXzRWgiuYcd7NU7a6qXUUw",
    "https://docs.google.com/forms/d/1dxqqlmJ3uGnVE2eeRzmIDVHFQyDs1RWQ6HCHuE8FMzw",
    "https://docs.google.com/forms/d/1eiXcwG60spmtdCqso4PmCBaAwgCkS5UVGRH3m1As0QY",
    "https://docs.google.com/forms/d/1U6u6MNQXEY9rWf4TrfAcyXdx0WfT_a91L1l5_L2RL-E",
    "https://docs.google.com/forms/d/1m23VlIKSEvS7AKmCK5lzA7tx6LX00L6t7zl3Nm9uBog",
    "https://docs.google.com/forms/d/1ExW_kRkf2yyBQAtBUlooK73x51KaqSenyIzlwtvG-q8",
    "https://docs.google.com/forms/d/1NyA--aq-MrT-GQ9jno2mFSSHh6HDZTRwuy9r8vi5W9M",
    "https://docs.google.com/forms/d/1oN6sKBSczqEX3Rwy-lSaumXOsMuQSVPCZVG_y2nxtQQ",
    "https://docs.google.com/forms/d/1CmZg2gSsAoy2WGPO3raMiQzT_y_G1SnT8DkLicrR_VI",
    "https://docs.google.com/forms/d/1UlGTuWGciqyfFOWUIk9EJXXVG_AacTMxpoSimbjSD1E",
            ],
  // 9
//gruppo 7
"suola_in_stampa_3d_fdm": [
    "https://docs.google.com/forms/d/179JyRFyEEbLflVu-YoG6ZYUDdl5x2mSKQ5ek3tJuCIc",
    "https://docs.google.com/forms/d/1WF_L_BcYUAFOQneY-tXvJ5nCTClESEyJIvP5c8eDKyA",
    "https://docs.google.com/forms/d/1ujhX5t4_a_iHFAM0BwZrkC_Bs5DWficDT8hmnkMrKyw",
    "https://docs.google.com/forms/d/1lzLBeIe5FGnJHo3McV3MRYt0P2IOX-wvMfvgv6T7JKc",
    "https://docs.google.com/forms/d/1K6hQIOCqZLmTolch4hFMUfhhjNbRvEoybnp8eVIYiY4",
    "https://docs.google.com/forms/d/12WUQVQXtm1o0QBe04KGnIPybwxSFNjIimayF8Kl29Kw",
    "https://docs.google.com/forms/d/19FAeZWQ4Aqs_A23IkEHK726fDWGFLF4thDeXYTISCMk",
    "https://docs.google.com/forms/d/1yGQ3kjwsFhLTg9tUZwvAoLhY1Mc3Aj0MUUbQhPlzS9E",
    "https://docs.google.com/forms/d/15YX8xQq7Bazjdtwp_pTnliodquRykoh1t2z2n6RYWcQ",
    "https://docs.google.com/forms/d/1DOLWs_A-1wssmaN8yA7slJ0E2dw4VGdSHCSVnaBHghs",
            ],
            // 10
//gruppo 16
"stampe_e_pannelli_fotocatalitici": [
    "https://docs.google.com/forms/d/13PJvmyaKW1j5_l0IvgwG-iNsOLjEM7Qhpap5IAFSR70",
    "https://docs.google.com/forms/d/12IsRC38UoXEyq_sTYrVTF5im0vVv17eXBXRMjJhEleI",
    "https://docs.google.com/forms/d/19cAH3IHvY3RcYg3-JlzEKSVwiDZcS3uyR6UiHi0uzC8",
    "https://docs.google.com/forms/d/1ui_QZfVpkZH1pJPcFBtPTsTN1Gegnzo8CauYpfD1oQM",
    "https://docs.google.com/forms/d/18fszPJ6Zj9yCfx27EI1EIs8Fn4K__GDcqPqooqCZZ_0",
    "https://docs.google.com/forms/d/1TwrAzBSQ3jrHCa4XDsPkMeuETajTpgsfZiT4p-BZ4fo",
    "https://docs.google.com/forms/d/1D_buKFd0sVA_jYezna6mxu1MEcyiGZk1XuVq2RKdYEU",
    "https://docs.google.com/forms/d/1sVR4-ew7Gz2JwDsj5t7-qGasRggtZGr_iicjRxlhYlo",
    "https://docs.google.com/forms/d/12GkkBQE8N5ngWzoZCjd-6QtYG_N0LiA7h7q1-4lJGqI",
    "https://docs.google.com/forms/u/3/d/1YUuC9VpQX-gRMm8Ta8-LkfEJopS2gMez7qNblr-Bb44",
            ],
            // 11
//note
"virtual_fitting": [
    "https://docs.google.com/forms/d/1vYo13CJw9eUAUAdZZjBYUR_5_yAktRQPpigTLIv68O4",
    "https://docs.google.com/forms/d/1c2bk7vyMDNDwTwYnoLXilpgntOEp0ZuaWibLNez5OcE",
    "https://docs.google.com/forms/d/1GMycyTjOROwhsp1rkyRdQGAv86H4jq5IxezrGSFhSoA",
    "https://docs.google.com/forms/d/174P2qyhj2DaToGw6QPQhi4fMLS27M7c85lnD7QAtyfE",
    "https://docs.google.com/forms/d/1JZamq13Vur-xfNMkkEx47FEJ6S_vKZqeq6FleXBjWdY",
    "https://docs.google.com/forms/d/1HSHI-r9rmSjjS4hGTqYXyazUdhtxYMcDU7C3HRgOhB0",
    "https://docs.google.com/forms/d/18Go2wAqcsGdLnuT9C81FTHNe3SIOQdUqg5QHbG4UERQ",
    "https://docs.google.com/forms/d/1epayiWXQuUwLiQVHtM7p1oGp2LdOwTK8zHdfWaP4O4w",
    "https://docs.google.com/forms/d/1EnHSgxxii51OP665l7M2-VG6RYga0A1AA3eKZr6wxnY",
    "https://docs.google.com/forms/d/1DkpctWSQVSjtpQQw3lPtgYPnwXDW_0gxIr7_tm4RVs8",
            ],
            // 12
//gruppo44
"borse_in_micelio": [
    "https://docs.google.com/forms/d/1nD0Omd22L4p3QCGCFEj6pW6HIqvh6kvI6G7Jv05xtfo",
    "https://docs.google.com/forms/d/1_4nm_ycxZ1ZJbrBTEcKIhhptwHvLTDiVmXs5g2b8Qb0",
    "https://docs.google.com/forms/d/1S1mljAWr75ENKsnpbVUMdGYErHO7A5Vz91pY3Cjjilw",
    "https://docs.google.com/forms/d/1FVMQIeHUCpvAauKqzQ2bE0VOnaPDGBj3K5S7YZHlsTQ",
    "https://docs.google.com/forms/d/1CbbBhqzkjqGfSftZO3p517r3VzzX4cK5iPzPDZ4l3C8",
    "https://docs.google.com/forms/d/1LLrFWe7ZC80qBq920AVDZMDXbzmtlEm-Z68Y1XvWBJI",
    "https://docs.google.com/forms/d/1iBPZxXdLxpIq89GqGFmxfhZCw3fQW9ApMZpDfqyg5fY",
    "https://docs.google.com/forms/d/1phFAKdB9-CDIwTgGrCR-YiteAtbcauEeB8iofl9EUAk",
    "https://docs.google.com/forms/d/1GPMhLXpPRTqE_AMl30thhI_Xx_stdWF_U-u_L5C4wZE",
    "https://docs.google.com/forms/d/10P96YHS54cQYOwS705l7UJbVuQ-vIWdCZRBgcoKNpwk",
            ],
            // 5
//Gruppo 17 
"coltelli_da_cucina_in_dlc": [
    "https://docs.google.com/forms/d/e/1FAIpQLSdTwzk-1-GVi16i1Ix12LuoZs_LGmfgByFtova69A00Je6XRw",
    "https://docs.google.com/forms/d/e/1FAIpQLSerTeo1DMPnw2YNxwTdTzk0aVKnSuR0GcZh_ghjLC0vad-vGA",
    "https://docs.google.com/forms/d/e/1FAIpQLScNHGYSqNcl3rzXLb2qtOOE1qURoQVfY_hvBRt3FASsioCdyg",
    "https://docs.google.com/forms/d/e/1FAIpQLSc5HD2LLTZfAIw4H6BDF50regpCMkRMrjiHKZAl9mS8y32oCg",
    "https://docs.google.com/forms/d/e/1FAIpQLSdNCRlYmZB0wWBc45eWlw7isQrPiz8x2HIjsQUPR4olgAltXg",
    "https://docs.google.com/forms/d/e/1FAIpQLSfF0TPEpTK9K9r8ysYBAWUBAdarMU5jKWMqL6RKa7SyDhP7rg",
    "https://docs.google.com/forms/d/e/1FAIpQLSfFDNU6w0-HjfS720qPoQ_lwZzosSRvOLNapNvu1-80GT-7Rg",
    "https://docs.google.com/forms/d/e/1FAIpQLSf6XXdnFToSi0UYFiQX_iWdu5DD_V0UNqtd3-UX6-GlDaT2yw",
    "https://docs.google.com/forms/d/e/1FAIpQLSdLOKARGhtwA-gYodLpjR2n4G3aHSWfqLJuhpI--EUBdxRjBw",
    "https://docs.google.com/forms/d/e/1FAIpQLSeg1943az_-WnaYw_eznADSeqhxohZtkNBGOvUwyI667bBZsg",
            ],
            // 14
//gruppo 14 ( il precedente gruppo si sarà sbagliato con design3 mi sa ) 
"app_visite_mediche_e_trasporti": [
    "https://docs.google.com/forms/d/1ofqdbNLqnrGZJSdQUMHqift-fFcTYZxi44ven5Z8WXw",
    "https://docs.google.com/forms/d/1KFYNDbLVA12iO_WjhDnv8_3LfZuIgKlfTjAJ3yO1yMk",
    "https://docs.google.com/forms/d/1huIzkH1iHzlsyEOo4PDux9xCx8jZhv4wUmC3A1uEO7o",
    "https://docs.google.com/forms/d/1AQs21UdwNE7-bqvZgCdAPh0FzDOcSdTH2h6ypS4pYLw",
    "https://docs.google.com/forms/d/1ia6iv0UqklGBdfEoZZibXl3_DKFTE3cd3aO1aQ6B-jc",
    "https://docs.google.com/forms/d/12HTQM8C9w7lUd9f1DBSBAMVDas1Uu1_-lcdlPMX9NEE",
    "https://docs.google.com/forms/d/1sBF9OITitrZIaiXEl9Vf80TJzNdW9A7lN5Szy8XXGPk",
    "https://docs.google.com/forms/d/1KNBF933PTEDt2OkudDQdx8HePZn806YMufqgAe5S4tI",
    "https://docs.google.com/forms/d/1pqd3RRY6cDM63eDiHap2cY57vrIOmrvMVlstWsyiEcs",
    "https://docs.google.com/forms/d/12pjYOi_rFQ9EpoT4KhE9_vL36HUQCUwquC8F7S3TBIU",
            ],
            // 13
//Gruppo 20
"piattaforma_team_building": [
    "https://docs.google.com/forms/d/1T4dx2ndepYIVSrgw_PyZmoApkZbVEhLWJMG-oisyp2Q",
    "https://docs.google.com/forms/d/13KIjeTuMDlJl0eSkLS-sjZ6PwLaBRmVi08HBB6IYqFo",
    "https://docs.google.com/forms/d/1BpdTKfQDG1qa5ntLZzIvUptpl5GT5FWqHY6OheSNGOY",
    "https://docs.google.com/forms/d/1wC0KAH9hh_aYzhe_yMTwv1VdM4BjC36R5pKODRFxRgk",
    "https://docs.google.com/forms/d/1Cius7bVX2ainjl5Sx3RyD-BvB4A2LKowJ_mN2LmyEVE",
    "https://docs.google.com/forms/d/1REsQcRxwsNJcmGK88Ome1Kb28OANVysMD4EKHMjtzTM",
    "https://docs.google.com/forms/d/1cy2ZKAqmsnv34FeLtHP5ZbdinqPHTF58y2SH_IPCKiI",
    "https://docs.google.com/forms/d/1RJa6Si6Irm7u3o-qeHZ4E2UJsZ1PPQicmwwAkA0obQE",
    "https://docs.google.com/forms/d/1zED0L6GmKrXclBR87efNs2P9Tnzdre6fnZSV_BpS96o",
    "https://docs.google.com/forms/d/1sxmqP8w_i4u-RZkVBbO9TyZ-cDGrnC-M7x3DxDgG-AU",
            ],
            // 15
//gruppo 26
"carrello_intelligente": [
    "https://docs.google.com/forms/d/1DYBIz1nTCpqTM0pQnj__rQLLcvPDhnqrN42zt1NSAFs",
    "https://docs.google.com/forms/d/1iCVVj-7dUOs3u_1o7ZAjlZmhvvxG2Cwv-qM8Lv2TCDE",
    "https://docs.google.com/forms/d/17oJ4BxCeYokKcMogrQTlSUDraBXy_ts7ZNsPD7i7qzY",
    "https://docs.google.com/forms/d/1qpXfD19JoV2Uou76629C5D2G9nn1SYEpYI3IQVNeo4c",
    "https://docs.google.com/forms/d/1QQuviUGETOtx0BrsiJQLJ64CrkQwtzp06o-xBy-qqhY",
    "https://docs.google.com/forms/d/1IPaMlWLuUwaU2KNpBzsXVrsFiYuTKnZH8HFSde62XZg",
    "https://docs.google.com/forms/d/1uo3OXVg-CgfWpy5kks8oaQFRl7zhppuxj-KzdixbJwA",
    "https://docs.google.com/forms/d/129T439eU_uQgHhSmikGNk1wVNbs4l8G8GkUIFpIxaK0",
    "https://docs.google.com/forms/d/11m_tMSKsgAWFOc29G87xgDhrxz1HiT-97o9umqz_EIY",
    "https://docs.google.com/forms/d/1IQxyjEcCqfmM-EDbkbPDutZfwgu324oGkkundJ8r0cE",
            ],
    // 16
    //gruppo 6
    "maglietta_sostenibile": [
    "https://docs.google.com/forms/d/1wb6UnCQO_lqSL4jOFyB9uabaFDoQ5jDBg0BjW7Qp8bM",
    "https://docs.google.com/forms/d/1tcA0PhOehfdIwSE0Wcs8kdRDakJQjHfBJYtVgyzF2pE",
    "https://docs.google.com/forms/d/1DnSKQBFZjmGgAaBgyW-e5BtwdlCqfUrj_MSMwsRNWig",
    "https://docs.google.com/forms/d/14w6OSzDQ4A5BgcPV8tOqnRzd8SAuXdKgnxNtkbCA0R4",
    "https://docs.google.com/forms/d/1VfVUg5VvaV5HEuAcHKv68_4X76qfZJasd3Vodwb0M9U",
    "https://docs.google.com/forms/d/1Asz2dYL8ub71k-KWB5HKipaT66zwpsLaOCxeZoHPHEY",
    "https://docs.google.com/forms/d/1y_GR1uSXILOaJgUCBaGKKxNIkrNPoyfP7lRap9G43WY",
    "https://docs.google.com/forms/d/10PTsyrQFs8NintImqCdq3WSMYLAYyTpzV_FoOsFnG-w",
    "https://docs.google.com/forms/d/1KgGWYsIkPWL4DM3xlAzoOgCeJu-e0azEPhwcZwcImQk",
    "https://docs.google.com/forms/d/1lagH9LVQrjNciJHuboT6KvWEKfgR6s5ULxCXTaiJPE8",
            ],
            // 17
//gruppo 35
"dpi_auxetici": [
    "https://docs.google.com/forms/d/e/1FAIpQLSfF_Ab2MwxXqm-bQlbiniB-RieFOL-aMdfUnOHT8wsLNIOTsg",
    "https://docs.google.com/forms/d/e/1FAIpQLScbnIlruLZFlDcP-wbc5neQlbDTNzj9JTUgXVqBP3OIic07Tw",
    "https://docs.google.com/forms/d/e/1FAIpQLSfg3zdtuDwCRPVI0vzK8CsTIDwu7BFxlFfAIuAr6rEJWo7X8g",
    "https://docs.google.com/forms/d/e/1FAIpQLSdD_Zk1bb7Z6Rt0WWKP7QaN0Jg1t_OIhvaEs3nxwJZ0xVOb1A",
    "https://docs.google.com/forms/d/e/1FAIpQLSfNIo1kHSNV_nBtLxV3mrShYFeOZLvREwXRRVKz1Ljz5CZhiw",
    "https://docs.google.com/forms/d/e/1FAIpQLSfmjMmg0iBsMfg2kXrC28NaXMI5s2q8I1Lb9Zq4akVsR2gg4Q",
    "https://docs.google.com/forms/d/e/1FAIpQLSe5jrReKw_V8WDnWZUmRdfFanY2vPnXOrJkzu058RELbgqPVA",
    "https://docs.google.com/forms/d/e/1FAIpQLScG2stHMfLDZP-LKhxyDTX1sVNJbLxgrVv2pvD-FvzTVKc2Vw",
    "https://docs.google.com/forms/d/e/1FAIpQLSdlMkQQzpUmj8JheUVdJnVW44S3J3i6FugycGtxY7jFfB4PBA",
    "https://docs.google.com/forms/d/e/1FAIpQLSdoQ9totjaS6MDoTiV92JwRHYGGszNsx2CCta2WPEhIbiEwMg",
            ],
    // 18
    //gruppo 15
    "olografia_digitale": [
    "https://docs.google.com/forms/d/1ixCjKigBIaWNgdJRi2apBGjTlz64sDImp1JrWDYt_eY",
    "https://docs.google.com/forms/d/1-6TQ9U-5x45aHAqrQAsLumC6j8WjSacvqic85LuAB6o",
    "https://docs.google.com/forms/d/1iRSgtob6KGAL-ulG6CljO9sw0a86eClyQgKdUs6s8p4",
    "https://docs.google.com/forms/d/1idTrvzrXb1V0zjP3ljIZS-6WR-6oygrJ3nwV_UJZSuM",
    "https://docs.google.com/forms/d/11DVKW0qYkFQKP-7PnsOzmc7mFGTD1vOHEwCYQy_51wE",
    "https://docs.google.com/forms/d/1TzTV9iRm-LM9r_4_Cp0PPehoqdm42YCokmItUbVnM8U",
    "https://docs.google.com/forms/d/1OeKD4UjcaajkXfsyN-_bB_Da-Mm9NrXK1aF6d6pwkCM",
    "https://docs.google.com/forms/d/1pXwC7GrWNeiJwRFr2z5DN93WMwJvmGET69pda-VFMxc",
    "https://docs.google.com/forms/d/1U2ILNCpX2KnoeLDulEkkeaKP6Hg8Ay6d8bdfTKTbFKI",
    "https://docs.google.com/forms/d/1I6BsKOiKzwScm3lfE5VDh992yxcmLeNkPchTqLYPY5o",
            ],
    // 19
    //gruppo 29
    "giacca_in_pelle_da_scarti_alimentari": [
    "https://docs.google.com/forms/d/1DqH8Qlh7W3wSiIqWeslYIBMFOeGzTabZS0JA0QdsRqM",
    "https://docs.google.com/forms/d/1OvO8LrAwVpPOytSQUdsQWuI6CfMbh64bDEk-anupZCU",
    "https://docs.google.com/forms/d/1enfemtIOL4FSJC2agFJwv7Gz3S0sau7LsyftNiufMzE",
    "https://docs.google.com/forms/d/1erh4fABK8cdOb-ekexDL1AbjlBjbEmSgR26nnSzoZWo",
    "https://docs.google.com/forms/d/17ZmWPLlGmInkRuNmfFpHAlNTg4nenxPHaq9usYiA1hQ",
    "https://docs.google.com/forms/d/1taTJvZSEBlVO3tjGqBgRqScaO9GKm_udQyGlU2mshRg",
    "https://docs.google.com/forms/d/1D0qvhlZ1QNsEF2-SIgTCRbyZYV4XxgxGTlLHCv1k5Q8",
    "https://docs.google.com/forms/d/1uWzHiWmqomFWaoCUJuKVYh2wcPNWmOD9Lhl5FEnSM7s",
    "https://docs.google.com/forms/d/1fylhhKtoxfQlaD0Q_SYQhiyzqGBdgghtXJJ20JV1CRM",
    "https://docs.google.com/forms/d/1vByGIfbl57QrlwN-ENNjF7LEZVGi-aHRq119qHH6Rzg",
            ],
    // 20
    //Gruppo 27
    "smart_clothing_aptici": [
    "https://docs.google.com/forms/d/1HMd3ygLNNpdU4GoexnMDK_wDuKJ5rFooGNYF9Co1f6E",
    "https://docs.google.com/forms/d/1lHrtJRI6gtg986upIDybvObbheFwGp6TUyjeaQjYd2g",
    "https://docs.google.com/forms/d/17NYM7641wF1aWOF3IeqjSckff3CJ8W3IlesTwxjhHXk",
    "https://docs.google.com/forms/d/1KLISXqnJEPehPnV7IzBwWI4pQ_ovbmYMzwKHUeHa8Uo",
    "https://docs.google.com/forms/d/1cyEvbvyiQfOF-t1Q7s8p1t98jc9_ngHrMwWbv9fIpYA",
    "https://docs.google.com/forms/d/1d6nw-muIo6dx3ySCAym-oSKuBY5f62TwBQA7W1PaHV0",
    "https://docs.google.com/forms/d/1MTvjSuXBaSI-VfMaqkIeDIZEv-1JwHQPrXWMLokGZGQ",
    "https://docs.google.com/forms/d/1zr227Cjn47IN0IJw7MKXMqC0-HVg3XQuMxqBd_RO9Uw",
    "https://docs.google.com/forms/d/1YdOQFPsWSxIGVwR8vqRK4rNlSrozVRl-KIAxyoxV4_Y",
    "https://docs.google.com/forms/d/1xpUe85jH_Cyp1mVXBPvCnaL0OQpFEQDYXfz7lVVXFtY",
            ],
            // 21
//gruppo 28
"legno_trasparente_il_futuro_per_le_tue_finestre": [
    "https://docs.google.com/forms/d/1RSjybQeABrxzmJKlSFUHTmh3rEmPjVoY5C4AisCxy6U",
    "https://docs.google.com/forms/d/1ceDTUELg3HeTl7PNf1sxNssOeKnKqUiUjplbxv_5OJs",
    "https://docs.google.com/forms/d/1WuYFZeIf2ZzoTq0fEA8tfwDVvELh69ErRder9A7DiRI",
    "https://docs.google.com/forms/d/1_dVQwuOj-QAfD3z_dmFPe_WyqDEWZwfL8Akbr-G7fe0",
    "https://docs.google.com/forms/d/16t7heS_4j7FoY8Y7ppuQ7KECVVoV0pmCKHTD-eLZOHk",
    "https://docs.google.com/forms/d/1yXzpbY_UQaLO-UYnm_WAeXVGgzLxVtbyzBgmKALST1o",
    "https://docs.google.com/forms/d/1UYvVx-SoJ6oodZtH1pQRiHdNOxlgeE-Ip4RqLuI2wlE",
    "https://docs.google.com/forms/d/1P1mNGTEiaZ8HmJx6qty6rQYOTzQNYXCteHgznU2sWdA",
    "https://docs.google.com/forms/d/1-7fjTgZz4FkW-5mD8ILmiWpxg33MuYFmK6s5YTQlKZs",
    "https://docs.google.com/forms/d/1fXB2Q7OM-CLWLs1D12ckd_gp3bIh7aiswL-WF1IeXQY",
            ],
    // 22
    //Gruppo 39
    "imballaggi_in_micelio": [
    "https://docs.google.com/forms/d/1nXwLljoQ9h6BtXOaeNGSK33aKugaEPbznS44TIqO7E0",
    "https://docs.google.com/forms/d/1fQeGvdF_f0PDE1JDfu6DQaERMlj4SF7Tbu3D7sgMHaE",
    "https://docs.google.com/forms/d/1qW2ZqCbc6KElOSnwQs3uoiVQ53cZr5_M8BzKviJwHAo",
    "https://docs.google.com/forms/d/1hlMtW6EYdrt3LG74IYBhyJFPY9yukdV10pAnVT3iGNo",
    "https://docs.google.com/forms/d/1_jCdsoumshj9hvPJ7Ceojb_Edc1EZvznLoatTJYCT7k",
    "https://docs.google.com/forms/d/1-2jNO7NSpipSwdmz5UBehR5Q7pCX_0_LfxGGW20iQAc",
    "https://docs.google.com/forms/d/1ypLCii6dPKX493fT2vD7z7FCYAKKjvPxrCnrJGItojc",
    "https://docs.google.com/forms/d/1k_t3Rq18gEfFXcyEeblEBPeZmMV2bLqBN_Z7wQ4TGXs",
    "https://docs.google.com/forms/d/1jp6z3dt0N-65pMV78kHC2xe1ePt8_5QuAtLzWw4iQkU",
    "https://docs.google.com/forms/d/1StPn-WyljDA7pMHq8-og_X4EIIH2mwAl5-_AE9ZWsbY",
            ],

            // 23
//Gruppo 3 (1)
"smart_speaker_per_una_didattica_intelligente_studenti": [
    "https://docs.google.com/forms/d/1hjtZccM0nOjLIuxVmJLXR5JAUugnA-8CRrfYYmd-xLY",
    "https://docs.google.com/forms/d/1OFYuwS6e_kBVR4y30nW6lIEaNR8eDo_TtuCAp8USxy4",
    "https://docs.google.com/forms/d/1mamlCd6x5973fFKXPXERXUKmDgn-9V1YNwBDF7d9gOY",
    "https://docs.google.com/forms/d/1sRinw-MmQayAAz1MxK9YjN7ydiGeAKqCydLI0gP9CzQ",
    "https://docs.google.com/forms/d/14nXw23aGcSGQDkEWDQYBgMYwDUgh2VcWbnYu2oJOZ9Y",
    "https://docs.google.com/forms/d/1PIZNdMnMHaLHM3mPYtPyI3ZDFtW-WNd6gnrNpeVzRSY",
    "https://docs.google.com/forms/d/1NCNREJrSKyUTZimLms3GNqIPFrEAPvQF4eDqogRduFE",
    "https://docs.google.com/forms/d/1kZbiAGJGq7GQfNVy62Bap1DQuNvvlt_UbGqx0XGJdLk",
    "https://docs.google.com/forms/d/1YGobf6StVDWhULP4OIv1OKrgl927X65WHRNs1P5rcm4",
    "https://docs.google.com/forms/d/1e5dWtxVvnGJtJe3UfWRcyNIV7w2n5kHEpHZsM4zCJig",
            ],
    // 24
    //Gruppo 22
    "pavimentazione_da_scarti": [
    "https://docs.google.com/forms/d/1Gn_zrbTirGK4KBP5YhFf8Vn7Y2pLSZc7oxMn9XWBHvI",
    "https://docs.google.com/forms/d/1KzyvODCNjv2cecLJROYkqz9jLH_cXvHR4Men3YWdEJg",
    "https://docs.google.com/forms/d/13nyqcTZGWDtbO1bzNUqgnh4sjzexB65wy6uNL7Nlyg8",
    "https://docs.google.com/forms/d/1P9vd9c7J95eZCpi5e0I3hXZd327Cw4wZ0kamlcvxHOc",
    "https://docs.google.com/forms/d/1R9ls8XUicwfEeud-Hi6zBlQMuzQUKSIyhDiVnfSbz2o",
    "https://docs.google.com/forms/d/1Wkru5t1TpvxydN4qw_thF4ACC1S7fbsO48xG1VjMoLY",
    "https://docs.google.com/forms/d/1ek5M8A5ME45175ZTAIgsNSyWIa-kIoq5oS9PzdcfToU",
    "https://docs.google.com/forms/d/1TjY4gHlDFyv5tS0e6G1KBPlNihXfsY182RFdP22nW_s",
    "https://docs.google.com/forms/d/1nW-dXNQNvntE5JvFj4Wpk45XXiM8t-AhUuC6mXk3zJw",
    "https://docs.google.com/forms/d/1njLI49emjceOsO6KibQZjlu_AXxDrS-UwiE6GTvQt28",
            ],
            // 25
//Gruppo 21
"sacco_a_pelo": [
    "https://docs.google.com/forms/d/1WjvUgS_UD93HBsyPpb7Q0CKwUfU-qzBoEaL9MXe1JMM",
    "https://docs.google.com/forms/d/1iXCYIx70zoss5-3tF_wtuowd_40qHPiL1C2nih13uR8",
    "https://docs.google.com/forms/d/1lz1AJMShZhgVojsZh8GZxtfP7ITIPJdy0RlxJbVBjlc",
    "https://docs.google.com/forms/d/1U-sQDBVIENpFo9p9MSUaCJaHBLCeP4n7TVUocWX3oKk",
    "https://docs.google.com/forms/d/1V31UDE48GHvsi1lFaJMN1EEFSg1Ea1TOivnqkOfZ4qs",
    "https://docs.google.com/forms/d/1fSF1v-KKUpux_ceVvl5mt04VpZxWdAG9cZ2g6pC0_RY",
    "https://docs.google.com/forms/d/1PVWKx85kgSJFIVOwG6rEMTbuJbFu3w62K4MnO6zhMxo",
    "https://docs.google.com/forms/d/1e8YeGfbiv08K_G4YeGpWTqNaus5xjpy8Jg7sKS_Burg",
    "https://docs.google.com/forms/d/1DnEWYm9YAjnsudF-g6GQt7Ko8MBC0A1Hch_BEuE95pE",
    "https://docs.google.com/forms/d/1MKp7e5ZyyZ4PdQuxK2DJ-i2cfSNWvTNbyCfhip4beOk",
            ],
            // 26
//Gruppo 3 (2)
"smart_speaker_per_una_didattica_intelligente_docenti": [
    "https://docs.google.com/forms/d/1r4fNQkkw1FO-xb5Fa_XHFMsNdnnTrzd1MdnlS1Xk0J0",
    "https://docs.google.com/forms/d/1UiBw5ifIc7OxxHXOBa8K4k1qmQctQNMmNC4LKhENHO4",
    "https://docs.google.com/forms/d/1XzippBofbmlLb6XZMgt4yAfG1fog79mppaNlR_0U98k",
    "https://docs.google.com/forms/d/11xB8YYUdAZ4rfGUxIdgHvnI-ozOw_Ilbgvx91RGgEjg",
    "https://docs.google.com/forms/d/1PPcDi7bm4bDXLPknXk3Yk2G43Fr8ZQDrk6p4R4tVKkI",
    "https://docs.google.com/forms/d/1DBQ9Gz4nlijM68RBSSblva-yhVRm2JUxUN9jDve5_cY",
    "https://docs.google.com/forms/d/1HkSMrTAwitap3RrPWEXI46H0-K2XXf7ZmhLYYIbXpAw",
    "https://docs.google.com/forms/d/1rUPypvCqkCHGusErTjq-Dtfa3V15bVq6TJ_Z8H7IvCo",
    "https://docs.google.com/forms/d/1SFHWCFQAJZN33yzQblo4YwUXMyl_pTAzNevaj-OjERc",
    "https://docs.google.com/forms/d/165I1zVGO9dG-F42C7jqqIIVwr8Q32ewjvKp6pnUWbP0",
            ],
            // 27
//Gruppo 3 (3)
"smart_speaker_per_una_didattica_intelligente_genitori": [
    "https://docs.google.com/forms/d/1tW1PaxQ40sxslN6l7YoxFHCHa_Vp7tzro8NXmZNnYos",
    "https://docs.google.com/forms/d/108aZS2AfA1tHs38cp-HNm7NYVEivC0ASjww0kmy0ims",
    "https://docs.google.com/forms/d/1NbEGWY0Ersn8Z2FJzsbkPg-Nbu0fE8OMhQZ1gCS3Nyo",
    "https://docs.google.com/forms/d/1VniYwFNoyug9eNbMsZ0v9kcctZqQ2Y7ZwgQ3SfaTdSU",
    "https://docs.google.com/forms/d/1eCE18kY8lA9AKax-SETuMtwBOGUu4MAJIT5myPOLmPg",
    "https://docs.google.com/forms/d/1FemuW-NuGUdhHKdelynx48DR4WO-EykWZTsyn2-rq0Y",
    "https://docs.google.com/forms/d/1NM6zJudpcjL234hmafRpN2Yoqa6Je7fOgwwfpWkuxvQ",
    "https://docs.google.com/forms/d/1_38fGkZ15ck29lZHrrbpL4gtBOqyBQVqYipkiIMsi3U",
    "https://docs.google.com/forms/d/1k9VIpEyyIwt4766a9JQU9GYlBWURhyd2yi4L9f_0EWo",
    "https://docs.google.com/forms/d/135NQuOpXiA3tI1v0f1PNPagLUQgQm6wspfNclP_YUAc",
            ],
            // 28
//Gruppo 32
"agritech": [
    "https://docs.google.com/forms/d/1ImG9ATHSBPNifyObpcocETTfPIXbBDyz6RetBdPrnr0",
    "https://docs.google.com/forms/d/1Ps8hpoqABx5qGKONAcYsxEmK_W9NEQS4v3Qjh7g1yBg",
    "https://docs.google.com/forms/d/1puMA28Zuc1tjUNje-T4dpcZ3qVkhayjjnSfeM2eZNI4",
    "https://docs.google.com/forms/d/1gjOO_2lSW4CgD31FPbxjv7WqYs6GAF_085yzQBWvvyo",
    "https://docs.google.com/forms/d/1uAfaY3mqs5NZ8wi6qZcN0ZQBAr_P5PS9w7wSQy1JUCI",
    "https://docs.google.com/forms/d/1ZVjIET8ntwHFflmi7K11EDulhB_CQwrL_5_m32K_ibU",
    "https://docs.google.com/forms/d/1xLGpIODqc9LNAX70lW0V2skdqGwX_V9qJlGQP2xBVSc",
    "https://docs.google.com/forms/d/1V3XLEQkMd_wKaN4GCPqhMeZ5Gs8EcOAVPCT2u4RfxGU",
    "https://docs.google.com/forms/d/1wv71Qn9cdMkj7sfR-6uibQViYfIjh3VvQNLnTorSjM4",
    "https://docs.google.com/forms/d/1bRRVN36wiQbuYtWvE4nqEt_ZTgoazmefpMQ7NMYWM94",
            ],
            // 29
//Gruppo 38
"device_per_non_udenti": [
    "https://docs.google.com/forms/d/1A5RkqwllkPJKEw3zArsLj04iua8Y72PT_oLz3HCVv6g",
    "https://docs.google.com/forms/d/1kX3kdg4399bsaCSEEhy7-uom4FJcEkzWK_vkbau-dQc",
    "https://docs.google.com/forms/d/1ixPOBHPOkXfwbPCTuv-T6G8MjciI1jLpsNqQDJTRvX0",
    "https://docs.google.com/forms/d/1hhpjmyvmOrCI_XExTSgkiEA8cVzg0_imzG7GPFKPz4I",
    "https://docs.google.com/forms/d/1hrXU1msHPpeR7k7gE3DU8kcf8GPEgtLbwHMD49yubOg",
    "https://docs.google.com/forms/d/16EQaZ0vcakbuDWWVCJMytMdU21YKI8dxRjTYmydTlAk",
    "https://docs.google.com/forms/d/1B4mxHDnVrcnapu0NtShHY1AZfp-_UYrV-LuQPidwSek",
    "https://docs.google.com/forms/d/1RaSP7it22fkw5M8IRaJILBZqApjEsaHVQViDtbP3hzU",
    "https://docs.google.com/forms/d/1kuRVH2h8Fhps4tflLup_AM3Yl1s7p1xcvBpoj7Ev7Ho",
    "https://docs.google.com/forms/d/15SLbCGBZuXSBKZtbQ3OPlLsAmySzXtvCEmW4BMZZGKA",
            ],
            // 30
//Gruppo 46
"giacca_in_tyvek": [
    "https://docs.google.com/forms/d/1Jqx0pkHGmYOObGP_JkxEmyd22OL67Ojt62aygKeZZHg",
    "https://docs.google.com/forms/d/1cQUmuKeoGtN7W5ycAvmp3H8cj__iqa54RNEUtBqxj-4",
    "https://docs.google.com/forms/d/1lq3yoLNhVMZlfVZOE099OTLz41mr_ZWpM7wEkXxlvwg",
    "https://docs.google.com/forms/d/1_j0vCOOexHv7gJzNlKgV80a3KItGuEU8-50v8qeRhiM",
    "https://docs.google.com/forms/d/1LTTM7uKO_tpE-MaqUacvgnhAM4t87g7hZ3YAxCUDISs",
    "https://docs.google.com/forms/d/1Viu5AzFnB_VN2XO5gJIHs2NrVJEYYm58CtbGOFFusoo",
    "https://docs.google.com/forms/d/1gMO4Wc4UUQuBUmS-xAt6uVZnzwsUPLvKwp8yCEAj9KI",
    "https://docs.google.com/forms/d/1s4QOh6XFdTvXn4Z4jp9Sovpt7sLecpQwPqQ4alzh-Jk",
    "https://docs.google.com/forms/d/1APbkujWEBgbfEOaUKkhGms1FTe_F_PGnuvffXuFjPf4",
    "https://docs.google.com/forms/d/1c4yAm8O6mnnl44fEG9Te6XisqFjRfekH8sEFzcuX318",
            ],
            // 31
//Gruppo 33
"podcast_digital_advertising": [
    "https://docs.google.com/forms/d/1_oZXyU7otQGzk9voSAK5qQ_jXASS-i5gSov0hu5_-a0",
    "https://docs.google.com/forms/d/1DjhMXrpENIPDN7x5z6ZRHV7hwXuFyHoGIUPGFsxBYgU",
    "https://docs.google.com/forms/d/156CCoAf-8wUBXwgVL5W85at_omwH9CtzPZwa0RGWOuM",
    "https://docs.google.com/forms/d/1EU7CaLe1gNR_XoQ1khFJriMsARu-VuFpnZ9pQ7zwSBw",
    "https://docs.google.com/forms/d/1Tb8GsT8_7OcjasG2W2nl5g2nLtYS3yvAjPUM5vQnHX0",
    "https://docs.google.com/forms/d/1ljqUbT4fL1ym6C85QEFFTm5XV2soNXfqFvJkfQVF5oo",
    "https://docs.google.com/forms/d/1F-4XOICn4pSoZDtIashtvc7MnucvshaWtTQk4xROKKg",
    "https://docs.google.com/forms/d/1Czrp0W-swQilW1QfFVsQhnHgw58gFfam3mN8ZNsFHa8",
    "https://docs.google.com/forms/d/1A8nJ12cyPysLNoZyiea0DGpJ3bOJ1yty6BJdZ2YFD1E",
    "https://docs.google.com/forms/d/10nVz_JsnbwVhTuf2CR59lng1YKyUCS8dQNdYwvXQr2Y",
            ],
};



var stato = false;





function f() {



    const frame = document.createElement("IFRAME");   // Create a <button> element
    frame.id="form" ;
    document.body.appendChild(frame);
    // frame.style["opacity"] = 0;
    frame.style["height"] = "0px";



    //  altezza = window.screen.height;

    if (key && !link[key]) {        // se key è definita && link[key] è indefinita  = se key esiste ma non c'è nell'elenco
    document.getElementById("idbody").style.animation = "none";

        console.log("sondaggio non trovato 404")
        nontrovato();
    document.getElementById("titolo").innerHTML = "404";


    }
    if (!key && !link[key]) {
        console.log("HOME");
    document.getElementById("idbody").style.animation = "none";
    document.getElementById("titolo").innerHTML = "Sondaggio";

    home();


    }
    if (key && link[key]) {
        richieste();
    document.getElementById("titolo").innerHTML = "Sondaggio "+ key.replace(/_/gi, " ");

    }

}
function richieste() {
    setTimeout(() => {  // bypass se impiega troppo tempo a caricare
        if (!stato) {
            risposte = [0,0,0,0,0,0,0,0,0,0];

            console.log("bypass");
            mostra_form();  
        }

    }, 8000);



    // a mali estremi

    for (let i = 0; i < (link[prop].length); i++) {

        $.ajaxSetup({
            scriptCharset: "utf-8", //or "ISO-8859-1",
            contentType: "application/json; charset=utf-8"
        });
        var linkanalitycs = link[prop][i] + "/viewanalytics";
        $.getJSON("https://api.allorigins.win/get?url=" +
        encodeURIComponent(linkanalitycs) + "&callback=?",
        // $.getJSON("https://api.allorigins.win/get?url=" +
            // encodeURIComponent(linkanalitycs) + "&callback=?",
            function (data) {

                var c = $(data.contents).find("script")[0].innerHTML;
                
                eval(c);
                risposte[i] = ANALYTICS_LOAD_DATA_[5];


                if (check()) {  // se l'array di risposte è pieno 
                    mostra_form()
                }
            });

        ;


    }

}

function mostra_form() {
    // console.log($(document).height());
    // var altezza = 1920;
    stato = true;
    
    // console.log(altezza);

    
    
    document.getElementById("form").width="100%" ;
    // frame.style.height="-webkit-fill-available" ;
    // frame.style.height="fill-available" ;
    // frame.style.height="-moz-available" ;
    document.getElementById("form").frameborder="0" ;
    document.getElementById("form").marginheight="0" ;
    document.getElementById("form").marginwidth="0";
    // frame.hidden = true;

    

    index_form_minore = minore(risposte);

    // var altezza = window.screen.height;
    // console.log($(document).height());
    // var  altezza = (window.screen.height).toString() + "px";

    // console.log("altezza:" + altezza);

    document.getElementById("form").style.height= ($(window).height() - 10) + "px"; // setto l'altezza del frame uguale all'altezza dello schermo
    
    if (index_form_minore != undefined) {
        document.getElementById("form").src = link[prop][index_form_minore] + "/viewform?embedded=true";
        
    }   
    // document.getElementById("form").style["height"] = "-webkit-fill-available";
    
    document.getElementById("idbody").style.animation = "none";
    // document.getElementById("form").style["opacity"] = 1 ;
 
 
 

    // console.log(risposte);
    // setTimeout(() => {
    //    var sommarisposte = 0;
    //    for (let i = 0; i < risposte.length; i++) {
    //        sommarisposte += risposte[i];
           
    //    }
    //    console.log(sommarisposte); 
    // }, 1000);
    
}

function minore(a) {

    var minimo = Math.min.apply(0, a); // trova il minor numero di risposte
    var listaminori = new Array;    // creo una lista con un solo elemento

    
    console.log(a);
    console.log("minimo: " + minimo);
    

    for (let i = 0; i < a.length; i++) {
    

        if (a[i] == minimo) { // se ad i c'è un minore 
    console.log(a[i] + " è un minimo ");

            listaminori.push(i);
    console.log("lista dei minori " + listaminori);

        }

    }
    var min = 0;
    var max = listaminori.length - 1;
    console.log("lista dei minori è lunga " + listaminori.length);

    // if (max == 1) {
    //     return
    // }
    var indice_estratto = Math.round(Math.random() * (max - min) + min) ;
    console.log("indice_estratto "+ indice_estratto);
    console.log("ritorna " +listaminori[indice_estratto]);
    
    return listaminori[indice_estratto];
    // genero un numero random da 1 a listaminori lenght

}
function check() {


    for (let i = 0; i < risposte.length; i++) { // per ogni elemento controlla che non sia vuoto e che il numero di elementi sia al completo
        if ((Number.isInteger(risposte[i]) && risposte.length == link[prop].length)) {
            
            return true;
        }
        return false;

    }
}

function home() {
    const h1 = document.createElement("H1");
    const messaggio = document.createElement("P");
    const div_messaggio = document.createElement("DIV");
    // messaggio.innerHTML = "AAA sto cercado di risolvere un bug che bloccava tutto. Per adesso i sondaggi vengono caricati in modo random";
    messaggio.innerHTML = "Premendo sul pulsante di fianco al link compariranno i risultati dei sondaggi (se si preme poi sui singoli numeri si viene reindirizzati al sondaggio in questione)";
    messaggio.style["margin"] = "0px"
    // div_messaggio.style["margin"]="20px";
    h1.innerHTML = "Elenco sondaggi";
    document.body.appendChild(h1);
    document.body.appendChild(document.createElement("BR"));
    document.body.appendChild(div_messaggio).appendChild(messaggio);
    document.body.appendChild(document.createElement("BR"));
    document.body.appendChild(document.createElement("BR"));

    document.body.style["padding"] = "20px";


    for (let i = 0; i < Object.keys(link).length; i++) {

        var key = Object.keys(link)[i];
        const button = document.createElement("BUTTON"); 
        
        const a = document.createElement("A");   
        const p = document.createElement("P");
        const div1 = document.createElement("DIV"); 
        // const p2 = document.createElement("P");
        const anullo = document.createElement("A");   

        const div2 = document.createElement("DIV"); 


        a.href = "?"+key;
        p.innerHTML = key.replace(/_/gi, " ");      
        p.style = "display: inline; margin-top: 10px";
        anullo.id = "somma"+key;

        // p2.id = key;
        div1.id = "div1_"+key;
        div2.id = "div2_"+key;
        // div2.style["margin-top"] = "0px";
        div2.style["line-height"] = "1.5";
        div2.style["line-break"] = "anywhere";
        button.className ="risultati";
        button.innerHTML = "v";
        button.style = "margin: 10px";
        button.setAttribute("onclick",'richiesteHome("' + key + '",this)'); 
        // p2.innerHTML = "0";
        // p2["hidden"] = "true";
        anullo.innerHTML = "";
        anullo["hidden"] = "true";


        document.body.appendChild(div1).appendChild(a).appendChild(p);
        document.body.appendChild(div1).appendChild(button);
        // document.body.appendChild(div1).appendChild(p2);
        document.body.appendChild(div1).appendChild(div2).appendChild(anullo);
        document.body.appendChild(document.createElement("BR"));
        


    }
   
    
    
    // recensioni();
    // crediti();

}
function crediti() {
    for (let i = 0; i < 10; i++) {
    document.body.appendChild(document.createElement("BR"));
        
    }

    const div_crediti = document.createElement("DIV");
    const p_crediti = document.createElement("P");
    const a_crediti = document.createElement("A");
    const button_crediti = document.createElement("BUTTON");

    div_crediti.className = "pie";
    p_crediti.innerHTML = "Sostieni questo duro lavoro:";
    p_crediti.className = "credit";
    a_crediti["href"] = "https://bit.ly/3cPlhXS";
    button_crediti.className = "donazione";
    button_crediti.innerHTML =  frasi_donazione[Math.floor(Math.random() * frasi_donazione.length)];


    document.body.appendChild(div_crediti);
    document.body.appendChild(div_crediti).appendChild(p_crediti);
    document.body.appendChild(div_crediti).appendChild(a_crediti).appendChild(button_crediti);
    for (let i = 0; i < 3; i++) {
        document.body.appendChild(div_crediti).appendChild(document.createElement("BR"));
            
        }
}
function recensioni() {

    for (let i = 0; i < 5; i++) {
        document.body.appendChild(document.createElement("BR"));
            
        }
        document.body.appendChild(document.createElement("HR"));
        for (let i = 0; i < 2; i++) {
            document.body.appendChild(document.createElement("BR"));
                
            }
    var cit = ["Miglior sito dell'anno", "Genio!", "Questo sito è molto italiano",  "Ma te le scrivi da solo ste cose?", "Sì"];
    var fonte = ["Tenente Colombo", "Renè Ferretti", "Stanis La Rochelle", "Persona normale", "Io" ]
    var div = new Array;
    var p_cit = new Array;
    var p = new Array;
    div[0] = document.createElement("DIV");
    // div[0].style = "display: flex;";
    for (let i = 0; i <5; i++) {
        div[i+1] = document.createElement("DIV");
        p_cit[i] = document.createElement("P");
        p[i] = document.createElement("P");
        div[i+1].className = "div_cit";
        p_cit[i].className = "p_cit";
        p[i].className = "p_cit_fonte";
        p_cit[i].innerHTML = '"' + cit[i] + '"';
        p[i].innerHTML = fonte[i];
        
        document.body.appendChild(div[0]).appendChild(div[i+1]);
        document.body.appendChild(div[0]).appendChild(div[i+1]).appendChild(p_cit[i]);
        document.body.appendChild(div[0]).appendChild(div[i+1]).appendChild(p[i]);
    }
  
        document.body.appendChild(document.createElement("BR"));
            
  document.body.appendChild(document.createElement("HR"));

}


function nontrovato() {
    document.body.appendChild(document.createElement("BR"));
    document.body.appendChild(document.createElement("BR"));
    document.body.appendChild(document.createElement("BR"));
    document.body.appendChild(document.createElement("BR"));
    document.body.appendChild(document.createElement("BR"));
    document.body.appendChild(document.createElement("BR"));
    document.body.appendChild(document.createElement("BR"));
    const h2 = document.createElement("H2"); 
    const a = document.createElement("A");   
    const p = document.createElement("P"); 
    const h1 = document.createElement("H1"); 

    h2.innerHTML = "404";
    h1.innerHTML = "Sondaggio non trovato";
    document.body.style["text-align"] =  "center";
    document.body.style["background-color"] =  "#ff2f50";
    h1.style["color"] = "#ffffff";
    h2.style["color"] = "#ffffff";
    p.innerHTML = "Vai alla home";
    a.style["color"] = "#ffffff";
    a.href = "./";

    document.body.appendChild(h2);
    document.body.appendChild(h1);

    document.body.appendChild(document.createElement("BR"));
    document.body.appendChild(document.createElement("BR"));

 

    document.body.appendChild(a).appendChild(p);


}


function richiesteHome(a,b) {
    var risultati = new Array(link[a].length);
    console.log(b);
    for (let i = 0; i < (link[a].length); i++) {

        
        $.ajaxSetup({
            scriptCharset: "utf-8", //or "ISO-8859-1",
            contentType: "application/json; charset=utf-8"
        });
        var linkanalitycs = link[a][i] + "/viewanalytics";
        $.getJSON("https://api.allorigins.win/get?url=" +
            encodeURIComponent(linkanalitycs) + "&callback=?",
            function (data) {

                var c = $(data.contents).find("script")[0].innerHTML;
                eval(c);
                risultati[i] = ANALYTICS_LOAD_DATA_[5];

                // console.log(i);

                // console.log(risposte[i]);
                console.log(checkHome(a, risultati));

                const a1 = document.createElement("A");
                const div1 = document.getElementById("div1_"+a);
                const div2 = document.getElementById("div2_"+a);

                div2.style["margin"] = "10px";
                a1.href = link[a][i] + "/viewform";
                a1.style["margin"] = "10px";
                a1.innerHTML = risultati[i];
                div1.appendChild(div2).appendChild(a1);


                if (checkHome(a, risultati)) {  // se l'array di risposte è pieno 
                   mostraRisposteHome(a, risultati, b);
                }
            });


        ;


    }

}
function mostraRisposteHome(a,  risultati, b) {
    // var miopara = document.getElementById(a);
    // var p = document.createElement("P");

    // miopara.innerHTML = risultati;
    // miopara["hidden"] = false;
    var somma  = 0;
    for (let i = 0; i < risultati.length; i++) {
        somma += risultati[i];
        
    }
    document.getElementById("somma"+a).innerHTML = "totale: "+ somma;
    document.getElementById("somma"+a).removeAttribute("hidden");
    document.getElementById("somma"+a).style= "margin: 10px;"
    b.style["opacity"] = 0;

    // document.body.appendChild(miodiv).appendChild(p);
    

    

}


function checkHome(a, risultati) {


    for (let i = 0; i < risultati.length; i++) { // per ogni elemento controlla che non sia vuoto e che il numero di elementi sia al completo
        if ((Number.isInteger(risultati[i]) && risultati.length == link[a].length)) {
            
            return true;
        }
        return false;

    }
}
// function name() {
//     //document.getElementsByClassName("freebirdFormviewerViewResponseLinksContainer")[0].hidden = true
//     const stile = document.createElement("STYLE");
//     stile.innerHTML = "div.freebirdFormviewerViewResponseLinksContainer{        opacity: 0;    }"
//     document.body.appendChild(stile);
//     // setTimeout(() => {

//     // }, 2000);
// }


