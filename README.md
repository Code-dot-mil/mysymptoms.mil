# Department of Defense MySymptoms.mil

## Project Status

The MySymptoms.mil project was online between April 2020 through November 2021. This project is no longer in active development and is being placed publically in an archived state.

## Background

The Defense Digital Service designed an online tool specifically for the Department of Defense community where active duty military, Reserve and Guard members, DOD civilians, contractors and family members can assess any Coronavirus symptoms they may be experiencing. Called MySymptoms.mil, the tool was created at the direction of Secretary of Defense Mark Esper. It incorporates CDC guidance, but it does not diagnose COVID-19 or take the place of sound advice from a medical provider. Users anonymously answer simple questions about their symptoms, underlying conditions, recent travel and contact with anyone who has tested positive for the virus. Based on their responses, MySymptoms.mil assesses the likelihood someone may have COVID-19 and then provides information on how to seek further advice and treatment. It also includes guidance to military commanders who may have members with COVID-19 symptoms. MySymptoms.mil was built on a .mil domain to ensure the DOD community can access it regardless of the network they use. While geared for the military, the public may also use it.

Partners who helped develop the tool include Terry M. Rauch, Ph.D., M.P.H., M.B.A., Acting Deputy Assistant Secretary of Defense (Health Readiness Policy & Oversight), Defense Health Headquarters, and Donald Shell, M.D., MA, Acting Director, Health Services Policy and Oversight OASD(HA) Director, Disease Prevention, Disease Management and Population Health Policy & Oversight, Defense Health Headquarters.

## Related Work

-   [COVID-19 Calculator](https://github.com/deptofdefense/covid19-calculator) - The underlying tool used to make predictions about a person's likelihood and risk if having COVID-19
-   MyStatus - A DoD wide tool for collecting COVID-19 symptoms and related information used to understand the health of active military members and contribute to understanding overall readiness.
-   [New England Journal of Medicine (NEJM) Publication](https://www.nejm.org/doi/full/10.1056/NEJMoa2019375) - Data collected through MyStatus contributed
-   [medRxiv Publication](https://www.medrxiv.org/content/10.1101/2021.08.25.21254738v1) - Data collected through MyStatus contributed
-   [FedScoop News Article](https://www.fedscoop.com/navy-covid-tracking-app/)

## Get Started

Installing Dependencies

```
npm install
```

### Website

Launch Website

```
npm start
```

## Assessment

The assessment is broken into many parts. All information provided by the respondent is stored in memory for the duration of the broswer session and thus not cached locally or stored externally in a database. This tool is purely a personally assessment and recommendation tool for the respondent. Below we attempt to describe what each piece of the assessment flow does.

### Terms

Terms and conditions the respondent must agree to start the assessment.

### Demographics

This step asks the respondent to select their age range and how they are related to the DoD. Age either stops the survey all together if the respondent selects <18 or contributes to their risk score determined using the @deptofdefense/covid19-calculator. As for affiliation tothe DoD, the options include, `'military' | 'militaryDependent' | 'dodCivilian' | 'dodContractor'`. The primary use for this information is to inform the recommendation information after submitting.

### Exposures

This step asks the respondent to list exposures they may have had which would put them at higher risk of contracting COVID19. Exposure options are drawn from @deptofdefense/covid19-calculator and respondents answers will factor into their exposure risk rating.

### PreExistingsConditions

This step asks the respondent to list pre existing conditions they may have which would put them at higher risk from COVID19. Pre-existing conditions options are drawn from @deptofdefense/covid19-calculator and respondents answers will factor into their pre-existing risk rating.

### Recommendations

This step asks the respondent to list pre existing conditions they may have which would put them at higher risk from COVID19. Pre-existing conditions options are drawn from @deptofdefense/covid19-calculator and respondents answers will factor into their pre-existing risk rating.
