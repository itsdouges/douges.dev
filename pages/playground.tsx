import Inline from 'design-system/inline';
import Lozenge from 'design-system/lozenge';
import Stack from 'design-system/stack';
import Button from 'design-system/button';
import LinkButton from 'design-system/link-button';
import Avatar, { AvatarButton, AvatarLink } from 'design-system/avatar';
import Tag, { TagLink } from 'design-system/tag';
import DropdownMenu, { MenuItem } from 'design-system/dropdown-menu';
import Tabs, { Tab, TabList, TabPanel } from 'design-system/tabs';
import Box from 'design-system/box';
import Text from 'design-system/text';
import Textfield from 'design-system/textfield';
import Label from 'design-system/label';
import Badge from 'design-system/badge';
import CodeBlock from 'design-system/code-block';
import Tooltip from 'design-system/tooltip';
import Heading from 'design-system/heading';
import ProgressIndicator from 'design-system/progress-indicator';

function Playground() {
  return (
    <Box padding="xlarge">
      <Stack gap="regular">
        <Heading level={1}>Heading one</Heading>
        <Heading level={2}>Heading two</Heading>
        <Heading level={3}>Heading three</Heading>

        <Inline gap="regular">
          <Tooltip content="Tooltip">
            <Lozenge appearance="default">Tooltip</Lozenge>
          </Tooltip>
          <Lozenge appearance="new">Lozenge</Lozenge>
          <Lozenge appearance="inprogress">Lozenge</Lozenge>
          <Lozenge appearance="moved">Lozenge</Lozenge>
          <Lozenge appearance="success">Lozenge</Lozenge>
          <Lozenge appearance="removed">Lozenge</Lozenge>
        </Inline>
        <Inline gap="regular">
          <Lozenge appearance="defaultBold">Lozenge</Lozenge>
          <Lozenge appearance="newBold">Lozenge</Lozenge>
          <Lozenge appearance="inprogressBold">Lozenge</Lozenge>
          <Lozenge appearance="movedBold">Lozenge</Lozenge>
          <Lozenge appearance="successBold">Lozenge</Lozenge>
          <Lozenge appearance="removedBold">Lozenge</Lozenge>
        </Inline>
        <Inline gap="regular">
          <Button appearance="subtle">Button</Button>
          <Button appearance="default">Button</Button>
          <Button appearance="primary">Button</Button>
          <Button appearance="warning">Button</Button>
          <Button appearance="danger">Button</Button>
          <Button isSelected>Button</Button>
          <Button isDisabled>Button</Button>
        </Inline>
        <Inline gap="regular">
          <LinkButton href="#" appearance="subtle">
            Button
          </LinkButton>
          <LinkButton href="#" appearance="default">
            Button
          </LinkButton>
          <LinkButton href="#" appearance="primary">
            Button
          </LinkButton>
          <LinkButton href="#" appearance="warning">
            Button
          </LinkButton>
          <LinkButton href="#" appearance="danger">
            Button
          </LinkButton>
          <LinkButton href="#" isSelected>
            Button
          </LinkButton>
        </Inline>
        <Inline>
          <Box background="discoveryBold" padding="large">
            <Button appearance="inverted">Button</Button>
          </Box>
          <Box background="brandBold" padding="large">
            <Button appearance="inverted">Button</Button>
          </Box>
          <Box background="dangerBold" padding="large">
            <Button appearance="inverted">Button</Button>
          </Box>
          <Box background="warningBold" padding="large">
            <Button appearance="inverted">Button</Button>
          </Box>
          <Box background="neutralBold" padding="large">
            <Button appearance="inverted">Button</Button>
          </Box>
          <Box background="successBold" padding="large">
            <Button appearance="inverted">Button</Button>
          </Box>
        </Inline>

        <Inline gap="small">
          <Avatar size="xsmall" borderColor="brand" />
          <Avatar size="small" borderColor="success" />
          <Avatar size="medium" borderColor="warning" />
          <Avatar size="large" borderColor="discovery" />
          <Avatar size="xlarge" borderColor="danger" />
        </Inline>
        <Inline gap="small">
          <AvatarLink size="xsmall" appearance="square" />
          <AvatarLink size="small" appearance="square" />
          <AvatarLink size="medium" appearance="square" />
          <AvatarLink size="large" appearance="square" />
          <AvatarLink size="xlarge" appearance="square" />
        </Inline>
        <Inline gap="-small">
          <AvatarButton size="medium" />
          <AvatarButton size="medium" />
          <AvatarButton size="medium" />
          <AvatarButton size="medium" />
          <AvatarButton size="medium" />
        </Inline>
        <Inline gap="small">
          <TagLink color="greyLight">Tag</TagLink>
          <TagLink color="blueLight">Tag</TagLink>
          <TagLink color="greenLight">Tag</TagLink>
          <TagLink color="redLight">Tag</TagLink>
          <TagLink color="tealLight">Tag</TagLink>
          <TagLink color="yellowLight">Tag</TagLink>
          <TagLink color="purpleLight">Tag</TagLink>
        </Inline>
        <Inline gap="small">
          <Tag color="grey">Tag</Tag>
          <Tag color="blue">Tag</Tag>
          <Tag color="green">Tag</Tag>
          <Tag color="red">Tag</Tag>
          <Tag color="teal">Tag</Tag>
          <Tag color="yellow">Tag</Tag>
          <Tag color="purple">Tag</Tag>
        </Inline>
        <Inline gap="small">
          <TagLink
            icon={<Avatar borderColor="none" size="xsmall" />}
            color="greyLight"
            appearance="rounded">
            Tag
          </TagLink>
          <TagLink
            icon={<Avatar borderColor="none" size="xsmall" />}
            color="blueLight"
            appearance="rounded">
            Tag
          </TagLink>
          <TagLink
            icon={<Avatar borderColor="none" size="xsmall" />}
            color="green"
            appearance="rounded">
            Tag
          </TagLink>
          <TagLink
            icon={<Avatar borderColor="none" size="xsmall" />}
            color="redLight"
            appearance="rounded">
            Tag
          </TagLink>
          <TagLink
            icon={<Avatar borderColor="none" size="xsmall" />}
            color="tealLight"
            appearance="rounded">
            Tag
          </TagLink>
          <TagLink
            icon={<Avatar borderColor="none" size="xsmall" />}
            color="yellowLight"
            appearance="rounded">
            Tag
          </TagLink>
          <TagLink
            icon={<Avatar borderColor="none" size="xsmall" />}
            color="purpleLight"
            appearance="rounded">
            Tag
          </TagLink>
        </Inline>
        <Inline gap="small">
          <Tag icon={<Avatar borderColor="none" size="xsmall" />} color="grey" appearance="rounded">
            Tag
          </Tag>
          <Tag icon={<Avatar borderColor="none" size="xsmall" />} color="blue" appearance="rounded">
            Tag
          </Tag>
          <Tag
            icon={<Avatar borderColor="none" size="xsmall" />}
            color="green"
            appearance="rounded">
            Tag
          </Tag>
          <Tag icon={<Avatar borderColor="none" size="xsmall" />} color="red" appearance="rounded">
            Tag
          </Tag>
          <Tag icon={<Avatar borderColor="none" size="xsmall" />} color="teal" appearance="rounded">
            Tag
          </Tag>
          <Tag
            icon={<Avatar borderColor="none" size="xsmall" />}
            color="yellow"
            appearance="rounded">
            Tag
          </Tag>
          <Tag
            icon={<Avatar borderColor="none" size="xsmall" />}
            color="purple"
            appearance="rounded">
            Tag
          </Tag>
        </Inline>

        <Inline gap="regular" inlineAlign="center" width="full">
          <ProgressIndicator isSelected />
          <ProgressIndicator />
          <ProgressIndicator />
        </Inline>
        <Inline gap="regular" inlineAlign="center" width="full">
          <ProgressIndicator appearance="primary" isSelected />
          <ProgressIndicator appearance="primary" />
          <ProgressIndicator appearance="primary" />
        </Inline>
        <Inline gap="regular" inlineAlign="center" width="full">
          <ProgressIndicator appearance="discovery" isSelected />
          <ProgressIndicator appearance="discovery" />
          <ProgressIndicator appearance="discovery" />
        </Inline>

        <Box background="brandBold" paddingY="large" width="full">
          <Inline gap="regular" inlineAlign="center" width="full">
            <ProgressIndicator appearance="invert" isSelected />
            <ProgressIndicator appearance="invert" />
            <ProgressIndicator appearance="invert" />
          </Inline>
        </Box>

        <DropdownMenu trigger="Open menu">
          <MenuItem>Foo</MenuItem>
          <MenuItem isSelected>Bar</MenuItem>
          <MenuItem>Baz</MenuItem>
        </DropdownMenu>

        <Tabs>
          <TabList>
            <Tab isSelected>Tab 1</Tab>
            <Tab>Tab 2</Tab>
            <Tab>Tab 3</Tab>
          </TabList>
          <TabPanel>
            <Box padding="xlarge" background="neutralSubtle">
              <Text weight="bolder" color="low" size="regular">
                Contents for panel one
              </Text>
            </Box>
          </TabPanel>
        </Tabs>

        <Inline gap="small">
          <Badge>100</Badge>
          <Badge appearance="added">+100</Badge>
          <Badge appearance="important">100</Badge>
          <Badge appearance="primary">100</Badge>
          <Badge appearance="primaryInverted">100</Badge>
          <Badge appearance="removed">-100</Badge>
        </Inline>

        <Label htmlFor="tf" label="Textfield">
          <Textfield id="tf" placeholder="This is a textfield" />
        </Label>

        <CodeBlock>{'function foo() {}'}</CodeBlock>
      </Stack>
    </Box>
  );
}

export default Playground;
