import { outdent } from 'outdent';
import { lintDocument } from '../../../lint';
import { parseYamlToDocument, replaceSourceWithRef, makeConfig } from '../../../../__tests__/utils';
import { BaseResolver } from '../../../resolve';

describe('Oas3 oas3-no-server-example.com', () => {
  it('oas3-no-server-example.com: should report on server object with "example.com" url', async () => {
    const document = parseYamlToDocument(
      outdent`
          openapi: 3.0.0
          servers:
            - url: example.com
        `,
      'foobar.yaml',
    );

    const results = await lintDocument({
      externalRefResolver: new BaseResolver(),
      document,
      config: await makeConfig({ 'no-server-example.com': 'error' }),
    });

    expect(replaceSourceWithRef(results)).toMatchInlineSnapshot(`
      Array [
        Object {
          "location": Array [
            Object {
              "pointer": "#/servers/0/url",
              "reportOnKey": false,
              "source": "foobar.yaml",
            },
          ],
          "message": "Server \`url\` should not point at example.com.",
          "ruleId": "no-server-example.com",
          "severity": "error",
          "suggest": Array [],
        },
      ]
    `);
  });

  it('oas3-no-server-example.com: should not report on server object with not "example.com" url', async () => {
    const document = parseYamlToDocument(
      outdent`
          openapi: 3.0.0
          servers:
            - url: not-example.com
        `,
      'foobar.yaml',
    );

    const results = await lintDocument({
      externalRefResolver: new BaseResolver(),
      document,
      config: await makeConfig({ 'no-server-example.com': 'error' }),
    });

    expect(replaceSourceWithRef(results)).toMatchInlineSnapshot(`Array []`);
  });
});
