import React from 'react';
import classes from '../CSS/StudentSupervising.module.css';
import SidebarLecturer from './SidebarLecturer';

function StudentSupervising() {
  return (
    <div>
       <SidebarLecturer />
    <div className={classes.wrapper}>
    <div className={classes.row}>
      <div className={classes.column}>
        <div className={classes.card}>
          <img src="../images/friend.png" alt="profile" />
          <h3>UMEZURIKE UGBOIZU NMACHI</h3>
          <p>19/2754</p>
          <button> <a href="/studentsupervising/workdetails">Work Details</a> </button>  <button> <a href="/studentsupervising/pastrecords">Report</a> </button>
        </div>
      </div>

      <div className={classes.column}>
        <div className={classes.card}>
          <img src="../images/friend.png" alt="profile" />
          <h3>SAM-EBOIGBE DANIEL</h3>
          <p>19/1664</p>
          <button> <a href="/studentsupervising/workdetails">Work Details</a> </button> <button> <a href="/studentsupervising/pastrecords">Report</a> </button>
        </div>
      </div>
  
      <div className={classes.column}>
        <div className={classes.card}>
          <img src="../images/friend.png" alt="profile" />
          <h3>UKAH-NWOKEJIEZI IKECHUKWU</h3>
          <p>19/0164</p>
          <button> <a href="/studentsupervising/workdetails">Work Details</a> </button> <button> <a href="/studentsupervising/pastrecords">Report</a> </button>
        </div>
      </div>
  
      <div className={classes.column}>
        <div className={classes.card}>
          <img src="../images/friend.png" alt="profile" />
          <h3>ONYIA OMASIRICHIM</h3>
          <p>19/1273</p>
          <button> <a href="/studentsupervising/workdetails">Work Details</a> </button> <button> <a href="/studentsupervising/pastrecords">Report</a> </button>
        </div>
      </div>

      <div className={classes.column}>
        <div className={classes.card}>
          <img src="../images/friend.png" alt="profile" />
          <h3>ODUNFA AYOMIDE ESTHER</h3>
          <p>19/1205</p>
          <button> <a href="/studentsupervising/workdetails">Work Details</a> </button> <button> <a href="/studentsupervising/pastrecords">Report</a> </button>
        </div>
      </div>

      <div className={classes.column}>
        <div className={classes.card}>
          <img src="../images/friend.png" alt="profile" />
          <h3>SANNI COLLINS OJOCHONU</h3>
          <p>19/1547  </p>
          <button> <a href="/studentsupervising/workdetails">Work Details</a> </button> <button> <a href="/studentsupervising/pastrecords">Report</a> </button>
        </div>
      </div>

      <div className={classes.column}>
        <div className={classes.card}>
          <img src="../images/friend.png" alt="profile" />
          <h3>OMONIYI EMMANUEL PELUMI</h3>
          <p>19/1997</p>
          <button> <a href="/studentsupervising/workdetails">Work Details</a> </button> <button> <a href="/studentsupervising/pastrecords">Report</a> </button>
        </div>
      </div>

      <div className={classes.column}>
        <div className={classes.card}>
          <img src="../images/friend.png" alt="profile" />
          <h3>NDUBUISI MIRACLE CHIMUANYA</h3>
          <p>19/1807</p>
          <button> <a href="/studentsupervising/workdetails">Work Details</a> </button> <button> <a href="/studentsupervising/pastrecords  ">Report</a> </button>
        </div>
      </div>

    </div>
    </div>
    </div>
  );
}
    

export default StudentSupervising