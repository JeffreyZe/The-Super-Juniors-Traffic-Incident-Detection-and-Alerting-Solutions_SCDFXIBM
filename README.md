


# Traffic Incident Detection and Alerting Solutions


[![License](https://img.shields.io/badge/License-Apache2-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0) [![Slack](https://img.shields.io/badge/Join-Slack-blue)](https://callforcode.org/slack) [![Website](https://img.shields.io/badge/View-Website-blue)](https://jeffreyze.github.io/SCDFxIBM-Call-for-Code-2020/)

This is the project done by team The Super Juniors, with the collaboration form 
- Li Ziyang
- Tang Jingxiang 
- Yang Nanyang
- Wang Xuze

## Contents

1. [Short description](#short-description)
1. [Demo video](#demo-video)
1. [The architecture](#the-architecture)
1. [Live demo](#live-demo)
1. [Technologies used](#technologies-used)
1. [Contributing](#contributing)
1. [Acknowledgments](#acknowledgments)

## Short description

### What's the problem?

Road traffic accidents can pose serious threat to the wellbeings of commuters. Singapore has a relatively high fatality per capita. Besides measures to reduce number of traffic accidents, it is also important to build faster response mechanism to give more timely treatment to traffic accident victims.

### How can technology help?

 Instead of having a large number of people staring at multiple screens, only a few people need to watch the dashboard and double-check on potential accidents highlighted by the dashboard and decide whether the information should be forwarded and emergency responders should be dispatched to treat victims of the traffic accident. Relevant information such as location or severity of the accident can also be estimated and pass on to responders for them to respond to the accident more effectively.


## Demo video

[![Watch the video](https://github.com/JeffreyZe/The-Super-Juniors-Traffic-Incident-Detection-and-Alerting-Solutions_SCDFXIBM/tree/master/src/cover.png)](https://youtu.be/)

## The architecture and solution

![Video transcription/translation app](https://github.com/JeffreyZe/The-Super-Juniors-Traffic-Incident-Detection-and-Alerting-Solutions_SCDFXIBM/tree/master/src/solution.png)

1. Firstly, traffic CCTV footage will be used to train the machine learning models (including object detection and classification) using the IBM Waston Studio.
2. A well trained model would be able to detection whether there is an accident happened. 
3. If an incident is detected, the information would be displayed onto the FrontEnd dashboard, using serverless web application powered by IBM cloudant cloud functions. 
4. The emergence responders at SCDF would be able to get alerts and view more detailed information on dashboard and perform necessary steps after that.
5. Noticeably, our machine learning results would be also be available for three parties such as radios, news centres etc.


## Live demo

You can find a running system to test at [Traffic Incident Detection and Alerting Solutions](https://jeffreyze.github.io/SCDFxIBM-Call-for-Code-2020/)

## Technologies used

* [IBM Waston Studio](https://rometools.github.io/rome/) - Used to train Machine Learning Models and Image Classification Models
* [IBM Cloudant](https://cloud.ibm.com/catalog?search=cloudant#search_results) - The Apache-backed CouchDB database used
* [IBM Cloud Functions](https://cloud.ibm.com/catalog?search=cloud%20functions#search_results) - API Gateway, Actions, Sequences
* [Javascript](https://www.javascript.com/) - The front web framework used
* [CanvaJS](https://canvasjs.com/) - Dependency management
front web framework used
* [Github Pages](https://pages.github.com/) - Serverless Web Application Deployment



## Contributing

Please contact [@JeffreyZe](https://github.com/JeffreyZe) for details on our code of conduct, and the process for submitting pull requests to us.


## License

This project is licensed under the Apache 2 License - see the [LICENSE](LICENSE) file for details

## Acknowledgments

* Thanks for [SCDF](https://SCDF.gov.sg) and [IBM](https://www.ibm.com/sg-en) for offering this opportunities for us to learn and showcase the solutions .
