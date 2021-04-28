// Namespacing Patterns: https://addyosmani.com/blog/essential-js-namespacing/#beginners
namespace StringUtility {
    export const ToCapital = (str: string): string => str.toUpperCase();
    export const SubString = (str: string, from: number, length: number = 0): string => str.substr(from, length);
}
