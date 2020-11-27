export const getEnumMembers = (myEnum: any) => {
  const members = []
  for (const enumMember in myEnum) {
    if (!isNaN(+enumMember)) {
      members.push(myEnum[enumMember])
    }
  }
  return members
}
