class MedianFinder {
    constructor() {
        this.minH = new Heap();
        this.maxH = new Heap(false);
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        // maxH < minH

        //  this.maxH.insert(num);

        if (this.maxH.size() === 0 || num < this.maxH.peek()) {
            this.maxH.insert(num);
        } else {
            this.minH.insert(num);
        }

        // maxH最多比minH多一个元素

        if (this.maxH.size() > this.minH.size() + 1) {
            this.minH.insert(this.maxH.remove());
        }

        if (this.minH.size() > this.maxH.size()) {
            this.maxH.insert(this.minH.remove());
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        if (this.maxH.size() === this.minH.size()) {
            return (this.maxH.peek() + this.minH.peek()) / 2;
        }

        return this.maxH.peek();
    }
}

class Heap {
    constructor(isMin = true) {
        this.data = [null];
        if (isMin) {
            this.cmp = (i, j) => this.data[i] < this.data[j];
        } else {
            this.cmp = (i, j) => this.data[i] > this.data[j];
        }
    }

    size() {
        return this.data.length - 1;
    }

    peek() {
        return this.data[1];
    }

    swap(i, j) {
        [this.data[i], this.data[j]] = [this.data[j], this.data[i]];
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
            if (tmp === idx) break;
            this.swap(idx, tmp);
            idx = tmp;
        }
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
}
