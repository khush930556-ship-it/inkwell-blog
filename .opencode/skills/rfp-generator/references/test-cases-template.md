# Test cases: <Requirement Title>

| Field | Value |
| --- | --- |
| Related requirements | `<requirement folder name>` |
| Created | <YYYY-MM-DD> |
| Environment | <dev / staging / prod> |

## Test case format

Each case has an ID, preconditions, steps, expected result, and the requirement
it covers. Use one row per case.

| ID | Title | Requirement | Preconditions | Steps | Expected result | Priority |
| --- | --- | --- | --- | --- | --- | --- |
| TC-001 | <short title> | FR-001 | <setup needed> | 1. <step><br>2. <step> | <observable expected result> | High |
| TC-002 | <short title> | FR-001 | <setup needed> | 1. <step> | <observable expected result> | Medium |

## Coverage checklist

- [ ] Happy path covered
- [ ] Invalid / error inputs covered
- [ ] Boundary and edge cases covered
- [ ] Permissions / access control covered
- [ ] Non-functional requirements verified

## Notes

<Any setup scripts, fixtures, or data needed to run the tests.>
