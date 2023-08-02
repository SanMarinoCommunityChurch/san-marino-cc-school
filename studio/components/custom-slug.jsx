import {Badge, Box, Flex, Stack, Text, Card} from '@sanity/ui'

export default function CustomSlugInput(props) {
  return (
    <Flex>
      <Badge>/posts/</Badge>
      <Box style={{flex: 1}}>{props.renderDefault({...props})}</Box>
    </Flex>
  )
}
