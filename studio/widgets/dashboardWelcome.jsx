import {DashboardWidgetContainer} from '@sanity/dashboard'
import {ImageIcon, MasterDetailIcon, GroqIcon} from '@sanity/icons'
import {Card, Flex, Grid, Button, Box, Heading, Text, Stack} from '@sanity/ui'

function DashboardWelcome() {
  return (
    <DashboardWidgetContainer>
      <Box padding={[3, 3, 4, 5]}>
        <Stack space={[3, 3, 4, 5]}>
          <img
            src="https://cdn.sanity.io/images/rnhp93wy/production/f4c59212e9e84be39fc89e00932e28d5e81766c8-249x156.png"
            width={160}
          />
          <Heading as="h1" size={4}>
            Welcome to Your Studio
          </Heading>
          <Text>
            Welcome to your customized Sanity Studio for the San Marino Community Church Nursery
            School website. This is where you will add and edit all content and assets for your
            site.
          </Text>
          <Grid columns={3} gap={4}>
            <Card padding={4} border>
              <Stack space={4}>
                <Flex align="center" gap={3}>
                  <Text size={3}>
                    <MasterDetailIcon />
                  </Text>
                  <Heading as="h2" size={2}>
                    Desk Tab
                  </Heading>
                </Flex>
                <Text>The area for creating, editing, and managing content documents.</Text>
                <Button as="a" href="/desk" mode="ghost" text="Go to Tab" />
              </Stack>
            </Card>
            <Card padding={4} border>
              <Stack space={4}>
                <Flex align="center" gap={3}>
                  <Text size={3}>
                    <ImageIcon />
                  </Text>
                  <Heading as="h2" size={2}>
                    Media Tab
                  </Heading>
                </Flex>
                <Text>The area for uploading and managing assets like images and video.</Text>
                <Button as="a" href="/media" mode="ghost" text="Go to Tab" />
              </Stack>
            </Card>
            <Card padding={4} border>
              <Stack space={4}>
                <Flex align="center" gap={3}>
                  <Text size={3}>
                    <GroqIcon />
                  </Text>
                  <Heading as="h2" size={2}>
                    Deploy Tab
                  </Heading>
                </Flex>
                <Text>The area for deploying all published content to the live site.</Text>
                <Button as="a" href="/netlify" mode="ghost" text="Go to Tab" />
              </Stack>
            </Card>
          </Grid>
        </Stack>
      </Box>
    </DashboardWidgetContainer>
  )
}

export function dashboardWelcomeWidget(config) {
  return {
    name: 'dashboard-welcome-widget',
    component: function component() {
      return <DashboardWelcome></DashboardWelcome>
    },
    layout: config.layout,
  }
}
