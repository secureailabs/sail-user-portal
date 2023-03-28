import React from 'react';
import StandardContent from 'src/components/StandardContent';
import Card from 'src/components/Card';
import Text from 'src/components/Text';
import Button from 'src/components/Button';
import Margin from 'src/components/Margin';
import { useQueryClient } from 'react-query';
import { UserInfo_Out } from 'src/client';

const Settings: React.FC = () => {

  // Get the user infomation from query
  const queryClient = useQueryClient()
  const currentUser: UserInfo_Out = queryClient.getQueryData('userData')!

  return (
    <>
      <StandardContent title="Settings">
        <>
          <Card primaryText="My Profile">
            <div className="my-profile">
              <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown.
              </Text>
              <Button full={false} button_type="secondary">
                Edit My Profile
              </Button>
            </div>
          </Card>

          <Margin size={8} />
          <Card primaryText="Users">
            <div className="my-profile">
              <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown.
              </Text>
              <Button full={false} button_type="secondary">
                Add User
              </Button>
            </div>
          </Card>
          <Margin size={8} />
          <Card primaryText="My Organization">
            <div className="my-profile">
              <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown.
              </Text>
              <Button full={false} button_type="secondary">
                Edit My Organization
              </Button>
            </div>
          </Card>
        </>
      </StandardContent>
    </>
  );
};

export default Settings;
