import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Card, Avatar } from 'antd';

const { Meta } = Card;


const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    isAuthenticated && (
      <Card loading={isLoading}>
        <Meta 
          title = {user.name}
          avatar = {<Avatar src={user.picture} size="large"/>}
          description = {user.email}
        />        
      </Card>
    )
  );
};

export default Profile;