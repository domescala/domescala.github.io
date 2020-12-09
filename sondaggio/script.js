console.log("ciaone");
var n_link = 0;
var form_minore = 0;

var index_form_minore = 0;
var risposte = new Array();
var url = document.URL;

var key = url.split("?")[1];
// var altezza = window.screen.height; 
// var altezza = "1920px"; 



// console.log(url);
// console.log("chiave " +key)

var prop = key;

var link = {
// 1
//note
"tenda_da_campeggio_innovativa": [
"https://docs.google.com/forms/d/1mwQvflYLPuJimfTQSs_22qfKS64QRmllZbC7s1nD9Ek",
"https://docs.google.com/forms/d/1RYb7rwZAD_VZwIE2j9g7JfcTEBrY9FhAtjHRlpVhuvs",
"https://docs.google.com/forms/d/1dQRvPfKtH4McEEnU1LjCy5OivuVbaf6tkrlAt079el0",
"https://docs.google.com/forms/d/1O5Dd7Tv-_szDg-n3M5wZ-AkMadzQIWlc3vK2hEDAakI",
"https://docs.google.com/forms/d/1hyoHuL9TeKjXP3v-PCeoFADwOeyGf9tEmEHoHZ7g7eI",
"https://docs.google.com/forms/d/1rB2GXpd8MLnTmrSkitmd7sP9XCayFPu_Wg85BzTSTxI",
"https://docs.google.com/forms/d/1NiIlDHxet-SBf22VnrHlquxv8AdjgUNpXdj7vabvUD8",
"https://docs.google.com/forms/d/1RMFIHcPW5-lihOV_FY6eqlBpElwpm1IpDXntttEnzmU",
"https://docs.google.com/forms/d/1pmDiu5aDyrqlVjMRpCEs7S-WsHGeSrWtchuSARHslVc",
"https://docs.google.com/forms/d/1jF3MGNRn9MLZyKMS-_XKxlPweZ2dDTmKlKJQG6Y9EkI",
],
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
};









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
    
    for (let i = 0; i < (link[prop].length); i++) {

        $.ajaxSetup({
            scriptCharset: "utf-8", //or "ISO-8859-1",
            contentType: "application/json; charset=utf-8"
        });
        var linkanalitycs = link[prop][i] + "/viewanalytics";
        $.getJSON("https://api.allorigins.win/get?url=" +
            encodeURIComponent(linkanalitycs) + "&callback=?",
            function (data) {

                var c = $(data.contents).find("script")[0].innerHTML;
                eval(c);
                risposte[i] = ANALYTICS_LOAD_DATA_[5];

                console.log(i);

                console.log(risposte[i]);
                console.log(check());

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
    

    document.getElementById("form").src = link[prop][index_form_minore] + "/viewform?embedded=true";
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
    messaggio.innerHTML = "Premendo sul pulsante di fianco al link compariranno i risultati dei sondaggi (se si preme poi sui singoli numeri si viene reindirizzati al sondaggio in questione";
    messaggio.style["margin"] = "0px"
    div_messaggio.style["margin"]="20px";
    h1.innerHTML = "Elenco sondaggi";
    document.body.appendChild(h1);
    document.body.appendChild(document.createElement("BR"));
    document.body.appendChild(div_messaggio).appendChild(messaggio);
    document.body.appendChild(document.createElement("BR"));
    document.body.appendChild(document.createElement("BR"));




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
    document.body.appendChild(document.createElement("BR"));
    document.body.appendChild(document.createElement("BR"));

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
    var risultati = new Array(10);
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


