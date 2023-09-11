import React from "react";
import Childcomponent from "./Childcomponent";
import AddComponent from "./AddComponent";
class Mycomponent extends React.Component {
  state = {
    arrJobs: [
      {
        id: "job1",
        title: "Developer",
        salary: "500",
      },
      {
        id: "job2",
        title: "Testers",
        salary: "400",
      },
      {
        id: "job3",
        title: "Project managers",
        salary: "1000",
      },
    ],
  };
  addNewJob = (job) => {
    // let currentJobs = this.state.arrJobs;
    // currentJobs.push(job);
    this.setState({
      arrJobs: [...this.state.arrJobs, job],
      // arrJobs: currentJobs,
    });
  };

  deleteJob = (job) => {
    let currentJobs = this.state.arrJobs;
    currentJobs = currentJobs.filter((item) => item.id !== job.id);
    this.setState({
      arrJobs: currentJobs,
    });
  };
  render() {
    return (
      <>
        <AddComponent addNewJob={this.addNewJob} />

        <Childcomponent
          arrJobs={this.state.arrJobs}
          deleteJob={this.deleteJob}
        />
      </>
    );
  }
}

export default Mycomponent;
