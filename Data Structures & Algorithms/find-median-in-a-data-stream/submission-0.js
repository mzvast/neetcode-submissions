class MedianFinder {
    constructor() {
        // MaxHeap /| 存储小的一半
        // MinHeap   |\ 存储大的一半
        // move item between 2 heaps
        // maxH的个数最多比minH多一个
        // 如果size是奇数，返回maxH的top
        // 如果size是偶数，返回(maxH top + minH top) / 2
        // add的时候先跟minH top比较
        // 每次add完根据数量再平衡

        this.minH = new Heap(true);
        this.maxH = new Heap(false);
        this.size = 0;
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        this.size += 1;
        if (this.maxH.size() === 0 || (this.maxH.size() > 0 && num <= this.maxH.peek())) {
            this.maxH.insert(num);
        } else {
            this.minH.insert(num);
        }

        if (this.maxH.size() > this.minH.size() + 1) {
            this.minH.insert(this.maxH.remove());
        }

        if(this.minH.size()> this.maxH.size()){
            const ret = this.minH.remove()
            this.maxH.insert(ret);
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        if(this.size % 2 === 1) return this.maxH.peek()
        return (this.minH.peek() + this.maxH.peek()) / 2;
    }
}

class Heap {
    constructor(isMin = true) {
        this.data = [null];
        if (isMin) {
            this.cmp = (a, b) => this.data[a] < this.data[b];
        } else {
            this.cmp = (a, b) => this.data[a] > this.data[b];
        }
    }

    size() {
        return this.data.length - 1;
    }

    swap(i, j) {
        [this.data[i], this.data[j]] = [this.data[j], this.data[i]];
    }

    insert(x) {
        this.data.push(x);
        this.swim();
    }

    remove() {
        this.swap(1, this.data.length - 1);

        const ret = this.data.pop();

        this.sink();

        return ret;
    }

    swim() {
        let idx = this.data.length - 1;
        while (true) {
            let pid = idx >> 1;
            if (pid > 0 && this.cmp(idx, pid)) {
                this.swap(idx, pid);
                idx = pid;
            } else break;
        }
    }

    sink() {
        let idx = 1;
        while (idx * 2 < this.data.length) {
            let leftIdx = idx * 2,
                rightIdx = leftIdx + 1,
                tmp = idx;
            if (this.cmp(leftIdx, tmp)) tmp = leftIdx;
            if (rightIdx < this.data.length && this.cmp(rightIdx, tmp)) tmp = rightIdx;
            if (idx === tmp) break;
            this.swap(idx, tmp);
            idx = tmp;
        }
    }

    peek() {
        return this.data[1];
    }
}
