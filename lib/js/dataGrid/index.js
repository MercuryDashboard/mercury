var scenarioData = [{
        "_id": {
            "$oid": "557578cb7355686aed000007"
        },
        "guid": "684e1399-9443-4d18-87f8-423b4af4fad4",
        "lastEditUser": "Chuck Liu",
        "lastUpdateTime": {
            "$date": "1458205045632"
        },
        "author": "Gilseon",
        "scenarioName": "(0609)RoundingFactor&CriticalRatio&OrderFrequency",
        "scenarioDesc": "The larger the CR, the bigger priority (duplication skus exist)",
        "production": false,
        "rules": [
            {
                "active": true,
                "filterRef": "22c3a1f6-0eec-40a5-a314-3802641a428f",
                "ruleName": "SEOUL_ROQ≥CQ_F≥0.4:::up",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "a3cf83c0-6bbd-4568-8b9f-2b3def32a8ce",
                "ruleName": "SEOUL_ROQ≥CQ_F<0.4:::down",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Off",
                    "value": "ROUND_OFF"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "36a8a552-0cb8-4f2b-8432-fd6a9320c7f3",
                "ruleName": "SEOUL_ROQ<CQ:::up",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "a06f65ca-a6b7-4a4a-b613-cd704a4f0892",
                "ruleName": "DAEGU:::down",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Off",
                    "value": "ROUND_OFF"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "4c3daba9-84c8-42d9-8a01-781eeebe2d83",
                "ruleName": "CR Override_1)LowVDP(all)_0.97",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.97,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "efc611d5-c376-4195-8a58-0937882682d3",
                "ruleName": "CR Override_1)LowVDP(all)_0.95",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.95,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "91e0fcac-f282-4a6d-a4f2-2e9ef4d52acf",
                "ruleName": "CR Override_2)Top100_HHS_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "2243c01d-6433-4213-8d72-dc4b7a1378cb",
                "ruleName": "CR Override_2)Top100_Pantry_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "d12e94d0-047e-41cf-bc17-94c72f65f3c4",
                "ruleName": "CR Override_3)Maple(all)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "353777a7-07ed-4a23-8c62-338d2af0f480",
                "ruleName": "CR Override_4)Core_Baby(Diapering&Formula)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "90b9074c-7ed9-49e8-a8c6-65694a6e7b35",
                "ruleName": "CR Override_5)Promotion(all)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": null,
                "ruleName": "Rule_2016-3-17_16:57:6_Chuck Liu",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Network allocation",
                    "value": "NETWORK_ALLOCATION"
                },
                "action": {
                    "display": "Update FC",
                    "value": "UPDATE_FC"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            }
        ]
    },
    {
        "_id": {
            "$oid": "55ece8b7735568672f000003"
        },
        "guid": "891911c6-3671-469f-979e-fa78005e5f19",
        "lastEditUser": "CHLOE",
        "lastUpdateTime": {
            "$date": "1441589431196"
        },
        "author": "CHLOE",
        "scenarioName": "2_TEST_(*0904~)_36W_Scenario_TEST",
        "scenarioDesc": "The larger the CR, the bigger priority (duplication skus exist) / H&B,Pantry Top 300_2days",
        "production": false,
        "rules": [
            {
                "active": true,
                "filterRef": "1fc19fdb-62eb-4f52-ab57-b6bc92ddf811",
                "ruleName": "Rounding_1)SEOUL_roundup",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "06bc1670-5e67-42e6-89f6-e26d649dd0f0",
                "ruleName": "Rounding_2)DAEGU_roundup",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": null,
                "ruleName": "Rule14_2015-7-7_16:38:1",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Network allocation",
                    "value": "NETWORK_ALLOCATION"
                },
                "action": {
                    "display": "Update FC",
                    "value": "UPDATE_FC"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            }
        ]
    },
    {
        "_id": {
            "$oid": "55fc5e1f73556842bf000001"
        },
        "guid": "4fc62a62-b238-4b6d-9ec7-97b13d34e9e7",
        "lastEditUser": "Yang Liu",
        "lastUpdateTime": {
            "$date": "1457086429518"
        },
        "author": "anonymous",
        "scenarioName": "Test Scenario 2",
        "scenarioDesc": "Testing",
        "production": false,
        "rules": [
            {
                "active": true,
                "filterRef": "88bcb643-16b4-4043-b7f7-d5d5321cb417",
                "ruleName": "Case rounding factor rule",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.97,
                "horizonAdjust": null
            }
        ]
    },
    {
        "_id": {
            "$oid": "557165347355686aea000005"
        },
        "guid": "b51f0572-cbfe-41f7-9509-bd891bdd9adc",
        "lastEditUser": "Gilseon",
        "lastUpdateTime": {
            "$date": "1433497457902"
        },
        "author": "Gilseon",
        "scenarioName": "(0605)RoundingFactor&CriticalRatio&OrderFrequency",
        "scenarioDesc": "The larger the CR, the bigger priority (duplication skus exist)",
        "production": false,
        "rules": [
            {
                "active": true,
                "filterRef": "22c3a1f6-0eec-40a5-a314-3802641a428f",
                "ruleName": "SEOUL_ROQ≥CQ_F≥0.4:::up",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "a3cf83c0-6bbd-4568-8b9f-2b3def32a8ce",
                "ruleName": "SEOUL_ROQ≥CQ_F<0.4:::down",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Off",
                    "value": "ROUND_OFF"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "36a8a552-0cb8-4f2b-8432-fd6a9320c7f3",
                "ruleName": "SEOUL_ROQ<CQ:::up",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "a06f65ca-a6b7-4a4a-b613-cd704a4f0892",
                "ruleName": "DAEGU:::down",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Off",
                    "value": "ROUND_OFF"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "c80a9d33-a335-43ff-aa51-f7c9fbf5c0b7",
                "ruleName": "CriticalRatioOverride_LowVDP(all)_0.97",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.97,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "54f4aa4e-de51-453f-9a69-77030831f2d7",
                "ruleName": "CriticalRatioOverride_Top100_HHS_0.97",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.97,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "b332ce9d-20ee-41cd-98be-19a325196e2c",
                "ruleName": "CriticalRatioOverride_Top100_Pantry_0.97",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.97,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "929802cc-e1c0-41ed-8ca9-8eddbbe455d3",
                "ruleName": "CriticalRatioOverride_LowVDP(all)_0.95",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.95,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "d41af46b-e945-400a-891a-f7a1dae45770",
                "ruleName": "CriticalRatioOverride_Top100_HHS_0.95",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.95,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "693c857d-d55e-4f46-86d2-6cc472570f78",
                "ruleName": "CriticalRatioOverride_Top100_Pantry_0.95",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.95,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "74c72421-a0c5-449c-9e62-0af685ad201c",
                "ruleName": "CriticalRatioOverride_Top100_Baby_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "0a86dc31-b608-4a4e-8f40-aa4f6c604851",
                "ruleName": "CriticalRatioOverride_Maple(all)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "0f46ce07-6739-4259-99cb-14e87b2e0824",
                "ruleName": "CriticalRatioOverride_Top100_HHS_0.92",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.92,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "f8bd7b24-574d-41ba-9439-c2835d5e9f4d",
                "ruleName": "CriticalRatioOverride_Top100_Pantry_0.92",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.92,
                "horizonAdjust": null
            }
        ]
    },
    {
        "_id": {
            "$oid": "557576f37355686ad8000005"
        },
        "guid": "3cea78f5-d54e-4b6c-9e91-5ac921af4294",
        "lastEditUser": "Shi Jiaqing(Ivan/Ivan)",
        "lastUpdateTime": {
            "$date": "1458102686457"
        },
        "author": "Do no",
        "scenarioName": "Test_Scenario_DO NOT DELETE_(0605)RoundingFactor&CriticalRatio&OrderFrequency",
        "scenarioDesc": "The larger the CR, the bigger priority (duplication skus exist)",
        "production": false,
        "rules": [
            {
                "active": true,
                "filterRef": "22c3a1f6-0eec-40a5-a314-3802641a428f",
                "ruleName": "SEOUL_ROQ≥CQ_F≥0.4:::up",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "a3cf83c0-6bbd-4568-8b9f-2b3def32a8ce",
                "ruleName": "SEOUL_ROQ≥CQ_F<0.4:::down",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Off",
                    "value": "ROUND_OFF"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "36a8a552-0cb8-4f2b-8432-fd6a9320c7f3",
                "ruleName": "SEOUL_ROQ<CQ:::up",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "a06f65ca-a6b7-4a4a-b613-cd704a4f0892",
                "ruleName": "DAEGU:::down",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Off",
                    "value": "ROUND_OFF"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "c80a9d33-a335-43ff-aa51-f7c9fbf5c0b7",
                "ruleName": "CriticalRatioOverride_LowVDP(all)_0.97",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.97,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "54f4aa4e-de51-453f-9a69-77030831f2d7",
                "ruleName": "CriticalRatioOverride_Top100_HHS_0.97",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.97,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "b332ce9d-20ee-41cd-98be-19a325196e2c",
                "ruleName": "CriticalRatioOverride_Top100_Pantry_0.97",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.97,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "929802cc-e1c0-41ed-8ca9-8eddbbe455d3",
                "ruleName": "CriticalRatioOverride_LowVDP(all)_0.95",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.95,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "d41af46b-e945-400a-891a-f7a1dae45770",
                "ruleName": "CriticalRatioOverride_Top100_HHS_0.95",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.95,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "693c857d-d55e-4f46-86d2-6cc472570f78",
                "ruleName": "CriticalRatioOverride_Top100_Pantry_0.95",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.95,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "74c72421-a0c5-449c-9e62-0af685ad201c",
                "ruleName": "CriticalRatioOverride_Top100_Baby_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "0a86dc31-b608-4a4e-8f40-aa4f6c604851",
                "ruleName": "CriticalRatioOverride_Maple(all)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "0f46ce07-6739-4259-99cb-14e87b2e0824",
                "ruleName": "CriticalRatioOverride_Top100_HHS_0.92",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.92,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "f8bd7b24-574d-41ba-9439-c2835d5e9f4d",
                "ruleName": "CriticalRatioOverride_Top100_Pantry_0.92",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.92,
                "horizonAdjust": null
            }
        ]
    },
    {
        "_id": {
            "$oid": "5577fa227355686ad8000007"
        },
        "guid": "5f0b4807-aad8-4702-9af6-8c971a02d8c0",
        "lastEditUser": "Gilseon",
        "lastUpdateTime": {
            "$date": "1434366340175"
        },
        "author": "Gilseon",
        "scenarioName": "(0611)RoundingFactor&CriticalRatio&OrderFrequency_25WPromotion(0.93)",
        "scenarioDesc": "The larger the CR, the bigger priority (duplication skus exist)",
        "production": false,
        "rules": [
            {
                "active": true,
                "filterRef": "22c3a1f6-0eec-40a5-a314-3802641a428f",
                "ruleName": "SEOUL_ROQ≥CQ_F≥0.4:::up",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "a3cf83c0-6bbd-4568-8b9f-2b3def32a8ce",
                "ruleName": "SEOUL_ROQ≥CQ_F<0.4:::down",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Off",
                    "value": "ROUND_OFF"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "36a8a552-0cb8-4f2b-8432-fd6a9320c7f3",
                "ruleName": "SEOUL_ROQ<CQ:::up",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "a06f65ca-a6b7-4a4a-b613-cd704a4f0892",
                "ruleName": "DAEGU:::down",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Off",
                    "value": "ROUND_OFF"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "4c3daba9-84c8-42d9-8a01-781eeebe2d83",
                "ruleName": "CR Override_1)LowVDP(all)_0.97",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.97,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "efc611d5-c376-4195-8a58-0937882682d3",
                "ruleName": "CR Override_1)LowVDP(all)_0.95",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.95,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "91e0fcac-f282-4a6d-a4f2-2e9ef4d52acf",
                "ruleName": "CR Override_2)Top100_HHS_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "2243c01d-6433-4213-8d72-dc4b7a1378cb",
                "ruleName": "CR Override_2)Top100_Pantry_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "d12e94d0-047e-41cf-bc17-94c72f65f3c4",
                "ruleName": "CR Override_3)Maple(all)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "353777a7-07ed-4a23-8c62-338d2af0f480",
                "ruleName": "CR Override_4)Core_Baby(Diapering&Formula)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "90b9074c-7ed9-49e8-a8c6-65694a6e7b35",
                "ruleName": "CR Override_5)Promotion(all)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "3a38c049-ed63-47a0-9d99-55ce0f5ef08b",
                "ruleName": "CR Override_6)25WPromotion(24WTop300)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            }
        ]
    },
    {
        "_id": {
            "$oid": "5577fa577355686aed00000e"
        },
        "guid": "cf81cfd4-163b-4364-b04b-ac3c447d2dfb",
        "lastEditUser": "Gilseon",
        "lastUpdateTime": {
            "$date": "1434366348780"
        },
        "author": "Gilseon",
        "scenarioName": "(0611)RoundingFactor&CriticalRatio&OrderFrequency_25WPromotion(0.95)",
        "scenarioDesc": "The larger the CR, the bigger priority (duplication skus exist)",
        "production": false,
        "rules": [
            {
                "active": true,
                "filterRef": "22c3a1f6-0eec-40a5-a314-3802641a428f",
                "ruleName": "SEOUL_ROQ≥CQ_F≥0.4:::up",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "a3cf83c0-6bbd-4568-8b9f-2b3def32a8ce",
                "ruleName": "SEOUL_ROQ≥CQ_F<0.4:::down",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Off",
                    "value": "ROUND_OFF"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "36a8a552-0cb8-4f2b-8432-fd6a9320c7f3",
                "ruleName": "SEOUL_ROQ<CQ:::up",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "a06f65ca-a6b7-4a4a-b613-cd704a4f0892",
                "ruleName": "DAEGU:::down",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Off",
                    "value": "ROUND_OFF"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "4c3daba9-84c8-42d9-8a01-781eeebe2d83",
                "ruleName": "CR Override_1)LowVDP(all)_0.97",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.97,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "efc611d5-c376-4195-8a58-0937882682d3",
                "ruleName": "CR Override_1)LowVDP(all)_0.95",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.95,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "3a38c049-ed63-47a0-9d99-55ce0f5ef08b",
                "ruleName": "CR Override_6)25WPromotion(24WTop300)_0.95",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.95,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "91e0fcac-f282-4a6d-a4f2-2e9ef4d52acf",
                "ruleName": "CR Override_2)Top100_HHS_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "2243c01d-6433-4213-8d72-dc4b7a1378cb",
                "ruleName": "CR Override_2)Top100_Pantry_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "d12e94d0-047e-41cf-bc17-94c72f65f3c4",
                "ruleName": "CR Override_3)Maple(all)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "353777a7-07ed-4a23-8c62-338d2af0f480",
                "ruleName": "CR Override_4)Core_Baby(Diapering&Formula)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "90b9074c-7ed9-49e8-a8c6-65694a6e7b35",
                "ruleName": "CR Override_5)Promotion(all)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            }
        ]
    },
    {
        "_id": {
            "$oid": "557807047355686ad8000008"
        },
        "guid": "2f41f99b-e770-4c0f-9c48-176d8fcf6a6d",
        "lastEditUser": "Gilseon",
        "lastUpdateTime": {
            "$date": "1434366353040"
        },
        "author": "Gilseon",
        "scenarioName": "(0611)RoundingFactor&CriticalRatio&OrderFrequency_25WPromotion(Current)",
        "scenarioDesc": "The larger the CR, the bigger priority (duplication skus exist)",
        "production": false,
        "rules": [
            {
                "active": true,
                "filterRef": "22c3a1f6-0eec-40a5-a314-3802641a428f",
                "ruleName": "SEOUL_ROQ≥CQ_F≥0.4:::up",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "a3cf83c0-6bbd-4568-8b9f-2b3def32a8ce",
                "ruleName": "SEOUL_ROQ≥CQ_F<0.4:::down",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Off",
                    "value": "ROUND_OFF"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "36a8a552-0cb8-4f2b-8432-fd6a9320c7f3",
                "ruleName": "SEOUL_ROQ<CQ:::up",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "a06f65ca-a6b7-4a4a-b613-cd704a4f0892",
                "ruleName": "DAEGU:::down",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Off",
                    "value": "ROUND_OFF"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "4c3daba9-84c8-42d9-8a01-781eeebe2d83",
                "ruleName": "CR Override_1)LowVDP(all)_0.97",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.97,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "efc611d5-c376-4195-8a58-0937882682d3",
                "ruleName": "CR Override_1)LowVDP(all)_0.95",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.95,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "91e0fcac-f282-4a6d-a4f2-2e9ef4d52acf",
                "ruleName": "CR Override_2)Top100_HHS_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "2243c01d-6433-4213-8d72-dc4b7a1378cb",
                "ruleName": "CR Override_2)Top100_Pantry_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "d12e94d0-047e-41cf-bc17-94c72f65f3c4",
                "ruleName": "CR Override_3)Maple(all)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "353777a7-07ed-4a23-8c62-338d2af0f480",
                "ruleName": "CR Override_4)Core_Baby(Diapering&Formula)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "90b9074c-7ed9-49e8-a8c6-65694a6e7b35",
                "ruleName": "CR Override_5)Promotion(all)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            }
        ]
    },
    {
        "_id": {
            "$oid": "557eb11d7355686816000001"
        },
        "guid": "c48df71a-2582-4b64-be70-8d5040b13b55",
        "lastEditUser": "Gilseon",
        "lastUpdateTime": {
            "$date": "1434972705684"
        },
        "author": "Gilseon",
        "scenarioName": "(0616)RoundingFactor&CriticalRatio&OrderFrequency_25WPromotion(0.95)",
        "scenarioDesc": "The larger the CR, the bigger priority (duplication skus exist)",
        "production": false,
        "rules": [
            {
                "active": true,
                "filterRef": "22c3a1f6-0eec-40a5-a314-3802641a428f",
                "ruleName": "SEOUL_ROQ≥CQ_F≥0.4:::up",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "a3cf83c0-6bbd-4568-8b9f-2b3def32a8ce",
                "ruleName": "SEOUL_ROQ≥CQ_F<0.4:::down",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Off",
                    "value": "ROUND_OFF"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "36a8a552-0cb8-4f2b-8432-fd6a9320c7f3",
                "ruleName": "SEOUL_ROQ<CQ:::up",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "a06f65ca-a6b7-4a4a-b613-cd704a4f0892",
                "ruleName": "DAEGU:::down",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Off",
                    "value": "ROUND_OFF"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "4c3daba9-84c8-42d9-8a01-781eeebe2d83",
                "ruleName": "CR Override_1)LowVDP(all)_0.97",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.97,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "efc611d5-c376-4195-8a58-0937882682d3",
                "ruleName": "CR Override_1)LowVDP(all)_0.95",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.95,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "bdf1dbad-e661-4d23-b89a-c475700c56b7",
                "ruleName": "CR Override_6)25WPromotion(25WTop300)_0.95",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.95,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "eb0381e8-871e-48b3-9aed-ba93ec528628",
                "ruleName": "CR Override_2)Top100_HHS_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "b08e8a1d-f68b-461d-a22c-e348084bfe85",
                "ruleName": "CR Override_2)Top100_Pantry_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "c851cd0b-c983-42eb-8e54-c4880e792f1a",
                "ruleName": "CR Override_3)Maple(all)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "353777a7-07ed-4a23-8c62-338d2af0f480",
                "ruleName": "CR Override_4)Core_Baby(Diapering&Formula)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "90b9074c-7ed9-49e8-a8c6-65694a6e7b35",
                "ruleName": "CR Override_5)Promotion(all)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            }
        ]
    },
    {
        "_id": {
            "$oid": "558760a1735568680d000005"
        },
        "guid": "d3fa43fa-d9c8-41a8-a482-e727b35e5004",
        "lastEditUser": "Gilseon",
        "lastUpdateTime": {
            "$date": "1434972729777"
        },
        "author": "xxxx",
        "scenarioName": "current_(0616)RoundingFactor&CriticalRatio&OrderFrequency_25WPromotion(0.95)",
        "scenarioDesc": "The larger the CR, the bigger priority (duplication skus exist)",
        "production": false,
        "rules": [
            {
                "active": true,
                "filterRef": "22c3a1f6-0eec-40a5-a314-3802641a428f",
                "ruleName": "SEOUL_ROQ≥CQ_F≥0.4:::up",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "a3cf83c0-6bbd-4568-8b9f-2b3def32a8ce",
                "ruleName": "SEOUL_ROQ≥CQ_F<0.4:::down",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Off",
                    "value": "ROUND_OFF"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "36a8a552-0cb8-4f2b-8432-fd6a9320c7f3",
                "ruleName": "SEOUL_ROQ<CQ:::up",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "a06f65ca-a6b7-4a4a-b613-cd704a4f0892",
                "ruleName": "DAEGU:::down",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Off",
                    "value": "ROUND_OFF"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "4c3daba9-84c8-42d9-8a01-781eeebe2d83",
                "ruleName": "CR Override_1)LowVDP(all)_0.97",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.97,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "efc611d5-c376-4195-8a58-0937882682d3",
                "ruleName": "CR Override_1)LowVDP(all)_0.95",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.95,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "eb0381e8-871e-48b3-9aed-ba93ec528628",
                "ruleName": "CR Override_2)Top100_HHS_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "b08e8a1d-f68b-461d-a22c-e348084bfe85",
                "ruleName": "CR Override_2)Top100_Pantry_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "c851cd0b-c983-42eb-8e54-c4880e792f1a",
                "ruleName": "CR Override_3)Maple(all)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "353777a7-07ed-4a23-8c62-338d2af0f480",
                "ruleName": "CR Override_4)Core_Baby(Diapering&Formula)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "90b9074c-7ed9-49e8-a8c6-65694a6e7b35",
                "ruleName": "CR Override_5)Promotion(all)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            }
        ]
    },
    {
        "_id": {
            "$oid": "5587f1dd735568681300000a"
        },
        "guid": "446046f0-8169-48f9-9a7a-97258ccda3ee",
        "lastEditUser": "Gilseon",
        "lastUpdateTime": {
            "$date": "1435199830814"
        },
        "author": "Gilseon",
        "scenarioName": "(0623)RoundingFactor&CriticalRatio&OrderFrequency_25WPromotion(0.95)",
        "scenarioDesc": "The larger the CR, the bigger priority (duplication skus exist)",
        "production": false,
        "rules": [
            {
                "active": true,
                "filterRef": "22c3a1f6-0eec-40a5-a314-3802641a428f",
                "ruleName": "SEOUL_ROQ≥CQ_F≥0.4:::up",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "a3cf83c0-6bbd-4568-8b9f-2b3def32a8ce",
                "ruleName": "SEOUL_ROQ≥CQ_F<0.4:::down",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Off",
                    "value": "ROUND_OFF"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "36a8a552-0cb8-4f2b-8432-fd6a9320c7f3",
                "ruleName": "SEOUL_ROQ<CQ:::up",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "a06f65ca-a6b7-4a4a-b613-cd704a4f0892",
                "ruleName": "DAEGU:::down",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Off",
                    "value": "ROUND_OFF"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "4c3daba9-84c8-42d9-8a01-781eeebe2d83",
                "ruleName": "CR Override_1)LowVDP(all)_0.97",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.97,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "efc611d5-c376-4195-8a58-0937882682d3",
                "ruleName": "CR Override_1)LowVDP(all)_0.95",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.95,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "bdf1dbad-e661-4d23-b89a-c475700c56b7",
                "ruleName": "CR Override_6)25WPromotion(25WTop300)_0.95",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.95,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "feabc718-fc5e-45a3-988f-edda9f6285f8",
                "ruleName": "CR Override_2)Top100_HHS_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "4cd66789-f292-462f-905a-927ef9d5dd17",
                "ruleName": "CR Override_2)Top100_Pantry_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "cd9fb116-5f21-4d70-b832-5afb9307b8ee",
                "ruleName": "CR Override_3)Maple(all)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "353777a7-07ed-4a23-8c62-338d2af0f480",
                "ruleName": "CR Override_4)Core_Baby(Diapering&Formula)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "90b9074c-7ed9-49e8-a8c6-65694a6e7b35",
                "ruleName": "CR Override_5)Promotion(all)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            }
        ]
    },
    {
        "_id": {
            "$oid": "558a182a7355686eea000001"
        },
        "guid": "6f81cef0-1153-4535-b792-b62c75fd487c",
        "lastEditUser": "Gilseon",
        "lastUpdateTime": {
            "$date": "1435199870859"
        },
        "author": "Gilseon",
        "scenarioName": "GILSEON_TEST_defaultCR95%_(*0623)_25WPromotion(0.95)",
        "scenarioDesc": "The larger the CR, the bigger priority (duplication skus exist)",
        "production": false,
        "rules": [
            {
                "active": true,
                "filterRef": "22c3a1f6-0eec-40a5-a314-3802641a428f",
                "ruleName": "SEOUL_ROQ≥CQ_F≥0.4:::up",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "a3cf83c0-6bbd-4568-8b9f-2b3def32a8ce",
                "ruleName": "SEOUL_ROQ≥CQ_F<0.4:::down",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Off",
                    "value": "ROUND_OFF"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "36a8a552-0cb8-4f2b-8432-fd6a9320c7f3",
                "ruleName": "SEOUL_ROQ<CQ:::up",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "a06f65ca-a6b7-4a4a-b613-cd704a4f0892",
                "ruleName": "DAEGU:::down",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Off",
                    "value": "ROUND_OFF"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "4c3daba9-84c8-42d9-8a01-781eeebe2d83",
                "ruleName": "CR Override_1)LowVDP(all)_0.97",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.97,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "efc611d5-c376-4195-8a58-0937882682d3",
                "ruleName": "CR Override_1)LowVDP(all)_0.95",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.95,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "bdf1dbad-e661-4d23-b89a-c475700c56b7",
                "ruleName": "CR Override_6)25WPromotion(25WTop300)_0.95",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.95,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "feabc718-fc5e-45a3-988f-edda9f6285f8",
                "ruleName": "CR Override_2)Top100_HHS_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "4cd66789-f292-462f-905a-927ef9d5dd17",
                "ruleName": "CR Override_2)Top100_Pantry_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "cd9fb116-5f21-4d70-b832-5afb9307b8ee",
                "ruleName": "CR Override_3)Maple(all)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "353777a7-07ed-4a23-8c62-338d2af0f480",
                "ruleName": "CR Override_4)Core_Baby(Diapering&Formula)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "90b9074c-7ed9-49e8-a8c6-65694a6e7b35",
                "ruleName": "CR Override_5)Promotion(all)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": null,
                "ruleName": "UP the default CR (95%)",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Default critical ratio",
                    "value": "DEFAULT_CRITICAL_RATIO"
                },
                "action": null,
                "defaultCriticalRatio": 0.95,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            }
        ]
    },
    {
        "_id": {
            "$oid": "558a45d67355686ef0000001"
        },
        "guid": "9c7b0bd1-0bbf-4f88-a418-8c05653b3f16",
        "lastEditUser": "Gilseon",
        "lastUpdateTime": {
            "$date": "1435199884772"
        },
        "author": "Gilseon",
        "scenarioName": "GILSEON_TEST_defaultCR90%_(*0623)_25WPromotion(0.95)",
        "scenarioDesc": "The larger the CR, the bigger priority (duplication skus exist)",
        "production": false,
        "rules": [
            {
                "active": true,
                "filterRef": "22c3a1f6-0eec-40a5-a314-3802641a428f",
                "ruleName": "SEOUL_ROQ≥CQ_F≥0.4:::up",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "a3cf83c0-6bbd-4568-8b9f-2b3def32a8ce",
                "ruleName": "SEOUL_ROQ≥CQ_F<0.4:::down",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Off",
                    "value": "ROUND_OFF"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "36a8a552-0cb8-4f2b-8432-fd6a9320c7f3",
                "ruleName": "SEOUL_ROQ<CQ:::up",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "a06f65ca-a6b7-4a4a-b613-cd704a4f0892",
                "ruleName": "DAEGU:::down",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Off",
                    "value": "ROUND_OFF"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "4c3daba9-84c8-42d9-8a01-781eeebe2d83",
                "ruleName": "CR Override_1)LowVDP(all)_0.97",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.97,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "efc611d5-c376-4195-8a58-0937882682d3",
                "ruleName": "CR Override_1)LowVDP(all)_0.95",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.95,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "bdf1dbad-e661-4d23-b89a-c475700c56b7",
                "ruleName": "CR Override_6)25WPromotion(25WTop300)_0.95",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.95,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "feabc718-fc5e-45a3-988f-edda9f6285f8",
                "ruleName": "CR Override_2)Top100_HHS_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "4cd66789-f292-462f-905a-927ef9d5dd17",
                "ruleName": "CR Override_2)Top100_Pantry_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "cd9fb116-5f21-4d70-b832-5afb9307b8ee",
                "ruleName": "CR Override_3)Maple(all)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "353777a7-07ed-4a23-8c62-338d2af0f480",
                "ruleName": "CR Override_4)Core_Baby(Diapering&Formula)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "90b9074c-7ed9-49e8-a8c6-65694a6e7b35",
                "ruleName": "CR Override_5)Promotion(all)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": null,
                "ruleName": "UP the default CR (90%)",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Default critical ratio",
                    "value": "DEFAULT_CRITICAL_RATIO"
                },
                "action": null,
                "defaultCriticalRatio": 0.9,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            }
        ]
    },
    {
        "_id": {
            "$oid": "558b55d67355685b23000001"
        },
        "guid": "b1f80b57-f825-4e5b-8795-fa32170016bb",
        "lastEditUser": "Gilseon",
        "lastUpdateTime": {
            "$date": "1435573912213"
        },
        "author": "Gilseon",
        "scenarioName": "(0623)_25WPromotion(0.95)",
        "scenarioDesc": "The larger the CR, the bigger priority (duplication skus exist)",
        "production": false,
        "rules": [
            {
                "active": true,
                "filterRef": "22c3a1f6-0eec-40a5-a314-3802641a428f",
                "ruleName": "SEOUL_ROQ≥CQ_F≥0.4:::up",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "a3cf83c0-6bbd-4568-8b9f-2b3def32a8ce",
                "ruleName": "SEOUL_ROQ≥CQ_F<0.4:::down",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Off",
                    "value": "ROUND_OFF"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "36a8a552-0cb8-4f2b-8432-fd6a9320c7f3",
                "ruleName": "SEOUL_ROQ<CQ:::up",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "a06f65ca-a6b7-4a4a-b613-cd704a4f0892",
                "ruleName": "DAEGU:::down",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Off",
                    "value": "ROUND_OFF"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "4c3daba9-84c8-42d9-8a01-781eeebe2d83",
                "ruleName": "CR Override_1)LowVDP(all)_0.97",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.97,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "efc611d5-c376-4195-8a58-0937882682d3",
                "ruleName": "CR Override_1)LowVDP(all)_0.95",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.95,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "bdf1dbad-e661-4d23-b89a-c475700c56b7",
                "ruleName": "CR Override_6)25WPromotion(25WTop300)_0.95",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.95,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "feabc718-fc5e-45a3-988f-edda9f6285f8",
                "ruleName": "CR Override_2)Top100_HHS_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "4cd66789-f292-462f-905a-927ef9d5dd17",
                "ruleName": "CR Override_2)Top100_Pantry_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "cd9fb116-5f21-4d70-b832-5afb9307b8ee",
                "ruleName": "CR Override_3)Maple(all)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "353777a7-07ed-4a23-8c62-338d2af0f480",
                "ruleName": "CR Override_4)Core_Baby(Diapering&Formula)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "90b9074c-7ed9-49e8-a8c6-65694a6e7b35",
                "ruleName": "CR Override_5)Promotion(all)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            }
        ]
    },
    {
        "_id": {
            "$oid": "558b55e87355685b23000002"
        },
        "guid": "9b930e49-4120-4e50-91df-9826c38d7392",
        "lastEditUser": "Gilseon",
        "lastUpdateTime": {
            "$date": "1435194855823"
        },
        "author": "Gilseon",
        "scenarioName": "Gilseon",
        "scenarioDesc": "The larger the CR, the bigger priority (duplication skus exist)",
        "production": false,
        "rules": [
            {
                "active": true,
                "filterRef": "22c3a1f6-0eec-40a5-a314-3802641a428f",
                "ruleName": "SEOUL_ROQ≥CQ_F≥0.4:::up",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "a3cf83c0-6bbd-4568-8b9f-2b3def32a8ce",
                "ruleName": "SEOUL_ROQ≥CQ_F<0.4:::down",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Off",
                    "value": "ROUND_OFF"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "36a8a552-0cb8-4f2b-8432-fd6a9320c7f3",
                "ruleName": "SEOUL_ROQ<CQ:::up",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "a06f65ca-a6b7-4a4a-b613-cd704a4f0892",
                "ruleName": "DAEGU:::down",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Off",
                    "value": "ROUND_OFF"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "4c3daba9-84c8-42d9-8a01-781eeebe2d83",
                "ruleName": "CR Override_1)LowVDP(all)_0.97",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.97,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "efc611d5-c376-4195-8a58-0937882682d3",
                "ruleName": "CR Override_1)LowVDP(all)_0.95",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.95,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "bdf1dbad-e661-4d23-b89a-c475700c56b7",
                "ruleName": "CR Override_6)25WPromotion(25WTop300)_0.95",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.95,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "feabc718-fc5e-45a3-988f-edda9f6285f8",
                "ruleName": "CR Override_2)Top100_HHS_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "4cd66789-f292-462f-905a-927ef9d5dd17",
                "ruleName": "CR Override_2)Top100_Pantry_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "cd9fb116-5f21-4d70-b832-5afb9307b8ee",
                "ruleName": "CR Override_3)Maple(all)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "353777a7-07ed-4a23-8c62-338d2af0f480",
                "ruleName": "CR Override_4)Core_Baby(Diapering&Formula)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "90b9074c-7ed9-49e8-a8c6-65694a6e7b35",
                "ruleName": "CR Override_5)Promotion(all)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            }
        ]
    },
    {
        "_id": {
            "$oid": "5590dbff7355681121000003"
        },
        "guid": "27f7944b-e3bb-42e2-a7bc-a7fff5cd8661",
        "lastEditUser": "Gilseon",
        "lastUpdateTime": {
            "$date": "1435650553088"
        },
        "author": "Gilseon",
        "scenarioName": "TEST_Gilseon_PantryTop100_0.93",
        "scenarioDesc": "The larger the CR, the bigger priority (duplication skus exist)",
        "production": false,
        "rules": [
            {
                "active": true,
                "filterRef": "22c3a1f6-0eec-40a5-a314-3802641a428f",
                "ruleName": "SEOUL_ROQ≥CQ_F≥0.4:::up",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "a3cf83c0-6bbd-4568-8b9f-2b3def32a8ce",
                "ruleName": "SEOUL_ROQ≥CQ_F<0.4:::down",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Off",
                    "value": "ROUND_OFF"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "36a8a552-0cb8-4f2b-8432-fd6a9320c7f3",
                "ruleName": "SEOUL_ROQ<CQ:::up",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "a06f65ca-a6b7-4a4a-b613-cd704a4f0892",
                "ruleName": "DAEGU:::down",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Off",
                    "value": "ROUND_OFF"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "4c3daba9-84c8-42d9-8a01-781eeebe2d83",
                "ruleName": "CR Override_1)LowVDP(all)_0.97",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.97,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "efc611d5-c376-4195-8a58-0937882682d3",
                "ruleName": "CR Override_1)LowVDP(all)_0.95",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.95,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "bdf1dbad-e661-4d23-b89a-c475700c56b7",
                "ruleName": "CR Override_6)25WPromotion(25WTop300)_0.95",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.95,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "feabc718-fc5e-45a3-988f-edda9f6285f8",
                "ruleName": "CR Override_2)Top100_HHS_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "4cd66789-f292-462f-905a-927ef9d5dd17",
                "ruleName": "CR Override_2)Top100_Pantry_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "920b67c5-742a-4d8d-bbd8-82273ab736b5",
                "ruleName": "CR Override_3)Maple(all)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "353777a7-07ed-4a23-8c62-338d2af0f480",
                "ruleName": "CR Override_4)Core_Baby(Diapering&Formula)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "90b9074c-7ed9-49e8-a8c6-65694a6e7b35",
                "ruleName": "CR Override_5)Promotion(all)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            }
        ]
    },
    {
        "_id": {
            "$oid": "5590dc1b7355681106000002"
        },
        "guid": "592b5069-a594-42f1-8509-2e9e56d87981",
        "lastEditUser": "Gilseon",
        "lastUpdateTime": {
            "$date": "1435650538258"
        },
        "author": "Gilseon",
        "scenarioName": "TEST_Gilseon_PantryTop300_0.95",
        "scenarioDesc": "The larger the CR, the bigger priority (duplication skus exist)",
        "production": false,
        "rules": [
            {
                "active": true,
                "filterRef": "22c3a1f6-0eec-40a5-a314-3802641a428f",
                "ruleName": "SEOUL_ROQ≥CQ_F≥0.4:::up",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "a3cf83c0-6bbd-4568-8b9f-2b3def32a8ce",
                "ruleName": "SEOUL_ROQ≥CQ_F<0.4:::down",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Off",
                    "value": "ROUND_OFF"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "36a8a552-0cb8-4f2b-8432-fd6a9320c7f3",
                "ruleName": "SEOUL_ROQ<CQ:::up",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "a06f65ca-a6b7-4a4a-b613-cd704a4f0892",
                "ruleName": "DAEGU:::down",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Off",
                    "value": "ROUND_OFF"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "4c3daba9-84c8-42d9-8a01-781eeebe2d83",
                "ruleName": "CR Override_1)LowVDP(all)_0.97",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.97,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "efc611d5-c376-4195-8a58-0937882682d3",
                "ruleName": "CR Override_1)LowVDP(all)_0.95",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.95,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "bdf1dbad-e661-4d23-b89a-c475700c56b7",
                "ruleName": "CR Override_6)25WPromotion(25WTop300)_0.95",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.95,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "6e566fe2-931d-4271-aa72-b163b01fcae1",
                "ruleName": "CR Override_2)Top300_Pantry_0.95",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.95,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "feabc718-fc5e-45a3-988f-edda9f6285f8",
                "ruleName": "CR Override_2)Top100_HHS_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "920b67c5-742a-4d8d-bbd8-82273ab736b5",
                "ruleName": "CR Override_3)Maple(all)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "353777a7-07ed-4a23-8c62-338d2af0f480",
                "ruleName": "CR Override_4)Core_Baby(Diapering&Formula)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "90b9074c-7ed9-49e8-a8c6-65694a6e7b35",
                "ruleName": "CR Override_5)Promotion(all)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            }
        ]
    },
    {
        "_id": {
            "$oid": "55911e917355681106000003"
        },
        "guid": "7436a925-b7f3-4d1f-8967-7364404fd722",
        "lastEditUser": "Gilseon",
        "lastUpdateTime": {
            "$date": "1435652661452"
        },
        "author": "Gilseon",
        "scenarioName": "(0630)_25WPromotion(0.95)",
        "scenarioDesc": "The larger the CR, the bigger priority (duplication skus exist)",
        "production": false,
        "rules": [
            {
                "active": true,
                "filterRef": "22c3a1f6-0eec-40a5-a314-3802641a428f",
                "ruleName": "SEOUL_ROQ≥CQ_F≥0.4:::up",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "a3cf83c0-6bbd-4568-8b9f-2b3def32a8ce",
                "ruleName": "SEOUL_ROQ≥CQ_F<0.4:::down",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Off",
                    "value": "ROUND_OFF"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "36a8a552-0cb8-4f2b-8432-fd6a9320c7f3",
                "ruleName": "SEOUL_ROQ<CQ:::up",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "a06f65ca-a6b7-4a4a-b613-cd704a4f0892",
                "ruleName": "DAEGU:::down",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Off",
                    "value": "ROUND_OFF"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "4c3daba9-84c8-42d9-8a01-781eeebe2d83",
                "ruleName": "CR Override_1)LowVDP(all)_0.97",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.97,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "efc611d5-c376-4195-8a58-0937882682d3",
                "ruleName": "CR Override_1)LowVDP(all)_0.95",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.95,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "bdf1dbad-e661-4d23-b89a-c475700c56b7",
                "ruleName": "CR Override_6)25WPromotion(25WTop300)_0.95",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.95,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "feabc718-fc5e-45a3-988f-edda9f6285f8",
                "ruleName": "CR Override_2)Top100_HHS_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "4cd66789-f292-462f-905a-927ef9d5dd17",
                "ruleName": "CR Override_2)Top100_Pantry_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "cd9fb116-5f21-4d70-b832-5afb9307b8ee",
                "ruleName": "CR Override_3)Maple(all)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "353777a7-07ed-4a23-8c62-338d2af0f480",
                "ruleName": "CR Override_4)Core_Baby(Diapering&Formula)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "90b9074c-7ed9-49e8-a8c6-65694a6e7b35",
                "ruleName": "CR Override_5)Promotion(all)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            }
        ]
    },
    {
        "_id": {
            "$oid": "55924993735568111d000003"
        },
        "guid": "1ae39118-f3db-4034-8a0c-2d404b5d34d3",
        "lastEditUser": "Gilseon",
        "lastUpdateTime": {
            "$date": "1435650524427"
        },
        "author": "Gilseon",
        "scenarioName": "TEST_Gilseon_PantryTop300_0.97",
        "scenarioDesc": "The larger the CR, the bigger priority (duplication skus exist)",
        "production": false,
        "rules": [
            {
                "active": true,
                "filterRef": "22c3a1f6-0eec-40a5-a314-3802641a428f",
                "ruleName": "SEOUL_ROQ≥CQ_F≥0.4:::up",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "a3cf83c0-6bbd-4568-8b9f-2b3def32a8ce",
                "ruleName": "SEOUL_ROQ≥CQ_F<0.4:::down",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Off",
                    "value": "ROUND_OFF"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "36a8a552-0cb8-4f2b-8432-fd6a9320c7f3",
                "ruleName": "SEOUL_ROQ<CQ:::up",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "a06f65ca-a6b7-4a4a-b613-cd704a4f0892",
                "ruleName": "DAEGU:::down",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Off",
                    "value": "ROUND_OFF"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "4c3daba9-84c8-42d9-8a01-781eeebe2d83",
                "ruleName": "CR Override_1)LowVDP(all)_0.97",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.97,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "6e566fe2-931d-4271-aa72-b163b01fcae1",
                "ruleName": "CR Override_2)Top300_Pantry_0.97",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.97,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "efc611d5-c376-4195-8a58-0937882682d3",
                "ruleName": "CR Override_1)LowVDP(all)_0.95",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.95,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "bdf1dbad-e661-4d23-b89a-c475700c56b7",
                "ruleName": "CR Override_6)25WPromotion(25WTop300)_0.95",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.95,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "feabc718-fc5e-45a3-988f-edda9f6285f8",
                "ruleName": "CR Override_2)Top100_HHS_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "920b67c5-742a-4d8d-bbd8-82273ab736b5",
                "ruleName": "CR Override_3)Maple(all)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "353777a7-07ed-4a23-8c62-338d2af0f480",
                "ruleName": "CR Override_4)Core_Baby(Diapering&Formula)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "90b9074c-7ed9-49e8-a8c6-65694a6e7b35",
                "ruleName": "CR Override_5)Promotion(all)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            }
        ]
    },
    {
        "_id": {
            "$oid": "5592522e735568110f000001"
        },
        "guid": "c54004a1-7808-40bb-adac-1c116f33eb1b",
        "lastEditUser": "Gilseon",
        "lastUpdateTime": {
            "$date": "1435798564650"
        },
        "author": "Gilseon",
        "scenarioName": "(0701)_25WPromotion(0.95)",
        "scenarioDesc": "The larger the CR, the bigger priority (duplication skus exist)",
        "production": false,
        "rules": [
            {
                "active": true,
                "filterRef": "22c3a1f6-0eec-40a5-a314-3802641a428f",
                "ruleName": "SEOUL_ROQ≥CQ_F≥0.4:::up",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "a3cf83c0-6bbd-4568-8b9f-2b3def32a8ce",
                "ruleName": "SEOUL_ROQ≥CQ_F<0.4:::down",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Off",
                    "value": "ROUND_OFF"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "36a8a552-0cb8-4f2b-8432-fd6a9320c7f3",
                "ruleName": "SEOUL_ROQ<CQ:::up",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "a06f65ca-a6b7-4a4a-b613-cd704a4f0892",
                "ruleName": "DAEGU:::down",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Off",
                    "value": "ROUND_OFF"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "4c3daba9-84c8-42d9-8a01-781eeebe2d83",
                "ruleName": "CR Override_1)LowVDP(all)_0.97",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.97,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "efc611d5-c376-4195-8a58-0937882682d3",
                "ruleName": "CR Override_1)LowVDP(all)_0.95",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.95,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "bdf1dbad-e661-4d23-b89a-c475700c56b7",
                "ruleName": "CR Override_6)25WPromotion(25WTop300)_0.95",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.95,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "740883aa-6245-46da-a8e1-21237bcdd7e7",
                "ruleName": "CR Override_2)Top100_HHS_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "875457e7-1b43-467c-86d6-a5a28667ad15",
                "ruleName": "CR Override_2)Top100_Pantry_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "920b67c5-742a-4d8d-bbd8-82273ab736b5",
                "ruleName": "CR Override_3)Maple(all)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "353777a7-07ed-4a23-8c62-338d2af0f480",
                "ruleName": "CR Override_4)Core_Baby(Diapering&Formula)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "90b9074c-7ed9-49e8-a8c6-65694a6e7b35",
                "ruleName": "CR Override_5)Promotion(all)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            }
        ]
    },
    {
        "_id": {
            "$oid": "5592543d735568111b000006"
        },
        "guid": "d305d5c2-461f-4627-9d54-f2c55c2e8c4e",
        "lastEditUser": "Gilseon",
        "lastUpdateTime": {
            "$date": "1436178222348"
        },
        "author": "Gilseon",
        "scenarioName": "(0702)_25WPromotion(0.95)_Horizon(2days/H&B,PantryTop300)",
        "scenarioDesc": "The larger the CR, the bigger priority (duplication skus exist)",
        "production": false,
        "rules": [
            {
                "active": true,
                "filterRef": "22c3a1f6-0eec-40a5-a314-3802641a428f",
                "ruleName": "SEOUL_ROQ≥CQ_F≥0.4:::up",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "a3cf83c0-6bbd-4568-8b9f-2b3def32a8ce",
                "ruleName": "SEOUL_ROQ≥CQ_F<0.4:::down",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Off",
                    "value": "ROUND_OFF"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "36a8a552-0cb8-4f2b-8432-fd6a9320c7f3",
                "ruleName": "SEOUL_ROQ<CQ:::up",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "a06f65ca-a6b7-4a4a-b613-cd704a4f0892",
                "ruleName": "DAEGU:::down",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Off",
                    "value": "ROUND_OFF"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "4c3daba9-84c8-42d9-8a01-781eeebe2d83",
                "ruleName": "CR Override_1)LowVDP(all)_0.97",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.97,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "efc611d5-c376-4195-8a58-0937882682d3",
                "ruleName": "CR Override_1)LowVDP(all)_0.95",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.95,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "bdf1dbad-e661-4d23-b89a-c475700c56b7",
                "ruleName": "CR Override_6)25WPromotion(25WTop300)_0.95",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.95,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "740883aa-6245-46da-a8e1-21237bcdd7e7",
                "ruleName": "CR Override_2)Top100_HHS_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "875457e7-1b43-467c-86d6-a5a28667ad15",
                "ruleName": "CR Override_2)Top100_Pantry_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "920b67c5-742a-4d8d-bbd8-82273ab736b5",
                "ruleName": "CR Override_3)Maple(all)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "353777a7-07ed-4a23-8c62-338d2af0f480",
                "ruleName": "CR Override_4)Core_Baby(Diapering&Formula)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "90b9074c-7ed9-49e8-a8c6-65694a6e7b35",
                "ruleName": "CR Override_5)Promotion(all)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "934a67e0-cf8a-41d4-a7d1-5d015e323627",
                "ruleName": "PlanHorizon_4days_Top300",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Plan horizon adjustment",
                    "value": "PLAN_HORIZON_ADJUSTMENT"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": 48
            }
        ]
    },
    {
        "_id": {
            "$oid": "559657637355681130000007"
        },
        "guid": "ba4c6a3f-8c69-4433-bfd5-3cdbbd8d62b8",
        "lastEditUser": "anonymous",
        "lastUpdateTime": {
            "$date": "1437569523474"
        },
        "author": "anonymous",
        "scenarioName": "Jason_base_NAR",
        "scenarioDesc": "The larger the CR, the bigger priority (duplication skus exist)",
        "production": false,
        "rules": [
            {
                "active": true,
                "filterRef": "22c3a1f6-0eec-40a5-a314-3802641a428f",
                "ruleName": "SEOUL_ROQ≥CQ_F≥0.4:::up",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "a3cf83c0-6bbd-4568-8b9f-2b3def32a8ce",
                "ruleName": "SEOUL_ROQ≥CQ_F<0.4:::down",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Off",
                    "value": "ROUND_OFF"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "36a8a552-0cb8-4f2b-8432-fd6a9320c7f3",
                "ruleName": "SEOUL_ROQ<CQ:::up",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "a06f65ca-a6b7-4a4a-b613-cd704a4f0892",
                "ruleName": "DAEGU:::down",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Off",
                    "value": "ROUND_OFF"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": false,
                "filterRef": "4c3daba9-84c8-42d9-8a01-781eeebe2d83",
                "ruleName": "CR Override_1)LowVDP(all)_0.97",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.97,
                "horizonAdjust": null
            },
            {
                "active": false,
                "filterRef": "efc611d5-c376-4195-8a58-0937882682d3",
                "ruleName": "CR Override_1)LowVDP(all)_0.95",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.95,
                "horizonAdjust": null
            },
            {
                "active": false,
                "filterRef": "bdf1dbad-e661-4d23-b89a-c475700c56b7",
                "ruleName": "CR Override_6)25WPromotion(25WTop300)_0.95",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.95,
                "horizonAdjust": null
            },
            {
                "active": false,
                "filterRef": "740883aa-6245-46da-a8e1-21237bcdd7e7",
                "ruleName": "CR Override_2)Top100_HHS_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": false,
                "filterRef": "875457e7-1b43-467c-86d6-a5a28667ad15",
                "ruleName": "CR Override_2)Top100_Pantry_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": false,
                "filterRef": "920b67c5-742a-4d8d-bbd8-82273ab736b5",
                "ruleName": "CR Override_3)Maple(all)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": false,
                "filterRef": "353777a7-07ed-4a23-8c62-338d2af0f480",
                "ruleName": "CR Override_4)Core_Baby(Diapering&Formula)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": false,
                "filterRef": "90b9074c-7ed9-49e8-a8c6-65694a6e7b35",
                "ruleName": "CR Override_5)Promotion(all)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": false,
                "filterRef": "934a67e0-cf8a-41d4-a7d1-5d015e323627",
                "ruleName": "PlanHorizon_4days_Top300",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Plan horizon adjustment",
                    "value": "PLAN_HORIZON_ADJUSTMENT"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": 48
            },
            {
                "active": true,
                "filterRef": null,
                "ruleName": "Rule14_2015-7-7_1:1:55",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Network allocation",
                    "value": "NETWORK_ALLOCATION"
                },
                "action": {
                    "display": "Update FC",
                    "value": "UPDATE_FC"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": false,
                "filterRef": "c3f758d2-2c39-4239-93c8-a7a5bf378d60",
                "ruleName": "DOC < 7",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Reactive order ",
                    "value": "REACTIVE_ORDER"
                },
                "action": {
                    "display": "Adjust Order day",
                    "value": "ADJUST_ORDER_DAY"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "069d046d-f1c4-4bcf-a070-8b5d6d2a8cc1",
                "ruleName": "14 > DOC > 7",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Reactive order ",
                    "value": "REACTIVE_ORDER"
                },
                "action": {
                    "display": "Adjust Order day",
                    "value": "ADJUST_ORDER_DAY"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            }
        ]
    },
    {
        "_id": {
            "$oid": "559a575b735568111b000008"
        },
        "guid": "09bf4eb1-0af4-4c48-b58a-a3e1978f96dc",
        "lastEditUser": "Gilseon",
        "lastUpdateTime": {
            "$date": "1436264536851"
        },
        "author": "Gilseon",
        "scenarioName": "(0707~)_28W_Scenario",
        "scenarioDesc": "The larger the CR, the bigger priority (duplication skus exist) / H&B,Pantry Top 300_2days",
        "production": false,
        "rules": [
            {
                "active": true,
                "filterRef": "22c3a1f6-0eec-40a5-a314-3802641a428f",
                "ruleName": "SEOUL_ROQ≥CQ_F≥0.4:::up",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "a3cf83c0-6bbd-4568-8b9f-2b3def32a8ce",
                "ruleName": "SEOUL_ROQ≥CQ_F<0.4:::down",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Off",
                    "value": "ROUND_OFF"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "36a8a552-0cb8-4f2b-8432-fd6a9320c7f3",
                "ruleName": "SEOUL_ROQ<CQ:::up",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "a06f65ca-a6b7-4a4a-b613-cd704a4f0892",
                "ruleName": "DAEGU:::down",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Off",
                    "value": "ROUND_OFF"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "4c3daba9-84c8-42d9-8a01-781eeebe2d83",
                "ruleName": "CR Override_1)LowVDP(all)_0.97",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.97,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "efc611d5-c376-4195-8a58-0937882682d3",
                "ruleName": "CR Override_1)LowVDP(all)_0.95",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.95,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "bdf1dbad-e661-4d23-b89a-c475700c56b7",
                "ruleName": "CR Override_6)25WPromotion(25WTop300)_0.95",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.95,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "6ea8b074-faa0-4aea-a738-261c9c2cf3f7",
                "ruleName": "CR Override_2)Top100_HHS_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "f8472273-7c6e-403c-bbb6-3e50e6792ea8",
                "ruleName": "CR Override_2)Top100_Pantry_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "75ca112b-8d9d-4dce-9fb8-3bd7a1654d3b",
                "ruleName": "CR Override_3)Maple(all)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "353777a7-07ed-4a23-8c62-338d2af0f480",
                "ruleName": "CR Override_4)Core_Baby(Diapering&Formula)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "90b9074c-7ed9-49e8-a8c6-65694a6e7b35",
                "ruleName": "CR Override_5)Promotion(all)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "9ac3b428-2a38-42e4-8f5b-81748d2fc854",
                "ruleName": "PlanHorizon_4days_Top300",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Plan horizon adjustment",
                    "value": "PLAN_HORIZON_ADJUSTMENT"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": 48
            }
        ]
    },
    {
        "_id": {
            "$oid": "559b81b97355687eb9000003"
        },
        "guid": "909b4166-70d2-443f-a179-99bf2135da92",
        "lastEditUser": "Gilseon",
        "lastUpdateTime": {
            "$date": "1436834623636"
        },
        "author": "Gilseon",
        "scenarioName": "(0708~)_28W_Scenario",
        "scenarioDesc": "The larger the CR, the bigger priority (duplication skus exist) / H&B,Pantry Top 300_2days",
        "production": false,
        "rules": [
            {
                "active": true,
                "filterRef": "22c3a1f6-0eec-40a5-a314-3802641a428f",
                "ruleName": "SEOUL_ROQ≥CQ_F≥0.4:::up",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "a3cf83c0-6bbd-4568-8b9f-2b3def32a8ce",
                "ruleName": "SEOUL_ROQ≥CQ_F<0.4:::down",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Off",
                    "value": "ROUND_OFF"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "36a8a552-0cb8-4f2b-8432-fd6a9320c7f3",
                "ruleName": "SEOUL_ROQ<CQ:::up",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "a06f65ca-a6b7-4a4a-b613-cd704a4f0892",
                "ruleName": "DAEGU:::down",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Off",
                    "value": "ROUND_OFF"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "4c3daba9-84c8-42d9-8a01-781eeebe2d83",
                "ruleName": "CR Override_1)LowVDP(all)_0.97",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.97,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "efc611d5-c376-4195-8a58-0937882682d3",
                "ruleName": "CR Override_1)LowVDP(all)_0.95",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.95,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "bdf1dbad-e661-4d23-b89a-c475700c56b7",
                "ruleName": "CR Override_6)25WPromotion(25WTop300)_0.95",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.95,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "6ea8b074-faa0-4aea-a738-261c9c2cf3f7",
                "ruleName": "CR Override_2)Top100_HHS_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "f8472273-7c6e-403c-bbb6-3e50e6792ea8",
                "ruleName": "CR Override_2)Top100_Pantry_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "75ca112b-8d9d-4dce-9fb8-3bd7a1654d3b",
                "ruleName": "CR Override_3)Maple(all)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "353777a7-07ed-4a23-8c62-338d2af0f480",
                "ruleName": "CR Override_4)Core_Baby(Diapering&Formula)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "90b9074c-7ed9-49e8-a8c6-65694a6e7b35",
                "ruleName": "CR Override_5)Promotion(all)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "9ac3b428-2a38-42e4-8f5b-81748d2fc854",
                "ruleName": "PlanHorizon_4days_Top300",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Plan horizon adjustment",
                    "value": "PLAN_HORIZON_ADJUSTMENT"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": 48
            },
            {
                "active": true,
                "filterRef": null,
                "ruleName": "Rule14_2015-7-7_16:38:1",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Network allocation",
                    "value": "NETWORK_ALLOCATION"
                },
                "action": {
                    "display": "Update FC",
                    "value": "UPDATE_FC"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            }
        ]
    },
    {
        "_id": {
            "$oid": "55a45b3973556865e3000001"
        },
        "guid": "6796b5d2-ed1f-4663-b304-b6b6769b6a3c",
        "lastEditUser": "Gilseon",
        "lastUpdateTime": {
            "$date": "1437388978338"
        },
        "author": "Gilseon",
        "scenarioName": "(0714~)_29W_Scenario",
        "scenarioDesc": "The larger the CR, the bigger priority (duplication skus exist) / H&B,Pantry Top 300_2days",
        "production": false,
        "rules": [
            {
                "active": true,
                "filterRef": "22c3a1f6-0eec-40a5-a314-3802641a428f",
                "ruleName": "SEOUL_ROQ≥CQ_F≥0.4:::up",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "a3cf83c0-6bbd-4568-8b9f-2b3def32a8ce",
                "ruleName": "SEOUL_ROQ≥CQ_F<0.4:::down",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Off",
                    "value": "ROUND_OFF"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "36a8a552-0cb8-4f2b-8432-fd6a9320c7f3",
                "ruleName": "SEOUL_ROQ<CQ:::up",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "a06f65ca-a6b7-4a4a-b613-cd704a4f0892",
                "ruleName": "DAEGU:::down",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Off",
                    "value": "ROUND_OFF"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "4c3daba9-84c8-42d9-8a01-781eeebe2d83",
                "ruleName": "CR Override_1)LowVDP(all)_0.97",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.97,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "efc611d5-c376-4195-8a58-0937882682d3",
                "ruleName": "CR Override_1)LowVDP(all)_0.95",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.95,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "bdf1dbad-e661-4d23-b89a-c475700c56b7",
                "ruleName": "CR Override_6)25WPromotion(25WTop300)_0.95",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.95,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "0377f366-05e5-4283-8c0f-7fa51b5fc1b7",
                "ruleName": "CR Override_2)Top100_HHS_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "b558ea0b-f711-4c91-add2-db790219d5a1",
                "ruleName": "CR Override_2)Top100_Pantry_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "5d457658-b046-4990-a57b-c56affbbcc35",
                "ruleName": "CR Override_3)Maple(all)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "353777a7-07ed-4a23-8c62-338d2af0f480",
                "ruleName": "CR Override_4)Core_Baby(Diapering&Formula)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "90b9074c-7ed9-49e8-a8c6-65694a6e7b35",
                "ruleName": "CR Override_5)Promotion(all)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "eb835951-dea6-428e-81d5-e844ab610934",
                "ruleName": "PlanHorizon_4days_Top300",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Plan horizon adjustment",
                    "value": "PLAN_HORIZON_ADJUSTMENT"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": 48
            },
            {
                "active": true,
                "filterRef": null,
                "ruleName": "Rule14_2015-7-7_16:38:1",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Network allocation",
                    "value": "NETWORK_ALLOCATION"
                },
                "action": {
                    "display": "Update FC",
                    "value": "UPDATE_FC"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            }
        ]
    },
    {
        "_id": {
            "$oid": "55acc9ce73556865d1000005"
        },
        "guid": "f0f21116-0e03-4e90-987f-49c2867b7f8e",
        "lastEditUser": "Gilseon",
        "lastUpdateTime": {
            "$date": "1437457455870"
        },
        "author": "Gilseon",
        "scenarioName": "(0721~)_30W_Scenario",
        "scenarioDesc": "The larger the CR, the bigger priority (duplication skus exist) / H&B,Pantry Top 300_2days",
        "production": false,
        "rules": [
            {
                "active": true,
                "filterRef": "22c3a1f6-0eec-40a5-a314-3802641a428f",
                "ruleName": "SEOUL_ROQ≥CQ_F≥0.4:::up",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "a3cf83c0-6bbd-4568-8b9f-2b3def32a8ce",
                "ruleName": "SEOUL_ROQ≥CQ_F<0.4:::down",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Off",
                    "value": "ROUND_OFF"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "36a8a552-0cb8-4f2b-8432-fd6a9320c7f3",
                "ruleName": "SEOUL_ROQ<CQ:::up",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "a06f65ca-a6b7-4a4a-b613-cd704a4f0892",
                "ruleName": "DAEGU:::down",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Off",
                    "value": "ROUND_OFF"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "4c3daba9-84c8-42d9-8a01-781eeebe2d83",
                "ruleName": "CR Override_1)LowVDP(all)_0.97",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.97,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "efc611d5-c376-4195-8a58-0937882682d3",
                "ruleName": "CR Override_1)LowVDP(all)_0.95",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.95,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "bdf1dbad-e661-4d23-b89a-c475700c56b7",
                "ruleName": "CR Override_6)25WPromotion(25WTop300)_0.95",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.95,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "0377f366-05e5-4283-8c0f-7fa51b5fc1b7",
                "ruleName": "CR Override_2)Top100_HHS_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "b558ea0b-f711-4c91-add2-db790219d5a1",
                "ruleName": "CR Override_2)Top100_Pantry_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "d18fa35f-f191-4c12-80f8-9ac1fd4bdef7",
                "ruleName": "CR Override_3)Maple(all)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "353777a7-07ed-4a23-8c62-338d2af0f480",
                "ruleName": "CR Override_4)Core_Baby(Diapering&Formula)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "90b9074c-7ed9-49e8-a8c6-65694a6e7b35",
                "ruleName": "CR Override_5)Promotion(all)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "eb835951-dea6-428e-81d5-e844ab610934",
                "ruleName": "PlanHorizon_4days_Top300",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Plan horizon adjustment",
                    "value": "PLAN_HORIZON_ADJUSTMENT"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": 48
            },
            {
                "active": true,
                "filterRef": null,
                "ruleName": "Rule14_2015-7-7_16:38:1",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Network allocation",
                    "value": "NETWORK_ALLOCATION"
                },
                "action": {
                    "display": "Update FC",
                    "value": "UPDATE_FC"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            }
        ]
    },
    {
        "_id": {
            "$oid": "55adb0b273556865ec00000f"
        },
        "guid": "ffcebcca-b30c-4fd1-99fa-4e4d7df05cf8",
        "lastEditUser": "Gilseon",
        "lastUpdateTime": {
            "$date": "1437457461931"
        },
        "author": "Gilseon",
        "scenarioName": "TEST_(0721~)_30W_Scenario_Round(SEOUL)",
        "scenarioDesc": "The larger the CR, the bigger priority (duplication skus exist) / H&B,Pantry Top 300_2days",
        "production": false,
        "rules": [
            {
                "active": true,
                "filterRef": "cbcdfed7-501d-4257-829d-92e295939746",
                "ruleName": "1)(SEOUL)&(ROQ<CQ)&(CQ>30)&(FC>=.2):::UP",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "22f24425-5ec8-4f64-9f08-3e5b54c4b472",
                "ruleName": "2)(SEOUL)&(ROQ<CQ)&(CQ>30)&(FC<.2):::DOWN",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Off",
                    "value": "ROUND_OFF"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "168f2e57-9883-4a7d-86b6-cd4c78a893bd",
                "ruleName": "3)(SEOUL)&(ROQ<CQ)&(CQ<=30):::UP",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "0a6f262a-53a5-40f9-98d9-1b20f806f949",
                "ruleName": "4)(SEOUL)&(ROQ>CQ)&(FC>=.4):::UP",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "1deede6e-b28e-4972-81a1-11f75f6b58b8",
                "ruleName": "5)(SEOUL)&(ROQ>CQ)&(FC<.4):::DOWN",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Off",
                    "value": "ROUND_OFF"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "a06f65ca-a6b7-4a4a-b613-cd704a4f0892",
                "ruleName": "6)(DAEGU):::down",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Off",
                    "value": "ROUND_OFF"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "4c3daba9-84c8-42d9-8a01-781eeebe2d83",
                "ruleName": "CR Override_1)LowVDP(all)_0.97",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.97,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "efc611d5-c376-4195-8a58-0937882682d3",
                "ruleName": "CR Override_1)LowVDP(all)_0.95",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.95,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "bdf1dbad-e661-4d23-b89a-c475700c56b7",
                "ruleName": "CR Override_6)25WPromotion(25WTop300)_0.95",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.95,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "0377f366-05e5-4283-8c0f-7fa51b5fc1b7",
                "ruleName": "CR Override_2)Top100_HHS_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "b558ea0b-f711-4c91-add2-db790219d5a1",
                "ruleName": "CR Override_2)Top100_Pantry_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "d18fa35f-f191-4c12-80f8-9ac1fd4bdef7",
                "ruleName": "CR Override_3)Maple(all)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "353777a7-07ed-4a23-8c62-338d2af0f480",
                "ruleName": "CR Override_4)Core_Baby(Diapering&Formula)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "90b9074c-7ed9-49e8-a8c6-65694a6e7b35",
                "ruleName": "CR Override_5)Promotion(all)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "eb835951-dea6-428e-81d5-e844ab610934",
                "ruleName": "PlanHorizon_4days_Top300",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Plan horizon adjustment",
                    "value": "PLAN_HORIZON_ADJUSTMENT"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": 48
            },
            {
                "active": true,
                "filterRef": null,
                "ruleName": "Rule14_2015-7-7_16:38:1",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Network allocation",
                    "value": "NETWORK_ALLOCATION"
                },
                "action": {
                    "display": "Update FC",
                    "value": "UPDATE_FC"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            }
        ]
    },
    {
        "_id": {
            "$oid": "55daf0e3ac37f232db000001"
        },
        "guid": "7ac12996-6d2f-4ea1-9d0b-f967360b9567",
        "lastEditUser": "Dan",
        "lastUpdateTime": {
            "$date": "1440411875007"
        },
        "author": "anonymous",
        "scenarioName": "Scenario36_Dan_2015-8-24_18:24:34",
        "scenarioDesc": null,
        "production": false,
        "rules": [
            {
                "active": true,
                "filterRef": null,
                "ruleName": "Case rounding factor rule",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            }
        ]
    },
    {
        "_id": {
            "$oid": "55e8ea5f735568672c000003"
        },
        "guid": "ab832dfb-203a-4009-ae1c-182bb176124b",
        "lastEditUser": "CHLOE",
        "lastUpdateTime": {
            "$date": "1441589456043"
        },
        "author": "anonymous",
        "scenarioName": "1_TEST_(*0904~)_36W_Scenario_TEST",
        "scenarioDesc": "The larger the CR, the bigger priority (duplication skus exist) / H&B,Pantry Top 300_2days",
        "production": false,
        "rules": [
            {
                "active": true,
                "filterRef": "1fc19fdb-62eb-4f52-ab57-b6bc92ddf811",
                "ruleName": "Rounding_1)SEOUL_roundup",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "06bc1670-5e67-42e6-89f6-e26d649dd0f0",
                "ruleName": "Rounding_2)DAEGU_roundup",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": null,
                "ruleName": "Rule14_2015-7-7_16:38:1",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Network allocation",
                    "value": "NETWORK_ALLOCATION"
                },
                "action": {
                    "display": "Update FC",
                    "value": "UPDATE_FC"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            }
        ]
    },
    {
        "_id": {
            "$oid": "565817d77355684148000008"
        },
        "guid": "be81b642-b734-4102-a0ed-538acbc818a4",
        "lastEditUser": "anonymous",
        "lastUpdateTime": {
            "$date": "1448976075118"
        },
        "author": "anonymous",
        "scenarioName": "System Adoption",
        "scenarioDesc": null,
        "production": false,
        "rules": [
            {
                "active": true,
                "filterRef": null,
                "ruleName": "Case rounding factor rule",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "061af6a3-f007-4c18-b507-d7c4c9466f0b",
                "ruleName": "Reactive Order",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Reactive order ",
                    "value": "REACTIVE_ORDER"
                },
                "action": {
                    "display": "Adjust Order day",
                    "value": "ADJUST_ORDER_DAY"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": null,
                "ruleName": "Rule3_2015-12-1_21:21:12",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Network allocation",
                    "value": "NETWORK_ALLOCATION"
                },
                "action": {
                    "display": "Update FC",
                    "value": "UPDATE_FC"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            }
        ]
    },
    {
        "_id": {
            "$oid": "55adc85673556865cb00000e"
        },
        "guid": "1c462122-a2f9-45d6-9cf6-4d410c061e34",
        "lastEditUser": "Gilseon",
        "lastUpdateTime": {
            "$date": "1437455299324"
        },
        "author": "Gilseon",
        "scenarioName": "TEST_(+0722~)_30W_Scenario_Round(SEOUL)",
        "scenarioDesc": "The larger the CR, the bigger priority (duplication skus exist) / H&B,Pantry Top 300_2days",
        "production": false,
        "rules": [
            {
                "active": true,
                "filterRef": "cbcdfed7-501d-4257-829d-92e295939746",
                "ruleName": "1)(SEOUL)&(ROQ<CQ)&(CQ>30)&(FC>=.2):::UP",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "22f24425-5ec8-4f64-9f08-3e5b54c4b472",
                "ruleName": "2)(SEOUL)&(ROQ<CQ)&(CQ>30)&(FC<.2):::DOWN",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Off",
                    "value": "ROUND_OFF"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "168f2e57-9883-4a7d-86b6-cd4c78a893bd",
                "ruleName": "3)(SEOUL)&(ROQ<CQ)&(CQ<=30):::UP",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "0a6f262a-53a5-40f9-98d9-1b20f806f949",
                "ruleName": "4)(SEOUL)&(ROQ>CQ)&(FC>=.4):::UP",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "1deede6e-b28e-4972-81a1-11f75f6b58b8",
                "ruleName": "5)(SEOUL)&(ROQ>CQ)&(FC<.4):::DOWN",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Off",
                    "value": "ROUND_OFF"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "a06f65ca-a6b7-4a4a-b613-cd704a4f0892",
                "ruleName": "6)(DAEGU):::down",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Off",
                    "value": "ROUND_OFF"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "4c3daba9-84c8-42d9-8a01-781eeebe2d83",
                "ruleName": "CR Override_1)LowVDP(all)_0.97",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.97,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "efc611d5-c376-4195-8a58-0937882682d3",
                "ruleName": "CR Override_1)LowVDP(all)_0.95",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.95,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "bdf1dbad-e661-4d23-b89a-c475700c56b7",
                "ruleName": "CR Override_6)25WPromotion(25WTop300)_0.95",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.95,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "ff9f1dab-d15b-4c91-ba34-85f6734144ea",
                "ruleName": "CR Override_2)Top100_HHS_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "612658c8-1a6a-4f15-bf1d-d1bbda9e0d4c",
                "ruleName": "CR Override_2)Top100_Pantry_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "d18fa35f-f191-4c12-80f8-9ac1fd4bdef7",
                "ruleName": "CR Override_3)Maple(all)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "353777a7-07ed-4a23-8c62-338d2af0f480",
                "ruleName": "CR Override_4)Core_Baby(Diapering&Formula)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "90b9074c-7ed9-49e8-a8c6-65694a6e7b35",
                "ruleName": "CR Override_5)Promotion(all)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "e414e04c-3651-4d25-ae3b-cc650a3bbb5a",
                "ruleName": "PlanHorizon_4days_Top300",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Plan horizon adjustment",
                    "value": "PLAN_HORIZON_ADJUSTMENT"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": 48
            },
            {
                "active": true,
                "filterRef": null,
                "ruleName": "Rule14_2015-7-7_16:38:1",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Network allocation",
                    "value": "NETWORK_ALLOCATION"
                },
                "action": {
                    "display": "Update FC",
                    "value": "UPDATE_FC"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            }
        ]
    },
    {
        "_id": {
            "$oid": "55adebe673556865e3000008"
        },
        "guid": "612d5bcf-7ce3-4a15-b3f0-c86048422a94",
        "lastEditUser": "Mike",
        "lastUpdateTime": {
            "$date": "1437463296403"
        },
        "author": "Mike",
        "scenarioName": "TEST_(+0722~)_30W_Scenario-Adj High OOS Cats",
        "scenarioDesc": "The larger the CR, the bigger priority (duplication skus exist) / H&B,Pantry Top 300_2days",
        "production": false,
        "rules": [
            {
                "active": true,
                "filterRef": "22c3a1f6-0eec-40a5-a314-3802641a428f",
                "ruleName": "SEOUL_ROQ≥CQ_F≥0.4:::up",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "a3cf83c0-6bbd-4568-8b9f-2b3def32a8ce",
                "ruleName": "SEOUL_ROQ≥CQ_F<0.4:::down",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Off",
                    "value": "ROUND_OFF"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "36a8a552-0cb8-4f2b-8432-fd6a9320c7f3",
                "ruleName": "SEOUL_ROQ<CQ:::up",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "a06f65ca-a6b7-4a4a-b613-cd704a4f0892",
                "ruleName": "DAEGU:::down",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Off",
                    "value": "ROUND_OFF"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "4c3daba9-84c8-42d9-8a01-781eeebe2d83",
                "ruleName": "CR Override_1)LowVDP(all)_0.97",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.97,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "efc611d5-c376-4195-8a58-0937882682d3",
                "ruleName": "CR Override_1)LowVDP(all)_0.95",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.95,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "bdf1dbad-e661-4d23-b89a-c475700c56b7",
                "ruleName": "CR Override_6)25WPromotion(25WTop300)_0.95",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.95,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "ff9f1dab-d15b-4c91-ba34-85f6734144ea",
                "ruleName": "CR Override_2)Top100_HHS_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "612658c8-1a6a-4f15-bf1d-d1bbda9e0d4c",
                "ruleName": "CR Override_2)Top100_Pantry_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "d18fa35f-f191-4c12-80f8-9ac1fd4bdef7",
                "ruleName": "CR Override_3)Maple(all)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "353777a7-07ed-4a23-8c62-338d2af0f480",
                "ruleName": "CR Override_4)Core_Baby(Diapering&Formula)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "90b9074c-7ed9-49e8-a8c6-65694a6e7b35",
                "ruleName": "CR Override_5)Promotion(all)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "e414e04c-3651-4d25-ae3b-cc650a3bbb5a",
                "ruleName": "PlanHorizon_4days_Top300",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Plan horizon adjustment",
                    "value": "PLAN_HORIZON_ADJUSTMENT"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": 48
            },
            {
                "active": true,
                "filterRef": null,
                "ruleName": "Rule14_2015-7-7_16:38:1",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Network allocation",
                    "value": "NETWORK_ALLOCATION"
                },
                "action": {
                    "display": "Update FC",
                    "value": "UPDATE_FC"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "44eb7fcd-adcb-484e-97f9-88229bf9c97c",
                "ruleName": "H&B Haircare Plan Horizon Increase",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Plan horizon adjustment",
                    "value": "PLAN_HORIZON_ADJUSTMENT"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": 48
            },
            {
                "active": true,
                "filterRef": "83888b31-9a4a-44d4-b3e6-a01053910ebe",
                "ruleName": "H&B Makeup Plan Horizon Increase",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Plan horizon adjustment",
                    "value": "PLAN_HORIZON_ADJUSTMENT"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": 48
            },
            {
                "active": true,
                "filterRef": "85040a4b-882a-4311-9187-6b5bdafdf57d",
                "ruleName": "Pantry Beverages Plan Horizon Increase",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Plan horizon adjustment",
                    "value": "PLAN_HORIZON_ADJUSTMENT"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": 48
            },
            {
                "active": true,
                "filterRef": "07013054-db13-4f73-87b3-d21386e440be",
                "ruleName": "Pantry Snacks Plan Horizon Increase",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Plan horizon adjustment",
                    "value": "PLAN_HORIZON_ADJUSTMENT"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": 48
            },
            {
                "active": true,
                "filterRef": "4c519f02-96f4-4562-a19a-6388dec77070",
                "ruleName": "Toys Stationery Plan Horizon Increase",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Plan horizon adjustment",
                    "value": "PLAN_HORIZON_ADJUSTMENT"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": 48
            }
        ]
    },
    {
        "_id": {
            "$oid": "55aeea2f73556865e000000b"
        },
        "guid": "3933c930-b36a-42fd-8b4e-19d67c450f02",
        "lastEditUser": "Gilseon",
        "lastUpdateTime": {
            "$date": "1438648947847"
        },
        "author": "Gilseon",
        "scenarioName": "(0722~)_30W_Scenario",
        "scenarioDesc": "The larger the CR, the bigger priority (duplication skus exist) / H&B,Pantry Top 300_2days",
        "production": false,
        "rules": [
            {
                "active": true,
                "filterRef": "22c3a1f6-0eec-40a5-a314-3802641a428f",
                "ruleName": "SEOUL_ROQ≥CQ_F≥0.4:::up",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "a3cf83c0-6bbd-4568-8b9f-2b3def32a8ce",
                "ruleName": "SEOUL_ROQ≥CQ_F<0.4:::down",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Off",
                    "value": "ROUND_OFF"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "36a8a552-0cb8-4f2b-8432-fd6a9320c7f3",
                "ruleName": "SEOUL_ROQ<CQ:::up",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "a06f65ca-a6b7-4a4a-b613-cd704a4f0892",
                "ruleName": "DAEGU:::down",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Off",
                    "value": "ROUND_OFF"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "4c3daba9-84c8-42d9-8a01-781eeebe2d83",
                "ruleName": "CR Override_1)LowVDP(all)_0.97",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.97,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "efc611d5-c376-4195-8a58-0937882682d3",
                "ruleName": "CR Override_1)LowVDP(all)_0.95",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.95,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "bdf1dbad-e661-4d23-b89a-c475700c56b7",
                "ruleName": "CR Override_6)25WPromotion(25WTop300)_0.95",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.95,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "ff9f1dab-d15b-4c91-ba34-85f6734144ea",
                "ruleName": "CR Override_2)Top100_HHS_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "612658c8-1a6a-4f15-bf1d-d1bbda9e0d4c",
                "ruleName": "CR Override_2)Top100_Pantry_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "d18fa35f-f191-4c12-80f8-9ac1fd4bdef7",
                "ruleName": "CR Override_3)Maple(all)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "353777a7-07ed-4a23-8c62-338d2af0f480",
                "ruleName": "CR Override_4)Core_Baby(Diapering&Formula)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "90b9074c-7ed9-49e8-a8c6-65694a6e7b35",
                "ruleName": "CR Override_5)Promotion(all)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": null,
                "ruleName": "Rule14_2015-7-7_16:38:1",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Network allocation",
                    "value": "NETWORK_ALLOCATION"
                },
                "action": {
                    "display": "Update FC",
                    "value": "UPDATE_FC"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "e414e04c-3651-4d25-ae3b-cc650a3bbb5a",
                "ruleName": "PlanHorizon_2days_Top300",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Plan horizon adjustment",
                    "value": "PLAN_HORIZON_ADJUSTMENT"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": 48
            },
            {
                "active": true,
                "filterRef": "44eb7fcd-adcb-484e-97f9-88229bf9c97c",
                "ruleName": "PlanHorizon_2days_H&B_Haircare",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Plan horizon adjustment",
                    "value": "PLAN_HORIZON_ADJUSTMENT"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": 48
            },
            {
                "active": true,
                "filterRef": "83888b31-9a4a-44d4-b3e6-a01053910ebe",
                "ruleName": "PlanHorizon_2days_H&B_Makeup",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Plan horizon adjustment",
                    "value": "PLAN_HORIZON_ADJUSTMENT"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": 48
            },
            {
                "active": true,
                "filterRef": "85040a4b-882a-4311-9187-6b5bdafdf57d",
                "ruleName": "PlanHorizon_2days_Pantry_Beverages",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Plan horizon adjustment",
                    "value": "PLAN_HORIZON_ADJUSTMENT"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": 48
            },
            {
                "active": true,
                "filterRef": "07013054-db13-4f73-87b3-d21386e440be",
                "ruleName": "PlanHorizon_2days_Pantry_Snacks",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Plan horizon adjustment",
                    "value": "PLAN_HORIZON_ADJUSTMENT"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": 48
            },
            {
                "active": true,
                "filterRef": "4c519f02-96f4-4562-a19a-6388dec77070",
                "ruleName": "PlanHorizon_2days_Toys_Stationery",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Plan horizon adjustment",
                    "value": "PLAN_HORIZON_ADJUSTMENT"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": 48
            }
        ]
    },
    {
        "_id": {
            "$oid": "55b0675a7355683544000001"
        },
        "guid": "3d3d76c3-b4d4-4f37-b888-0718208c4353",
        "lastEditUser": "anonymous",
        "lastUpdateTime": {
            "$date": "1437990104778"
        },
        "author": "Gilseon",
        "scenarioName": "(0723~)_30W_Scenario",
        "scenarioDesc": "The larger the CR, the bigger priority (duplication skus exist) / H&B,Pantry Top 300_2days",
        "production": false,
        "rules": [
            {
                "active": true,
                "filterRef": "cbcdfed7-501d-4257-829d-92e295939746",
                "ruleName": "Rounding_1)(SEOUL)&(ROQ<CQ)&(CQ>30)&(FC>=.2):::up",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "22f24425-5ec8-4f64-9f08-3e5b54c4b472",
                "ruleName": "Rounding_2)(SEOUL)&(ROQ<CQ)&(CQ>30)&(FC<.2):::down",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Off",
                    "value": "ROUND_OFF"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "168f2e57-9883-4a7d-86b6-cd4c78a893bd",
                "ruleName": "Rounding_3)(SEOUL)&(ROQ<CQ)&(CQ<=30):::up",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "0a6f262a-53a5-40f9-98d9-1b20f806f949",
                "ruleName": "Rounding_4)(SEOUL)&(ROQ>CQ)&(FC>=.4):::up",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "1deede6e-b28e-4972-81a1-11f75f6b58b8",
                "ruleName": "Rounding_5)(SEOUL)&(ROQ>CQ)&(FC<.4):::down",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Off",
                    "value": "ROUND_OFF"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "a06f65ca-a6b7-4a4a-b613-cd704a4f0892",
                "ruleName": "Rounding_6)(DAEGU):::down",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Off",
                    "value": "ROUND_OFF"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "4c3daba9-84c8-42d9-8a01-781eeebe2d83",
                "ruleName": "CR Override_1)LowVDP(all)_0.97",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.97,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "efc611d5-c376-4195-8a58-0937882682d3",
                "ruleName": "CR Override_1)LowVDP(all)_0.95",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.95,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "bdf1dbad-e661-4d23-b89a-c475700c56b7",
                "ruleName": "CR Override_6)25WPromotion(25WTop300)_0.95",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.95,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "ff9f1dab-d15b-4c91-ba34-85f6734144ea",
                "ruleName": "CR Override_2)Top100_HHS_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "612658c8-1a6a-4f15-bf1d-d1bbda9e0d4c",
                "ruleName": "CR Override_2)Top100_Pantry_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "d18fa35f-f191-4c12-80f8-9ac1fd4bdef7",
                "ruleName": "CR Override_3)Maple(all)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "353777a7-07ed-4a23-8c62-338d2af0f480",
                "ruleName": "CR Override_4)Core_Baby(Diapering&Formula)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "90b9074c-7ed9-49e8-a8c6-65694a6e7b35",
                "ruleName": "CR Override_5)Promotion(all)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": null,
                "ruleName": "Rule14_2015-7-7_16:38:1",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Network allocation",
                    "value": "NETWORK_ALLOCATION"
                },
                "action": {
                    "display": "Update FC",
                    "value": "UPDATE_FC"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "e414e04c-3651-4d25-ae3b-cc650a3bbb5a",
                "ruleName": "PlanHorizon_2days_Top300",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Plan horizon adjustment",
                    "value": "PLAN_HORIZON_ADJUSTMENT"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": 48
            },
            {
                "active": true,
                "filterRef": "44eb7fcd-adcb-484e-97f9-88229bf9c97c",
                "ruleName": "PlanHorizon_2days_H&B_Haircare",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Plan horizon adjustment",
                    "value": "PLAN_HORIZON_ADJUSTMENT"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": 48
            },
            {
                "active": true,
                "filterRef": "83888b31-9a4a-44d4-b3e6-a01053910ebe",
                "ruleName": "PlanHorizon_2days_H&B_Makeup",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Plan horizon adjustment",
                    "value": "PLAN_HORIZON_ADJUSTMENT"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": 48
            },
            {
                "active": true,
                "filterRef": "85040a4b-882a-4311-9187-6b5bdafdf57d",
                "ruleName": "PlanHorizon_2days_Pantry_Beverages",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Plan horizon adjustment",
                    "value": "PLAN_HORIZON_ADJUSTMENT"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": 48
            },
            {
                "active": true,
                "filterRef": "07013054-db13-4f73-87b3-d21386e440be",
                "ruleName": "PlanHorizon_2days_Pantry_Snacks",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Plan horizon adjustment",
                    "value": "PLAN_HORIZON_ADJUSTMENT"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": 48
            },
            {
                "active": true,
                "filterRef": "4c519f02-96f4-4562-a19a-6388dec77070",
                "ruleName": "PlanHorizon_2days_Toys_Stationery",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Plan horizon adjustment",
                    "value": "PLAN_HORIZON_ADJUSTMENT"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": 48
            }
        ]
    },
    {
        "_id": {
            "$oid": "55c0416f7355687b9b000002"
        },
        "guid": "e4e8e70e-0e00-428a-8d4f-c1dd55ea37a7",
        "lastEditUser": "Chloe",
        "lastUpdateTime": {
            "$date": "1438852009368"
        },
        "author": "WONHEE",
        "scenarioName": "(0804~)_32W_Scenario",
        "scenarioDesc": "The larger the CR, the bigger priority (duplication skus exist) / H&B,Pantry Top 300_2days",
        "production": false,
        "rules": [
            {
                "active": true,
                "filterRef": "cbcdfed7-501d-4257-829d-92e295939746",
                "ruleName": "Rounding_1)(SEOUL)&(ROQ<CQ)&(CQ>30)&(FC>=.2):::up",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "22f24425-5ec8-4f64-9f08-3e5b54c4b472",
                "ruleName": "Rounding_2)(SEOUL)&(ROQ<CQ)&(CQ>30)&(FC<.2):::down",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Off",
                    "value": "ROUND_OFF"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "168f2e57-9883-4a7d-86b6-cd4c78a893bd",
                "ruleName": "Rounding_3)(SEOUL)&(ROQ<CQ)&(CQ<=30):::up",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "0a6f262a-53a5-40f9-98d9-1b20f806f949",
                "ruleName": "Rounding_4)(SEOUL)&(ROQ>CQ)&(FC>=.4):::up",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "1deede6e-b28e-4972-81a1-11f75f6b58b8",
                "ruleName": "Rounding_5)(SEOUL)&(ROQ>CQ)&(FC<.4):::down",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Off",
                    "value": "ROUND_OFF"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "a06f65ca-a6b7-4a4a-b613-cd704a4f0892",
                "ruleName": "Rounding_6)(DAEGU):::down",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Off",
                    "value": "ROUND_OFF"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "4c3daba9-84c8-42d9-8a01-781eeebe2d83",
                "ruleName": "CR Override_1)LowVDP(all)_0.97",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.97,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "efc611d5-c376-4195-8a58-0937882682d3",
                "ruleName": "CR Override_1)LowVDP(all)_0.95",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.95,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "bdf1dbad-e661-4d23-b89a-c475700c56b7",
                "ruleName": "CR Override_6)25WPromotion(25WTop300)_0.95",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.95,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "9d486e33-7082-4b23-b998-2fdb87cac534",
                "ruleName": "CR Override_2)Top100_HHS_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "d86071f6-3243-40c7-a1b0-c6df1182b2de",
                "ruleName": "CR Override_2)Top100_Pantry_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "a7524237-2701-43d8-af21-cbf79a030375",
                "ruleName": "CR Override_3)Maple(all)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "353777a7-07ed-4a23-8c62-338d2af0f480",
                "ruleName": "CR Override_4)Core_Baby(Diapering&Formula)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "90b9074c-7ed9-49e8-a8c6-65694a6e7b35",
                "ruleName": "CR Override_5)Promotion(all)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": null,
                "ruleName": "Rule14_2015-7-7_16:38:1",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Network allocation",
                    "value": "NETWORK_ALLOCATION"
                },
                "action": {
                    "display": "Update FC",
                    "value": "UPDATE_FC"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "e414e04c-3651-4d25-ae3b-cc650a3bbb5a",
                "ruleName": "PlanHorizon_2days_Top300",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Plan horizon adjustment",
                    "value": "PLAN_HORIZON_ADJUSTMENT"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": 48
            },
            {
                "active": true,
                "filterRef": "44eb7fcd-adcb-484e-97f9-88229bf9c97c",
                "ruleName": "PlanHorizon_2days_H&B_Haircare",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Plan horizon adjustment",
                    "value": "PLAN_HORIZON_ADJUSTMENT"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": 48
            },
            {
                "active": true,
                "filterRef": "83888b31-9a4a-44d4-b3e6-a01053910ebe",
                "ruleName": "PlanHorizon_2days_H&B_Makeup",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Plan horizon adjustment",
                    "value": "PLAN_HORIZON_ADJUSTMENT"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": 48
            },
            {
                "active": true,
                "filterRef": "85040a4b-882a-4311-9187-6b5bdafdf57d",
                "ruleName": "PlanHorizon_2days_Pantry_Beverages",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Plan horizon adjustment",
                    "value": "PLAN_HORIZON_ADJUSTMENT"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": 48
            },
            {
                "active": true,
                "filterRef": "07013054-db13-4f73-87b3-d21386e440be",
                "ruleName": "PlanHorizon_2days_Pantry_Snacks",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Plan horizon adjustment",
                    "value": "PLAN_HORIZON_ADJUSTMENT"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": 48
            },
            {
                "active": true,
                "filterRef": "4c519f02-96f4-4562-a19a-6388dec77070",
                "ruleName": "PlanHorizon_2days_Toys_Stationery",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Plan horizon adjustment",
                    "value": "PLAN_HORIZON_ADJUSTMENT"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": 48
            }
        ]
    },
    {
        "_id": {
            "$oid": "55c07de5735568357c000001"
        },
        "guid": "7c915b59-20ac-46e8-a914-2164f40aee98",
        "lastEditUser": "anonymous",
        "lastUpdateTime": {
            "$date": "1444813038809"
        },
        "author": "jeff",
        "scenarioName": "Jeff_Test_Copy_of_PlanHorizonTest_(*0804~)_32W_Scenario_",
        "scenarioDesc": "The larger the CR, the bigger priority (duplication skus exist) / H&B,Pantry Top 300_2days",
        "production": false,
        "rules": [
            {
                "active": true,
                "filterRef": "cbcdfed7-501d-4257-829d-92e295939746",
                "ruleName": "Rounding_1)(SEOUL)&(ROQ<CQ)&(CQ>30)&(FC>=.2):::up",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "22f24425-5ec8-4f64-9f08-3e5b54c4b472",
                "ruleName": "Rounding_2)(SEOUL)&(ROQ<CQ)&(CQ>30)&(FC<.2):::down",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Off",
                    "value": "ROUND_OFF"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "168f2e57-9883-4a7d-86b6-cd4c78a893bd",
                "ruleName": "Rounding_3)(SEOUL)&(ROQ<CQ)&(CQ<=30):::up",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "0a6f262a-53a5-40f9-98d9-1b20f806f949",
                "ruleName": "Rounding_4)(SEOUL)&(ROQ>CQ)&(FC>=.4):::up",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "1deede6e-b28e-4972-81a1-11f75f6b58b8",
                "ruleName": "Rounding_5)(SEOUL)&(ROQ>CQ)&(FC<.4):::down",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Off",
                    "value": "ROUND_OFF"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "a06f65ca-a6b7-4a4a-b613-cd704a4f0892",
                "ruleName": "Rounding_6)(DAEGU):::down",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Off",
                    "value": "ROUND_OFF"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "483d43fe-8900-473a-8d13-5c749b4bf2bb",
                "ruleName": "topx_rule",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.7,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "4c3daba9-84c8-42d9-8a01-781eeebe2d83",
                "ruleName": "CR Override_1)LowVDP(all)_0.97",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.97,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "efc611d5-c376-4195-8a58-0937882682d3",
                "ruleName": "CR Override_1)LowVDP(all)_0.95",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.95,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "bdf1dbad-e661-4d23-b89a-c475700c56b7",
                "ruleName": "CR Override_6)25WPromotion(25WTop300)_0.95",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.95,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "9d486e33-7082-4b23-b998-2fdb87cac534",
                "ruleName": "CR Override_2)Top100_HHS_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "d86071f6-3243-40c7-a1b0-c6df1182b2de",
                "ruleName": "CR Override_2)Top100_Pantry_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "a7524237-2701-43d8-af21-cbf79a030375",
                "ruleName": "CR Override_3)Maple(all)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "353777a7-07ed-4a23-8c62-338d2af0f480",
                "ruleName": "CR Override_4)Core_Baby(Diapering&Formula)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "90b9074c-7ed9-49e8-a8c6-65694a6e7b35",
                "ruleName": "CR Override_5)Promotion(all)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": null,
                "ruleName": "Rule14_2015-7-7_16:38:1",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Network allocation",
                    "value": "NETWORK_ALLOCATION"
                },
                "action": {
                    "display": "Update FC",
                    "value": "UPDATE_FC"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "e414e04c-3651-4d25-ae3b-cc650a3bbb5a",
                "ruleName": "PlanHorizon_2days_Top300",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Plan horizon adjustment",
                    "value": "PLAN_HORIZON_ADJUSTMENT"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": 48
            },
            {
                "active": true,
                "filterRef": "44eb7fcd-adcb-484e-97f9-88229bf9c97c",
                "ruleName": "PlanHorizon_2days_H&B_Haircare",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Plan horizon adjustment",
                    "value": "PLAN_HORIZON_ADJUSTMENT"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": 48
            },
            {
                "active": true,
                "filterRef": "83888b31-9a4a-44d4-b3e6-a01053910ebe",
                "ruleName": "PlanHorizon_2days_H&B_Makeup",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Plan horizon adjustment",
                    "value": "PLAN_HORIZON_ADJUSTMENT"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": 48
            },
            {
                "active": true,
                "filterRef": "85040a4b-882a-4311-9187-6b5bdafdf57d",
                "ruleName": "PlanHorizon_2days_Pantry_Beverages",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Plan horizon adjustment",
                    "value": "PLAN_HORIZON_ADJUSTMENT"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": 48
            },
            {
                "active": true,
                "filterRef": "07013054-db13-4f73-87b3-d21386e440be",
                "ruleName": "PlanHorizon_2days_Pantry_Snacks",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Plan horizon adjustment",
                    "value": "PLAN_HORIZON_ADJUSTMENT"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": 48
            },
            {
                "active": true,
                "filterRef": "4c519f02-96f4-4562-a19a-6388dec77070",
                "ruleName": "PlanHorizon_2days_Toys_Stationery",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Plan horizon adjustment",
                    "value": "PLAN_HORIZON_ADJUSTMENT"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": 48
            },
            {
                "active": true,
                "filterRef": "c03ba00d-f816-493d-8dc2-06db6f072b63",
                "ruleName": "PlanHorizon_2days_HHS_maple",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Plan horizon adjustment",
                    "value": "PLAN_HORIZON_ADJUSTMENT"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": 48
            }
        ]
    },
    {
        "_id": {
            "$oid": "55c1d5937355686094000001"
        },
        "guid": "29fd1896-715f-40fc-a3c9-02db68da2322",
        "lastEditUser": "cho",
        "lastUpdateTime": {
            "$date": "1438852050107"
        },
        "author": "cho",
        "scenarioName": "test_(0804~)_32W_Scenario",
        "scenarioDesc": "The larger the CR, the bigger priority (duplication skus exist) / H&B,Pantry Top 300_2days",
        "production": false,
        "rules": [
            {
                "active": true,
                "filterRef": "cbcdfed7-501d-4257-829d-92e295939746",
                "ruleName": "Rounding_1)(SEOUL)&(ROQ<CQ)&(CQ>30)&(FC>=.2):::up",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "22f24425-5ec8-4f64-9f08-3e5b54c4b472",
                "ruleName": "Rounding_2)(SEOUL)&(ROQ<CQ)&(CQ>30)&(FC<.2):::down",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Off",
                    "value": "ROUND_OFF"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "168f2e57-9883-4a7d-86b6-cd4c78a893bd",
                "ruleName": "Rounding_3)(SEOUL)&(ROQ<CQ)&(CQ<=30):::up",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "0a6f262a-53a5-40f9-98d9-1b20f806f949",
                "ruleName": "Rounding_4)(SEOUL)&(ROQ>CQ)&(FC>=.4):::up",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "1deede6e-b28e-4972-81a1-11f75f6b58b8",
                "ruleName": "Rounding_5)(SEOUL)&(ROQ>CQ)&(FC<.4):::down",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Off",
                    "value": "ROUND_OFF"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "a06f65ca-a6b7-4a4a-b613-cd704a4f0892",
                "ruleName": "Rounding_6)(DAEGU):::down",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Off",
                    "value": "ROUND_OFF"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "9d486e33-7082-4b23-b998-2fdb87cac534",
                "ruleName": "CR Override_2)Top100_HHS_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "a7524237-2701-43d8-af21-cbf79a030375",
                "ruleName": "CR Override_3)Maple(all)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "353777a7-07ed-4a23-8c62-338d2af0f480",
                "ruleName": "CR Override_4)Core_Baby(Diapering&Formula)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "90b9074c-7ed9-49e8-a8c6-65694a6e7b35",
                "ruleName": "CR Override_5)Promotion(all)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": null,
                "ruleName": "Rule14_2015-7-7_16:38:1",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Network allocation",
                    "value": "NETWORK_ALLOCATION"
                },
                "action": {
                    "display": "Update FC",
                    "value": "UPDATE_FC"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "44eb7fcd-adcb-484e-97f9-88229bf9c97c",
                "ruleName": "PlanHorizon_2days_H&B_Haircare",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Plan horizon adjustment",
                    "value": "PLAN_HORIZON_ADJUSTMENT"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": 48
            },
            {
                "active": true,
                "filterRef": "83888b31-9a4a-44d4-b3e6-a01053910ebe",
                "ruleName": "PlanHorizon_2days_H&B_Makeup",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Plan horizon adjustment",
                    "value": "PLAN_HORIZON_ADJUSTMENT"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": 48
            },
            {
                "active": true,
                "filterRef": "4c519f02-96f4-4562-a19a-6388dec77070",
                "ruleName": "PlanHorizon_2days_Toys_Stationery",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Plan horizon adjustment",
                    "value": "PLAN_HORIZON_ADJUSTMENT"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": 48
            }
        ]
    },
    {
        "_id": {
            "$oid": "55c322d773556860b8000003"
        },
        "guid": "02f9061e-a81e-4521-bdfc-1a7854d81b08",
        "lastEditUser": "CHLOE",
        "lastUpdateTime": {
            "$date": "1439881223087"
        },
        "author": "Chloe",
        "scenarioName": "(*0817~)_34W_Scenario",
        "scenarioDesc": "The larger the CR, the bigger priority (duplication skus exist) / H&B,Pantry Top 300_2days",
        "production": false,
        "rules": [
            {
                "active": true,
                "filterRef": "cbcdfed7-501d-4257-829d-92e295939746",
                "ruleName": "Rounding_1)(SEOUL)&(ROQ<CQ)&(CQ>30)&(FC>=.2):::up",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "22f24425-5ec8-4f64-9f08-3e5b54c4b472",
                "ruleName": "Rounding_2)(SEOUL)&(ROQ<CQ)&(CQ>30)&(FC<.2):::down",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Off",
                    "value": "ROUND_OFF"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "168f2e57-9883-4a7d-86b6-cd4c78a893bd",
                "ruleName": "Rounding_3)(SEOUL)&(ROQ<CQ)&(CQ<=30):::up",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "0a6f262a-53a5-40f9-98d9-1b20f806f949",
                "ruleName": "Rounding_4)(SEOUL)&(ROQ>CQ)&(FC>=.4):::up",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "1deede6e-b28e-4972-81a1-11f75f6b58b8",
                "ruleName": "Rounding_5)(SEOUL)&(ROQ>CQ)&(FC<.4):::down",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Off",
                    "value": "ROUND_OFF"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "a06f65ca-a6b7-4a4a-b613-cd704a4f0892",
                "ruleName": "Rounding_6)(DAEGU):::down",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Off",
                    "value": "ROUND_OFF"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "26702354-2c7e-4713-8bcd-9fd43c291363",
                "ruleName": "CR Override_2)Top100_HHS_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "81e1c047-76e3-4767-a5c1-a0023e593527",
                "ruleName": "CR Override_3)Maple(all)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "353777a7-07ed-4a23-8c62-338d2af0f480",
                "ruleName": "CR Override_4)Core_Baby(Diapering&Formula)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": null,
                "ruleName": "Rule14_2015-7-7_16:38:1",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Network allocation",
                    "value": "NETWORK_ALLOCATION"
                },
                "action": {
                    "display": "Update FC",
                    "value": "UPDATE_FC"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "44eb7fcd-adcb-484e-97f9-88229bf9c97c",
                "ruleName": "PlanHorizon_2days_H&B_Haircare",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Plan horizon adjustment",
                    "value": "PLAN_HORIZON_ADJUSTMENT"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": 48
            },
            {
                "active": true,
                "filterRef": "83888b31-9a4a-44d4-b3e6-a01053910ebe",
                "ruleName": "PlanHorizon_2days_H&B_Makeup",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Plan horizon adjustment",
                    "value": "PLAN_HORIZON_ADJUSTMENT"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": 48
            },
            {
                "active": true,
                "filterRef": "4c519f02-96f4-4562-a19a-6388dec77070",
                "ruleName": "PlanHorizon_2days_Toys_Stationery",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Plan horizon adjustment",
                    "value": "PLAN_HORIZON_ADJUSTMENT"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": 48
            }
        ]
    },
    {
        "_id": {
            "$oid": "55ece8c8735568672f000004"
        },
        "guid": "2a029ad0-420c-40de-98be-cefb76d7d914",
        "lastEditUser": "CHLOE",
        "lastUpdateTime": {
            "$date": "1441589448786"
        },
        "author": "CHLOE",
        "scenarioName": "3_TEST_(*0904~)_36W_Scenario_TEST",
        "scenarioDesc": "The larger the CR, the bigger priority (duplication skus exist) / H&B,Pantry Top 300_2days",
        "production": false,
        "rules": [
            {
                "active": true,
                "filterRef": "1fc19fdb-62eb-4f52-ab57-b6bc92ddf811",
                "ruleName": "Rounding_1)SEOUL_roundup",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "06bc1670-5e67-42e6-89f6-e26d649dd0f0",
                "ruleName": "Rounding_2)DAEGU_roundup",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": null,
                "ruleName": "Rule14_2015-7-7_16:38:1",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Network allocation",
                    "value": "NETWORK_ALLOCATION"
                },
                "action": {
                    "display": "Update FC",
                    "value": "UPDATE_FC"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            }
        ]
    },
    {
        "_id": {
            "$oid": "566fb022735568415d000015"
        },
        "guid": "d078c866-b4a8-43f7-ab66-4fc08fa41e77",
        "lastEditUser": "anonymous",
        "lastUpdateTime": {
            "$date": "1450160162543"
        },
        "author": "anonymous",
        "scenarioName": "Tim_Test",
        "scenarioDesc": "The larger the CR, the bigger priority (duplication skus exist)",
        "production": false,
        "rules": [
            {
                "active": true,
                "filterRef": "22c3a1f6-0eec-40a5-a314-3802641a428f",
                "ruleName": "SEOUL_ROQ≥CQ_F≥0.4:::up",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "a3cf83c0-6bbd-4568-8b9f-2b3def32a8ce",
                "ruleName": "SEOUL_ROQ≥CQ_F<0.4:::down",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Off",
                    "value": "ROUND_OFF"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "36a8a552-0cb8-4f2b-8432-fd6a9320c7f3",
                "ruleName": "SEOUL_ROQ<CQ:::up",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "a06f65ca-a6b7-4a4a-b613-cd704a4f0892",
                "ruleName": "DAEGU:::down",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Off",
                    "value": "ROUND_OFF"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "c80a9d33-a335-43ff-aa51-f7c9fbf5c0b7",
                "ruleName": "CriticalRatioOverride_LowVDP(all)_0.97",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.97,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "54f4aa4e-de51-453f-9a69-77030831f2d7",
                "ruleName": "CriticalRatioOverride_Top100_HHS_0.97",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.97,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "b332ce9d-20ee-41cd-98be-19a325196e2c",
                "ruleName": "CriticalRatioOverride_Top100_Pantry_0.97",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.97,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "929802cc-e1c0-41ed-8ca9-8eddbbe455d3",
                "ruleName": "CriticalRatioOverride_LowVDP(all)_0.95",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.95,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "d41af46b-e945-400a-891a-f7a1dae45770",
                "ruleName": "CriticalRatioOverride_Top100_HHS_0.95",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.95,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "693c857d-d55e-4f46-86d2-6cc472570f78",
                "ruleName": "CriticalRatioOverride_Top100_Pantry_0.95",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.95,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "74c72421-a0c5-449c-9e62-0af685ad201c",
                "ruleName": "CriticalRatioOverride_Top100_Baby_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "0a86dc31-b608-4a4e-8f40-aa4f6c604851",
                "ruleName": "CriticalRatioOverride_Maple(all)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "0f46ce07-6739-4259-99cb-14e87b2e0824",
                "ruleName": "CriticalRatioOverride_Top100_HHS_0.92",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.92,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "f8bd7b24-574d-41ba-9439-c2835d5e9f4d",
                "ruleName": "CriticalRatioOverride_Top100_Pantry_0.92",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.92,
                "horizonAdjust": null
            }
        ]
    },
    {
        "_id": {
            "$oid": "567b9fd27355684157000021"
        },
        "guid": "0008dc0e-1cd3-45c0-a52e-34e32844bdb1",
        "lastEditUser": "anonymous",
        "lastUpdateTime": {
            "$date": "1450945715909"
        },
        "author": "anonymous",
        "scenarioName": "2_TEST_(*1224~)_53W_Scenario_TEST",
        "scenarioDesc": "The larger the CR, the bigger priority (duplication skus exist) / H&B,Pantry Top 300_2days",
        "production": false,
        "rules": [
            {
                "active": true,
                "filterRef": "1fc19fdb-62eb-4f52-ab57-b6bc92ddf811",
                "ruleName": "Rounding_1)SEOUL_roundup",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "06bc1670-5e67-42e6-89f6-e26d649dd0f0",
                "ruleName": "Rounding_2)DAEGU_roundup",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": null,
                "ruleName": "Rule14_2015-7-7_16:38:1",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Network allocation",
                    "value": "NETWORK_ALLOCATION"
                },
                "action": {
                    "display": "Update FC",
                    "value": "UPDATE_FC"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "42edee6a-6396-4b81-864d-9314ccee7a82",
                "ruleName": "Rule4_2015-12-24_17:28:34",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.95,
                "horizonAdjust": null
            }
        ]
    },
    {
        "_id": {
            "$oid": "56a027797355685b61000007"
        },
        "guid": "acb7a37b-0a0e-48ca-88a7-f3b298c1ce3a",
        "lastEditUser": "CHLOE",
        "lastUpdateTime": {
            "$date": "1453799759944"
        },
        "author": "anonymous",
        "scenarioName": "20160122_CRTEST_(*0122~)_3W_Scenario_TEST",
        "scenarioDesc": "The larger the CR, the bigger priority (duplication skus exist) / H&B,Pantry Top 300_2days",
        "production": false,
        "rules": [
            {
                "active": true,
                "filterRef": "1fc19fdb-62eb-4f52-ab57-b6bc92ddf811",
                "ruleName": "Rounding_1)SEOUL_roundup",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "06bc1670-5e67-42e6-89f6-e26d649dd0f0",
                "ruleName": "Rounding_2)DAEGU_roundup",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": null,
                "ruleName": "Rule14_2015-7-7_16:38:1",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Network allocation",
                    "value": "NETWORK_ALLOCATION"
                },
                "action": {
                    "display": "Update FC",
                    "value": "UPDATE_FC"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": null,
                "ruleName": "Rule4_2016-1-22_15:10:41",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Default critical ratio",
                    "value": "DEFAULT_CRITICAL_RATIO"
                },
                "action": null,
                "defaultCriticalRatio": 0.99,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "758a0d2a-9154-4989-b299-f24c3a202941",
                "ruleName": "Rule5_2016-1-26_18:15:50",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.95,
                "horizonAdjust": null
            }
        ]
    },
    {
        "_id": {
            "$oid": "56aab73f73556832f2000007"
        },
        "guid": "0f5e1822-bf0f-4a3b-8c44-ab1abc33fec5",
        "lastEditUser": "anonymous",
        "lastUpdateTime": {
            "$date": "1454028607504"
        },
        "author": "anonymous",
        "scenarioName": "Copy_of_20160122_CRTEST_(*0122~)_3W_Scenario_TEST",
        "scenarioDesc": "The larger the CR, the bigger priority (duplication skus exist) / H&B,Pantry Top 300_2days",
        "production": false,
        "rules": [
            {
                "active": true,
                "filterRef": "1fc19fdb-62eb-4f52-ab57-b6bc92ddf811",
                "ruleName": "Rounding_1)SEOUL_roundup",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "06bc1670-5e67-42e6-89f6-e26d649dd0f0",
                "ruleName": "Rounding_2)DAEGU_roundup",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": null,
                "ruleName": "Rule14_2015-7-7_16:38:1",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Network allocation",
                    "value": "NETWORK_ALLOCATION"
                },
                "action": {
                    "display": "Update FC",
                    "value": "UPDATE_FC"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": null,
                "ruleName": "Rule4_2016-1-22_15:10:41",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Default critical ratio",
                    "value": "DEFAULT_CRITICAL_RATIO"
                },
                "action": null,
                "defaultCriticalRatio": 0.99,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "758a0d2a-9154-4989-b299-f24c3a202941",
                "ruleName": "Rule5_2016-1-26_18:15:50",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.95,
                "horizonAdjust": null
            }
        ]
    },
    {
        "_id": {
            "$oid": "56c2c7237355686c3c00000b"
        },
        "guid": "94730b49-241f-4830-b770-9d37dcfa1243",
        "lastEditUser": "CHLOE",
        "lastUpdateTime": {
            "$date": "1455605723106"
        },
        "author": "anonymous",
        "scenarioName": "20160216_CRTEST_(*0216~)_7W_Scenario",
        "scenarioDesc": "The larger the CR, the bigger priority (duplication skus exist) / H&B,Pantry Top 300_2days",
        "production": false,
        "rules": [
            {
                "active": true,
                "filterRef": "1fc19fdb-62eb-4f52-ab57-b6bc92ddf811",
                "ruleName": "Rounding_1)SEOUL_roundup",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "06bc1670-5e67-42e6-89f6-e26d649dd0f0",
                "ruleName": "Rounding_2)DAEGU_roundup",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": null,
                "ruleName": "Rule14_2015-7-7_16:38:1",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Network allocation",
                    "value": "NETWORK_ALLOCATION"
                },
                "action": {
                    "display": "Update FC",
                    "value": "UPDATE_FC"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": null,
                "ruleName": "Rule4_2016-1-22_15:10:41",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Default critical ratio",
                    "value": "DEFAULT_CRITICAL_RATIO"
                },
                "action": null,
                "defaultCriticalRatio": 0.95,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "b3a6c5da-d1b9-4964-8889-ddc313885dec",
                "ruleName": "Rule5_2016-2-16_15:53:13",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.99,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "9ab114d9-c605-46a3-9e7a-05184f91bd79",
                "ruleName": "Rule6_2016-2-16_15:53:39",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.99,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "c97f3abe-4f93-422e-b17c-686c1cf2a3bf",
                "ruleName": "Rule7_2016-2-16_15:53:54",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.99,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "1fdedd05-56bb-4b34-9213-784b67f8af67",
                "ruleName": "Rule8_2016-2-16_15:54:19",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.98,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "9be1d465-f396-469e-81a7-322467898abe",
                "ruleName": "Rule9_2016-2-16_15:54:38",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.98,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "2fc78b21-a6ea-403f-aa44-b19af5783ace",
                "ruleName": "Rule10_2016-2-16_15:54:51",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.98,
                "horizonAdjust": null
            }
        ]
    },
    {
        "_id": {
            "$oid": "56dd4a557355686c2100001b"
        },
        "guid": "7e9754fc-8db7-433d-983c-1d2b8d1f6977",
        "lastEditUser": "정원희(클로이/Chloe)",
        "lastUpdateTime": {
            "$date": "1457945892826"
        },
        "author": "anonymous",
        "scenarioName": "20160307_기획전CR_(*0308~)_10W_Scenario",
        "scenarioDesc": "",
        "production": false,
        "rules": [
            {
                "active": true,
                "filterRef": "1fc19fdb-62eb-4f52-ab57-b6bc92ddf811",
                "ruleName": "Rounding_1)SEOUL_roundup",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "06bc1670-5e67-42e6-89f6-e26d649dd0f0",
                "ruleName": "Rounding_2)DAEGU_roundup",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": null,
                "ruleName": "Rule14_2015-7-7_16:38:1",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Network allocation",
                    "value": "NETWORK_ALLOCATION"
                },
                "action": {
                    "display": "Update FC",
                    "value": "UPDATE_FC"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": null,
                "ruleName": "Rule4_2016-1-22_15:10:41",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Default critical ratio",
                    "value": "DEFAULT_CRITICAL_RATIO"
                },
                "action": null,
                "defaultCriticalRatio": 0.95,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "17a3e269-6d01-41d0-b322-f648fe426206",
                "ruleName": "Rule5_2016-3-7_18:39:16",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.99,
                "horizonAdjust": null
            }
        ]
    },
    {
        "_id": {
            "$oid": "56e68a6b4385293eaf239f94"
        },
        "guid": "91bfa186-e16d-4c3c-b261-6decaef7f150",
        "lastEditUser": "Shi Jiaqing(Ivan S/Ivan S)",
        "lastUpdateTime": {
            "$date": "1464058135616"
        },
        "author": "정원희(클로이/Chloe)",
        "scenarioName": "20160314_(*0315~)_11W_Scenario",
        "scenarioDesc": "",
        "production": false,
        "rules": [
            {
                "active": true,
                "filterRef": "1fc19fdb-62eb-4f52-ab57-b6bc92ddf811",
                "ruleName": "Rounding_1)SEOUL_roundup",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "06bc1670-5e67-42e6-89f6-e26d649dd0f0",
                "ruleName": "Rounding_2)DAEGU_roundup",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": null,
                "ruleName": "Rule14_2015-7-7_16:38:1",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Network allocation",
                    "value": "NETWORK_ALLOCATION"
                },
                "action": {
                    "display": "Update FC",
                    "value": "UPDATE_FC"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": null,
                "ruleName": "Rule4_2016-1-22_15:10:41",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Default critical ratio",
                    "value": "DEFAULT_CRITICAL_RATIO"
                },
                "action": null,
                "defaultCriticalRatio": 0.95,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "9deb0380-a66e-426f-87b7-50738018338e",
                "ruleName": "National_tip",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "National Tip",
                    "value": "NATIONAL_TIP"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": null,
                "ruleName": "Off Cycle Buying",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Off Cycle Buying",
                    "value": "OFF_CYCLE_BUYING"
                },
                "action": {
                    "display": "Merge into Open PO",
                    "value": "MERGE_INTO_OPEN_PO"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            }
        ]
    },
    {
        "_id": {
            "$oid": "56e7f9c7f613e01ec12e918b"
        },
        "guid": "cbecd5ca-0f8a-445c-a14e-657c62d47522",
        "lastEditUser": "Yang Liu",
        "lastUpdateTime": {
            "$date": "1460089109666"
        },
        "author": "Yang Liu",
        "scenarioName": "Test_Head_to_Tail",
        "scenarioDesc": "just try",
        "production": false,
        "rules": [
            {
                "active": true,
                "filterRef": "9deb0380-a66e-426f-87b7-50738018338e",
                "ruleName": "Head_to_tail",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Head to tail",
                    "value": "HEAD_TO_TAIL"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": null,
                "ruleName": "Rule_2016-3-17_18:27:48_Yang Liu",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Network allocation",
                    "value": "NETWORK_ALLOCATION"
                },
                "action": {
                    "display": "Update FC",
                    "value": "UPDATE_FC"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": null,
                "ruleName": "Rule_2016-3-25_15:18:6_Yang Liu",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Off Cycle Buying",
                    "value": "OFF_CYCLE_BUYING"
                },
                "action": {
                    "display": "Merge into Open PO",
                    "value": "MERGE_INTO_OPEN_PO"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            }
        ]
    },
    {
        "_id": {
            "$oid": "56ea3b1c7544783cc13ade38"
        },
        "guid": "e411af55-6d00-4cbc-ae5a-d85797fee6cf",
        "lastEditUser": "Chuck Liu",
        "lastUpdateTime": {
            "$date": "1458191147025"
        },
        "author": "Chuck Liu",
        "scenarioName": "Copy_of_Test_Head_to_Tail",
        "scenarioDesc": "",
        "production": false,
        "rules": [
            {
                "active": true,
                "filterRef": "2560ab7f-6e31-4201-9cfd-278fb3c9569e",
                "ruleName": "Rule_2016-3-16_14:23:30_Yang Liu",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Head to tail",
                    "value": "HEAD_TO_TAIL"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            }
        ]
    },
    {
        "_id": {
            "$oid": "56ea5e147544783cc13ade3c"
        },
        "guid": "5a77edfa-9c78-49ac-8aa0-22e5b7af582c",
        "lastEditUser": "Chuck Liu",
        "lastUpdateTime": {
            "$date": "1458200194988"
        },
        "author": "Chuck Liu",
        "scenarioName": "Copy_of_(0609)RoundingFactor&CriticalRatio&OrderFrequency",
        "scenarioDesc": "The larger the CR, the bigger priority (duplication skus exist)",
        "production": false,
        "rules": [
            {
                "active": true,
                "filterRef": "22c3a1f6-0eec-40a5-a314-3802641a428f",
                "ruleName": "SEOUL_ROQ≥CQ_F≥0.4:::up",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "a3cf83c0-6bbd-4568-8b9f-2b3def32a8ce",
                "ruleName": "SEOUL_ROQ≥CQ_F<0.4:::down",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Off",
                    "value": "ROUND_OFF"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "36a8a552-0cb8-4f2b-8432-fd6a9320c7f3",
                "ruleName": "SEOUL_ROQ<CQ:::up",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "a06f65ca-a6b7-4a4a-b613-cd704a4f0892",
                "ruleName": "DAEGU:::down",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Off",
                    "value": "ROUND_OFF"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "4c3daba9-84c8-42d9-8a01-781eeebe2d83",
                "ruleName": "CR Override_1)LowVDP(all)_0.97",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.97,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "efc611d5-c376-4195-8a58-0937882682d3",
                "ruleName": "CR Override_1)LowVDP(all)_0.95",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.95,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "91e0fcac-f282-4a6d-a4f2-2e9ef4d52acf",
                "ruleName": "CR Override_2)Top100_HHS_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "2243c01d-6433-4213-8d72-dc4b7a1378cb",
                "ruleName": "CR Override_2)Top100_Pantry_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "d12e94d0-047e-41cf-bc17-94c72f65f3c4",
                "ruleName": "CR Override_3)Maple(all)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "353777a7-07ed-4a23-8c62-338d2af0f480",
                "ruleName": "CR Override_4)Core_Baby(Diapering&Formula)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "90b9074c-7ed9-49e8-a8c6-65694a6e7b35",
                "ruleName": "CR Override_5)Promotion(all)_0.93",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.93,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "9deb0380-a66e-426f-87b7-50738018338e",
                "ruleName": "Rule_2016-3-17_15:34:53_Chuck Liu",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Head to tail",
                    "value": "HEAD_TO_TAIL"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            }
        ]
    },
    {
        "_id": {
            "$oid": "56ea7c647544783cc13ade3f"
        },
        "guid": "663b564f-8b58-4fde-8fcb-f77fc716b297",
        "lastEditUser": "Shi Jiaqing(Ivan/Ivan)",
        "lastUpdateTime": {
            "$date": "1458270971854"
        },
        "author": "Chuck Liu",
        "scenarioName": "Scenario_2016-3-17_17:41:43_Chuck Liu",
        "scenarioDesc": "",
        "production": false,
        "rules": [
            {
                "active": false,
                "filterRef": "9deb0380-a66e-426f-87b7-50738018338e",
                "ruleName": "Rule_2016-3-17_17:41:48_Chuck Liu",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Head to tail",
                    "value": "HEAD_TO_TAIL"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": null,
                "ruleName": "Rule_2016-3-17_17:42:46_Chuck Liu",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Network allocation",
                    "value": "NETWORK_ALLOCATION"
                },
                "action": {
                    "display": "Update FC",
                    "value": "UPDATE_FC"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            }
        ]
    },
    {
        "_id": {
            "$oid": "56f0de847544785771cd407b"
        },
        "guid": "5afd8f20-501c-4e13-8ea4-352c69cd0ade",
        "lastEditUser": "Shi Jiaqing(Ivan/Ivan)",
        "lastUpdateTime": {
            "$date": "1458639973833"
        },
        "author": "Shi Jiaqing(Ivan/Ivan)",
        "scenarioName": "Show_All_ROQs_In_Result_1458626165",
        "scenarioDesc": "",
        "production": false,
        "rules": [
            {
                "active": true,
                "filterRef": null,
                "ruleName": "Case rounding factor rule",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": null,
                "ruleName": "Rule_2016-3-22_17:45:58_Shi Jiaqing(Ivan/Ivan)",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Network allocation",
                    "value": "NETWORK_ALLOCATION"
                },
                "action": {
                    "display": "Update FC",
                    "value": "UPDATE_FC"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            }
        ]
    },
    {
        "_id": {
            "$oid": "56f0f4eb7544785e29661364"
        },
        "guid": "6cd434d9-c7eb-4fc5-9b69-471b6ddd9530",
        "lastEditUser": "Shi Jiaqing(Ivan/Ivan)",
        "lastUpdateTime": {
            "$date": "1458631915216"
        },
        "author": "Shi Jiaqing(Ivan/Ivan)",
        "scenarioName": "Show_All_ROQs_In_Result_1458631900",
        "scenarioDesc": "",
        "production": false,
        "rules": [
            {
                "active": false,
                "filterRef": null,
                "ruleName": "Case rounding factor rule",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            }
        ]
    },
    {
        "_id": {
            "$oid": "572af3227544782141b666ca"
        },
        "guid": "211c6ce3-9d80-4197-a943-5904d28c84b2",
        "lastEditUser": "Liu Yang(Yang /Yang )",
        "lastUpdateTime": {
            "$date": "1464082574221"
        },
        "author": "Jeff Li",
        "scenarioName": "Copy_of_20160314_(*0315~)_11W_Scenario",
        "scenarioDesc": "",
        "production": false,
        "rules": [
            {
                "active": true,
                "filterRef": "1fc19fdb-62eb-4f52-ab57-b6bc92ddf811",
                "ruleName": "Rounding_1)SEOUL_roundup",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "06bc1670-5e67-42e6-89f6-e26d649dd0f0",
                "ruleName": "Rounding_2)DAEGU_roundup",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": null,
                "ruleName": "Rule14_2015-7-7_16:38:1",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Network allocation",
                    "value": "NETWORK_ALLOCATION"
                },
                "action": {
                    "display": "Update FC",
                    "value": "UPDATE_FC"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": null,
                "ruleName": "Rule4_2016-1-22_15:10:41",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Default critical ratio",
                    "value": "DEFAULT_CRITICAL_RATIO"
                },
                "action": null,
                "defaultCriticalRatio": 0.95,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "9deb0380-a66e-426f-87b7-50738018338e",
                "ruleName": "National_tip",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "National Tip",
                    "value": "NATIONAL_TIP"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": null,
                "ruleName": "Off Cycle Buying",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Off Cycle Buying",
                    "value": "OFF_CYCLE_BUYING"
                },
                "action": {
                    "display": "Merge into Open PO",
                    "value": "MERGE_INTO_OPEN_PO"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "5cb971d8-b27b-4b0f-b574-1a7ad6e823ec",
                "ruleName": "Rule_unit_baby_core",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Critical ratio override",
                    "value": "CRITICAL_RATIO_OVERRIDE"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": 0.92,
                "horizonAdjust": null
            }
        ]
    },
    {
        "_id": {
            "$oid": "575133837544781a277090bc"
        },
        "guid": "db9639ef-5bf1-456d-84be-9bc51f5787e7",
        "lastEditUser": "Li Jingfan(Jeff L/Jeff L)",
        "lastUpdateTime": {
            "$date": "1464939395402"
        },
        "author": "Li Jingfan(Jeff L/Jeff L)",
        "scenarioName": "Copy_of_20160314_(*0315~)_11W_Scenario_2",
        "scenarioDesc": "",
        "production": false,
        "rules": [
            {
                "active": true,
                "filterRef": "1fc19fdb-62eb-4f52-ab57-b6bc92ddf811",
                "ruleName": "Rounding_1)SEOUL_roundup",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "06bc1670-5e67-42e6-89f6-e26d649dd0f0",
                "ruleName": "Rounding_2)DAEGU_roundup",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Case rounding factor",
                    "value": "ROQ_ROUNDING"
                },
                "action": {
                    "display": "Round Up",
                    "value": "ROUND_UP"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": null,
                "ruleName": "Rule14_2015-7-7_16:38:1",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Network allocation",
                    "value": "NETWORK_ALLOCATION"
                },
                "action": {
                    "display": "Update FC",
                    "value": "UPDATE_FC"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": null,
                "ruleName": "Rule4_2016-1-22_15:10:41",
                "ruleCategory": {
                    "display": "TIP",
                    "value": "TIP"
                },
                "ruleType": {
                    "display": "Default critical ratio",
                    "value": "DEFAULT_CRITICAL_RATIO"
                },
                "action": null,
                "defaultCriticalRatio": 0.95,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": "9deb0380-a66e-426f-87b7-50738018338e",
                "ruleName": "National_tip",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "National Tip",
                    "value": "NATIONAL_TIP"
                },
                "action": null,
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            },
            {
                "active": true,
                "filterRef": null,
                "ruleName": "Off Cycle Buying",
                "ruleCategory": {
                    "display": "ROQ",
                    "value": "ROQ"
                },
                "ruleType": {
                    "display": "Off Cycle Buying",
                    "value": "OFF_CYCLE_BUYING"
                },
                "action": {
                    "display": "Merge into Open PO",
                    "value": "MERGE_INTO_OPEN_PO"
                },
                "defaultCriticalRatio": null,
                "minTargetInv": null,
                "criticalRatio": null,
                "horizonAdjust": null
            }
        ]
    }
];

var employees = [{
    "ID": 1,
    "FirstName": "John",
    "LastName": "Heart",
    "Prefix": "Mr.",
    "Position": "CEO",
    "Picture": "images/employees/01.png",
    "BirthDate": "1964/03/16",
    "HireDate": "1995/01/15",
    "Notes": "John has been in the Audio/Video industry since 1990. He has led DevAv as its CEO since 2003.\r\n\r\nWhen not working hard as the CEO, John loves to golf and bowl. He once bowled a perfect game of 300.",
    "Address": "351 S Hill St.",
    "State": "California",
    "City": "Los Angeles",
    "Tasks": [{
        "ID": 5,
        "Subject": "Choose between PPO and HMO Health Plan",
        "StartDate": "2013-02-15T00:00:00",
        "DueDate": "2013-04-15T00:00:00",
        "Status": "In Progress",
        "Priority": "High",
        "Completion": 75
    }, {
        "ID": 6,
        "Subject": "Google AdWords Strategy",
        "StartDate": "2013-02-16T00:00:00",
        "DueDate": "2013-02-28T00:00:00",
        "Status": "Completed",
        "Priority": "High",
        "Completion": 100
    }, {
        "ID": 7,
        "Subject": "New Brochures",
        "StartDate": "2013-02-17T00:00:00",
        "DueDate": "2013-02-24T00:00:00",
        "Status": "Completed",
        "Priority": "Normal",
        "Completion": 100
    }, {
        "ID": 22,
        "Subject": "Update NDA Agreement",
        "StartDate": "2013-03-14T00:00:00",
        "DueDate": "2013-03-16T00:00:00",
        "Status": "Completed",
        "Priority": "High",
        "Completion": 100
    }, {
        "ID": 52,
        "Subject": "Review Product Recall Report by Engineering Team",
        "StartDate": "2013-05-17T00:00:00",
        "DueDate": "2013-05-20T00:00:00",
        "Status": "Completed",
        "Priority": "High",
        "Completion": 100
    }]
}, {
    "ID": 2,
    "FirstName": "Olivia",
    "LastName": "Peyton",
    "Prefix": "Mrs.",
    "Position": "Sales Assistant",
    "Picture": "images/employees/09.png",
    "BirthDate": "1981/06/03",
    "HireDate": "2012/05/14",
    "Notes": "Olivia loves to sell. She has been selling DevAV products since 2012. \r\n\r\nOlivia was homecoming queen in high school. She is expecting her first child in 6 months. Good Luck Olivia.",
    "Address": "807 W Paseo Del Mar",
    "State": "California",
    "City": "Los Angeles",
    "Tasks": [{
        "ID": 3,
        "Subject": "Update Personnel Files",
        "StartDate": "2013-02-03T00:00:00",
        "DueDate": "2013-02-28T00:00:00",
        "Status": "Completed",
        "Priority": "High",
        "Completion": 100
    }, {
        "ID": 4,
        "Subject": "Review Health Insurance Options Under the Affordable Care Act",
        "StartDate": "2013-02-12T00:00:00",
        "DueDate": "2013-04-25T00:00:00",
        "Status": "In Progress",
        "Priority": "High",
        "Completion": 50
    }, {
        "ID": 21,
        "Subject": "Non-Compete Agreements",
        "StartDate": "2013-03-12T00:00:00",
        "DueDate": "2013-03-14T00:00:00",
        "Status": "Completed",
        "Priority": "Low",
        "Completion": 100
    }, {
        "ID": 50,
        "Subject": "Give Final Approval for Refunds",
        "StartDate": "2013-05-05T00:00:00",
        "DueDate": "2013-05-15T00:00:00",
        "Status": "Completed",
        "Priority": "Normal",
        "Completion": 100
    }]
}, {
    "ID": 3,
    "FirstName": "Robert",
    "LastName": "Reagan",
    "Prefix": "Mr.",
    "Position": "CMO",
    "Picture": "images/employees/03.png",
    "BirthDate": "1974/09/07",
    "HireDate": "2002/11/08",
    "Notes": "Robert was recently voted the CMO of the year by CMO Magazine. He is a proud member of the DevAV Management Team.\r\n\r\nRobert is a championship BBQ chef, so when you get the chance ask him for his secret recipe.",
    "Address": "4 Westmoreland Pl.",
    "State": "Arkansas",
    "City": "Bentonville",
    "Tasks": [{
        "ID": 16,
        "Subject": "Deliver R&D Plans for 2013",
        "StartDate": "2013-03-01T00:00:00",
        "DueDate": "2013-03-10T00:00:00",
        "Status": "Completed",
        "Priority": "High",
        "Completion": 100
    }, {
        "ID": 74,
        "Subject": "Decide on Mobile Devices to Use in the Field",
        "StartDate": "2013-07-30T00:00:00",
        "DueDate": "2013-08-02T00:00:00",
        "Status": "Completed",
        "Priority": "High",
        "Completion": 100
    }, {
        "ID": 78,
        "Subject": "Try New Touch-Enabled WinForms Apps",
        "StartDate": "2013-08-11T00:00:00",
        "DueDate": "2013-08-15T00:00:00",
        "Status": "Completed",
        "Priority": "Normal",
        "Completion": 100
    }, {
        "ID": 117,
        "Subject": "Approval on Converting to New HDMI Specification",
        "StartDate": "2014-01-11T00:00:00",
        "DueDate": "2014-01-31T00:00:00",
        "Status": "Deferred",
        "Priority": "Normal",
        "Completion": 75
    }]
}, {
    "ID": 4,
    "FirstName": "Greta",
    "LastName": "Sims",
    "Prefix": "Ms.",
    "Position": "HR Manager",
    "Picture": "images/employees/04.png",
    "BirthDate": "1977/11/22",
    "HireDate": "1998/04/23",
    "Notes": "Greta has been DevAV's HR Manager since 2003. She joined DevAV from Sonee Corp.\r\n\r\nGreta is currently training for the NYC marathon. Her best marathon time is 4 hours. Go Greta.",
    "Address": "1700 S Grandview Dr.",
    "State": "Idaho",
    "City": "Boise",
    "Tasks": [{
        "ID": 20,
        "Subject": "Approve Hiring of John Jeffers",
        "StartDate": "2013-03-02T00:00:00",
        "DueDate": "2013-03-12T00:00:00",
        "Status": "Completed",
        "Priority": "Normal",
        "Completion": 100
    }, {
        "ID": 23,
        "Subject": "Update Employee Files with New NDA",
        "StartDate": "2013-03-16T00:00:00",
        "DueDate": "2013-03-26T00:00:00",
        "Status": "Need Assistance",
        "Priority": "Normal",
        "Completion": 90
    }, {
        "ID": 40,
        "Subject": "Provide New Health Insurance Docs",
        "StartDate": "2013-03-28T00:00:00",
        "DueDate": "2013-04-07T00:00:00",
        "Status": "Completed",
        "Priority": "Normal",
        "Completion": 100
    }]
}, {
    "ID": 5,
    "FirstName": "Brett",
    "LastName": "Wade",
    "Prefix": "Mr.",
    "Position": "IT Manager",
    "Picture": "images/employees/05.png",
    "BirthDate": "1968/12/01",
    "HireDate": "2009/03/06",
    "Notes": "Brett came to DevAv from Microsoft and has led our IT department since 2012.\r\n\r\nWhen he is not working hard for DevAV, he coaches Little League (he was a high school pitcher).",
    "Address": "1120 Old Mill Rd.",
    "State": "Georgia",
    "City": "Atlanta",
    "Tasks": [{
        "ID": 2,
        "Subject": "Prepare 3013 Marketing Plan",
        "StartDate": "2013-01-01T00:00:00",
        "DueDate": "2013-01-31T00:00:00",
        "Status": "Completed",
        "Priority": "High",
        "Completion": 100
    }, {
        "ID": 11,
        "Subject": "Rollout of New Website and Marketing Brochures",
        "StartDate": "2013-02-20T00:00:00",
        "DueDate": "2013-02-28T00:00:00",
        "Status": "Completed",
        "Priority": "High",
        "Completion": 100
    }, {
        "ID": 15,
        "Subject": "Review 2012 Sales Report and Approve 2013 Plans",
        "StartDate": "2013-02-23T00:00:00",
        "DueDate": "2013-02-28T00:00:00",
        "Status": "Completed",
        "Priority": "Normal",
        "Completion": 100
    }, {
        "ID": 81,
        "Subject": "Review Site Up-Time Report",
        "StartDate": "2013-08-24T00:00:00",
        "DueDate": "2013-08-30T00:00:00",
        "Status": "Completed",
        "Priority": "Urgent",
        "Completion": 100
    }]
}, {
    "ID": 6,
    "FirstName": "Sandra",
    "LastName": "Johnson",
    "Prefix": "Mrs.",
    "Position": "Controller",
    "Picture": "images/employees/06.png",
    "BirthDate": "1974/11/15",
    "HireDate": "2005/05/11",
    "Notes": "Sandra is a CPA and has been our controller since 2008. She loves to interact with staff so if you've not met her, be certain to say hi.\r\n\r\nSandra has 2 daughters both of whom are accomplished gymnasts.",
    "Address": "4600 N Virginia Rd.",
    "State": "Utah",
    "City": "Beaver",
    "Tasks": [{
        "ID": 20,
        "Subject": "Approve Hiring of John Jeffers",
        "StartDate": "2013-03-02T00:00:00",
        "DueDate": "2013-03-12T00:00:00",
        "Status": "Completed",
        "Priority": "Normal",
        "Completion": 100
    }, {
        "ID": 23,
        "Subject": "Update Employee Files with New NDA",
        "StartDate": "2013-03-16T00:00:00",
        "DueDate": "2013-03-26T00:00:00",
        "Status": "Need Assistance",
        "Priority": "Normal",
        "Completion": 90
    }, {
        "ID": 40,
        "Subject": "Provide New Health Insurance Docs",
        "StartDate": "2013-03-28T00:00:00",
        "DueDate": "2013-04-07T00:00:00",
        "Status": "Completed",
        "Priority": "Normal",
        "Completion": 100
    }, {
        "ID": 138,
        "Subject": "Review HR Budget Company Wide",
        "StartDate": "2014-03-20T00:00:00",
        "DueDate": "2014-03-25T00:00:00",
        "Status": "In Progress",
        "Priority": "Normal",
        "Completion": 40
    }, {
        "ID": 145,
        "Subject": "Final Budget Review",
        "StartDate": "2014-03-26T00:00:00",
        "DueDate": "2014-03-27T00:00:00",
        "Status": "In Progress",
        "Priority": "High",
        "Completion": 25
    }]
}, {
    "ID": 7,
    "FirstName": "Kevin",
    "LastName": "Carter",
    "Prefix": "Mr.",
    "Position": "Shipping Manager",
    "Picture": "images/employees/07.png",
    "BirthDate": "1978/01/09",
    "HireDate": "2009/08/11",
    "Notes": "Kevin is our hard-working shipping manager and has been helping that department work like clockwork for 18 months.\r\n\r\nWhen not in the office, he is usually on the basketball court playing pick-up games.",
    "Address": "424 N Main St.",
    "State": "California",
    "City": "San Diego",
    "Tasks": [{
        "ID": 24,
        "Subject": "Sign Updated NDA",
        "StartDate": "2013-03-20T00:00:00",
        "DueDate": "2013-03-25T00:00:00",
        "Status": "Completed",
        "Priority": "Urgent",
        "Completion": 100
    }, {
        "ID": 55,
        "Subject": "Review Overtime Report",
        "StartDate": "2013-06-10T00:00:00",
        "DueDate": "2013-06-14T00:00:00",
        "Status": "Completed",
        "Priority": "Normal",
        "Completion": 100
    }, {
        "ID": 71,
        "Subject": "Upgrade Server Hardware",
        "StartDate": "2013-07-22T00:00:00",
        "DueDate": "2013-07-31T00:00:00",
        "Status": "Completed",
        "Priority": "Urgent",
        "Completion": 100
    }, {
        "ID": 72,
        "Subject": "Upgrade Personal Computers",
        "StartDate": "2013-07-24T00:00:00",
        "DueDate": "2014-04-30T00:00:00",
        "Status": "In Progress",
        "Priority": "Normal",
        "Completion": 85
    }]
}, {
    "ID": 8,
    "FirstName": "Cynthia",
    "LastName": "Stanwick",
    "Prefix": "Ms.",
    "Position": "HR Assistant",
    "Picture": "images/employees/08.png",
    "BirthDate": "1985/06/05",
    "HireDate": "2008/03/24",
    "Notes": "Cindy joined us in 2008 and has been in the HR department for 2 years. \r\n\r\nShe was recently awarded employee of the month. Way to go Cindy!",
    "Address": "2211 Bonita Dr.",
    "State": "Arkansas",
    "City": "Little Rock",
    "Tasks": [{
        "ID": 1,
        "Subject": "Prepare 2013 Financial",
        "StartDate": "2013-01-15T00:00:00",
        "DueDate": "2013-01-31T00:00:00",
        "Status": "Completed",
        "Priority": "High",
        "Completion": 100
    }, {
        "ID": 25,
        "Subject": "Sign Updated NDA",
        "StartDate": "2013-03-20T00:00:00",
        "DueDate": "2013-03-25T00:00:00",
        "Status": "Completed",
        "Priority": "Urgent",
        "Completion": 100
    }, {
        "ID": 35,
        "Subject": "Update Revenue Projections",
        "StartDate": "2013-03-24T00:00:00",
        "DueDate": "2013-04-07T00:00:00",
        "Status": "Completed",
        "Priority": "Normal",
        "Completion": 100
    }, {
        "ID": 99,
        "Subject": "Submit D&B Number to ISP for Credit Approval",
        "StartDate": "2013-11-04T00:00:00",
        "DueDate": "2013-11-07T00:00:00",
        "Status": "Completed",
        "Priority": "High",
        "Completion": 100
    }]
}, {
    "ID": 9,
    "FirstName": "Kent",
    "LastName": "Samuelson",
    "Prefix": "Dr.",
    "Position": "Ombudsman",
    "Picture": "images/employees/02.png",
    "BirthDate": "1972/09/11",
    "HireDate": "2009/04/22",
    "Notes": "As our ombudsman, Kent is on the front-lines solving customer problems and helping our partners address issues out in the field.    He is a classically trained musician and is a member of the Chamber Orchestra.",
    "Address": "12100 Mora Dr",
    "State": "Missouri",
    "City": "St. Louis",
    "Tasks": [{
        "ID": 12,
        "Subject": "Update Sales Strategy Documents",
        "StartDate": "2013-02-20T00:00:00",
        "DueDate": "2013-02-22T00:00:00",
        "Status": "Completed",
        "Priority": "Normal",
        "Completion": 100
    }, {
        "ID": 26,
        "Subject": "Sign Updated NDA",
        "StartDate": "2013-03-20T00:00:00",
        "DueDate": "2013-03-25T00:00:00",
        "Status": "Need Assistance",
        "Priority": "Urgent",
        "Completion": 25
    }, {
        "ID": 36,
        "Subject": "Review Revenue Projections",
        "StartDate": "2013-03-25T00:00:00",
        "DueDate": "2013-04-06T00:00:00",
        "Status": "Completed",
        "Priority": "High",
        "Completion": 100
    }, {
        "ID": 60,
        "Subject": "Refund Request Template",
        "StartDate": "2013-06-17T00:00:00",
        "DueDate": "2014-04-01T00:00:00",
        "Status": "Deferred",
        "Priority": "Normal",
        "Completion": 0
    }]
}];

var orders = [{
    "ID": 1,
    "OrderNumber": 35703,
    "OrderDate": "2014/02/13",
    "SaleAmount": 11800,
    "ShippingAmount": 375,
    "TotalAmount": 12175,
    "Terms": "15 Days",
    "CustomerStoreState": "California",
    "CustomerStoreCity": "Los Angeles",
    "Employee": "Harv Mudd"
}, {
    "ID": 4,
    "OrderNumber": 35711,
    "OrderDate": "2014/03/21",
    "SaleAmount": 16050,
    "ShippingAmount": 500,
    "TotalAmount": 16550,
    "Terms": "15 Days",
    "CustomerStoreState": "California",
    "CustomerStoreCity": "San Jose",
    "Employee": "Jim Packard"
}, {
    "ID": 5,
    "OrderNumber": 35714,
    "OrderDate": "2014/04/19",
    "SaleAmount": 14750,
    "ShippingAmount": 500,
    "TotalAmount": 15250,
    "Terms": "15 Days",
    "CustomerStoreState": "Nevada",
    "CustomerStoreCity": "Las Vegas",
    "Employee": "Harv Mudd"
}, {
    "ID": 7,
    "OrderNumber": 35983,
    "OrderDate": "2014/01/12",
    "SaleAmount": 3725,
    "ShippingAmount": 125,
    "TotalAmount": 3850,
    "Terms": "15 Days",
    "CustomerStoreState": "Colorado",
    "CustomerStoreCity": "Denver",
    "Employee": "Todd Hoffman"
}, {
    "ID": 9,
    "OrderNumber": 36987,
    "OrderDate": "2014/04/08",
    "SaleAmount": 14200,
    "ShippingAmount": 600,
    "TotalAmount": 14800,
    "Terms": "15 Days",
    "CustomerStoreState": "Utah",
    "CustomerStoreCity": "Salt Lake City",
    "Employee": "Clark Morgan"
}, {
    "ID": 11,
    "OrderNumber": 38466,
    "OrderDate": "2014/02/28",
    "SaleAmount": 7800,
    "ShippingAmount": 400,
    "TotalAmount": 8200,
    "Terms": "15 Days",
    "CustomerStoreState": "California",
    "CustomerStoreCity": "Los Angeles",
    "Employee": "Harv Mudd"
}, {
    "ID": 15,
    "OrderNumber": 39874,
    "OrderDate": "2014/05/28",
    "SaleAmount": 18600,
    "ShippingAmount": 500,
    "TotalAmount": 19100,
    "Terms": "30 Days",
    "CustomerStoreState": "Nevada",
    "CustomerStoreCity": "Las Vegas",
    "Employee": "Harv Mudd"
}, {
    "ID": 18,
    "OrderNumber": 42847,
    "OrderDate": "2014/02/06",
    "SaleAmount": 20400,
    "ShippingAmount": 400,
    "TotalAmount": 20800,
    "Terms": "30 Days",
    "CustomerStoreState": "Wyoming",
    "CustomerStoreCity": "Casper",
    "Employee": "Todd Hoffman"
}, {
    "ID": 19,
    "OrderNumber": 43982,
    "OrderDate": "2014/02/16",
    "SaleAmount": 6050,
    "ShippingAmount": 200,
    "TotalAmount": 6250,
    "Terms": "30 Days",
    "CustomerStoreState": "Utah",
    "CustomerStoreCity": "Salt Lake City",
    "Employee": "Clark Morgan"
}, {
    "ID": 29,
    "OrderNumber": 56272,
    "OrderDate": "2014/01/25",
    "SaleAmount": 15850,
    "ShippingAmount": 500,
    "TotalAmount": 16350,
    "Terms": "30 Days",
    "CustomerStoreState": "Utah",
    "CustomerStoreCity": "Salt Lake City",
    "Employee": "Clark Morgan"
}, {
    "ID": 30,
    "OrderNumber": 57429,
    "OrderDate": "2013/12/31",
    "SaleAmount": 11050,
    "ShippingAmount": 350,
    "TotalAmount": 11400,
    "Terms": "30 Days",
    "CustomerStoreState": "Arizona",
    "CustomerStoreCity": "Phoenix",
    "Employee": "Clark Morgan"
}, {
    "ID": 32,
    "OrderNumber": 58292,
    "OrderDate": "2014/04/29",
    "SaleAmount": 13500,
    "ShippingAmount": 300,
    "TotalAmount": 13800,
    "Terms": "15 Days",
    "CustomerStoreState": "California",
    "CustomerStoreCity": "Los Angeles",
    "Employee": "Harv Mudd"
}, {
    "ID": 36,
    "OrderNumber": 62427,
    "OrderDate": "2014/05/10",
    "SaleAmount": 23500,
    "ShippingAmount": 500,
    "TotalAmount": 24000,
    "Terms": "15 Days",
    "CustomerStoreState": "Nevada",
    "CustomerStoreCity": "Las Vegas",
    "Employee": "Harv Mudd"
}, {
    "ID": 39,
    "OrderNumber": 65977,
    "OrderDate": "2014/02/24",
    "SaleAmount": 2550,
    "ShippingAmount": 75,
    "TotalAmount": 2625,
    "Terms": "15 Days",
    "CustomerStoreState": "Wyoming",
    "CustomerStoreCity": "Casper",
    "Employee": "Todd Hoffman"
}, {
    "ID": 40,
    "OrderNumber": 66947,
    "OrderDate": "2014/01/05",
    "SaleAmount": 3500,
    "ShippingAmount": 100,
    "TotalAmount": 3600,
    "Terms": "15 Days",
    "CustomerStoreState": "Utah",
    "CustomerStoreCity": "Salt Lake City",
    "Employee": "Clark Morgan"
}, {
    "ID": 42,
    "OrderNumber": 68428,
    "OrderDate": "2014/04/18",
    "SaleAmount": 10500,
    "ShippingAmount": 400,
    "TotalAmount": 10900,
    "Terms": "15 Days",
    "CustomerStoreState": "California",
    "CustomerStoreCity": "Los Angeles",
    "Employee": "Harv Mudd"
}, {
    "ID": 43,
    "OrderNumber": 69477,
    "OrderDate": "2014/04/21",
    "SaleAmount": 14200,
    "ShippingAmount": 300,
    "TotalAmount": 14500,
    "Terms": "15 Days",
    "CustomerStoreState": "California",
    "CustomerStoreCity": "Anaheim",
    "Employee": "Harv Mudd"
}, {
    "ID": 46,
    "OrderNumber": 72947,
    "OrderDate": "2014/05/22",
    "SaleAmount": 13350,
    "ShippingAmount": 300,
    "TotalAmount": 13650,
    "Terms": "30 Days",
    "CustomerStoreState": "Nevada",
    "CustomerStoreCity": "Las Vegas",
    "Employee": "Harv Mudd"
}, {
    "ID": 47,
    "OrderNumber": 73088,
    "OrderDate": "2014/01/22",
    "SaleAmount": 8600,
    "ShippingAmount": 250,
    "TotalAmount": 8850,
    "Terms": "30 Days",
    "CustomerStoreState": "Nevada",
    "CustomerStoreCity": "Reno",
    "Employee": "Clark Morgan"
}, {
    "ID": 50,
    "OrderNumber": 76927,
    "OrderDate": "2010-10-17T00:00:00",
    "SaleAmount": 9800,
    "ShippingAmount": 250,
    "TotalAmount": 10050,
    "Terms": "30 Days",
    "CustomerStoreState": "Utah",
    "CustomerStoreCity": "Salt Lake City",
    "Employee": "Clark Morgan"
}, {
    "ID": 51,
    "OrderNumber": 77297,
    "OrderDate": "2014/03/24",
    "OrderDate": "2010-10-19T00:00:00",
    "SaleAmount": 10850,
    "ShippingAmount": 250,
    "TotalAmount": 11100,
    "Terms": "30 Days",
    "CustomerStoreState": "Arizona",
    "CustomerStoreCity": "Phoenix",
    "Employee": "Clark Morgan"
}];

var weekData = [{
    "date": "2013/12/23",
    "open": {
        "value": 3563.19,
        "diff": 92.76
    },
    "high": {
        "value": 3591.31,
        "diff": 50.34
    },
    "low": {
        "value": 3552.3,
        "diff": 129.44
    },
    "close": {
        "value": 3574.02,
        "diff": 42.83
    },
    "volume": 1254340000,
    "adjClose": 3574.02,
    "dayClose": [{
        "close": 3569.4,
        "date": "2013/12/23"
    }, {
        "close": 3572.8,
        "date": "2013/12/24"
    }, {
        "close": 3584.58,
        "date": "2013/12/26"
    }, {
        "close": 3574.02,
        "date": "2013/12/27"
    }]
}, {
    "date": "2013/12/16",
    "open": {
        "value": 3470.43,
        "diff": -45.24
    },
    "high": {
        "value": 3540.97,
        "diff": 16.96
    },
    "low": {
        "value": 3422.86,
        "diff": -26.88
    },
    "close": {
        "value": 3531.19,
        "diff": 74.79
    },
    "volume": 2261352000,
    "adjClose": 3531.19,
    "dayClose": [{
        "close": 3475.79,
        "date": "2013/12/16"
    }, {
        "close": 3469.32,
        "date": "2013/12/17"
    }, {
        "close": 3509.63,
        "date": "2013/12/18"
    }, {
        "close": 3498.63,
        "date": "2013/12/19"
    }, {
        "close": 3531.19,
        "date": "2013/12/20"
    }]
}, {
    "date": "2013/12/09",
    "open": {
        "value": 3515.67,
        "diff": 19.48
    },
    "high": {
        "value": 3524.01,
        "diff": 12.91
    },
    "low": {
        "value": 3449.74,
        "diff": -3.48
    },
    "close": {
        "value": 3456.4,
        "diff": -47.86
    },
    "volume": 1802822000,
    "adjClose": 3456.4,
    "dayClose": [{
        "close": 3516.17,
        "date": "2013/12/09"
    }, {
        "close": 3514.2,
        "date": "2013/12/10"
    }, {
        "close": 3468.99,
        "date": "2013/12/11"
    }, {
        "close": 3460.29,
        "date": "2013/12/12"
    }, {
        "close": 3456.4,
        "date": "2013/12/13"
    }]
}, {
    "date": "2013/12/02",
    "open": {
        "value": 3496.19,
        "diff": 62.27
    },
    "high": {
        "value": 3511.1,
        "diff": 15.13
    },
    "low": {
        "value": 3453.22,
        "diff": 32.86
    },
    "close": {
        "value": 3504.26,
        "diff": 16.44
    },
    "volume": 1810088000,
    "adjClose": 3504.26,
    "dayClose": [{
        "close": 3481.15,
        "date": "2013/12/02"
    }, {
        "close": 3479.34,
        "date": "2013/12/03"
    }, {
        "close": 3483.01,
        "date": "2013/12/04"
    }, {
        "close": 3477.73,
        "date": "2013/12/05"
    }, {
        "close": 3504.26,
        "date": "2013/12/06"
    }]
}, {
    "date": "2013/11/25",
    "open": {
        "value": 3433.92,
        "diff": 10.45
    },
    "high": {
        "value": 3495.97,
        "diff": 66.77
    },
    "low": {
        "value": 3420.36,
        "diff": 61.05
    },
    "close": {
        "value": 3487.82,
        "diff": 65.8
    },
    "volume": 1508490000,
    "adjClose": 3487.82,
    "dayClose": [{
        "close": 3427.49,
        "date": "2013/11/25"
    }, {
        "close": 3445.76,
        "date": "2013/11/26"
    }, {
        "close": 3470.48,
        "date": "2013/11/27"
    }, {
        "close": 3487.82,
        "date": "2013/11/29"
    }]
}, {
    "date": "2013/11/18",
    "open": {
        "value": 3423.47,
        "diff": 63.64
    },
    "high": {
        "value": 3429.2,
        "diff": 6.62
    },
    "low": {
        "value": 3359.31,
        "diff": 12.9
    },
    "close": {
        "value": 3422.02,
        "diff": -0.56
    },
    "volume": 1742680000,
    "adjClose": 3422.02,
    "dayClose": [{
        "close": 3388.87,
        "date": "2013/11/18"
    }, {
        "close": 3378.13,
        "date": "2013/11/19"
    }, {
        "close": 3367.17,
        "date": "2013/11/20"
    }, {
        "close": 3402.74,
        "date": "2013/11/21"
    }, {
        "close": 3422.02,
        "date": "2013/11/22"
    }]
}, {
    "date": "2013/11/11",
    "open": {
        "value": 3359.83,
        "diff": -28.87
    },
    "high": {
        "value": 3422.58,
        "diff": 21.31
    },
    "low": {
        "value": 3346.41,
        "diff": 28.01
    },
    "close": {
        "value": 3422.58,
        "diff": 55.74
    },
    "volume": 1812784000,
    "adjClose": 3422.58,
    "dayClose": [{
        "close": 3362.98,
        "date": "2013/11/11"
    }, {
        "close": 3365.23,
        "date": "2013/11/12"
    }, {
        "close": 3405.56,
        "date": "2013/11/13"
    }, {
        "close": 3415.14,
        "date": "2013/11/14"
    }, {
        "close": 3422.58,
        "date": "2013/11/15"
    }]
}, {
    "date": "2013/11/04",
    "open": {
        "value": 3388.7,
        "diff": 6.52
    },
    "high": {
        "value": 3401.27,
        "diff": -7.01
    },
    "low": {
        "value": 3318.4,
        "diff": -46.25
    },
    "close": {
        "value": 3366.84,
        "diff": -12.92
    },
    "volume": 2011546000,
    "adjClose": 3366.84,
    "dayClose": [{
        "close": 3384.75,
        "date": "2013/11/04"
    }, {
        "close": 3388.82,
        "date": "2013/11/05"
    }, {
        "close": 3385.38,
        "date": "2013/11/06"
    }, {
        "close": 3321.41,
        "date": "2013/11/07"
    }, {
        "close": 3366.84,
        "date": "2013/11/08"
    }]
}, {
    "date": "2013/10/28",
    "open": {
        "value": 3382.18,
        "diff": 20.42
    },
    "high": {
        "value": 3408.28,
        "diff": 8.24
    },
    "low": {
        "value": 3364.65,
        "diff": 34.45
    },
    "close": {
        "value": 3379.76,
        "diff": -4.07
    },
    "volume": 1962860000,
    "adjClose": 3379.76,
    "dayClose": [{
        "close": 3382.68,
        "date": "2013/10/28"
    }, {
        "close": 3391.75,
        "date": "2013/10/29"
    }, {
        "close": 3385.38,
        "date": "2013/10/30"
    }, {
        "close": 3377.73,
        "date": "2013/10/31"
    }, {
        "close": 3379.76,
        "date": "2013/11/01"
    }]
}, {
    "date": "2013/10/21",
    "open": {
        "value": 3361.76,
        "diff": 148.38
    },
    "high": {
        "value": 3400.04,
        "diff": 44.41
    },
    "low": {
        "value": 3330.2,
        "diff": 118.15
    },
    "close": {
        "value": 3383.83,
        "diff": 29.95
    },
    "volume": 1952026000,
    "adjClose": 3383.83,
    "dayClose": [{
        "close": 3361.18,
        "date": "2013/10/21"
    }, {
        "close": 3366.93,
        "date": "2013/10/22"
    }, {
        "close": 3346.05,
        "date": "2013/10/23"
    }, {
        "close": 3362.38,
        "date": "2013/10/24"
    }, {
        "close": 3383.83,
        "date": "2013/10/25"
    }]
}, {
    "date": "2013/10/14",
    "open": {
        "value": 3213.38,
        "diff": -2.39
    },
    "high": {
        "value": 3355.63,
        "diff": 115.52
    },
    "low": {
        "value": 3212.05,
        "diff": 94.36
    },
    "close": {
        "value": 3353.88,
        "diff": 120.05
    },
    "volume": 1772590000,
    "adjClose": 3353.88,
    "dayClose": [{
        "close": 3256.02,
        "date": "2013/10/14"
    }, {
        "close": 3244.66,
        "date": "2013/10/15"
    }, {
        "close": 3281.67,
        "date": "2013/10/16"
    }, {
        "close": 3301.28,
        "date": "2013/10/17"
    }, {
        "close": 3353.88,
        "date": "2013/10/18"
    }]
}, {
    "date": "2013/10/07",
    "open": {
        "value": 3215.77,
        "diff": 25.37
    },
    "high": {
        "value": 3240.11,
        "diff": -16.6
    },
    "low": {
        "value": 3117.69,
        "diff": -69.17
    },
    "close": {
        "value": 3233.83,
        "diff": -8.74
    },
    "volume": 1891806000,
    "adjClose": 3233.83,
    "dayClose": [{
        "close": 3215.69,
        "date": "2013/10/07"
    }, {
        "close": 3153.87,
        "date": "2013/10/08"
    }, {
        "close": 3142.54,
        "date": "2013/10/09"
    }, {
        "close": 3210.84,
        "date": "2013/10/10"
    }, {
        "close": 3233.83,
        "date": "2013/10/11"
    }]
}, {
    "date": "2013/09/30",
    "open": {
        "value": 3190.4,
        "diff": -51.92
    },
    "high": {
        "value": 3256.71,
        "diff": 13.28
    },
    "low": {
        "value": 3186.86,
        "diff": -15.89
    },
    "close": {
        "value": 3242.57,
        "diff": 12.27
    },
    "volume": 1793200000,
    "adjClose": 3242.57,
    "dayClose": [{
        "close": 3218.2,
        "date": "2013/09/30"
    }, {
        "close": 3253.05,
        "date": "2013/10/01"
    }, {
        "close": 3253.26,
        "date": "2013/10/02"
    }, {
        "close": 3213.83,
        "date": "2013/10/03"
    }, {
        "close": 3242.57,
        "date": "2013/10/04"
    }]
}, {
    "date": "2013/09/23",
    "open": {
        "value": 3242.32,
        "diff": 39.13
    },
    "high": {
        "value": 3243.43,
        "diff": -5.09
    },
    "low": {
        "value": 3202.75,
        "diff": 39.62
    },
    "close": {
        "value": 3230.3,
        "diff": 5.57
    },
    "volume": 1775808000,
    "adjClose": 3230.3,
    "dayClose": [{
        "close": 3219.34,
        "date": "2013/09/23"
    }, {
        "close": 3218.66,
        "date": "2013/09/24"
    }, {
        "close": 3208.55,
        "date": "2013/09/25"
    }, {
        "close": 3234.04,
        "date": "2013/09/26"
    }, {
        "close": 3230.3,
        "date": "2013/09/27"
    }]
}, {
    "date": "2013/09/16",
    "open": {
        "value": 3203.19,
        "diff": 57.17
    },
    "high": {
        "value": 3248.52,
        "diff": 59.28
    },
    "low": {
        "value": 3163.13,
        "diff": 17.11
    },
    "close": {
        "value": 3224.73,
        "diff": 46.45
    },
    "volume": 1839474000,
    "adjClose": 3224.73,
    "dayClose": [{
        "close": 3168.69,
        "date": "2013/09/16"
    }, {
        "close": 3190.83,
        "date": "2013/09/17"
    }, {
        "close": 3231.31,
        "date": "2013/09/18"
    }, {
        "close": 3237.61,
        "date": "2013/09/19"
    }, {
        "close": 3224.73,
        "date": "2013/09/20"
    }]
}];


/*

 */
$(function() {

    $(".modal-header-close-icon").click(function() {
        $(this).closest('.udkmenu-grid').toggleClass('udkmenu-closed');
    });

    $("[btn='eventAddRule']").click(function() {
        $("[node='panel_add_rule']").toggleClass('udkmenu-closed');
    });

    $("[btn='eventAddFilter']").click(function() {
        $("[node='panel_add_filter']").toggleClass('udkmenu-closed');
    });

    


    $('.udkmenu-grid').bind('mousewheel', function(e) {
        var t = $(this);
        var d = e.originalEvent.wheelDelta || -e.originalEvent.detail;
        if (d > 0 && t.scrollTop() === 0) {
            e.preventDefault();
        }
        else {
            if (d < 0 && (t.scrollTop() == t.get(0).scrollHeight - t.innerHeight())) {
                console.log(1);
                e.preventDefault();
            }
        }
    });

    $(".scenarioManagement").dxDataGrid({
        dataSource: scenarioData,
        headerFilter: {
            visible: true
        },
        filterRow: {
            visible: true,
            applyFilter: "auto"
        },
        columns: [{
            dataField: 'Scenario Name',
            allowResizing: true,
            cellTemplate: function(container, options){
                container.append(options.data.scenarioName);
            }
        }, {
            dataField: 'author',
            allowResizing: true
        }, {
            dataField: 'last Update Time',
            allowResizing: true,
            allowGrouping: false,
            dataType: 'date',
            cellTemplate: function(container, options){
                var oDate = new Date(Number(options.data.lastUpdateTime.$date));
                container.append((oDate.getMonth() + 1) +"/"+oDate.getDate()+ '/' + oDate.getFullYear());
            }
        }, {
            dataField: 'lastEditUser',
            allowResizing: true
        }, {
            dataField: 'Status',
            width: 130,
            allowResizing: true,
            allowFiltering: false,
            allowSorting: false,
            cellTemplate: function(container, options) {
                var divWrapper = $('<div>').addClass('checkbox-container'),
                    inputWrapper = $('<input>').attr('id', options.data._id.$oid).attr('type', 'checkbox'),
                    labelWrapper = $('<label>').attr('for', options.data._id.$oid).text('');

                divWrapper.appendTo(container);
                inputWrapper.appendTo(divWrapper);
                labelWrapper.appendTo(divWrapper);
            }
        }, {
            dataField: '',
            width: 65,
            allowResizing: true,
            allowFiltering: false,
            AllowSorting: false,
            cellTemplate: function(container, options) {
                eventOpenSeenario(container, options);
            }
        }],
        columnChooser: { enabled: true },
        //columnAutoWidth: true,
        allowColumnReordering: true,
        sorting: { mode: 'multiple' },
        groupPanel: { visible: true, emptyPanelText: '' },
        pager: {
            showPageSizeSelector: true,
            allowedPageSizes: [5, 10, 15, 20],
            showInfo: true
        },
        showRowLines: true,
        paging: {
            pageSize: 15
        },
        editing: {
            width: 50,
            //allowUpdating: true,
            mode: 'row',
            allowAdding: true,
            allowDeleting: true
        },
        searchPanel: { visible: true },
        // selection: {
        //     mode: 'multiple',
        //     showCheckBoxesMode: 'always'
        // },
        "export": {
            enabled: true,
            fileName: "Employees",
            allowExportSelectedData: true
        },
        groupPanel: {
            visible: true
        }
    });

    $(".scenarioDetail").dxDataGrid({
        dataSource: {
            store: {
                type: "array",
                key: "ID",
                data: employees
            }
        },
        columns: [{
                dataField: "Prefix",
                caption: "Title",
                width: 70
            },
            "FirstName",
            "LastName", {
                dataField: "Position",
                width: 170
            }, {
                dataField: "State",
                width: 125
            }, {
                dataField: "BirthDate",
                dataType: "date"
            }
        ],
        masterDetail: {
            enabled: true,
            template: function(container, options) {
                var currentEmployeeData = options.data;
                container.addClass("internal-grid-container");
                $("<div>").text(currentEmployeeData.FirstName + " " + currentEmployeeData.LastName + " Tasks:").appendTo(container);
                $("<div>")
                    .addClass("internal-grid")
                    .dxDataGrid({
                        columnAutoWidth: true,
                        columns: ["Subject", {
                            dataField: "StartDate",
                            dataType: "date"
                        }, {
                            dataField: "DueDate",
                            dataType: "date"
                        }, "Priority", {
                            caption: "Completed",
                            dataType: "boolean",
                            calculateCellValue: function(rowData) {
                                return rowData.Status == "Completed";
                            }
                        }],
                        dataSource: currentEmployeeData.Tasks
                    }).appendTo(container);
            }
        }
    });

    $(".scenarioCustomization").dxDataGrid({
        dataSource: weekData,
        showRowLines: true,
        sorting: {
            mode: "none"
        },
        paging: {
            pageSize: 10
        },
        onCellPrepared: function(options) {
            var fieldData = options.value,
                fieldHtml = "";
            if (fieldData && fieldData.value) {
                if (fieldData.diff) {
                    options.cellElement.addClass((fieldData.diff > 0) ? "inc" : "dec");
                    fieldHtml += "<span class='current-value'>" +
                        //fieldData.value + 
                        //Globalize.formatCurrency(fieldData.value, "USD") +
                        "</span> <span class='diff'>" +
                        Math.abs(fieldData.diff).toFixed(2) +
                        "  </span>";
                } else {
                    fieldHtml = fieldData.value;
                }
                options.cellElement.html(fieldHtml);
            }
        },
        columns: [{
                dataField: "date",
                dataType: "date",
                width: 90
            },
            "open",
            "close", {
                caption: "Dynamics",
                width: 155,
                cellTemplate: function(container, options) {
                    container.addClass("chart-cell");
                    $("<div />").dxSparkline({
                        dataSource: options.data.dayClose,
                        argumentField: "date",
                        valueField: "close",
                        type: "line",
                        showMinMax: true,
                        lineColor: "#565077",
                        minColor: "#f00",
                        maxColor: "#2ab71b",
                        pointSize: 6,
                        size: {
                            width: 140,
                            height: 30
                        },
                        tooltip: {
                            enabled: false
                        }
                    }).appendTo(container);
                }
            },
            "high",
            "low"
        ]
    });

    var eventOpenSeenario = function(container, options) {
        var eButton = $('<button>', { 'class': 'btn btn-primary btn-xs waves-effect'}).click(function() {
            $("[node='panel_scenario']").toggleClass('udkmenu-closed');
            // Scenario Name
            $('#input_scenario_name').val(options.data.scenarioName).closest('.fg-line').addClass('fg-toggled');
            // Author
            $('#input_author_name').val(options.data.author).closest('.fg-line').addClass('fg-toggled');
            // Last Update Time
            var oDate = new Date(Number(options.data.lastUpdateTime.$date)),
                sDateValue = (oDate.getMonth()+1)+"/"+oDate.getDate()+'/'+oDate.getFullYear()+" "+oDate.getHours()+":"+oDate.getMinutes()+":"+oDate.getSeconds();
            $('#input_last_update').val(sDateValue).closest('.fg-line').addClass('fg-toggled');
            // Last Edit User
            $('#input_last_edit').val(options.data.lastEditUser).closest('.fg-line').addClass('fg-toggled');
            // Scenario Description
            $('#input_scenario_desc').val(options.data.scenarioDesc).closest('.fg-line').addClass('fg-toggled');
            // Rules List
            $.each(options.data.rules, function(i,v){
                var eLi = $('<li>'),
                    eLink = $('<a>', {'html' : v.ruleName});
                $('.mercury-dropdown-ul').append(eLi.append(eLink));
            });
            var triggerOpen     = $('.mercury-dropdown');
            var triggerClose    = $('.mercury-dropdown-ul').find('li');
            var marka           = $('.mercury-icon');

            // set initial Marka icon
            var m = new Marka('.mercury-icon');
            m.set('triangle').size(10);
            m.rotate('down');

            // trigger dropdown
            triggerOpen.add(marka).on('click', function(e) {
                e.preventDefault();
                $('.mercury-dropdown-ul').add(triggerOpen).toggleClass('open');


                if($('.mercury-icon').hasClass("marka-icon-times")) {
                    m.set('triangle').size(10);
                } else {
                    m.set('times').size(15);
                }
            });

            triggerClose.on('click', function() {
                // set new placeholder for demo
                var options = $(this).find('a').html();
                triggerOpen.text(options);

                $('.mercury-dropdown-ul').add(triggerOpen).toggleClass('open');
                m.set('triangle').size(10);
            });
            // Scenario Rules : div_scenario_rules
            $("#div_scenario_rules").dxDataGrid({
                dataSource: options.data.rules,
                columns: [{
                    dataField: "Rule Name",
                    allowResizing: true,
                    cellTemplate: function(container, options){
                        container.append(options.data.ruleName);
                    }
                },{
                    dataField: "Rule Category",
                    allowResizing: true,
                    cellTemplate: function(container, options){
                        container.append(options.data.ruleCategory.display);
                    }
                },{
                    dataField: "Rule Type",
                    allowResizing: true,
                    cellTemplate: function(container, options){
                        container.append(options.data.ruleType.display);
                    }
                },{
                    dataField: "Action",
                    allowResizing: true,
                    cellTemplate: function(container, options){
                        options.data.action == null ? container.append("null") : container.append(options.data.action.display);
                    }
                }],
                paging: {
                    pageSize: 8
                }
            });
        });

        var eIcon = $('<i>', {'class' : 'zmdi zmdi-open-in-new'}),
            sMsg = "&nbsp;&nbsp;Detail";
        eButton.append(eIcon).append(sMsg);
        eButton.appendTo(container);
    };

    var eventAddRule = function(container, options) {

    };

});
