import React from 'react';

type TUser = {
  name: string;
  email: string;
  adress: string;
  phone: string;
  linkedin: string;
  age: number
  introduction: string;
}

type TUserJobs = {
  jobs: {
    company: string;
    entry: {
      _d: Date;
      _f: string
    };
    isAtual: string;
    office: string;
    output: {
      _d: Date;
      _f: string
    }
    tasks: string;
  }


}

type TUerFormation = {
  formations: {
    university: string;
    entry: {
      _d: Date;
      _f: string
    };
    isAtual: string;
    course: string;
    output: {
      _d: Date;
      _f: string
    }
    resume: string;
  }
}

type TAddictionaisInformations = {
  addictionaisInformations: {
    name: string;
    description: string
  }
}


type TUserSkills = {
  skills: {
    skill: string;
    slider: number
  }
}


type TUserContextType = {
  userQualifications: Array<TUerFormation> | undefined;
  user: TUser | undefined;
  userJobs: Array<TUserJobs> | undefined;
  userInformations: Array<TAddictionaisInformations> | undefined;
  userSkill: Array<TUserSkills> | undefined;
  createPersonalUserData: (e: TUser) => void;
  createUserJobsExperiences: (e: TUserJobs) => void;
  createUserQualificationsAndFormations: (e: TUerFormation) => void;
  createUserAddictionalInformations: (e: TAddictionaisInformations) => void;
  createUserSkills: (e: TUserSkills) => void;
}

type userContextProviderProps = {
  children: React.ReactNode,
}



export const UserContext = React.createContext({} as TUserContextType);

export const UserContextProvider = (props: userContextProviderProps) => {

  const [user, setUser] = React.useState<TUser>();
  const [userJobs, setUserJobs] = React.useState<Array<TUserJobs>>()
  const [userQualifications, setUserQualifications] = React.useState<Array<TUerFormation>>()
  const [userInformations, setUserInformations] = React.useState<Array<TAddictionaisInformations>>()
  const [userSkill, setUserskils] = React.useState<Array<TUserSkills>>()

  const createPersonalUserData = (user: TUser) => {
    setUser({
      name: user.name,
      email: user.email,
      adress: user.adress,
      phone: user.phone,
      linkedin: user.linkedin,
      age: user.age,
      introduction: user.introduction
    })
  }

  const createUserJobsExperiences = (jobs: TUserJobs) => {
    setUserJobs([jobs])
  }

  const createUserQualificationsAndFormations = (formations: TUerFormation) => {
    setUserQualifications([formations])
  }

  const createUserAddictionalInformations = (informations: TAddictionaisInformations) => {
    setUserInformations([informations])
  }

  const createUserSkills = (skils: TUserSkills) => {
    setUserskils([skils])
  }

  return (
    <UserContext.Provider
      value={{
        userQualifications,
        user,
        userJobs,
        userInformations,
        userSkill,
        createPersonalUserData,
        createUserJobsExperiences,
        createUserQualificationsAndFormations,
        createUserAddictionalInformations,
        createUserSkills
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
