import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Ikem Emmanuel",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Services", path: "/services" },
        { title: "Works", path: "/works" },
        { title: "Blog", path: "/blog" },
        { title: "Contact", path: "/contact" }
      ],
      home: {
        pageTitle: "Home",
        section: {
          about: {
            sectionTitle: "About",
            title: "ABOUT",
            headerOne: `I'm Ikem Emmanuel`,
            headerTwo: `I'm a Web Developer`,
            headerThree: `I'm a Designer`,
            subTitle: `My Professional Summary`,
            image: "Link to Image",
            socialLinks: {
              facebook: "facebook profile Url",
              twitter: "twitter profile Url",
              github: "github profile Url"
            },
            downloadResumebtn: "link to download resume"
          },
          services: {
            title: "SERVCiES",
            mainHeader: "My Services",
            sectionHeader: "Here Are Some of My Skills",
            image: "Link to Image",
            servicesOffered: {
              serviceOne: {
                title: "Graphics Design",
                items: [
                  "UI Design",
                  "Website & Digital Design",
                  "Brading & Visual Identity",
                  "Print Design"
                ]
              },
              serviceTwo: {
                title: "Graphics Design",
                items: [
                  "UI Design",
                  "Website & Digital Design",
                  "Brading & Visual Identity",
                  "Print Design"
                ]
              },
              serviceThree: {
                title: "Graphics Design",
                items: [
                  "UI Design",
                  "Website & Digital Design",
                  "Brading & Visual Identity",
                  "Print Design"
                ]
              },
              serviceFour: {
                title: "Graphics Design",
                items: [
                  "UI Design",
                  "Website & Digital Design",
                  "Brading & Visual Identity",
                  "Print Design"
                ]
              }
            }
          },

          experience: {
            title: "EXPERIENCE",
            sectionHeader: "My Experience so Far",
            jobs: [
              {
                title: "Web Developer",
                company: "Siliconstreets",
                duration: "range of years active (month/year)",
                description: "job Description"
              },

              {
                title: "Web Developer",
                company: "Siliconstreets",
                duration: "range of years active (month/year)",
                description: "job Description"
              },

              {
                title: "Web Developer",
                company: "Siliconstreets",
                duration: "range of years active (month/year)",
                description: "job Description"
              }
            ]
          },

          education: {
            title: "EDUCATION",
            sectionHeader: "My Educational Jistory",
            schools: [
              {
                certificateTitle: "First School Leaving Certificate",
                company: `The King's Way College`,
                duration: "range of years active (month/year)"
              },

              {
                certificateTitle: "First School Leaving Certificate",
                company: `The King's Way College`,
                duration: "range of years active (month/year)"
              },

              {
                certificateTitle: "First School Leaving Certificate",
                company: `The King's Way College`,
                duration: "range of years active (month/year)"
              }
            ]
          },

          portfolio: {
            title: "PORTFOLIO",
            sectionHeader: "Done Project",
            image: "Link to Image",
            projectDone: [
              {
                title: "Graphics Design",
                image: "link to project image",
                path: "link to project",
                description: "Project Description"
              },

              {
                title: "Graphics Design",
                image: "link to project image",
                path: "link to project",
                description: "Project Description"
              },

              {
                title: "Graphics Design",
                image: "link to project image",
                path: "link to project",
                description: "Project Description"
              },

              {
                title: "Graphics Design",
                image: "link to project image",
                path: "link to project",
                description:
                  "Project DescriptionFar far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
              }
            ]
          }
        }
      }
    };
  }

  render() {
    return (
      <div className="App">
        <h2>{this.state.home.section.portfolio.projectDone[3].description}</h2>
      </div>
    );
  }
}

export default App;
