function solution(blocks, rule) {
  let answer = [];
  for (let block of blocks) {
    answer.push(블록순서체크(block, rule));
  }
  return answer;
}

function 블록순서체크(block, rule) {
  let flag = 0;

  for (let b of block) {
    if (rule.includes(b)) {
      if (flag > rule.indexOf(b)) {
        return "불가능";
      }

      flag = rule.indexOf(b);
    }
  }

  return "가능";
}

const blocks = ["ABCDEF", "BCAD", "ADEFQRX", "BEDFG", "AEBFDGCH", "ACCCD"];
const rule = "ABD";

console.log(solution(blocks, rule));
//["가능", "불가능", "가능", "가능", "불가능"]
