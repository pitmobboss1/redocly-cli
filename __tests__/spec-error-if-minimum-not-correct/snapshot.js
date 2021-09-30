// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`E2E spec-error-if-minimum-not-correct 1`] = `

No configurations were defined in extends -- using built in recommended configuration by default.

validating /openapi.yaml...
[1] openapi.yaml:29:23 at #/paths/~1pet~1findByStatus/get/parameters/0/schema/minItems

The value of the minItems field must be greater than or equal to 0

27 | schema:
28 |   type: array
29 |   minItems: -1
   |             ^^
30 |   maxItems: -3
31 |   maxLength: -4

Error was generated by the spec rule.


[2] openapi.yaml:30:23 at #/paths/~1pet~1findByStatus/get/parameters/0/schema/maxItems

The value of the maxItems field must be greater than or equal to 0

28 | type: array
29 | minItems: -1
30 | maxItems: -3
   |           ^^
31 | maxLength: -4
32 | minLength: -2

Error was generated by the spec rule.


[3] openapi.yaml:31:24 at #/paths/~1pet~1findByStatus/get/parameters/0/schema/maxLength

The value of the maxLength field must be greater than or equal to 0

29 | minItems: -1
30 | maxItems: -3
31 | maxLength: -4
   |            ^^
32 | minLength: -2
33 | items:

Error was generated by the spec rule.


[4] openapi.yaml:32:24 at #/paths/~1pet~1findByStatus/get/parameters/0/schema/minLength

The value of the minLength field must be greater than or equal to 0

30 | maxItems: -3
31 | maxLength: -4
32 | minLength: -2
   |            ^^
33 | items:
34 |   type: string

Error was generated by the spec rule.


[5] openapi.yaml:69:27 at #/components/schemas/Dog/allOf/0/properties/packSize/multipleOf

The value of the multipleOf field must be greater than or equal to 0

67 | default: 1
68 | minimum: 1
69 | multipleOf: -5
   |             ^^
70 | maxProperties: -3
71 | minProperties: -8

Error was generated by the spec rule.


[6] openapi.yaml:70:30 at #/components/schemas/Dog/allOf/0/properties/packSize/maxProperties

The value of the maxProperties field must be greater than or equal to 0

68 |     minimum: 1
69 |     multipleOf: -5
70 |     maxProperties: -3
   |                    ^^
71 |     minProperties: -8
72 | required:

Error was generated by the spec rule.


[7] openapi.yaml:71:30 at #/components/schemas/Dog/allOf/0/properties/packSize/minProperties

The value of the minProperties field must be greater than or equal to 0

69 |     multipleOf: -5
70 |     maxProperties: -3
71 |     minProperties: -8
   |                    ^^
72 | required:
73 |   - packSize

Error was generated by the spec rule.


/openapi.yaml: validated in <test>ms

❌ Validation failed with 7 errors.
run \`openapi lint --generate-ignore-file\` to add all problems to the ignore file.


`;
