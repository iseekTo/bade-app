/** 生成无序字符串 -> 可选生成字符串的位数 */
export const disorderstr = (len: number = 5): string => {
    return ''.
        slice
        .call(Math.random() * 5)
        .replace('.', '')
        .slice(0, len)
}