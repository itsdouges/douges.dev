/** @jsxImportSource @emotion/react */
import css from 'design-system/css';
import Box from 'design-system/box';
import ExampleStepper, { Step } from 'components/examples/example-stepper';
import Text from 'design-system/text';
import Image from 'next/image';
import yuki1 from 'public/yuki-1.jpg';
import yuki2 from 'public/yuki-2.jpg';
import yuki3 from 'public/yuki-3.jpg';
import Stack from 'design-system/stack';

const styles = css({
  noWrap: { whiteSpace: 'nowrap', transformOrigin: 'left top' },
  align: { flexDirection: 'column' },
  gap: {
    margin: 3,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    width: 125,
    height: 75,
    position: 'relative',
  },
  zoom: {
    transformOrigin: 'left top',
    transform: 'scale(2)',
  },
});

function MarginChild() {
  return (
    <ExampleStepper>
      <Step
        shouldOverflow
        description="We begin with a group of thumbnails"
        code={`
      .thumb {

      }
      `}>
        <Box css={styles.noWrap} borderRadius="default">
          <Box
            css={[styles.card]}
            paddingX="regular"
            display="inline flex"
            background="neutralSubtle">
            <Image alt="Cute cat" placeholder="blur" objectFit="cover" layout="fill" src={yuki1} />
          </Box>
          <Box
            css={[styles.card]}
            paddingX="regular"
            display="inline flex"
            background="neutralSubtle">
            <Image alt="Cute cat" placeholder="blur" objectFit="cover" layout="fill" src={yuki2} />
          </Box>
          <Box
            css={[styles.card]}
            paddingX="regular"
            display="inline flex"
            background="neutralSubtle">
            <Image alt="Cute cat" placeholder="blur" objectFit="cover" layout="fill" src={yuki3} />
          </Box>
        </Box>
      </Step>

      <Step
        shouldOverflow
        description="Then add some space between them"
        code={`diff
      .thumb {
      +  margin: 3px;
      }
      `}>
        <Box css={styles.noWrap} borderRadius="default">
          <Box
            css={[styles.card, styles.gap]}
            paddingX="regular"
            display="inline flex"
            background="neutralSubtle">
            <Image alt="Cute cat" placeholder="blur" objectFit="cover" layout="fill" src={yuki1} />
          </Box>
          <Box
            css={[styles.card, styles.gap]}
            paddingX="regular"
            display="inline flex"
            background="neutralSubtle">
            <Image alt="Cute cat" placeholder="blur" objectFit="cover" layout="fill" src={yuki2} />
          </Box>
          <Box
            css={[styles.card, styles.gap]}
            paddingX="regular"
            display="inline flex"
            background="neutralSubtle">
            <Image alt="Cute cat" placeholder="blur" objectFit="cover" layout="fill" src={yuki3} />
          </Box>
        </Box>
      </Step>

      <Step
        description="We then reuse the thumb in another place in our app"
        code={`css
      .thumb {
        margin: 3px;
      }
      `}>
        <Box
          key="asd"
          background="overlay"
          shadow="overlay"
          css={[styles.noWrap, styles.align]}
          display="inline flex"
          borderRadius="default">
          <Box
            css={[styles.card, styles.gap]}
            paddingX="regular"
            display="inline flex"
            background="neutralSubtle">
            <Image alt="Cute cat" placeholder="blur" objectFit="cover" layout="fill" src={yuki3} />
          </Box>

          <Stack padding="medium">
            <Text weight="bold" color="success" size="smallest">
              98% match
            </Text>
            <Text size="smallest" color="medium">
              Cute · Fluffy
            </Text>
          </Stack>
        </Box>
      </Step>
      <Step
        description="But the margin we used on it previously is causing problems"
        code={`css
      .thumb {
        margin: 3px;
      }
      `}>
        <Box
          key="asd"
          background="overlay"
          shadow="overlay"
          css={[styles.noWrap, styles.align, styles.zoom]}
          display="inline flex"
          borderRadius="default">
          <Box
            css={[styles.card, styles.gap]}
            paddingX="regular"
            display="inline flex"
            background="neutralSubtle">
            <Image alt="Cute cat" placeholder="blur" objectFit="cover" layout="fill" src={yuki3} />
          </Box>

          <Stack padding="medium">
            <Text weight="bold" color="success" size="smallest">
              98% match
            </Text>
            <Text size="smallest" color="medium">
              Cute · Fluffy
            </Text>
          </Stack>
        </Box>
      </Step>
      <Step
        description="We fight to make it look correct but it just doesn't feel right"
        code={`diff
      .thumb {
        margin: 3px;
      }

      +.preview .thumb {
      +  margin: 0;
      +}
      `}>
        <Box
          key="asd"
          background="overlay"
          shadow="overlay"
          css={[styles.noWrap, styles.align, styles.zoom]}
          display="inline flex"
          borderRadius="default">
          <Box
            css={[styles.card]}
            paddingX="regular"
            display="inline flex"
            background="neutralSubtle">
            <Image alt="Cute cat" placeholder="blur" objectFit="cover" layout="fill" src={yuki3} />
          </Box>

          <Stack padding="medium">
            <Text weight="bold" color="success" size="smallest">
              98% match
            </Text>
            <Text size="smallest" color="medium">
              Cute · Fluffy
            </Text>
          </Stack>
        </Box>
      </Step>
      <Step
        description="But it works so we ship and move on"
        code={`css
        .thumb {
          margin: 3px;
        }

        .preview .thumb {
          margin: 0;
        }
      `}>
        <Box
          key="asd"
          background="overlay"
          shadow="overlay"
          css={[styles.noWrap, styles.align]}
          display="inline flex"
          borderRadius="default">
          <Box
            css={[styles.card]}
            paddingX="regular"
            display="inline flex"
            background="neutralSubtle">
            <Image alt="Cute cat" placeholder="blur" objectFit="cover" layout="fill" src={yuki3} />
          </Box>

          <Stack padding="medium">
            <Text weight="bold" color="success" size="smallest">
              98% match
            </Text>
            <Text size="smallest" color="medium">
              Cute · Fluffy
            </Text>
          </Stack>
        </Box>
      </Step>
    </ExampleStepper>
  );
}

export default MarginChild;
