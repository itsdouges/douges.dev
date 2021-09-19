import Inline from 'design-system/inline';
import Lozenge from 'design-system/lozenge';
import Stack from 'design-system/stack';
import Button from 'design-system/button';
import LinkButton from 'design-system/link-button';
import Avatar, { AvatarButton, AvatarLink } from 'design-system/avatar';

function Playground() {
  return (
    <Stack gap="regular">
      <Inline gap="regular">
        <Lozenge appearance="defaultBold">Lozenge</Lozenge>
        <Lozenge appearance="new">Lozenge</Lozenge>
        <Lozenge appearance="success">Lozenge</Lozenge>
        <Lozenge appearance="moved">Lozenge</Lozenge>
        <Lozenge appearance="new">Lozenge</Lozenge>
        <Lozenge appearance="removed">Lozenge</Lozenge>
      </Inline>
      <Inline gap="regular">
        <Lozenge appearance="defaultBold">Lozenge</Lozenge>
        <Lozenge appearance="newBold">Lozenge</Lozenge>
        <Lozenge appearance="successBold">Lozenge</Lozenge>
        <Lozenge appearance="movedBold">Lozenge</Lozenge>
        <Lozenge appearance="newBold">Lozenge</Lozenge>
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
        <Avatar size="xsmall" />
        <Avatar size="small" />
        <Avatar size="medium" />
        <Avatar size="large" />
        <Avatar size="xlarge" />
      </Inline>
      <Inline>
        <AvatarLink size="xsmall" appearance="square" />
        <AvatarLink size="small" appearance="square" />
        <AvatarLink size="medium" appearance="square" />
        <AvatarLink size="large" appearance="square" />
        <AvatarLink size="xlarge" appearance="square" />
      </Inline>
      <Inline>
        <AvatarButton size="xsmall" />
        <AvatarButton size="small" />
        <AvatarButton size="medium" />
        <AvatarButton size="large" />
        <AvatarButton size="xlarge" />
      </Inline>
    </Stack>
  );
}

export default Playground;
