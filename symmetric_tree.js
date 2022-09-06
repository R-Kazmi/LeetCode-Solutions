



//given a binary tree, check if its symmetric at its center


//a tree is symmetric if the left and right subtrees are mirror images of each other
//isSymmetricRecursion will return false if any value is mismatched or one side of tree is null and the other is not
//it will run recursion until it reaches a leaf node, and then return true if the leaf node is a mirror image of itself.

function isSymmetricRecursion(left, right) {
    if (left === null && right === null) {
        return true;
    }
    if (left === null || right === null) {
        return false;
    }
    if (left.val !== right.val) {
        return false;
    }
    return isSymmetricRecursion(left.left, right.right) && isSymmetricRecursion(left.right, right.left);
}

function symmetricTreeCall(tree) {
    if (tree === null) {
        return true;
    }
    return isSymmetricRecursion(tree.left, tree.right);
}

const OGtree = {
    val: 5,
    left: {
        val: 6,
        left: {
            val: 3,
            left: null,
            right: null
        },
        right: {
            val: 9,
            left: null,
            right: null
        }
    },
    right: {
        val: 6,
        left: {
            val: 9,
            left: null,
            right: null
        },
        right: {
            val: 3,
            left: null,
            right: null
        }
    }
}

console.log(symmetricTreeCall(OGtree));